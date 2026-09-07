import React, { useState } from 'react';
import { 
  Landmark, 
  Building2, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Users,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Globe,
  FileText,
  Clock,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Check
} from 'lucide-react';

import meenakshiAvatar from '../../assets/images/meenakshi_avatar.jpg';
import rajeshwarAvatar from '../../assets/images/rajeshwar_avatar.jpg';
import { getPostsByAuthor } from '../../data/feedPostsData';

export const CollegeProfileView = ({ user, onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'posts' | 'departments' | 'hospital' | 'partners'
  const [isFollowing, setIsFollowing] = useState(false);

  const collegeName = user?.brandName || user?.name || user?.institution || 'All India Institute of Ayurveda (AIIA)';
  const location = user?.location || 'Sarita Vihar, Mathura Road, New Delhi 110076';
  const aisheCode = user?.aisheCode || user?.id || 'AISHE-U-0102';
  const naacRating = user?.naacRating || 'NAAC A++ Grade & NCISM Accredited';
  const website = user?.website || 'https://aiia.gov.in';
  const dean = user?.dean || 'Prof. (Dr.) Meenakshi Joshi (Academic Dean)';
  const coverImage = user?.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80';
  const avatarImage = user?.avatarImage || meenakshiAvatar;
  const bio = user?.bio || `${collegeName} is an autonomous apex institute under the Ministry of Ayush, dedicated to bringing synergy between traditional wisdom of Ayurveda and modern scientific diagnostic technologies across a 200-bed clinical referral hospital.`;

  const collegePosts = getPostsByAuthor(user?.id || collegeName);

  const departments = [
    { name: 'Dravyaguna (Materia Medica & Pharmacology)', readiness: '92.4%', students: 142, placed: '88%' },
    { name: 'Rasa Shastra & Bhaishajya Kalpana', readiness: '89.1%', students: 120, placed: '84%' },
    { name: 'Kayachikitsa (Internal Medicine)', readiness: '94.8%', students: 160, placed: '91%' },
    { name: 'Panchakarma Clinical Department', readiness: '96.2%', students: 110, placed: '95%' },
    { name: 'Shalya Tantra (Ayurvedic Surgery)', readiness: '85.0%', students: 95, placed: '79%' },
  ];

  const placementPartners = [
    { name: 'Dabur Research & Development Center', sector: 'Phytopharmaceuticals', hires: '28 Scholars', badge: 'Active Partner' },
    { name: 'Patanjali Research Foundation', sector: 'Herbal Extraction', hires: '32 Scholars', badge: 'Active Partner' },
    { name: 'The Himalaya Wellness Company', sector: 'Discovery & Formulations', hires: '22 Scholars', badge: 'Active Partner' },
    { name: 'AVP Research Foundation', sector: 'Clinical Epidemiology', hires: '18 Scholars', badge: 'Active Partner' }
  ];

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
              Institutional & University Profile
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Landmark className="w-3 h-3 text-emerald-600" />
              Apex Academic Institution
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
            <span>{isFollowing ? 'Following Institution' : 'Follow Institution'}</span>
          </button>
        </div>
      </div>

      {/* College Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        <div className="h-44 sm:h-56 w-full bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 relative">
          <img 
            src={coverImage} 
            alt={collegeName} 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur-md text-emerald-200 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ministry of Ayush National Apex Institute</span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 md:-mt-20 mb-4">
            <div className="flex items-end gap-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10 shrink-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white font-extrabold text-3xl flex items-center justify-center overflow-hidden">
                  <img src={avatarImage} alt={collegeName} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {collegeName}
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {naacRating} • <span className="text-emerald-800 font-bold font-mono">AISHE: {aisheCode}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <span>Institutional Portal</span>
              </a>
            </div>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
              Dean: {dean}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              <Building2 className="w-3.5 h-3.5" />
              200-Bed Teaching Hospital
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Enrolled Scholars</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">840+</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">BAMS, MD &amp; Research Scholars</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Placement Rate</span>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">94.2%</div>
          <span className="text-[11px] text-slate-500 mt-1 block">Day-1 Verified Job Placements</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Teaching Beds</span>
          <div className="text-3xl font-extrabold text-teal-800 mt-1">200 IPD</div>
          <span className="text-[11px] text-teal-700 font-semibold mt-1 block">Referral Clinical Hospital</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Daily OPD Footfall</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">1,800+</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Integrated Clinical Cases</span>
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
          Campus Overview
        </button>

        <button
          onClick={() => setActiveTab('posts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'posts' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span>Posts & Clinical Notices</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {collegePosts.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('departments')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'departments' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Departments ({departments.length})
        </button>

        <button
          onClick={() => setActiveTab('partners')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'partners' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Industry Placement Partners ({placementPartners.length})
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">About {collegeName}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {bio}
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                <span className="text-xs font-extrabold text-emerald-950 block">National Centre of Excellence</span>
                <p className="text-xs text-emerald-800">Houses apex state-of-the-art diagnostic laboratories, digital pulse mapping suites, automated CAMAG HPTLC units, and authentic Keraleeya Panchakarma theatres.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Accreditations & Registry</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">AISHE Identification</span>
                  <strong className="text-slate-800 font-mono text-xs">{aisheCode}</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Accreditation</span>
                  <strong className="text-slate-800 text-xs">{naacRating}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: POSTS */}
      {activeTab === 'posts' && (
        <div className="space-y-5 animate-fadeIn">
          {collegePosts.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-2">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">No public notices or residency posts yet</h4>
            </div>
          ) : (
            collegePosts.map(post => (
              <article key={post.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center overflow-hidden shrink-0">
                      <img src={post.author.avatarImage || avatarImage} alt={post.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 text-sm">{post.author.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">
                          Institution
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{post.author.institution}</div>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-base text-slate-900 leading-snug">{post.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{post.content}</p>
                </div>

                {post.image && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 max-h-80">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      )}

      {/* TAB 3: DEPARTMENTS */}
      {activeTab === 'departments' && (
        <div className="space-y-4 animate-fadeIn">
          {departments.map((d, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="font-extrabold text-base text-slate-900">{d.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{d.students} Enrolled Scholars • Placement Rate: {d.placed}</p>
              </div>
              <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                Cohort Readiness: {d.readiness}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: PARTNERS */}
      {activeTab === 'partners' && (
        <div className="space-y-4 animate-fadeIn">
          {placementPartners.map((p, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex justify-between items-center">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">{p.name}</h4>
                <p className="text-xs text-slate-500">{p.sector} • {p.hires} Recruited</p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
