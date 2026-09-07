import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  PlusCircle, 
  ExternalLink, 
  FileText, 
  Search, 
  Filter, 
  Sparkles, 
  Layers,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  FlaskConical,
  Beaker,
  Check,
  X,
  ArrowLeft,
  Calendar,
  Share2,
  Heart,
  MessageSquare,
  Bookmark,
  Clock,
  Send
} from 'lucide-react';

import vikramAvatar from '../../assets/images/vikram_avatar.jpg';
import aaravAvatar from '../../assets/images/aarav_avatar.jpg';
import { getPostsByAuthor } from '../../data/feedPostsData';

export const CompanyProfileView = ({ user, onNavigate, onBack, isPublicView = false }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'posts' | 'jobs' | 'candidates' | 'certifications'
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);
  const [applySuccessToast, setApplySuccessToast] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  
  const [newRole, setNewRole] = useState({
    title: '',
    department: 'QC & Standardization',
    stipend: '₹35,000 - ₹45,000 / month',
    skills: 'HPTLC, GMP, Ayush Pharmacopoeia',
    location: 'Research & Development Facility'
  });
  const [postSuccess, setPostSuccess] = useState(false);

  // Normalize company details
  const companyName = user?.brandName || user?.name || user?.institution || 'Dabur Research & Development Center';
  const roleSubtitle = user?.role || 'Ayurvedic Pharmaceuticals & Phytochemistry Division';
  const partnerId = user?.partnerId || user?.id || 'AYUSH-ENT-2026-902';
  const location = user?.location || 'Ghaziabad, Delhi NCR & New Delhi, India';
  const website = user?.website || 'https://www.dabur.com/ayush-rd';
  const employeeCount = user?.employees || '10,000+ Worldwide';
  const bio = user?.bio || `${companyName} is India’s premier herbal science research facility, pioneering standardizations for classical Ayurvedic formulations, HPLC marker profiling, phytopharmaceutical extraction, and clinical trial validation under Ministry of Ayush guidelines.`;
  const coverImage = user?.coverImage || 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80';
  const avatarImage = user?.avatarImage || vikramAvatar;

  // Retrieve corporate recruiter details
  const recruiter = user?.recruiter || {
    name: 'Dr. Vikram Sethi',
    title: 'Industry Recruiter & R&D Lead',
    email: 'recruitment.rd@dabur.com',
    phone: '+91 120 3982000 (Ext 402)',
    id: 'EMP-DABUR-QC-89',
    avatarImage: vikramAvatar
  };

  // Retrieve all posts authored by this company
  const companyPosts = getPostsByAuthor(user?.id || user?.name || companyName);

  const [activePostings, setActivePostings] = useState([
    {
      id: 'job-1',
      title: 'Junior Ayurvedic QC Officer (HPTLC Fingerprinting)',
      department: 'Phytochemistry & Standardization',
      location: location,
      type: 'Full-time / Fellow',
      stipend: '₹35,000 - ₹45,000 / mo',
      matchedCandidates: 12,
      requiredSkills: ['HPTLC Standardization', 'Schedule T GMP', 'Phytochemistry'],
      postedDate: '2 days ago',
      status: 'Active'
    },
    {
      id: 'job-2',
      title: 'MD Dravyaguna Research Fellow (Polyherbal Formulations)',
      department: 'Ayurvedic R&D Division',
      location: `${location} (Hybrid)`,
      type: 'Research Fellowship',
      stipend: '₹50,000 - ₹65,000 / mo',
      matchedCandidates: 8,
      requiredSkills: ['MD Dravyaguna', 'Heavy Metal Assay', 'Pharmacovigilance'],
      postedDate: '5 days ago',
      status: 'Active'
    },
    {
      id: 'job-3',
      title: 'GMP Cleanroom Operations Specialist',
      department: 'Formulations & Manufacturing Plant',
      location: location,
      type: 'Full-time',
      stipend: '₹30,000 - ₹40,000 / mo',
      matchedCandidates: 15,
      requiredSkills: ['Schedule T', 'Cleanroom Protocols', 'Batch Records'],
      postedDate: '1 week ago',
      status: 'Active'
    }
  ]);

  const shortlistedCandidates = [
    {
      id: 'cand-1',
      name: 'Aarav Sharma',
      institution: 'National Institute of Ayurveda (NIA), Jaipur',
      degree: 'BAMS (Final Year)',
      match: 96,
      sprintScore: '94/100',
      skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Rasa Shastra'],
      status: 'Shortlisted'
    },
    {
      id: 'cand-2',
      name: 'Pooja Iyer',
      institution: 'All India Institute of Ayurveda (AIIA), Delhi',
      degree: 'MD Ayurveda (Dravyaguna)',
      match: 93,
      sprintScore: '91/100',
      skills: ['Heavy Metal Assay', 'Phytopharmacy'],
      status: 'Under Review'
    },
    {
      id: 'cand-3',
      name: 'Rohan Deshmukh',
      institution: 'Government Ayurvedic College, Pune',
      degree: 'BAMS Graduate',
      match: 89,
      sprintScore: '89/100',
      skills: ['GMP Cleanroom Ops', 'Schedule T'],
      status: 'Under Review'
    }
  ];

  const handlePostJob = (e) => {
    e.preventDefault();
    const createdJob = {
      id: `job-${Date.now()}`,
      title: newRole.title,
      department: newRole.department,
      location: newRole.location,
      type: 'Full-time / Micro-Sprint',
      stipend: newRole.stipend,
      matchedCandidates: 5,
      requiredSkills: newRole.skills.split(',').map(s => s.trim()),
      postedDate: 'Just now',
      status: 'Active'
    };

    setActivePostings(prev => [createdJob, ...prev]);
    setPostSuccess(true);
    setTimeout(() => {
      setPostSuccess(false);
      setIsPostModalOpen(false);
      setNewRole({
        title: '',
        department: 'QC & Standardization',
        stipend: '₹35,000 - ₹45,000 / month',
        skills: 'HPTLC, GMP, Ayush Pharmacopoeia',
        location: 'Research & Development Facility'
      });
    }, 1200);
  };

  const handleConfirmApply = (e) => {
    e.preventDefault();
    setApplySuccessToast(true);
    setTimeout(() => {
      setApplySuccessToast(false);
      setSelectedJobForApply(null);
    }, 2500);
  };

  return (
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
              Corporate Brand Profile
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Verified Industry Partner
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
            <span>{isFollowing ? 'Following Brand' : 'Follow Company'}</span>
          </button>

          <button
            onClick={() => setIsPostModalOpen(true)}
            className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Post Opening</span>
          </button>
        </div>
      </div>

      {/* Corporate Header Card with Cover Image */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        
        {/* Cover Photo */}
        <div className="h-48 sm:h-64 w-full bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 relative">
          <img 
            src={coverImage} 
            alt={companyName} 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur-md text-emerald-200 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ministry of Ayush Verified Corporate Partner</span>
          </div>
        </div>

        {/* Profile Details Bar */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 md:-mt-20 mb-4">
            
            {/* Logo Avatar */}
            <div className="flex items-end gap-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10 shrink-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white font-extrabold text-3xl flex items-center justify-center border border-emerald-400/30 shadow-inner overflow-hidden">
                  <img src={avatarImage} alt={companyName} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {companyName}
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex flex-wrap items-center gap-2">
                  <span>{roleSubtitle}</span>
                  <span>•</span>
                  <span className="text-emerald-800 font-bold font-mono">ID: {partnerId}</span>
                </p>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                <span>Visit Portal</span>
              </a>

              <button
                onClick={() => {
                  setActiveTab('jobs');
                  const el = document.getElementById('company-tabs-nav');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>View {activePostings.length} Live Roles</span>
              </button>
            </div>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
              <a href={website} target="_blank" rel="noreferrer" className="hover:underline text-emerald-800 font-semibold truncate max-w-xs">
                {website.replace('https://', '')}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-700 shrink-0" />
              {employeeCount}
            </span>
            <span className="flex items-center gap-1.5 text-amber-800 font-bold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
              <Award className="w-3.5 h-3.5" />
              Schedule T GMP & NABL Certified
            </span>
          </div>

        </div>

      </div>

      {/* Recruiter Dashboard Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Active Roles</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">{activePostings.length}</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Clinical Micro-Sprints Live</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Matched Applicants</span>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">35</div>
          <span className="text-[11px] text-slate-500 mt-1 block">&gt;85% Vector Match Precision</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Shortlisted Scholars</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">28</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Ready for 1-Click Hiring</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Audit Proof-of-Work</span>
          <div className="text-3xl font-extrabold text-teal-800 mt-1">100%</div>
          <span className="text-[11px] text-teal-700 font-semibold mt-1 block">Blockchain Verified Reports</span>
        </div>
      </div>

      {/* Corporate Tabs Navigation */}
      <div id="company-tabs-nav" className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          Company Overview
        </button>

        <button
          onClick={() => setActiveTab('posts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'posts'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Posts & Updates</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {companyPosts.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'jobs'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Active Roles</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {activePostings.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('candidates')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'candidates'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Candidate Talent Pool</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-900 font-extrabold">
            {shortlistedCandidates.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('certifications')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'certifications'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          Compliance & Certifications
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">About {companyName}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {bio}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Through SkillSetu, our recruitment engine directly evaluates verifiable clinical competencies, Schedule T GMP cleanroom compliance, and chromatographic standardization data submitted by candidate scholars nationwide.
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-emerald-950">Phytochemistry & HPTLC Lab</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">High-performance thin-layer chromatography and chemical standardization for botanicals.</p>
                  </div>
                </div>

                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200/80 flex items-start gap-3">
                  <Beaker className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-teal-950">Schedule T GMP Cleanrooms</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">State-of-the-art cleanrooms operating under Schedule T Good Manufacturing Practices.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Sprint Hiring Model Explanation */}
            <div className="bg-white border border-slate-200/90 text-slate-900 p-6 rounded-3xl element-glow-shadow space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider">
                SkillSetu Employer Partner Program
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Verified Proof-of-Work Recruitment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instead of screening hundreds of static unverified resumes, {companyName} evaluates candidates based on verified micro-sprints and practical laboratory audits. Candidates with verified SkillSetu scores can apply with a single click.
              </p>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="space-y-6">
            
            {/* Key Contact Recruiter */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Authorized Corporate Lead
              </h4>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white font-extrabold text-lg flex items-center justify-center shadow-xs overflow-hidden shrink-0">
                  {recruiter.avatarImage ? (
                    <img src={recruiter.avatarImage} alt={recruiter.name} className="w-full h-full object-cover" />
                  ) : (
                    recruiter.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{recruiter.name}</h4>
                  <p className="text-xs text-slate-500">{recruiter.title}</p>
                  <p className="text-[10px] text-emerald-800 font-semibold mt-0.5">{recruiter.id}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{recruiter.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{recruiter.phone}</span>
                </div>
              </div>
            </div>

            {/* Target Academic Institutions */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Partnered Ayush Academic Institutions
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 font-semibold text-slate-800 flex justify-between items-center">
                  <span>National Institute of Ayurveda (Jaipur)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Partner</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 font-semibold text-slate-800 flex justify-between items-center">
                  <span>All India Institute of Ayurveda (Delhi)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Partner</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 font-semibold text-slate-800 flex justify-between items-center">
                  <span>Government Ayurvedic College (Pune)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Partner</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: POSTS & UPDATES */}
      {activeTab === 'posts' && (
        <div className="space-y-5 animate-fadeIn">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">
                Posts & Research Announcements by {companyName}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Verified clinical fellowships, internship calls, and laboratory updates</p>
            </div>

            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
              {companyPosts.length} Published Updates
            </span>
          </div>

          {companyPosts.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-2">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">No feed posts published yet</h4>
              <p className="text-xs text-slate-500">Posts and internship openings published by this brand will appear here.</p>
            </div>
          ) : (
            companyPosts.map(post => (
              <article key={post.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden p-6 space-y-4">
                
                {/* Post Header */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-900 text-white font-extrabold text-xs flex items-center justify-center overflow-hidden shrink-0 border border-slate-200">
                      <img src={post.author.avatarImage || avatarImage} alt={post.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 text-sm">{post.author.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">
                          Brand
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {post.time}
                        </span>
                        <span>•</span>
                        <span>{post.author.institution}</span>
                      </div>
                    </div>
                  </div>

                  <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title & Body */}
                <div className="space-y-2">
                  <h4 className="font-extrabold text-base text-slate-900 leading-snug">{post.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{post.content}</p>
                </div>

                {/* Internship Spec Card if applicable */}
                {post.isInternship && (
                  <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Stipend</span>
                      <strong className="text-emerald-900 text-sm font-extrabold">{post.stipend}</strong>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Duration</span>
                      <strong className="text-slate-800 text-xs font-bold">{post.duration}</strong>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Location</span>
                      <strong className="text-slate-800 text-xs font-bold">{post.location}</strong>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Role</span>
                      <strong className="text-emerald-800 text-xs font-bold">{post.openings}</strong>
                    </div>
                  </div>
                )}

                {/* Post Image */}
                {post.image && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-80">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Tags */}
                {post.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      {post.likes} Likes
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                      <MessageSquare className="w-4 h-4 text-slate-400" />
                      {post.comments?.length || 0} Comments
                    </span>
                  </div>

                  {post.isInternship && (
                    <button
                      onClick={() => setSelectedJobForApply({ title: post.title, stipend: post.stipend, location: post.location })}
                      className="px-4 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer"
                    >
                      Apply for Internship
                    </button>
                  )}
                </div>

              </article>
            ))
          )}
        </div>
      )}

      {/* TAB 3: ACTIVE JOBS */}
      {activeTab === 'jobs' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200/80">
            <span className="text-xs font-extrabold text-slate-900">
              Active Job Roles & Sponsored Micro-Sprints ({activePostings.length})
            </span>
            <button
              onClick={() => setIsPostModalOpen(true)}
              className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post New Role</span>
            </button>
          </div>

          {activePostings.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4 hover:border-emerald-300 transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-900">{job.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {job.department} • {job.location}
                  </p>
                </div>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                  {job.stipend}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {job.requiredSkills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-semibold">
                    <strong className="text-slate-900">{job.matchedCandidates}</strong> candidates matched
                  </span>
                  
                  <button 
                    onClick={() => setSelectedJobForApply(job)}
                    className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    <span>1-Click Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: CANDIDATES */}
      {activeTab === 'candidates' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-900">
              Shortlisted Candidates with Verified Proof of Work ({shortlistedCandidates.length})
            </span>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Vector Match Precision &gt; 90%
            </span>
          </div>

          {shortlistedCandidates.map((cand) => (
            <div key={cand.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white font-extrabold text-lg flex items-center justify-center shrink-0">
                    {cand.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">{cand.name}</h4>
                    <p className="text-xs text-slate-500">{cand.degree} • {cand.institution}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                  {cand.match}% Match
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Practical Sprint Score</span>
                  <strong className="text-emerald-800 font-extrabold">{cand.sprintScore}</strong>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cand.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-semibold text-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: CERTIFICATIONS */}
      {activeTab === 'certifications' && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4 animate-fadeIn">
          <h3 className="text-lg font-extrabold text-slate-900">Ministry Accreditation & Quality Audits</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-slate-900">Ministry of Ayush Corporate License</h4>
                <p className="text-slate-500 text-[11px] mt-0.5">License No: {partnerId} (Active &amp; Compliant)</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-slate-900">Schedule T GMP Certification</h4>
                <p className="text-slate-500 text-[11px] mt-0.5">Certified for Botanical Extraction &amp; Classical Formulations</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
              <Award className="w-6 h-6 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-slate-900">NABL Analytical Testing Laboratory</h4>
                <p className="text-slate-500 text-[11px] mt-0.5">Accredited for Heavy Metals, Pesticide Residue &amp; HPTLC Marker Assays</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
              <FileText className="w-6 h-6 text-indigo-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-slate-900">SkillSetu Talent Pipeline Node</h4>
                <p className="text-slate-500 text-[11px] mt-0.5">SHA-256 Verifiable Candidate Practical Sprint Accreditation</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POST NEW ROLE MODAL */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-extrabold text-slate-900">Post Micro-Sprint Opening</h3>
              </div>
              <button 
                onClick={() => setIsPostModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                title="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {postSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">Micro-Sprint Role Published!</h4>
                <p className="text-xs text-slate-500">Matching candidate scholars with verified skill scores will be notified.</p>
              </div>
            ) : (
              <form onSubmit={handlePostJob} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Role Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Junior Ayurvedic QC Officer (HPTLC Fingerprinting)"
                    value={newRole.title}
                    onChange={(e) => setNewRole({ ...newRole, title: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Department</label>
                    <input
                      type="text"
                      placeholder="e.g. Phytochemistry"
                      value={newRole.department}
                      onChange={(e) => setNewRole({ ...newRole, department: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Stipend / Salary</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹35,000 - ₹45,000 / mo"
                      value={newRole.stipend}
                      onChange={(e) => setNewRole({ ...newRole, stipend: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Required Ayush Skills</label>
                  <input
                    type="text"
                    placeholder="HPTLC Standardization, Schedule T GMP, Phytochemistry"
                    value={newRole.skills}
                    onChange={(e) => setNewRole({ ...newRole, skills: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPostModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-800 text-white rounded-xl font-bold hover:bg-emerald-900 shadow-xs cursor-pointer"
                  >
                    Publish Role Challenge
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* 1-CLICK APPLY MODAL */}
      {selectedJobForApply && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-extrabold text-slate-900">1-Click Apply with Score</h3>
              </div>
              <button 
                onClick={() => setSelectedJobForApply(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {applySuccessToast ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">Application Submitted!</h4>
                <p className="text-xs text-slate-500">Your verified diagnostic score and micro-sprint credentials were submitted to {companyName}.</p>
              </div>
            ) : (
              <form onSubmit={handleConfirmApply} className="space-y-3.5 text-xs">
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
                  <h4 className="font-extrabold text-emerald-950 text-sm">{selectedJobForApply.title}</h4>
                  <p className="text-xs text-emerald-800 font-semibold">{companyName} • {selectedJobForApply.stipend}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Verified Candidate Profile</span>
                    <strong className="text-slate-900 font-bold">Aarav Sharma (BAMS Final Year)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Diagnostic Readiness Score</span>
                    <strong className="text-emerald-800 font-extrabold">88% (Verified High Decile)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Accredited Badges Attached</span>
                    <strong className="text-slate-900 font-bold">6 SHA-256 Credentials</strong>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedJobForApply(null)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-emerald-800 text-white rounded-xl font-bold hover:bg-emerald-900 shadow-xs cursor-pointer"
                  >
                    Confirm &amp; Send Application
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
