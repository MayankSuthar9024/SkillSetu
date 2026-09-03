import React from 'react';
import { CheckCircle2, Zap, Target, ArrowUpRight } from 'lucide-react';

export function SkillPage({ onNavigate, onOpenReadinessModal }) {
  const skillCategories = [
    {
      title: 'Clinical & Diagnostics',
      badge: 'Level 3 Advanced',
      score: '90%',
      items: [
        { name: 'Nadi Pariksha Digital Analysis', status: 'Mastered', level: 'Level 3' },
        { name: 'Prakriti & Tridosha Assessment', status: 'Mastered', level: 'Level 3' },
        { name: 'Differential Symptom Mapping', status: 'Proficient', level: 'Level 2' },
      ]
    },
    {
      title: 'Dravyaguna & Phytochemistry',
      badge: 'Level 2 Industry Ready',
      score: '85%',
      items: [
        { name: 'HPLC Chromatographic Standardization', status: 'Verified', level: 'Level 2' },
        { name: 'Polyherbal Formulation QC', status: 'Verified', level: 'Level 2' },
        { name: 'Ethno-botanical Identification', status: 'Mastered', level: 'Level 3' },
      ]
    },
    {
      title: 'Research & Clinical Trials (GCP)',
      badge: 'Level 2 Certified',
      score: '84%',
      items: [
        { name: 'Good Clinical Practice (GCP) Guidelines', status: 'Certified', level: 'Level 2' },
        { name: 'Pharmacovigilance Signal Detection', status: 'Verified', level: 'Level 2' },
        { name: 'Clinical Trial Logbook Documentation', status: 'Proficient', level: 'Level 2' },
      ]
    },
    {
      title: 'Tele-Ayush & Digital Health',
      badge: 'Level 3 Master',
      score: '92%',
      items: [
        { name: 'Ayush Electronic Health Records (ABHA)', status: 'Mastered', level: 'Level 3' },
        { name: 'Remote Patient Monitoring & Tele-Consult', status: 'Mastered', level: 'Level 3' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white py-10 px-6 rounded-3xl shadow-md mb-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 w-max mb-2">
              <Zap className="w-3.5 h-3.5" />
              National Ayush Skill Hub
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Skill Mapping & Readiness Engine
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl mt-1.5">
              Assess your clinical competencies, bridge academic-industry skill gaps, and earn blockchain-verified micro-credentials recognized by top Ayush enterprises.
            </p>
          </div>

          <button
            onClick={onOpenReadinessModal}
            className="bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-xs px-5 py-3 rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <Target className="w-4 h-4" />
            <span>Launch Diagnostic Assessment</span>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Readiness Overview Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-soft flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-800 text-white font-extrabold text-2xl flex items-center justify-center shadow-md">
              88%
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900">Your Current Overall Skill Score</h3>
              <p className="text-xs text-slate-500 font-medium">Verified across 12 Ayush clinical & industry modules</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('opportunities')}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Eligible Jobs</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-soft hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">{cat.title}</h3>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {cat.badge}
                  </span>
                </div>
                <span className="font-extrabold text-lg text-emerald-800">{cat.score}</span>
              </div>

              <div className="space-y-3 pt-2">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-bold text-xs text-slate-800">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default SkillPage;
