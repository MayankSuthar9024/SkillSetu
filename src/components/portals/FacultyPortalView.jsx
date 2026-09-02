import React, { useState } from 'react';
import { 
  UserCheck, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  PlusCircle, 
  BarChart3, 
  Award,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const FacultyPortalView = ({ user }) => {
  const [activeTab, setActiveTab] = useState('radar');
  const [pendingSubmissions, setPendingSubmissions] = useState([
    {
      id: 'sub-1',
      student: 'Aarav Sharma (BAMS Final Year)',
      task: 'Triphala Churna HPTLC Marker Fingerprinting Protocol',
      submittedAt: 'Today, 10:14 AM',
      accuracy: '94%',
      status: 'Pending Review'
    },
    {
      id: 'sub-2',
      student: 'Sunita Patel (BAMS 3rd Year)',
      task: 'Schedule T Sterile Area Standard Operating Procedure',
      submittedAt: 'Yesterday',
      accuracy: '89%',
      status: 'Pending Review'
    }
  ]);

  const handleApprove = (id) => {
    setPendingSubmissions(prev => prev.map(s => 
      s.id === id ? { ...s, status: 'Audited & Digitally Signed' } : s
    ));
  };

  return (
    <div className="space-y-6">
      {/* Faculty Profile Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40">
            {user.avatar || 'MJ'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900">{user.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                Senior Academic Preceptor
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {user.role} · {user.institution} · Faculty ID: <span className="font-mono font-semibold text-slate-700">{user.id}</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700 block">Authored Modules</span>
            <span className="text-xl font-extrabold text-emerald-900">4 Micro-Courses</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-blue-700 block">Mentored Scholars</span>
            <span className="text-xl font-extrabold text-blue-900">142 Students</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('radar')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'radar'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>01 · Department Cohort Radar & Deficit Analysis</span>
        </button>

        <button
          onClick={() => setActiveTab('review')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'review'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>02 · Student Micro-Sprint Evaluation Desk ({pendingSubmissions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('author')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'author'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>03 · Micro-Course Studio & Industry FDPs</span>
        </button>
      </div>

      {/* TAB 1: Department Cohort Radar */}
      {activeTab === 'radar' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">
              Department-Wide Competency Vectors (142 Scholars)
            </h3>
            <p className="text-xs text-slate-500">
              Aggregate diagnostic analysis of Dravyaguna & Ayurvedic Pharmacy Department
            </p>

            <div className="space-y-3 pt-2">
              {[
                { name: 'Classical Herb Identification', avg: 91, benchmark: 85, status: 'Above National Benchmark' },
                { name: 'Schedule T GMP Compliance', avg: 76, benchmark: 80, status: 'Identified Skill Deficit (-4%)' },
                { name: 'HPTLC & Spectrophotometry', avg: 72, benchmark: 78, status: 'Targeted for Bridge Course' },
                { name: 'Clinical Pharmacology & Posology', avg: 89, benchmark: 82, status: 'Strong Mastery' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">{item.name}</span>
                    <span className="font-extrabold text-slate-900">{item.avg}% (Natl: {item.benchmark}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.avg >= item.benchmark ? 'bg-emerald-600' : 'bg-amber-500'} rounded-full`}
                      style={{ width: `${item.avg}%` }}
                    />
                  </div>
                  <span className={`text-[10px] font-bold block ${item.avg >= item.benchmark ? 'text-emerald-700' : 'text-amber-800'}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">Pedagogical Interventions</h3>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2 text-xs text-emerald-950">
              <span className="font-bold text-sm block text-emerald-900">Recommended Next Step:</span>
              <p>
                Deploy the 45-minute <em>HPTLC Mobile Phase Selection Simulator</em> micro-course to all 4th-year students to close the 6% deficit before upcoming campus recruitment.
              </p>
              <button className="mt-2 px-3.5 py-1.5 bg-emerald-800 text-white rounded-lg font-bold text-xs">
                Deploy to 4th Year Cohort (1-Click)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Evaluation Desk */}
      {activeTab === 'review' && (
        <div className="space-y-4">
          <h3 className="text-base font-extrabold text-slate-900">
            Student Micro-Sprint Proof of Work Submissions
          </h3>
          <div className="space-y-3">
            {pendingSubmissions.map((sub) => (
              <div key={sub.id} className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{sub.task}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Submitted by: <strong className="text-slate-800">{sub.student}</strong> · {sub.submittedAt}</p>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1">
                    AI Pre-Check Score: {sub.accuracy}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleApprove(sub.id)}
                    disabled={sub.status.includes('Digitally Signed')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      sub.status.includes('Digitally Signed')
                        ? 'bg-emerald-100 text-emerald-900 cursor-default'
                        : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
                    }`}
                  >
                    {sub.status.includes('Digitally Signed') ? '✓ Cryptographically Signed' : 'Sign & Verify Dossier'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Author Studio */}
      {activeTab === 'author' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
          <h3 className="text-base font-extrabold text-slate-900">Micro-Course Authoring Studio</h3>
          <p className="text-xs text-slate-500">
            Create interactive practical micro-sprints aligned with National Commission for Indian System of Medicine (NCISM) syllabus guidelines.
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">New Module Draft: "Rasa Shastra Bhasma Incineration Temperature Curves"</span>
            <button className="px-3.5 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold">
              Open Studio Editor →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
