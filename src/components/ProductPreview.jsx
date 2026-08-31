import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  Activity,
  CheckCircle2
} from 'lucide-react';

export const ProductPreview = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState(0);

  const previewTabs = [
    {
      id: 'student',
      title: 'Student Dashboard',
      subtitle: 'Competency Radar & Micro-Bridge Courses',
      icon: GraduationCap,
      badge: 'Scholar View',
      content: {
        headline: 'Interactive Radar Benchmark & Micro-Learning Pathways',
        details: 'Students view live diagnostic benchmarks across Phytochemistry, Schedule T GMP, and Classical Diagnostics with 1-click bridge course enrollment.',
        metrics: [
          { label: 'Overall Readiness', val: '87%' },
          { label: 'Verified Badges', val: '12' },
          { label: 'Sprints Completed', val: '08' },
        ]
      }
    },
    {
      id: 'industry',
      title: 'Industry Recruiter Hub',
      subtitle: 'Candidate Talent Pool & Micro-Sprint Pipeline',
      icon: Briefcase,
      badge: 'Enterprise View',
      content: {
        headline: 'Targeted Candidate Filtering with Practical Proof-of-Work',
        details: 'Ayush pharmaceutical and hospital recruiters review pre-assessed portfolios, filter by verified technical competencies, and deploy custom micro-sprint tasks.',
        metrics: [
          { label: 'Time-to-Hire Reduction', val: '65%' },
          { label: 'Resume Noise Filtered', val: '100%' },
          { label: 'Verified Candidates', val: '1,200+' },
        ]
      }
    },
    {
      id: 'ministry',
      title: 'Ministry & College Analytics',
      subtitle: 'National Skill Heatmap & Placement Intelligence',
      icon: Building2,
      badge: 'Governance View',
      content: {
        headline: 'State-Level Ayush Competency Heatmap & Placement Trends',
        details: 'Institutional leaders and the Ministry of Ayush track nationwide talent trends, syllabus deficits, and corporate MoU execution in real-time.',
        metrics: [
          { label: 'Apex Colleges Linked', val: '6 Premier' },
          { label: 'National Placement Rate', val: '82.4%' },
          { label: 'Active R&D MoUs', val: '148+' },
        ]
      }
    }
  ];

  const currentTab = previewTabs[activeTab];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Inside the Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cinematic Platform <span className="text-emerald-800">Experience.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A purpose-built interface engineered for ultra-fast performance, high accessibility, and frictionless multi-role workflows.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex flex-wrap items-center gap-1">
            {previewTabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Stacked Viewport Showcase Container */}
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-elevated border border-emerald-700/60 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                <span>{currentTab.badge}</span>
                <span>·</span>
                <span>Role Specific UX</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentTab.content.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentTab.content.details}
              </p>

              <div className="grid grid-cols-3 gap-2.5 pt-2">
                {currentTab.content.metrics.map((m) => (
                  <div key={m.label} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-center">
                    <span className="text-lg font-black text-emerald-300 block">{m.val}</span>
                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>Launch Interactive {currentTab.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Realistic UI Frame Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-700 shadow-2xl space-y-4">
                
                {/* Browser/Window Chrome */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-md">
                    https://app.skillsetu.gov.in/portal/{currentTab.id}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400">SIH 2026</span>
                </div>

                {/* Dynamic Screen Interior */}
                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3 text-xs">
                  
                  {activeTab === 0 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <div>
                          <div className="font-bold text-white">Clinical Assessment Radar</div>
                          <div className="text-[10px] text-slate-400">NIA Jaipur · BAMS Final Year</div>
                        </div>
                        <span className="text-emerald-400 font-bold font-mono">87% SCORE</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">Active Micro-Bridge</span>
                          <span className="font-bold text-slate-200 text-[11px]">Schedule T Cleanroom GMP</span>
                        </div>
                        <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">Verified Artifact</span>
                          <span className="font-bold text-slate-200 text-[11px]">Triphala HPTLC Protocol</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <div>
                          <div className="font-bold text-white">Ayush Candidate Talent Stream</div>
                          <div className="text-[10px] text-slate-400">Patanjali Research / Dabur Recruiter Portal</div>
                        </div>
                        <span className="text-amber-400 font-bold font-mono">94% TOP MATCH</span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                          <span className="text-slate-200">Aarav Sharma (NIA Jaipur)</span>
                          <span className="text-emerald-400 font-bold">Shortlisted</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                          <span className="text-slate-200">Priya Nair (AIIA New Delhi)</span>
                          <span className="text-emerald-400 font-bold">Shortlisted</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-slate-900 p-3 rounded-lg border border-slate-800">
                        <div>
                          <div className="font-bold text-white">National Skill Gap Heatmap</div>
                          <div className="text-[10px] text-slate-400">Ministry of Ayush Dashboard</div>
                        </div>
                        <span className="text-emerald-400 font-bold font-mono">PAN-INDIA</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 block">Rajasthan</span>
                          <span className="font-bold text-emerald-400">89% Index</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 block">Delhi NCR</span>
                          <span className="font-bold text-emerald-400">92% Index</span>
                        </div>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800">
                          <span className="text-slate-400 block">Gujarat</span>
                          <span className="font-bold text-emerald-400">88% Index</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-center pt-1 text-[10px] text-slate-500 font-mono">
                    All visualizations represent functional interactive prototypes for SIH 2026.
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
