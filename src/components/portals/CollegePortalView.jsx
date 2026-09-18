import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Award, 
  Users, 
  Landmark, 
  ArrowLeft,
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { TPOPlacementCommandCenter } from './TPOPlacementCommandCenter';

export const CollegePortalView = ({ user, onBack }) => {
  const defaultCollegeUser = {
    name: "Dr. Rajeshwar Pant",
    role: "Dean of Academic Affairs & Placement Head",
    roleType: "college",
    id: "AISHE-C-24901",
    email: "dean.academics@nia.ac.in",
    institution: "National Institute of Ayurveda (Deemed to be University)",
    enrolledScholars: 680,
    placementRate: "91.4%"
  };

  const safeUser = user || defaultCollegeUser;
  const [activeSubTab, setActiveSubTab] = useState('tpo');

  return (
    <div className="space-y-6 animate-in fade-in pb-12">
      {/* College Institution Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 backdrop-blur-xs flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-emerald-300" />
                Institutional Hub • AISHE-C-24901
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-200 border border-teal-400/30">
                NCISM Approved Grade-A Apex University
              </span>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
                {safeUser.institution}
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 font-medium">
                Placement Directorate &amp; Academic Administration Console • {safeUser.name} ({safeUser.role})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Hub</span>
              </button>
            )}
          </div>
        </div>

        {/* Institution Stats Strip */}
        <div className="mt-6 pt-5 border-t border-emerald-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-emerald-300/80 text-[11px] font-medium block">Enrolled Scholars</span>
            <span className="text-white font-extrabold text-base">{safeUser.enrolledScholars || 680} Scholars</span>
          </div>
          <div>
            <span className="text-emerald-300/80 text-[11px] font-medium block">Overall Placement Benchmark</span>
            <span className="text-emerald-300 font-extrabold text-base">{safeUser.placementRate || '84.2%'}</span>
          </div>
          <div>
            <span className="text-emerald-300/80 text-[11px] font-medium block">Active Campus Recruiters</span>
            <span className="text-white font-extrabold text-base">24 Empanelled</span>
          </div>
          <div>
            <span className="text-emerald-300/80 text-[11px] font-medium block">DigiLocker Integration</span>
            <span className="text-teal-300 font-extrabold text-base flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 100% Synced
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Subtabs */}
      <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveSubTab('tpo')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeSubTab === 'tpo'
              ? 'bg-emerald-800 text-white shadow-2xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>TPO Placement Command Center</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('academics')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeSubTab === 'academics'
              ? 'bg-emerald-800 text-white shadow-2xs'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Cohort Benchmarks &amp; APAAR</span>
        </button>
      </div>

      {/* Content */}
      {activeSubTab === 'tpo' && (
        <TPOPlacementCommandCenter user={safeUser} isTPOAdmin={true} />
      )}

      {activeSubTab === 'academics' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                Institutional Academic &amp; APAAR Roster
              </h3>
              <p className="text-xs text-slate-500">
                NCISM accreditation audit matrix &amp; Academic Bank of Credits (ABC) logs
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert('Generating NAAC / NCISM Annual Placement & Academic Audit Report (PDF)...')}
              className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-bold shadow-2xs hover:bg-emerald-900 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Download NAAC/NCISM Report</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Average Cohort CGPA</span>
              <div className="text-xl font-extrabold text-slate-900">8.72 / 10.0</div>
              <p className="text-[11px] text-emerald-700 font-semibold">BAMS Final Year 2026</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">ABC Credits Bank Total</span>
              <div className="text-xl font-extrabold text-teal-800">111,520 Credits</div>
              <p className="text-[11px] text-teal-600 font-semibold">DigiLocker Certified</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">NIRF Ayush Standing</span>
              <div className="text-xl font-extrabold text-purple-900">Rank #2 in India</div>
              <p className="text-[11px] text-purple-700 font-semibold">Apex Center of Excellence</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegePortalView;
