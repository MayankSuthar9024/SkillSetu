import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  GraduationCap, 
  Building2, 
  BookOpenCheck, 
  Briefcase, 
  Zap, 
  RefreshCw,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ProblemSection = () => {
  const [isConnectedState, setIsConnectedState] = useState(true);

  const frictionNodes = [
    {
      id: 'students',
      title: 'Students & Scholars',
      subtitle: 'Talented yet unverified',
      icon: GraduationCap,
      friction: 'Skills remain difficult to prove beyond static marks cards and generic MCQ scores.',
      resolution: 'Diagnostic assessments + practical micro-sprints deliver evidence-backed digital credentials.',
      color: 'emerald'
    },
    {
      id: 'institutions',
      title: 'Ayush Institutions',
      subtitle: 'Operating with blindspots',
      icon: Building2,
      friction: 'Limited real-time visibility into student skill gaps and evolving pharmaceutical market demands.',
      resolution: 'Departmental deficit heatmaps and institutional placement readiness dashboards.',
      color: 'primary'
    },
    {
      id: 'faculty',
      title: 'Faculty & Mentors',
      subtitle: 'Isolated from industry',
      icon: BookOpenCheck,
      friction: 'Industry exposure remains fragmented without structured enterprise development pathways.',
      resolution: 'Direct access to industrial FDPs, sponsored research grants, and consultancy networks.',
      color: 'saffron'
    },
    {
      id: 'industry',
      title: 'Ayush Industry & R&D',
      subtitle: 'High recruitment friction',
      icon: Briefcase,
      friction: 'Finding verified, job-ready talent requires expensive filtering through irrelevant generic resumes.',
      resolution: 'Targeted opportunity matching against verified practical proof-of-work dossiers.',
      color: 'blue'
    }
  ];

  return (
    <section id="why-skillsetu" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>The Core Challenge · Problem Statement SIH26044</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Problem Isn’t Talent. <span className="text-emerald-800">It’s the Gap.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            India produces exceptional Ayush scholars each year. Yet traditional academic pipelines and modern pharmaceutical/clinical enterprises remain siloed.
          </p>
        </div>

        {/* Interactive State Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 inline-flex items-center gap-1 shadow-inner">
            <button
              onClick={() => setIsConnectedState(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                !isConnectedState 
                  ? 'bg-red-50 text-red-900 border border-red-200 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span>Current Status Quo (Disconnected)</span>
            </button>

            <button
              onClick={() => setIsConnectedState(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                isConnectedState 
                  ? 'bg-emerald-800 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>SkillSetu Unified Ecosystem (Connected)</span>
            </button>
          </div>
        </div>

        {/* Visual Map Layout */}
        <div className="relative">
          
          {/* Central Hub in Connected State */}
          {isConnectedState && (
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white shadow-elevated border-2 border-emerald-400/80 flex flex-col items-center justify-center p-3 animate-pulse-subtle">
                <ShieldCheck className="w-8 h-8 text-emerald-300 mb-1" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-100">
                  SkillSetu
                </span>
                <span className="text-[8px] text-amber-300 font-semibold">
                  Intelligent Hub
                </span>
              </div>
            </div>
          )}

          {/* 4 Quadrant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {frictionNodes.map((node, index) => {
              const IconComponent = node.icon;
              return (
                <div
                  key={node.id}
                  className={`rounded-2xl p-6 transition-all duration-300 border ${
                    isConnectedState
                      ? 'bg-white border-emerald-200/80 shadow-soft hover:shadow-medium hover:border-emerald-300'
                      : 'bg-red-50/40 border-red-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isConnectedState 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                          : 'bg-red-100 text-red-800 border border-red-200'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {node.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      isConnectedState 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      Node 0{index + 1}
                    </span>
                  </div>

                  {/* Friction vs Resolution Narrative */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <div className="text-xs">
                      <span className="font-bold text-slate-500 uppercase tracking-wide text-[10px] block mb-0.5">
                        {isConnectedState ? 'Resolved Friction' : 'Systemic Friction'}
                      </span>
                      <p className={`leading-relaxed ${
                        isConnectedState ? 'text-slate-500 line-through' : 'text-red-950 font-medium'
                      }`}>
                        {node.friction}
                      </p>
                    </div>

                    {isConnectedState && (
                      <div className="text-xs bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/60 mt-2">
                        <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-[11px] mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          <span>SkillSetu Connection</span>
                        </div>
                        <p className="text-emerald-950 leading-relaxed font-medium">
                          {node.resolution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner under problem map */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-medium">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>SkillSetu converts institutional friction into verified talent velocity.</span>
              </h3>
              <p className="text-xs text-slate-300">
                Single unified repository for diagnostic benchmarking, micro-sprints, and recruiter pipelines.
              </p>
            </div>

            <a
              href="#how-it-works"
              className="shrink-0 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore How It Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
