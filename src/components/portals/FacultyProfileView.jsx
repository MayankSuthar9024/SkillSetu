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
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  Users,
  FileText,
  FileCheck,
  Check
} from 'lucide-react';

export const FacultyProfileView = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'radar' | 'review' | 'courses' | 'publications'
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
    },
    {
      id: 'sub-3',
      student: 'Rohan Deshmukh (BAMS Graduate)',
      task: 'Heavy Metal Assay Validation in Guduchi Extract',
      submittedAt: '2 days ago',
      accuracy: '92%',
      status: 'Audited & Signed'
    }
  ]);

  const [authoredCourses, setAuthoredCourses] = useState([
    {
      id: 'course-1',
      title: 'HPTLC Mobile Phase Selection Simulator',
      cohort: '4th Year BAMS Scholars',
      duration: '45 mins',
      enrolled: 142,
      completionRate: '96.2%',
      status: 'Published'
    },
    {
      id: 'course-2',
      title: 'Dravyaguna Phytochemistry & HPLC Fingerprinting',
      cohort: 'MD Ayush Scholars',
      duration: '2 hours',
      enrolled: 88,
      completionRate: '91.5%',
      status: 'Published'
    },
    {
      id: 'course-3',
      title: 'Good Clinical Practice (GCP) Protocols in Ayush Research',
      cohort: 'All Ayush Researchers',
      duration: '1.5 hours',
      enrolled: 210,
      completionRate: '94.0%',
      status: 'Published'
    }
  ]);

  const [showDeploySuccess, setShowDeploySuccess] = useState(false);

  const handleApprove = (id) => {
    setPendingSubmissions(prev => prev.map(s => 
      s.id === id ? { ...s, status: 'Audited & Signed' } : s
    ));
  };

  const handleDeployCourse = () => {
    setShowDeploySuccess(true);
    setTimeout(() => setShowDeploySuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Faculty Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        
        {/* Cover Graphic */}
        <div className="h-44 sm:h-56 w-full bg-gradient-to-r from-emerald-900 via-teal-950 to-emerald-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md text-emerald-200 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Senior Academic Preceptor & Research Fellow</span>
          </div>
        </div>

        {/* Profile Info Row */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-14 md:-mt-16 mb-4">
            
            {/* Avatar & Title */}
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-3xl flex items-center justify-center border border-emerald-400/30 shadow-inner">
                  <span>{user?.avatar || 'MJ'}</span>
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {user?.name || 'Prof. Meenakshi Joshi'}
                  </h1>
                  <ShieldCheck className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex flex-wrap items-center gap-2">
                  <span>{user?.role || 'Professor & HOD (Dravyaguna)'}</span>
                  <span>•</span>
                  <span className="text-emerald-800 font-bold">ID: {user?.id || 'FAC-AIIA-7712'}</span>
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setActiveTab('review')}
                className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Evaluate Submissions ({pendingSubmissions.filter(s => s.status.includes('Pending')).length})</span>
              </button>
            </div>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              {user?.institution || 'All India Institute of Ayurveda (AIIA), New Delhi'}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-700" />
              142 Active Mentee Scholars
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              4 Micro-Courses Authored
            </span>
          </div>

        </div>

      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Mentored Scholars</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">142</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Active Academic Cohort</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Pending Reviews</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">
            {pendingSubmissions.filter(s => s.status.includes('Pending')).length}
          </div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Awaiting Evaluation</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Authored Modules</span>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">4</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Published on SkillSetu</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Cohort Benchmark</span>
          <div className="text-3xl font-extrabold text-teal-800 mt-1">91.4%</div>
          <span className="text-[11px] text-teal-700 font-semibold mt-1 block">+4.2% Above Nat. Benchmark</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          Overview & Preceptor Info
        </button>

        <button
          onClick={() => setActiveTab('radar')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'radar'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Cohort Deficit Radar</span>
        </button>

        <button
          onClick={() => setActiveTab('review')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'review'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Evaluation Desk</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-900 font-extrabold">
            {pendingSubmissions.filter(s => s.status.includes('Pending')).length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('courses')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'courses'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          Authored Modules
        </button>
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">Academic & Research Biography</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prof. Meenakshi Joshi leads the Department of Dravyaguna (Ayurvedic Pharmacology) at AIIA New Delhi. Her work focuses on chromatographic fingerprinting of botanical extracts, clinical drug standardization, and mentoring scholars to bridge classical Ayurvedic literature with evidence-based modern research protocols.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As a senior preceptor on SkillSetu, she evaluates practical laboratory proof-of-work submissions, authors interactive diagnostic micro-courses, and monitors department-wide competency deficit radars.
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80">
                  <h4 className="text-xs font-extrabold text-emerald-950">Primary Specialization</h4>
                  <p className="text-xs text-slate-600 mt-1">Dravyaguna Vigyana, HPLC Phytochemistry, Botanical Quality Control</p>
                </div>
                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200/80">
                  <h4 className="text-xs font-extrabold text-teal-950">Research Focus</h4>
                  <p className="text-xs text-slate-600 mt-1">Heavy Metal Safety Assays, Schedule T GMP Protocols, Rasa Shastra Formulations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Institutional Contact & Preceptor ID
              </h4>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>prof.mjoshi@aiia.gov.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>AIIA New Delhi Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="font-semibold text-emerald-800">Ministry Approved Preceptor</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB: RADAR */}
      {activeTab === 'radar' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">
              Department Cohort Competency Vectors (142 Mentee Scholars)
            </h3>
            <p className="text-xs text-slate-500">
              Real-time diagnostic analysis of Dravyaguna & Ayurvedic Pharmacy Department
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
            <h3 className="text-base font-extrabold text-slate-900">Pedagogical Bridge Interventions</h3>
            
            {showDeploySuccess ? (
              <div className="p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-xs text-emerald-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-800 stroke-[3]" />
                <span>Bridge module successfully deployed to 4th Year BAMS Cohort!</span>
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 text-xs text-emerald-950">
                <span className="font-bold text-sm block text-emerald-900">Recommended Action:</span>
                <p className="leading-relaxed">
                  Deploy the 45-minute <em>HPTLC Mobile Phase Selection Simulator</em> micro-course to all 4th-year students to close the 6% deficit before upcoming corporate placements.
                </p>
                <button
                  onClick={handleDeployCourse}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs cursor-pointer"
                >
                  Deploy Bridge Module to 4th Year Cohort
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB: REVIEW */}
      {activeTab === 'review' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-900">
              Pending Student Proof-of-Work Submissions ({pendingSubmissions.length})
            </span>
          </div>

          <div className="space-y-3">
            {pendingSubmissions.map((sub) => (
              <div key={sub.id} className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{sub.task}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Submitted by: <strong className="text-slate-800">{sub.student}</strong> · {sub.submittedAt}</p>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1">
                    Diagnostic Score: {sub.accuracy}
                  </span>
                </div>

                <button
                  onClick={() => handleApprove(sub.id)}
                  disabled={sub.status.includes('Signed')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    sub.status.includes('Signed')
                      ? 'bg-emerald-100 text-emerald-900 cursor-default'
                      : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
                  }`}
                >
                  {sub.status.includes('Signed') ? '✓ Signed & Verified' : 'Sign & Audit Dossier'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: COURSES */}
      {activeTab === 'courses' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-900">
              Authored Micro-Courses & Simulators ({authoredCourses.length})
            </span>
          </div>

          <div className="space-y-3">
            {authoredCourses.map((c) => (
              <div key={c.id} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">{c.title}</h4>
                    <p className="text-xs text-slate-500">{c.cohort} • Duration: {c.duration}</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {c.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs pt-1 text-slate-600 font-medium">
                  <span>Enrolled: <strong>{c.enrolled} Scholars</strong></span>
                  <span>Completion Rate: <strong className="text-emerald-800">{c.completionRate}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
