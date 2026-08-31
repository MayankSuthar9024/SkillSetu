import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  BookOpenCheck, 
  Building2, 
  ShieldCheck, 
  ArrowDown, 
  ArrowRight, 
  ArrowLeft,
  ArrowUp,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

export const EcosystemFlow = ({ onOpenDemo }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>End-to-End Orchestration Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Information & Opportunity <span className="text-emerald-800">Flows.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A dynamic closed-loop feedback system ensuring curriculum modernization, faculty upskilling, and student job readiness.
          </p>
        </div>

        {/* Master Architectural Flow Map */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-elevated border border-emerald-700/60 relative overflow-hidden">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

          {/* TOP NODE: INDUSTRY */}
          <div className="flex flex-col items-center relative z-10">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-slate-950 px-5 py-3 rounded-2xl font-extrabold text-sm flex items-center gap-2 shadow-lg border border-amber-400">
              <Briefcase className="w-5 h-5 text-slate-950" />
              <span>AYUSH INDUSTRY & ENTERPRISES</span>
            </div>
            <div className="text-[11px] text-amber-300 font-semibold mt-1.5 flex items-center gap-1">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>Micro-Sprint Challenges, Live Projects & Job Requisitions</span>
            </div>
          </div>

          {/* MIDDLE ROW: STUDENTS <-> SKILLSETU HUB <-> FACULTY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 items-center relative z-10">
            
            {/* Left Node: STUDENTS */}
            <div className="bg-slate-800/90 rounded-2xl p-5 border border-emerald-500/40 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 mx-auto flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-white">STUDENTS & SCHOLARS</h4>
              <p className="text-[11px] text-slate-300">
                Diagnostic Assessments → Micro-Learning → Verifiable Digital Dossier
              </p>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-700">
                Verified Talent Pool
              </span>
            </div>

            {/* Central Node: SKILLSETU CORE ENGINE */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-6 border-2 border-emerald-400 text-center shadow-xl space-y-2 transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-900 mx-auto flex items-center justify-center shadow-md font-black text-base">
                <ShieldCheck className="w-7 h-7 text-emerald-700" />
              </div>
              <h4 className="text-base font-black text-white tracking-wide">
                SKILLSETU PLATFORM
              </h4>
              <p className="text-[10px] text-emerald-100 font-medium">
                Competency Radar + Verification Engine + Opportunity Matcher
              </p>
              <div className="text-[10px] font-mono text-amber-300 bg-emerald-950/70 py-1 px-2 rounded">
                SIH26044 Orchestrator
              </div>
            </div>

            {/* Right Node: FACULTY */}
            <div className="bg-slate-800/90 rounded-2xl p-5 border border-purple-500/40 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 mx-auto flex items-center justify-center">
                <BookOpenCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-extrabold text-white">FACULTY & RESEARCHERS</h4>
              <p className="text-[11px] text-slate-300">
                Industrial FDPs → Collaborative Grants → Clinical Advisory
              </p>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-purple-950 text-purple-300 border border-purple-700">
                Pedagogy Modernization
              </span>
            </div>

          </div>

          {/* BOTTOM NODE: INSTITUTIONS & MINISTRY */}
          <div className="flex flex-col items-center relative z-10 pt-2 border-t border-emerald-800/60">
            <div className="text-[11px] text-emerald-300 font-semibold mb-2 flex items-center gap-1">
              <ArrowDown className="w-3.5 h-3.5" />
              <span>Competency Heatmaps & Placement Readiness Feeds</span>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 px-6 py-4 rounded-2xl text-center max-w-lg w-full">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Building2 className="w-5 h-5 text-blue-400" />
                <h4 className="text-sm font-extrabold text-white">
                  AYUSH INSTITUTIONS & MINISTRY OF AYUSH
                </h4>
              </div>
              <p className="text-[11px] text-slate-300">
                National talent supply-demand analytics inform curriculum revisions, institutional accreditation, and targeted policy incentives.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
