import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Flame, 
  FileText, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { MICRO_SPRINT_CASE_STUDY } from '../data/skillsetuData';

export const MicroSprint = ({ onOpenDemo }) => {
  const [activeSprintStep, setActiveSprintStep] = useState(1);

  return (
    <section id="micro-sprints" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Critical Key Innovation · SIH26044 Differentiator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Beyond MCQs. <span className="text-emerald-800">Prove What You Can Do.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real clinical and industrial competence cannot be measured through rote multiple-choice quizzes alone. SkillSetu introduces hands-on, rubric-evaluated micro-sprints.
          </p>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* LEFT: Traditional MCQ Assessment (Weak Status Quo) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-300 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 uppercase tracking-wider">
                  The Old Paradigm
                </span>
                <span className="text-xs font-bold text-red-700 flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  <span>Theoretical Only</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Standard Multiple-Choice Assessment
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Tests rote memorization and surface-level recall without clinical or laboratory application.
              </p>

              {/* Mock MCQ Question Box */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3 mb-6">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span>Question 14 of 50</span>
                  <span>Time Left: 24:10</span>
                </div>
                
                <p className="text-xs font-bold text-slate-800">
                  What is the primary Rf value standard tolerance for gallic acid in Triphala HPTLC analysis?
                </p>

                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>A) 0.12 - 0.18</span>
                    <span className="w-3 h-3 rounded-full border border-slate-300"></span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 font-semibold flex items-center justify-between">
                    <span>B) 0.38 - 0.44 (Selected)</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>C) 0.65 - 0.72</span>
                    <span className="w-3 h-3 rounded-full border border-slate-300"></span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Calculated Score: 82%</span>
                  <span className="text-slate-400 text-[10px]">MCQ Check</span>
                </div>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-3.5 rounded-xl bg-red-50/80 border border-red-200 text-center">
              <span className="text-xs font-bold text-red-900 block">
                “Knowledge checked. Capability unclear.”
              </span>
              <span className="text-[11px] text-red-700 mt-0.5 block">
                Employers cannot verify if the student can actually operate an HPTLC scanner or resolve real batch discrepancies.
              </span>
            </div>
          </div>

          {/* RIGHT: SkillSetu Hands-on Micro-Sprint (Differentiator) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-elevated border-2 border-emerald-500/80 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>The SkillSetu Innovation</span>
                </span>
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Proof-of-Work Evidence</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Industry-Oriented Micro-Sprint Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 mb-6">
                Students solve real-world industry case studies, execute protocols, submit deliverables, and earn verifiable cryptographic evidence.
              </p>

              {/* Case Study Pipeline Box */}
              <div className="bg-slate-900/90 rounded-2xl p-5 border border-emerald-700/60 shadow-md space-y-4 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Active Demonstration Case
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {MICRO_SPRINT_CASE_STUDY.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{MICRO_SPRINT_CASE_STUDY.estimatedTime}</span>
                  </div>
                </div>

                {/* 5-Step Pipeline Navigation */}
                <div className="grid grid-cols-5 gap-1.5">
                  {MICRO_SPRINT_CASE_STUDY.steps.map((st, idx) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveSprintStep(idx)}
                      className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                        activeSprintStep === idx 
                          ? 'bg-emerald-700 text-white border-emerald-400 shadow-xs ring-1 ring-emerald-300' 
                          : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-[9px] font-mono block font-bold">{st.num}</span>
                      <span className="text-[10px] font-bold line-clamp-1">{st.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Active Step Details */}
                <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-emerald-300">
                      Step {MICRO_SPRINT_CASE_STUDY.steps[activeSprintStep].num} — {MICRO_SPRINT_CASE_STUDY.steps[activeSprintStep].name}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Sprint Stage</span>
                  </div>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    {MICRO_SPRINT_CASE_STUDY.steps[activeSprintStep].detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-500/50 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>“Skills demonstrated & verified by enterprise rubric.”</span>
                </span>
                <span className="text-[11px] text-emerald-200 mt-0.5 block">
                  Employer sees exact chromatogram interpretation and protocol execution proof.
                </span>
              </div>

              <button
                onClick={onOpenDemo}
                className="shrink-0 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Launch Micro-Sprint
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
