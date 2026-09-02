import React, { useState, useRef } from 'react';
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
  Link as LinkIcon,
  X,
  TrendingUp,
  BarChart3,
  Eye
} from 'lucide-react';

export function ProfilePage({ onNavigate, currentUser }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingBio, setIsEditingBio] = useState(false);
  
  // Dedicated Media Upload Modal state ('pfp' | 'banner' | null)
  const [activeMediaModal, setActiveMediaModal] = useState(null);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'Aarav Sharma',
    role: currentUser?.role || 'BAMS Final Year Scholar & Ayush Research Fellow',
    id: currentUser?.id || 'NIA/AY/2026/0491',
    email: currentUser?.email || 'aarav.sharma@nia.ac.in',
    institution: currentUser?.institution || 'National Institute of Ayurveda (NIA), Jaipur',
    degree: currentUser?.degree || 'BAMS (Final Year 2026)',
    location: 'Jaipur, Rajasthan, India',
    readinessScore: 88,
    bio: 'Pioneering evidence-based Ayurvedic medicine, digital Nadi Pariksha diagnostics, and botanical extraction HPLC standardization. Fast-tracking Ayush academic research to clinical industry applications.',
    phone: '+91 98765 43210',
    avatar: currentUser?.avatar || 'AS',
    avatarImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80'
  });

  const [editForm, setEditForm] = useState({ ...profileData });

  const handleSaveBio = (e) => {
    e.preventDefault();
    setProfileData({ ...editForm });
    setIsEditingBio(false);
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

  const openMediaModal = (type) => {
    setActiveMediaModal(type);
  };

  const skillMatrix = [
    { name: 'Nadi Pariksha (Pulse Diagnostics)', score: 92, status: 'Mastered' },
    { name: 'Dravyaguna Phytochemistry & HPLC', score: 88, status: 'Verified' },
    { name: 'GCP Clinical Trial Protocols', score: 85, status: 'Verified' },
    { name: 'Panchakarma Clinical Management', score: 82, status: 'Proficient' },
    { name: 'Tele-Ayush & Digital Health Care', score: 90, status: 'Mastered' },
  ];

  const badges = [
    { title: 'Digital Nadi Pariksha Master', issuer: 'All India Institute of Ayurveda', date: 'Jan 2026', code: 'AYUSH-BADGE-9912' },
    { title: 'HPLC Herbal Quality Specialist', issuer: 'Dabur R&D Laboratory', date: 'Dec 2025', code: 'DABUR-QC-8821' },
    { title: 'Ayush GCP Research Protocol', issuer: 'CCRAS Ministry of Ayush', date: 'Nov 2025', code: 'CCRAS-GCP-7714' },
    { title: 'Ayurvedic Tele-Medicine Certified', issuer: 'National Health Authority', date: 'Oct 2025', code: 'NHA-TELE-4091' },
    { title: 'Panchakarma Clinical Intern', issuer: 'NIA Jaipur Apex Hospital', date: 'Aug 2025', code: 'NIA-CLIN-3329' },
    { title: 'Ethno-botanical Identification', issuer: 'Botanical Survey of India', date: 'Jul 2025', code: 'BSI-ETH-1120' },
  ];

  const userPosts = [
    {
      id: 2,
      title: 'Earned Level 3 Certification in Herbal Standardization & HPLC Quality Control!',
      time: '5 hours ago',
      category: 'Skill Achievement',
      likes: 215,
      comments: 1,
      shares: 54,
      views: '2,840',
      recruiterViews: 84,
      topAudience: 'Dabur R&D Mentors & AIIA Faculty',
      snippet: 'Super thrilled to complete the 4-week micro-sprint on Chromatographic Fingerprinting for Ashwagandha extracts under Dabur R&D Mentorship...'
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
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16 overflow-x-hidden">
      
      {/* Cover Backdrop with Image & Edit Banner Controls */}
      <div 
        className="h-44 sm:h-64 bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-900 relative overflow-hidden rounded-3xl mb-4 bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: profileData.coverImage ? `url(${profileData.coverImage})` : undefined
        }}
      >
        {profileData.coverImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
        )}

        <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-start pt-4 relative z-10">
          
          {/* Edit Cover Banner Button */}
          <button
            onClick={() => openMediaModal('banner')}
            className="bg-slate-900/80 hover:bg-slate-900 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-md"
            title="Drag & Drop or Change Cover Banner"
          >
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Edit Banner</span>
          </button>

          <button
            onClick={() => onNavigate('feed')}
            className="bg-white/20 hover:bg-white/30 text-white font-bold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer shadow-md"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Go to Feed</span>
          </button>
        </div>
      </div>

      {/* Main Profile Container */}
      <div className="max-w-6xl mx-auto -mt-16 sm:-mt-20 relative z-10 min-w-0 max-w-full overflow-hidden px-1 sm:px-0">
        
        {/* Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-8 shadow-md min-w-0 max-w-full overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 min-w-0 max-w-full">
            
            {/* Left Avatar & Core Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 min-w-0 max-w-full w-full">
              
              {/* Profile Avatar (PFP) with Edit Camera Overlay */}
              <div 
                className="relative shrink-0 group cursor-pointer"
                onClick={() => openMediaModal('pfp')}
                title="Click to Drag & Drop or change Profile Picture (PFP)"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-950 text-white font-extrabold text-2xl sm:text-4xl flex items-center justify-center border-4 border-white shadow-xl overflow-hidden relative">
                  {profileData.avatarImage ? (
                    <img 
                      src={profileData.avatarImage} 
                      alt={profileData.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <span>{profileData.avatar}</span>
                  )}

                  {/* Camera Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-extrabold gap-1">
                    <Camera className="w-6 h-6 text-emerald-400" />
                    <span>Change PFP</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-600 text-white p-1.5 rounded-xl border-2 border-white shadow-md z-10" title="SkillSetu Verified Scholar">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-600 text-white" />
                </div>
              </div>

              <div className="min-w-0 flex-1 w-full overflow-hidden">
                <div className="flex items-center gap-2 flex-wrap min-w-0 max-w-full">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight break-words max-w-full">
                    {profileData.name}
                  </h1>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    ABHA Verified
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

            {/* Right Action Buttons & Readiness Badge */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <div className="bg-emerald-50 border border-emerald-200/80 p-3 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-extrabold text-base flex items-center justify-center shadow-xs shrink-0">
                  {profileData.readinessScore}%
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    Overall Skill Score
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    Verified Ayush Scholar
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditingBio(true)}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bio text */}
          <div className="mt-5 pt-5 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Scholar Summary / Bio</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              "{profileData.bio}"
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-5 pt-5 border-t border-slate-100">
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">88%</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Readiness</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">6</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Verified Badges</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">14</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Clinical Cases</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-2xl text-center border border-slate-200/60">
              <span className="block text-lg sm:text-xl font-extrabold text-slate-900">480</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Connects</span>
            </div>
          </div>
        </div>

        {/* Dedicated Media Drag & Drop / URL / Preset Upload Modal */}
        {activeMediaModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-emerald-700" />
                  {activeMediaModal === 'pfp' ? 'Update Profile Picture (PFP)' : 'Update Cover Banner'}
                </h3>
                <button
                  onClick={() => setActiveMediaModal(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Clean Drag & Drop File Upload Area */}
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
                  <p className="font-extrabold text-sm text-slate-900">
                    Drag & Drop your {activeMediaModal === 'pfp' ? 'PFP photo' : 'cover banner image'} here
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    or <span className="text-emerald-700 underline font-bold">click to browse</span> files from computer/phone
                  </p>
                  <span className="inline-block mt-3 text-[10px] text-slate-400 font-semibold bg-white px-3 py-1 rounded-full border border-slate-200">
                    Supports PNG, JPG, WEBP, GIF
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Edit Profile Info Modal */}
        {isEditingBio && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-emerald-700" />
                  Edit Profile Details
                </h3>
                <button
                  onClick={() => setIsEditingBio(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveBio} className="mt-4 space-y-4">
                
                {/* Media Edit Shortcuts */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { setIsEditingBio(false); openMediaModal('pfp'); }}
                    className="p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-left transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 block leading-tight">Change PFP</span>
                      <span className="text-[10px] text-slate-500">Drag & Drop photo</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIsEditingBio(false); openMediaModal('banner'); }}
                    className="p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-xl text-left transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 text-teal-700 shrink-0" />
                    <div>
                      <span className="text-xs font-extrabold text-slate-900 block leading-tight">Edit Banner</span>
                      <span className="text-[10px] text-slate-500">Drag & Drop cover</span>
                    </div>
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Role / Designation</label>
                  <select
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    {[
                      'BAMS Final Year Scholar & Ayush Research Fellow',
                      'BAMS Undergraduate Scholar (1st-4th Year)',
                      'BAMS Clinical Intern (Rotatory Housemanship)',
                      'MD / MS (Ayurveda) Post-Graduate Scholar',
                      'Ayush Research Fellow (JRF / SRF - CCRAS)',
                      'Dravyaguna Phytochemistry & Herbal QC Specialist',
                      'Panchakarma Clinical Practitioner',
                      'Nadi Pariksha & Classical Pulse Specialist',
                      'Ayurveda Samhita & Siddhanta Scholar',
                      'B.Pharm (Ayush) Herbal Technologist',
                      'Junior Ayurvedic Medical Officer (AMO)',
                      'Tele-Ayush Digital Health Consultant',
                      'Rasashastra & Bhaishajya Kalpana Scholar',
                      'Ethno-botanical Field Researcher',
                      'Ayush Industrial R&D Quality Officer',
                      'Senior Ayurvedic Physician & Clinical Preceptor'
                    ].map((role, idx) => (
                      <option key={idx} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Institution</label>
                  <input
                    type="text"
                    value={editForm.institution}
                    onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Bio Summary</label>
                  <textarea
                    rows={3}
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsEditingBio(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-800 text-white px-5 py-2 text-xs font-bold rounded-xl hover:bg-emerald-900 cursor-pointer shadow-xs"
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
            { id: 'overview', label: 'Overview & Skills', icon: Award },
            { id: 'badges', label: 'Skill Badges', icon: ShieldCheck },
            { id: 'posts', label: 'My Posts', icon: User },
            { id: 'portfolio', label: 'Clinical Records', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 sm:px-5 py-2.5 border-b-2 font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer shrink-0 ${
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
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Skill Matrix Column */}
              <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-emerald-700" />
                  Ayush Skill Assessment Matrix
                </h3>

                <div className="space-y-4">
                  {skillMatrix.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1 text-xs">
                        <span className="font-extrabold text-slate-800 truncate pr-2">{item.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
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
                  <span className="text-xs text-slate-500 font-medium">Verified by SkillSetu Diagnostic Engine</span>
                  <button 
                    onClick={() => onNavigate('skill')}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Take Assessment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-soft">
                  <h3 className="font-extrabold text-slate-900 text-sm mb-3">Academic & Credentials</h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 font-semibold block">Degree Program</span>
                      <span className="font-bold text-slate-800">{profileData.degree}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Roll / Scholar ID</span>
                      <span className="font-bold text-slate-800">{profileData.id}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Official Contact</span>
                      <span className="font-bold text-slate-800 break-all">{profileData.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-semibold block">Verified Contact</span>
                      <span className="font-bold text-slate-800">{profileData.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-5 sm:p-6 shadow-soft">
                  <Sparkles className="w-5 h-5 text-emerald-400 mb-2" />
                  <h3 className="font-extrabold text-base">Match Score for R&D Fellowship</h3>
                  <p className="text-xs text-emerald-100 mt-1">
                    Your profile matches 94% of criteria for Dabur & AIIA Junior R&D Fellow postings.
                  </p>
                  <button
                    onClick={() => onNavigate('opportunities')}
                    className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-extrabold text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    View Matching Opportunities
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: BADGES */}
          {activeTab === 'badges' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold shadow-xs">
                        <Award className="w-5 h-5 text-emerald-300" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                        Blockchain Verified
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{badge.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{badge.issuer}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>Issued: {badge.date}</span>
                    <span>{badge.code}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: USER POSTS & ANALYTICS */}
          {activeTab === 'posts' && (
            <div className="space-y-6">
              
              {/* Overall Post Analytics Dashboard Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-5 sm:p-6 shadow-md">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 w-fit">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Post Analytics & Reach Overview
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">
                      4,280 Total Post Impressions
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Your clinical case posts reached +24% more preceptors & recruiters this month.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-500 text-emerald-950 text-xs font-black px-3 py-1.5 rounded-xl shadow-xs">
                      Top 5% Ayush Scholar Content
                    </span>
                  </div>
                </div>

                {/* Performance Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-2xl">
                    <span className="text-[11px] text-slate-400 font-semibold block">Total Views</span>
                    <span className="text-lg sm:text-xl font-extrabold text-white">4,280</span>
                    <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">↑ +18% this week</span>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-2xl">
                    <span className="text-[11px] text-slate-400 font-semibold block">Post Engagements</span>
                    <span className="text-lg sm:text-xl font-extrabold text-rose-400">399</span>
                    <span className="text-[10px] text-rose-300 font-bold block mt-0.5">9.3% engagement</span>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-2xl">
                    <span className="text-[11px] text-slate-400 font-semibold block">Faculty Comments</span>
                    <span className="text-lg sm:text-xl font-extrabold text-teal-300">9</span>
                    <span className="text-[10px] text-teal-400 font-bold block mt-0.5">3 preceptor threads</span>
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-2xl">
                    <span className="text-[11px] text-slate-400 font-semibold block">Recruiter Profile Visits</span>
                    <span className="text-lg sm:text-xl font-extrabold text-amber-300">128</span>
                    <span className="text-[10px] text-amber-400 font-bold block mt-0.5">Via posted cases</span>
                  </div>
                </div>

                {/* Audience Demographics Progress Bars */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block mb-2">Audience Demographics Breakdown</span>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">Ayush Scholars & Students</span>
                        <span className="font-extrabold text-emerald-400">62% (2,653 views)</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">Industry Recruiters (Dabur, Himalaya, AVP)</span>
                        <span className="font-extrabold text-teal-300">26% (1,112 views)</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-teal-400 h-2 rounded-full" style={{ width: '26%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">Faculty Preceptors & Senior Physicians</span>
                        <span className="font-extrabold text-amber-300">12% (515 views)</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-amber-400 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Per-Post Individual Analytics Breakdown */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-700" />
                  Your Posts & Individual Post Analytics
                </h4>

                {userPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{post.time}</span>
                    </div>
                    
                    <h4 className="font-bold text-slate-900 text-base mb-1">{post.title}</h4>
                    <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">{post.snippet}</p>

                    {/* Post Analytics Sub-Card */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 mb-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block">Post Views</span>
                        <span className="font-extrabold text-slate-900 flex items-center justify-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-slate-500" />
                          {post.views}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block">Recruiter Views</span>
                        <span className="font-extrabold text-emerald-800 flex items-center justify-center gap-1">
                          <Building className="w-3.5 h-3.5 text-emerald-600" />
                          {post.recruiterViews}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block">Likes & Applauds</span>
                        <span className="font-extrabold text-rose-600 flex items-center justify-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-rose-600" />
                          {post.likes}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 font-bold block">Shares</span>
                        <span className="font-extrabold text-teal-700 flex items-center justify-center gap-1">
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
                        className="text-emerald-800 font-bold hover:underline text-xs"
                      >
                        View Live on Feed →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 shadow-soft space-y-4">
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Verified Patient Clinical Logbook</h3>
              <p className="text-xs text-slate-500 mb-4">
                Clinical observations verified by faculty preceptors at National Institute of Ayurveda Hospital.
              </p>

              {[
                { title: 'Case Study #801: Amavata (Rheumatoid Arthritis) Management', date: 'Feb 14, 2026', preceptor: 'Prof. Meenakshi Joshi', status: 'Preceptor Approved' },
                { title: 'Case Study #762: Twak Vikara (Psoriasis) Shodhana Protocol', date: 'Jan 28, 2026', preceptor: 'Dr. R. K. Sharma', status: 'Preceptor Approved' },
              ].map((cs, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{cs.title}</h4>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Preceptor: {cs.preceptor} • {cs.date}</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full shrink-0">
                    {cs.status}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;
