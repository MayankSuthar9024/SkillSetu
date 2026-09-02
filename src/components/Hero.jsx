import React, { useState } from 'react';
import { SAMPLE_STUDENTS, TRUST_METRICS } from '../data/stitchData';

export function Hero({ onGetStarted, onSeeHowItWorks, onOpenReadinessModal }) {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const currentStudent = SAMPLE_STUDENTS[selectedStudentIndex];

  return (
    <section className="relative pt-10 lg:pt-16 pb-20 hero-grid-bg border-b border-outline-variant/30 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Hero Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left reveal-up">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 text-primary border border-white rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-sm backdrop-blur">
            <span className="material-symbols-outlined text-base">workspace_premium</span>
            <span>SIH 2026 National Ayush Talent Engine</span>
          </div>

          <h1 className="hero-title font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface leading-[1.08] tracking-[-0.045em]">
            Build skills. <br />
            <span className="text-primary bg-gradient-to-r from-primary via-primary-container to-tertiary bg-clip-text text-transparent">
              Prove your skills.
            </span> <br />
            Find your next opportunity.
          </h1>

          <p className="hero-copy font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed">
            SkillSetu connects Ayush students, institutional curriculum, practical competency assessments, and career opportunities in one unified platform. Bridging the gap between academic learning and clinical readiness.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <button 
              onClick={onGetStarted}
              className="bg-primary text-on-primary font-label-sm text-base py-4 px-8 rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-medium flex items-center justify-center gap-2 font-semibold"
            >
              <span>Get Started Free</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>

            <button 
              onClick={onSeeHowItWorks}
              className="bg-secondary-container text-tertiary font-label-sm text-base py-4 px-8 rounded-2xl border border-outline-variant/50 hover:bg-surface-container-highest transition-colors active:scale-95 flex items-center justify-center gap-2 font-semibold"
            >
              <span className="material-symbols-outlined text-xl">play_circle</span>
              <span>See How It Works</span>
            </button>
          </div>

          {/* Quick Discipline Tags */}
          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs font-semibold text-on-surface-variant">
            <span className="text-outline uppercase tracking-wider">Disciplines:</span>
            <span className="bg-surface-container px-2.5 py-1 rounded-md">Ayurveda (BAMS)</span>
            <span className="bg-surface-container px-2.5 py-1 rounded-md">Yoga (BNYS)</span>
            <span className="bg-surface-container px-2.5 py-1 rounded-md">Unani (BUMS)</span>
            <span className="bg-surface-container px-2.5 py-1 rounded-md">Siddha (BSMS)</span>
            <span className="bg-surface-container px-2.5 py-1 rounded-md">Homeopathy (BHMS)</span>
          </div>

        </div>

        {/* Right Column: Stitch Interactive Student Dashboard Preview */}
        <div className="relative reveal-up reveal-delay-2">
          {/* Card Wrapper */}
          <div className="hero-preview-card bg-surface-container-lowest/95 border border-white rounded-[28px] p-6 sm:p-8 soft-shadow-elevated relative z-20 transition-all duration-300 hover:border-primary/40 backdrop-blur-sm">
            {/* Editorial image layer */}
            <div className="relative h-44 sm:h-52 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-[28px]">
              <img
                src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&q=85&w=1200"
                alt="Ayurvedic herbs and wellness practice"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ayush-darker/75 via-ayush-darker/10 to-transparent" />
              <div className="hero-image-copy absolute left-5 bottom-5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ayush-lightEmerald">The SkillSetu standard</p>
                <p className="mt-1 text-lg font-bold">Learn with purpose. Practice with confidence.</p>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-primary shadow-lg backdrop-blur">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ayush-emerald align-middle" /> Live preview
              </div>
            </div>
            
            {/* Header & Student Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-outline-variant/20 pb-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full ring-2 ring-primary/20 p-0.5 overflow-hidden bg-surface-container shadow-inner">
                  <img 
                    className="w-full h-full object-cover rounded-full" 
                    src={currentStudent.avatar} 
                    alt={currentStudent.name} 
                  />
                </div>
                <div>
                  <h3 className="font-headline-md text-lg font-bold text-on-surface flex items-center gap-2">
                    {currentStudent.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                    {currentStudent.degree}
                  </p>
                  <p className="text-[11px] text-outline truncate max-w-[200px]">
                    {currentStudent.institution}
                  </p>
                </div>
              </div>

              <div className="bg-secondary-container text-tertiary px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-base">verified</span> 
                {currentStudent.verifiedStatus}
              </div>
            </div>

            {/* Readiness Score Bar */}
            <div className="mb-6 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline block">Clinical Competency</span>
                  <span className="font-headline-md text-sm font-semibold text-on-surface-variant">Readiness Score</span>
                </div>
                <div className="text-right">
                  <span className="font-display-lg text-3xl font-extrabold text-primary">
                    {currentStudent.readinessScore}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-high h-3.5 rounded-full overflow-hidden p-0.5">
                <div 
                  className="bg-gradient-to-r from-primary via-primary-container to-tertiary h-full rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${currentStudent.readinessScore}%` }}
                ></div>
              </div>
            </div>

            {/* Assessment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {currentStudent.assessments.map((ast, idx) => (
                <div key={idx} className="border border-outline-variant/30 rounded-xl p-3.5 bg-surface-bright hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-primary text-xl">{ast.icon}</span>
                    <span className="text-xs font-semibold text-on-surface truncate">{ast.name}</span>
                  </div>
                  <div className="font-label-sm text-xs font-bold text-tertiary bg-secondary-container/60 px-2 py-0.5 rounded-md inline-block">
                    {ast.score}
                  </div>
                </div>
              ))}
            </div>

            {/* Student Switcher Buttons */}
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs">
              <span className="text-outline font-medium">Switch Demo Candidate:</span>
              <div className="flex gap-1.5">
                {SAMPLE_STUDENTS.map((st, i) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStudentIndex(i)}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                      selectedStudentIndex === i
                        ? 'bg-primary text-on-primary shadow-xs'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {st.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Readiness Trigger */}
            <div className="mt-4 pt-2 text-center">
              <button
                onClick={onOpenReadinessModal}
                className="w-full text-center text-xs font-bold text-primary hover:underline flex items-center justify-center gap-1 py-1"
              >
                <span>Calculate your own readiness score</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>

          </div>

          {/* Decorative Background Glowing Orbs */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
        </div>

      </div>

      {/* Trust Metrics Bar */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-surface-bright border border-outline-variant/20 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-tertiary flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">{metric.icon}</span>
              </div>
              <div>
                <div className="font-display-lg text-lg font-bold text-on-surface leading-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-on-surface-variant font-medium">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;
