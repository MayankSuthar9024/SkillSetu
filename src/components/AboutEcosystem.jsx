import React, { useState } from 'react';
import { AYUSH_DISCIPLINES, SAMPLE_STUDENTS } from '../data/stitchData';

export function AboutEcosystem({ onOpenReadinessModal }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState(AYUSH_DISCIPLINES[0]);
  const johnStudent = SAMPLE_STUDENTS[1]; // John Doe 78% score profile

  return (
    <section className="premium-section py-16 lg:py-24 bg-surface tech-grid border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Product Detail Section: Replicating Stitch About Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column Visual: John Doe Profile Card */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-surface-bright border border-outline-variant/30 rounded-2xl p-6 sm:p-8 soft-shadow relative z-10">
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface mb-1">
                    {johnStudent.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-medium">
                    {johnStudent.degree}
                  </p>
                  <p className="text-xs text-outline">{johnStudent.institution}</p>
                </div>
                <div className="bg-secondary-container text-tertiary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified</span> Verified Profile
                </div>
              </div>

              {/* Match Score Display */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 mb-6 text-center">
                <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-primary mb-1">
                  {johnStudent.readinessScore}%
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
                  Industry Match Score
                </div>
                <div className="w-full h-2.5 bg-surface-container rounded-full mt-4 overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-500" 
                    style={{ width: `${johnStudent.readinessScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Assessment Scores List */}
              <div className="space-y-3">
                {johnStudent.assessments.map((ast, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 border border-outline-variant/20 rounded-lg hover:bg-surface-container-low hover:border-primary/30 transition-all">
                    <span className="text-on-surface text-sm font-medium">{ast.name}</span>
                    <span className="text-primary font-bold text-sm bg-primary-container/10 px-2.5 py-0.5 rounded-md">{ast.score}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Decorative Offset Backdrop Frame */}
            <div className="absolute inset-0 bg-primary-container/10 transform translate-x-4 translate-y-4 rounded-2xl border border-outline-variant/20 z-0 hidden sm:block"></div>
          </div>

          {/* Right Column Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant">
              <span className="material-symbols-outlined text-base text-primary">insights</span>
              <span>Data-Driven Insights</span>
            </div>

            <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight tracking-tight">
              A clearer view of <br />
              <span className="text-primary">student readiness.</span>
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Go beyond traditional academic transcripts. SkillSetu provides a comprehensive profile that highlights practical competencies, industry-aligned skill scores, and verified achievements, making it easier for employers to find the right talent.
            </p>

            {/* Value Bullet Points */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-on-surface">Verified Profiles</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant">Authenticated credentials and standardized assessment results backed by institutional review.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">track_changes</span>
                <div>
                  <h4 className="font-label-sm text-sm font-bold text-on-surface">Granular Skill Tracking</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant">Detailed breakdown of clinical, diagnostic, and herbal treatment competencies across 5 Ayush disciplines.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenReadinessModal}
                className="bg-primary text-on-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-soft"
              >
                <span>Calculate Student Readiness</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>

        {/* Ayush Disciplines Focus Section */}
        <div className="pt-12 border-t border-outline-variant/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-secondary-container text-tertiary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              National Ayush Scope
            </span>
            <h3 className="font-display-lg text-2xl sm:text-3xl font-extrabold text-on-surface mt-3 mb-2">
              Covering All 5 Ayush Systems
            </h3>
            <p className="text-sm text-on-surface-variant">
              SkillSetu maps skills across Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy medical qualifications.
            </p>
          </div>

          {/* Discipline Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {AYUSH_DISCIPLINES.map((disp) => (
              <button
                key={disp.id}
                onClick={() => setSelectedDiscipline(disp)}
                className={`p-4 rounded-xl border text-center transition-all ${
                  selectedDiscipline.id === disp.id
                    ? 'bg-primary text-on-primary border-primary shadow-soft scale-105 font-bold'
                    : 'bg-surface-bright border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low font-semibold'
                }`}
              >
                <span className="material-symbols-outlined text-2xl mb-1 block">{disp.icon}</span>
                <div className="text-sm leading-tight">{disp.name}</div>
                <div className={`text-[11px] mt-1 ${selectedDiscipline.id === disp.id ? 'text-primary-fixed-dim' : 'text-outline'}`}>
                  {disp.code}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Discipline Details */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 sm:p-8 soft-shadow">
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
                      <span key={idx} className="bg-surface-container text-on-surface text-xs font-semibold px-3 py-1 rounded-lg border border-outline-variant/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-surface-container-low p-5 rounded-xl border border-outline-variant/20 text-center">
                <div className="text-xs font-semibold text-outline uppercase tracking-wider mb-1">Active Students Nationwide</div>
                <div className="font-display-lg text-3xl font-extrabold text-primary mb-2">
                  {selectedDiscipline.studentsCount}
                </div>
                <div className="text-xs text-on-surface-variant bg-white p-3 rounded-lg border border-outline-variant/20 font-medium">
                  Standardized NCISM & NCH mapped skill assessment modules available.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutEcosystem;
