import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Award, 
  TrendingUp, 
  BarChart3, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Layers,
  ChevronRight
} from 'lucide-react';
import { APEX_COLLEGES_DEMO } from '../data/skillsetuData';

export const FacultySection = ({ onOpenDemo }) => {
  return (
    <section id="analytics" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Institutional & Faculty Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Faculty Upskilling & <span className="text-emerald-800">Institutional Analytics.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Empowering Ayush educators with industry research access while providing college leadership and the Ministry with real-time competency analytics.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* COLUMN 1: Faculty Development Portal */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 uppercase tracking-wider">
                  Faculty Empowerment
                </span>
                <GraduationCap className="w-5 h-5 text-purple-700" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Ayush Faculty Development Portal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Bridging traditional classical pedagogy with modern pharmaceutical instrumentation, NABL protocols, and translational research.
              </p>

              {/* 4 Feature Rows */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <Award className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Industry-Sponsored FDPs & Workshops</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Schedule T GMP compliance, modern clinical trials methodology, and HPLC/HPTLC laboratory certifications.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Translational Research & Grant Portals</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Direct discovery of collaborative research calls between apex institutes and Ayush manufacturers.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <Layers className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Enterprise Consultancy & Advisory</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Connecting senior professors with formulation review and clinical trial design opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white text-xs font-bold transition-colors cursor-pointer text-center"
            >
              Access Faculty Development Hub
            </button>
          </div>

          {/* COLUMN 2: Institutional Deficit Analytics */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wider">
                  College & Ministry Analytics
                </span>
                <BarChart3 className="w-5 h-5 text-blue-700" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Institutional Competency & Placement Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Data-driven heatmaps highlighting departmental skill deficits, placement readiness, and curriculum alignment.
              </p>

              {/* Mini Heatmap Visualization Preview */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 pb-2 border-b border-slate-200">
                  <span>Departmental Competency Status</span>
                  <span className="text-[10px] text-slate-400">Live College View</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Rasa Shastra & Bhaishajya Kalpana</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">91% Ready</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Dravyaguna (Phytopharmacognosy)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">88% Ready</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Schedule T GMP & Plant Quality Control</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">68% Deficit Flag</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700">Clinical Research & Biostatistics</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">72% Deficit Flag</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors cursor-pointer text-center"
            >
              Launch Institutional Analytics Dashboard
            </button>
          </div>

        </div>

        {/* Apex Ayush Colleges Network Benchmark */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Apex Ayush Institutes Integration Preview
              </h4>
              <p className="text-xs text-slate-500">
                Real-time pilot benchmark data across national premier colleges.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              National Talent Map
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {APEX_COLLEGES_DEMO.map((col) => (
              <div 
                key={col.name}
                className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 transition-all text-xs space-y-1"
              >
                <div className="flex items-start justify-between">
                  <h5 className="font-bold text-slate-900 leading-snug">{col.name}</h5>
                  <span className="shrink-0 text-emerald-700 font-bold text-[11px]">{col.readiness}</span>
                </div>
                <p className="text-[11px] text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{col.city}, {col.state}</span>
                </p>
                <div className="pt-1.5 border-t border-slate-100 flex justify-between text-[10px] text-slate-400">
                  <span>Scholars: <strong>{col.activeStudents}</strong></span>
                  <span className="text-emerald-700 font-semibold">Active Benchmark</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
