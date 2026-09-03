import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLATFORM_FEATURES, SYSTEM_COMPARISON_DATA, DOXIMITY_HANDSHAKE_BENCHMARK } from '../data/stitchData';

export function Features() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Core Infrastructure', 'Assessment', 'Remediation', 'Placements', 'Credibility', 'Accessibility'];

  const filteredFeatures = selectedCategory === 'All'
    ? PLATFORM_FEATURES
    : PLATFORM_FEATURES.filter(f => f.category === selectedCategory);

  return (
    <section className="premium-section py-12 sm:py-16 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30 relative overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant mb-4 shadow-2xs"
          >
            <span className="material-symbols-outlined text-base text-primary">auto_awesome</span>
            <span>Enterprise Capabilities</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-3 sm:mb-4 tracking-tight break-words"
          >
            Proposed Solution Architecture
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            A centralized Ayush web platform connecting students, colleges, and pharmaceutical companies for skill testing, gap analysis, 15-minute bridge courses, and 1-click hiring.
          </motion.p>

          {/* Filter Categories with Pill */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-surface-container-low/70 rounded-2xl border border-outline-variant/30 backdrop-blur-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer z-10 ${
                    isActive ? 'text-white' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      className="absolute inset-0 bg-primary rounded-xl shadow-soft -z-10"
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredFeatures.map((feature) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4, scale: 1.01 }}
                key={feature.id}
                className="group p-6 sm:p-8 rounded-3xl border border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40 hover:bg-surface-container-low/40 hover:shadow-soft transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-container text-tertiary flex items-center justify-center font-bold shadow-xs transition-transform group-hover:scale-105 duration-300">
                      <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                    </div>
                    <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-bold border border-outline-variant/20 shadow-2xs">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-xs font-semibold text-primary">
                  <span>Category: {feature.category}</span>
                  <span className="text-slate-400 font-medium">Ayush Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Research-Backed Doximity + Handshake Opportunity & Key USP Section */}
        <div className="mt-16 pt-12 border-t border-outline-variant/30">
          
          {/* Executive Key USP Callout Banner */}
          <div className="bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden mb-12 border border-emerald-700/40">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-xs font-extrabold text-emerald-300 uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Strategic Architectural USP
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Learning + Mentorship + Research + Internships/Jobs + Networking
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base font-medium max-w-3xl leading-relaxed">
                Doximity pioneered professional healthcare networking for doctors, while Handshake built student career recruitment. SkillSetu synthesizes the best of both into one specialized national Ayush ecosystem—closing the clinical skill deficit across 42,000+ scholars and 7,345+ licensed pharma units.
              </p>
            </div>
          </div>

          {/* 6 Proposed Differentiation Pillars Grid */}
          <div className="mb-14">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/70 border border-emerald-300 text-emerald-900 rounded-full text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-sm">stars</span>
                6 Pillars of Differentiation
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                Purpose-Built for the Ayush Student Journey
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Solving the structural limitations of generic career platforms through domain-specific clinical and academic infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {DOXIMITY_HANDSHAKE_BENCHMARK.differentiationPillars.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all hover:border-emerald-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold shadow-2xs group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-800 mb-2">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>Ecosystem Metric:</span>
                    <span className="text-emerald-800 font-extrabold">{pillar.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doximity vs Handshake vs SkillSetu Architecture Breakdown */}
          <div className="mb-14">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/70 border border-emerald-300 text-emerald-900 rounded-full text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-sm">compare_arrows</span>
                Architectural Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Doximity vs Handshake vs SkillSetu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Understanding where international platforms excel and where their limitations create opportunities for Ayush.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {DOXIMITY_HANDSHAKE_BENCHMARK.platforms.map((p) => {
                const isSkillSetu = p.id === 'skillsetu';
                return (
                  <div 
                    key={p.id}
                    className={`rounded-2xl p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                      isSkillSetu 
                        ? 'bg-gradient-to-b from-emerald-50/70 to-white border-emerald-300 shadow-md ring-1 ring-emerald-400/30' 
                        : 'bg-white border-slate-200 shadow-2xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isSkillSetu 
                            ? 'bg-emerald-800 text-white font-extrabold' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {p.name}
                        </span>
                        {isSkillSetu && (
                          <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                            ★ Unified Platform
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {p.tagline}
                      </h4>
                      <p className="text-xs text-slate-500 mb-4 font-medium">
                        Target: {p.targetAudience}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block mb-1.5">
                            Core Strengths:
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {p.strengths.map((s, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-1.5">
                                <span className="material-symbols-outlined text-sm text-emerald-700 shrink-0 mt-0.5">check_circle</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {p.limitations.length > 0 && (
                          <div className="pt-2 border-t border-slate-100">
                            <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block mb-1.5">
                              Platform Gaps & Disadvantages:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                              {p.limitations.map((lim, lIdx) => (
                                <li key={lIdx} className="flex items-start gap-1.5">
                                  <span className="material-symbols-outlined text-sm text-rose-500 shrink-0 mt-0.5">cancel</span>
                                  <span>{lim}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500">
                        {isSkillSetu ? 'Status: 100% Ayush Domain Specialized' : 'Status: Generic / Non-Ayush'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Industry Comparison Matrix Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/70 border border-emerald-300 text-emerald-900 rounded-full text-xs font-bold mb-3">
              <span className="material-symbols-outlined text-sm">balance</span>
              Feature-by-Feature Benchmark
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Comprehensive Platform Comparison
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Evaluating SkillSetu against global healthcare networks, campus recruitment portals, and generic job boards.
            </p>
            <div className="flex items-center justify-center sm:hidden gap-1 text-[11px] text-emerald-800 font-semibold mt-3 bg-emerald-50 py-1 px-3 rounded-full border border-emerald-200/80 inline-flex">
              <span>Swipe horizontally to compare</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs w-full max-w-full">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4 sm:px-6">Feature</th>
                  <th className="py-4 px-3 sm:px-4 text-center bg-emerald-50 text-emerald-900 font-extrabold border-x border-emerald-200">
                    SKILLSETU
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center">Doximity</th>
                  <th className="py-4 px-3 sm:px-4 text-center">Handshake</th>
                  <th className="py-4 px-3 sm:px-4 text-center">LinkedIn</th>
                  <th className="py-4 px-3 sm:px-4 text-center">Internshala</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {SYSTEM_COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center bg-emerald-50/50 border-x border-emerald-100">
                      {row.skillsetu ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold" title="Fully Supported">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.doximity ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.handshake ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.linkedin ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.internshala ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Official Research Citations */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
            <span className="font-bold text-slate-800">Official Citations & References:</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>• WHO Notes $43.4B Indian Ayush Market (PIB Delhi)</span>
              <span>• NCISM Permitted Ayurveda Colleges & Seat Matrix (NCISM India)</span>
              <span>• CCRAS SPARK-4.0 Research Studentships for BAMS (PIB Delhi)</span>
              <span>• HSSC Formalizes 12 NQR Ayush Skill Packs (PIB Delhi)</span>
              <span>• Ministry of Ayush: 7,345+ Licensed Pharmacies (PIB Delhi)</span>
              <span>• Doximity & Handshake Architecture Comparative Analysis</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
