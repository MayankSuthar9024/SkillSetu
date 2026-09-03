import React, { useState } from 'react';
import { 
  Landmark, 
  Building2, 
  TrendingUp, 
  Download, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  Users, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Check,
  Building
} from 'lucide-react';

export const CollegeProfileView = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'heatmap' | 'placements' | 'naac'
  const [naacReportGenerated, setNaacReportGenerated] = useState(false);

  const departments = [
    { name: 'Dravyaguna (Materia Medica & Pharmacology)', readiness: '92.4%', students: 142, placed: '88%' },
    { name: 'Rasa Shastra & Bhaishajya Kalpana', readiness: '89.1%', students: 120, placed: '84%' },
    { name: 'Kayachikitsa (Internal Medicine)', readiness: '94.8%', students: 160, placed: '91%' },
    { name: 'Panchakarma Clinical Department', readiness: '96.2%', students: 110, placed: '95%' },
    { name: 'Shalya Tantra (Ayurvedic Surgery)', readiness: '85.0%', students: 95, placed: '79%' },
  ];

  const corporateMoUs = [
    { name: 'Dabur Research & Development Center', type: 'Clinical Research & QC Sprint Partner', activeSince: '2024' },
    { name: 'Arya Vaidya Sala (Kottakkal)', type: 'Panchakarma Clinical Residency', activeSince: '2023' },
    { name: 'Himalaya Wellness Company', type: 'Herbal Extraction & Phytochemistry', activeSince: '2025' },
    { name: 'Patanjali Research Foundation', type: 'Standardized Pharmacopoeia Audits', activeSince: '2024' },
  ];

  return (
    <div className="space-y-6">
      
      {/* College Dean Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        
        {/* Banner Graphic */}
        <div className="h-44 sm:h-56 w-full bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 relative">
          <div className="absolute top-4 right-4 bg-blue-950/80 backdrop-blur-md text-blue-200 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Landmark className="w-4 h-4 text-blue-400" />
            <span>Ministry of Ayush Apex Institute (Deemed University)</span>
          </div>
        </div>

        {/* Profile Info Row */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-14 md:-mt-16 mb-4">
            
            {/* Logo Avatar */}
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white font-extrabold text-3xl flex items-center justify-center border border-blue-400/30 shadow-inner">
                  <span>{user?.avatar || 'RP'}</span>
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {user?.name || 'Dr. Rajeshwar Pant'}
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-blue-600 fill-blue-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex flex-wrap items-center gap-2">
                  <span>{user?.role || 'Dean of Academic Affairs & Placement Head'}</span>
                  <span>•</span>
                  <span className="text-blue-900 font-bold">AISHE: {user?.id || 'AISHE-C-24901'}</span>
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setNaacReportGenerated(true)}
                className="px-4 py-2.5 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                <span>Generate NAAC Criteria III/V Audit PDF</span>
              </button>
            </div>
          </div>

          {/* Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-blue-800" />
              {user?.institution || 'National Institute of Ayurveda (Deemed to be University), Jaipur'}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-800" />
              680 Enrolled Scholars
            </span>
            <span className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" />
              91.4% Overall Campus Placement Rate
            </span>
          </div>

        </div>

      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Enrolled Scholars</span>
          <div className="text-3xl font-extrabold text-blue-900 mt-1">680</div>
          <span className="text-[11px] text-blue-700 font-semibold mt-1 block">BAMS & MD Cohorts</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Placement Rate</span>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">91.4%</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">1-Click Verified Hiring</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Corporate MoUs</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">18</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Active Industry Partners</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">NAAC Grade Projection</span>
          <div className="text-3xl font-extrabold text-purple-800 mt-1">A++</div>
          <span className="text-[11px] text-purple-700 font-semibold mt-1 block">Cryptographic Audit Signed</span>
        </div>
      </div>

      {/* Audit Banner */}
      {naacReportGenerated && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-950 flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span><strong>NAAC Criteria 3.5 (Collaborations) & 5.2 (Placements)</strong> PDF audit package successfully generated with verified cryptographic signatures!</span>
          </div>
          <button
            onClick={() => alert('Downloading NAAC Audit Package PDF...')}
            className="px-3 py-1 bg-emerald-800 text-white rounded-lg font-bold flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Download
          </button>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
          }`}
        >
          Institutional Profile & MoUs
        </button>

        <button
          onClick={() => setActiveTab('heatmap')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'heatmap'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
          }`}
        >
          Department Heatmap
        </button>

        <button
          onClick={() => setActiveTab('placements')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'placements'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
          }`}
        >
          Campus Placements
        </button>
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">About National Institute of Ayurveda</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The National Institute of Ayurveda (Jaipur) is an Apex Institute under the Ministry of Ayush, Government of India. It offers undergraduate (BAMS), postgraduate (MD/MS Ayush), and doctoral research programs with state-of-the-art analytical labs and hospital facilities.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Through SkillSetu, NIA benchmarked student competency scores against national standards and facilitated direct corporate hiring MoUs with premier Ayush pharmaceutical companies.
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-extrabold text-slate-900 mb-3">Active Corporate MoUs & Placement Partners</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {corporateMoUs.map((mou, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                      <strong className="text-slate-900 font-extrabold block">{mou.name}</strong>
                      <span className="text-[11px] text-slate-500 block">{mou.type}</span>
                      <span className="text-[10px] text-emerald-700 font-bold">Partner Since {mou.activeSince}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Institutional Contact & Accreditation
              </h4>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>dean.academics@nia.ac.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span className="font-semibold text-blue-900">AISHE Code: AISHE-C-24901</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB: HEATMAP */}
      {activeTab === 'heatmap' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900">
              Departmental Competency Heatmap & Placement Readiness
            </h3>
            <span className="text-xs text-slate-500">Live Synchronized Data</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-3 px-3">Department Name</th>
                  <th className="py-3 px-3">Scholars</th>
                  <th className="py-3 px-3">Readiness Index</th>
                  <th className="py-3 px-3">Placement Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {departments.map((dept, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-900">{dept.name}</td>
                    <td className="py-3 px-3 text-slate-600">{dept.students}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                        {dept.readiness}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-700 font-semibold">{dept.placed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB: PLACEMENTS */}
      {activeTab === 'placements' && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
          <h3 className="text-base font-extrabold text-slate-900">Campus Recruitment & Job Drives</h3>
          <p className="text-xs text-slate-500">
            Scholars placed through SkillSetu 1-click verified vector match engine in AY 2025-26.
          </p>

          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 font-bold">
            Overall Placement Success: 91.4% (621 out of 680 scholars placed in R&D labs, Ayush hospitals, & clinical trials).
          </div>
        </div>
      )}

    </div>
  );
};
