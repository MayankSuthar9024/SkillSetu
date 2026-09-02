import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLATFORM_FEATURES } from '../data/stitchData';

export function Features() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Credibility', 'Intelligence', 'Practical Skills', 'Career Growth', 'Academia'];

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
            <span>Platform Capabilities</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-4 tracking-tight"
          >
            Designed for the Ayush Ecosystem
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            From standardized clinical assessments to verified digital dossiers, explore the core infrastructure supporting students, colleges, and healthcare employers.
          </motion.p>

          {/* Filter Categories with Apple-style Layout Pill */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
                  <span className="text-slate-400 font-medium">Standardized</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;
