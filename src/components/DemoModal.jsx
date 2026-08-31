import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  Layers,
  Award,
  BarChart3
} from 'lucide-react';
import { DEMO_STUDENT_PROFILE, HERO_STATS, PLATFORM_METADATA } from '../data/skillsetuData';

export const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeSandbox, setActiveSandbox] = useState('student');
  const [assessmentAnswered, setAssessmentAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50 rounded-t-3xl sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              SS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  SkillSetu Live Interactive Prototype Sandbox
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  SIH 2026 Jury Demo
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Problem Statement ID: {PLATFORM_METADATA.sihId} · {PLATFORM_METADATA.ministryFull}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sandbox Role Switcher Tabs */}
        <div className="p-4 sm:px-6 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveSandbox('student')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSandbox === 'student'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>01 · Student Radar & Assessment</span>
          </button>

          <button
            onClick={() => setActiveSandbox('industry')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSandbox === 'industry'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>02 · Industry Recruiter Pipeline</span>
          </button>

          <button
            onClick={() => setActiveSandbox('college')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSandbox === 'college'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>03 · Institutional Deficit Heatmap</span>
          </button>
        </div>

        {/* Sandbox Content Area */}
        <div className="p-6 sm:p-8 flex-1 space-y-6">
          
          {/* TAB 1: Student Sandbox */}
          {activeSandbox === 'student' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Active Student Scholar: Aarav Sharma (NIA Jaipur)
                  </h4>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Interactive simulation of the 5-dimension diagnostic assessment and instant competency radar mapping.
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-200 text-emerald-900">
                  Readiness: 87%
                </span>
              </div>

              {/* Sample Interactive Question */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span className="font-bold text-emerald-800 uppercase">Diagnostic Item #03</span>
                  <span>Schedule T & Phytochemistry</span>
                </div>

                <p className="text-sm font-bold text-slate-900">
                  In Ayurvedic formulation manufacturing, what is the mandatory moisture limit for powdered Churna according to the Ayurvedic Pharmacopoeia of India (API)?
                </p>

                <div className="space-y-2">
                  {[
                    { id: 'opt1', text: 'A) Not more than 10.0% w/w', isCorrect: true },
                    { id: 'opt2', text: 'B) Not more than 25.0% w/w', isCorrect: false },
                    { id: 'opt3', text: 'C) Exactly 0% anhydrous', isCorrect: false }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedOption(opt.id);
                        setAssessmentAnswered(true);
                      }}
                      className={`w-full text-left p-3 rounded-xl text-xs font-medium transition-all cursor-pointer border flex items-center justify-between ${
                        selectedOption === opt.id
                          ? opt.isCorrect
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold'
                            : 'bg-red-100 text-red-900 border-red-400 font-bold'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {selectedOption === opt.id && (
                        <span>{opt.isCorrect ? '✓ Correct Benchmark' : '✕ Deficit Identified'}</span>
                      )}
                    </button>
                  ))}
                </div>

                {assessmentAnswered && (
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between animate-in fade-in">
                    <span>Diagnostic Competency Vector dynamically updated in radar profile!</span>
                    <span className="font-bold text-emerald-800">+8 Score</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Industry Sandbox */}
          {activeSandbox === 'industry' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-amber-950">
                    Recruiter Console: Patanjali Research Foundation & Dabur R&D
                  </h4>
                  <p className="text-xs text-amber-800 mt-0.5">
                    Zero-noise candidate pipeline with pre-audited practical micro-sprint artifacts.
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-200 text-amber-950">
                  Active Opening: #AY-902
                </span>
              </div>

              {/* Sample Recruiter Candidate Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-soft space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-bold flex items-center justify-center">
                      AS
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Aarav Sharma</h4>
                      <p className="text-xs text-slate-500">BAMS Final Year · National Institute of Ayurveda, Jaipur</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                    94% Vector Match
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">Schedule T GMP</span>
                    <strong className="text-emerald-800">Expert (96%)</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">HPTLC Sprint</span>
                    <strong className="text-emerald-800">94/100 Score</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">Dravyaguna</span>
                    <strong className="text-emerald-800">Mastery (92%)</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">Hash Audit</span>
                    <strong className="text-emerald-800 font-mono">0x9F4C...</strong>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setApplicationSubmitted(true)}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    {applicationSubmitted ? '✓ Offer Letter / Fast-Track Shortlisted' : '1-Click Fast-Track Shortlist'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Institutional Sandbox */}
          {activeSandbox === 'college' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-blue-950">
                    College Intelligence: National Institute of Ayurveda (NIA Jaipur)
                  </h4>
                  <p className="text-xs text-blue-800 mt-0.5">
                    Real-time talent supply-demand visibility for academic deans and ministry coordinators.
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-200 text-blue-950">
                  Readiness Index: 89.2%
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <span className="text-2xl font-extrabold text-blue-900">640+</span>
                  <span className="text-xs text-slate-500 block mt-1">Enrolled Scholars</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <span className="text-2xl font-extrabold text-emerald-800">91.4%</span>
                  <span className="text-xs text-slate-500 block mt-1">Practical Sprint Pass Rate</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                  <span className="text-2xl font-extrabold text-amber-700">18 Active</span>
                  <span className="text-xs text-slate-500 block mt-1">Corporate MoUs</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Built for Smart India Hackathon 2026 Evaluation</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            Return to Landing Page
          </button>
        </div>

      </div>
    </div>
  );
};
