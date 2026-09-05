import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../data/stitchData';

export function HowItWorks() {
  const renderStepVisual = (stepNum) => {
    switch (stepNum) {
      case '01':
        return (
          <div className="space-y-3 py-2">
            <div className="text-xs font-bold text-slate-800 mb-1">Visual 6-Axis Competency Radar:</div>
            <div className="p-3.5 bg-white rounded-xl border border-outline-variant/20 flex justify-between items-center shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-lg">verified</span>
                <span className="text-xs font-semibold text-slate-800">Schedule T GMP Cleanroom Protocol</span>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">94% Benchmark</span>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-outline-variant/20 flex justify-between items-center shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-lg">biotech</span>
                <span className="text-xs font-semibold text-slate-800">HPTLC Standardization Assay</span>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">88% Benchmark</span>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-outline-variant/20 flex justify-between items-center shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-700 text-lg">ecg_heart</span>
                <span className="text-xs font-semibold text-slate-800">Nadi Pariksha & Clinical Diagnosis</span>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">92% Benchmark</span>
            </div>
          </div>
        );
      case '02':
        return (
          <div className="space-y-3 py-2">
            <div className="text-xs font-bold text-slate-800 mb-1">Automated Deficit Detection Engine:</div>
            <div className="space-y-3 bg-white p-4 rounded-xl border border-outline-variant/20 shadow-2xs">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Schedule T GMP Compliance</span>
                  <span className="text-amber-700 font-bold">55% Industry Deficit Detected</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-600 h-full rounded-full w-[45%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Curriculum-to-Industry Alignment</span>
                  <span className="text-primary font-bold">12 HSSC NQR Qualification Packs</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-[94%]" />
                </div>
              </div>
            </div>
          </div>
        );
      case '03':
        return (
          <div className="space-y-3 py-2">
            <div className="p-4 bg-white rounded-xl border border-outline-variant/30 shadow-2xs">
              <div className="flex justify-between items-center mb-1.5">
                <div className="text-xs font-bold text-primary">Pharma R&D Micro-Bridge</div>
                <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">15-Minute Sprint</span>
              </div>
              <div className="text-sm font-semibold text-slate-900">Schedule T Sterile Manufacturing & QA/QC</div>
              <div className="text-xs text-outline mt-1">Co-developed by Dabur R&D & AIIA Preceptors</div>
              <div className="mt-2.5 bg-emerald-50 text-emerald-800 text-xs px-2.5 py-1 rounded font-semibold inline-block border border-emerald-200">
                Remediation: Unlocks 1-Click Industry Matching
              </div>
            </div>
          </div>
        );
      case '04':
        return (
          <div className="space-y-3 py-2 text-center bg-white p-4 rounded-xl border border-outline-variant/30 shadow-2xs">
            <div className="w-16 h-16 mx-auto bg-slate-50 p-2 rounded-xl border border-outline-variant/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-primary">verified_user</span>
            </div>
            <div className="text-xs font-bold text-slate-900">100% SHA-256 Verifiable Ayush Dossier</div>
            <div className="text-[11px] text-outline font-mono">HASH: 8f2b7...d4a19 · 7,345+ Factories Linked</div>
            <div className="bg-emerald-700 text-white text-xs font-bold py-1 px-3.5 rounded-full inline-block mt-1">
              1-Click Shortlist Enabled (40% Faster Hiring)
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="how-it-works" className="premium-section py-8 sm:py-14 lg:py-20 bg-surface tech-grid relative overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            className="bg-secondary-fixed text-on-secondary-container px-4 py-1.5 rounded-full font-label-sm text-xs uppercase tracking-wider font-bold mb-4 inline-flex items-center gap-1.5 shadow-2xs"
          >
            <span className="material-symbols-outlined text-base">route</span>
            Three-Phase Competency Pipeline
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-3 sm:mb-4 tracking-tight break-words"
          >
            Radar → Bridge → 1-Click Apply
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            A standardized methodology connecting Ayush scholars with verified industry opportunities: visual 6-axis competency mapping, 15-minute pharmaceutical micro-courses, and frictionless 1-click hiring.
          </motion.p>
        </div>

        {/* All 4 Distinct Step Showcases Rendered Direct Without Tab Clicking */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "60px 0px -20px 0px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 soft-shadow relative overflow-hidden backdrop-blur-sm w-full max-w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-primary/30 font-display-lg">
                      STEP {stepItem.step}
                    </span>
                    <span className="bg-secondary-container text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {stepItem.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-on-surface">
                    {stepItem.title}
                  </h3>

                  <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {stepItem.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-1">
                    {stepItem.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                          check_circle
                        </span>
                        <span className="text-xs sm:text-sm text-on-surface font-medium">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-outline font-medium flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">timer</span>
                    <span>{stepItem.benchmarkMetric?.label}: <strong>{stepItem.benchmarkMetric?.value}</strong></span>
                  </div>
                </div>

                {/* Right Interactive Simulation Box */}
                <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/30 rounded-2xl p-5 shadow-2xs">
                  <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold shadow-xs">
                      <span className="material-symbols-outlined text-lg">{stepItem.icon}</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-outline uppercase tracking-wider">Module Simulation</div>
                      <div className="text-xs font-bold text-on-surface">{stepItem.title}</div>
                    </div>
                  </div>

                  {renderStepVisual(stepItem.step)}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
