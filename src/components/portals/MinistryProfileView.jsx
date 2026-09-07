import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  BarChart3, 
  Award, 
  CheckCircle2, 
  Users,
  Briefcase,
  ArrowRight,
  MapPin,
  Globe,
  FileText,
  Clock,
  ArrowLeft,
  Sparkles,
  Check,
  Landmark
} from 'lucide-react';

import sanjayAvatar from '../../assets/images/sanjay_avatar.jpg';
import { getPostsByAuthor } from '../../data/feedPostsData';

export const MinistryProfileView = ({ user, onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'directives' | 'councils' | 'standards'
  const [isFollowing, setIsFollowing] = useState(false);

  const ministryName = user?.brandName || user?.name || 'Central Council for Research in Ayurvedic Sciences (CCRAS)';
  const location = user?.location || 'Janakpuri, New Delhi 110058, India';
  const councilCode = user?.councilCode || user?.id || 'CCRAS-GOI-AYUSH-01';
  const roleTitle = user?.role || 'Apex Ministry Body & Regulatory Directorate';
  const website = user?.website || 'https://ccras.nic.in';
  const coverImage = user?.coverImage || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80';
  const avatarImage = user?.avatarImage || sanjayAvatar;
  const bio = user?.bio || `${ministryName} is the apex autonomous body under the Ministry of Ayush for the formulation, co-ordination, development and promotion of research on scientific lines in Ayurvedic sciences across 30 premier peripheral institutes.`;

  const ministryPosts = getPostsByAuthor(user?.id || ministryName);

  const councils = [
    { name: 'CCRAS (Ayurvedic Sciences)', focus: 'Classical Formulation & Botanical Standardizations', institutes: '30 Centers' },
    { name: 'CCRUM (Unani Medicine)', focus: 'Ilaj-bit-Tadbeer & Mufradat Pharmacology', institutes: '22 Centers' },
    { name: 'CCRH (Homoeopathic Medicine)', focus: 'Drug Proving & Clinical Epidemiology', institutes: '24 Centers' },
    { name: 'National Medicinal Plants Board (NMPB)', focus: 'Conservation & Good Agricultural Practices (GACP)', institutes: 'All States' }
  ];

  const standards = [
    { title: 'Good Clinical Practice (GCP) for Ayush Trials', code: 'AYUSH-GCP-STD-01', status: 'National Standard' },
    { title: 'Schedule T GMP Cleanroom Protocol Verification', code: 'GMP-SCH-T-2026', status: 'Mandatory Compliance' },
    { title: 'Standardized NAMASTE Morbidity Codes', code: 'ABDM-NAMASTE-V2', status: 'Integrated in EHR' }
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
              Government Regulatory Authority
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Ministry of Ayush Directorate
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
            <span>{isFollowing ? 'Following Directorate' : 'Follow Directorate'}</span>
          </button>
        </div>
      </div>

      {/* Ministry Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        <div className="h-44 sm:h-56 w-full bg-gradient-to-r from-purple-950 via-slate-900 to-emerald-950 relative">
          <img 
            src={coverImage} 
            alt={ministryName} 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute top-4 right-4 bg-purple-950/85 backdrop-blur-md text-purple-200 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-purple-300" />
            <span>Government of India Regulatory Body</span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 md:-mt-20 mb-4">
            <div className="flex items-end gap-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10 shrink-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-purple-950 text-white font-extrabold text-3xl flex items-center justify-center overflow-hidden">
                  <img src={avatarImage} alt={ministryName} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {ministryName}
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {roleTitle} • <span className="text-purple-800 font-bold font-mono">Code: {councilCode}</span>
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
                <span>Official Portal</span>
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
              <Globe className="w-4 h-4 text-emerald-700 shrink-0" />
              {website}
            </span>
            <span className="flex items-center gap-1.5 text-purple-800 font-bold bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
              <Landmark className="w-3.5 h-3.5" />
              28 States &amp; 8 UTs Jurisdiction
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Accredited Colleges</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">536+</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">NCISM Monitored Institutes</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Active Grants</span>
          <div className="text-3xl font-extrabold text-purple-800 mt-1">₹12.4 Cr</div>
          <span className="text-[11px] text-slate-500 mt-1 block">CCRAS SPARK-4.0 Funded</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Pharmacovigilance</span>
          <div className="text-3xl font-extrabold text-teal-800 mt-1">68 Nodes</div>
          <span className="text-[11px] text-teal-700 font-semibold mt-1 block">Safety Monitoring Units</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Verified Practitioners</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">1.2L+</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">NCISM &amp; SkillSetu Registered</span>
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
          Mandate &amp; Mission
        </button>

        <button
          onClick={() => setActiveTab('directives')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'directives' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <span>Directives &amp; Circulars</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {ministryPosts.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('councils')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'councils' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          Research Councils ({councils.length})
        </button>

        <button
          onClick={() => setActiveTab('standards')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'standards' ? 'bg-emerald-800 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          National Standards
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">National Mandate &amp; Strategy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {bio}
              </p>
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-1">
                <span className="text-xs font-extrabold text-purple-950 block">Standardization Framework</span>
                <p className="text-xs text-purple-900">Mandating digital competency evaluation, Schedule T GMP cleanroom compliance, and Pharmacovigilance safety standards across all Indian healthcare and manufacturing enterprises.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Directorate Headquarters</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                  <strong className="text-slate-800 text-xs">{location}</strong>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Portal</span>
                  <strong className="text-slate-800 text-xs">{website}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DIRECTIVES */}
      {activeTab === 'directives' && (
        <div className="space-y-5 animate-fadeIn">
          {ministryPosts.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-2">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">No public directives published yet</h4>
            </div>
          ) : (
            ministryPosts.map(post => (
              <article key={post.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-soft p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-purple-900 text-white font-extrabold text-xs flex items-center justify-center overflow-hidden shrink-0">
                      <img src={post.author.avatarImage || avatarImage} alt={post.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-slate-900 text-sm">{post.author.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />
                        <span className="text-[10px] font-bold bg-purple-50 text-purple-800 px-2 py-0.5 rounded-md border border-purple-200">
                          Regulatory Authority
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{post.author.institution}</div>
                    </div>
                  </div>
                  <span className="bg-purple-100 text-purple-900 text-xs font-extrabold px-3 py-1 rounded-full">
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

      {/* TAB 3: COUNCILS */}
      {activeTab === 'councils' && (
        <div className="space-y-4 animate-fadeIn">
          {councils.map((c, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="font-extrabold text-base text-slate-900">{c.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{c.focus}</p>
              </div>
              <span className="text-xs font-extrabold text-purple-800 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-200">
                {c.institutes}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: STANDARDS */}
      {activeTab === 'standards' && (
        <div className="space-y-4 animate-fadeIn">
          {standards.map((s, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex justify-between items-center">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">{s.title}</h4>
                <p className="text-xs text-slate-500">Framework Code: {s.code}</p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                {s.status}
              </span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
