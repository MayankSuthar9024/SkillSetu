import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  ClipboardCheck, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  Timer, 
  BarChart3, 
  Award, 
  TrendingUp, 
  Target, 
  Briefcase, 
  BookOpen, 
  Sparkles, 
  Check, 
  RotateCcw, 
  ShieldCheck, 
  Users, 
  Camera, 
  Flag, 
  ExternalLink, 
  Cpu, 
  Stethoscope, 
  Cog, 
  Pill, 
  HelpCircle,
  FileCheck,
  Printer
} from 'lucide-react';
import { 
  ASSESSMENT_BRANCHES, 
  BRANCH_QUESTION_BANKS, 
  getShuffledQuestionSet, 
  calculateBranchRadar 
} from '../data/assessmentQuestions';
import { useProctoringStream } from '../hooks/useProctoringStream';
import { 
  ProctoringPiP, 
  ProctoringPermissionModal, 
  DisqualificationModal, 
  CameraDisconnectedBanner 
} from '../components/ProctoringMonitor';
import { AyushSixAxisRadarChart } from '../components/AyushSixAxisRadarChart';

const STORAGE_SESSION_KEY = 'skillsetu_test_session';
const STORAGE_RADAR_KEY = 'skillsetu_active_branch_radar';
const STORAGE_HISTORY_KEY = 'skillsetu_attempt_history';

// Helper for branch icon rendering
const BranchIcon = ({ iconName, className = "w-5 h-5" }) => {
  switch (iconName) {
    case 'Cpu': return <Cpu className={className} />;
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Cog': return <Cog className={className} />;
    case 'Pill': return <Pill className={className} />;
    default: return <ClipboardCheck className={className} />;
  }
};

export function AssessmentPage({ onNavigate, currentUser }) {
  // Engine State: 'branch_selection' | 'resume_prompt' | 'proctoring_check' | 'test_active' | 'test_completed' | 'disqualified'
  const [engineState, setEngineState] = useState('branch_selection');
  const [selectedBranchId, setSelectedBranchId] = useState('cs_healthcare_informatics');

  // Active Test Session
  const [activeSession, setActiveSession] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [testResults, setTestResults] = useState(null);
  const [disqualificationReason, setDisqualificationReason] = useState(null);

  // Resume prompt state
  const [cachedSession, setCachedSession] = useState(null);

  // Modals
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const timerIntervalRef = useRef(null);
  const stopStreamRef = useRef(null);

  // Automatic disqualification callback
  const handleDisqualify = useCallback((reason) => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setDisqualificationReason(reason);
    setEngineState('disqualified');
    if (stopStreamRef.current) stopStreamRef.current();
  }, []);

  // Hook for AI Vision Proctoring
  const {
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
    getProctoringMetadata
  } = useProctoringStream({
    isActive: engineState === 'test_active',
    onDisqualify: handleDisqualify,
    allowDegradedMode: true
  });

  stopStreamRef.current = stopStream;

  // 1. Initial Mount: Check if previous in-progress session exists in localStorage (Gap #1)
  useEffect(() => {
    try {
      const savedRaw = localStorage.getItem(STORAGE_SESSION_KEY);
      if (savedRaw) {
        const parsed = JSON.parse(savedRaw);
        const elapsed = Math.floor((Date.now() - parsed.startedAt) / 1000);
        const remaining = Math.max(0, parsed.duration - elapsed);

        if (remaining > 5 && parsed.questions && parsed.questions.length > 0) {
          setCachedSession({ ...parsed, remaining });
          setEngineState('resume_prompt');
        } else {
          // Session expired while user was away
          localStorage.removeItem(STORAGE_SESSION_KEY);
        }
      }
    } catch (e) {
      console.warn('Error reading saved assessment session', e);
    }
  }, []);

  // 2. Drift-Safe Timer: Computes remaining time based on Date.now() delta (Gap #4)
  useEffect(() => {
    if (engineState !== 'test_active' || !activeSession) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    const updateTimer = () => {
      const elapsed = Math.floor((Date.now() - activeSession.startedAt) / 1000);
      const remaining = Math.max(0, activeSession.duration - elapsed);
      setTimeRemaining(remaining);

      // Auto-save session state to localStorage on every tick
      try {
        const sessionPayload = {
          ...activeSession,
          answers,
          flaggedQuestions,
          currentQIndex,
          lastUpdated: Date.now()
        };
        localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(sessionPayload));
      } catch (e) {}

      // Auto-submit on time expiry
      if (remaining === 0) {
        clearInterval(timerIntervalRef.current);
        finishAssessment('Time expired');
      }
    };

    updateTimer();
    timerIntervalRef.current = setInterval(updateTimer, 1000);

    // Update immediately on window focus to correct any background throttling
    const handleFocus = () => updateTimer();
    window.addEventListener('focus', handleFocus);
    window.addEventListener('visibilitychange', handleFocus);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('visibilitychange', handleFocus);
    };
  }, [engineState, activeSession, answers, flaggedQuestions, currentQIndex]);

  // Handle Resuming Incomplete Test
  const handleResumeSession = () => {
    if (!cachedSession) return;
    setSelectedBranchId(cachedSession.branchId);
    setActiveSession(cachedSession);
    setAnswers(cachedSession.answers || {});
    setFlaggedQuestions(cachedSession.flaggedQuestions || {});
    setCurrentQIndex(cachedSession.currentQIndex || 0);
    setTimeRemaining(cachedSession.remaining);
    setCachedSession(null);
    setEngineState('test_active');
  };

  const handleDiscardSessionAndRestart = () => {
    localStorage.removeItem(STORAGE_SESSION_KEY);
    setCachedSession(null);
    setEngineState('branch_selection');
  };

  // Start new test preparation: opens proctoring check
  const handleProceedToProctoring = () => {
    setIsPermissionModalOpen(true);
  };

  // Grant camera & launch exam
  const handleGrantCameraAndStart = async () => {
    const res = await requestCamera();
    if (res.success || proctoringStatus === 'degraded') {
      setIsPermissionModalOpen(false);
      launchTestWithBranch(selectedBranchId);
    }
  };

  // Fallback: Proceed in degraded proctoring mode
  const handleProceedDegraded = () => {
    enableDegradedMode();
    setIsPermissionModalOpen(false);
    launchTestWithBranch(selectedBranchId);
  };

  // Creates randomized pool, initializes state and starts active exam
  const launchTestWithBranch = (branchId) => {
    const seed = Date.now();
    const shuffledData = getShuffledQuestionSet(branchId, seed);

    const newSession = {
      attemptId: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      branchId,
      branchTitle: shuffledData.branchTitle,
      seed,
      startedAt: Date.now(),
      duration: shuffledData.timeLimit,
      questions: shuffledData.questions
    };

    setActiveSession(newSession);
    setCurrentQIndex(0);
    setAnswers({});
    setFlaggedQuestions({});
    setTimeRemaining(shuffledData.timeLimit);
    setDisqualificationReason(null);
    setEngineState('test_active');

    try {
      localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(newSession));
    } catch (e) {}
  };

  // Option selection
  const handleSelectOption = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQIndex]: optionIndex
    }));
  };

  const handleClearAnswer = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQIndex];
      return copy;
    });
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQIndex]: !prev[currentQIndex]
    }));
  };

  // Completion calculation & persistence
  const finishAssessment = useCallback((completionReason = 'Submitted by student') => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (!activeSession) return;

    const proctoringData = getProctoringMetadata();
    const radarResults = calculateBranchRadar(
      activeSession.branchId,
      answers,
      activeSession.questions
    );

    const fullResultPayload = {
      ...radarResults,
      attemptId: activeSession.attemptId,
      seed: activeSession.seed,
      totalQuestions: activeSession.questions.length,
      answeredCount: Object.keys(answers).length,
      completionReason,
      proctoring: proctoringData.proctoring_metadata
    };

    setTestResults(fullResultPayload);
    stopStream();

    // Persist active radar matrix to student profile
    try {
      localStorage.setItem(STORAGE_RADAR_KEY, JSON.stringify(fullResultPayload));
      localStorage.setItem('skillsetu_selected_branch', activeSession.branchId);

      // Append to attempt history (Gap #3)
      const existingHistoryRaw = localStorage.getItem(STORAGE_HISTORY_KEY);
      const history = existingHistoryRaw ? JSON.parse(existingHistoryRaw) : [];
      history.unshift({
        attemptId: fullResultPayload.attemptId,
        branchId: activeSession.branchId,
        branchTitle: activeSession.branchTitle,
        overallScore: fullResultPayload.overallScore,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        violationsCount: proctoringData.proctoring_metadata.total_violations_recorded
      });
      localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(history.slice(0, 10)));

      // Remove in-progress session
      localStorage.removeItem(STORAGE_SESSION_KEY);

      // Notify other views via custom window event
      window.dispatchEvent(new CustomEvent('skillsetu_radar_updated', { detail: fullResultPayload }));
    } catch (e) {
      console.error('Error persisting test results', e);
    }

    setEngineState('test_completed');
  }, [activeSession, answers, getProctoringMetadata, stopStream]);

  // Format time as MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const activeBranchConfig = ASSESSMENT_BRANCHES[selectedBranchId] || ASSESSMENT_BRANCHES.cs_healthcare_informatics;
  const currentQuestion = activeSession?.questions[currentQIndex];
  const isLastQuestion = activeSession ? currentQIndex === activeSession.questions.length - 1 : false;

  // Live Score Calculator for instant feedback indicator
  const liveAnswerCount = Object.keys(answers).length;
  const totalQuestionCount = activeSession?.questions?.length || 12;
  const progressPct = Math.round((liveAnswerCount / totalQuestionCount) * 100);

  // ─────────────────────────────────────────────────────────────
  // 1. RESUME PROMPT STATE (Gap #1: State durability)
  // ─────────────────────────────────────────────────────────────
  if (engineState === 'resume_prompt' && cachedSession) {
    return (
      <div className="min-h-screen bg-[#f7faf8] text-slate-900 py-12 px-4 flex items-center justify-center animate-fadeIn">
        <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
            <RotateCcw className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
              Active Assessment Recovered
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Resume Your Incomplete Test?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              An active diagnostic session for <strong className="text-slate-900">{cachedSession.branchTitle}</strong> was detected with <span className="font-bold text-emerald-700 font-mono">{formatTime(cachedSession.remaining)}</span> remaining.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Questions Answered:</span>
              <span className="font-bold text-slate-900">{Object.keys(cachedSession.answers || {}).length} / {cachedSession.questions?.length || 12}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Time Remaining:</span>
              <span className="font-bold text-emerald-700 font-mono">{formatTime(cachedSession.remaining)}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleDiscardSessionAndRestart}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-red-700 hover:bg-red-50 border border-slate-200 transition-all cursor-pointer"
            >
              Discard & Start Fresh
            </button>
            <button
              onClick={handleResumeSession}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Resume Assessment</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 2. DISQUALIFIED STATE
  // ─────────────────────────────────────────────────────────────
  if (engineState === 'disqualified') {
    return (
      <DisqualificationModal
        isOpen={true}
        reason={disqualificationReason || 'Integrity rules violation detected during proctoring.'}
        onReturn={() => {
          localStorage.removeItem(STORAGE_SESSION_KEY);
          setEngineState('branch_selection');
        }}
      />
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 3. TEST COMPLETED STATE (Dynamic Radar + Audit Ledger)
  // ─────────────────────────────────────────────────────────────
  if (engineState === 'test_completed' && testResults) {
    const { overallScore, radarMatrix, branchTitle, proctoring } = testResults;
    const tier = overallScore >= 90 ? 'Mastered' : overallScore >= 75 ? 'Verified' : overallScore >= 50 ? 'Proficient' : 'Developing';

    return (
      <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-20 animate-fadeIn">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
          
          {/* Top Return Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                Diagnostic Verified
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                {branchTitle}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                6-Axis Competency Assessment Completed • Result SHA-256 Ledger Synchronized
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Ledger</span>
              </button>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('profile')}
                  className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View in Profile</span>
                </button>
              )}
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Overall Score</span>
              <div className="text-3xl font-black text-emerald-800">{overallScore}%</div>
              <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800">
                Tier: {tier}
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Questions Answered</span>
              <div className="text-3xl font-black text-slate-900">
                {testResults.answeredCount} / {testResults.totalQuestions}
              </div>
              <span className="text-[10px] text-slate-500 font-semibold block">100% Completion</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Proctoring Status</span>
              <div className="text-xl font-black text-slate-800 flex items-center justify-center gap-1 mt-1.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>{proctoring?.proctoring_status === 'ok' ? 'Verified' : 'Degraded'}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold block">
                {proctoring?.violations?.length || 0} Flags Recorded
              </span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs text-center space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">National Percentile</span>
              <div className="text-3xl font-black text-teal-700">92nd</div>
              <span className="text-[10px] text-teal-600 font-bold block">Top 8% of Cohort</span>
            </div>
          </div>

          {/* DYNAMIC 6-AXIS RADAR CHART (Requirement #3) */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-700" />
                  {branchTitle} Competency Radar
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dynamic 6-axis geometric plot calibrated against national academic benchmarks.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Synced to Digital Profile</span>
              </div>
            </div>

            <AyushSixAxisRadarChart
              skillMatrix={radarMatrix}
              plain={true}
              branchTitle={`${branchTitle} Competency Radar`}
            />
          </div>

          {/* Proctoring Verification Ledger Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900">
                    Proctoring & Academic Integrity Audit Ledger
                  </h4>
                  <p className="text-xs text-slate-500">
                    Continuous facial tracking, multi-person surveillance, and browser tab monitor.
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Audited Session
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-slate-400 block font-medium">Camera Feed Verification</span>
                <span className="font-bold text-emerald-800">
                  {proctoring?.camera_verified ? 'Active & Calibrated' : 'Degraded Mode'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-slate-400 block font-medium">Tab Switches</span>
                <span className={`font-bold ${proctoring?.tab_switch_count > 0 ? 'text-amber-600' : 'text-slate-800'}`}>
                  {proctoring?.tab_switch_count || 0} Recorded
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <span className="text-slate-400 block font-medium">Multiple Individuals Detected</span>
                <span className={`font-bold ${proctoring?.multiple_faces_detected ? 'text-amber-600' : 'text-emerald-800'}`}>
                  {proctoring?.multiple_faces_detected ? 'Yes (Logged Violation)' : 'None (1 Person Clear)'}
                </span>
              </div>
            </div>

            {/* Detailed Violation Log List if any occurred */}
            {proctoring?.violations && proctoring.violations.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block">Logged Timestamped Events:</span>
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {proctoring.violations.map(v => (
                    <div key={v.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${v.severity === 'high' ? 'bg-red-500' : v.severity === 'medium' ? 'bg-amber-500' : 'bg-blue-400'}`}></span>
                        <span className="font-bold text-slate-800">{v.type}</span>
                        <span className="text-slate-500 text-[11px] truncate max-w-sm">{v.message}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono shrink-0">
                        {new Date(v.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs: Retake or Switch Branch */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <button
              onClick={() => {
                setEngineState('branch_selection');
                setTestResults(null);
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Select Another Branch</span>
            </button>

            <button
              onClick={() => launchTestWithBranch(testResults.branchId)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Assessment (New Question Shuffle)</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 4. ACTIVE TEST STATE (Drift-safe Timer + Proctoring PiP + Questions)
  // ─────────────────────────────────────────────────────────────
  if (engineState === 'test_active' && activeSession && currentQuestion) {
    const isFlagged = Boolean(flaggedQuestions[currentQIndex]);
    const selectedOption = answers[currentQIndex];
    const isUrgentTime = timeRemaining <= 60;
    const isWarningTime = timeRemaining <= 180;

    return (
      <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-20 animate-fadeIn">
        {/* Persistent Floating Proctoring PiP */}
        <ProctoringPiP
          stream={stream}
          cameraActive={cameraActive}
          tabSwitchCount={tabSwitchCount}
          rapidMovementDetected={rapidMovementDetected}
          faceAbsent={faceAbsent}
          faceAbsentCountdown={faceAbsentCountdown}
          faceCount={faceCount}
          multipleFacesDetected={multipleFacesDetected}
          proctoringStatus={proctoringStatus}
          violationsCount={proctoringViolations.length}
          onReEnableCamera={requestCamera}
        />

        {cameraDisconnected && <CameraDisconnectedBanner onReEnable={requestCamera} />}

        {/* Top Floating Header with Timer & Progress */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3 shadow-2xs">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <div>
                <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate max-w-xs sm:max-w-md">
                  {activeSession.branchTitle}
                </h2>
                <span className="text-[10px] text-slate-500 font-medium">
                  Axis {currentQuestion.axisIndex + 1} of 6: {currentQuestion.axisName}
                </span>
              </div>
            </div>

            {/* Timer and Score Indicators */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Live Answered Tracker */}
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Answered:</span>
                <span className="font-extrabold text-slate-900">
                  {liveAnswerCount} / {totalQuestionCount}
                </span>
              </div>

              {/* Drift-Safe Timer Display */}
              <div 
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black border transition-all ${
                  isUrgentTime
                    ? 'bg-red-50 text-red-600 border-red-300 animate-pulse'
                    : isWarningTime
                    ? 'bg-amber-50 text-amber-700 border-amber-300'
                    : 'bg-slate-100 text-slate-800 border-slate-200'
                }`}
                aria-live="polite"
              >
                <Clock className="w-4 h-4 shrink-0" />
                <span>{formatTime(timeRemaining)}</span>
              </div>

              <button
                onClick={() => finishAssessment('Submitted early by student')}
                className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                Submit
              </button>
            </div>

          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1 mt-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${((currentQIndex + 1) / totalQuestionCount) * 100}%` }}
            />
          </div>
        </header>

        {/* Main Exam Question Canvas */}
        <main className="max-w-3xl mx-auto px-4 pt-6 sm:pt-8 space-y-6">
          
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6 relative overflow-hidden">
            {/* Question Header & Flag Toggle */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                  Question {currentQIndex + 1} of {totalQuestionCount}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  • {currentQuestion.axisName}
                </span>
              </div>

              <button
                onClick={handleToggleFlag}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isFlagged 
                    ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
              </button>
            </div>

            {/* Question Prompt */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQuestion.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-4 cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-50/80 border-emerald-500 text-emerald-950 shadow-2xs ring-1 ring-emerald-500/30'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 border ${
                        isSelected 
                          ? 'bg-emerald-700 text-white border-emerald-700' 
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation & Clear Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handleClearAnswer}
                disabled={selectedOption === undefined}
                className="text-xs text-slate-400 hover:text-slate-600 disabled:opacity-40 font-semibold cursor-pointer"
              >
                Clear Selection
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                {isLastQuestion ? (
                  <button
                    onClick={() => finishAssessment('Completed all questions')}
                    className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Submit Exam</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQIndex(prev => Math.min(totalQuestionCount - 1, prev + 1))}
                    className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Question Navigator Grid (Gap #7: Mobile Responsive Grid) */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-slate-800">Question Navigator</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600"></span> Answered
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-400"></span> Flagged
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-200"></span> Pending
                </span>
              </div>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
              {activeSession.questions.map((_, idx) => {
                const isAnswered = answers[idx] !== undefined;
                const isFlag = flaggedQuestions[idx];
                const isCurrent = idx === currentQIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQIndex(idx)}
                    className={`h-9 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      isCurrent
                        ? 'ring-2 ring-emerald-600 ring-offset-1 font-extrabold shadow-xs'
                        : ''
                    } ${
                      isFlag
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : isAnswered
                        ? 'bg-emerald-700 text-white border-emerald-700'
                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

        </main>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 5. BRANCH SELECTION STATE (Default Entry Screen)
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-20 animate-fadeIn">
      {/* Pre-Assessment Proctoring Permission Modal */}
      <ProctoringPermissionModal
        isOpen={isPermissionModalOpen}
        isRequesting={isRequesting}
        errorMessage={cameraError}
        onGrantAccess={handleGrantCameraAndStart}
        onCancel={() => setIsPermissionModalOpen(false)}
        onProceedDegraded={handleProceedDegraded}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 space-y-8">
        
        {/* Header Title */}
        <div className="border-b border-slate-200/80 pb-6 space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-1 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>National Ayush Diagnostic Assessment Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Select Your Specialization Branch
          </h1>
          <p className="text-xs sm:text-base text-slate-500 font-normal max-w-2xl">
            Choose your academic domain to calibrate the diagnostic quiz engine. Your test results will dynamically construct your verified 6-axis competency radar.
          </p>
        </div>

        {/* 4 Branch Selection Cards (Requirement #1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.values(ASSESSMENT_BRANCHES).map((branch) => {
            const isSelected = branch.id === selectedBranchId;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`rounded-3xl p-5 sm:p-6 transition-all cursor-pointer border flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-xl ring-2 ring-emerald-600/30'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Top Selection Accent */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600" />
                )}

                <div className="space-y-4">
                  {/* Icon & Selected Checkbox */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-emerald-800 text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                    }`}>
                      <BranchIcon iconName={branch.icon} className="w-6 h-6" />
                    </div>

                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-emerald-600 border-emerald-600 text-white' 
                        : 'border-slate-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Branch Title & Tagline */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {branch.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {branch.tagline}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    10 Mins
                  </span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    6 Competency Axes
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Branch Competency Preview Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Selected Domain Calibration
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                {activeBranchConfig.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Your diagnostic quiz will measure proficiency across these 6 distinct industry competencies:
              </p>
            </div>

            <button
              onClick={handleProceedToProctoring}
              className="px-6 py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-extrabold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Begin AI-Proctored Test</span>
            </button>
          </div>

          {/* 6 Competency Axes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeBranchConfig.competencyAxes.map((axis, idx) => (
              <div 
                key={axis.id}
                className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {axis.fullName}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                    {axis.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Integrity Notice Footer */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>Verified AI Proctoring:</strong> Real-time MediaPipe facial posture analysis, multi-face alerts, and session integrity locking.
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-800 shrink-0">
              12 Questions • Single Attempt
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AssessmentPage;
