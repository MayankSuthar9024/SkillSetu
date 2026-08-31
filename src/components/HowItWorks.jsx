import React, { useState } from 'react';
import { 
  Compass, 
  GitFork, 
  BookOpen, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/skillsetuData';

const stepIconMap = {
  Compass,
  GitFork,
  BookOpen,
  Flame,
  ShieldCheck,
  Sparkles,
  TrendingUp
};

export const HowItWorks = ({ onOpenDemo }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(3); // Default on 04 Challenge

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>The 7-Stage Competency Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How SkillSetu Transforms <span className="text-emerald-800">Academic Potential.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A seamless journey from initial clinical diagnostic assessment to verified industry placement and continuing education.
          </p>
        </div>

        {/* 7-Step Navigation Ribbon */}
        <div className="flex items-center justify-start lg:justify-between gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => {
            const Icon = stepIconMap[stepItem.icon] || Compass;
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={stepItem.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all cursor-pointer border text-left ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-600/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                  isActive ? 'bg-emerald-700 text-white' : 'bg-white text-slate-600 shadow-2xs'
                }`}>
                  {stepItem.step}
                </div>
                <div>
                  <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {stepItem.title}
                  </div>
                  <div className={`text-[10px] font-medium ${isActive ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {stepItem.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-elevated border border-emerald-800/60 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Step Left Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                <span>Stage {HOW_IT_WORKS_STEPS[activeStepIndex].step} of 07</span>
                <span>·</span>
                <span>{HOW_IT_WORKS_STEPS[activeStepIndex].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Step {HOW_IT_WORKS_STEPS[activeStepIndex].step} — {HOW_IT_WORKS_STEPS[activeStepIndex].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {HOW_IT_WORKS_STEPS[activeStepIndex].description}
              </p>

              {/* Concrete Outcome Box */}
              <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-600/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                    Measurable Milestone / Deliverable
                  </span>
                  <p className="text-xs text-emerald-100 font-medium">
                    {HOW_IT_WORKS_STEPS[activeStepIndex].outcome}
                  </p>
                </div>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStepIndex === HOW_IT_WORKS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(HOW_IT_WORKS_STEPS.length - 1, prev + 1))}
                  className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Step Right Interactive Visualization Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-emerald-700/50 shadow-lg space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-200">Interactive Stage Simulation</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">SIH26044.PIPE</span>
                </div>

                {/* Dynamic Content based on active step */}
                {activeStepIndex === 0 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 block">Sample Diagnostic Item</span>
                      <p className="font-semibold text-white mt-1">Schedule T GMP: Air handling unit (AHU) classification for sterile eye drop formulation.</p>
                      <div className="grid grid-cols-2 gap-1.5 mt-2">
                        <span className="p-1.5 bg-emerald-950 text-emerald-300 border border-emerald-700 rounded text-[10px]">Class 100 (Grade A)</span>
                        <span className="p-1.5 bg-slate-800 text-slate-400 rounded text-[10px]">Class 10,000 (Grade C)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStepIndex === 1 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 space-y-2">
                      <span className="text-[10px] text-slate-400 block">Skill-Gap Delta Analysis</span>
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>HPTLC Fingerprinting</span>
                        <span className="text-amber-400 font-bold">-18% Deficit</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full">
                        <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Rasa Shastra Classical</span>
                        <span className="text-emerald-400 font-bold">+12% Surplus</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full">
                        <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStepIndex === 2 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 block">Recommended Bridge Pathway</span>
                      <h4 className="font-bold text-white mt-1">Schedule T Compliance & NABL Audit Preparation</h4>
                      <p className="text-[11px] text-slate-300 mt-1">Curated by NIA Jaipur × Dabur R&D Faculty Mentors</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] bg-emerald-900 text-emerald-200 border border-emerald-600">3 Modular Units · 4.5 Hours</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 3 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-amber-400 font-bold block">Live Micro-Sprint</span>
                      <h4 className="font-bold text-white mt-1">Triphala Extract HPTLC Standardization Protocol</h4>
                      <p className="text-[11px] text-slate-300 mt-1">Real-world pharmaceutical batch anomaly resolution.</p>
                      <div className="mt-2 text-[10px] text-emerald-300 font-mono bg-emerald-950/80 p-2 rounded border border-emerald-800">
                        Status: Practical Submission Verified (Score 94%)
                      </div>
                    </div>
                  </div>
                )}

                {activeStepIndex === 4 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 block">Cryptographic Credential</span>
                      <h4 className="font-bold text-white mt-1">Tamper-Proof Dossier Verification</h4>
                      <p className="text-[11px] font-mono text-emerald-400 break-all mt-1">HASH: 0x9F4CB28E...AYUSH2026</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] bg-emerald-900 text-emerald-200 border border-emerald-600">Digital Certificate Signed</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 5 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 block">Recruiter Pipeline Match</span>
                      <h4 className="font-bold text-white mt-1">Patanjali Research / Dabur R&D</h4>
                      <p className="text-[11px] text-emerald-300 font-bold mt-1">94% Competency Match Score</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] bg-amber-900/60 text-amber-200 border border-amber-600">1-Click Fast-Track Application</span>
                    </div>
                  </div>
                )}

                {activeStepIndex === 6 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                      <span className="text-[10px] text-slate-400 block">Lifelong Trajectory</span>
                      <h4 className="font-bold text-white mt-1">Continuing Ayush Medical Education (CME)</h4>
                      <p className="text-[11px] text-slate-300 mt-1">Faculty research collaboration & Ayush startup incubation.</p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] bg-emerald-900 text-emerald-200 border border-emerald-600">National Ayush Scholar Network</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={onOpenDemo}
                  className="w-full py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer text-center"
                >
                  Test Step in Live Sandbox
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
