import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SAMPLE_STUDENTS, TRUST_METRICS } from '../data/stitchData';

export function Hero({ onGetStarted }) {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const currentStudent = SAMPLE_STUDENTS[selectedStudentIndex];

  // Apple-style subtle 3D card tilt on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [3, -3]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-3, 3]), { damping: 25, stiffness: 180 });

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
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative pt-10 lg:pt-16 pb-20 hero-grid-bg border-b border-outline-variant/30 overflow-hidden">
      
      {/* Dynamic Animated Motion Graphics Mesh Orbs in Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 via-teal-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
          x: [0, -12, 0],
          y: [0, 12, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-gradient-to-tr from-amber-100/15 via-emerald-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Hero Content with Staggered Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
        >

          {/* Eyebrow Accent Badge */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50/90 border border-emerald-200/90 rounded-full text-xs font-semibold text-emerald-900 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-accent tracking-wider text-xs">National Ayush Platform · Ministry of Ayush & AIIA</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="hero-title font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-on-surface leading-[1.04] tracking-tight"
          >
            Build the skills. <br />
            <span className="text-primary bg-gradient-to-r from-primary via-emerald-700 to-amber-700 bg-clip-text text-transparent">
              Prove your readiness.
            </span> <br />
            Find your next opportunity.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="hero-copy font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            SkillSetu is the centralized Ayush web platform connecting 42,000+ scholars, 536+ permitted colleges, and 7,345+ licensed pharma units for 6-axis competency testing, 15-minute bridge courses, and 1-click verified hiring.
          </motion.p>

          {/* Single Focused Login CTA */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.button 
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onGetStarted}
              className="bg-slate-900 hover:bg-slate-800 text-white font-label-sm text-base py-4 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 font-bold cursor-pointer group"
            >
              <span className="material-symbols-outlined text-xl text-emerald-400">login</span>
              <span>Access Role Portals</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </motion.button>
          </motion.div>

          {/* Specializations Tags */}
          <motion.div 
            variants={itemVariants}
            className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs font-semibold text-on-surface-variant"
          >
            <span className="text-outline uppercase tracking-wider text-[11px]">Specializations:</span>
            {['Ayurveda (BAMS)', 'Yoga & Naturopathy (BNYS)', 'Unani (BUMS)', 'Siddha (BSMS)', 'Homeopathy (BHMS)'].map((disc, idx) => (
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
            {/* Editorial image layer (Clean, no text overlay) */}
            <div className="relative h-44 sm:h-52 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-[28px] group">
              <img
                src="/images/ayush_hero_banner.jpg"
                alt="Ayurvedic clinical research and botanical extraction laboratory"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
                  <h3 className="font-serif text-xl font-bold text-on-surface flex items-center gap-2">
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

            {/* Candidate Profile Showcase */}
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs">
              <span className="text-outline font-medium">Featured Candidates:</span>
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
                {metric.subtext && (
                  <div className="text-[10px] text-emerald-800 font-semibold truncate">
                    {metric.subtext}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;
