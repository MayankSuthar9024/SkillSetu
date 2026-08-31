import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Briefcase,
  Zap,
  TrendingUp
} from 'lucide-react';
import { MATCHING_FACTORS, DEMO_STUDENT_PROFILE } from '../data/skillsetuData';

export const MatchingEngine = ({ onOpenDemo }) => {
  const [factors, setFactors] = useState(MATCHING_FACTORS);

  // Compute dynamic overall weighted score
  const overallMatch = Math.round(
    factors.reduce((acc, curr) => acc + curr.candidateScore * (parseInt(curr.weight) / 100), 0)
  );

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Skill-Based Matching Algorithm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Skill Profile to <span className="text-emerald-800">Opportunity.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A deterministic skill-based matching engine that pairs verified student competency vectors with exact industry job requirements.
          </p>
        </div>

        {/* 3-Column Matching Interactive Visualizer */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT: Candidate Profile Card (Col-Span 4) */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Candidate Profile</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Verified</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  AS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{DEMO_STUDENT_PROFILE.name}</h4>
                  <p className="text-[11px] text-slate-500">BAMS Final Year · NIA Jaipur</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs pt-2">
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-600">Schedule T GMP:</span>
                  <span className="font-bold text-emerald-800">Expert (96%)</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-600">HPTLC Micro-Sprint:</span>
                  <span className="font-bold text-emerald-800">Score 94%</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-600">Dravyaguna Herbology:</span>
                  <span className="font-bold text-emerald-800">Mastery (92%)</span>
                </div>
              </div>
            </div>

            {/* CENTER: Matching Engine Visualizer & Dynamic Score (Col-Span 4) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4 py-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex flex-col items-center justify-center shadow-medium border-4 border-emerald-400">
                  <span className="text-3xl font-black">{overallMatch}%</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Alignment</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-400 text-slate-950 p-1.5 rounded-full shadow-xs">
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1 max-w-xs">
                <h4 className="text-sm font-bold text-slate-900">Skill-Based Vector Match</h4>
                <p className="text-[11px] text-slate-500">
                  Computed across 5 weighted dimensions with 0% irrelevant resume noise.
                </p>
              </div>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Initiate 1-Click Fast-Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* RIGHT: Industry Opening Card (Col-Span 4) */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Industry Opening</span>
                </div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Active Req</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  R&D
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Ayurvedic Formulation Intern</h4>
                  <p className="text-[11px] text-slate-500">Patanjali Research / Dabur R&D</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs pt-2">
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-600">Location:</span>
                  <span className="font-semibold text-slate-800">Haridwar / Hybrid</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-600">Monthly Stipend:</span>
                  <span className="font-bold text-emerald-800">₹18,000 / mo</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-600">Domain Match:</span>
                  <span className="font-bold text-slate-900">Ayurvedic QC & Formulations</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Breakdown of Matching Dimensions */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Weighted Parameter Decomposition
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {factors.map((f) => (
                <div key={f.factor} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{f.weight} Weight</span>
                    <span className="font-extrabold text-emerald-800">{f.candidateScore}%</span>
                  </div>
                  <p className="text-slate-700 font-medium line-clamp-2">{f.factor}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
