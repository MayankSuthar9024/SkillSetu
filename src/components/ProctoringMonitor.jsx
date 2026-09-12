import React, { useEffect, useRef, useState } from 'react';
import { Camera, AlertTriangle, ShieldCheck, VideoOff, Maximize2, Minimize2, XCircle, Smartphone } from 'lucide-react';

/**
 * ProctoringPiP
 * Persistent floating camera PiP box with live video feed and status indicators.
 */
export function ProctoringPiP({
  stream,
  cameraActive,
  tabSwitchCount,
  rapidMovementDetected,
  faceAbsent,
  faceAbsentCountdown,
  onReEnableCamera
}) {
  const videoRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <aside
      aria-label="Live Proctoring Camera Preview"
      className="fixed top-4 right-4 z-50 pointer-events-auto select-none"
    >
      <div className={`w-40 sm:w-48 bg-slate-900/95 backdrop-blur-md rounded-xl border shadow-2xl overflow-hidden transition-all duration-300 ring-1 ring-black/20 ${faceAbsent ? 'border-red-500/80 ring-2 ring-red-500/50' : 'border-emerald-500/40'}`}>
        {/* Header Bar */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-950/80 border-b border-slate-800 text-[11px] font-medium text-slate-200">
          <div className="flex items-center gap-1.5 truncate">
            {cameraActive ? (
              faceAbsent ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[10px] font-bold text-red-400 truncate">Face Missing!</span>
                </>
              ) : (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 truncate">Live Monitoring</span>
                </>
              )
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="text-[10px] font-semibold text-red-400 truncate">Camera Off</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsMinimized(prev => !prev)}
              aria-label={isMinimized ? 'Expand camera preview' : 'Minimize camera preview'}
              className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            >
              {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Video Body */}
        {!isMinimized && (
          <div className="relative aspect-4/3 w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            {cameraActive && stream ? (
              <>
                <video
                  id="proctor-pip-video"
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover -scale-x-100"
                />

                {/* Face Missing Visual Warning Banner */}
                {faceAbsent && (
                  <div className="absolute inset-0 bg-red-950/70 backdrop-blur-xs flex flex-col items-center justify-center p-2 text-center z-10 animate-pulse">
                    <AlertTriangle className="w-5 h-5 text-red-400 mb-1" />
                    <span className="text-[10px] font-bold text-white leading-tight">Face Not Detected!</span>
                    <span className="text-[11px] font-extrabold text-red-300 font-mono mt-0.5">
                      Disqualify in {faceAbsentCountdown ?? 3}s
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="p-3 text-center space-y-1.5 flex flex-col items-center justify-center">
                <VideoOff className="w-6 h-6 text-red-400" />
                <p className="text-[10px] text-red-300 font-semibold leading-tight">Stream Inactive</p>
                {onReEnableCamera && (
                  <button
                    type="button"
                    onClick={onReEnableCamera}
                    className="mt-1 px-2 py-1 text-[10px] bg-red-600 hover:bg-red-500 text-white rounded font-bold transition-colors"
                  >
                    Re-enable
                  </button>
                )}
              </div>
            )}

            {/* Bottom Floating Stats Tag */}
            <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] text-slate-300 pointer-events-none">
              <span className="flex items-center gap-1 font-mono">
                <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                Proctored
              </span>
              {rapidMovementDetected && !faceAbsent && (
                <span className="text-red-400 font-bold font-mono animate-pulse">
                  Motion Warning
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

/**
 * ProctoringPermissionModal
 * Simplified, clean modal requesting camera permission without excessive information.
 */
export function ProctoringPermissionModal({
  isOpen,
  onGrantAccess,
  onCancel,
  errorMessage,
  isRequesting
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 relative overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600" />

        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              Camera Permission Required
            </h3>
            <p className="text-xs text-slate-500">SkillSetu Test Proctoring</p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 leading-relaxed">
          <p className="font-medium text-slate-800">
            Please grant camera access to begin this assessment.
          </p>
          <p className="text-xs text-slate-500 mt-1.5 leading-normal">
            Your webcam is monitored to ensure test integrity. Switching tabs, fast erratic movements, or secondary device usage will automatically disqualify the test.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Camera access is required</p>
              <p className="text-red-700 mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 pt-1">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          )}
          <button
            type="button"
            onClick={onGrantAccess}
            disabled={isRequesting}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-400 text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>{isRequesting ? 'Connecting...' : 'Grant Camera & Start'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * DisqualificationModal
 * Triggered automatically when integrity rule is violated (tab switch, fast erratic movement, secondary device detected).
 */
export function DisqualificationModal({
  isOpen,
  reason = 'Tab switch detected during active assessment.',
  onReturn
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border-2 border-red-500 space-y-5 text-center relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <XCircle className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-100 text-red-800">
            Assessment Terminated
          </span>
          <h4 className="text-lg font-bold text-slate-900">
            Test Automatically Disqualified
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
            {reason}
          </p>
        </div>

        <div className="p-3.5 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-900 text-left space-y-1">
          <p className="font-bold flex items-center gap-1.5 text-red-950">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
            Integrity Violation Logged:
          </p>
          <p className="text-slate-600 text-[11px] leading-normal">
            This attempt has been flagged and dismissed. You may re-attempt the assessment under full compliance with camera monitoring guidelines.
          </p>
        </div>

        <button
          type="button"
          onClick={onReturn}
          className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
        >
          Return to Skills Overview
        </button>
      </div>
    </div>
  );
}

/**
 * CameraDisconnectedBanner
 * Alert banner when camera track is stopped or muted unexpectedly.
 */
export function CameraDisconnectedBanner({ onReEnable }) {
  return (
    <div className="sticky top-0 z-40 bg-red-600 text-white text-xs font-semibold px-4 py-2.5 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2 max-w-2xl mx-auto">
        <AlertTriangle className="w-4 h-4 shrink-0 animate-bounce" />
        <span>Camera disconnected. Please re-enable to continue with valid proctoring.</span>
      </div>
      {onReEnable && (
        <button
          type="button"
          onClick={onReEnable}
          className="px-3 py-1 bg-white text-red-700 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors ml-4 shrink-0 cursor-pointer"
        >
          Re-enable Camera
        </button>
      )}
    </div>
  );
}

