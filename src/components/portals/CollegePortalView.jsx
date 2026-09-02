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
  ArrowRight
} from 'lucide-react';

export const CollegePortalView = ({ user }) => {
  const [naacReportGenerated, setNaacReportGenerated] = useState(false);

  const departments = [
    { name: 'Dravyaguna (Materia Medica & Pharmacology)', readiness: '92.4%', students: 142, placed: '88%' },
    { name: 'Rasa Shastra & Bhaishajya Kalpana', readiness: '89.1%', students: 120, placed: '84%' },
    { name: 'Kayachikitsa (Internal Medicine)', readiness: '94.8%', students: 160, placed: '91%' },
    { name: 'Panchakarma Clinical Department', readiness: '96.2%', students: 110, placed: '95%' },
    { name: 'Shalya Tantra (Ayurvedic Surgery)', readiness: '85.0%', students: 95, placed: '79%' },
  ];

  return (
    <div className="space-y-6">
      {/* College Dean Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white font-extrabold text-2xl flex items-center justify-center shadow-md border-2 border-blue-400/40">
            {user.avatar || 'RP'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900">{user.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200 flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5" />
                Apex Academic Institution
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {user.institution} · AISHE Code: <span className="font-mono font-semibold text-slate-700">{user.id}</span>
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={() => setNaacReportGenerated(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
        >
          <FileCheck className="w-4 h-4" />
          <span>Generate NAAC Criteria III/V Dossier</span>
        </button>
      </div>

      {/* Quick College Indices */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-blue-900">680</span>
          <span className="text-xs text-slate-500 block mt-0.5">Enrolled Ayush Scholars</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-emerald-800">91.4%</span>
          <span className="text-xs text-slate-500 block mt-0.5">Overall Placement Rate</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-amber-700">18 Active</span>
          <span className="text-xs text-slate-500 block mt-0.5">Corporate MoUs</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-purple-700">A++ Grade</span>
          <span className="text-xs text-slate-500 block mt-0.5">NAAC Audit Projection</span>
        </div>
      </div>

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

      {/* Department Heatmap Table */}
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
                <th className="py-3 px-3 text-right">Action</th>
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
                  <td className="py-3 px-3 text-right">
                    <button className="text-emerald-700 hover:text-emerald-900 font-bold cursor-pointer">
                      View Heatmap →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
