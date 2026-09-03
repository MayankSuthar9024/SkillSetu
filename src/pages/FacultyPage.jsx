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
  Search,
  Filter,
  FileCheck,
  GraduationCap,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';

export function FacultyPage({ onNavigate, onOpenReadinessModal, currentUser }) {
  const [activeTab, setActiveTab] = useState('radar'); // 'radar' | 'review' | 'author' | 'grants'
  const [selectedCohort, setSelectedCohort] = useState('BAMS-FinalYear');
  const [searchTerm, setSearchTerm] = useState('');
  
  const facultyUser = currentUser || {
    name: "Prof. Meenakshi Joshi",
    role: "Professor & HOD (Dravyaguna)",
    id: "FAC-AIIA-7712",
    email: "prof.mjoshi@aiia.gov.in",
    institution: "All India Institute of Ayurveda (AIIA), New Delhi",
    avatar: "MJ"
  };

  const [pendingSubmissions, setPendingSubmissions] = useState([
    {
      id: 'sub-1',
      student: 'Aarav Sharma',
      degree: 'BAMS (Final Year)',
      task: 'Triphala Churna HPTLC Marker Fingerprinting Protocol',
      submittedAt: 'Today, 10:14 AM',
      accuracy: '94%',
      status: 'Pending Review',
      hash: '0x8F9A12B4'
    },
    {
      id: 'sub-2',
      student: 'Sunita Patel',
      degree: 'BAMS (3rd Year)',
      task: 'Schedule T Sterile Area Standard Operating Procedure',
      submittedAt: 'Yesterday, 4:30 PM',
      accuracy: '89%',
      status: 'Pending Review',
      hash: '0x4E7C33D1'
    },
    {
      id: 'sub-3',
      student: 'Karan Malhotra',
      degree: 'MD Ayurveda (Dravyaguna)',
      task: 'NABL Analytical Method Validation for Heavy Metals',
      submittedAt: '2 days ago',
      accuracy: '96%',
      status: 'Audited & Digitally Signed',
      hash: '0x9D2B55E8'
    }
  ]);

  const [microCourses, setMicroCourses] = useState([
    { id: 'mc-1', title: 'HPTLC Mobile Phase Selection Simulator', duration: '45 mins', enrolled: 142, rating: '4.9/5', status: 'Published' },
    { id: 'mc-2', title: 'Schedule T Cleanroom Airflow Validation', duration: '30 mins', enrolled: 98, rating: '4.8/5', status: 'Published' },
    { id: 'mc-3', title: 'Rasa Shastra Bhasma Incineration & Standardization', duration: '60 mins', enrolled: 0, rating: 'Draft', status: 'In Review' },
  ]);

  const handleApprove = (id) => {
    setPendingSubmissions(prev => prev.map(s => 
      s.id === id ? { ...s, status: 'Audited & Digitally Signed' } : s
    ));
  };

  const filteredSubmissions = pendingSubmissions.filter(s => 
    s.student.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800/40">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
            <GraduationCap className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 font-extrabold text-2xl sm:text-3xl flex items-center justify-center shadow-lg border-2 border-white/20 shrink-0">
                {facultyUser.avatar || 'MJ'}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> NCISM Verified Preceptor
                  </span>
                  <span className="bg-white/10 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                    Faculty ID: {facultyUser.id}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold mt-2 tracking-tight">
                  {facultyUser.name}
                </h1>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-2xl">
                  {facultyUser.role} · {facultyUser.institution}
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl text-center flex-1 md:flex-initial">
                <span className="text-[10px] uppercase font-bold text-emerald-200 block">Mentored Scholars</span>
                <span className="text-xl font-extrabold text-white">142 Students</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl text-center flex-1 md:flex-initial">
                <span className="text-[10px] uppercase font-bold text-emerald-200 block">Micro-Courses</span>
                <span className="text-xl font-extrabold text-white">4 Modules</span>
              </div>
              <div className="bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 rounded-2xl text-center shadow-md flex-1 md:flex-initial">
                <span className="text-[10px] uppercase font-extrabold text-slate-900 block">Audit Pass Rate</span>
                <span className="text-xl font-extrabold">98.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-3">
          {[
            { id: 'radar', label: 'Department Cohort Radar', icon: BarChart3, badge: '142 Scholars' },
            { id: 'review', label: 'Evaluation & Digital Signature', icon: CheckCircle2, badge: `${pendingSubmissions.filter(s => s.status.includes('Pending')).length} Pending` },
            { id: 'author', label: 'Micro-Course Studio', icon: BookOpen, badge: '3 Active' },
            { id: 'grants', label: 'CCRAS SPARK-4.0 & FDPs', icon: Award, badge: '300+ Grants' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm ring-2 ring-emerald-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Department Cohort Radar */}
        {activeTab === 'radar' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Cohort Competency Vectors */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Real-time Diagnostic Intelligence
                    </span>
                    <h2 className="text-xl font-extrabold text-slate-900 mt-2">
                      Department-Wide Competency Vectors
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Dravyaguna & Ayurvedic Pharmacy Department (142 Enrolled Scholars)
                    </p>
                  </div>

                  <select 
                    value={selectedCohort}
                    onChange={(e) => setSelectedCohort(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                  >
                    <option value="BAMS-FinalYear">BAMS Final Year Cohort (58)</option>
                    <option value="BAMS-3rdYear">BAMS 3rd Year Cohort (44)</option>
                    <option value="MD-Dravyaguna">MD Dravyaguna Scholars (40)</option>
                  </select>
                </div>

                <div className="space-y-4 pt-2">
                  {[
                    { name: 'Classical Herb Identification & Taxonomy', avg: 91, benchmark: 85, status: 'Above Benchmark (+6%)', color: 'emerald' },
                    { name: 'Schedule T GMP Cleanroom Protocol', avg: 76, benchmark: 80, status: 'Identified Skill Deficit (-4%)', color: 'amber' },
                    { name: 'HPTLC Spectrophotometry & Marker Extraction', avg: 72, benchmark: 78, status: 'Targeted for Bridge Course (-6%)', color: 'rose' },
                    { name: 'Clinical Pharmacology & Posology', avg: 89, benchmark: 82, status: 'Strong Mastery (+7%)', color: 'emerald' },
                    { name: 'Heavy Metal & Pesticide Residue Assay', avg: 81, benchmark: 80, status: 'On Benchmark (+1%)', color: 'emerald' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="font-bold text-slate-900">{item.name}</span>
                        <span className="font-extrabold text-slate-900">
                          {item.avg}% <span className="text-xs text-slate-400 font-normal">(Benchmark: {item.benchmark}%)</span>
                        </span>
                      </div>

                      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden relative">
                        <div
                          className={`h-full ${
                            item.color === 'emerald' ? 'bg-emerald-600' :
                            item.color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                          } rounded-full transition-all duration-500`}
                          style={{ width: `${item.avg}%` }}
                        />
                        <div 
                          className="absolute top-0 bottom-0 w-0.5 bg-slate-900 z-10"
                          style={{ left: `${item.benchmark}%` }}
                          title={`National Benchmark: ${item.benchmark}%`}
                        />
                      </div>

                      <div className="flex justify-between items-center text-[11px]">
                        <span className={`font-bold ${
                          item.color === 'emerald' ? 'text-emerald-700' :
                          item.color === 'amber' ? 'text-amber-800' : 'text-rose-700'
                        }`}>
                          {item.status}
                        </span>
                        <span className="text-slate-400">Target NCISM Threshold: 80%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Interventions & Recommendations */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Sparkles className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-base font-extrabold text-slate-900">Pedagogical Interventions</h3>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 text-xs text-emerald-950">
                    <span className="font-extrabold text-sm block text-emerald-900">Recommended Action:</span>
                    <p className="leading-relaxed">
                      Deploy the 45-minute <strong>HPTLC Mobile Phase Selection Simulator</strong> micro-course to all 58 students in the BAMS Final Year cohort to resolve the 6% marker deficit before campus recruitment starts.
                    </p>
                    <button 
                      onClick={() => alert("Micro-course successfully assigned to BAMS Final Year Cohort!")}
                      className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Deploy to Cohort (1-Click)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2 text-xs text-amber-950">
                    <span className="font-extrabold text-sm block text-amber-900">Upcoming Audit Alert:</span>
                    <p>NCISM accreditation team visit scheduled in 14 days. Institutional skill readiness report is ready for export.</p>
                    <button 
                      onClick={() => alert("Downloading NCISM & NAAC Compliance Audit Report...")}
                      className="w-full py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export NAAC / NCISM Report</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Evaluation & Digital Signature */}
        {activeTab === 'review' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Student Micro-Sprint Proof of Work Submissions
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Audit practical clinical lab logs and issue SHA-256 cryptographic preceptor signatures.
                  </p>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search student or task..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredSubmissions.map((sub) => (
                  <div key={sub.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3 hover:border-emerald-300 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">{sub.task}</h4>
                          <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                            {sub.hash}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Submitted by: <strong className="text-slate-800">{sub.student}</strong> ({sub.degree}) · {sub.submittedAt}
                        </p>
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        sub.status.includes('Digitally Signed') 
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                          : 'bg-amber-100 text-amber-900 border border-amber-200'
                      }`}>
                        {sub.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-slate-700">
                          Diagnostic Accuracy: <strong className="text-emerald-800 font-extrabold">{sub.accuracy}</strong>
                        </span>
                        <span className="text-slate-400">|</span>
                        <span className="text-slate-600">Verification: <strong>Preceptor Review Required</strong></span>
                      </div>

                      <button
                        onClick={() => handleApprove(sub.id)}
                        disabled={sub.status.includes('Digitally Signed')}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          sub.status.includes('Digitally Signed')
                            ? 'bg-emerald-100 text-emerald-900 cursor-default border border-emerald-300'
                            : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
                        }`}
                      >
                        {sub.status.includes('Digitally Signed') ? (
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Signed & Verified</span>
                          </span>
                        ) : (
                          'Sign & Verify Dossier (Cryptographic)'
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Author Studio */}
        {activeTab === 'author' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Micro-Course Authoring Studio
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Design 15-minute micro-sprints mapped to 12 HSSC NQR Qualification Packs.
                  </p>
                </div>

                <button 
                  onClick={() => alert("Opening Micro-Course Authoring Canvas...")}
                  className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Create New Micro-Sprint</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {microCourses.map((course) => (
                  <div key={course.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        course.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {course.status}
                      </span>
                      <h3 className="font-extrabold text-sm text-slate-900 mt-2">{course.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">Duration: {course.duration} · Enrolled: {course.enrolled} Students</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
                      <span className="font-bold text-emerald-800">{course.rating}</span>
                      <button className="text-emerald-800 font-bold hover:underline cursor-pointer">
                        Edit Canvas →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Grants & FDPs */}
        {activeTab === 'grants' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    CCRAS SPARK-4.0 Research Grants & Industry FDPs
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct government research grants and pharma consultancy partnerships for Ayush academicians.
                  </p>
                </div>
                <span className="px-3.5 py-1 bg-emerald-100 text-emerald-900 font-bold text-xs rounded-full border border-emerald-200">
                  300+ Active Grants Available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl border border-emerald-200 bg-emerald-50/50 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-emerald-900 text-base">CCRAS SPARK-4.0 Studentship</span>
                    <span className="font-bold text-emerald-800 bg-white px-3 py-1 rounded-xl border border-emerald-300 text-xs">₹50,000 Grant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Faculty mentorship track for BAMS & PG scholars conducting classical formulation validation and clinical evidence research under CCRAS guidelines.
                  </p>
                  <button 
                    onClick={() => alert("Opening CCRAS SPARK-4.0 Application Portal...")}
                    className="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition-all cursor-pointer"
                  >
                    Nominate Scholar & Apply →
                  </button>
                </div>

                <div className="p-6 rounded-3xl border border-blue-200 bg-blue-50/50 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-900 text-base">Pharma FDP: Advanced HPTLC Chromatographic Assays</span>
                    <span className="font-bold text-blue-800 bg-white px-3 py-1 rounded-xl border border-blue-300 text-xs">2-Week FDP</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sponsored by Dabur R&D Centre & Patanjali Wellness for Ayush professors to master high-throughput botanical extraction and quality assurance.
                  </p>
                  <button 
                    onClick={() => alert("Registering for Dabur Industry FDP Program...")}
                    className="px-4 py-2 bg-blue-800 text-white rounded-xl text-xs font-bold hover:bg-blue-900 transition-all cursor-pointer"
                  >
                    Register for FDP →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default FacultyPage;
