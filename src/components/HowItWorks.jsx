import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../data/stitchData';

export function HowItWorks({ onOpenReadinessModal }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = HOW_IT_WORKS_STEPS[activeStepIndex];

  return (
    <section id="how-it-works" className="premium-section py-16 lg:py-24 bg-surface tech-grid relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-fixed text-on-secondary-container px-4 py-1.5 rounded-full font-label-sm text-xs uppercase tracking-wider font-bold mb-4 inline-flex items-center gap-1.5 shadow-2xs"
          >
            <span className="material-symbols-outlined text-base">route</span>
            The Four-Step Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-4 tracking-tight"
          >
            How SkillSetu Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            A seamless four-step progression designed to assess, analyze, bridge, and match your Ayush skills to real-world clinical and industrial opportunities.
          </motion.p>

          {/* Step Selector Tabs for Easy Navigation with Smooth Pill Morph */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-surface-container-low/80 backdrop-blur-md rounded-2xl border border-outline-variant/30">
            {HOW_IT_WORKS_STEPS.map((s, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 z-10 ${
                    isActive ? 'text-white' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeStepPill"
                      transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                      className="absolute inset-0 bg-primary rounded-xl shadow-soft -z-10"
                    />
                  )}
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {s.step}
                  </span>
                  <span>{s.badge}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detailed Step Showcase with Motion Animation */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 sm:p-10 soft-shadow mb-16 relative overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Step Left Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-primary/30 font-display-lg">
                    STEP {currentStep.step}
                  </span>
                  <span className="bg-secondary-container text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {currentStep.badge}
                  </span>
                </div>

                <h3 className="font-display-lg text-2xl sm:text-3xl font-extrabold text-on-surface">
                  {currentStep.title}
                </h3>

                <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  {currentStep.highlights.map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-on-surface font-medium">
                        {h}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <button 
                    onClick={onOpenReadinessModal}
                    className="shimmer-btn bg-primary text-on-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 active:scale-95 shadow-soft cursor-pointer group"
                  >
                    <span>Explore Step {currentStep.step} Workflow</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>

                  <div className="text-xs text-outline font-medium flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">timer</span>
                    <span>{currentStep.demoMetric.label}: <strong>{currentStep.demoMetric.value}</strong></span>
                  </div>
                </div>
              </div>

              {/* Step Right Visual Card Representation */}
              <div className="lg:col-span-5">
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 relative overflow-hidden shadow-xs">
                  <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold shadow-xs">
                        <span className="material-symbols-outlined text-xl">{currentStep.icon}</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-outline uppercase tracking-wider">SkillSetu Module</div>
                        <div className="text-sm font-bold text-on-surface">{currentStep.title}</div>
                      </div>
                    </div>
                  </div>

                  {/* Step Specific Visual Components */}
                  {activeStepIndex === 0 && (
                    <div className="space-y-3 py-2 animate-fadeIn">
                      <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex justify-between items-center shadow-2xs">
                        <span className="text-xs font-semibold">Nadi Pariksha Scenario #4</span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">92% Accuracy</span>
                      </div>
                      <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex justify-between items-center shadow-2xs">
                        <span className="text-xs font-semibold">Dravyaguna Herb Analysis</span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">88% Score</span>
                      </div>
                      <div className="p-3 bg-surface rounded-xl border border-outline-variant/20 flex justify-between items-center shadow-2xs">
                        <span className="text-xs font-semibold">Panchakarma Protocol</span>
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">Verified</span>
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 1 && (
                    <div className="space-y-3 py-2 animate-fadeIn">
                      <div className="text-xs font-bold text-on-surface mb-1">Competency Radar Breakdown:</div>
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex justify-between text-xs font-semibold mb-1">
                            <span>Clinical Diagnosis</span>
                            <span className="text-primary font-bold">88%</span>
                          </div>
                          <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 0.6 }} className="bg-primary h-full rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-semibold mb-1">
                            <span>Herbology & Formulations</span>
                            <span className="text-tertiary font-bold">76%</span>
                          </div>
                          <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '76%' }} transition={{ duration: 0.6 }} className="bg-tertiary h-full rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 2 && (
                    <div className="space-y-3 py-2 animate-fadeIn">
                      <div className="p-3.5 bg-white rounded-xl border border-outline-variant/30 shadow-xs">
                        <div className="text-xs font-bold text-primary mb-1">Active Micro-Sprint</div>
                        <div className="text-sm font-semibold">2-Week Panchakarma Clinical Case Study</div>
                        <div className="text-xs text-outline mt-1">Mentor: Dr. R. K. Mishra (Senior Vaidya)</div>
                        <div className="mt-2 bg-emerald-50 text-emerald-800 text-xs px-2.5 py-1 rounded font-semibold inline-block border border-emerald-200">
                          Status: Day 8 of 14 Completed
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 3 && (
                    <div className="space-y-3 py-2 text-center animate-fadeIn">
                      <div className="w-20 h-20 mx-auto bg-white p-2 rounded-xl border border-outline-variant/40 shadow-xs flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-primary">qr_code_2</span>
                      </div>
                      <div className="text-xs font-bold text-on-surface">SkillSetu Verified Passport</div>
                      <div className="text-[11px] text-outline font-mono">ID: SKILL-AYUSH-2026-88912</div>
                      <div className="bg-emerald-700 text-white text-xs font-bold py-1.5 px-4 rounded-full inline-block shadow-xs">
                        Verified & Placement Ready
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-outline-variant/20 text-center">
                    <span className="text-[11px] text-outline font-semibold">
                      Synchronized National Workflow Engine
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Four Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <motion.div
              key={stepItem.step}
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeStepIndex === idx
                  ? 'bg-surface-container-lowest border-primary shadow-soft ring-2 ring-primary/20'
                  : 'bg-surface-bright border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low hover:shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-primary font-display-lg">
                  {stepItem.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-tertiary flex items-center justify-center shadow-2xs">
                  <span className="material-symbols-outlined text-xl">{stepItem.icon}</span>
                </div>
              </div>
              <h4 className="font-headline-md text-lg font-bold text-on-surface mb-2">
                {stepItem.title}
              </h4>
              <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">
                {stepItem.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
