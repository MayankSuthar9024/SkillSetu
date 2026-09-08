import React, { useState, useRef, useEffect } from 'react';
import { 
  User, 
  CheckCircle2, 
  Award, 
  Building, 
  MapPin, 
  Edit3, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight,
  ChevronLeft,
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
  GraduationCap, 
  Check, 
  ArrowLeft,
  Mail,
  Phone,
  Hash,
  Copy,
  Lock
} from 'lucide-react';

import aaravAvatar from '../assets/images/aarav_avatar.jpg';

import { CompanyProfileView } from '../components/portals/CompanyProfileView';
import { FacultyProfileView } from '../components/portals/FacultyProfileView';
import { CollegeProfileView } from '../components/portals/CollegeProfileView';
import { MinistryProfileView } from '../components/portals/MinistryProfileView';
import { AyushSixAxisRadarChart } from '../components/AyushSixAxisRadarChart';
import { ComingSoonPage } from '../components/ComingSoonPage';
import { getPostsByAuthor, getAuthorProfile } from '../data/feedPostsData';
import { PORTALS_DATA } from '../data/portalData';

/**
 * Student Scholar & Practitioner Portfolio View
 */
export function StudentProfileView({ user, onNavigate, onBack, isPublicView }) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [saveSuccessToast, setSaveSuccessToast] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Collapsible Sections state: default minimized phase for other sections; 6-Axis Radar has NO minimize option
  const [openSections, setOpenSections] = useState({
    about: false,  // default minimized phase
    badges: false, // default minimized phase
    posts: false   // default minimized phase
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    setOpenSections({ about: true, badges: true, posts: true });
  };

  const collapseAll = () => {
    setOpenSections({ about: false, badges: false, posts: false });
  };

  const areAllOpen = openSections.about && openSections.badges && openSections.posts;

  // Media Upload Modal state ('pfp' | 'banner' | null)
  const [activeMediaModal, setActiveMediaModal] = useState(null);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    name: user?.name || 'Aarav Sharma',
    role: user?.role || 'BAMS Scholar & Ayush Research Fellow',
    id: user?.id || 'NIA/AY/2026/0491',
    email: user?.email || 'aarav.sharma@nia.ac.in',
    institution: user?.institution || 'National Institute of Ayurveda (NIA), Jaipur',
    degree: user?.degree || 'BAMS (Final Year 2026)',
    location: user?.location || 'Jaipur, Rajasthan, India',
    readinessScore: user?.readiness ? parseInt(user.readiness) : 88,
    bio: user?.bio || 'Pioneering evidence-based Ayurvedic medicine, digital Nadi Pariksha diagnostics, and botanical extraction HPLC standardization. Fast-tracking Ayush academic research to clinical industry applications.',
    phone: '+91 98765 43210',
    abhaId: user?.abhaId || '91-4402-8819-2041',
    ncismReg: user?.ncismReg || 'NCISM/AYU/RJ/2022/9912',
    cgpa: user?.cgpa || '8.94 / 10.0 (Honors)',
    batch: '2021 - 2026',
    preceptor: user?.preceptor || 'Prof. Meenakshi Joshi (HOD Dravyaguna)',
    avatar: user?.avatar || 'AS',
    avatarImage: user?.avatarImage || aaravAvatar,
    coverImage: user?.coverImage || 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80',
    verificationHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  });

  const [editForm, setEditForm] = useState({ ...profileData });

  // Sync profile when user prop changes
  useEffect(() => {
    if (user) {
      setProfileData(prev => ({
        ...prev,
        name: user.name || prev.name,
        role: user.role || prev.role,
        id: user.id || prev.id,
        email: user.email || prev.email,
        institution: user.institution || prev.institution,
        degree: user.degree || prev.degree,
        avatar: user.avatar || prev.avatar,
        avatarImage: user.avatarImage || prev.avatarImage,
        readinessScore: user.readiness ? parseInt(user.readiness) : prev.readinessScore
      }));
      setEditForm(prev => ({
        ...prev,
        name: user.name || prev.name,
        role: user.role || prev.role,
        id: user.id || prev.id,
        email: user.email || prev.email,
        institution: user.institution || prev.institution,
        degree: user.degree || prev.degree,
        avatar: user.avatar || prev.avatar,
        avatarImage: user.avatarImage || prev.avatarImage
      }));
    }
  }, [user]);

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

      {/* Botanical Cover Banner */}
      <div 
        className="h-44 sm:h-60 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 relative overflow-hidden rounded-3xl mb-4 bg-cover bg-center transition-all duration-300 shadow-sm"
        style={{
          backgroundImage: profileData.coverImage ? `url(${profileData.coverImage})` : undefined
        }}
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-start pt-4 relative z-10">
          {/* Change Cover Photo Button */}
          {!isPublicView && (
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
                onClick={() => !isPublicView && openMediaModal('pfp')}
                title={isPublicView ? profileData.name : "Change Profile Photo"}
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

                  {!isPublicView && (
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Scholar
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 break-words">
                  {profileData.role}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-xs text-slate-500 font-medium mt-2 min-w-0 max-w-full">
                  <span className="flex items-center gap-1.5 min-w-0 max-w-full">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="break-words max-w-full">{profileData.institution}</span>
                  </span>
                  <span className="flex items-center gap-1.5 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{profileData.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons & Readiness Score */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              {/* Clean Skill Readiness Badge */}
              <div 
                className="flex items-center gap-3 bg-white border border-slate-200/90 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-2xs cursor-default"
                title="Clinical Readiness Index"
              >
                <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 44 44">
                    <circle cx="22" cy="22" r="17" stroke="#f1f5f9" strokeWidth="3.5" fill="none" />
                    <circle 
                      cx="22" cy="22" r="17" 
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
                  <span className="absolute text-[11px] font-extrabold text-slate-900 tracking-tight">
                    {profileData.readinessScore}%
                  </span>
                </div>

                <div className="min-w-0 pr-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Readiness
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight block">
                    Clinical Ready
                  </span>
                </div>
              </div>

              {!isPublicView ? (
                <button
                  onClick={() => setIsEditingBio(true)}
                  className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-sm border border-emerald-700/50"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavigate && onNavigate('messages')}
                  className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-sm border border-emerald-700/50"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Message Scholar</span>
                </button>
              )}
            </div>

          </div>

          {/* About Section */}
          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div 
                onClick={() => toggleSection('about')}
                className="flex items-center gap-2 cursor-pointer group select-none"
                title={openSections.about ? "Minimize About section" : "Expand About section"}
              >
                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-800 flex items-center gap-2 transition-colors">
                  <User className="w-4 h-4 text-emerald-700" />
                  <span>About</span>
                </h3>
                <span className="p-1 rounded-lg bg-slate-100 group-hover:bg-emerald-50 text-slate-500 group-hover:text-emerald-700 transition-colors flex items-center gap-1">
                  <span className="text-[10px] font-bold text-slate-500 group-hover:text-emerald-800">
                    {openSections.about ? 'Minimize' : 'Expand'}
                  </span>
                  <ChevronLeft 
                    className={`w-3.5 h-3.5 transition-transform duration-300 transform text-emerald-700 ${
                      openSections.about ? 'rotate-0' : '-rotate-90'
                    }`} 
                  />
                </span>
                {!openSections.about && (
                  <span className="text-[11px] text-slate-400 font-medium italic">
                    (minimized)
                  </span>
                )}
              </div>
              {!isPublicView && (
                <button
                  type="button"
                  onClick={() => setIsEditingBio(true)}
                  className="text-emerald-800 hover:text-emerald-950 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                  title="Edit About Bio"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              )}
            </div>
            {openSections.about && (
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200">
                {profileData.bio}
              </p>
            )}
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

        {/* Vertically Scrollable Content Sections */}
        <div className="mt-8 space-y-6">

          {/* Quick Expand / Minimize All Control Bar */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Profile Sections
            </span>
            <button
              type="button"
              onClick={areAllOpen ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 active:scale-95 text-slate-700 hover:text-emerald-900 text-xs font-bold border border-slate-200/90 shadow-2xs transition-all cursor-pointer group"
              title={areAllOpen ? "Minimize all sections" : "Expand all sections"}
            >
              <ChevronLeft 
                className={`w-3.5 h-3.5 transition-transform duration-300 text-emerald-700 ${
                  areAllOpen ? 'rotate-0' : '-rotate-90'
                }`} 
              />
              <span>{areAllOpen ? 'Minimize All' : 'Expand All'}</span>
            </button>
          </div>
          
          {/* SECTION 1: 6-AXIS AYUSH RADAR, ACADEMIC QUALIFICATIONS & VERIFIED IDENTITY (PERMANENTLY OPEN - NO MINIMIZE OPTION) */}
          <section id="section-radar" className="scroll-mt-6 rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xs transition-all">
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200/60 shadow-2xs">
                  <Award className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                    Ayush 6-Axis Competency Radar &amp; Qualifications
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Core competency benchmarks, institutional records &amp; verified identities
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  6 Evaluated Axes
                </span>
              </div>
            </div>

            {/* Permanent Content (No Minimize Option) */}
            <div className="mt-6 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Real 6-Axis Ayush Radar Chart & Academic Records */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    {/* Real 6-Axis Radar Chart Component (Seamless plain mode) */}
                    <AyushSixAxisRadarChart skillMatrix={skillMatrix} plain={true} />

                    {/* Academic Profile & Institutional Records (Differentiated Prestige Dossier Layout) */}
                    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
                      {/* Institutional Dossier Header */}
                      <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50/90 via-white to-emerald-50/30 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold shadow-sm shadow-emerald-700/20 shrink-0">
                            <GraduationCap className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                                Academic Dossier &amp; Statutory Records
                              </h4>
                            </div>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                              National Institute of Ayurveda (NIA), Jaipur · Batch {profileData.batch}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                            NCISM Accredited
                          </span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-5">
                        
                        {/* Dossier Level 1: Primary Academic Qualification & Academic Standing Banner */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                                Degree &amp; Clinical Program
                              </span>
                              <span className="text-[10px] font-semibold text-slate-500">
                                Phase IV (Final Year Residency)
                              </span>
                            </div>
                            <h5 className="text-lg font-black text-slate-900 tracking-tight">
                              {profileData.degree}
                            </h5>
                            <p className="text-xs text-slate-600 font-medium">
                              Ayurvedic Clinical Medicine, Dravyaguna Phytochemistry &amp; Shalya Chikitsa
                            </p>
                            <p className="text-xs text-slate-500 pt-1 flex items-center gap-1.5">
                              <span>Academic Mentor:</span>
                              <strong className="text-slate-800 font-semibold">{profileData.preceptor}</strong>
                            </p>
                          </div>

                          {/* Academic Merit Badge */}
                          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center p-3 sm:p-3.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs shrink-0 md:min-w-[170px]">
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-black text-slate-900 tracking-tight">8.94</span>
                              <span className="text-xs font-bold text-slate-400">/ 10.0 CGPA</span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 mt-1">
                              <Award className="w-3 h-3 text-emerald-600" /> Top 2% Honors
                            </span>
                          </div>
                        </div>

                        {/* Dossier Level 2: Dual Statutory Licensure & Digital Health Identifiers */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          
                          {/* Statutory Licensure Card */}
                          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 transition-colors shadow-2xs space-y-2.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/60">
                                  <ShieldCheck className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                                  Statutory Practitioner Registry
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80">
                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Active
                              </span>
                            </div>

                            <div className="flex items-center justify-between bg-slate-50/90 px-3 py-2 rounded-xl border border-slate-200/70">
                              <span className="font-mono font-bold text-xs sm:text-sm text-slate-900 select-all tracking-wide">
                                {profileData.ncismReg}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleCopy(profileData.ncismReg, 'ncism')}
                                className="p-1 rounded-md text-slate-400 hover:text-emerald-700 hover:bg-white transition-colors cursor-pointer"
                                title="Copy NCISM Registration ID"
                              >
                                {copiedField === 'ncism' ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>

                            <p className="text-[11px] text-slate-500 font-medium">
                              National Commission for Indian System of Medicine (NCISM)
                            </p>
                          </div>

                          {/* Digital Health ID Card */}
                          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-colors shadow-2xs space-y-2.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200/60">
                                  <FileText className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                                  National ABHA Health ID
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/80">
                                <ShieldCheck className="w-2.5 h-2.5 text-teal-600" /> DigiLocker
                              </span>
                            </div>

                            <div className="flex items-center justify-between bg-slate-50/90 px-3 py-2 rounded-xl border border-slate-200/70">
                              <span className="font-mono font-bold text-xs sm:text-sm text-slate-900 select-all tracking-wide">
                                {profileData.abhaId}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleCopy(profileData.abhaId, 'abha')}
                                className="p-1 rounded-md text-slate-400 hover:text-teal-700 hover:bg-white transition-colors cursor-pointer"
                                title="Copy ABHA ID"
                              >
                                {copiedField === 'abha' ? (
                                  <Check className="w-3.5 h-3.5 text-teal-700" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>

                            <p className="text-[11px] text-slate-500 font-medium">
                              Ayushman Bharat Digital Mission (ABDM) Healthcare Registry
                            </p>
                          </div>

                        </div>

                        {/* Dossier Trust Ledger Strip */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-100">
                          <span className="flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Statutory records verified by Ayush Academic &amp; Clinical Council
                          </span>
                          <span className="font-mono text-[10px] text-slate-400 truncate">
                            SHA-256: {profileData.verificationHash.slice(0, 16)}...
                          </span>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Sidebar Credentials */}
                  <div className="lg:col-span-4 space-y-6">
                    
                    {/* Official Contacts (Matching Container Block System) */}
                    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200/60 shadow-2xs">
                            <ShieldCheck className="w-4 h-4 text-emerald-700" />
                          </div>
                          <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">
                            Verified Contact &amp; Identity
                          </h4>
                        </div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Active
                        </span>
                      </div>

                      <div className="space-y-3">
                        {/* University Enrollment Block */}
                        <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                              University Enrollment Roll
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(profileData.id, 'id')}
                              className="text-slate-400 hover:text-emerald-700 p-1 rounded-md hover:bg-white cursor-pointer transition-colors"
                              title="Copy Enrollment Roll"
                            >
                              {copiedField === 'id' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                          <span className="font-mono font-bold text-sm text-slate-900 block select-all">
                            {profileData.id}
                          </span>
                        </div>

                        {/* Official Institutional Email Block */}
                        <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                              Official Institutional Email
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(profileData.email, 'email')}
                              className="text-slate-400 hover:text-emerald-700 p-1 rounded-md hover:bg-white cursor-pointer transition-colors"
                              title="Copy Email"
                            >
                              {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                          <a 
                            href={`mailto:${profileData.email}`} 
                            className="font-semibold text-xs text-emerald-900 hover:text-emerald-700 hover:underline truncate block"
                          >
                            {profileData.email}
                          </a>
                        </div>

                        {/* Contact Phone Block */}
                        <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                              Contact Number
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">
                              Verified
                            </span>
                          </div>
                          <span className="font-bold text-xs sm:text-sm text-slate-900 block">
                            {profileData.phone}
                          </span>
                        </div>

                        {/* Campus Location Block */}
                        <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                            Clinical Campus Location
                          </span>
                          <span className="font-bold text-xs sm:text-sm text-slate-900 block">
                            {profileData.location}
                          </span>
                        </div>

                        {/* Bottom Micro Security Seal */}
                        <div className="pt-2.5 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-400 border-t border-slate-100">
                          <Lock className="w-3 h-3 text-emerald-700" />
                          <span>Tamper-evident Ayush Scholar Identity</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
          </section>

          {/* SECTION 2: VERIFIED CERTIFICATIONS & DIGITAL BADGES */}
          <section id="section-badges" className="scroll-mt-6 rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xs transition-all">
            <div 
              onClick={() => toggleSection('badges')}
              className="flex items-center justify-between cursor-pointer group select-none transition-colors"
              title={openSections.badges ? "Click to minimize section" : "Click to expand section"}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200/60 shadow-2xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-800 transition-colors flex items-center gap-2">
                    Verified Certifications &amp; Digital Skill Badges
                  </h3>
                  {!openSections.badges && (
                    <p className="text-xs text-slate-500 mt-0.5 font-normal">
                      {badges.length} Verified Credentials · AIIA, Dabur, CCRAS, NHA · Click to expand
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200 hidden sm:inline-block">
                  {badges.length} Badges
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection('badges');
                  }}
                  className="p-2 rounded-xl bg-slate-100 group-hover:bg-emerald-100/80 text-slate-700 group-hover:text-emerald-900 transition-all border border-slate-200/80 shadow-2xs cursor-pointer flex items-center gap-1.5"
                  title={openSections.badges ? "Minimize section" : "Expand section"}
                >
                  <span className="text-[11px] font-bold px-1 hidden md:inline text-slate-500 group-hover:text-emerald-800">
                    {openSections.badges ? 'Minimize' : 'Expand'}
                  </span>
                  <ChevronLeft 
                    className={`w-4 h-4 transition-transform duration-300 transform text-emerald-700 ${
                      openSections.badges ? 'rotate-0' : '-rotate-90'
                    }`} 
                  />
                </button>
              </div>
            </div>

            {/* Collapsible Content */}
            {openSections.badges && (
              <div className="mt-6 pt-5 border-t border-slate-100 animate-in fade-in duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badges.map((b, idx) => (
                    <div key={idx} className="bg-slate-50/70 p-5 rounded-3xl border border-slate-200/80 shadow-2xs space-y-3 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <span className="p-2.5 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100">
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
                      <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                        <span>{b.code}</span>
                        <span>{b.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* SECTION 3: SCHOLAR COMMUNITY POSTS & CASE ANALYTICS */}
          <section id="section-posts" className="scroll-mt-6 rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-xs transition-all">
            <div 
              onClick={() => toggleSection('posts')}
              className="flex items-center justify-between cursor-pointer group select-none transition-colors"
              title={openSections.posts ? "Click to minimize section" : "Click to expand section"}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200/60 shadow-2xs group-hover:scale-105 transition-transform">
                  <User className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-800 transition-colors flex items-center gap-2">
                    Scholar Posts, Clinical Insights &amp; Reach Analytics
                  </h3>
                  {!openSections.posts && (
                    <p className="text-xs text-slate-500 mt-0.5 font-normal">
                      4,280 Impressions · 399 Engagements · {staticUserPosts.length} Case Logs · Click to expand
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200 hidden sm:inline-block">
                  Analytics &amp; Posts
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSection('posts');
                  }}
                  className="p-2 rounded-xl bg-slate-100 group-hover:bg-emerald-100/80 text-slate-700 group-hover:text-emerald-900 transition-all border border-slate-200/80 shadow-2xs cursor-pointer flex items-center gap-1.5"
                  title={openSections.posts ? "Minimize section" : "Expand section"}
                >
                  <span className="text-[11px] font-bold px-1 hidden md:inline text-slate-500 group-hover:text-emerald-800">
                    {openSections.posts ? 'Minimize' : 'Expand'}
                  </span>
                  <ChevronLeft 
                    className={`w-4 h-4 transition-transform duration-300 transform text-emerald-700 ${
                      openSections.posts ? 'rotate-0' : '-rotate-90'
                    }`} 
                  />
                </button>
              </div>
            </div>

            {/* Collapsible Content */}
            {openSections.posts && (
              <div className="mt-6 pt-5 border-t border-slate-100 animate-in fade-in duration-300 space-y-6">
                {/* Clean Analytics Overview Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl">
                    <span className="text-[11px] text-slate-500 font-semibold block">Total Impressions</span>
                    <span className="text-xl font-extrabold text-slate-900 block mt-0.5">4,280</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">+18% this week</span>
                  </div>

                  <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl">
                    <span className="text-[11px] text-slate-500 font-semibold block">Engagements</span>
                    <span className="text-xl font-extrabold text-slate-900 block mt-0.5">399</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">9.3% engagement</span>
                  </div>

                  <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl">
                    <span className="text-[11px] text-slate-500 font-semibold block">Faculty Comments</span>
                    <span className="text-xl font-extrabold text-slate-900 block mt-0.5">9</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Verified threads</span>
                  </div>

                  <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl">
                    <span className="text-[11px] text-slate-500 font-semibold block">Recruiter Views</span>
                    <span className="text-xl font-extrabold text-slate-900 block mt-0.5">128</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Industry leads</span>
                  </div>
                </div>

                {/* Per-Post Breakdown */}
                <div className="space-y-3 pt-2">

                  {staticUserPosts.map((post) => (
                    <div key={post.id} className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">{post.time}</span>
                      </div>
                      
                      <h4 className="font-bold text-slate-900 text-base mb-1">{post.title}</h4>
                      <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">{post.snippet}</p>

                      <div className="bg-white p-3 rounded-xl border border-slate-200/60 mb-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs shadow-2xs">
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
              </div>
            )}
          </section>

        </div>

      </div>

    </div>
  );
}

/**
 * Universal Profile Page Router
 * Seamlessly routes to the designated stakeholder profile:
 * - Company Brand Profile (CompanyProfileView)
 * - Faculty Scholar Profile (FacultyProfileView)
 * - College Institutional Profile (CollegeProfileView)
 * - Ministry Regulatory Profile (MinistryProfileView)
 * - Student Practitioner Portfolio (StudentProfileView)
 */
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

  // 1. COMPANY BRAND PROFILE (COMING SOON)
  if (roleType === 'company') {
    return <ComingSoonPage title="Pharma & Industry Portal" onBack={onBack} />;
  }

  // 2. FACULTY SCHOLAR PROFILE
  if (roleType === 'faculty') {
    return <FacultyProfileView user={targetEntity} onNavigate={onNavigate} onBack={onBack} isPublicView={Boolean(viewingUser)} />;
  }

  // 3. COLLEGE & INSTITUTIONAL PROFILE (COMING SOON)
  if (roleType === 'college') {
    return <ComingSoonPage title="College & Institute Hub" onBack={onBack} />;
  }

  // 4. MINISTRY & GOVERNMENT REGULATORY PROFILE
  if (roleType === 'admin') {
    return <MinistryProfileView user={targetEntity} onNavigate={onNavigate} onBack={onBack} isPublicView={Boolean(viewingUser)} />;
  }

  // 5. STUDENT PRACTITIONER PORTFOLIO
  return (
    <StudentProfileView
      user={targetEntity}
      onNavigate={onNavigate}
      onBack={onBack}
      isPublicView={Boolean(viewingUser)}
    />
  );
}

export default ProfilePage;
