import React, { useEffect, useRef, useState } from 'react';
import { Camera, AlertTriangle, ShieldCheck, VideoOff, Maximize2, Minimize2, XCircle, Users, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * ProctoringPiP
 * Persistent floating camera PiP box with live video feed, multi-face warning,
 * face absence countdown, and accessibility aria-live notifications.
 */
export function ProctoringPiP({
  stream,
  cameraActive,
  tabSwitchCount = 0,
  rapidMovementDetected = false,
  faceAbsent = false,
  faceAbsentCountdown = null,
  faceCount = 1,
  multipleFacesDetected = false,
  proctoringStatus = 'ok',
  violationsCount = 0,
  onReEnableCamera
}) {
  const videoRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const hasCriticalWarning = faceAbsent || multipleFacesDetected;

  return (
    <aside
      aria-label="Live Proctoring Camera Preview"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 pointer-events-auto select-none"
    >
      <div 
        className={`w-36 sm:w-44 bg-slate-900/95 backdrop-blur-md rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ring-1 ring-black/30 ${
          faceAbsent
            ? 'border-red-500/90 ring-2 ring-red-500/60'
            : multipleFacesDetected
            ? 'border-amber-500/90 ring-2 ring-amber-500/60'
            : proctoringStatus === 'degraded'
            ? 'border-slate-500/80 ring-1 ring-slate-400/40'
            : 'border-emerald-500/50'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-950/90 border-b border-slate-800/80 text-[11px] font-medium text-slate-200">
          <div className="flex items-center gap-1.5 truncate">
            {cameraActive ? (
              faceAbsent ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[10px] font-bold text-red-400 truncate">Face Absent</span>
                </>
              ) : multipleFacesDetected ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-amber-300 truncate">{faceCount} Faces!</span>
                </>
              ) : (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 truncate">Verified 1P</span>
                </>
              )
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-slate-500"></span>
                <span className="text-[10px] font-semibold text-slate-400 truncate">
                  {proctoringStatus === 'degraded' ? 'Degraded' : 'Camera Off'}
                </span>
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
                  <div 
                    role="alert" 
                    aria-live="assertive"
                    className="absolute inset-0 bg-red-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-2 text-center z-10 animate-pulse"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400 mb-0.5" />
                    <span className="text-[10px] font-bold text-white leading-tight">Face Missing!</span>
                    <span className="text-[11px] font-extrabold text-red-300 font-mono mt-0.5">
                      Flag in {faceAbsentCountdown ?? 4}s
                    </span>
                  </div>
                )}

                {/* Multiple Faces Detected Warning Banner */}
                {multipleFacesDetected && !faceAbsent && (
                  <div 
                    role="alert" 
                    aria-live="assertive"
                    className="absolute inset-0 bg-amber-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-2 text-center z-10 animate-pulse"
                  >
                    <Users className="w-5 h-5 text-amber-400 mb-0.5" />
                    <span className="text-[10px] font-bold text-amber-100 leading-tight">Multi-Face Flag</span>
                    <span className="text-[9px] font-medium text-amber-300 mt-0.5">
                      {faceCount} people in frame
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="p-3 text-center space-y-1.5 flex flex-col items-center justify-center">
                <VideoOff className="w-5 h-5 text-slate-400" />
                <p className="text-[9px] text-slate-300 font-semibold leading-tight">
                  {proctoringStatus === 'degraded' ? 'Degraded Proctoring' : 'Stream Inactive'}
                </p>
                {onReEnableCamera && (
                  <button
                    type="button"
                    onClick={onReEnableCamera}
                    className="mt-1 px-2 py-0.5 text-[9px] bg-emerald-700 hover:bg-emerald-600 text-white rounded font-bold transition-colors cursor-pointer"
                  >
                    Enable Camera
                  </button>
                )}
              </div>
            )}

            {/* Bottom Floating Stats Tag */}
            <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[8px] text-slate-300 pointer-events-none">
              <span className="flex items-center gap-1 font-mono">
                <ShieldCheck className={`w-2.5 h-2.5 ${proctoringStatus === 'ok' ? 'text-emerald-400' : 'text-amber-400'}`} />
                {proctoringStatus === 'ok' ? 'AI Proctored' : 'Degraded'}
              </span>
              {violationsCount > 0 ? (
                <span className="text-amber-300 font-bold font-mono">
                  {violationsCount} Flags
                </span>
              ) : rapidMovementDetected ? (
                <span className="text-amber-400 font-bold font-mono">
                  Motion
                </span>
              ) : (
                <span className="text-slate-400 font-mono">OK</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Screen reader live assertive alerts */}
      <div className="sr-only" aria-live="assertive">
        {faceAbsent && `Warning: Face not detected in proctoring camera. Disqualification risk in ${faceAbsentCountdown} seconds.`}
        {multipleFacesDetected && `Security warning: Multiple faces (${faceCount}) detected in camera view.`}
      </div>
    </aside>
  );
}

/**
 * ProctoringPermissionModal
 * Clean modal requesting camera permission with explicit retry and graceful degraded mode fallback.
 */
export function ProctoringPermissionModal({
  isOpen,
  onGrantAccess,
  onCancel,
  onProceedDegraded,
  errorMessage,
  isRequesting
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 relative overflow-hidden">
        {/* Top Emerald Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600" />

        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              Pre-Assessment Proctoring Check
            </h3>
            <p className="text-xs text-slate-500">SkillSetu AI Vision & Integrity Engine</p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 leading-relaxed">
          <p className="font-semibold text-slate-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            Integrity Verification Checklist
          </p>
          <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
            <li>Single face centered in view (MediaPipe BlazeFace neural detection).</li>
            <li>No secondary devices, mobile screens, or tab-switching allowed.</li>
            <li>AI flags multiple individuals or absence from the testing seat.</li>
          </ul>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1.5" role="alert">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              Camera Initialization Notice
            </div>
            <p className="text-amber-800 leading-relaxed text-[11px]">{errorMessage}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-1">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Back
            </button>
          )}

          {errorMessage && onProceedDegraded && (
            <button
              type="button"
              onClick={onProceedDegraded}
              className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl text-xs font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 transition-colors cursor-pointer"
            >
              Proceed in Degraded Mode
            </button>
          )}

          <button
            type="button"
            onClick={onGrantAccess}
            disabled={isRequesting}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-400 text-white transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>{isRequesting ? 'Testing Camera...' : 'Grant Access & Start'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * DisqualificationModal
 * Triggered automatically when integrity rule is violated (excessive tab switches or leaving frame).
 */
export function DisqualificationModal({
  isOpen,
  reason = 'Integrity violation detected during active assessment.',
  onReturn
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn" role="alertdialog">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border-2 border-red-500 space-y-5 text-center relative overflow-hidden">
        <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <XCircle className="w-8 h-8" />
        </div>

        <div className="space-y-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-100 text-red-800">
            Assessment Flagged
          </span>
          <h4 className="text-lg font-bold text-slate-900">
            Integrity Rule Disqualification
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
            {reason}
          </p>
        </div>

        <div className="p-3.5 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-900 text-left space-y-1">
          <p className="font-bold flex items-center gap-1.5 text-red-950">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
            Proctoring Incident Logged
          </p>
          <p className="text-slate-600 text-[11px] leading-normal">
            This attempt has been flagged with timestamped violation audit logs. You may restart or consult your course preceptor.
          </p>
        </div>

        <button
          type="button"
          onClick={onReturn}
          className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
        >
          Return to Selection Screen
        </button>
      </div>
    </div>
  );
}

/**
 * CameraDisconnectedBanner
 */
export function CameraDisconnectedBanner({ onReEnable }) {
  return (
    <div className="sticky top-0 z-40 bg-red-600 text-white text-xs font-semibold px-4 py-2.5 flex items-center justify-between shadow-md" role="alert">
      <div className="flex items-center gap-2 max-w-2xl mx-auto">
        <AlertTriangle className="w-4 h-4 shrink-0 animate-bounce" />
        <span>Camera disconnected. Please re-enable camera to maintain proctoring compliance.</span>
      </div>
      {onReEnable && (
        <button
          type="button"
          onClick={onReEnable}
          className="px-3 py-1 bg-white text-red-700 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors ml-4 shrink-0 cursor-pointer"
        >
          Re-enable
        </button>
      )}
    </div>
  );
}
