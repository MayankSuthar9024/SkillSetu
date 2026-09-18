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
  X,
  Video,
  History,
  Calendar,
  Percent,
  Building2,
  Check,
  Star,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { HERO_STATS, PLATFORM_METADATA } from '../../data/portalData';

export const StudentPortalView = ({ user, onNavigateToSkills }) => {
  const defaultUser = {
    name: 'Aarav Sharma',
    avatar: 'AS',
    degree: 'BAMS Final Year',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    id: 'AYUSH-BAMS-2022-849',
    apaarId: '9841-2041-8891',
    abcCredits: '164 Credits',
    abcId: '164 Credits'
  };
  const safeUser = (user && user.name) ? user : (HERO_STATS?.profileUser || defaultUser);
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

  // National SWAYAM / NPTEL Learning Bridges for Remediation & Skill Deficits
  const nationalMOOCBridges = [
    {
      id: 'swayam-1',
      title: 'NPTEL: Analytical Chemistry in Herbal Formulations - IIT Madras',
      provider: 'IIT Madras',
      targetDeficit: 'Phytochemical Standardization (HPTLC)',
      duration: '12 Weeks',
      credits: '3 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'NPTEL Certified',
      url: 'https://swayam.gov.in/explorer?searchText=analytical+chemistry',
      enrolledCount: '1,420 Scholars'
    },
    {
      id: 'swayam-2',
      title: 'SWAYAM: Clinical Trials Management - AIIMS',
      provider: 'AIIMS New Delhi',
      targetDeficit: 'Clinical Dravyaguna & Diagnostics',
      duration: '8 Weeks',
      credits: '2 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'SWAYAM Certified',
      url: 'https://swayam.gov.in/explorer?searchText=clinical+trials',
      enrolledCount: '1,890 Scholars'
    },
    {
      id: 'swayam-3',
      title: 'NPTEL: Schedule T Pharmaceutical Engineering & Quality Control - IIT Kharagpur',
      provider: 'IIT Kharagpur',
      targetDeficit: 'Ayush Regulatory & IP Filing',
      duration: '12 Weeks',
      credits: '3 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'NPTEL Certified',
      url: 'https://swayam.gov.in/explorer?searchText=pharmaceutical+engineering',
      enrolledCount: '1,150 Scholars'
    },
    {
      id: 'swayam-4',
      title: 'SWAYAM: Biostatistics & Epidemiological Research for Ayush - PGIMER',
      provider: 'PGIMER Chandigarh',
      targetDeficit: 'Evidence-Based Biostatistics & GCP',
      duration: '8 Weeks',
      credits: '2 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'SWAYAM Certified',
      url: 'https://swayam.gov.in/explorer?searchText=biostatistics',
      enrolledCount: '940 Scholars'
    }
  ];

  // Past Interview Logs & Assessments Record
  const pastInterviewsRecord = [
    {
      id: 'int-1',
      role: 'Ayurvedic Formulation Research Fellow',
      company: 'Dabur R&D Centre, Ghaziabad',
      interviewer: 'Dr. Vivek Swaroop (VP Phytopharmacy R&D)',
      date: '28 Aug 2026',
      mode: 'Technical & Case Study Round (Video)',
      status: 'Selected & Offer Issued',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      technicalScore: '94 / 100',
      candidateSpoke: 'Explained standardizing Withanolide marker extraction in Ashwagandha batches using HPTLC, ensuring Schedule T cleanroom protocols and batch QC compliance.',
      outcomeNotes: 'Candidate demonstrated exceptional practical knowledge of Ayurvedic pharmacopoeia and laboratory assay standardization. Cleared all 4 rounds.',
      feedbackTags: ['Strong Dravyaguna Knowledge', 'Laboratory QC Ready', 'Articulate Communication'],
      recordingDuration: '42 mins',
      questionsAsked: [
        'How do you determine Rf value discrepancies in HPTLC finger-printing?',
        'Describe Schedule T airflow pressure differences between cleanrooms.'
      ]
    },
    {
      id: 'int-2',
      role: 'Junior Clinical Research Associate',
      company: 'All India Institute of Ayurveda (AIIA)',
      interviewer: 'Prof. S. N. Tripathi (Dean Clinical Research)',
      date: '14 July 2026',
      mode: 'Clinical Case Evaluation (Hybrid)',
      status: 'Shortlisted (Final Merit)',
      statusColor: 'bg-blue-100 text-blue-800 border-blue-300',
      technicalScore: '89 / 100',
      candidateSpoke: 'Presented protocol for randomized clinical evaluation of Punarnavadi Kwath in diabetic nephropathy fluid management with biometric logging.',
      outcomeNotes: 'Well-structured scientific methodology. Recommended for SPARK-4.0 Clinical Trials Preceptor fellowship.',
      feedbackTags: ['GCP Compliance', 'Patient Ethics', 'Biostatistics'],
      recordingDuration: '35 mins',
      questionsAsked: [
        'Explain ethical clearance documentation steps for human botanical trials.',
        'How is adverse event causality assessed under Ayush Pharmacovigilance?'
      ]
    },
    {
      id: 'int-3',
      role: 'Phytochemical QC Analyst',
      company: 'Patanjali Research Foundation',
      interviewer: 'Dr. Ananya Sen (Head QC Analytical Labs)',
      date: '02 June 2026',
      mode: 'Practical Lab Skills Round',
      status: 'Cleared & Empanelled',
      statusColor: 'bg-teal-100 text-teal-800 border-teal-300',
      technicalScore: '91 / 100',
      candidateSpoke: 'Walked through AAS (Atomic Absorption Spectroscopy) procedures for detecting heavy metal ppm thresholds in raw herbal batches.',
      outcomeNotes: 'Solid hands-on laboratory aptitude. Successfully diagnosed simulated test batch contamination.',
      feedbackTags: ['Heavy Metal Assay', 'Batch Audit', 'Instrumentation'],
      recordingDuration: '28 mins',
      questionsAsked: [
        'What are the permissible lead (Pb) and arsenic (As) limits in classical bhasmas?'
      ]
    }
  ];

  // Academic Qualifications: 10th, 12th & Degree Transcripts
  const academicRecords = {
    class10: {
      exam: 'Secondary School Examination (Class X)',
      board: 'Central Board of Secondary Education (CBSE)',
      school: 'Kendriya Vidyalaya No. 1, Bajaj Nagar, Jaipur',
      passingYear: '2019',
      rollNo: 'CBSE-10-8192410',
      cgpaScore: '94.6% (10.0 CGPA)',
      division: '1st Division with Distinction',
      certificateHash: '0xCB10_99A82D1E4B37',
      subjects: [
        { name: 'Science (Physics, Chemistry, Biology)', marks: '97 / 100', grade: 'A1' },
        { name: 'Mathematics', marks: '93 / 100', grade: 'A1' },
        { name: 'English Language & Literature', marks: '95 / 100', grade: 'A1' },
        { name: 'Hindi Course-A', marks: '96 / 100', grade: 'A1' },
        { name: 'Social Science', marks: '92 / 100', grade: 'A1' }
      ]
    },
    class12: {
      exam: 'Senior School Certificate Examination (Class XII - Science PCB)',
      board: 'Central Board of Secondary Education (CBSE)',
      school: 'Kendriya Vidyalaya No. 1, Bajaj Nagar, Jaipur',
      passingYear: '2021',
      rollNo: 'CBSE-12-9021488',
      cgpaScore: '93.8% Aggregate',
      division: '1st Division with Distinction',
      certificateHash: '0xCB12_77E13F90C512',
      neetScore: 'NEET-UG: 594 Marks (All India Ayush Rank: 1,420)',
      subjects: [
        { name: 'Biology / Biotechnology', marks: '96 / 100', grade: 'A1' },
        { name: 'Chemistry (Organic & Analytical)', marks: '94 / 100', grade: 'A1' },
        { name: 'Physics', marks: '90 / 100', grade: 'A1' },
        { name: 'English Core', marks: '95 / 100', grade: 'A1' },
        { name: 'Physical Education & Yoga', marks: '94 / 100', grade: 'A1' }
      ]
    },
    bams: {
      exam: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS - Final Year)',
      university: 'National Institute of Ayurveda (NIA Deemed to be University), Jaipur',
      regNo: 'NIA/AY/2026/0491',
      passingYear: '2021 - 2026 (Final Year)',
      cgpaScore: '8.94 / 10.0 CGPA (Top 2% Honors)',
      division: 'Distinction in Dravyaguna & Shalya',
      certificateHash: '0xBAMS_4E819C20AF66',
      subjects: [
        { name: 'Dravyaguna Vijnana (Pharmacology & Materia Medica)', marks: '91 / 100', grade: 'Honors' },
        { name: 'Rasa Shastra & Bhaishajya Kalpana (Pharmaceuticals)', marks: '89 / 100', grade: 'Distinction' },
        { name: 'Roga Nidana & Vikriti Vijnana (Diagnostics)', marks: '88 / 100', grade: 'Distinction' },
        { name: 'Kayachikitsa (Internal Medicine)', marks: '90 / 100', grade: 'Honors' },
        { name: 'Panchakarma Procedures & Therapy', marks: '86 / 100', grade: 'Distinction' }
      ]
    }
  };

  const [selectedAcademicTab, setSelectedAcademicTab] = useState('bams');
  const [selectedInterview, setSelectedInterview] = useState(null);

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
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-xl sm:text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40 shrink-0 overflow-hidden">
            {safeUser.avatarImage ? (
              <img src={safeUser.avatarImage} alt={safeUser.name} className="w-full h-full object-cover" />
            ) : (
              safeUser.avatar || 'AS'
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 truncate">{safeUser.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                100% SHA-256 Verifiable Ayush Portfolio
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/90 flex items-center gap-1 shrink-0 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>APAAR: {safeUser.apaarId || '9841-2041-8891'} • ABC Bank: {safeUser.abcCredits || '164 Credits'} (DigiLocker Verified)</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 break-words">
              {safeUser.degree} · {safeUser.institution} · Roll: <span className="font-mono font-semibold text-slate-700">{safeUser.id}</span>
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
            <span className="text-xl font-extrabold text-blue-900">3 Matched Roles</span>
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
          onClick={() => setActiveTab('interviews')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'interviews'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <History className="w-4 h-4 text-emerald-600" />
          <span>Interview Records &amp; Speeches ({pastInterviewsRecord.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('academics')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'academics'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-emerald-600" />
          <span>10th &amp; 12th Academic Marksheets</span>
        </button>

        <button
          onClick={() => setActiveTab('portfolio')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'portfolio'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Verified Digital Portfolio</span>
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
                Complete the <em>Ayush Regulatory &amp; IP Filing</em> 30-minute sprint to elevate your Industry Readiness from 88% to 94%!
              </div>
            </div>

            {/* Remediation & Skill Deficit Recommendations (SWAYAM & NPTEL National Portal) */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 tracking-tight">
                      Remediation &amp; Skill Deficit Recommendations
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      National MOOC Electives (IITs / AIIMS) for detected competency gaps
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-100 text-teal-900 border border-teal-200">
                  UGC / AICTE Approved
                </span>
              </div>

              <div className="space-y-2.5">
                {nationalMOOCBridges.map((bridge) => (
                  <div 
                    key={bridge.id} 
                    className="p-3.5 bg-slate-50/80 hover:bg-teal-50/40 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[9px] font-black uppercase tracking-wider text-teal-950 bg-teal-100 px-2 py-0.5 rounded border border-teal-200">
                          {bridge.tag}
                        </span>
                        <span className="text-[9px] font-extrabold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                          {bridge.badge}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {bridge.duration} · {bridge.credits}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 leading-snug">
                        {bridge.title}
                      </h5>
                      <p className="text-[11px] text-slate-500">
                        Target Deficit: <strong className="text-slate-800 font-semibold">{bridge.targetDeficit}</strong>
                      </p>
                    </div>

                    <a
                      href={bridge.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-2xs self-start sm:self-auto cursor-pointer"
                      title="Open on official SWAYAM portal (swayam.gov.in)"
                    >
                      <span>Enroll on swayam.gov.in</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
                    </a>
                  </div>
                ))}
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

            {onNavigateToSkills && (
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <p className="text-[11px] text-slate-500">Ready for full evaluation?</p>
                <button
                  onClick={onNavigateToSkills}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Take Full Proctored Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
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
                      <span>Apply with Verified Portfolio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Micro-Bridge Courses & National MOOC Electives */}
      {activeTab === 'bridge' && (
        <div className="space-y-8">
          {/* Section 1: Fast-Track 15-Min Micro-Sprints */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="p-1 rounded-md bg-amber-100 text-amber-900 text-xs font-black">FAST-TRACK</span>
                  <span>15-Minute Preceptor Micro-Sprints</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Rapid experiential lab simulations to boost competency benchmarks before placement interviews.
                </p>
              </div>
              <span className="text-xs text-slate-400 font-semibold shrink-0">3 Ready in Lab</span>
            </div>

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
          </div>

          {/* Section 2: National Open-Courseware Bridges (SWAYAM & NPTEL MOOCs) */}
          <div className="space-y-4 pt-4 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="p-1 rounded-md bg-teal-100 text-teal-900 text-xs font-black">NEP 2020 MOOC</span>
                  <span>National Open-Courseware Bridges (SWAYAM &amp; NPTEL)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official UGC &amp; Ministry accredited courses from top IITs &amp; AIIMS to remediate detected skill deficiencies with ABC credit transfer.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-teal-50 text-teal-800 border border-teal-200 shrink-0">
                Direct External Links to swayam.gov.in
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {nationalMOOCBridges.map((bridge) => (
                <div 
                  key={bridge.id} 
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-950 border border-teal-200">
                        {bridge.tag}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {bridge.duration}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {bridge.title}
                    </h4>

                    <div className="space-y-1 text-xs">
                      <p className="text-slate-600 font-semibold">
                        Host: <span className="text-teal-800">{bridge.provider}</span>
                      </p>
                      <p className="text-slate-500">
                        Target Deficit: <span className="text-slate-800 font-bold">{bridge.targetDeficit}</span>
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{bridge.badge}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-medium">
                        {bridge.credits} · {bridge.enrolledCount}
                      </p>
                    </div>
                  </div>

                  <a
                    href={bridge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    title="Open course on official SWAYAM portal (swayam.gov.in)"
                  >
                    <span>Enroll on swayam.gov.in</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: PAST INTERVIEWS RECORD & SPEECHES */}
      {activeTab === 'interviews' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <History className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Past Placement Interviews &amp; Viva Assessment Record
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Verified candidate speech transcripts, questions asked, technical scores, and recruiter evaluation notes.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                100% Interview History Recorded
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {pastInterviewsRecord.map((interview) => (
              <div key={interview.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-5 hover:border-emerald-300 transition-all">
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                      <Building2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-extrabold text-base text-slate-900">{interview.role}</h4>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${interview.statusColor}`}>
                          {interview.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold mt-0.5">{interview.company}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Interviewer: <strong className="text-slate-700">{interview.interviewer}</strong> · {interview.mode}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center p-2.5 bg-slate-50 rounded-2xl border border-slate-200/80 shrink-0 min-w-[140px]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Evaluation Score</span>
                    <span className="text-lg font-black text-emerald-800 font-mono">{interview.technicalScore}</span>
                    <span className="text-[10px] font-semibold text-slate-500">{interview.date} ({interview.recordingDuration})</span>
                  </div>
                </div>

                {/* Candidate's Spoken Submission (What Candidate Said) */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-wide">
                      What the Candidate Spoke &amp; Presented:
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium italic leading-relaxed pl-6">
                    "{interview.candidateSpoke}"
                  </p>
                </div>

                {/* Questions Asked by Panel */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">Questions Evaluated During Session:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interview.questionsAsked.map((q, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-medium">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Panel Outcome & Feedback Notes */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Panel Outcome &amp; Assessment:</span>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">{interview.outcomeNotes}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {interview.feedbackTags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: ACADEMIC QUALIFICATIONS - 10TH & 12TH MARKSHEETS */}
      {activeTab === 'academics' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Statutory Academic Transcripts &amp; Marksheets
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Verified Secondary (10th), Senior Secondary (12th PCB) &amp; Professional BAMS marks breakdown.
              </p>
              <div className="mt-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/90 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>APAAR: {safeUser.apaarId || '9841-2041-8891'} • ABC Bank: {safeUser.abcCredits || '164 Credits'} (DigiLocker Verified)</span>
                </span>
              </div>
            </div>

            {/* Sub-selector buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setSelectedAcademicTab('class10')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedAcademicTab === 'class10'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Class 10th
              </button>
              <button
                type="button"
                onClick={() => setSelectedAcademicTab('class12')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedAcademicTab === 'class12'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Class 12th (PCB)
              </button>
              <button
                type="button"
                onClick={() => setSelectedAcademicTab('bams')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedAcademicTab === 'bams'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                BAMS Degree
              </button>
            </div>
          </div>

          {/* Active Marksheet Detail Card */}
          {(() => {
            const data = academicRecords[selectedAcademicTab];
            return (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                      {selectedAcademicTab === 'class10' ? 'Secondary Education Certificate' : selectedAcademicTab === 'class12' ? 'Higher Secondary (Science - Pre-Medical)' : 'Undergraduate Clinical Degree'}
                    </span>
                    <h4 className="text-xl font-black text-slate-900">{data.exam}</h4>
                    <p className="text-xs text-slate-600 font-semibold">{data.board || data.university}</p>
                    <p className="text-xs text-slate-400">{data.school || data.institution || 'National Institute of Ayurveda, Jaipur'}</p>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center sm:text-right shrink-0">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">Overall Performance</span>
                    <span className="text-2xl font-black text-emerald-900">{data.cgpaScore}</span>
                    <span className="text-xs font-bold text-emerald-700 block mt-0.5">{data.division}</span>
                    {data.neetScore && (
                      <span className="inline-block mt-2 px-2 py-0.5 rounded bg-white text-emerald-900 font-mono text-[10px] font-bold border border-emerald-200">
                        {data.neetScore}
                      </span>
                    )}
                  </div>
                </div>

                {/* Statutory Identity and Verification Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Roll / Registration No</span>
                    <span className="font-mono font-bold text-slate-900">{data.rollNo || data.regNo}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Passing / Academic Year</span>
                    <span className="font-bold text-slate-900">{data.passingYear}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">DigiLocker Verification</span>
                    <span className="font-mono text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified ({data.certificateHash})
                    </span>
                  </div>
                </div>

                {/* Subject-wise Marks Table */}
                <div className="space-y-3">
                  <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Subject-wise Marks &amp; Grading Breakdown
                  </h5>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <tr>
                          <th className="py-3 px-4">Subject Name</th>
                          <th className="py-3 px-4 text-center">Marks Obtained / Max</th>
                          <th className="py-3 px-4 text-center">Grade / Standing</th>
                          <th className="py-3 px-4 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                        {data.subjects.map((sub, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3 px-4 font-bold text-slate-900">{sub.name}</td>
                            <td className="py-3 px-4 text-center font-mono font-bold text-emerald-900">{sub.marks}</td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-extrabold text-[10px] border border-emerald-200">
                                {sub.grade}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right font-bold text-emerald-700">
                              Pass ✓
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 4: Cryptographic Portfolio */}
      {activeTab === 'portfolio' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">National Ayush Student Portfolio</h3>
              <p className="text-xs text-slate-500">Cryptographically verifiable on the National Ayush Blockchain Node</p>
            </div>
            <button
              onClick={() => alert('Portfolio PDF downloaded with cryptographic SHA-256 signature.')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified Portfolio PDF</span>
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
