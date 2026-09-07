import React, { useState } from 'react';
import { 
  UserCheck, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  FileText, 
  Edit3, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  Download, 
  Check, 
  X, 
  Clock, 
  Users, 
  ExternalLink,
  ChevronRight,
  BarChart3
} from 'lucide-react';

export const FacultyProfileView = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'courses' | 'scholars' | 'grants'
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const facultyData = {
    name: user?.name || "Prof. Meenakshi Joshi",
    role: user?.role || "Professor & HOD (Dravyaguna)",
    id: user?.id || "FAC-AIIA-7712",
    email: user?.email || "prof.mjoshi@aiia.gov.in",
    phone: "+91 98765 43210",
    institution: user?.institution || "All India Institute of Ayurveda (AIIA), New Delhi",
    department: "Dravyaguna (Ayurvedic Pharmacology & Materia Medica)",
    qualifications: "Ph.D. (Ayurveda), MD (Dravyaguna), BAMS (Gold Medalist)",
    experience: "18+ Years Academic & Clinical Research Experience",
    ncismReg: "NCISM/FAC/DL/2012/8842",
    officeLocation: "Room 304, Academic Block, AIIA Sarita Vihar, New Delhi",
    officeHours: "Mon - Fri (2:00 PM - 4:30 PM)",
    bio: "Professor & Head of Department at AIIA. Specializing in Dravyaguna phytochemistry, Schedule T GMP cleanroom standards, ICH E6(R3) GCP clinical trials, and herbal product standardization. Academic Preceptor for 140+ Ayush scholars.",
    avatar: user?.avatar || "MJ",
    verificationHash: "0x8F9A12B4C5D6E7F890123456789ABCDEF"
  };

  const [profileForm, setProfileForm] = useState({ ...facultyData });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsEditModalOpen(false);
    showToast('Faculty Profile updated successfully!');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Authored Micro-Courses
  const authoredCourses = [
    {
      id: 'mc-1',
      title: 'Schedule T Cleanroom Airflow & Manufacturing Basics',
      category: 'Manufacturing & GMP',
      duration: '90 mins',
      enrolled: 142,
      rating: '4.9/5',
      passRate: '96%',
      targetCohort: 'BAMS Final Year',
      regulatoryCitation: 'CDSCO Drugs Rules 1945',
      status: 'Published & Active'
    },
    {
      id: 'mc-2',
      title: 'Good Clinical Practice (GCP) – ICH E6(R3)',
      category: 'Clinical Research',
      duration: '120 mins',
      enrolled: 198,
      rating: '4.9/5',
      passRate: '94%',
      targetCohort: 'MD Dravyaguna Scholars',
      regulatoryCitation: 'ICH E6(R3) Step 4 (Jan 2025)',
      status: 'Published & Active'
    },
    {
      id: 'mc-3',
      title: 'Pharmacovigilance Basics & ADR Reporting Protocol',
      category: 'Pharmacovigilance',
      duration: '60 mins',
      enrolled: 156,
      rating: '4.8/5',
      passRate: '98%',
      targetCohort: 'All Ayush Scholars',
      regulatoryCitation: 'WHO-UMC Safety Guidelines',
      status: 'Published & Active'
    },
    {
      id: 'mc-4',
      title: 'HPTLC Mobile Phase Selection & Marker Fingerprinting',
      category: 'Quality Control / QA',
      duration: '45 mins',
      enrolled: 88,
      rating: '4.9/5',
      passRate: '92%',
      targetCohort: 'BAMS 3rd Year',
      regulatoryCitation: 'Ayurvedic Pharmacopoeia of India (API)',
      status: 'Published & Active'
    }
  ];

  // Mentored Scholars Submissions
  const mentoredScholars = [
    {
      id: 'sch-1',
      name: 'Aarav Sharma',
      degree: 'BAMS (Final Year 2026)',
      topic: 'Triphala Churna HPTLC Marker Fingerprinting Protocol',
      submittedAt: 'Today, 10:14 AM',
      accuracy: '94% Diagnostic Match',
      status: 'Verified & Digitally Signed'
    },
    {
      id: 'sch-2',
      name: 'Sunita Patel',
      degree: 'BAMS (3rd Year)',
      topic: 'Schedule T Sterile Area Standard Operating Procedure',
      submittedAt: 'Yesterday, 4:30 PM',
      accuracy: '89% Diagnostic Match',
      status: 'Verified & Digitally Signed'
    },
    {
      id: 'sch-3',
      name: 'Karan Malhotra',
      degree: 'MD Ayurveda (Dravyaguna)',
      topic: 'NABL Analytical Method Validation for Heavy Metals',
      submittedAt: '2 days ago',
      accuracy: '96% Diagnostic Match',
      status: 'Verified & Digitally Signed'
    }
  ];

  // Research Grants & Publications
  const grantsAndPubs = [
    {
      type: 'Research Grant',
      title: 'CCRAS SPARK-4.0 National Research Studentship Mentorship',
      funding: '₹50,000 Student Grant',
      agency: 'Ministry of Ayush / CCRAS',
      role: 'Principal Academic Supervisor',
      status: 'Active (2025-2026)'
    },
    {
      type: 'Industry Consultancy',
      title: 'Dabur R&D Botanical Fingerprinting & Cleanroom SOP Validation',
      funding: '₹2,50,000 R&D Sponsorship',
      agency: 'Dabur India R&D Division',
      role: 'Lead Preceptor & Quality Auditor',
      status: 'Active'
    },
    {
      type: 'Publication',
      title: 'High-Throughput HPTLC Quantification of Bioactive Markers in Polyherbal Formulations',
      journal: 'Journal of Ayurveda & Integrative Medicine (JAIM)',
      year: '2025',
      citation: 'J. Ayu. Int. Med. 2025; 16(2): 104-112'
    },
    {
      type: 'Publication',
      title: 'Schedule T Cleanroom Hygiene Compliance Across Indian Ayush Manufacturing Units',
      journal: 'NCISM Academic & Regulatory Review',
      year: '2024',
      citation: 'NCISM Reg. Rev. 2024; 8(1): 45-58'
    }
  ];

  return (
<<<<<<< HEAD
    <div className="space-y-6 pb-12 font-sans max-w-7xl mx-auto">
      
      {/* Top Header / Back Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95"
              title="Go Back"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-emerald-700" />
              <span>Back</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Faculty Scholar Profile
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <UserCheck className="w-3 h-3 text-emerald-600" />
              Senior Academic Preceptor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isFollowing 
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
            }`}
          >
            {isFollowing ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>{isFollowing ? 'Following Faculty' : 'Follow Preceptor'}</span>
          </button>
        </div>
      </div>

      {/* Faculty Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        <div className="h-44 sm:h-56 w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 relative">
          <img 
            src={coverImage} 
            alt={facultyName} 
            className="w-full h-full object-cover opacity-35 mix-blend-overlay"
          />
          <div className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur-md text-emerald-200 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>NCISM Verified Academic Preceptor</span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 md:-mt-20 mb-4">
            <div className="flex items-end gap-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10 shrink-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white font-extrabold text-3xl flex items-center justify-center overflow-hidden">
                  <img src={avatarImage} alt={facultyName} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {facultyName}
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {roleTitle} • <span className="text-emerald-800 font-bold">{institution}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl">
                Faculty ID: {facultyId}
              </span>
            </div>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              New Delhi, India
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
              MD (Ayurveda), Ph.D. Dravyaguna
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-700 shrink-0" />
              Reg: {ncismReg}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Mentees Guided</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">142+</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Active Scholars in Cohort</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Authored Modules</span>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">{authoredCourses.length}</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Accredited Micro-Bridge Courses</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Research Papers</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">28</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Peer-Reviewed Publications</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Active Grants</span>
          <div className="text-3xl font-extrabold text-teal-800 mt-1">₹48L</div>
          <span className="text-[11px] text-teal-700 font-semibold mt-1 block">CCRAS SPARK-4.0 Funded</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Academic Overview
        </button>

        <button
          onClick={() => setActiveTab('posts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'posts' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span>Posts & Clinical Cases</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {facultyPosts.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('courses')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'courses' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span>Authored Courses</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {authoredCourses.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('publications')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'publications' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Research Publications ({publications.length})
        </button>

        <button
          onClick={() => setActiveTab('mentees')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'mentees' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Mentored Scholars
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">Academic & Research Biography</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {bio}
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                <span className="text-xs font-extrabold text-emerald-950 block">Key Clinical & Diagnostic Focus</span>
                <p className="text-xs text-emerald-800">Standardizing botanical fractions via automated HPTLC systems and integrating pulse waveform analytics into clinical teaching OPDs.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Faculty Institutional Details</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Institution</span>
                  <strong className="text-slate-800 text-xs">{institution}</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Department</span>
                  <strong className="text-slate-800 text-xs">{department}</strong>
                </div>
              </div>
            </div>
          </div>
=======
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-2xl shadow-xl border border-emerald-700 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-300" />
          <span className="text-xs font-bold">{toastMessage}</span>
>>>>>>> 3aa27105a327a80c9218db2ab20f6d09a8d0faf3
        </div>
      )}

      {/* Profile Header Banner */}
      <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft">
        {/* Academic Gradient Cover */}
        <div className="min-h-[160px] sm:h-52 w-full bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 relative p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          
          <span className="relative z-10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 backdrop-blur-md flex items-center gap-1.5 shadow-xs">
            <UserCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>Senior Academic Preceptor · NCISM Verified</span>
          </span>

          <button
            onClick={() => setIsEditModalOpen(true)}
            className="relative z-10 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-bold rounded-xl border border-white/20 backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Faculty Profile</span>
          </button>
        </div>

        {/* Profile Details Bar */}
        <div className="px-4 sm:px-6 pb-6 pt-0 relative flex flex-col md:flex-row items-start md:items-end justify-between gap-5 -mt-12 sm:-mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-5 w-full md:w-auto">
            {/* Avatar Circle */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-emerald-700 via-teal-800 to-emerald-950 text-white font-extrabold text-2xl sm:text-4xl flex items-center justify-center border-4 border-white shadow-md relative z-20 shrink-0">
              {facultyData.avatar}
            </div>

            <div className="space-y-1 z-10 w-full">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{profileForm.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  HOD & Research Lead
                </span>
              </div>

              <p className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{profileForm.role}</span>
              </p>

              <div className="text-xs text-slate-500 flex flex-wrap items-center gap-x-2 gap-y-1 pt-0.5">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{profileForm.institution}</span>
                </span>
                <span className="hidden sm:inline text-slate-300">·</span>
                <span className="font-mono text-slate-700 font-bold bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                  ID: {profileForm.id}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full md:w-auto pt-2 md:pt-0">
            <div className="bg-emerald-50 border border-emerald-200 p-2.5 sm:px-4 sm:py-2.5 rounded-2xl text-center">
              <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-800 uppercase tracking-tight block">Authored</span>
              <span className="text-base sm:text-xl font-extrabold text-emerald-950 block mt-0.5">4 Courses</span>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-2.5 sm:px-4 sm:py-2.5 rounded-2xl text-center">
              <span className="text-[9px] sm:text-[10px] font-extrabold text-blue-800 uppercase tracking-tight block">Mentored</span>
              <span className="text-base sm:text-xl font-extrabold text-blue-950 block mt-0.5">142 Scholars</span>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-2.5 sm:px-4 sm:py-2.5 rounded-2xl text-center">
              <span className="text-[9px] sm:text-[10px] font-extrabold text-purple-800 uppercase tracking-tight block">Grants</span>
              <span className="text-base sm:text-xl font-extrabold text-purple-950 block mt-0.5">3 Grants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Scrollable on mobile) */}
      <div className="flex items-center gap-2 border-b border-slate-200/90 pb-3 overflow-x-auto scrollbar-none whitespace-nowrap">
        {[
          { id: 'overview', label: '01 · Academic Bio & Credentials', icon: UserCheck },
          { id: 'courses', label: '02 · Authored Courses (4)', icon: BookOpen },
          { id: 'scholars', label: '03 · Mentored Cohorts (142)', icon: Users },
          { id: 'grants', label: '04 · Grants & Publications (4)', icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border shrink-0 ${
                isActive
                  ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs ring-2 ring-emerald-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-emerald-300' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: ACADEMIC BIO & CREDENTIALS */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Bio & Qualifications (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About / Preceptor Statement */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  Preceptor Statement & Academic Bio
                </h3>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  NCISM Registered Preceptor
                </span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {profileForm.bio}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Department</span>
                  <span className="font-extrabold text-slate-900 block mt-0.5">{profileForm.department}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block">Academic Qualifications</span>
                  <span className="font-extrabold text-slate-900 block mt-0.5">{profileForm.qualifications}</span>
                </div>
              </div>
            </div>

            {/* Core Teaching & Research Expertise */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                Preceptor Expertise & Specializations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { title: 'Schedule T Cleanroom GMP', desc: 'Indian pharmaceutical manufacturing standards under Drugs Rules 1945.' },
                  { title: 'ICH E6(R3) GCP Clinical Trials', desc: 'Step 4 Jan 2025 standard for trial ethics, consent & data integrity.' },
                  { title: 'HPTLC Botanical Assay', desc: 'High-throughput chromatographic marker standardization and assay.' },
                  { title: 'Pharmacovigilance & ADR', desc: 'WHO-UMC adverse event detection, safety monitoring & CDSCO reporting.' }
                ].map((exp, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200/70 space-y-1">
                    <span className="font-extrabold text-emerald-950 block text-xs flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      {exp.title}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-snug">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar: Verified Institutional Contact (1 col) */}
          <div className="space-y-6">
            
            {/* Verified Identity Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft space-y-4">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                Verified Identity & Contact
              </h3>

              <div className="space-y-3 text-xs">
                <div className="pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Faculty ID / Roll</span>
                  <span className="font-mono font-extrabold text-slate-800">{profileForm.id}</span>
                </div>

                <div className="pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Official Email</span>
                  <span className="font-semibold text-emerald-800 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-emerald-700" />
                    {profileForm.email}
                  </span>
                </div>

                <div className="pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Contact Number</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    {profileForm.phone}
                  </span>
                </div>

                <div className="pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">NCISM Reg. Code</span>
                  <span className="font-mono font-semibold text-slate-800">{profileForm.ncismReg}</span>
                </div>

                <div className="pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Office Campus Location</span>
                  <span className="font-medium text-slate-700 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    {profileForm.officeLocation}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Student Office Hours</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    {profileForm.officeHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Cryptographic Preceptor Key Card */}
            <div className="bg-emerald-950 text-white rounded-3xl p-5 shadow-lg space-y-3 border border-emerald-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-emerald-300 tracking-wider">Preceptor Ledger Key</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-800 text-emerald-200">VERIFIED</span>
              </div>
              <p className="font-mono text-[10px] text-emerald-200 break-all bg-emerald-900/60 p-2.5 rounded-xl border border-emerald-800/80">
                {profileForm.verificationHash}
              </p>
              <p className="text-[11px] text-emerald-300/80 leading-tight">
                Used to cryptographically sign & audit student micro-sprint completion dossiers.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: AUTHORED COURSES */}
      {activeTab === 'courses' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Published Courses & Pedagogical Modules
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Micro-sprints authored by {profileForm.name} adhering to the 6-Step Pedagogical Blueprint.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authoredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-soft space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-900 border border-emerald-200">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm text-slate-900 leading-snug">{course.title}</h4>

                  <div className="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-center justify-between">
                    <span>Citation: <strong className="text-slate-800">{course.regulatoryCitation}</strong></span>
                    <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">{course.status}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">{course.enrolled} Scholars Enrolled</span>
                  <span className="text-emerald-800">Pass Rate: {course.passRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: MENTORED SCHOLARS */}
      {activeTab === 'scholars' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">
              Recent Scholar Proof-of-Work Audits
            </h3>
            <p className="text-xs text-slate-500">
              Practical workplace activity checklists evaluated and digitally signed by {profileForm.name}.
            </p>

            <div className="space-y-3">
              {mentoredScholars.map((sch) => (
                <div key={sch.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">{sch.topic}</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Student: <strong className="text-slate-800">{sch.name}</strong> ({sch.degree}) · {sch.submittedAt}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-900 font-bold text-xs rounded-xl flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    {sch.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: GRANTS & PUBLICATIONS */}
      {activeTab === 'grants' && (
        <div className="space-y-4">
          <h3 className="text-base font-extrabold text-slate-900">
            Research Grants, FDPs & Publications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {grantsAndPubs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-soft space-y-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-900 border border-emerald-200 inline-block">
                  {item.type}
                </span>
                <h4 className="font-extrabold text-xs text-slate-900 leading-snug">{item.title}</h4>
                {item.funding && (
                  <p className="text-xs font-bold text-emerald-800">{item.funding} · {item.agency}</p>
                )}
                {item.journal && (
                  <p className="text-xs text-slate-500">{item.journal} ({item.year})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDIT FACULTY PROFILE MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 relative my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">Edit Faculty Academic Profile</h2>
                <p className="text-xs text-slate-500">Update preceptor bio, office hours, and contact info.</p>
              </div>
              <button onClick={() => setIsEditModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-xl cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Academic Role & Designation</label>
                <input
                  type="text"
                  value={profileForm.role}
                  onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 font-semibold text-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Preceptor Statement / Bio</label>
                <textarea
                  rows={3}
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 font-semibold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Official Email</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-800 mb-1">Office Hours</label>
                  <input
                    type="text"
                    value={profileForm.officeHours}
                    onChange={(e) => setProfileForm({ ...profileForm, officeHours: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 font-semibold text-slate-900"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow-xs"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
