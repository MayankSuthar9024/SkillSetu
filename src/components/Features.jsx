import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLATFORM_FEATURES, SYSTEM_COMPARISON_DATA } from '../data/stitchData';

export function Features() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Core Infrastructure', 'Assessment', 'Remediation', 'Placements', 'Credibility', 'Accessibility'];

  const filteredFeatures = selectedCategory === 'All'
    ? PLATFORM_FEATURES
    : PLATFORM_FEATURES.filter(f => f.category === selectedCategory);

  return (
    <section className="premium-section py-16 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant mb-4 shadow-2xs"
          >
            <span className="material-symbols-outlined text-base text-primary">auto_awesome</span>
            <span>Documented Core Innovations (Slide 2)</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4 tracking-tight"
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
                  <span className="text-slate-400 font-medium">SIH26044 Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Comparison With Existing Systems (Slide 6 & 7) */}
        <div className="mt-16 pt-12 border-t border-outline-variant/30">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/70 border border-emerald-300 text-emerald-900 rounded-full text-xs font-bold mb-3">
              <span className="material-symbols-outlined text-sm">balance</span>
              Documented Benchmark Comparison (Slide 6 & 7)
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Comparison With Existing Systems
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Why SkillSetu outperforms generic recruitment portals by catering strictly to Ayush domain competencies.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4 sm:px-6">Feature</th>
                  <th className="py-4 px-3 sm:px-4 text-center bg-emerald-50 text-emerald-900 font-extrabold border-x border-emerald-200">
                    SKILLSETU
                  </th>
                  <th className="py-4 px-3 sm:px-4 text-center">AICTE Portal</th>
                  <th className="py-4 px-3 sm:px-4 text-center">Internshala</th>
                  <th className="py-4 px-3 sm:px-4 text-center">LinkedIn</th>
                  <th className="py-4 px-3 sm:px-4 text-center">NCS Portal</th>
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
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.aicte ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
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
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
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
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                          <span className="material-symbols-outlined text-base">check</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 text-rose-600">
                          <span className="material-symbols-outlined text-base">close</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-center">
                      {row.ncs ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
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

          {/* Official Research Citations directly from Slide 6 */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
            <span className="font-bold text-slate-800">Official Citations & References:</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>• WHO Notes $43.4B Indian Ayush Market (PIB Delhi)</span>
              <span>• NCISM Permitted Ayurveda Colleges & Seat Matrix (NCISM India)</span>
              <span>• CCRAS SPARK-4.0 Research Studentships for BAMS (PIB Delhi)</span>
              <span>• HSSC Formalizes 12 NQR Ayush Skill Packs (PIB Delhi)</span>
              <span>• Ministry of Ayush: 7,345+ Licensed Pharmacies (PIB Delhi)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
