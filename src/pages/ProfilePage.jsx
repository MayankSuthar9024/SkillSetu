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
  Check
} from 'lucide-react';

import { CompanyProfileView } from '../components/portals/CompanyProfileView';

export function ProfilePage({ onNavigate, currentUser, activePortalId }) {
  const isCompanyUser = activePortalId === 'company' || 
    currentUser?.role?.toLowerCase().includes('recruiter') || 
    currentUser?.institution?.toLowerCase().includes('dabur') || 
    currentUser?.id?.includes('DABUR');

  if (isCompanyUser) {
    return <CompanyProfileView user={currentUser} onNavigate={onNavigate} />;
  }

  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [saveSuccessToast, setSaveSuccessToast] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(false);
  
  // Media Upload Modal state ('pfp' | 'banner' | null)
  const [activeMediaModal, setActiveMediaModal] = useState(null);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'Aarav Sharma',
    role: currentUser?.role || 'BAMS Scholar & Ayush Research Fellow',
    id: currentUser?.id || 'NIA/AY/2026/0491',
    email: currentUser?.email || 'aarav.sharma@nia.ac.in',
    institution: currentUser?.institution || 'National Institute of Ayurveda (NIA), Jaipur',
    degree: currentUser?.degree || 'BAMS (Final Year 2026)',
    location: 'Jaipur, Rajasthan, India',
    readinessScore: 88,
    bio: 'Pioneering evidence-based Ayurvedic medicine, digital Nadi Pariksha diagnostics, and botanical extraction HPLC standardization. Fast-tracking Ayush academic research to clinical industry applications.',
    phone: '+91 98765 43210',
    abhaId: '91-4402-8819-2041',
    ncismReg: 'NCISM/AYU/RJ/2022/9912',
    cgpa: '8.94 / 10.0 (Honors)',
    batch: '2021 - 2026',
    preceptor: 'Prof. Meenakshi Joshi (HOD Dravyaguna)',
    avatar: currentUser?.avatar || 'AS',
    avatarImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80',
    verificationHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  });

  // Sync profile when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setProfileData(prev => ({
        ...prev,
        name: currentUser.name || prev.name,
        role: currentUser.role || prev.role,
        id: currentUser.id || prev.id,
        email: currentUser.email || prev.email,
        institution: currentUser.institution || prev.institution,
        degree: currentUser.degree || prev.degree,
        avatar: currentUser.avatar || prev.avatar,
        readinessScore: currentUser.readiness ? parseInt(currentUser.readiness) : prev.readinessScore
      }));
      setEditForm(prev => ({
        ...prev,
        name: currentUser.name || prev.name,
        role: currentUser.role || prev.role,
        id: currentUser.id || prev.id,
        email: currentUser.email || prev.email,
        institution: currentUser.institution || prev.institution,
        degree: currentUser.degree || prev.degree,
        avatar: currentUser.avatar || prev.avatar
      }));
    }
  }, [currentUser]);

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

  const handleDownloadDossier = () => {
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

  const clinicalRotations = [
    { department: 'Kayachikitsa (Internal Medicine OPD)', duration: '4 Months', hospital: 'AIIA Apex Clinical Hospital', casesSeen: 240, status: 'Completed' },
    { department: 'Panchakarma Therapy & IPD Care', duration: '3 Months', hospital: 'NIA Hospital, Jaipur', casesSeen: 180, status: 'Completed' },
    { department: 'Shalya Tantra (Surgical & Kshara Sutra)', duration: '2 Months', hospital: 'National Institute Hospital', casesSeen: 95, status: 'Completed' },
    { department: 'Dravyaguna Phytochemistry Lab', duration: '2 Months', hospital: 'AIIA Central Quality Testing Lab', casesSeen: 110, status: 'Completed' },
    { department: 'Tele-Ayush Community Healthcare', duration: '1 Month', hospital: 'Ministry of Ayush eSanjeevani Unit', casesSeen: 150, status: 'In Progress' }
  ];

  const badges = [
    { title: 'Digital Nadi Pariksha Master', issuer: 'All India Institute of Ayurveda', date: 'Jan 2026', code: 'AYUSH-BADGE-9912', status: 'Active' },
    { title: 'HPLC Herbal Quality Specialist', issuer: 'Dabur R&D Laboratory', date: 'Dec 2025', code: 'DABUR-QC-8821', status: 'Active' },
    { title: 'Schedule T GMP Cleanroom Protocol', issuer: 'Ayush Manufacturing Council', date: 'Dec 2025', code: 'GMP-SCH-T-4401', status: 'Active' },
    { title: 'Ayush GCP Clinical Trial Protocol', issuer: 'CCRAS Ministry of Ayush', date: 'Nov 2025', code: 'CCRAS-GCP-7714', status: 'Active' },
    { title: 'Ayurvedic Tele-Medicine Certified', issuer: 'National Health Authority', date: 'Oct 2025', code: 'NHA-TELE-4091', status: 'Active' },
    { title: 'HSSC Skill Qualification Pack 4', issuer: 'Healthcare Sector Skill Council', date: 'Sep 2025', code: 'HSSC-NQR-8802', status: 'Active' }
  ];

  const publications = [
    {
      title: 'Comparative Phytochemical Fingerprinting of Withania somnifera using High-Performance Thin-Layer Chromatography (HPTLC)',
      journal: 'Journal of Ayurveda and Integrative Medicine (JAIM)',
      year: '2025',
      doi: '10.1016/j.jaim.2025.100912',
      badge: 'Peer-Reviewed'
    },
    {
      title: 'Correlative Study of Radial Arterial Pulse Wave Analysis with Tridosha Phenotypic Classifications',
      journal: 'CCRAS SPARK-4.0 National Research Grant Monograph',
      year: '2025',
      doi: '10.5530/ccras.spark.2025.0491',
      badge: 'Sponsored Grant'
    },
    {
      title: 'Heavy Metal Remediation and Quality Standards in Rasaushadhi Preparations: A Schedule T Perspective',
      journal: 'International Journal of Ayurvedic Medicine',
      year: '2024',
      doi: '10.47552/ijam.v15i3.2201',
      badge: 'Industry Standard'
    }
  ];

  const endorsements = [
    {
      name: 'Prof. Meenakshi Joshi',
      designation: 'Professor & HOD (Dravyaguna), AIIA New Delhi',
      date: 'Feb 2026',
      quote: 'Aarav shows rigorous diagnostic discipline in Nadi Pariksha and possesses exceptional laboratory command over herbal standardized extracts. Consistently top decile in clinical rotations.',
      avatar: 'MJ'
    },
    {
      name: 'Dr. Vikram Sethi',
      designation: 'Director of Formulations & R&D, Dabur India Ltd',
      date: 'Jan 2026',
      quote: 'Demonstrated outstanding grasp of Schedule T cleanroom practices and HPLC validation workflows during our industry talent evaluation sprint.',
      avatar: 'VS'
    }
  ];

  const userPosts = [
    {
      id: 2,
      title: 'Earned Level 3 Certification in Herbal Standardization & HPLC Quality Control!',
      time: '5 hours ago',
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
      id: 10,
      title: 'Comparative Case Analysis: Punarnavadi Kwath in Renal Fluid Balance',
      time: '3 days ago',
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
        <div className="fixed top-20 right-5 z-50 bg-emerald-800 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-top">
          <Check className="w-4 h-4 text-emerald-300" />
          <span>Profile details saved successfully!</span>
        </div>
      )}

      {downloadSuccessToast && (
        <div className="fixed top-20 right-5 z-50 bg-emerald-800 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in slide-in-from-top">
          <Download className="w-4 h-4 text-emerald-300" />
          <span>Verified Scholar Dossier (PDF) generated with SHA-256 seal.</span>
        </div>
      )}

      {/* Fresh, Light Botanical Ayush Cover Banner (No Dark Blue/Black Overlays) */}
      <div 
        className="h-44 sm:h-60 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 relative overflow-hidden rounded-3xl mb-4 bg-cover bg-center transition-all duration-300 shadow-sm"
        style={{
          backgroundImage: profileData.coverImage ? `url(${profileData.coverImage})` : undefined
        }}
      >
        <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-start pt-4 relative z-10">
          {/* Edit Cover Banner Button */}
          <button
            onClick={() => openMediaModal('banner')}
            className="bg-white/80 hover:bg-white text-emerald-950 font-bold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-emerald-200/60 cursor-pointer shadow-xs"
            title="Change Cover Photo"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>Change Cover</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleDownloadDossier}
              className="bg-white/80 hover:bg-white text-emerald-950 font-bold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-emerald-200/60 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">Export Dossier (PDF)</span>
            </button>
            <button
              onClick={() => onNavigate('feed')}
              className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-300" />
              <span>Community Feed</span>
            </button>
          </div>
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
                onClick={() => openMediaModal('pfp')}
                title="Change Profile Photo"
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

                  <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-bold gap-1">
                    <Camera className="w-6 h-6 text-emerald-300" />
                    <span>Change Photo</span>
                  </div>
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
              <div className="bg-emerald-50 border border-emerald-200/80 p-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-extrabold text-base flex items-center justify-center shadow-xs shrink-0">
                  {profileData.readinessScore}%
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    Overall Skill Score
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Clinical Ready Level 3
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsEditingBio(true)}
                className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
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
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">855+</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Clinical Cases Logged</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-teal-800">3 Papers</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Publications</span>
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
                    Drag & Drop your {activeMediaModal === 'pfp' ? 'profile photo' : 'cover banner'} here
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
                  Edit Profile & Credentials
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
                
                {/* Media Shortcuts */}
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

        {/* Tab Navigation */}
        <div className="mt-6 flex items-center gap-1 sm:gap-2 border-b border-slate-200 overflow-x-auto no-scrollbar pb-0.5">
          {[
            { id: 'overview', label: 'Overview & Competencies', icon: Award },
            { id: 'rotations', label: 'Clinical Rotations', icon: BookOpen },
            { id: 'badges', label: 'Certifications & Ledger', icon: ShieldCheck },
            { id: 'research', label: 'Research & Papers', icon: FileText },
            { id: 'endorsements', label: 'Preceptor Recommendations', icon: Sparkles },
            { id: 'posts', label: 'Posts & Analytics', icon: User }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 border-b-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'border-emerald-800 text-emerald-900 bg-white/60 rounded-t-xl'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="mt-5">
          
          {/* TAB 1: OVERVIEW & COMPETENCIES */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Skill Matrix Column */}
              <div className="lg:col-span-8 space-y-6">
                
                <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-700" />
                      6-Axis Ayush Competency Breakdown
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200">
                      Verified Diagnostic
                    </span>
                  </div>

                  <div className="space-y-4">
                    {skillMatrix.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-1 text-xs">
                          <span className="font-bold text-slate-800 truncate pr-2">{item.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[10px] text-slate-500 font-semibold">{item.percentile} Percentile</span>
                            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md hidden sm:inline">
                              {item.status}
                            </span>
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.score}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-emerald-700 to-teal-500 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <span className="text-xs text-slate-500 font-medium">Mapped to HSSC National Occupational Standards (NOS)</span>
                    <button 
                      onClick={() => onNavigate('skill')}
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Take Diagnostic Assessment</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Academic Background & Qualifications */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-emerald-700" />
                    Academic Profile & Institutional Records
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
                        <CheckCircle2 className="w-3.5 h-3.5" /> License Active
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                      <span className="text-slate-400 font-semibold block text-[11px]">ABHA Healthcare ID</span>
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
                  <h3 className="font-bold text-slate-900 text-sm mb-3">Verified Contact & Identity</h3>
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

                {/* Industry Placement Match */}
                <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl p-5 sm:p-6 shadow-xs">
                  <Sparkles className="w-5 h-5 text-emerald-300 mb-2" />
                  <h3 className="font-bold text-base">Match Score for R&D Fellowship</h3>
                  <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                    Your verified Schedule T GMP and HPLC skills match 94% of criteria for Dabur, Himalaya & AIIA Fellow postings.
                  </p>
                  <button
                    onClick={() => onNavigate('opportunities')}
                    className="mt-4 w-full bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    View Matching Job Openings
                  </button>
                </div>

                {/* Cryptographic Ledger Public Proof */}
                <div className="bg-white rounded-3xl border border-emerald-200/80 p-5 shadow-xs text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-emerald-700" />
                      SHA-256 Ledger Proof
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-200/60 break-all">
                    {profileData.verificationHash}
                  </p>
                  <button
                    onClick={handleDownloadDossier}
                    className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Cryptographic Dossier</span>
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: CLINICAL ROTATIONS & CASES */}
          {activeTab === 'rotations' && (
            <div className="space-y-6">
              
              {/* Rotations Table */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-700" />
                      Completed Clinical Rotations & Postings
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Formal rotatory clinical training supervised by senior Ayush preceptors.</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                        <th className="pb-3 pr-4">Clinical Department</th>
                        <th className="pb-3 pr-4">Duration</th>
                        <th className="pb-3 pr-4">Hospital Center</th>
                        <th className="pb-3 pr-4">Cases Seen</th>
                        <th className="pb-3 text-right">Preceptor Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {clinicalRotations.map((rot, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 pr-4 font-bold text-slate-900">{rot.department}</td>
                          <td className="py-3.5 pr-4 text-slate-600">{rot.duration}</td>
                          <td className="py-3.5 pr-4 text-slate-600">{rot.hospital}</td>
                          <td className="py-3.5 pr-4 font-bold text-emerald-800">{rot.casesSeen} Patients</td>
                          <td className="py-3.5 text-right">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              rot.status === 'Completed' 
                                ? 'bg-emerald-100 text-emerald-900' 
                                : 'bg-amber-100 text-amber-900'
                            }`}>
                              {rot.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Patient Case Log */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-base mb-1">Preceptor-Verified Patient Case Logs</h3>
                <p className="text-xs text-slate-500 mb-4">
                  Clinical case records and therapeutic protocols verified by institutional preceptors.
                </p>

                {[
                  { title: 'Case Study #801: Amavata (Rheumatoid Arthritis) Protocol', date: 'Feb 14, 2026', preceptor: 'Prof. Meenakshi Joshi', diagnosis: 'Vata-Kapha Prakopa in Asthi-Majja', formulation: 'Simhanada Guggulu + Rasnasaptaka Kwath', outcome: '72% reduction in DAS-28 score over 28 days.' },
                  { title: 'Case Study #762: Twak Vikara (Psoriasis) Shodhana Protocol', date: 'Jan 28, 2026', preceptor: 'Dr. R. K. Sharma', diagnosis: 'Tridoshaja Kustha with Kapha predominance', formulation: 'Vamana Karma followed by Mahatiktaka Ghrita', outcome: 'PASI score improved from 18.4 to 4.2.' },
                  { title: 'Case Study #719: Medoroga (Metabolic Balance & Dyslipidemia)', date: 'Dec 18, 2025', preceptor: 'Dr. Ananya Vaidya', diagnosis: 'Medo Dhatu Dushti with Medovaha Srotas Blockage', formulation: 'Triphala Guggulu + Varunadi Kashaya', outcome: 'Serum triglycerides reduced by 22% over 6 weeks.' }
                ].map((cs, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">{cs.title}</h4>
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full shrink-0">
                        Preceptor Approved
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      <div><strong className="text-slate-800">Doshic Diagnosis:</strong> {cs.diagnosis}</div>
                      <div><strong className="text-slate-800">Herbal Regimen:</strong> {cs.formulation}</div>
                    </div>
                    <div className="text-xs text-emerald-900 font-semibold bg-emerald-50/60 p-2 rounded-xl border border-emerald-100 mt-1">
                      <strong>Clinical Outcome:</strong> {cs.outcome}
                    </div>
                    <span className="text-[10px] text-slate-400 block pt-1">Preceptor: {cs.preceptor} · Logged: {cs.date}</span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 3: BADGES & CERTIFICATIONS */}
          {activeTab === 'badges' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold shadow-xs">
                        <Award className="w-5 h-5 text-emerald-300" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                        Blockchain Verified
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{badge.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{badge.issuer}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>Issued: {badge.date}</span>
                    <span className="text-emerald-700 font-bold">{badge.code}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: RESEARCH & PUBLICATIONS */}
          {activeTab === 'research' && (
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-emerald-700" />
                  Peer-Reviewed Publications & National Grants
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Ayush academic research contributions in phytochemistry, pulse diagnostics, and herbal drug standardization.
                </p>

                <div className="space-y-4">
                  {publications.map((pub, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">{pub.title}</h4>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md shrink-0">
                          {pub.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        <strong className="text-slate-800">{pub.journal}</strong> ({pub.year})
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px]">
                        <span className="font-mono text-slate-500">DOI: {pub.doi}</span>
                        <button 
                          onClick={handleDownloadDossier}
                          className="text-emerald-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Download Pre-print</span>
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PRECEPTOR RECOMMENDATIONS */}
          {activeTab === 'endorsements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {endorsements.map((end, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white font-bold flex items-center justify-center shadow-xs">
                        {end.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{end.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{end.designation}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                      "{end.quote}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Verified Academic Endorsement</span>
                    <span>{end.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: POSTS & ANALYTICS */}
          {activeTab === 'posts' && (
            <div className="space-y-6">
              
              {/* Analytics Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 element-glow-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[10px] font-bold text-emerald-800 uppercase tracking-wider w-fit">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                      Post Analytics & Reach Overview
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
                      4,280 Total Post Impressions
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Your clinical case posts reached +24% more preceptors & recruiters this month.
                    </p>
                  </div>

                  <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs">
                    Top 5% Ayush Scholar Content
                  </span>
                </div>

                {/* Performance Metric Grid */}
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
                  Your Posts & Individual Analytics
                </h4>

                {userPosts.map((post) => (
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
                        <span className="text-[10px] text-slate-400 font-bold block">Likes</span>
                        <span className="font-bold text-rose-600 flex items-center justify-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-rose-600" />
                          {post.likes}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block">Shares</span>
                        <span className="font-bold text-teal-700 flex items-center justify-center gap-1">
                          <MessageSquare className="w-3.5 h-3.5" />
                          {post.shares}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                      <span className="text-[11px] text-slate-500">
                        Top Audience: <strong className="text-slate-800">{post.topAudience}</strong>
                      </span>

                      <button
                        onClick={() => onNavigate('feed')}
                        className="text-emerald-800 font-bold hover:underline text-xs cursor-pointer"
                      >
                        View on Feed →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;
