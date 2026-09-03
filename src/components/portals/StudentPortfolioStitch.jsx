import React, { useState } from 'react';
import { 
  User, 
  Award, 
  BarChart2, 
  Target, 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  Sparkles, 
  BookOpen, 
  Menu, 
  X, 
  ExternalLink,
  Share2,
  Copy,
  Check,
  QrCode,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  FileText,
  Activity,
  Filter,
  ArrowUpRight,
  Lock,
  Building2,
  GraduationCap
} from 'lucide-react';

export const StudentPortfolioStitch = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'skills' | 'certifications' | 'sprints' | 'timeline' | 'ledger'
  const [filterCategory, setFilterCategory] = useState('all');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [cvDownloaded, setCvDownloaded] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  
  // Hire Form State
  const [hireSubmitted, setHireSubmitted] = useState(false);
  const [hireFormData, setHireFormData] = useState({
    recruiterName: '',
    company: '',
    email: '',
    role: 'Junior Ayurvedic Consultant',
    message: ''
  });

  // Comprehensive Student Profile Data
  const profileData = {
    name: user?.name || 'Priya Sharma',
    title: user?.degree || 'BAMS Final Year Practitioner & Researcher',
    institution: 'Ayush National Institute of Ayurveda, Jaipur',
    regNo: 'AYUSH-RJ-2024-88412',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQks4DVd0uos47KvnV6m1gIt_hAR4p1Z4QKSWScUJ8PbuRrKhJAJHCZIOVmGNk-yjc5O2xMliCnChxUoZ2QhsBHNjm2JFB1wu0P64DYxE_zEuFHJsAMyzIHU3tsaaVXZ0O7s_xdOsAE38CtzL7oA8X8CAoxYeU6kNVEnN8zBmLyPiFAJm4LGCvLFEUwJAKc5MpKqe9slqohipRTHrx4tC_WNQjfogEE5kQ9qC6i2493gpow2PPuis',
    avatarFallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    verified: true,
    matchScore: 88,
    targetRole: 'Junior Ayurvedic Consultant / Clinical Researcher',
    bio: 'Passionate final-year BAMS practitioner specializing in integrative clinical diagnostics, Panchakarma protocols, and Schedule T GMP manufacturing compliance. Driven by evidence-based Ayurvedic medicine and phytochemical standardization.',
    location: 'Jaipur, Rajasthan, India',
    metrics: {
      readiness: '88%',
      readinessTier: 'Top 5% Cohort',
      certsCount: 4,
      sprintsCount: 12,
      clinicalHours: '450+ Hours',
      verificationHash: '0x8F92A1D94C3B98E7'
    },
    tags: [
      'Clinical Diagnostics',
      'Panchakarma Protocols',
      'Phytochemical Analysis',
      'Schedule T GMP',
      'Pharmacovigilance'
    ],
    skills: [
      { id: 1, name: 'Clinical Diagnostics & Nadi Pariksha', percentage: 92, category: 'clinical', color: '#006c49', level: 'Expert Mastery', hours: '140 hrs' },
      { id: 2, name: 'Panchakarma Therapeutic Protocols', percentage: 88, category: 'clinical', color: '#006c49', level: 'Advanced', hours: '120 hrs' },
      { id: 3, name: 'Schedule T GMP Quality Control', percentage: 94, category: 'manufacturing', color: '#059669', level: 'Expert Mastery', hours: '95 hrs' },
      { id: 4, name: 'Phytochemical Standardization (HPTLC)', percentage: 85, category: 'research', color: '#0d9488', level: 'Advanced', hours: '80 hrs' },
      { id: 5, name: 'Classical Dravyaguna & Formulations', percentage: 90, category: 'clinical', color: '#006c49', level: 'Expert Mastery', hours: '110 hrs' },
      { id: 6, name: 'Pharmacovigilance & Adverse Event Reporting', percentage: 82, category: 'research', color: '#3b82f6', level: 'Proficient', hours: '60 hrs' },
    ],
    certifications: [
      {
        id: 'cert-1',
        title: 'Advanced Herbal Blends & Phytochemistry',
        issuer: 'Ayush National Institute of Ayurveda',
        date: 'Issued: Oct 2023',
        type: 'premium',
        hash: '0x8F92A1D94C3B98E7',
        credentialId: 'AYUSH-CERT-2023-991',
        skillsCovered: ['Herbal Extraction', 'Dravyaguna', 'Safety Standards', 'HPTLC']
      },
      {
        id: 'cert-2',
        title: 'Clinical Dietary Therapeutics & Pathya-Apathya',
        issuer: 'SkillSetu National Health Academy',
        date: 'Issued: Jan 2024',
        type: 'science',
        hash: '0x4E71B89C2A108F3D',
        credentialId: 'SKILLSETU-CERT-2024-104',
        skillsCovered: ['Pathya-Apathya', 'Nutraceuticals', 'Clinical Nutrition', 'Metabolic Care']
      },
      {
        id: 'cert-3',
        title: 'Schedule T GMP Compliance & Ayush Manufacturing',
        issuer: 'Ministry of Ayush Training Cell',
        date: 'Issued: Mar 2024',
        type: 'premium',
        hash: '0x3F88B12C90A84D12',
        credentialId: 'AYUSH-GMP-2024-554',
        skillsCovered: ['Cleanroom Protocol', 'Batch Records', 'Raw Material Testing']
      },
      {
        id: 'cert-4',
        title: 'Integrative Panchakarma Management',
        issuer: 'Central Council for Research in Ayurvedic Sciences',
        date: 'Issued: May 2024',
        type: 'clinical',
        hash: '0x99A0F112D55B789C',
        credentialId: 'CCRAS-PK-2024-812',
        skillsCovered: ['Snehana', 'Swedana', 'Vamana', 'Virechana', 'Basti']
      }
    ],
    sprints: [
      {
        id: 'sprint-1',
        title: 'Clinical Case Study: Integrative Metabolic Care Protocol',
        duration: '4 Weeks Sprint',
        patientCohort: '45 Verified Cases',
        role: 'Lead Student Researcher',
        outcome: '92% Patient Symptom Reduction Score',
        supervisor: 'Dr. R.K. Varma, HOD Kayachikitsa'
      },
      {
        id: 'sprint-2',
        title: 'Standardization & Heavy Metal Screening of Classical Asavas',
        duration: '6 Weeks Sprint',
        patientCohort: 'Lab Batch QA',
        role: 'Phytochemistry Specialist',
        outcome: '100% Compliance with Pharmacopoeia Standards',
        supervisor: 'Dr. Ananya Sen, Chief Phytochemist'
      },
      {
        id: 'sprint-3',
        title: 'Digital Panchakarma Patient Tracking Mobile Workflow',
        duration: '3 Weeks Sprint',
        patientCohort: '30 Clinical Trials',
        role: 'UX & Protocol Co-author',
        outcome: 'Adopted by Hospital Outpatient Clinic',
        supervisor: 'Prof. S. N. Tripathi'
      }
    ],
    timeline: [
      {
        period: '2020 - Present (Final Year)',
        role: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)',
        organization: 'Ayush National Institute of Ayurveda, Jaipur',
        description: 'Undergraduate clinical training with high distinction in Kayachikitsa, Dravyaguna, and Shalya Tantra.'
      },
      {
        period: '2023 - 2024',
        role: 'Clinical Internship & Rotation',
        organization: 'NIA Multi-Specialty Ayurvedic Hospital',
        description: 'Managed 400+ OPD patient evaluations, Nadi Pariksha assessments, and supervised Panchakarma therapies.'
      },
      {
        period: '2023',
        role: 'Schedule T GMP Industry Fellow',
        organization: 'Jivika Herbals & Formulations Lab',
        description: 'Hands-on experience with HPTLC standardization, raw herb authentication, and cleanroom batch logging.'
      }
    ]
  };

  const handleDownloadCv = () => {
    setCvDownloaded(true);
    setTimeout(() => setCvDownloaded(false), 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    setHireSubmitted(true);
    setTimeout(() => {
      setHireSubmitted(false);
      setIsHireModalOpen(false);
      setHireFormData({ recruiterName: '', company: '', email: '', role: 'Junior Ayurvedic Consultant', message: '' });
    }, 2000);
  };

  const filteredSkills = profileData.skills.filter(s => {
    if (filterCategory === 'all') return true;
    return s.category === filterCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      
      {/* TOP HEADER COVER & HERO PROFILE SECTION */}
      <div className="relative bg-[#00422b] overflow-hidden rounded-3xl mb-8 border border-emerald-900/40 shadow-xl">
        {/* Background Decorative Pattern & Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00422b] via-[#006c49] to-[#044e36] opacity-95" />
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            
            {/* Left: Avatar & Personal Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="relative group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-800 flex-shrink-0">
                  <img
                    src={profileData.avatarUrl}
                    onError={(e) => { e.target.src = profileData.avatarFallback; }}
                    alt={profileData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span 
                  className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-[#00422b] shadow-md"
                  title="Verified Student Practitioner"
                >
                  <ShieldCheck className="w-4 h-4 fill-white text-[#00422b]" />
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {profileData.name}
                  </h1>
                  <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 backdrop-blur-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    AYUSH Verified
                  </span>
                </div>

                <p className="text-sm font-semibold text-emerald-100/90 flex items-center justify-center sm:justify-start gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  {profileData.title}
                </p>

                <p className="text-xs text-emerald-200/70 flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                    {profileData.institution}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {profileData.location}
                  </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-2">
                  {profileData.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white/10 text-emerald-100 hover:bg-white/20 transition-colors px-2.5 py-0.5 rounded-lg text-[11px] font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Primary Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsHireModalOpen(true)}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-[#00422b] font-black text-xs transition-all shadow-lg hover:shadow-emerald-400/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                Hire / Connect
              </button>

              <button
                onClick={handleDownloadCv}
                className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                <Download className="w-4 h-4 text-emerald-300" />
                {cvDownloaded ? 'CV Downloaded!' : 'Download CV'}
              </button>

              <button
                onClick={() => setIsQrModalOpen(true)}
                className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/20 transition-all active:scale-95 cursor-pointer"
                title="View Verified QR Credential"
              >
                <QrCode className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyLink}
                className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/20 transition-all active:scale-95 cursor-pointer"
                title="Share Profile Link"
              >
                {linkCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* BIO SNIPPET */}
          <div className="mt-6 pt-6 border-t border-emerald-700/40 text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-4xl">
            <span className="font-bold text-emerald-300">About Practitioner: </span>
            {profileData.bio}
          </div>

          {/* KEY METRICS RIBBON */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-emerald-700/40">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 text-center sm:text-left">
              <p className="text-[11px] font-medium text-emerald-200">Skill Readiness</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-black text-white">{profileData.metrics.readiness}</span>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/30 px-1.5 py-0.5 rounded">
                  {profileData.metrics.readinessTier}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 text-center sm:text-left">
              <p className="text-[11px] font-medium text-emerald-200">Verified Credentials</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-black text-white">{profileData.metrics.certsCount}</span>
                <span className="text-[10px] font-bold text-emerald-300">Micro-Certs</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 text-center sm:text-left">
              <p className="text-[11px] font-medium text-emerald-200">Clinical Sprints</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-black text-white">{profileData.metrics.sprintsCount}</span>
                <span className="text-[10px] font-bold text-emerald-300">Projects Done</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 text-center sm:text-left">
              <p className="text-[11px] font-medium text-emerald-200">Hospital Experience</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-black text-white">{profileData.metrics.clinicalHours}</span>
                <span className="text-[10px] font-bold text-emerald-300">Supervised</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="sticky top-4 z-30 mb-8">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-1.5 shadow-sm flex items-center justify-between overflow-x-auto scrollbar-none gap-1">
          <div className="flex items-center gap-1 min-w-max">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-[#006c49] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Overview & Match</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'skills'
                  ? 'bg-[#006c49] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Competency Vectors ({profileData.skills.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'certifications'
                  ? 'bg-[#006c49] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Verified Certifications ({profileData.certifications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('sprints')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'sprints'
                  ? 'bg-[#006c49] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Clinical Sprints ({profileData.sprints.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'timeline'
                  ? 'bg-[#006c49] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Experience & Journey</span>
            </button>
          </div>

          <button
            onClick={() => setActiveTab('ledger')}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer hidden md:flex items-center gap-1.5 ${
              activeTab === 'ledger'
                ? 'bg-slate-900 text-emerald-400 shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ledger: {profileData.metrics.verificationHash.slice(0, 8)}...</span>
          </button>
        </div>
      </div>

      {/* TAB CONTENT SECTIONS */}

      {/* TAB 1: OVERVIEW & MATCH */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Match & Suitability Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#006c49]" />
                    Industry Role Alignment
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">Target: {profileData.targetRole}</p>
                </div>
                <span className="bg-emerald-50 text-[#006c49] px-3 py-1 rounded-full text-xs font-black border border-emerald-200">
                  {profileData.matchScore}% Match
                </span>
              </div>

              {/* Match Dial Visual */}
              <div className="flex flex-col items-center justify-center py-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-32 h-32 rounded-full border-8 border-slate-200 flex items-center justify-center relative shadow-inner">
                  <svg className="w-full h-full transform -rotate-90 absolute top-0 left-0" viewBox="0 0 36 36">
                    <path
                      className="text-[#006c49]"
                      strokeDasharray={`${profileData.matchScore}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="text-center">
                    <span className="text-3xl font-black text-[#006c49] block leading-none">{profileData.matchScore}%</span>
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Suitability</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium text-center max-w-xs mt-4 px-3">
                  PriyaSharma demonstrates <strong className="text-slate-900 font-extrabold">exceptional readiness</strong> for Ayurvedic Hospital OPD & Manufacturing QC positions.
                </p>

                <button
                  onClick={() => setIsMatchModalOpen(true)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#006c49] hover:bg-[#005236] text-white transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  View Skill Gap & Course Recommendations
                </button>
              </div>

              {/* Quick Verification Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Verification Checklist</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>AYUSH Registration ID Verified</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700">PASS</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Schedule T GMP Exam Certified</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700">PASS</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>450+ Hospital Rotation Hours</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700">PASS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Top Competencies & Featured Certificates */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Skill Progress Bars */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-[#006c49]" />
                  Core Clinical & Industrial Competencies
                </h3>
                <button
                  onClick={() => setActiveTab('skills')}
                  className="text-xs font-bold text-[#006c49] hover:underline cursor-pointer flex items-center gap-1"
                >
                  View All Vectors <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4">
                {profileData.skills.slice(0, 4).map((skill) => (
                  <div key={skill.id} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                        {skill.name}
                      </span>
                      <span className="text-[#006c49]">{skill.percentage}% ({skill.level})</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                      <div
                        className="h-full rounded-full transition-all duration-1000 shadow-xs"
                        style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Certifications Card Grid */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#006c49]" />
                  Verified Micro-Credentials
                </h3>
                <button
                  onClick={() => setActiveTab('certifications')}
                  className="text-xs font-bold text-[#006c49] hover:underline cursor-pointer flex items-center gap-1"
                >
                  Explore All ({profileData.certifications.length}) <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileData.certifications.slice(0, 2).map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-slate-50/50 hover:bg-emerald-50/30 transition-all cursor-pointer group space-y-3 relative"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#006c49] flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded">
                        {cert.hash.slice(0, 8)}...
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 group-hover:text-[#006c49] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-200/60 pt-2">
                      <span>{cert.date}</span>
                      <span className="font-bold text-[#006c49] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        Inspect <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: COMPETENCY VECTORS */}
      {activeTab === 'skills' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Ayurvedic Clinical & Industry Competency Vectors</h2>
              <p className="text-xs text-slate-500 mt-0.5">Benchmarked against Ministry of Ayush clinical standards & Schedule T manufacturing guidelines.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'all' ? 'bg-[#006c49] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Skills
              </button>
              <button
                onClick={() => setFilterCategory('clinical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'clinical' ? 'bg-[#006c49] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Clinical
              </button>
              <button
                onClick={() => setFilterCategory('manufacturing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'manufacturing' ? 'bg-[#006c49] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Manufacturing / GMP
              </button>
              <button
                onClick={() => setFilterCategory('research')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === 'research' ? 'bg-[#006c49] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Research
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#006c49] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {skill.category}
                  </span>
                  <span className="text-xs font-extrabold text-slate-500">{skill.hours} training</span>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{skill.name}</h4>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5">{skill.level} ({skill.percentage}%)</p>
                </div>

                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-700 shadow-xs"
                    style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: VERIFIED CERTIFICATIONS */}
      {activeTab === 'certifications' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Cryptographically Verified Micro-Credentials</h2>
            <p className="text-xs text-slate-500 mt-0.5">Every certificate is cryptographically signed and immutable on the SkillSetu ledger.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 bg-slate-50/50 hover:bg-emerald-50/20 transition-all cursor-pointer space-y-4 group relative"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#006c49] text-white flex items-center justify-center font-bold shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-700" />
                    Verified Hash
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#006c49] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1">{cert.issuer}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((s, i) => (
                    <span key={i} className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-200/80 pt-3">
                  <span>{cert.date}</span>
                  <span className="font-bold text-[#006c49] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Digital Credential <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: CLINICAL SPRINTS & PROJECTS */}
      {activeTab === 'sprints' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Clinical Case Studies & Applied Industry Sprints</h2>
            <p className="text-xs text-slate-500 mt-0.5">Real-world clinical outcomes and hospital case projects co-supervised by senior faculty.</p>
          </div>

          <div className="space-y-4">
            {profileData.sprints.map((sprint) => (
              <div key={sprint.id} className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{sprint.title}</h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">{sprint.role} • {sprint.duration}</p>
                  </div>
                  <span className="bg-emerald-100 text-[#006c49] px-3 py-1 rounded-full text-xs font-black border border-emerald-200 w-fit">
                    {sprint.patientCohort}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">Verified Outcome</span>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{sprint.outcome}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-bold block text-[10px] uppercase">Faculty Supervisor</span>
                    <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{sprint.supervisor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: TIMELINE & EXPERIENCE */}
      {activeTab === 'timeline' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Academic & Hospital Experience Journey</h2>
            <p className="text-xs text-slate-500 mt-0.5">Chronological record of medical education, hospital OPD rotations, and industrial internships.</p>
          </div>

          <div className="relative border-l-2 border-emerald-200 ml-4 pl-6 space-y-8 my-4">
            {profileData.timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#006c49] border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
                
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  {item.period}
                </span>

                <h3 className="text-base font-extrabold text-slate-900 mt-2">{item.role}</h3>
                <p className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-[#006c49]" />
                  {item.organization}
                </p>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed max-w-2xl bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: CRYPTOGRAPHIC LEDGER */}
      {activeTab === 'ledger' && (
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-2xl space-y-6 font-mono">
          <div className="flex items-center justify-between pb-4 border-b border-emerald-800/80">
            <div>
              <h2 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                SkillSetu Immutable Credential Ledger
              </h2>
              <p className="text-xs text-emerald-200/80 font-sans mt-0.5">Public Key Cryptographic Proof for {profileData.name}</p>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">
              LEDGER VERIFIED
            </span>
          </div>

          <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-800/80 space-y-3 text-xs">
            <div className="flex justify-between border-b border-emerald-800/60 pb-2">
              <span className="text-emerald-300/70">Student Reg Hash:</span>
              <span className="text-emerald-400 font-bold">{profileData.metrics.verificationHash}</span>
            </div>
            <div className="flex justify-between border-b border-emerald-800/60 pb-2">
              <span className="text-emerald-300/70">AYUSH Registration:</span>
              <span className="text-slate-200">{profileData.regNo}</span>
            </div>
            <div className="flex justify-between border-b border-emerald-800/60 pb-2">
              <span className="text-emerald-300/70">Consensus Engine:</span>
              <span className="text-slate-200">Proof-of-Competency (PoC v2.4)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-300/70">Timestamp:</span>
              <span className="text-slate-200">2026-09-02 T16:43:00 UTC</span>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 1: HIRE / CONNECT MODAL */}
      {isHireModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative space-y-5">
            <button
              onClick={() => setIsHireModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 text-[#006c49] rounded-2xl flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Connect with {profileData.name}</h3>
                <p className="text-xs text-slate-500">Send an interview invite or clinical recruitment inquiry</p>
              </div>
            </div>

            {hireSubmitted ? (
              <div className="bg-emerald-50 text-[#006c49] p-6 rounded-2xl text-center space-y-2 border border-emerald-200">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
                <h4 className="font-extrabold text-base">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-slate-600">The candidate and SkillSetu placement coordinator have been notified.</p>
              </div>
            ) : (
              <form onSubmit={handleHireSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    value={hireFormData.recruiterName}
                    onChange={(e) => setHireFormData({...hireFormData, recruiterName: e.target.value})}
                    placeholder="e.g. Dr. A. Sharma (Jivika Ayurveda Hospital)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#006c49]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Work Email Address</label>
                  <input
                    type="email"
                    required
                    value={hireFormData.email}
                    onChange={(e) => setHireFormData({...hireFormData, email: e.target.value})}
                    placeholder="recruiter@hospital.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#006c49]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Role Offered</label>
                  <select
                    value={hireFormData.role}
                    onChange={(e) => setHireFormData({...hireFormData, role: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#006c49] font-medium"
                  >
                    <option value="Junior Ayurvedic Consultant">Junior Ayurvedic Consultant (OPD)</option>
                    <option value="Panchakarma Resident Doctor">Panchakarma Resident Doctor</option>
                    <option value="Schedule T Quality Control Analyst">Schedule T Quality Control Analyst</option>
                    <option value="Clinical Research Associate">Clinical Research Associate</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Message / Offer Details</label>
                  <textarea
                    rows={3}
                    value={hireFormData.message}
                    onChange={(e) => setHireFormData({...hireFormData, message: e.target.value})}
                    placeholder="Brief details about the role, location, and stipend/salary range..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#006c49]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#006c49] hover:bg-[#005236] text-white font-extrabold text-xs transition-all shadow-md cursor-pointer"
                >
                  Send Verified Offer / Connect Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* MODAL 2: CERTIFICATE INSPECTOR MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative space-y-5">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 text-[#006c49] rounded-2xl flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">{selectedCert.title}</h3>
                <p className="text-xs text-slate-500">{selectedCert.issuer}</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Credential ID:</span>
                <span className="font-bold text-slate-800">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Cryptographic Hash:</span>
                <span className="font-mono text-emerald-700 font-bold">{selectedCert.hash}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Issue Date:</span>
                <span className="font-bold text-slate-800">{selectedCert.date}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-extrabold text-slate-700 mb-2">Verified Competency Outcomes</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skillsCovered.map((skill, i) => (
                  <span key={i} className="bg-emerald-50 text-[#006c49] px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => alert(`Simulating verification lookup for ${selectedCert.hash}... Ledger ValidATED.`)}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs font-bold hover:bg-slate-800 transition-colors flex justify-center items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                Validate On SkillSetu Public Ledger
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: QR CODE BADGE MODAL */}
      {isQrModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-200 shadow-2xl relative text-center space-y-4">
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-emerald-100 text-[#006c49] rounded-2xl flex items-center justify-center mx-auto">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-slate-900">Verified Practitioner QR</h3>
              <p className="text-xs text-slate-500 mt-0.5">Scan to instantly verify credentials & clinical logs</p>
            </div>

            {/* QR Mock visual */}
            <div className="p-4 bg-slate-900 rounded-2xl border-4 border-[#006c49] inline-block shadow-inner">
              <div className="w-40 h-40 bg-white p-2 rounded-xl flex items-center justify-center">
                <QrCode className="w-36 h-36 text-slate-900" />
              </div>
            </div>

            <p className="text-[11px] font-mono text-slate-400">
              HASH: {profileData.metrics.verificationHash}
            </p>

            <button
              onClick={handleCopyLink}
              className="w-full py-2.5 rounded-xl bg-[#006c49] text-white font-bold text-xs hover:bg-[#005236] transition-colors cursor-pointer"
            >
              {linkCopied ? 'Link Copied!' : 'Copy Verification Link'}
            </button>
          </div>
        </div>
      )}

      {/* MODAL 4: MATCH SCORE GAP DETAILS MODAL */}
      {isMatchModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative space-y-5">
            <button
              onClick={() => setIsMatchModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 text-[#006c49] rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Role Match Analysis</h3>
                <p className="text-xs text-slate-500">Target Role: {profileData.targetRole}</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-700 block">Overall Alignment Score</span>
                <span className="text-2xl font-black text-[#006c49]">88 / 100</span>
              </div>
              <span className="bg-emerald-600 text-white text-xs font-extrabold px-3 py-1 rounded-full">
                READY FOR RECRUITMENT
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Recommended Micro-Courses to reach 95%+</h4>
              
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Advanced Ayush Pharmacovigilance & Adverse Event Audit</h5>
                  <p className="text-[10px] text-slate-500">Estimated Duration: 12 Hours • 2 Sprints</p>
                </div>
                <button
                  onClick={() => alert('Enrolling in Pharmacovigilance Sprint!')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#006c49] text-white hover:bg-[#005236] transition-colors cursor-pointer"
                >
                  Enroll
                </button>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">Ayush IP & Patent Filing Masterclass</h5>
                  <p className="text-[10px] text-slate-500">Estimated Duration: 8 Hours • 1 Sprint</p>
                </div>
                <button
                  onClick={() => alert('Enrolling in Patent Masterclass!')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#006c49] text-white hover:bg-[#005236] transition-colors cursor-pointer"
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
