import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Compass, 
  FileText, 
  TrendingUp,
  Download,
  Clock,
  ChevronRight,
  User,
  LayoutGrid,
  X
} from 'lucide-react';
import { HERO_STATS, PLATFORM_METADATA } from '../../data/portalData';

export const StudentPortalView = ({ user }) => {
  const [activeTab, setActiveTab] = useState('assessment');
  const [selectedAssessmentOption, setSelectedAssessmentOption] = useState(null);
  const [hasAwardedBonus, setHasAwardedBonus] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(88);
  const [appliedJobs, setAppliedJobs] = useState({});
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const competencyPillars = [
    { name: 'Schedule T GMP Compliance', score: 94, level: 'Expert Mastery', color: 'bg-emerald-500' },
    { name: 'Phytochemical Standardization (HPTLC)', score: 88, level: 'Advanced', color: 'bg-teal-500' },
    { name: 'Classical Ayurvedic Formulations', score: 92, level: 'Expert Mastery', color: 'bg-emerald-600' },
    { name: 'Clinical Dravyaguna & Diagnostics', score: 82, level: 'Proficient', color: 'bg-amber-500' },
    { name: 'Pharmacovigilance & Adverse Event Reporting', score: 85, level: 'Advanced', color: 'bg-blue-500' },
    { name: 'Ayush Regulatory & IP Filing', score: 79, level: 'Bridging Gap', color: 'bg-purple-500' },
  ];

  const jobsList = [
    {
      id: 'job-1',
      title: 'Ayurvedic Formulation Research Fellow',
      company: 'Dabur R&D Centre',
      location: 'Delhi NCR (Hybrid)',
      stipend: '₹22,000 / month',
      match: 96,
      skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Dravyaguna'],
      deadline: 'In 4 Days'
    },
    {
      id: 'job-2',
      title: 'Phytopharmacy Quality Control Analyst',
      company: 'Patanjali Research Foundation',
      location: 'Haridwar (On-Site)',
      stipend: '₹25,000 / month',
      match: 92,
      skills: ['API Moisture Standards', 'Heavy Metal Assay', 'Batch QC'],
      deadline: 'In 6 Days'
    },
    {
      id: 'job-3',
      title: 'Panchakarma Clinical Trainee',
      company: 'Kottakkal Arya Vaidya Sala',
      location: 'Kottakkal, Kerala',
      stipend: '₹20,000 / month',
      match: 89,
      skills: ['Panchakarma Therapy', 'Pulse Diagnosis', 'Patient Records'],
      deadline: 'In 10 Days'
    }
  ];

  const bridgeModules = [
    {
      id: 'bm-1',
      title: 'Schedule T GMP Cleanroom Protocol',
      duration: '15 Mins',
      sponsor: 'Dabur R&D & AIIA Preceptors',
      status: 'Ready to Solve',
      badge: 'Schedule T Certified'
    },
    {
      id: 'bm-2',
      title: 'HPTLC Rf Value Quantification & Marker Assay',
      duration: '15 Mins',
      sponsor: 'Patanjali Central Instrumentation Lab',
      status: 'In Progress (60%)',
      badge: 'QC Analyst'
    },
    {
      id: 'bm-3',
      title: 'Good Clinical Practices (GCP) & Protocol Case Review',
      duration: '15 Mins',
      sponsor: 'CCRAS SPARK-4.0 Research Cell',
      status: 'Enrolled',
      badge: 'Clinical Associate'
    }
  ];

  const handleApply = (jobId) => {
    setAppliedJobs(prev => ({
      ...prev,
      [jobId]: true
    }));
  };

  return (
    <div className="space-y-6">
      {/* Student Profile & Verification Banner */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6 min-w-0 max-w-full">
        <div className="flex items-center gap-4 min-w-0 max-w-full">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-xl sm:text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40 shrink-0">
            {user.avatar || 'AS'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 truncate">{user.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                100% SHA-256 Verifiable Ayush Portfolio
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 break-words">
              {user.degree} · {user.institution} · Roll: <span className="font-mono font-semibold text-slate-700">{user.id}</span>
            </p>
          </div>
        </div>

        {/* Dynamic Metric Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider block">Industry Readiness</span>
            <span className="text-xl font-extrabold text-emerald-900">{assessmentScore}%</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider block">Verified Credentials</span>
            <span className="text-xl font-extrabold text-amber-900">6 Badges</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider block">Live Matches</span>
            <span className="text-xl font-extrabold text-blue-900">3 Openings</span>
          </div>
        </div>
      </div>

      {/* Portal Navigation Tabs: Radar > Bridge > 1-Click Apply > Ayush Passport */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setActiveTab('assessment')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'assessment'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Phase 1: 6-Axis Radar & Diagnostic Test</span>
        </button>

        <button
          onClick={() => setActiveTab('bridge')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'bridge'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Phase 2: 15-Min Bridge Courses</span>
        </button>

        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'jobs'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Phase 3: 1-Click Placements ({jobsList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('dossier')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'dossier'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Verified Digital Dossier</span>
        </button>
      </div>



      {/* TAB 1: Diagnostic Radar & Skill Assessment */}
      {activeTab === 'assessment' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: 6-Dimension Competency Radar Breakdown */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Competency Vector Breakdown</h3>
                <p className="text-xs text-slate-500">Benchmarked against Ayush Pharmacopoeia & Industry Needs</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                Top 5% Cohort
              </span>
            </div>

            <div className="space-y-4">
              {competencyPillars.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{item.name}</span>
                    <span className="text-slate-500 font-semibold">{item.score}% ({item.level})</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 text-xs text-emerald-900 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Competency Enhancement Roadmap:</strong>
                Complete the <em>Ayush Regulatory & IP Filing</em> 30-minute sprint to elevate your Industry Readiness from 88% to 94%!
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Diagnostic Question */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                  Live Diagnostic Assessment #04
                </span>
                <span className="text-xs text-slate-400">Schedule T GMP</span>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md">Competency Weight: +10 pts</span>
            </div>

            <p className="text-sm font-bold text-slate-900 leading-relaxed">
              Under revised Schedule T Guidelines of the Drugs and Cosmetics Act, what is the mandatory particle air cleanliness grade required for the core manufacturing and filling zone of sterile Ayurvedic ophthalmic solutions?
            </p>

            <div className="space-y-2.5">
              {[
                { id: 'opt-a', text: 'Grade A (Class 100 / ISO 5 Laminar Flow Workstation)', isCorrect: true },
                { id: 'opt-b', text: 'Grade D (General Secondary Packaging Zone only)', isCorrect: false },
                { id: 'opt-c', text: 'Unclassified Ambient Warehouse Environment', isCorrect: false },
                { id: 'opt-d', text: 'Grade C with no mandatory HEPA filtration', isCorrect: false }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSelectedAssessmentOption(opt.id);
                    if (opt.isCorrect && !hasAwardedBonus) {
                      setAssessmentScore(prev => Math.min(100, prev + 2));
                      setHasAwardedBonus(true);
                    }
                  }}
                  className={`w-full text-left p-3.5 rounded-xl text-xs font-medium transition-all cursor-pointer border flex items-center justify-between ${
                    selectedAssessmentOption === opt.id
                      ? opt.isCorrect
                        ? 'bg-emerald-50 text-emerald-950 border-emerald-500 font-bold shadow-xs'
                        : 'bg-red-50 text-red-950 border-red-400 font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <span>{opt.text}</span>
                  {selectedAssessmentOption === opt.id && (
                    <span className={`text-xs font-bold flex items-center gap-1 shrink-0 ${opt.isCorrect ? 'text-emerald-700' : 'text-red-600'}`}>
                      {opt.isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correct Benchmark (+2%)</span>
                        </>
                      ) : (
                        <>
                          <X className="w-3.5 h-3.5" />
                          <span>Skill Gap Identified</span>
                        </>
                      )}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {selectedAssessmentOption && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 animate-in fade-in">
                <span className="font-bold text-slate-900 block">Explanation & Pharmacopoeia Reference:</span>
                <p>
                  Schedule T GMP mandates that sterile ophthalmic Ayurvedic products must be processed under Grade A laminar air flow stations to prevent microbial contamination.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: 1-Click Verified Jobs */}
      {activeTab === 'jobs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900">
              Verified Enterprise Job & Internship Openings
            </h3>
            <span className="text-xs text-slate-500">Auto-matched using your 88% Competency Vector</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {jobsList.map((job) => (
              <div key={job.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col justify-between space-y-4 hover:shadow-elevated transition-all">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                      {job.match}% Match
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {job.deadline}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">{job.title}</h4>
                  <p className="text-xs font-semibold text-emerald-800">{job.company}</p>
                  <p className="text-xs text-slate-500">{job.location} · {job.stipend}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.skills.map((s, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job.id)}
                  disabled={appliedJobs[job.id]}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    appliedJobs[job.id]
                      ? 'bg-emerald-900 text-white cursor-default'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                  }`}
                >
                  {appliedJobs[job.id] ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Application Submitted</span>
                    </>
                  ) : (
                    <>
                      <span>Apply with Verified Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Micro-Bridge Courses */}
      {activeTab === 'bridge' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bridgeModules.map((mod) => (
            <div key={mod.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                  {mod.duration} Micro-Module
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">{mod.title}</h4>
                <p className="text-xs text-slate-500">Sponsored by: {mod.sponsor}</p>
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  Reward: {mod.badge}
                </div>
              </div>

              <button
                onClick={() => setEnrolledCourse(mod.id)}
                className="w-full py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {enrolledCourse === mod.id ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Module Active in Lab</span>
                  </span>
                ) : (
                  'Start Micro-Sprint'
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: Cryptographic Portfolio Dossier */}
      {activeTab === 'dossier' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">National Ayush Student Dossier</h3>
              <p className="text-xs text-slate-500">Cryptographically verifiable on the National Ayush Blockchain Node</p>
            </div>
            <button
              onClick={() => alert('Dossier PDF downloaded with cryptographic SHA-256 signature.')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Dossier PDF</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Blockchain Hash</span>
              <p className="text-xs font-mono font-bold text-emerald-800 break-all">
                0x9F4C82E1A987D43B902C5E71
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Issued Under</span>
              <p className="text-xs font-bold text-slate-800">
                {PLATFORM_METADATA.ministryFull}
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Verification Status</span>
              <p className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Immutable Record
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
