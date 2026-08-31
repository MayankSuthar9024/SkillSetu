import React, { useState } from 'react';
import { 
  ArrowRight, 
  PlayCircle, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  FileText,
  Activity,
  ChevronRight
} from 'lucide-react';
import { HERO_STATS, PLATFORM_METADATA } from '../data/skillsetuData';
import { VERNACULAR_TRANSLATIONS } from '../data/vernacularData';

export const Hero = ({ currentLang, onOpenDemo }) => {
  const [activeCapabilityTab, setActiveCapabilityTab] = useState(0);
  const [interactiveMatchScore, setInteractiveMatchScore] = useState(94);
  const t = VERNACULAR_TRANSLATIONS[currentLang] || VERNACULAR_TRANSLATIONS.en;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-slate-50/60 to-emerald-50/30 border-b border-slate-200/70">
      {/* Background Decorative Grid & Subtle Radial Glows */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60"></div>
      <div className="absolute -top-40 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & Call to Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* SIH 2026 Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 -ml-4.5"></span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Smart India Hackathon 2026 · {PLATFORM_METADATA.sihId}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {currentLang === 'en' ? (
                <>
                  Bridging Ayush <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800">Academia</span>, Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">Industry</span>.
                </>
              ) : (
                t.heroTitle
              )}
            </h1>

            {/* Subtitle / Positioning Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group cursor-pointer"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 hover:border-slate-400 shadow-2xs hover:shadow-sm transition-all cursor-pointer group"
              >
                <PlayCircle className="w-4.5 h-4.5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span>{t.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust Badges & Ministry Identification */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Institutional Alignment & Governance
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Ministry of Ayush</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Layers className="w-4 h-4 text-emerald-700" />
                  <span>SIH 2026 Problem SIH26044</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Academia × Enterprise Bridge</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Live Interactive Dashboard Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Interactive Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-elevated border border-slate-200/90 p-5 sm:p-6 relative z-10 transition-all">
              
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-xs">
                    SS
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">
                      Ayush Scholar Competency Dossier
                    </h2>
                    <p className="text-[11px] text-slate-500">
                      National Institute of Ayurveda (NIA) · BAMS 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Live Sandbox</span>
                </div>
              </div>

              {/* 4 Key Numerical Metric Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 hover:border-emerald-300 transition-colors">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    Student Readiness
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      {HERO_STATS.studentReadiness}%
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">Benchmark</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                    <div 
                      className="bg-emerald-600 h-1.5 rounded-full" 
                      style={{ width: `${HERO_STATS.studentReadiness}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 hover:border-emerald-300 transition-colors">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    Skill Match
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-emerald-700">
                      {HERO_STATS.skillMatch}%
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">High</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                    <div 
                      className="bg-emerald-600 h-1.5 rounded-full" 
                      style={{ width: `${HERO_STATS.skillMatch}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 hover:border-emerald-300 transition-colors">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    Verified Skills
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-slate-900">
                      {HERO_STATS.verifiedSkillsCount}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">Badges</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium mt-1.5">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Audit Ready</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 hover:border-emerald-300 transition-colors">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                    Opportunities
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-amber-700">
                      {HERO_STATS.activeOpportunities}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">Active</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-amber-700 font-medium mt-1.5">
                    <Briefcase className="w-3 h-3" />
                    <span>Ayush R&D</span>
                  </div>
                </div>
              </div>

              {/* Capability Diagnostic Bars */}
              <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-700" />
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Multidimensional Competency Vector
                    </h3>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Prototype Data</span>
                </div>

                <div className="space-y-2.5">
                  {HERO_STATS.capabilityDistribution.map((item, idx) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                          {item.label}
                        </span>
                        <span className="font-bold text-slate-900">{item.value}%</span>
                      </div>
                      <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${item.value}%`, backgroundColor: item.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Match Notification Card */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 text-white shadow-md border border-emerald-700/50">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                        Top Industry Match
                      </span>
                      <span className="text-xs font-bold text-emerald-300">
                        {interactiveMatchScore}% Alignment
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {HERO_STATS.sampleOpportunity.title}
                    </h4>
                    <p className="text-[11px] text-emerald-200/90">
                      {HERO_STATS.sampleOpportunity.organization} · {HERO_STATS.sampleOpportunity.location}
                    </p>
                  </div>

                  <button
                    onClick={onOpenDemo}
                    className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>View Opening</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-emerald-800/80">
                  {HERO_STATS.sampleOpportunity.skillsRequired.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded text-[10px] bg-emerald-800/80 text-emerald-100 border border-emerald-700/60 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Floating Top Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-medium border border-slate-200">
              <Award className="w-4 h-4 text-amber-600" />
              <div>
                <div className="text-[11px] font-bold text-slate-900">Schedule T GMP</div>
                <div className="text-[10px] text-emerald-700 font-semibold">Verified by Industry Audit</div>
              </div>
            </div>

            {/* Floating Bottom Left Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-medium border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <div>
                <div className="text-[11px] font-bold text-slate-900">HPTLC Micro-Sprint</div>
                <div className="text-[10px] text-slate-500">Practical Proof-of-Work Completed</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
