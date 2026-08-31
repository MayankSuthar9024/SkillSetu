import React from 'react';
import { 
  ArrowRight, 
  PlayCircle, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Briefcase,
  Layers
} from 'lucide-react';
import { PLATFORM_METADATA } from '../data/skillsetuData';

export const FinalCTA = ({ onOpenDemo }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden border-b border-emerald-900">
      {/* Background Radial Glow & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Smart India Hackathon 2026 · Problem Statement {PLATFORM_METADATA.sihId}</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Build a Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-300">Ayush Talent Ecosystem?</span>
        </h2>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto font-normal leading-relaxed">
          SkillSetu brings skills, academia, industry and opportunity together in one specialized, government-backed digital ecosystem.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-elevated hover:shadow-emerald-glow transition-all cursor-pointer group"
          >
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-300" />
            <span>Launch Live Interactive Demo</span>
          </button>

          <a
            href="#why-skillsetu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
          >
            <span>Explore Ecosystem Pillars</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Ministry Identification Footer Note */}
        <div className="pt-8 border-t border-emerald-800/60 max-w-xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-emerald-200/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Ministry of Ayush</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>SIH 2026 Initiative</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-amber-300" />
              <span>Academia × Industry</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
