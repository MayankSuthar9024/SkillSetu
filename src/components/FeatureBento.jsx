import React, { useState } from 'react';
import { 
  Radar, 
  Briefcase, 
  ShieldCheck, 
  GraduationCap, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Activity,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { CORE_BENTO_FEATURES } from '../data/skillsetuData';

export const FeatureBento = ({ onOpenDemo }) => {
  const [activeOpportunityFilter, setActiveOpportunityFilter] = useState('all');

  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Core Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Become <span className="text-emerald-800">Industry-Ready.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A unified suite addressing the five essential requirements of the Ministry of Ayush academia-industry collaboration mandate.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: Large Card - Skill Intelligence & Radar (Col-Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                  01 · Diagnostic Intelligence
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  Radar Competency Matrix
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Diagnostic Skill Assessment & Dynamic Radar Mapping
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Replaces subjective evaluation with multi-vector diagnostic benchmarks spanning phytochemistry, classical formulations, and regulatory compliance.
              </p>

              {/* Radar Data Bar Matrix */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 pb-2 border-b border-slate-200">
                  <span>Ayush Competency Dimension</span>
                  <span>Score vs Industry Benchmark</span>
                </div>

                {CORE_BENTO_FEATURES[0].radarMetrics.map((item) => (
                  <div key={item.subject} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-800">
                      <span>{item.subject}</span>
                      <div className="flex gap-2">
                        <span className="font-bold text-emerald-700">{item.score}%</span>
                        <span className="text-slate-400">({item.benchmark}% req.)</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 relative overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Algorithmically matched against 120+ Ayush competencies
              </span>
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 cursor-pointer"
              >
                <span>Run Diagnostic</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD 2: Medium Card - Centralized Opportunity Hub (Col-Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 uppercase tracking-wider">
                  02 · Opportunity Hub
                </span>
                <span className="text-[11px] font-bold text-amber-700">
                  24+ Ayush Openings
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Centralized Internship & Placement Board
              </h3>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Pre-filtered, domain-specialized openings matching verified student competency profiles.
              </p>

              {/* Sample Opportunity Cards */}
              <div className="space-y-2.5 mb-6">
                {CORE_BENTO_FEATURES[1].openings.map((opp) => (
                  <div 
                    key={opp.role}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 transition-all text-xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-slate-900 leading-snug">{opp.role}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{opp.org}</p>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        {opp.match}% Match
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                      <span>Stipend: <strong className="text-slate-800">{opp.stipend}</strong></span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                        <span>1-Click Apply</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer text-center"
            >
              Browse All Verified Ayush Openings
            </button>
          </div>

          {/* CARD 3: Medium Card - Verified Digital Portfolio (Col-Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                  03 · Digital Portfolio
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Evidence-Backed Digital Portfolio
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {CORE_BENTO_FEATURES[2].highlight}
              </p>

              {/* Portfolio Mini Preview */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2 text-xs mb-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold text-[10px] flex items-center justify-center">
                    AS
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Aarav Sharma</div>
                    <div className="text-[10px] text-slate-500">NIA Jaipur · BAMS 2026</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <div className="bg-white p-1.5 rounded border border-slate-200">
                    <span className="block font-bold text-slate-900">12</span>
                    <span className="text-slate-400">Skills</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-slate-200">
                    <span className="block font-bold text-slate-900">03</span>
                    <span className="text-slate-400">Certs</span>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-slate-200">
                    <span className="block font-bold text-emerald-700">08</span>
                    <span className="text-slate-400">Sprints</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center justify-between pt-2 border-t border-slate-100 cursor-pointer"
            >
              <span>View Dossier Structure</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD 4: Medium Card - Faculty Development Portal (Col-Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 uppercase tracking-wider">
                  04 · Faculty Portal
                </span>
                <GraduationCap className="w-4 h-4 text-purple-700" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Faculty Development & Industry Mentorship
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Connects professors with industrial training, research grants, consultancy projects, and clinical pedagogy upgrades.
              </p>

              <div className="space-y-2 text-xs mb-4">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <Award className="w-4 h-4 text-purple-700 shrink-0" />
                  <span className="text-slate-700 font-medium text-[11px]">Industrial GMP & NABL Faculty Cohorts</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <BookOpen className="w-4 h-4 text-purple-700 shrink-0" />
                  <span className="text-slate-700 font-medium text-[11px]">Sponsored Ayush R&D Consultancy Grants</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="text-xs font-bold text-purple-800 hover:text-purple-950 flex items-center justify-between pt-2 border-t border-slate-100 cursor-pointer"
            >
              <span>Explore Faculty Modules</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD 5: Large Card - Institutional Analytics & Placement Heatmap (Col-Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wider">
                  05 · Institutional Intelligence
                </span>
                <BarChart3 className="w-4 h-4 text-blue-700" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Institutional Analytics & Placement Readiness
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Enables colleges and the Ministry of Ayush to monitor student competency distribution and state-level placement readiness.
              </p>

              <div className="grid grid-cols-2 gap-2 text-center text-xs mb-4">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 uppercase block">Readiness Index</span>
                  <span className="text-base font-extrabold text-blue-900">82.4%</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 uppercase block">Active MoUs</span>
                  <span className="text-base font-extrabold text-emerald-800">148+</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="text-xs font-bold text-blue-800 hover:text-blue-950 flex items-center justify-between pt-2 border-t border-slate-100 cursor-pointer"
            >
              <span>View Analytics Dashboard</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
