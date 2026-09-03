import React from 'react';
import { motion } from 'framer-motion';
import { AYUSH_DISCIPLINES, SAMPLE_STUDENTS } from '../data/stitchData';

export function AboutEcosystem() {
  const benchmarkScores = [
    { name: 'Schedule T GMP Compliance', score: '94/100', level: 'Mastered' },
    { name: 'HPTLC Standardization Assay', score: '88/100', level: 'Verified' },
    { name: 'Clinical Nadi Pariksha Protocol', score: '92/100', level: 'Mastered' },
    { name: 'Good Clinical Practices (GCP)', score: '96/100', level: 'Verified' }
  ];

  return (
    <section className="premium-section py-16 lg:py-24 bg-surface tech-grid border-b border-outline-variant/30 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Profile Card & Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column Visual: Standardized Dossier Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-surface-bright border border-outline-variant/30 rounded-3xl p-6 sm:p-8 soft-shadow relative z-10 backdrop-blur-sm">
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-1">
                    Standardized Scholar Dossier
                  </h3>
                  <p className="text-sm text-on-surface-variant font-medium">
                    National Ayush Competency Framework
                  </p>
                  <p className="text-xs text-outline">NCISM & NCH Aligned · AIIA Validated Diagnostic</p>
                </div>
                <div className="bg-secondary-container text-tertiary px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-2xs">
                  <span className="material-symbols-outlined text-sm">verified</span> Verified Matrix
                </div>
              </div>

              {/* Match Score Display */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 mb-6 text-center shadow-xs">
                <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-1">
                  88%
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
                  Overall Clinical Readiness Index
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full mt-4 overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-r from-primary via-emerald-600 to-amber-500 h-full rounded-full" 
                  />
                </div>
              </div>

              {/* Assessment Scores List */}
              <div className="space-y-3">
                {benchmarkScores.map((ast, idx) => (
                  <div 
                    key={idx}
                    className="flex justify-between items-center p-3 border border-outline-variant/20 rounded-xl bg-white/70 shadow-2xs"
                  >
                    <span className="text-on-surface text-sm font-medium">{ast.name}</span>
                    <span className="text-primary font-bold text-sm bg-primary-container/15 px-2.5 py-0.5 rounded-md border border-primary/20">
                      {ast.score}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Decorative Offset Backdrop Frame */}
            <div className="absolute inset-0 bg-primary-container/15 transform translate-x-4 translate-y-4 rounded-3xl border border-outline-variant/20 z-0 hidden sm:block"></div>
          </motion.div>

          {/* Right Column Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant shadow-2xs">
              <span className="material-symbols-outlined text-base text-primary">insights</span>
              <span>Objective Clinical Benchmarks</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              A clearer view of <br />
              <span className="text-primary bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                candidate clinical readiness.
              </span>
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Moving beyond traditional marks sheets. SkillSetu provides a comprehensive profile highlighting practical competencies, standard clinical procedures, and verified achievements.
            </p>

            {/* Value Bullet Points */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-on-surface">Verified Credentials Dossier</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Authenticated credentials and standardized assessment results backed by institutional and mentor review.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">track_changes</span>
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-on-surface">Granular Competency Vectors</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Detailed breakdown of clinical, diagnostic, and herbal formulation competencies across all 5 Ayush streams.</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* All 5 Ayush Systems Displayed Directly as Distinct Comprehensive Cards */}
        <div className="pt-12 border-t border-outline-variant/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-secondary-container text-tertiary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
              National Ayush Scope
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface mt-3 mb-2">
              Covering All 5 Ayush Systems
            </h3>
            <p className="text-sm text-on-surface-variant">
              Comprehensive competency mapping across Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy.
            </p>
          </div>

          {/* 5 Distinct Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AYUSH_DISCIPLINES.map((disp, idx) => (
              <motion.div
                key={disp.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 soft-shadow flex flex-col justify-between hover:border-primary/40 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-container text-tertiary flex items-center justify-center font-bold shadow-2xs">
                      <span className="material-symbols-outlined text-2xl">{disp.icon}</span>
                    </div>
                    <span className="text-xs font-bold bg-secondary-container text-tertiary px-3 py-1 rounded-lg border border-outline-variant/20">
                      {disp.code}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-on-surface mb-2">
                    {disp.name}
                  </h4>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {disp.description}
                  </p>

                  <div className="pt-2 border-t border-outline-variant/20">
                    <span className="text-[11px] font-bold text-outline uppercase tracking-wider block mb-2">Core Evaluated Competencies:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {disp.coreSkills.map((skill, sIdx) => (
                        <span key={sIdx} className="bg-surface-container text-on-surface text-[11px] font-medium px-2.5 py-1 rounded-lg border border-outline-variant/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-xs">
                  <span className="text-outline font-medium">Nationwide Learners</span>
                  <span className="font-bold text-primary font-mono text-sm">{disp.studentsCount}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutEcosystem;
