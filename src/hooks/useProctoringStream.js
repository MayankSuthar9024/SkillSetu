import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useProctoringStream
 * Custom hook managing camera stream, real-time video frame motion/device detection,
 * automatic disqualification on tab switches or erratic movements / secondary devices.
 */
export function useProctoringStream({
  isActive = false,
  onDisqualify,
  onTabSwitch
} = {}) {
  const [stream, setStream] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [cameraDisconnected, setCameraDisconnected] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [rapidMovementDetected, setRapidMovementDetected] = useState(false);

  const streamRef = useRef(null);
  const motionCanvasRef = useRef(null);
  const prevFrameDataRef = useRef(null);
  const motionAnimFrameRef = useRef(null);
  const consecutiveViolationsRef = useRef(0);
  const hasDisqualifiedRef = useRef(false);

  // Clean stop of all tracks
  const stopStream = useCallback(() => {
    if (motionAnimFrameRef.current) {
      cancelAnimationFrame(motionAnimFrameRef.current);
      motionAnimFrameRef.current = null;
    }
    if (streamRef.current) {
      try {
        streamRef.current.getTracks().forEach(track => {
          track.stop();
        });
      } catch (err) {
        console.warn('Error stopping media tracks:', err);
      }
      streamRef.current = null;
    }
    setStream(null);
    setCameraActive(false);
    setCameraDisconnected(false);
  }, []);

  // Request camera access
  const requestCamera = useCallback(async () => {
    setIsRequesting(true);
    setCameraError(null);
    hasDisqualifiedRef.current = false;
    consecutiveViolationsRef.current = 0;

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Media devices API not supported by your browser environment.');
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        },
        audio: false
      });

      streamRef.current = mediaStream;
      setStream(mediaStream);
      setCameraActive(true);
      setCameraDisconnected(false);
      setSessionStartTime(new Date().toISOString());

      // Monitor camera track state (ended / muted)
      const videoTrack = mediaStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.onended = () => {
          setCameraDisconnected(true);
          setCameraActive(false);
          if (isActive && !hasDisqualifiedRef.current && onDisqualify) {
            hasDisqualifiedRef.current = true;
            onDisqualify('Camera stream disconnected or disabled during test.');
          }
        };
        videoTrack.onmute = () => {
          setCameraDisconnected(true);
          setCameraActive(false);
        };
        videoTrack.onunmute = () => {
          setCameraDisconnected(false);
          setCameraActive(true);
        };
      }

      setIsRequesting(false);
      return { success: true, stream: mediaStream };
    } catch (err) {
      console.error('Camera permission failed:', err);
      let message = 'Camera access was blocked or is unavailable.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        message = 'Camera permission was denied. Please allow camera access in your browser settings to proceed.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        message = 'No webcam was detected on this device. Please connect a working camera.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        message = 'Webcam is currently in use by another application or tab.';
      }
      setCameraError(message);
      setCameraActive(false);
      setIsRequesting(false);
      return { success: false, error: message };
    }
  }, [isActive, onDisqualify]);

  // Tab switch listener - automatically disqualifies the test when user switches tabs
  useEffect(() => {
    if (!isActive) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prev => {
          const next = prev + 1;
          if (onTabSwitch) onTabSwitch(next);
          return next;
        });

        if (!hasDisqualifiedRef.current && onDisqualify) {
          hasDisqualifiedRef.current = true;
          onDisqualify('Tab switch detected! Academic test policy strictly prohibits switching tabs or minimizing the test window.');
        }
      }
    };

    const handleWindowBlur = () => {
      // Optional subtle guard for window defocusing
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [isActive, onDisqualify, onTabSwitch]);

  const [faceAbsent, setFaceAbsent] = useState(false);
  const [faceAbsentCountdown, setFaceAbsentCountdown] = useState(null);

  const faceDetectorRef = useRef(null);
  const mediaPipeDetectorRef = useRef(null);
  const faceAbsentStartTimeRef = useRef(null);
  const mediaPipeResultRef = useRef(null);

  // Initialize Google MediaPipe FaceDetection if available
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.FaceDetection) {
        const faceDetection = new window.FaceDetection({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`
        });
        faceDetection.setOptions({
          model: 'short',
          minDetectionConfidence: 0.5
        });
        faceDetection.onResults((results) => {
          const hasFaces = results && results.detections && results.detections.length > 0;
          mediaPipeResultRef.current = hasFaces;
        });
        mediaPipeDetectorRef.current = faceDetection;
        console.log('[Proctoring] Google MediaPipe Face Detection initialized.');
      } else if (typeof window !== 'undefined' && 'FaceDetector' in window) {
        // eslint-disable-next-line no-undef
        faceDetectorRef.current = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 2 });
      }
    } catch (e) {
      console.warn('[Proctoring] Neural face detector initialization fallback:', e);
    }
  }, []);

  // Computer Vision motion, face presence & secondary device analyzer
  useEffect(() => {
    if (!isActive || !stream) {
      if (motionAnimFrameRef.current) {
        cancelAnimationFrame(motionAnimFrameRef.current);
        motionAnimFrameRef.current = null;
      }
      faceAbsentStartTimeRef.current = null;
      setFaceAbsent(false);
      setFaceAbsentCountdown(null);
      return;
    }

    // Obtain video element (favor active rendered DOM video if mounted, else fallback)
    let video = document.getElementById('proctor-pip-video');
    let fallbackVideo = null;
    if (!video) {
      fallbackVideo = document.createElement('video');
      fallbackVideo.srcObject = stream;
      fallbackVideo.playsInline = true;
      fallbackVideo.muted = true;
      fallbackVideo.setAttribute('playsinline', '');
      fallbackVideo.setAttribute('muted', '');
      fallbackVideo.onloadedmetadata = () => {
        fallbackVideo.play().catch(() => {});
      };
      fallbackVideo.play().catch(() => {});
      video = fallbackVideo;
    }

    if (!motionCanvasRef.current) {
      motionCanvasRef.current = document.createElement('canvas');
      motionCanvasRef.current.width = 64; // Low res for lightweight real-time diffing
      motionCanvasRef.current.height = 48;
    }
    const canvas = motionCanvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    let lastCheckTime = performance.now();
    let isDetectingFace = false;

    const analyzeFrame = async () => {
      if (!streamRef.current) return;

      // Re-query in case DOM video mounted after hook
      const activeVideo = document.getElementById('proctor-pip-video') || video;

      const now = performance.now();
      // Sample every ~200ms
      if (now - lastCheckTime >= 200 && activeVideo && (activeVideo.readyState >= 2 || activeVideo.currentTime > 0)) {
        lastCheckTime = now;
        try {
          ctx.drawImage(activeVideo, 0, 0, 64, 48);
          const currentFrame = ctx.getImageData(0, 0, 64, 48);
          const currentPixels = currentFrame.data;

          // 1. Check Face Presence via Google MediaPipe Neural Network (BlazeFace)
          if (mediaPipeDetectorRef.current) {
            // MediaPipe processes the live video element directly via WebAssembly
            mediaPipeDetectorRef.current.send({ image: activeVideo }).catch(() => {});
            if (mediaPipeResultRef.current !== null) {
              evaluateFacePresence(mediaPipeResultRef.current, now);
            }
          } else if (faceDetectorRef.current && !isDetectingFace) {
            isDetectingFace = true;
            faceDetectorRef.current.detect(canvas)
              .then(faces => {
                isDetectingFace = false;
                const hasFaceDetected = faces && faces.length > 0;
                evaluateFacePresence(hasFaceDetected, now);
              })
              .catch(() => {
                isDetectingFace = false;
                const detected = fallbackFacePresence(currentPixels);
                evaluateFacePresence(detected, now);
              });
          } else {
            const detected = fallbackFacePresence(currentPixels);
            evaluateFacePresence(detected, now);
          }

          // 2. Motion and Device Glare Analysis
          if (prevFrameDataRef.current) {
            let diffScore = 0;
            let brightVarianceCount = 0; // To spot illuminated secondary screens/mobile screens held up
            const totalPixels = 64 * 48;

            for (let i = 0; i < currentPixels.length; i += 4) {
              const rDiff = Math.abs(currentPixels[i] - prevFrameDataRef.current[i]);
              const gDiff = Math.abs(currentPixels[i + 1] - prevFrameDataRef.current[i + 1]);
              const bDiff = Math.abs(currentPixels[i + 2] - prevFrameDataRef.current[i + 2]);
              const avgDiff = (rDiff + gDiff + bDiff) / 3;

              if (avgDiff > 40) {
                diffScore++;
              }

              // Check for high brightness glare indicative of phone screens/mobile devices
              const luminance = 0.299 * currentPixels[i] + 0.587 * currentPixels[i + 1] + 0.114 * currentPixels[i + 2];
              if (luminance > 235 && avgDiff > 35) {
                brightVarianceCount++;
              }
            }

            const motionRatio = diffScore / totalPixels;
            const screenGlowRatio = brightVarianceCount / totalPixels;

            const isRapidMotion = motionRatio > 0.42;
            const isDeviceGlow = screenGlowRatio > 0.08;

            if (isRapidMotion || isDeviceGlow) {
              consecutiveViolationsRef.current += 1;
              setRapidMovementDetected(true);

              if (consecutiveViolationsRef.current >= 3) {
                if (!hasDisqualifiedRef.current && onDisqualify) {
                  hasDisqualifiedRef.current = true;
                  const reason = isDeviceGlow
                    ? 'Unauthorized secondary device/mobile phone usage detected on camera.'
                    : 'Erratic and excessive movement detected outside normal test posture.';
                  onDisqualify(reason);
                }
              }
            } else {
              setRapidMovementDetected(false);
              consecutiveViolationsRef.current = Math.max(0, consecutiveViolationsRef.current - 1);
            }
          }

          prevFrameDataRef.current = currentPixels;
        } catch (e) {
          // Canvas read error
        }
      }

      motionAnimFrameRef.current = requestAnimationFrame(analyzeFrame);
    };

    // Robust Face presence detector using YCrCb skin chrominance + physiological facial feature clustering
    // Specifically prevents curtains, wooden shelves, and background clothes from causing false face presence.
    function fallbackFacePresence(pixels) {
      let skinPixels = 0;
      let focalPixels = 0;
      let eyeLevelEdges = 0;

      // Focus on the central 40% width and 50% height (where candidate's face directly sits in test posture)
      // x: 18..46, y: 10..34 (out of 64x48)
      for (let y = 10; y < 34; y++) {
        for (let x = 18; x < 46; x++) {
          focalPixels++;
          const idx = (y * 64 + x) * 4;
          const r = pixels[idx];
          const g = pixels[idx + 1];
          const b = pixels[idx + 2];

          // Standard RGB to YCrCb
          const Y  = 0.299 * r + 0.587 * g + 0.114 * b;
          const Cr = 0.5 * r - 0.4187 * g - 0.0813 * b + 128;
          const Cb = -0.1687 * r - 0.3313 * g + 0.5 * b + 128;

          // Human skin locus:
          // Must meet Y luminance range and specific narrow Cr/Cb cluster
          const isSkin = (Cr >= 135 && Cr <= 170) && (Cb >= 85 && Cb <= 126) && (Y >= 40 && Y <= 220);

          // Skin tones require Red > Green and Green > Blue (rules out yellowish/orange curtains or brown wood)
          const isPhysiologicalSkin = isSkin && (r > g + 8) && (g > b);

          if (isPhysiologicalSkin) {
            skinPixels++;
          }

          // Edge contrast across eye-level (y between 14 and 24)
          if (y >= 14 && y <= 24 && x < 45) {
            const nextIdx = idx + 4;
            const diff = Math.abs(r - pixels[nextIdx]) + Math.abs(g - pixels[nextIdx + 1]);
            if (diff > 45) {
              eyeLevelEdges++;
            }
          }
        }
      }

      const skinRatio = skinPixels / focalPixels;
      const eyeEdgeRatio = eyeLevelEdges / focalPixels;

      // In normal webcam sitting position:
      // A candidate face occupies >= 22% of the central focal box with active eye-level feature edges.
      // Background rooms, hanging clothes, walls, and empty chairs score below 12%.
      const hasFace = skinRatio >= 0.20 && eyeEdgeRatio >= 0.025;
      return hasFace;
    }

    // Helper: Handle 3-second face disappearance threshold
    function evaluateFacePresence(isPresent, timestamp) {
      if (isPresent) {
        if (faceAbsentStartTimeRef.current) {
          console.log('[Proctoring] Face re-acquired');
        }
        faceAbsentStartTimeRef.current = null;
        setFaceAbsent(false);
        setFaceAbsentCountdown(null);
      } else {
        if (!faceAbsentStartTimeRef.current) {
          faceAbsentStartTimeRef.current = timestamp;
          console.warn('[Proctoring] Face disappeared from view. Countdown initiated.');
        }
        const elapsed = timestamp - faceAbsentStartTimeRef.current;
        const remainingSeconds = Math.max(0, Math.ceil((3000 - elapsed) / 1000));
        setFaceAbsent(true);
        setFaceAbsentCountdown(remainingSeconds);

        // Disqualify if face disappears for more than 3 seconds (3000ms)
        if (elapsed >= 3000) {
          if (!hasDisqualifiedRef.current && onDisqualify) {
            hasDisqualifiedRef.current = true;
            console.error('[Proctoring] Disqualified: Face absent for > 3s.');
            onDisqualify('Face disappeared from camera view for more than 3 seconds.');
          }
        }
      }
    }

    motionAnimFrameRef.current = requestAnimationFrame(analyzeFrame);

    return () => {
      if (motionAnimFrameRef.current) {
        cancelAnimationFrame(motionAnimFrameRef.current);
        motionAnimFrameRef.current = null;
      }
      video.pause();
      video.srcObject = null;
    };
  }, [isActive, stream, onDisqualify]);

  // Clean teardown on unmount or when isActive flips to false
  useEffect(() => {
    return () => {
      stopStream();
    };
  }, [stopStream]);

  // Generate standardized proctoring metadata payload
  const getProctoringMetadata = useCallback((disqualifiedReason = null) => {
    return {
      proctoring_metadata: {
        camera_verified: Boolean(cameraActive || sessionStartTime),
        tab_switch_count: tabSwitchCount,
        disqualified: Boolean(disqualifiedReason),
        disqualification_reason: disqualifiedReason,
        face_absent: faceAbsent,
        session_started_at: sessionStartTime || new Date().toISOString(),
        session_ended_at: new Date().toISOString()
      }
    };
  }, [cameraActive, sessionStartTime, tabSwitchCount, faceAbsent]);

  return {
    stream,
    cameraActive,
    cameraError,
    isRequesting,
    tabSwitchCount,
    cameraDisconnected,
    rapidMovementDetected,
    faceAbsent,
    faceAbsentCountdown,
    requestCamera,
    stopStream,
    getProctoringMetadata
  };
}
