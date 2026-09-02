import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AYUSH_DISCIPLINES, SAMPLE_STUDENTS } from '../data/stitchData';

export function AboutEcosystem({ onOpenReadinessModal }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState(AYUSH_DISCIPLINES[0]);
  const featuredScholar = SAMPLE_STUDENTS[1]; // Kabir Mehta 78% score profile

  return (
    <section className="premium-section py-16 lg:py-24 bg-surface tech-grid border-b border-outline-variant/30 relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column Visual: Profile Card with Motion Hover */}
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
                  <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface mb-1">
                    {featuredScholar.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-medium">
                    {featuredScholar.degree}
                  </p>
                  <p className="text-xs text-outline">{featuredScholar.institution}</p>
                </div>
                <div className="bg-secondary-container text-tertiary px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-2xs">
                  <span className="material-symbols-outlined text-sm">verified</span> Verified Profile
                </div>
              </div>

              {/* Match Score Display */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 mb-6 text-center shadow-xs">
                <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-primary mb-1">
                  {featuredScholar.readinessScore}%
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
                  Industry Vector Match Score
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full mt-4 overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${featuredScholar.readinessScore}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-r from-primary via-emerald-600 to-amber-500 h-full rounded-full" 
                  />
                </div>
              </div>

              {/* Assessment Scores List */}
              <div className="space-y-3">
                {featuredScholar.assessments.map((ast, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.015, x: 2 }}
                    className="flex justify-between items-center p-3 border border-outline-variant/20 rounded-xl bg-white/70 hover:bg-white hover:border-primary/40 transition-all shadow-2xs"
                  >
                    <span className="text-on-surface text-sm font-medium">{ast.name}</span>
                    <span className="text-primary font-bold text-sm bg-primary-container/15 px-2.5 py-0.5 rounded-md border border-primary/20">
                      {ast.score}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Decorative Offset Backdrop Frame */}
            <div className="absolute inset-0 bg-primary-container/15 transform translate-x-4 translate-y-4 rounded-3xl border border-outline-variant/20 z-0 hidden sm:block"></div>
          </motion.div>

          {/* Right Column Content with Stagger */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant shadow-2xs">
              <span className="material-symbols-outlined text-base text-primary">insights</span>
              <span>Data-Driven Insights</span>
            </div>

            <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight tracking-tight">
              A clearer view of <br />
              <span className="text-primary bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                student clinical readiness.
              </span>
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Go beyond traditional academic transcripts. SkillSetu provides a comprehensive profile that highlights practical competencies, industry-aligned skill scores, and verified achievements, making it easier for employers to find the right talent.
            </p>

            {/* Value Bullet Points */}
            <ul className="space-y-4 pt-2">
              <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 transition-transform">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-on-surface">Verified Identity Dossier</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Authenticated credentials and standardized assessment results backed by institutional and mentor signatures.</p>
                </div>
              </motion.li>
              <motion.li whileHover={{ x: 3 }} className="flex items-start gap-3 transition-transform">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">track_changes</span>
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-on-surface">Granular Competency Vectors</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">Detailed breakdown of clinical, diagnostic, and herbal formulation competencies across 5 Ayush disciplines.</p>
                </div>
              </motion.li>
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenReadinessModal}
                className="shimmer-btn bg-primary text-on-primary font-semibold text-sm px-6 py-3.5 rounded-2xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-soft cursor-pointer group active:scale-95"
              >
                <span>Calculate Student Readiness</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Ayush Disciplines Focus Section */}
        <div className="pt-12 border-t border-outline-variant/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-secondary-container text-tertiary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
              National Ayush Scope
            </span>
            <h3 className="font-display-lg text-2xl sm:text-3xl font-extrabold text-on-surface mt-3 mb-2">
              Covering All 5 Ayush Systems
            </h3>
            <p className="text-sm text-on-surface-variant">
              SkillSetu maps skills across Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy medical qualifications.
            </p>
          </div>

          {/* Discipline Selector Grid with Apple Spring Morph */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {AYUSH_DISCIPLINES.map((disp) => {
              const isSelected = selectedDiscipline.id === disp.id;
              return (
                <button
                  key={disp.id}
                  onClick={() => setSelectedDiscipline(disp)}
                  className={`relative p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-on-primary border-primary shadow-soft font-bold'
                      : 'bg-surface-bright border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low font-semibold'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl mb-1 block">{disp.icon}</span>
                  <div className="text-sm leading-tight">{disp.name}</div>
                  <div className={`text-[11px] mt-1 ${isSelected ? 'text-primary-fixed-dim' : 'text-outline'}`}>
                    {disp.code}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Discipline Details with Motion AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedDiscipline.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 sm:p-8 soft-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold bg-secondary-container text-tertiary px-3 py-1 rounded-md">
                      {selectedDiscipline.code}
                    </span>
                    <h4 className="font-display-lg text-xl sm:text-2xl font-bold text-on-surface">
                      {selectedDiscipline.name} Discipline
                    </h4>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {selectedDiscipline.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-outline uppercase tracking-wider block mb-2">Core Evaluated Skills:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDiscipline.coreSkills.map((skill, idx) => (
                        <span key={idx} className="bg-surface-container text-on-surface text-xs font-semibold px-3 py-1 rounded-lg border border-outline-variant/30 shadow-2xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 text-center space-y-2">
                  <div className="text-xs font-semibold text-outline uppercase tracking-wider">Active Students Nationwide</div>
                  <div className="font-display-lg text-3xl font-extrabold text-primary">
                    {selectedDiscipline.studentsCount}
                  </div>
                  <div className="text-xs text-on-surface-variant bg-white p-3 rounded-xl border border-outline-variant/20 font-medium shadow-2xs">
                    Standardized NCISM & NCH mapped skill assessment modules available.
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default AboutEcosystem;
