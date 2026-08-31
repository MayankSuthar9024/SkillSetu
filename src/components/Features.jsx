import React, { useState } from 'react';
import { PLATFORM_FEATURES } from '../data/stitchData';

export function Features({ onOpenReadinessModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFeature, setActiveFeature] = useState(PLATFORM_FEATURES[0]);

  const categories = ['All', 'Credibility', 'Intelligence', 'Practical Skills', 'Career Growth', 'Academia'];

  const filteredFeatures = selectedCategory === 'All'
    ? PLATFORM_FEATURES
    : PLATFORM_FEATURES.filter(f => f.category === selectedCategory);

  return (
    <section className="premium-section py-16 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant mb-4">
            <span className="material-symbols-outlined text-base text-primary">auto_awesome</span>
            <span>Comprehensive Platform Architecture</span>
          </div>

          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
            Designed for the Ayush Ecosystem
          </h2>

          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            From standardized clinical assessments to blockchain-backed portfolios, explore the features empowering Ayush students, colleges, and healthcare employers.
          </p>

          {/* Filter Categories */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-on-primary shadow-soft scale-105'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                activeFeature.id === feature.id
                  ? 'bg-surface-bright border-primary shadow-medium ring-2 ring-primary/20 -translate-y-1'
                  : 'bg-surface-container-lowest border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low/50 hover:-translate-y-1 hover:shadow-soft'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container text-tertiary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>
                  <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">
                  {feature.title}
                </h3>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex justify-between items-center text-xs font-semibold text-primary">
                <span>Category: {feature.category}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Feature Deep-Dive Preview */}
        <div className="bg-surface-bright border border-outline-variant/30 rounded-3xl p-6 sm:p-10 soft-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">{activeFeature.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-outline">Feature Deep-Dive</span>
              </div>
              <h3 className="font-display-lg text-2xl sm:text-3xl font-bold text-on-surface">
                {activeFeature.title}
              </h3>
              <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
                {activeFeature.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenReadinessModal}
                  className="bg-primary text-on-primary font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <span>Test Feature with Live Profile</span>
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">{activeFeature.icon}</span>
              </div>
              <div className="text-sm font-bold text-on-surface mb-1">{activeFeature.title}</div>
              <div className="text-xs text-outline mb-3">{activeFeature.badge} • {activeFeature.category}</div>
              <div className="text-xs text-on-surface-variant font-medium bg-white p-3 rounded-xl border border-outline-variant/20">
                Integrated directly into the SIH 2026 National Ayush Skill Repository.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;
