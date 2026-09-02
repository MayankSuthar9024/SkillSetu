import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SAMPLE_STUDENTS, TRUST_METRICS } from '../data/stitchData';

export function Hero({ onGetStarted, onSeeHowItWorks, onOpenReadinessModal }) {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const currentStudent = SAMPLE_STUDENTS[selectedStudentIndex];

  // Apple-style subtle 3D card tilt on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [4, -4]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-4, 4]), { damping: 25, stiffness: 180 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] // Apple fluid deceleration curve
      }
    }
  };

  return (
    <section className="relative pt-10 lg:pt-16 pb-20 hero-grid-bg border-b border-outline-variant/30 overflow-hidden">
      
      {/* Dynamic Animated Motion Graphics Mesh Orbs in Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-300/30 via-teal-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-amber-200/25 via-emerald-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Hero Content with Staggered Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          
          {/* Tag Pill with Subtle Pulse */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 text-primary border border-white/90 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-xs backdrop-blur-md hover:scale-[1.02] transition-transform cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="material-symbols-outlined text-base">workspace_premium</span>
              <span>SIH 2026 National Ayush Talent Engine</span>
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="hero-title font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface leading-[1.08] tracking-[-0.045em]"
          >
            Build the skills. <br />
            <span className="text-primary bg-gradient-to-r from-primary via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Prove your readiness.
=======
          <h1 className="hero-title font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface leading-[1.08] tracking-[-0.045em]">
            Build skills. <br />
            <span className="text-primary bg-gradient-to-r from-primary via-primary-container to-tertiary bg-clip-text text-transparent">
              Prove your skills.
>>>>>>> 48c98bc1f3f510f88600107d5a179522291ffab3
            </span> <br />
            Find your next opportunity.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="hero-copy font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            SkillSetu connects Ayush students, institutional curriculum, practical competency assessments, and career opportunities in one unified platform. Bridging academic learning with clinical enterprise demands.
          </motion.p>

          {/* Action CTAs with Micro-Spring Interactions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.975 }}
              onClick={onGetStarted}
              className="shimmer-btn bg-primary text-on-primary font-label-sm text-base py-4 px-8 rounded-2xl hover:bg-primary/95 transition-all shadow-medium flex items-center justify-center gap-2 font-semibold cursor-pointer group"
            >
              <span>Get Started Free</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSeeHowItWorks}
              className="bg-white/80 hover:bg-white text-tertiary font-label-sm text-base py-4 px-8 rounded-2xl border border-outline-variant/60 shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 font-semibold cursor-pointer backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-xl text-primary">play_circle</span>
              <span>See How It Works</span>
            </motion.button>
          </motion.div>

          {/* Quick Discipline Tags */}
          <motion.div 
            variants={itemVariants}
            className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs font-semibold text-on-surface-variant"
          >
            <span className="text-outline uppercase tracking-wider text-[11px]">Disciplines:</span>
            {['Ayurveda (BAMS)', 'Yoga (BNYS)', 'Unani (BUMS)', 'Siddha (BSMS)', 'Homeopathy (BHMS)'].map((disc, idx) => (
              <span 
                key={idx} 
                className="bg-white/80 border border-slate-200/80 px-2.5 py-1 rounded-lg text-slate-700 hover:border-emerald-400/80 transition-colors shadow-2xs"
              >
                {disc}
              </span>
            ))}
          </motion.div>

        </motion.div>

        {/* Right Column: Interactive 3D Physics Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Card with Spring 3D Tilt */}
          <motion.div 
            style={{ rotateX, rotateY }}
            className="bg-white/95 border border-white/90 rounded-[28px] p-6 sm:p-8 soft-shadow-elevated relative z-20 backdrop-blur-md transition-shadow hover:shadow-2xl"
          >
            {/* Editorial image layer */}
            <div className="relative h-44 sm:h-52 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-[28px] group">
              <img
                src="/images/ayush_hero_banner.jpg"
                alt="Ayurvedic clinical research and botanical extraction laboratory"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ayush-darker/80 via-ayush-darker/20 to-transparent" />
              <div className="hero-image-copy absolute left-5 bottom-5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ayush-lightEmerald">The SkillSetu standard</p>
                <p className="mt-1 text-lg font-bold">Learn with purpose. Practice with confidence.</p>
              </div>
            </div>
            
            {/* Header & Student Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-outline-variant/20 pb-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl ring-2 ring-primary/20 p-0.5 overflow-hidden bg-surface-container shadow-inner">
                  <img 
                    className="w-full h-full object-cover rounded-2xl" 
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

              <div className="bg-secondary-container text-tertiary px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span className="material-symbols-outlined text-base">verified</span> 
                {currentStudent.verifiedStatus}
              </div>
            </div>

            {/* Readiness Score Bar with Motion Fill */}
            <div className="mb-6 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline block">Clinical Competency</span>
                  <span className="font-headline-md text-sm font-semibold text-on-surface-variant">Readiness Score</span>
                </div>
                <div className="text-right">
                  <motion.span 
                    key={currentStudent.readinessScore}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display-lg text-3xl font-extrabold text-primary block"
                  >
                    {currentStudent.readinessScore}%
                  </motion.span>
                </div>
              </div>
              <div className="w-full bg-surface-container-high h-3.5 rounded-full overflow-hidden p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${currentStudent.readinessScore}%` }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-r from-primary via-emerald-600 to-amber-500 h-full rounded-full" 
                />
              </div>
            </div>

            {/* Assessment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {currentStudent.assessments.map((ast, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="border border-outline-variant/30 rounded-xl p-3.5 bg-surface-bright hover:border-primary/40 transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-primary text-xl">{ast.icon}</span>
                    <span className="text-xs font-semibold text-on-surface truncate">{ast.name}</span>
                  </div>
                  <div className="font-label-sm text-xs font-bold text-tertiary bg-secondary-container/60 px-2 py-0.5 rounded-md inline-block">
                    {ast.score}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Student Switcher Buttons */}
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs">
              <span className="text-outline font-medium">Switch Candidate Profile:</span>
              <div className="flex gap-1.5">
                {SAMPLE_STUDENTS.map((st, i) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStudentIndex(i)}
                    className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      selectedStudentIndex === i
                        ? 'bg-primary text-on-primary shadow-xs scale-105'
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
                className="w-full text-center text-xs font-bold text-primary hover:underline flex items-center justify-center gap-1 py-1 cursor-pointer"
              >
                <span>Calculate your clinical readiness score</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* Trust Metrics Bar with Staggered Entrance */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-outline-variant/30 shadow-xs backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-tertiary flex items-center justify-center font-bold">
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
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;
