import React, { useState } from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Building, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  Users, 
  Edit3, 
  X, 
  Check, 
  Calendar,
  BadgeCheck,
  ChevronDown
} from 'lucide-react';

import meenakshiAvatar from '../../assets/images/meenakshi_avatar.jpg';
import courseGmpPoster from '../../assets/images/course_gmp_poster.jpg';
import courseGcpPoster from '../../assets/images/course_gcp_poster.jpg';
import ayushHeroBanner from '../../assets/images/ayush_hero_banner.jpg';

export const FacultyProfileView = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'courses' | 'degrees' | 'badges'
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Show only 1 item initially in each section with "Show More" buttons
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [showAllDegrees, setShowAllDegrees] = useState(false);
  const [showAllBadges, setShowAllBadges] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || 'Prof. Meenakshi Joshi',
    role: user?.role || 'Professor & HOD (Dravyaguna)',
    institution: user?.institution || 'All India Institute of Ayurveda (AIIA), New Delhi',
    department: 'Dravyaguna (Ayurvedic Pharmacology & Materia Medica)',
    facultyId: user?.id || 'FAC-AIIA-7712',
    ncismReg: 'NCISM/FAC/DL/2018/4412',
    email: user?.email || 'prof.mjoshi@aiia.gov.in',
    phone: '+91 98101 23456',
    location: 'Sarita Vihar, Mathura Road, New Delhi 110076',
    experience: '16+ Years Postgraduate Mentorship & Research',
    bio: 'Senior Professor and Head of Dravyaguna at AIIA New Delhi. Specializing in chromatographic botanical marker profiling, Schedule T GMP cleanroom standards, and ICH-GCP evidence-based clinical trials. Mentored over 140 postgraduates and supervised multiple CCRAS SPARK research grants.',
    avatarImage: user?.avatarImage || meenakshiAvatar,
    coverImage: ayushHeroBanner
  });

  const [editForm, setEditForm] = useState({ ...profileData });

  const handleSaveBio = (e) => {
    e.preventDefault();
    setProfileData({ ...editForm });
    setIsEditingBio(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // 1. HIGHLIGHTED: Authored & Supervised Courses
  const authoredCourses = [
    {
      id: 'mc-1',
      title: 'Schedule T Basics & Manufacturing Compliance',
      category: 'Manufacturing & GMP',
      duration: '90 mins',
      enrolled: 142,
      rating: '4.9',
      regulatoryStandard: 'CDSCO Drugs Rules 1945',
      posterImage: courseGmpPoster,
      description: 'Indian pharmaceutical manufacturing requirements, premises hygiene, cleanroom airflows, and documentation protocols under Drugs Rules 1945.',
      competencies: ['Schedule T Rules', 'Cleanroom Hygiene', 'GMP Protocol', 'QA Documentation'],
      completionRate: '94% Checklist Passed'
    },
    {
      id: 'mc-2',
      title: 'Good Clinical Practice (GCP) – ICH E6(R3)',
      category: 'Clinical Research',
      duration: '120 mins',
      enrolled: 198,
      rating: '4.9',
      regulatoryStandard: 'ICH E6(R3) Step 4 (Adopted Jan 2025)',
      posterImage: courseGcpPoster,
      description: 'International standards for clinical trials covering participant ethics, informed consent, trial data reliability, and risk-based quality thinking.',
      competencies: ['ICH E6(R3)', 'Informed Consent', 'Trial Ethics', 'Data Integrity'],
      completionRate: '96% Protocol Verified'
    },
    {
      id: 'mc-3',
      title: 'Pharmacovigilance Basics & ADR Safety Monitoring',
      category: 'Pharmacovigilance',
      duration: '90 mins',
      enrolled: 156,
      rating: '4.9',
      regulatoryStandard: 'WHO-Pv ADR Safety Guidelines',
      posterImage: courseGmpPoster,
      description: 'Real-world Adverse Drug Reaction (ADR) detection, causality assessment, and regulatory safety signal submission workflows.',
      competencies: ['ADR Detection', 'WHO-UMC Causality', 'Safety Reporting', 'Signal Analysis'],
      completionRate: '91% Audit Score'
    },
    {
      id: 'mc-4',
      title: 'HPTLC Mobile Phase Selection & Marker Fingerprinting',
      category: 'Quality Assurance / QA',
      duration: '60 mins',
      enrolled: 85,
      rating: '4.8',
      regulatoryStandard: 'Ayurvedic Pharmacopoeia of India (API)',
      posterImage: courseGcpPoster,
      description: 'Practical phytochemistry laboratory protocols for chromatographic botanical marker extraction, Rf value validation, and SOP preparation.',
      competencies: ['HPTLC Assay', 'Marker Fingerprinting', 'Lab SOPs', 'Assay Validation'],
      completionRate: '89% Hands-on Certified'
    }
  ];

  // 2. HIGHLIGHTED: Academic Degrees & Qualifications
  const degrees = [
    {
      degree: 'Ph.D. in Dravyaguna & Botanical Quality Standardization',
      institution: 'All India Institute of Ayurveda (AIIA), New Delhi',
      year: '2015',
      grade: 'Doctorate Awarded with Distinction',
      focus: 'Chromatographic Marker Profiling, Heavy Metal Remediation, and HPLC Assay Standardization for Classical Formulations.',
      type: 'Doctoral Degree'
    },
    {
      degree: 'Doctor of Medicine (M.D. Ayurveda) – Dravyaguna Vigyana',
      institution: 'National Institute of Ayurveda (NIA), Jaipur',
      year: '2008',
      grade: 'University Gold Medalist',
      focus: 'Materia Medica, Clinical Pharmacology, Nadi Pariksha Correlation, and Medicinal Flora Pharmacognosy.',
      type: 'Postgraduate Degree'
    },
    {
      degree: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)',
      institution: 'Faculty of Ayurveda, Institute of Medical Sciences (IMS-BHU), Varanasi',
      year: '2005',
      grade: 'First Class with Honors (Top 1% Merit)',
      focus: 'Comprehensive Samhita Studies, Clinical Diagnostics, Panchakarma Therapeutics, and Shalya Tantra Basics.',
      type: 'Undergraduate Degree'
    },
    {
      degree: 'Post-Doctoral Clinical Research Fellowship',
      institution: 'CSIR - Central Drug Research Institute (CDRI), Lucknow',
      year: '2017',
      grade: 'National Research Fellow',
      focus: 'High-Throughput Phytopharmaceutical Quality Systems and Standard Operating Procedures (SOPs).',
      type: 'Specialized Fellowship'
    }
  ];

  // 3. HIGHLIGHTED: Verified Badges & Accreditations
  const badges = [
    {
      title: 'NCISM Senior Academic Preceptor',
      issuer: 'National Commission for Indian System of Medicine (NCISM)',
      badgeCode: 'NCISM-PREC-DL-2024-884',
      year: 'Active Preceptor',
      description: 'Statutory national accreditation confirming preceptor eligibility to guide MD/MS scholars and supervise accredited Ayush curriculum standards.',
      standard: 'NCISM Faculty Regulations Act',
      accent: 'border-emerald-300 bg-emerald-50/70 text-emerald-950',
      badgeBg: 'bg-emerald-800 text-white'
    },
    {
      title: 'ICH GCP E6(R3) Certified Principal Investigator',
      issuer: 'CDSCO & Global Clinical Standards Forum',
      badgeCode: 'GCP-ICH-2025-E6R3-01',
      year: 'Jan 2025 Standard',
      description: 'Certified in the international ICH E6(R3) Step 4 standard covering clinical trial participant protection, risk-based quality thinking, and trial data integrity.',
      standard: 'ICH E6(R3) Step 4 (2025)',
      accent: 'border-blue-300 bg-blue-50/70 text-blue-950',
      badgeBg: 'bg-blue-800 text-white'
    },
    {
      title: 'Schedule T GMP Senior Cleanroom Auditor',
      issuer: 'Drugs Control Licensing Authority & Ayush Council',
      badgeCode: 'GMP-SCH-T-AUD-9912',
      year: 'Certified Auditor',
      description: 'Accredited auditor for pharmaceutical manufacturing facilities, HVAC airflow validation, cross-contamination prevention, and Schedule T statutory logs.',
      standard: 'Drugs Rules 1945 Schedule T',
      accent: 'border-teal-300 bg-teal-50/70 text-teal-950',
      badgeBg: 'bg-teal-800 text-white'
    },
    {
      title: 'CCRAS National Research Guide & SPARK-4.0 Mentor',
      issuer: 'Central Council for Research in Ayurvedic Sciences (CCRAS)',
      badgeCode: 'CCRAS-SPARK-GUIDE-412',
      year: 'Active Guide',
      description: 'Authorized national mentor for SPARK studentship research grants, supervising evidence-based classical formula validation and clinical trials.',
      standard: 'CCRAS National Studentship',
      accent: 'border-amber-300 bg-amber-50/70 text-amber-950',
      badgeBg: 'bg-amber-800 text-white'
    },
    {
      title: 'WHO-Pv Adverse Drug Reaction (ADR) Safety Officer',
      issuer: 'National Pharmacovigilance Coordination Centre (NPvCC)',
      badgeCode: 'NPVCC-SAFE-3302',
      year: 'Accredited Lead',
      description: 'Certified coordinator for adverse event signal surveillance, WHO-UMC causality evaluation, and rapid safety alerts under the national Pv program.',
      standard: 'WHO-UMC Safety Guidelines',
      accent: 'border-purple-300 bg-purple-50/70 text-purple-950',
      badgeBg: 'bg-purple-800 text-white'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16 font-sans">
      
      {/* Toast Notification */}
      {saveSuccess && (
        <div className="fixed top-20 right-5 z-50 bg-emerald-800 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-top">
          <Check className="w-4 h-4 text-emerald-300" />
          <span>Faculty profile updated successfully!</span>
        </div>
      )}

      {/* Cover Banner */}
      <div 
        className="h-44 sm:h-56 bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-700 relative overflow-hidden rounded-3xl mb-4 bg-cover bg-center shadow-xs"
        style={{ backgroundImage: `url(${profileData.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-emerald-950/40 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex justify-between items-end pb-4 relative z-10">
          <div className="text-white">
            <span className="px-3 py-1 bg-emerald-500/30 backdrop-blur-md border border-emerald-300/40 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-emerald-100 inline-flex items-center gap-1.5 mb-1">
              <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
              Academic Preceptor Profile
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto -mt-16 sm:-mt-20 relative z-10 px-4 sm:px-6 space-y-6">
        
        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
            
            {/* Avatar & Core Faculty Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 w-full">
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center border-4 border-white shadow-md overflow-hidden relative shrink-0">
                {profileData.avatarImage ? (
                  <img src={profileData.avatarImage} alt={profileData.name} className="w-full h-full object-cover" />
                ) : (
                  <span>MJ</span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {profileData.name}
                  </h1>
                  <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    NCISM Verified Preceptor
                  </span>
                  <span className="bg-teal-100 text-teal-900 border border-teal-300 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-teal-700" />
                    CCRAS Guide
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-bold text-emerald-800 mt-1">
                  {profileData.role}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-slate-500 font-semibold mt-2">
                  <span className="flex items-center gap-1 text-slate-700 font-bold">
                    <Building className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{profileData.institution}</span>
                  </span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{profileData.location}</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                onClick={() => setIsEditingBio(true)}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
              >
                <Edit3 className="w-3.5 h-3.5 text-slate-600" />
                <span>Edit Profile</span>
              </button>
            </div>

          </div>

          {/* Bio Statement */}
          <div className="mt-5 pt-5 border-t border-slate-100">
            <h2 className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider mb-1.5">
              Academic & Preceptor Profile Statement
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              "{profileData.bio}"
            </p>
          </div>

          {/* High-Level Focus Statistics - STRICTLY NEEDED STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-slate-100">
            <div 
              onClick={() => setActiveTab('courses')}
              className="bg-emerald-50/70 p-3.5 rounded-2xl text-center border border-emerald-200/80 cursor-pointer hover:bg-emerald-100/70 transition-colors"
            >
              <span className="block text-2xl font-extrabold text-emerald-900">{authoredCourses.length}</span>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Authored Courses</span>
            </div>
            
            <div 
              onClick={() => setActiveTab('degrees')}
              className="bg-blue-50/70 p-3.5 rounded-2xl text-center border border-blue-200/80 cursor-pointer hover:bg-blue-100/70 transition-colors"
            >
              <span className="block text-2xl font-extrabold text-blue-900">{degrees.length}</span>
              <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">Earned Degrees</span>
            </div>

            <div 
              onClick={() => setActiveTab('badges')}
              className="bg-teal-50/70 p-3.5 rounded-2xl text-center border border-teal-200/80 cursor-pointer hover:bg-teal-100/70 transition-colors"
            >
              <span className="block text-2xl font-extrabold text-teal-900">{badges.length}</span>
              <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">Verified Badges</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl text-center border border-slate-200/80">
              <span className="block text-2xl font-extrabold text-slate-900">142</span>
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Mentored Scholars</span>
            </div>
          </div>

        </div>

        {/* Highlight Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
          {[
            { id: 'all', label: 'All Profile Highlights', icon: Sparkles },
            { id: 'courses', label: `Authored Courses (${authoredCourses.length})`, icon: BookOpen },
            { id: 'degrees', label: `Degrees & Qualifications (${degrees.length})`, icon: GraduationCap },
            { id: 'badges', label: `Verified Badges (${badges.length})`, icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Highlights Area (Courses, Degrees, and Badges) */}
        <div className="w-full space-y-6">
            
            {/* HIGHLIGHT 1: COURSES */}
            {(activeTab === 'all' || activeTab === 'courses') && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Authored Industry Micro-Courses
                      </h2>
                      <p className="text-xs text-slate-500">
                        Practical regulatory and manufacturing courses authored for Ayush scholars
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {authoredCourses.length} Published
                  </span>
                </div>

                <div className={`grid grid-cols-1 ${showAllCourses ? 'sm:grid-cols-2' : ''} gap-4 pt-1`}>
                  {(showAllCourses ? authoredCourses : authoredCourses.slice(0, 1)).map((course) => (
                    <div 
                      key={course.id} 
                      className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all p-4 flex flex-col justify-between space-y-3 group shadow-2xs"
                    >
                      <div className="space-y-2">
                        {/* Tags */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
                            {course.category}
                          </span>
                          <span className="text-[10px] font-bold text-amber-700 flex items-center gap-0.5">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                            {course.rating}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                          {course.title}
                        </h3>

                        {/* Official Regulatory Citation Chip */}
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-semibold text-slate-600">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          <span>Standard: {course.regulatoryStandard}</span>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {course.description}
                        </p>

                        {/* Competencies */}
                        <div className="flex flex-wrap items-center gap-1 pt-1">
                          {course.competencies.slice(0, 3).map((comp, idx) => (
                            <span key={idx} className="text-[9px] font-bold bg-white text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Course Footer */}
                      <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1 font-bold text-slate-700">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.enrolled} Scholars</span>
                        </span>
                        <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                          {course.completionRate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {authoredCourses.length > 1 && (
                  <div className="pt-3 border-t border-slate-100 flex justify-center">
                    <button
                      onClick={() => setShowAllCourses(!showAllCourses)}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer shadow-2xs active:scale-95"
                    >
                      <span>{showAllCourses ? 'Show Less' : `Show More (${authoredCourses.length - 1} More Courses)`}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-emerald-700 transition-transform duration-200 ${showAllCourses ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* HIGHLIGHT 2: DEGREES & QUALIFICATIONS */}
            {(activeTab === 'all' || activeTab === 'degrees') && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-800">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Degrees & Academic Qualifications
                      </h2>
                      <p className="text-xs text-slate-500">
                        Academic degrees, university gold medals, and specialized fellowships
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {degrees.length} Verified
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  {(showAllDegrees ? degrees : degrees.slice(0, 1)).map((deg, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-all space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                          <span>{deg.degree}</span>
                        </h3>
                        <span className="text-xs font-extrabold text-blue-900 bg-blue-100/70 border border-blue-200 px-2.5 py-0.5 rounded-full shrink-0">
                          {deg.grade}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-semibold">
                        <span className="flex items-center gap-1 text-emerald-800 font-bold">
                          <Building className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{deg.institution}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>Conferred: {deg.year}</span>
                        </span>
                        <span>•</span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          {deg.type}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                        <strong className="text-slate-700 font-bold">Specialized Focus:</strong> {deg.focus}
                      </p>
                    </div>
                  ))}
                </div>

                {degrees.length > 1 && (
                  <div className="pt-3 border-t border-slate-100 flex justify-center">
                    <button
                      onClick={() => setShowAllDegrees(!showAllDegrees)}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all cursor-pointer shadow-2xs active:scale-95"
                    >
                      <span>{showAllDegrees ? 'Show Less' : `Show More (${degrees.length - 1} More Degrees)`}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-blue-700 transition-transform duration-200 ${showAllDegrees ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* HIGHLIGHT 3: VERIFIED BADGES & ACCREDITATIONS */}
            {(activeTab === 'all' || activeTab === 'badges') && (
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold text-slate-900">
                        Verified Badges & Professional Accreditations
                      </h2>
                      <p className="text-xs text-slate-500">
                        Official NCISM, CDSCO, WHO, and CCRAS cryptographic preceptor badges
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    {badges.length} Credentials
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3.5 pt-1">
                  {(showAllBadges ? badges : badges.slice(0, 1)).map((badge, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl border ${badge.accent} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`w-10 h-10 rounded-xl ${badge.badgeBg} flex items-center justify-center font-bold shrink-0 shadow-xs mt-0.5`}>
                          <BadgeCheck className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-extrabold text-slate-900">
                              {badge.title}
                            </h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                              {badge.year}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                            {badge.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500 pt-0.5">
                            <span>Issuer: <strong className="text-slate-800">{badge.issuer}</strong></span>
                            <span>•</span>
                            <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                              ID: {badge.badgeCode}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 sm:self-center">
                        <span className="px-3 py-1 bg-white rounded-xl border border-slate-200 text-[11px] font-extrabold text-emerald-800 flex items-center gap-1 shadow-2xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {badges.length > 1 && (
                  <div className="pt-3 border-t border-slate-100 flex justify-center">
                    <button
                      onClick={() => setShowAllBadges(!showAllBadges)}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-all cursor-pointer shadow-2xs active:scale-95"
                    >
                      <span>{showAllBadges ? 'Show Less' : `Show More (${badges.length - 1} More Badges)`}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-teal-700 transition-transform duration-200 ${showAllBadges ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}
              </div>
            )}

        </div>

      </div>

      {/* Edit Bio & Profile Modal */}
      {isEditingBio && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">Edit Faculty Profile</h3>
                <p className="text-xs text-slate-500">Update your official preceptor bio statement and contact details.</p>
              </div>
              <button
                onClick={() => setIsEditingBio(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBio} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name & Title
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Designation / Role
                </label>
                <input
                  type="text"
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Academic & Preceptor Statement
                </label>
                <textarea
                  rows={4}
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-emerald-700 leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsEditingBio(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default FacultyProfileView;
