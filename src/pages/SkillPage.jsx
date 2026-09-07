import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ClipboardCheck, Clock, ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle, Play, Timer, BarChart3, Award, TrendingUp, Target, Briefcase, BookOpen, Percent } from 'lucide-react';

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

export function SkillPage({ onNavigate, onOpenReadinessModal }) {
  const [testState, setTestState] = useState('idle');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const timerRef = useRef(null);

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
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16">
      <div className="max-w-6xl mx-auto px-4 space-y-6">

        {/* Header */}
        <div className="bg-white border border-slate-200/90 py-6 px-6 sm:px-8 rounded-3xl">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Skills</h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">Your skill scores, match ratio, and job readiness at a glance.</p>
        </div>

        {/* Give Assignment CTA — Highlighted at top */}
        <div className="bg-emerald-50 rounded-2xl border-2 border-emerald-300 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0">
              <ClipboardCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900">Give Assignment</h3>
              <p className="text-xs text-slate-500 mt-0.5">Take the universal skill assessment — 10 questions, 10 minutes.</p>
            </div>
          </div>
          <button
            onClick={startTest}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-2 shrink-0 shadow-md"
          >
            <Play className="w-4 h-4" />
            Start Assessment
          </button>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Overall Score', value: `${skillStats.overallScore}%`, icon: Award, color: 'text-emerald-700', bg: 'bg-emerald-50' },
            { label: 'Total Marks', value: `${skillStats.totalMarks}/${skillStats.maxMarks}`, icon: BarChart3, color: 'text-slate-800', bg: 'bg-slate-50' },
            { label: 'Skill Match', value: `${skillStats.skillMatchRatio}%`, icon: Target, color: 'text-blue-700', bg: 'bg-blue-50' },
            { label: 'Skill Completion', value: `${skillStats.skillCompletion}%`, icon: Percent, color: 'text-violet-700', bg: 'bg-violet-50' },
            { label: 'Job Ready', value: `${skillStats.jobReadyRatio}%`, icon: Briefcase, color: 'text-amber-700', bg: 'bg-amber-50' },
            { label: 'Domains Covered', value: '6', icon: BookOpen, color: 'text-teal-700', bg: 'bg-teal-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-4">
              <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-2`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <span className="text-[11px] text-slate-400 font-semibold block">{stat.label}</span>
              <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Domain-wise Skills */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
          <h3 className="font-bold text-sm text-slate-900 mb-5 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-700" />
            Domain-wise Scores
          </h3>
          <div className="space-y-4">
            {domainSkills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-slate-700">{skill.name}</span>
                  <span className={`text-xs font-bold ${getTextColor(skill.score)}`}>{skill.score}/{skill.maxScore}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${getBarColor(skill.score)}`} style={{ width: `${skill.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Match & Job Readiness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
            <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-600" />
              Skill Match Ratio
            </h3>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#3b82f6" strokeWidth="3"
                    strokeDasharray={`${skillStats.skillMatchRatio} ${100 - skillStats.skillMatchRatio}`}
                    strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-blue-700">{skillStats.skillMatchRatio}%</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-relaxed">Your skills match <span className="font-bold text-slate-900">{skillStats.skillMatchRatio}%</span> of available industry requirements.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
            <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600" />
              Job Ready Ratio
            </h3>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f59e0b" strokeWidth="3"
                    strokeDasharray={`${skillStats.jobReadyRatio} ${100 - skillStats.jobReadyRatio}`}
                    strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-amber-700">{skillStats.jobReadyRatio}%</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 leading-relaxed">You are <span className="font-bold text-slate-900">{skillStats.jobReadyRatio}%</span> ready for Ayush industry placements.</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default SkillPage;
