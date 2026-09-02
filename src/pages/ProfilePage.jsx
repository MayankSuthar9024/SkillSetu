import React, { useState } from 'react';
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
  MessageSquare
} from 'lucide-react';

export function ProfilePage({ onNavigate, currentUser }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingBio, setIsEditingBio] = useState(false);

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
    avatar: currentUser?.avatar || 'AS'
  });

  const [editForm, setEditForm] = useState({ ...profileData });

  const handleSaveBio = (e) => {
    e.preventDefault();
    setProfileData({ ...editForm });
    setIsEditingBio(false);
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
      snippet: 'Super thrilled to complete the 4-week micro-sprint on Chromatographic Fingerprinting for Ashwagandha extracts...'
    },
    {
      id: 10,
      title: 'Comparative Case Analysis: Punarnavadi Kwath in Renal Fluid Balance',
      time: '3 days ago',
      category: 'Clinical Case',
      likes: 184,
      comments: 8,
      snippet: 'Observed significant edema reduction over 21 days with continuous bio-marker tracking.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16 overflow-x-hidden">
      
      {/* Cover Backdrop */}
      <div className="h-44 sm:h-64 bg-gradient-to-r from-emerald-950 via-emerald-800 to-teal-900 relative overflow-hidden rounded-3xl mb-4">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto px-4 h-full flex justify-end items-start pt-4">
          <button
            onClick={() => onNavigate('feed')}
            className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs px-3.5 py-2 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 border border-white/20 cursor-pointer"
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
              
              {/* Profile Avatar (PFP) */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-950 text-white font-extrabold text-2xl sm:text-4xl flex items-center justify-center border-4 border-white shadow-xl">
                  {profileData.avatar}
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-600 text-white p-1.5 rounded-xl border-2 border-white shadow-md" title="SkillSetu Verified Scholar">
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
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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

        {/* Edit Profile Modal */}
        {isEditingBio && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
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
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Role / Designation</label>
                  <input
                    type="text"
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Institution</label>
                  <input
                    type="text"
                    value={editForm.institution}
                    onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Bio Summary</label>
                  <textarea
                    rows={4}
                    value={editForm.bio}
                    onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingBio(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-800 text-white px-5 py-2 text-xs font-bold rounded-xl hover:bg-emerald-900 cursor-pointer"
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

          {/* TAB 3: USER POSTS */}
          {activeTab === 'posts' && (
            <div className="space-y-4">
              {userPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-soft">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-400">{post.time}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{post.title}</h4>
                  <p className="text-xs text-slate-600 mb-3">{post.snippet}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-rose-600 font-bold">
                        <Heart className="w-3.5 h-3.5 fill-rose-600" /> {post.likes} Likes
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> {post.comments} Comments
                      </span>
                    </div>

                    <button
                      onClick={() => onNavigate('feed')}
                      className="text-emerald-800 font-bold hover:underline"
                    >
                      View on Feed →
                    </button>
                  </div>
                </div>
              ))}
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
