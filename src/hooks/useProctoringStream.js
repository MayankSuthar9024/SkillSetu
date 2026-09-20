import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useProctoringStream
 * Custom hook managing camera stream, real-time computer vision / MediaPipe
 * multi-face & face absence detection, motion/secondary device heuristics,
 * integrity violation audit ledger, and degradation status.
 */
export function useProctoringStream({
  isActive = false,
  onDisqualify,
  onTabSwitch,
  allowDegradedMode = false
} = {}) {
  const [stream, setStream] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [cameraDisconnected, setCameraDisconnected] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [rapidMovementDetected, setRapidMovementDetected] = useState(false);

  // Proctoring status: 'ok' | 'degraded' | 'blocked'
  const [proctoringStatus, setProctoringStatus] = useState('blocked');

  // Face detection states
  const [faceAbsent, setFaceAbsent] = useState(false);
  const [faceAbsentCountdown, setFaceAbsentCountdown] = useState(null);
  const [faceCount, setFaceCount] = useState(0);
  const [multipleFacesDetected, setMultipleFacesDetected] = useState(false);

  // Audit violations ledger
  const [proctoringViolations, setProctoringViolations] = useState([]);

  const streamRef = useRef(null);
  const motionCanvasRef = useRef(null);
  const prevFrameDataRef = useRef(null);
  const motionAnimFrameRef = useRef(null);
  const consecutiveViolationsRef = useRef(0);
  const consecutiveMultiFacesRef = useRef(0);
  const hasDisqualifiedRef = useRef(false);

  const faceDetectorRef = useRef(null);
  const mediaPipeDetectorRef = useRef(null);
  const faceAbsentStartTimeRef = useRef(null);
  const mediaPipeResultRef = useRef({ count: 0, hasFaces: false });

  // Record a standardized violation
  const recordViolation = useCallback((type, severity, message) => {
    const violation = {
      id: `viol-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      type,
      severity, // 'low' | 'medium' | 'high'
      message,
      timestamp: new Date().toISOString()
    };
    setProctoringViolations(prev => [...prev.slice(-49), violation]);
    console.warn(`[Proctoring Violation - ${severity.toUpperCase()}] ${type}: ${message}`);
    return violation;
  }, []);

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
    consecutiveMultiFacesRef.current = 0;

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
      setProctoringStatus('ok');
      setSessionStartTime(new Date().toISOString());

      // Monitor camera track state (ended / muted)
      const videoTrack = mediaStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.onended = () => {
          setCameraDisconnected(true);
          setCameraActive(false);
          setProctoringStatus(allowDegradedMode ? 'degraded' : 'blocked');
          recordViolation('CAMERA_LOST', 'high', 'Camera stream disconnected or disabled during active test.');
          if (isActive && !hasDisqualifiedRef.current && onDisqualify && !allowDegradedMode) {
            hasDisqualifiedRef.current = true;
            onDisqualify('Camera stream disconnected or disabled during test.');
          }
        };
        videoTrack.onmute = () => {
          setCameraDisconnected(true);
          setCameraActive(false);
          recordViolation('CAMERA_LOST', 'medium', 'Camera video feed muted by operating system.');
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
        message = 'Camera permission was denied. Please allow camera access in browser settings.';
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        message = 'No webcam was detected on this device. Please connect a working camera.';
      } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
        message = 'Webcam is currently in use by another application or tab.';
      }
      setCameraError(message);
      setCameraActive(false);
      setProctoringStatus(allowDegradedMode ? 'degraded' : 'blocked');
      setIsRequesting(false);
      return { success: false, error: message };
    }
  }, [isActive, onDisqualify, allowDegradedMode, recordViolation]);

  // Enable degraded mode if candidate has no camera or permission issue
  const enableDegradedMode = useCallback(() => {
    setProctoringStatus('degraded');
    recordViolation('DEGRADED_MODE', 'medium', 'Assessment running in unmonitored / degraded proctoring mode.');
  }, [recordViolation]);

  // Tab switch listener - automatically logs and flags tab switching
  useEffect(() => {
    if (!isActive) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prev => {
          const next = prev + 1;
          recordViolation('TAB_SWITCH', 'high', `Tab switch #${next} detected. Academic window unfocused.`);
          if (onTabSwitch) onTabSwitch(next);
          return next;
        });

        // If threshold exceeded (> 2 tab switches), trigger disqualification
        if (tabSwitchCount >= 2 && !hasDisqualifiedRef.current && onDisqualify) {
          hasDisqualifiedRef.current = true;
          onDisqualify('Tab switch limit exceeded! Academic test policy strictly prohibits switching windows.');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isActive, onDisqualify, onTabSwitch, tabSwitchCount, recordViolation]);

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
          const count = results?.detections?.length || 0;
          mediaPipeResultRef.current = { count, hasFaces: count > 0 };
        });
        mediaPipeDetectorRef.current = faceDetection;
      } else if (typeof window !== 'undefined' && 'FaceDetector' in window) {
        // Native Shape Detection API
        // eslint-disable-next-line no-undef
        faceDetectorRef.current = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 5 });
      }
    } catch (e) {
      console.warn('[Proctoring] Neural face detector initialization fallback:', e);
    }
  }, []);

  // Computer Vision motion, face presence & multiple face analyzer
  useEffect(() => {
    if (!isActive || !stream) {
      if (motionAnimFrameRef.current) {
        cancelAnimationFrame(motionAnimFrameRef.current);
        motionAnimFrameRef.current = null;
      }
      faceAbsentStartTimeRef.current = null;
      setFaceAbsent(false);
      setFaceAbsentCountdown(null);
      setMultipleFacesDetected(false);
      setFaceCount(0);
      return;
    }

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
      motionCanvasRef.current.width = 64;
      motionCanvasRef.current.height = 48;
    }
    const canvas = motionCanvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    let lastCheckTime = performance.now();
    let isDetectingFace = false;

    const analyzeFrame = async () => {
      if (!streamRef.current) return;

      const activeVideo = document.getElementById('proctor-pip-video') || video;
      const now = performance.now();

      // Sample every ~250ms
      if (now - lastCheckTime >= 250 && activeVideo && (activeVideo.readyState >= 2 || activeVideo.currentTime > 0)) {
        lastCheckTime = now;
        try {
          ctx.drawImage(activeVideo, 0, 0, 64, 48);
          const currentFrame = ctx.getImageData(0, 0, 64, 48);
          const currentPixels = currentFrame.data;

          // 1. Check Face Presence & Multi-face via MediaPipe or Native FaceDetector or fallback
          if (mediaPipeDetectorRef.current) {
            mediaPipeDetectorRef.current.send({ image: activeVideo }).catch(() => {});
            const res = mediaPipeResultRef.current;
            evaluateFaceState(res.count, now);
          } else if (faceDetectorRef.current && !isDetectingFace) {
            isDetectingFace = true;
            faceDetectorRef.current.detect(canvas)
              .then(faces => {
                isDetectingFace = false;
                const count = faces ? faces.length : 0;
                evaluateFaceState(count, now);
              })
              .catch(() => {
                isDetectingFace = false;
                const fallbackResult = fallbackFaceClusterDetection(currentPixels);
                evaluateFaceState(fallbackResult.count, now);
              });
          } else {
            const fallbackResult = fallbackFaceClusterDetection(currentPixels);
            evaluateFaceState(fallbackResult.count, now);
          }

          // 2. Motion and Device Screen Glare Analysis
          if (prevFrameDataRef.current) {
            let diffScore = 0;
            let brightVarianceCount = 0;
            const totalPixels = 64 * 48;

            for (let i = 0; i < currentPixels.length; i += 4) {
              const rDiff = Math.abs(currentPixels[i] - prevFrameDataRef.current[i]);
              const gDiff = Math.abs(currentPixels[i + 1] - prevFrameDataRef.current[i + 1]);
              const bDiff = Math.abs(currentPixels[i + 2] - prevFrameDataRef.current[i + 2]);
              const avgDiff = (rDiff + gDiff + bDiff) / 3;

              if (avgDiff > 40) diffScore++;

              const luminance = 0.299 * currentPixels[i] + 0.587 * currentPixels[i + 1] + 0.114 * currentPixels[i + 2];
              if (luminance > 235 && avgDiff > 35) brightVarianceCount++;
            }

            const motionRatio = diffScore / totalPixels;
            const screenGlowRatio = brightVarianceCount / totalPixels;

            const isRapidMotion = motionRatio > 0.45;
            const isDeviceGlow = screenGlowRatio > 0.10;

            if (isRapidMotion || isDeviceGlow) {
              consecutiveViolationsRef.current += 1;
              setRapidMovementDetected(true);

              if (consecutiveViolationsRef.current === 3) {
                recordViolation(
                  isDeviceGlow ? 'SECONDARY_DEVICE' : 'ERRATIC_MOTION',
                  'medium',
                  isDeviceGlow ? 'Unauthorized illuminated secondary device detected in frame.' : 'Rapid erratic head/body movement detected.'
                );
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

    // Evaluates spatial clusters to detect face presence and identify multiple distinct faces
    function fallbackFaceClusterDetection(pixels) {
      let leftCluster = 0;
      let centerCluster = 0;
      let rightCluster = 0;

      for (let y = 10; y < 38; y++) {
        for (let x = 8; x < 56; x++) {
          const idx = (y * 64 + x) * 4;
          const r = pixels[idx];
          const g = pixels[idx + 1];
          const b = pixels[idx + 2];

          const Y  = 0.299 * r + 0.587 * g + 0.114 * b;
          const Cr = 0.5 * r - 0.4187 * g - 0.0813 * b + 128;
          const Cb = -0.1687 * r - 0.3313 * g + 0.5 * b + 128;

          const isSkin = (Cr >= 135 && Cr <= 170) && (Cb >= 85 && Cb <= 126) && (Y >= 40 && Y <= 220);
          const isPhysiologicalSkin = isSkin && (r > g + 8) && (g > b);

          if (isPhysiologicalSkin) {
            if (x < 24) leftCluster++;
            else if (x <= 40) centerCluster++;
            else rightCluster++;
          }
        }
      }

      const hasCenterFace = centerCluster >= 70;
      const hasLeftFace = leftCluster >= 65;
      const hasRightFace = rightCluster >= 65;

      let count = 0;
      if (hasCenterFace) count++;
      if (hasLeftFace && !hasCenterFace) count++;
      if (hasLeftFace && hasCenterFace && leftCluster > 90) count++;
      if (hasRightFace && hasCenterFace && rightCluster > 90) count++;

      return { count: Math.min(count, 3), hasFaces: count > 0 };
    }

    // Handles face presence and multi-face count
    function evaluateFaceState(count, timestamp) {
      setFaceCount(count);

      // 1. Multiple faces check (> 1 face)
      if (count > 1) {
        consecutiveMultiFacesRef.current += 1;
        setMultipleFacesDetected(true);
        if (consecutiveMultiFacesRef.current === 3) {
          recordViolation('MULTIPLE_FACES', 'high', `Multiple individuals (${count} faces) detected in camera frame.`);
        }
      } else {
        consecutiveMultiFacesRef.current = 0;
        setMultipleFacesDetected(false);
      }

      // 2. Face absent check (0 faces)
      if (count > 0) {
        faceAbsentStartTimeRef.current = null;
        setFaceAbsent(false);
        setFaceAbsentCountdown(null);
      } else {
        if (!faceAbsentStartTimeRef.current) {
          faceAbsentStartTimeRef.current = timestamp;
        }
        const elapsed = timestamp - faceAbsentStartTimeRef.current;
        const remainingSeconds = Math.max(0, Math.ceil((4000 - elapsed) / 1000));
        setFaceAbsent(true);
        setFaceAbsentCountdown(remainingSeconds);

        // Record violation when face disappears for > 2 seconds
        if (elapsed >= 2000 && remainingSeconds === 2) {
          recordViolation('FACE_ABSENT', 'medium', 'Candidate face disappeared from camera viewport.');
        }

        // Auto-disqualify if face absent > 4 seconds and not in degraded mode
        if (elapsed >= 4000) {
          if (!hasDisqualifiedRef.current && onDisqualify && proctoringStatus === 'ok') {
            hasDisqualifiedRef.current = true;
            onDisqualify('Face disappeared from camera view for more than 4 seconds.');
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
  }, [isActive, stream, onDisqualify, proctoringStatus, recordViolation]);

  // Clean teardown on unmount
  useEffect(() => {
    return () => {
      stopStream();
    };
  }, [stopStream]);

  // Generate standardized proctoring metadata payload
  const getProctoringMetadata = useCallback((disqualifiedReason = null) => {
    return {
      proctoring_metadata: {
        proctoring_status: proctoringStatus,
        camera_verified: Boolean(cameraActive || sessionStartTime),
        tab_switch_count: tabSwitchCount,
        disqualified: Boolean(disqualifiedReason),
        disqualification_reason: disqualifiedReason,
        face_absent: faceAbsent,
        multiple_faces_detected: multipleFacesDetected,
        total_violations_recorded: proctoringViolations.length,
        violations: proctoringViolations,
        session_started_at: sessionStartTime || new Date().toISOString(),
        session_ended_at: new Date().toISOString()
      }
    };
  }, [cameraActive, sessionStartTime, tabSwitchCount, faceAbsent, multipleFacesDetected, proctoringStatus, proctoringViolations]);

  return {
    stream,
    cameraActive,
    cameraError,
    isRequesting,
    tabSwitchCount,
    cameraDisconnected,
    rapidMovementDetected,
    proctoringStatus,
    faceAbsent,
    faceAbsentCountdown,
    faceCount,
    multipleFacesDetected,
    proctoringViolations,
    requestCamera,
    stopStream,
    enableDegradedMode,
    recordViolation,
    getProctoringMetadata
  };
}
