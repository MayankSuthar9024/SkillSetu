import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Building, 
  MapPin, 
  Edit3, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Heart, 
  MessageSquare, 
  Camera, 
  Image as ImageIcon, 
  Upload, 
  X, 
  TrendingUp, 
  BarChart3, 
  Eye, 
  FileText, 
  Download, 
  Lock, 
  GraduationCap, 
  Calendar, 
  Share2, 
  Check, 
  ArrowLeft
} from 'lucide-react';

import aaravAvatar from '../assets/images/aarav_avatar.jpg';

import { CompanyProfileView } from '../components/portals/CompanyProfileView';
import { FacultyProfileView } from '../components/portals/FacultyProfileView';
import { CollegeProfileView } from '../components/portals/CollegeProfileView';
import { MinistryProfileView } from '../components/portals/MinistryProfileView';
import { AyushSixAxisRadarChart } from '../components/AyushSixAxisRadarChart';
import { getPostsByAuthor, getAuthorProfile } from '../data/feedPostsData';
import { PORTALS_DATA } from '../data/portalData';

export function ProfilePage({ onNavigate, currentUser, activePortalId, viewingUser, onBack }) {
  // Resolve effective target profile (whether viewing someone else's profile or own profile)
  const targetEntity = viewingUser 
    ? (getAuthorProfile(viewingUser) || viewingUser)
    : (currentUser || PORTALS_DATA[0].profileUser);

  // Determine role type: 'company' | 'faculty' | 'college' | 'admin' | 'student'
  const roleType = (
    targetEntity?.roleType || 
    (!viewingUser ? activePortalId : null) || 
    (() => {
      const r = (targetEntity?.role || '').toLowerCase();
      const inst = (targetEntity?.institution || '').toLowerCase();
      const name = (targetEntity?.name || '').toLowerCase();

      // Check student explicitly first so student studying at an institute doesn't get misclassified!
      if (
        r.includes('student') || r.includes('scholar') || r.includes('bams') || 
        r.includes('fellow') || r.includes('intern') || name.includes('aarav') || 
        name.includes('ananya')
      ) {
        return 'student';
      }

      if (
        r.includes('recruiter') || r.includes('enterprise') || r.includes('pharma') || 
        r.includes('industry') ||
        name.includes('dabur') || name.includes('patanjali') || name.includes('himalaya') || 
        name.includes('charak') || name.includes('baidyanath') || name.includes('soukya') || 
        name.includes('kottakkal') || name.includes('avs') || name.includes('avp') ||
        (r.includes('lead') && inst.includes('dabur'))
      ) {
        return 'company';
      }

      if (r.includes('professor') || r.includes('faculty') || r.includes('hod') || r.includes('preceptor') || r.includes('researcher') || name.includes('dr. ananya') || name.includes('meenakshi')) {
        return 'faculty';
      }

      if (r.includes('ministry') || r.includes('director general') || r.includes('national admin') || r.includes('council') || name.includes('sanjay') || name.includes('ccras') || name.includes('ccrh') || name.includes('ccrum') || name.includes('ministry')) {
        return 'admin';
      }

      if (r.includes('dean') || r.includes('placement head') || r.includes('principal') || name.includes('rajeshwar') || name.includes('institute') || name.includes('college') || name.includes('university') || name.includes('aiia') || name.includes('nis')) {
        return 'college';
      }

      return 'student';
    })()
  );

  // 1. COMPANY BRAND PROFILE
  if (roleType === 'company') {
    return <CompanyProfileView user={targetEntity} onNavigate={onNavigate} onBack={onBack} isPublicView={Boolean(viewingUser)} />;
  }

  // 2. FACULTY SCHOLAR PROFILE
  if (roleType === 'faculty') {
    return <FacultyProfileView user={targetEntity} onNavigate={onNavigate} onBack={onBack} isPublicView={Boolean(viewingUser)} />;
  }

  // 3. COLLEGE & INSTITUTIONAL PROFILE
  if (roleType === 'college') {
    return <CollegeProfileView user={targetEntity} onNavigate={onNavigate} onBack={onBack} isPublicView={Boolean(viewingUser)} />;
  }

  // 4. MINISTRY & GOVERNMENT REGULATORY PROFILE
  if (roleType === 'admin') {
    return <MinistryProfileView user={targetEntity} onNavigate={onNavigate} onBack={onBack} isPublicView={Boolean(viewingUser)} />;
  }

  // 5. STUDENT PRACTITIONER PORTFOLIO
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [saveSuccessToast, setSaveSuccessToast] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(false);
  
  // Media Upload Modal state ('pfp' | 'banner' | null)
  const [activeMediaModal, setActiveMediaModal] = useState(null);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    name: targetEntity?.name || 'Aarav Sharma',
    role: targetEntity?.role || 'BAMS Scholar & Ayush Research Fellow',
    id: targetEntity?.id || 'NIA/AY/2026/0491',
    email: targetEntity?.email || 'aarav.sharma@nia.ac.in',
    institution: targetEntity?.institution || 'National Institute of Ayurveda (NIA), Jaipur',
    degree: targetEntity?.degree || 'BAMS (Final Year 2026)',
    location: targetEntity?.location || 'Jaipur, Rajasthan, India',
    readinessScore: targetEntity?.readiness ? parseInt(targetEntity.readiness) : 88,
    bio: targetEntity?.bio || 'Pioneering evidence-based Ayurvedic medicine, digital Nadi Pariksha diagnostics, and botanical extraction HPLC standardization. Fast-tracking Ayush academic research to clinical industry applications.',
    phone: '+91 98765 43210',
    abhaId: targetEntity?.abhaId || '91-4402-8819-2041',
    ncismReg: targetEntity?.ncismReg || 'NCISM/AYU/RJ/2022/9912',
    cgpa: targetEntity?.cgpa || '8.94 / 10.0 (Honors)',
    batch: '2021 - 2026',
    preceptor: targetEntity?.preceptor || 'Prof. Meenakshi Joshi (HOD Dravyaguna)',
    avatar: targetEntity?.avatar || 'AS',
    avatarImage: targetEntity?.avatarImage || aaravAvatar,
    coverImage: targetEntity?.coverImage || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80',
    verificationHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  });

  // Sync profile when targetEntity changes
  useEffect(() => {
    if (targetEntity) {
      setProfileData(prev => ({
        ...prev,
        name: targetEntity.name || prev.name,
        role: targetEntity.role || prev.role,
        id: targetEntity.id || prev.id,
        email: targetEntity.email || prev.email,
        institution: targetEntity.institution || prev.institution,
        degree: targetEntity.degree || prev.degree,
        avatar: targetEntity.avatar || prev.avatar,
        avatarImage: targetEntity.avatarImage || prev.avatarImage,
        readinessScore: targetEntity.readiness ? parseInt(targetEntity.readiness) : prev.readinessScore
      }));
      setEditForm(prev => ({
        ...prev,
        name: targetEntity.name || prev.name,
        role: targetEntity.role || prev.role,
        id: targetEntity.id || prev.id,
        email: targetEntity.email || prev.email,
        institution: targetEntity.institution || prev.institution,
        degree: targetEntity.degree || prev.degree,
        avatar: targetEntity.avatar || prev.avatar,
        avatarImage: targetEntity.avatarImage || prev.avatarImage
      }));
    }
  }, [targetEntity]);

  const [editForm, setEditForm] = useState({ ...profileData });

  const handleSaveBio = (e) => {
    e.preventDefault();
    setProfileData({ ...editForm });
    setIsEditingBio(false);
    setSaveSuccessToast(true);
    setTimeout(() => setSaveSuccessToast(false), 3000);
  };

  const handleFileUpload = (file, targetType) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const resultUrl = e.target.result;
      if (targetType === 'pfp') {
        setProfileData(prev => ({ ...prev, avatarImage: resultUrl }));
        setEditForm(prev => ({ ...prev, avatarImage: resultUrl }));
      } else {
        setProfileData(prev => ({ ...prev, coverImage: resultUrl }));
        setEditForm(prev => ({ ...prev, coverImage: resultUrl }));
      }
      setActiveMediaModal(null);
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadPortfolio = () => {
    setDownloadSuccessToast(true);
    setTimeout(() => setDownloadSuccessToast(false), 3500);
  };

  const openMediaModal = (type) => {
    setActiveMediaModal(type);
  };

  const skillMatrix = [
    { name: 'Nadi Pariksha (Pulse Diagnostics)', score: 92, status: 'Mastered', percentile: '98th' },
    { name: 'Dravyaguna Phytochemistry & HPLC', score: 88, status: 'Verified', percentile: '94th' },
    { name: 'Schedule T GMP Cleanroom Protocol', score: 94, status: 'Mastered', percentile: '99th' },
    { name: 'GCP Clinical Trial Protocols', score: 85, status: 'Verified', percentile: '91st' },
    { name: 'Panchakarma Clinical Management', score: 82, status: 'Proficient', percentile: '89th' },
    { name: 'Rasa Shastra Quality Testing', score: 86, status: 'Verified', percentile: '93rd' },
  ];

  const badges = [
    { title: 'Digital Nadi Pariksha Master', issuer: 'All India Institute of Ayurveda', date: 'Jan 2026', code: 'AYUSH-BADGE-9912', status: 'Active' },
    { title: 'HPLC Herbal Quality Specialist', issuer: 'Dabur R&D Laboratory', date: 'Dec 2025', code: 'DABUR-QC-8821', status: 'Active' },
    { title: 'Schedule T GMP Cleanroom Protocol', issuer: 'Ayush Manufacturing Council', date: 'Dec 2025', code: 'GMP-SCH-T-4401', status: 'Active' },
    { title: 'Ayush GCP Clinical Trial Protocol', issuer: 'CCRAS Ministry of Ayush', date: 'Nov 2025', code: 'CCRAS-GCP-7714', status: 'Active' },
    { title: 'Ayurvedic Tele-Medicine Certified', issuer: 'National Health Authority', date: 'Oct 2025', code: 'NHA-TELE-4091', status: 'Active' },
    { title: 'HSSC Skill Qualification Pack 4', issuer: 'Healthcare Sector Skill Council', date: 'Sep 2025', code: 'HSSC-NQR-8802', status: 'Active' }
  ];

  // Retrieve any posts authored by this student from dataset
  const authoredStudentPosts = getPostsByAuthor(profileData.id || profileData.name);

  const staticUserPosts = [
    {
      id: 13,
      title: 'Earned Level 3 Certification in Herbal Standardization & HPLC Quality Control!',
      time: '4 days ago',
      category: 'Milestone',
      likes: 215,
      comments: 14,
      shares: 41,
      views: '2,840',
      recruiterViews: 84,
      topAudience: 'Ayush Pharma R&D Leads',
      snippet: 'Validated 6 botanical batches of Withania somnifera for withanolide content against USP-Ayush pharmacopoeial reference standards.'
    },
    {
      id: 20,
      title: 'Comparative Case Analysis: Punarnavadi Kwath in Renal Fluid Balance',
      time: '1 week ago',
      category: 'Clinical Case',
      likes: 184,
      comments: 8,
      shares: 32,
      views: '1,440',
      recruiterViews: 44,
      topAudience: 'Preceptors & Clinical Interns',
      snippet: 'Observed significant edema reduction over 21 days with continuous bio-marker tracking and patient compliance logs.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16 overflow-x-hidden font-sans">
      
      {/* Toast Notifications */}
      {saveSuccessToast && (
        <div className="fixed top-20 right-5 z-50 bg-white text-slate-900 border border-slate-200/90 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-top">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>Profile details saved successfully!</span>
        </div>
      )}

      {downloadSuccessToast && (
        <div className="fixed top-20 right-5 z-50 bg-white text-slate-900 border border-slate-200/90 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-top">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Download className="w-3.5 h-3.5" />
          </div>
          <span>Verified Scholar Portfolio (PDF) generated with SHA-256 seal.</span>
        </div>
      )}

      {/* Responsive Back Navigation */}
      {onBack && (
        <div className="max-w-6xl mx-auto mb-3 sm:mb-4 px-1 sm:px-0">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 active:scale-95 text-slate-700 hover:text-emerald-800 font-bold text-xs border border-slate-200/80 shadow-2xs transition-all cursor-pointer"
            title="Go Back"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-700" />
            <span>Back</span>
          </button>
        </div>
      )}

      {/* Botanical Cover Banner (Buttons removed per user request) */}
      <div 
        className="h-44 sm:h-60 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 relative overflow-hidden rounded-3xl mb-4 bg-cover bg-center transition-all duration-300 shadow-sm"
        style={{
          backgroundImage: profileData.coverImage ? `url(${profileData.coverImage})` : undefined
        }}
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-start pt-4 relative z-10">
          {/* Change Cover Photo Button */}
          {!viewingUser && (
            <button
              onClick={() => openMediaModal('banner')}
              className="bg-white/80 hover:bg-white text-emerald-950 font-bold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-emerald-200/60 cursor-pointer shadow-xs"
              title="Change Cover Photo"
            >
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Change Cover</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Profile Container */}
      <div className="max-w-6xl mx-auto -mt-16 sm:-mt-20 relative z-10 min-w-0 max-w-full overflow-hidden px-1 sm:px-0">
        
        {/* Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 shadow-sm min-w-0 max-w-full overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 min-w-0 max-w-full">
            
            {/* Left Avatar & Core Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 min-w-0 max-w-full w-full">
              
              {/* Profile Avatar (PFP) */}
              <div 
                className="relative shrink-0 group cursor-pointer"
                onClick={() => !viewingUser && openMediaModal('pfp')}
                title={viewingUser ? profileData.name : "Change Profile Photo"}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-900 text-white font-extrabold text-2xl sm:text-4xl flex items-center justify-center border-4 border-white shadow-md overflow-hidden relative">
                  {profileData.avatarImage ? (
                    <img 
                      src={profileData.avatarImage} 
                      alt={profileData.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <span>{profileData.avatar}</span>
                  )}

                  {!viewingUser && (
                    <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-bold gap-1">
                      <Camera className="w-6 h-6 text-emerald-300" />
                      <span>Change Photo</span>
                    </div>
                  )}
                </div>

                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-700 text-white p-1.5 rounded-xl border-2 border-white shadow-md z-10" title="Verified Ayush Scholar">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="min-w-0 flex-1 w-full overflow-hidden">
                <div className="flex items-center gap-2 flex-wrap min-w-0 max-w-full">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight break-words max-w-full">
                    {profileData.name}
                  </h1>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    ABHA Verified
                  </span>
                  <span className="bg-teal-50 text-teal-800 border border-teal-200/80 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                    NCISM Accredited
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 break-words">
                  {profileData.role}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-xs text-slate-500 font-medium mt-2 min-w-0 max-w-full">
                  <span className="flex items-center gap-1 min-w-0 max-w-full">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="break-words max-w-full">{profileData.institution}</span>
                  </span>
                  <span className="flex items-center gap-1 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{profileData.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons & Readiness Score */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              {/* Clean Light Skill Readiness Card */}
              <div 
                className="flex items-center gap-3 bg-white border border-slate-200/90 hover:border-emerald-300 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-2xs transition-all cursor-default"
                title="Verified Ayush Clinical Readiness Index (Level 3 Certified)"
              >
                {/* Circular Calibrated Radial Score Gauge */}
                <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
                    <circle 
                      cx="22" 
                      cy="22" 
                      r="17" 
                      stroke="#f1f5f9" 
                      strokeWidth="3.5" 
                      fill="none" 
                    />
                    <circle 
                      cx="22" 
                      cy="22" 
                      r="17" 
                      stroke="url(#skillScoreGradientLight)" 
                      strokeWidth="3.5" 
                      strokeDasharray={106.8} 
                      strokeDashoffset={106.8 * (1 - (profileData.readinessScore || 88) / 100)} 
                      strokeLinecap="round" 
                      fill="none" 
                    />
                    <defs>
                      <linearGradient id="skillScoreGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#0d9488" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-[12px] font-extrabold text-slate-900 tracking-tight">
                    {profileData.readinessScore}%
                  </span>
                </div>

                {/* Score Meta Typography */}
                <div className="min-w-0 pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Overall Skill Score
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight">
                      Clinical Ready
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Level 3
                    </span>
                  </div>
                </div>
              </div>

              {!viewingUser ? (
                <button
                  onClick={() => setIsEditingBio(true)}
                  className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md border border-emerald-700/50"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavigate && onNavigate('messages')}
                  className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md border border-emerald-700/50"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Message Scholar</span>
                </button>
              )}
            </div>

          </div>

          {/* Bio Summary text */}
          <div className="mt-5 pt-5 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Scholar Summary / Professional Statement</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              "{profileData.bio}"
            </p>
          </div>

          {/* Key Quick Indices */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-5 pt-5 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-emerald-900">{profileData.readinessScore}%</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Skill Readiness</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">{badges.length}</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Verified Badges</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">6 Axes</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Ayush Radar Matrix</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-teal-800">4,280+</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Post Impressions</span>
            </div>
          </div>
        </div>

        {/* Media Drag & Drop / Upload Modal */}
        {activeMediaModal && (
          <div className="fixed inset-0 z-50 bg-emerald-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
              
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-emerald-700" />
                  {activeMediaModal === 'pfp' ? 'Update Profile Picture' : 'Update Cover Banner'}
                </h3>
                <button
                  onClick={() => setActiveMediaModal(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      handleFileUpload(e.dataTransfer.files[0], activeMediaModal);
                    }
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/40 hover:bg-emerald-50 rounded-2xl p-8 text-center transition-all cursor-pointer group"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0], activeMediaModal);
                      }
                    }}
                  />
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 group-hover:bg-emerald-200 text-emerald-800 mx-auto flex items-center justify-center mb-3 transition-transform group-hover:scale-110 shadow-xs">
                    <Upload className="w-7 h-7" />
                  </div>
                  <p className="font-bold text-sm text-slate-900">
                    Drag &amp; Drop your {activeMediaModal === 'pfp' ? 'profile photo' : 'cover banner'} here
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    or <span className="text-emerald-700 underline font-bold">click to browse</span> from device
                  </p>
                  <span className="inline-block mt-3 text-[10px] text-slate-400 font-semibold bg-white px-3 py-1 rounded-full border border-slate-200">
                    Supports PNG, JPG, WEBP
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Edit Profile Info Modal */}
        {isEditingBio && (
          <div className="fixed inset-0 z-50 bg-emerald-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-emerald-700" />
                  Edit Profile &amp; Credentials
                </h3>
                <button
                  onClick={() => setIsEditingBio(false)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer"
                  title="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveBio} className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { setIsEditingBio(false); openMediaModal('pfp'); }}
                    className="p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-left transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">Change Photo</span>
                      <span className="text-[10px] text-slate-500">Upload profile image</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIsEditingBio(false); openMediaModal('banner'); }}
                    className="p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-left transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 text-teal-700 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">Change Banner</span>
                      <span className="text-[10px] text-slate-500">Upload backdrop image</span>
                    </div>
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Role / Designation</label>
                  <input
                    type="text"
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Institution</label>
                  <input
                    type="text"
                    value={editForm.institution}
                    onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Degree Program</label>
                    <input
                      type="text"
                      value={editForm.degree}
                      onChange={(e) => setEditForm({ ...editForm, degree: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Bio Summary</label>
                  <textarea
                    rows={3}
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed font-medium"
                    required
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingBio(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Responsive Section Jump Navigation (No horizontal scrolling) */}
        <div className="mt-8 mb-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3.5">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Scholar Portfolio:
          </span>
          <button
            type="button"
            onClick={() => {
              document.getElementById('section-radar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200/80 active:scale-95"
          >
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>6-Axis Radar &amp; Academics</span>
          </button>
          <button
            type="button"
            onClick={() => {
              document.getElementById('section-badges')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200/80 active:scale-95"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Certifications ({badges.length})</span>
          </button>
          <button
            type="button"
            onClick={() => {
              document.getElementById('section-posts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-200/80 active:scale-95"
          >
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>Posts &amp; Reach Analytics</span>
          </button>
        </div>

        {/* Vertically Scrollable Content Sections (All visible, smooth vertical scrolling) */}
        <div className="space-y-12">
          
          {/* SECTION 1: 6-AXIS AYUSH RADAR, ACADEMIC QUALIFICATIONS & VERIFIED IDENTITY */}
          <section id="section-radar" className="scroll-mt-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-700" />
                  Ayush 6-Axis Competency Radar &amp; Qualifications
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Multi-dimensional clinical diagnostics, pharmacognosy HPLC, and Schedule T GMP compliance ratings.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                6 Evaluated Axes
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Real 6-Axis Ayush Radar Chart & Academic Records */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Real 6-Axis Radar Chart Component */}
                <AyushSixAxisRadarChart skillMatrix={skillMatrix} />

                {/* Academic Background & Qualifications */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-emerald-700" />
                    Academic Profile &amp; Institutional Records
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="text-slate-400 font-semibold block text-[11px]">Degree Program</span>
                      <span className="font-bold text-slate-900 text-sm mt-0.5 block">{profileData.degree}</span>
                      <span className="text-slate-500 mt-1 block">Batch: {profileData.batch}</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="text-slate-400 font-semibold block text-[11px]">Academic Standing</span>
                      <span className="font-bold text-slate-900 text-sm mt-0.5 block">{profileData.cgpa}</span>
                      <span className="text-slate-500 mt-1 block">Institutional Guide: {profileData.preceptor}</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="text-slate-400 font-semibold block text-[11px]">NCISM Registration</span>
                      <span className="font-mono font-bold text-slate-900 text-xs mt-0.5 block">{profileData.ncismReg}</span>
                      <span className="text-emerald-700 font-semibold mt-1 block flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Validated Practitioner
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="text-slate-400 font-semibold block text-[11px]">National ABHA Health ID</span>
                      <span className="font-mono font-bold text-slate-900 text-xs mt-0.5 block">{profileData.abhaId}</span>
                      <span className="text-teal-700 font-semibold mt-1 block flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> DigiLocker Verified
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar Credentials */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Official Contacts */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Verified Contact &amp; Identity</h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold block">University Enrollment Roll</span>
                      <span className="font-bold font-mono text-slate-800">{profileData.id}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Official Institutional Email</span>
                      <span className="font-bold text-slate-800 break-all">{profileData.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Contact Number</span>
                      <span className="font-bold text-slate-800">{profileData.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Clinical Campus Location</span>
                      <span className="font-bold text-slate-800">{profileData.location}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 2: VERIFIED CERTIFICATIONS & DIGITAL BADGES */}
          <section id="section-badges" className="scroll-mt-6 space-y-5 pt-6 border-t border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  Verified Certifications &amp; Digital Skill Badges
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Cryptographically verifiable competency qualifications issued by apex Ayush bodies and research councils.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {badges.length} Verified Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((b, idx) => (
                <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-3 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <span className="p-2.5 bg-emerald-50 text-emerald-800 rounded-2xl">
                      <ShieldCheck className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md">
                      {b.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{b.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{b.issuer}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>{b.code}</span>
                    <span>{b.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: SCHOLAR COMMUNITY POSTS & CASE ANALYTICS */}
          <section id="section-posts" className="scroll-mt-6 space-y-6 pt-6 border-t border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-700" />
                  Scholar Posts, Clinical Insights &amp; Reach Analytics
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Published clinical case logs, peer reach, and audience impressions.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Active Research Feed
              </span>
            </div>

            {/* Analytics Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-soft">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[10px] font-bold text-emerald-800 uppercase tracking-wider w-fit">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                    Post Analytics &amp; Reach Overview
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                    4,280 Total Post Impressions
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Your clinical case posts reached +24% more preceptors &amp; recruiters this month.
                  </p>
                </div>

                <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs">
                  Top 5% Ayush Scholar Content
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                  <span className="text-[11px] text-slate-500 font-semibold block">Total Views</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">4,280</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">+18% this week</span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                  <span className="text-[11px] text-slate-500 font-semibold block">Post Engagements</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">399</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">9.3% engagement</span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                  <span className="text-[11px] text-slate-500 font-semibold block">Faculty Comments</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">9</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">3 preceptor threads</span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-2xl">
                  <span className="text-[11px] text-slate-500 font-semibold block">Recruiter Views</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">128</span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">Via posted cases</span>
                </div>
              </div>
            </div>

            {/* Per-Post Breakdown */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-700" />
                Your Posts &amp; Individual Analytics
              </h4>

              {staticUserPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{post.time}</span>
                  </div>
                  
                  <h4 className="font-bold text-slate-900 text-base mb-1">{post.title}</h4>
                  <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">{post.snippet}</p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 mb-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Post Views</span>
                      <span className="font-bold text-slate-900 flex items-center justify-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-slate-500" />
                        {post.views}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Recruiter Views</span>
                      <span className="font-bold text-emerald-800 flex items-center justify-center gap-1">
                        <Building className="w-3.5 h-3.5 text-emerald-600" />
                        {post.recruiterViews}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Applies Triggered</span>
                      <span className="font-bold text-slate-900">12 Verified</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Audience Focus</span>
                      <span className="font-bold text-emerald-900 truncate block">{post.topAudience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;
