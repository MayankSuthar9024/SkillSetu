import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Percent,
  Search,
  Star,
  PlayCircle,
  X,
  Sparkles,
  Check,
  ArrowLeft,
  Tag
} from 'lucide-react';
import { ALL_COURSES } from '../data/coursesData';

const QUESTIONS = [
  { id: 1, domain: 'Clinical & Diagnostics', question: 'Which of the following is the primary method used in Nadi Pariksha for clinical assessment?', options: ['Pulse diagnosis at the radial artery', 'Blood pressure monitoring', 'Tongue examination only', 'Auscultation of chest'], correct: 0 },
  { id: 2, domain: 'Clinical & Diagnostics', question: 'Tridosha theory classifies body constitution into how many primary types?', options: ['Two', 'Three', 'Five', 'Seven'], correct: 1 },
  { id: 3, domain: 'Dravyaguna & Phytochemistry', question: 'HPLC in phytochemistry stands for?', options: ['High Performance Liquid Chromatography', 'High Pressure Light Calibration', 'Herbal Product Labeling Code', 'Homeopathic Pharmacopoeia Listing Committee'], correct: 0 },
  { id: 4, domain: 'Dravyaguna & Phytochemistry', question: 'Which Rasa (taste) is associated with Vata-pacifying action in Ayurvedic pharmacology?', options: ['Tikta (Bitter)', 'Madhura (Sweet)', 'Katu (Pungent)', 'Kashaya (Astringent)'], correct: 1 },
  { id: 5, domain: 'Research & Clinical Trials', question: 'GCP in clinical trials stands for?', options: ['General Clinical Protocol', 'Good Clinical Practice', 'Global Compliance Procedure', 'Guided Case Presentation'], correct: 1 },
  { id: 6, domain: 'Research & Clinical Trials', question: 'Pharmacovigilance primarily deals with?', options: ['Drug pricing', 'Detection and prevention of adverse drug reactions', 'Manufacturing quality', 'Drug distribution'], correct: 1 },
  { id: 7, domain: 'Tele-Ayush & Digital Health', question: 'ABHA in digital health stands for?', options: ['Ayushman Bharat Health Account', 'Ayush Basic Health Assessment', 'Advanced Biomedical Health Archive', 'Automated Billing for Healthcare Access'], correct: 0 },
  { id: 8, domain: 'Tele-Ayush & Digital Health', question: 'Which technology is primarily used for remote patient monitoring in Tele-Ayush?', options: ['Blockchain only', 'IoT wearables and video consultation', 'Manual paper records', 'Radio frequency scanning'], correct: 1 },
  { id: 9, domain: 'Panchakarma', question: 'Vamana therapy in Panchakarma is primarily used for?', options: ['Therapeutic emesis (vomiting)', 'Purgation', 'Nasal administration', 'Enema therapy'], correct: 0 },
  { id: 10, domain: 'Regulatory & Compliance', question: 'Which body regulates Ayush education and practice standards in India?', options: ['MCI', 'NCISM', 'WHO', 'ICMR'], correct: 1 },
];

const TOTAL_TIME = 600;

export function SkillPage({ onNavigate, onOpenReadinessModal, selectedCourse = null, onClearSelectedCourse }) {
  const [testState, setTestState] = useState('idle');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const timerRef = useRef(null);

  // Courses in Skill Section state
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [courseSearch, setCourseSearch] = useState('');
  const [selectedCourseCategory, setSelectedCourseCategory] = useState('All');
  const [enrolledCourseIds, setEnrolledCourseIds] = useState(['mc-1']);
  const [completedCourseIds, setCompletedCourseIds] = useState([]);
  const [courseCompletionNotice, setCourseCompletionNotice] = useState(null);

  // Open course automatically if navigated from Jobs Page
  useEffect(() => {
    if (selectedCourse) {
      setActiveCourseModal(selectedCourse);
      setTimeout(() => {
        const el = document.getElementById('all-courses-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [selectedCourse]);

  useEffect(() => {
    if (testState === 'running' && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
    if (testState === 'running' && timeLeft === 0) finishTest();
  }, [testState, timeLeft]);

  const startTest = () => { setTestState('running'); setCurrentQ(0); setAnswers({}); setSelectedOption(null); setTimeLeft(TOTAL_TIME); };
  const finishTest = useCallback(() => { clearTimeout(timerRef.current); setTestState('finished'); }, []);
  const selectOption = (idx) => setSelectedOption(idx);

  const nextQuestion = () => {
    if (selectedOption !== null) setAnswers(prev => ({ ...prev, [currentQ]: selectedOption }));
    if (currentQ < QUESTIONS.length - 1) { setCurrentQ(currentQ + 1); setSelectedOption(answers[currentQ + 1] ?? null); }
  };
  const prevQuestion = () => {
    if (selectedOption !== null) setAnswers(prev => ({ ...prev, [currentQ]: selectedOption }));
    if (currentQ > 0) { setCurrentQ(currentQ - 1); setSelectedOption(answers[currentQ - 1] ?? null); }
  };
  const submitTest = () => {
    if (selectedOption !== null) setAnswers(prev => ({ ...prev, [currentQ]: selectedOption }));
    finishTest();
  };

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  const getResults = () => {
    let correct = 0;
    let domainScores = {};
    QUESTIONS.forEach((q, i) => {
      if (!domainScores[q.domain]) domainScores[q.domain] = { total: 0, correct: 0 };
      domainScores[q.domain].total++;
      if (answers[i] === q.correct) { correct++; domainScores[q.domain].correct++; }
    });
    const percentage = Math.round((correct / QUESTIONS.length) * 100);
    const gaps = Object.entries(domainScores).filter(([_, v]) => (v.correct / v.total) < 0.7).map(([d]) => d);
    const strengths = Object.entries(domainScores).filter(([_, v]) => (v.correct / v.total) >= 0.7).map(([d]) => d);
    return { correct, total: QUESTIONS.length, percentage, domainScores, gaps, strengths };
  };

  const isTimeLow = timeLeft < 60;

  // ─── Skill stats data (static for demo) ───
  const skillStats = {
    overallScore: 88,
    skillMatchRatio: 76,
    skillCompletion: 72,
    jobReadyRatio: 81,
    totalMarks: 440,
    maxMarks: 500,
  };

  const domainSkills = [
    { name: 'Clinical & Diagnostics', score: 90, maxScore: 100 },
    { name: 'Dravyaguna & Phytochemistry', score: 85, maxScore: 100 },
    { name: 'Research & Clinical Trials', score: 84, maxScore: 100 },
    { name: 'Tele-Ayush & Digital Health', score: 92, maxScore: 100 },
    { name: 'Panchakarma Procedures', score: 78, maxScore: 100 },
    { name: 'Regulatory & Compliance', score: 70, maxScore: 100 },
  ];

  const getBarColor = (score) => {
    if (score >= 85) return 'bg-emerald-500';
    if (score >= 70) return 'bg-amber-400';
    return 'bg-red-400';
  };

  const getTextColor = (score) => {
    if (score >= 85) return 'text-emerald-700';
    if (score >= 70) return 'text-amber-700';
    return 'text-red-600';
  };

  // ─── RUNNING STATE: Quiz ───
  if (testState === 'running') {
    const q = QUESTIONS[currentQ];
    const isLast = currentQ === QUESTIONS.length - 1;
    return (
      <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-8">
        <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500">{currentQ + 1}/{QUESTIONS.length}</span>
              <div className="w-32 sm:w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }} />
              </div>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold border ${isTimeLow ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
              <Timer className="w-4 h-4" />{formatTime(timeLeft)}
            </div>
          </div>
          <div className="h-1 bg-slate-100">
            <div className={`h-full transition-all duration-1000 ${isTimeLow ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${(timeLeft / TOTAL_TIME) * 100}%` }} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-lg mb-4">{q.domain}</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((opt, idx) => (
                <button key={idx} onClick={() => selectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer flex items-center gap-3 ${selectedOption === idx ? 'border-emerald-600 bg-emerald-50 text-emerald-900' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border-2 transition-all ${selectedOption === idx ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-400 border-slate-300'}`}>{String.fromCharCode(65 + idx)}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={prevQuestion} disabled={currentQ === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${currentQ === 0 ? 'text-slate-300 border-slate-200 cursor-not-allowed' : 'text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
              <ChevronLeft className="w-4 h-4" />Previous
            </button>
            {isLast ? (
              <button onClick={submitTest} className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-all cursor-pointer">Submit Test<CheckCircle2 className="w-4 h-4" /></button>
            ) : (
              <button onClick={nextQuestion} className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-all cursor-pointer">Next<ChevronRight className="w-4 h-4" /></button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-8 justify-center">
            {QUESTIONS.map((_, i) => (
              <button key={i} onClick={() => { if (selectedOption !== null) setAnswers(prev => ({ ...prev, [currentQ]: selectedOption })); setCurrentQ(i); setSelectedOption(answers[i] ?? null); }}
                className={`w-8 h-8 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${i === currentQ ? 'bg-emerald-800 text-white border-emerald-800' : answers[i] !== undefined ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ─── FINISHED STATE: Results + back to overview ───
  if (testState === 'finished') {
    const results = getResults();
    return (
      <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16">
        <div className="max-w-3xl mx-auto px-4 pt-8 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 ${results.percentage >= 70 ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : results.percentage >= 40 ? 'bg-amber-50 text-amber-700 border-amber-300' : 'bg-red-50 text-red-700 border-red-300'}`}>
              {results.percentage}%
            </div>
            <h2 className="text-xl font-bold text-slate-900">Assessment Complete</h2>
            <p className="text-sm text-slate-500 mt-1">{results.correct} / {results.total} correct</p>
            <div className="flex justify-center gap-6 mt-5 text-xs">
              <div className="text-center"><span className="block text-slate-400 font-semibold">Time Taken</span><span className="font-bold text-slate-900">{formatTime(TOTAL_TIME - timeLeft)}</span></div>
              <div className="text-center"><span className="block text-slate-400 font-semibold">Accuracy</span><span className="font-bold text-slate-900">{results.percentage}%</span></div>
              <div className="text-center"><span className="block text-slate-400 font-semibold">Gaps</span><span className="font-bold text-amber-600">{results.gaps.length}</span></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
            <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-emerald-700" />Domain Performance</h3>
            <div className="space-y-4">
              {Object.entries(results.domainScores).map(([domain, data]) => {
                const pct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={domain}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-slate-700">{domain}</span>
                      <span className={`text-xs font-bold ${pct < 70 ? 'text-amber-600' : 'text-emerald-700'}`}>{data.correct}/{data.total}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${pct < 70 ? 'bg-amber-400' : 'bg-emerald-500'}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {results.strengths.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
              <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-emerald-700" />Strengths</h3>
              <div className="flex flex-wrap gap-2">{results.strengths.map(s => (<span key={s} className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-lg"><CheckCircle2 className="w-3.5 h-3.5" />{s}</span>))}</div>
            </div>
          )}

          {results.gaps.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
              <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-600" />Skill Gaps</h3>
              <div className="flex flex-wrap gap-2">{results.gaps.map(g => (<span key={g} className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-lg"><AlertTriangle className="w-3.5 h-3.5" />{g}</span>))}</div>
            </div>
          )}

          <button onClick={() => setTestState('idle')} className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2">
            <ChevronLeft className="w-4 h-4" />Back to Skills Overview
          </button>
        </div>
      </div>
    );
  }

  // ─── IDLE STATE: Skill Overview + Give Assignment ───
  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-20 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">

        {/* Clean Spacious Header */}
        <div className="pt-2 border-b border-slate-200/70 pb-6 space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Skills & Competency Ledger
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Universal diagnostic scores, verified domain proficiency, and targeted industry bridge modules.
          </p>
        </div>

        {/* Universal Assessment CTA */}
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <h2 className="text-base sm:text-lg font-bold text-white">
                Universal Diagnostic Assessment
              </h2>
              <p className="text-xs text-slate-300 font-normal">
                Standardized 10-question evaluation across all 6 classical and clinical Ayush domains.
              </p>
            </div>
          </div>
          <button
            onClick={startTest}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>Start Assessment</span>
          </button>
        </div>

        {/* Executive 3-Card Metrics Row (Zero Redundancy) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Overall Competency</span>
              <Award className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900">{skillStats.overallScore}%</span>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">Grade A</span>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              Scored {skillStats.totalMarks} of {skillStats.maxMarks} marks in verified testing.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Industry Match Ratio</span>
              <Target className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900">{skillStats.skillMatchRatio}%</span>
              <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded-md">Verified</span>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              Direct alignment with open pharma R&D and QC requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Placement Readiness</span>
              <Briefcase className="w-4 h-4 text-amber-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900">{skillStats.jobReadyRatio}%</span>
              <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-md">1-Click Eligible</span>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              Ready for clinical fellowships and industrial apprenticeships.
            </p>
          </div>
        </div>

        {/* Domain-wise Skills Progression */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-700" />
              Domain Proficiency Breakdown
            </h3>
            <span className="text-xs text-slate-400 font-medium">6 Domains</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {domainSkills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-slate-700">{skill.name}</span>
                  <span className={`font-bold ${getTextColor(skill.score)}`}>{skill.score}/{skill.maxScore}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${getBarColor(skill.score)}`} style={{ width: `${skill.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ALL COURSES IN SKILL SECTION */}
        <div id="all-courses-section" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-6 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  All Courses & Skill Bridges
                </h2>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {ALL_COURSES.length} Modules
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Targeted industry micro-credentials co-created with pharma R&D to bridge skill gaps.
              </p>
            </div>

            {/* Completion Counter */}
            {completedCourseIds.length > 0 && (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>{completedCourseIds.length} of {ALL_COURSES.length} Completed</span>
              </div>
            )}
          </div>

          {/* Search & Category Filter Pills */}
          <div className="space-y-3">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search courses by title, skill, or SOP..."
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                className="w-full bg-slate-50 focus:bg-white border border-slate-200 focus:border-slate-400 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
              />
              {courseSearch && (
                <button
                  onClick={() => setCourseSearch('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {[
                { id: 'All', label: 'All Modules' },
                { id: 'Manufacturing', label: 'Manufacturing & GMP' },
                { id: 'Clinical', label: 'Clinical Research' },
                { id: 'Quality', label: 'Quality Assurance' },
                { id: 'Regulatory', label: 'Regulatory Compliance' },
                { id: 'Pharmacovigilance', label: 'Pharmacovigilance' },
                { id: 'Analytical', label: 'Analytical Chemistry' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCourseCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCourseCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-xs font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          {(() => {
            const filtered = ALL_COURSES.filter(course => {
              const matchesSearch = !courseSearch || 
                course.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
                course.category.toLowerCase().includes(courseSearch.toLowerCase()) ||
                course.competencies.some(c => c.toLowerCase().includes(courseSearch.toLowerCase()));
              const matchesCategory = selectedCourseCategory === 'All' || 
                course.category.toLowerCase().includes(selectedCourseCategory.toLowerCase());
              return matchesSearch && matchesCategory;
            });

            if (filtered.length === 0) {
              return (
                <div className="p-12 text-center text-slate-400 space-y-2">
                  <BookOpen className="w-10 h-10 text-slate-300 mx-auto stroke-[1.5]" />
                  <p className="text-sm font-semibold text-slate-700">No courses match your filter</p>
                  <button
                    onClick={() => { setCourseSearch(''); setSelectedCourseCategory('All'); }}
                    className="text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                {filtered.map(course => {
                  const isCompleted = completedCourseIds.includes(course.id);
                  const isEnrolled = enrolledCourseIds.includes(course.id);

                  return (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                    >
                      {/* Course Image / Poster Header */}
                      <div className="relative h-36 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setActiveCourseModal(course)}>
                        <img 
                          src={course.posterImage} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                        
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md">
                            {course.category}
                          </span>
                          <span className="text-[10px] font-bold text-amber-300 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-300 stroke-none" />
                            {course.rating}
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-slate-200">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-300" />
                            {course.duration}
                          </span>
                          <span className="font-semibold text-emerald-300">{course.price}</span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h3 
                            onClick={() => setActiveCourseModal(course)}
                            className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer leading-snug line-clamp-2"
                          >
                            {course.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 font-medium">
                            {course.author} · {course.authorRole}
                          </p>
                        </div>

                        {/* Competency tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {course.competencies.slice(0, 3).map((comp, idx) => (
                            <span 
                              key={idx}
                              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>

                        {/* Action CTA */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              Completed
                            </span>
                          ) : isEnrolled ? (
                            <button
                              onClick={() => setActiveCourseModal(course)}
                              className="w-full py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                            >
                              <PlayCircle className="w-4 h-4" />
                              <span>Resume Module</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setEnrolledCourseIds(prev => [...prev, course.id]);
                                setActiveCourseModal(course);
                              }}
                              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                            >
                              <span>Enroll & Start</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

      </div>

      {/* INTERACTIVE FULL-PAGE COURSE VIEW */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 bg-[#f8fafc] text-slate-900 overflow-y-auto min-h-screen animate-fadeIn">
          {/* Top Full-Page Header */}
          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
            <button
              onClick={() => {
                setActiveCourseModal(null);
                onClearSelectedCourse?.();
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-800 transition-colors cursor-pointer py-1.5 px-3 rounded-xl hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-700" />
              <span>Back to Skills & Courses</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                {activeCourseModal.category}
              </span>
              <button
                onClick={() => {
                  setActiveCourseModal(null);
                  onClearSelectedCourse?.();
                }}
                className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Full Page Content Container */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column (2 Cols on Desktop) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* 16:9 Hero Player */}
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-950 shadow-lg group">
                  <img 
                    src={activeCourseModal.posterImage} 
                    alt={activeCourseModal.title}
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/95 hover:bg-white text-emerald-800 flex items-center justify-center shadow-2xl transition-all hover:scale-105 cursor-pointer">
                      <Play className="w-8 h-8 fill-emerald-800 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl">
                    <span className="font-semibold">Interactive Video Lecture & Lab Simulation</span>
                    <span className="font-mono text-xs text-slate-300">{activeCourseModal.duration}</span>
                  </div>
                </div>

                {/* Course Header Info */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-slate-900">{activeCourseModal.author}</span>
                    <span>·</span>
                    <span>{activeCourseModal.authorRole}</span>
                    <span>·</span>
                    <span className="text-amber-500 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      {activeCourseModal.rating} ({activeCourseModal.enrolled} learners)
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {activeCourseModal.title}
                  </h1>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {activeCourseModal.skillGap}
                  </p>
                </div>

                {/* Modules & Curriculum */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">Course Curriculum & Modules</h3>
                  <div className="space-y-2.5">
                    {[
                      { num: '01', title: 'Regulatory Foundation & Standard Operating Procedures', time: '25 mins' },
                      { num: '02', title: 'Hands-on Lab Demonstration & Analytical Workflows', time: '35 mins' },
                      { num: '03', title: 'Validation, Audit Compliance & Case Analysis', time: '30 mins' },
                    ].map((mod, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between gap-4 hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center font-mono">
                            {mod.num}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">{mod.title}</span>
                        </div>
                        <span className="text-xs text-slate-400 font-medium shrink-0">{mod.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Competencies */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">Verified Skills You'll Earn</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCourseModal.competencies.map((comp, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column / Sticky Sidebar */}
              <div className="space-y-6">
                <div className="sticky top-20 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      National Skill Portal
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900 pt-1">
                      {activeCourseModal.price || 'Free Access'}
                    </div>
                    <p className="text-xs text-slate-500">
                      Subsidized by Ministry of Ayush for verified academic scholars
                    </p>
                  </div>

                  {completedCourseIds.includes(activeCourseModal.id) ? (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                        <Award className="w-4 h-4 text-emerald-700" />
                        <span>Credential Verified on Ledger</span>
                      </div>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        This micro-credential is recorded and automatically reflected in your job matches.
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setCompletedCourseIds(prev => [...prev, activeCourseModal.id]);
                        if (!enrolledCourseIds.includes(activeCourseModal.id)) {
                          setEnrolledCourseIds(prev => [...prev, activeCourseModal.id]);
                        }
                      }}
                      className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>Complete Course & Verify Credential</span>
                    </button>
                  )}

                  <div className="pt-2 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-semibold text-slate-900">{activeCourseModal.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Accreditation:</span>
                      <span className="font-semibold text-slate-900">NCISM / Ayush CoE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Certificate:</span>
                      <span className="font-semibold text-slate-900">Digital Verifiable Badge</span>
                    </div>
                  </div>

                  {completedCourseIds.includes(activeCourseModal.id) && (
                    <button
                      onClick={() => {
                        setActiveCourseModal(null);
                        onClearSelectedCourse?.();
                        if (onNavigate) onNavigate('opportunities');
                      }}
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Check Boosted Job Matches →</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          </main>
        </div>
      )}

    </div>
  );
}

export default SkillPage;
