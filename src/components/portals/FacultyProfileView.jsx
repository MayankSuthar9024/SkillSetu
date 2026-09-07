import React, { useState } from 'react';
import { 
  UserCheck, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  PlusCircle, 
  BarChart3, 
  Award,
  Clock,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Mail,
  GraduationCap,
  FileText,
  Heart,
  MessageSquare,
  ArrowLeft,
  Calendar,
  Share2,
  Check
} from 'lucide-react';

import meenakshiAvatar from '../../assets/images/meenakshi_avatar.jpg';
import { getPostsByAuthor } from '../../data/feedPostsData';

export const FacultyProfileView = ({ user, onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'posts' | 'courses' | 'publications' | 'mentees'
  const [isFollowing, setIsFollowing] = useState(false);

  const facultyName = user?.name || 'Prof. Meenakshi Joshi';
  const roleTitle = user?.role || 'Professor & HOD (Dravyaguna)';
  const department = user?.department || 'Dravyaguna (Materia Medica & Pharmacology)';
  const institution = user?.institution || 'All India Institute of Ayurveda (AIIA), New Delhi';
  const facultyId = user?.facultyId || user?.id || 'FAC-AIIA-7712';
  const ncismReg = user?.ncismFacultyReg || 'NCISM/FAC/DL/2014/9912';
  const avatarImage = user?.avatarImage || meenakshiAvatar;
  const coverImage = user?.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80';
  const bio = user?.bio || `${facultyName} is an apex academic preceptor and clinical researcher at ${institution}. Leading research on botanical extract standardization, high-performance chromatography, and bridging classical Ayurvedic pharmacology with contemporary clinical trials.`;

  const facultyPosts = getPostsByAuthor(user?.id || facultyName);

  const authoredCourses = [
    {
      id: 'crs-1',
      title: 'Schedule T GMP Compliance & Herbal Cleanroom Standards',
      enrolledCount: 1240,
      rating: 4.9,
      duration: '4 Hours (Bridge Module)',
      badge: 'NCISM Accredited'
    },
    {
      id: 'crs-2',
      title: 'HPTLC Chromatographic Marker Fingerprinting of Botanicals',
      enrolledCount: 980,
      rating: 4.8,
      duration: '6 Hours Practicum',
      badge: 'CCRAS SPARK Aligned'
    },
    {
      id: 'crs-3',
      title: 'Digital Pulse-Wave Diagnostics & Classical Nadi Pariksha',
      enrolledCount: 1420,
      rating: 4.9,
      duration: '8 Hours Clinical',
      badge: 'Apex Hospital Certified'
    }
  ];

  const publications = [
    {
      title: 'Chromatographic Profiling and Quantitative Estimation of Withanolides in Withania somnifera',
      journal: 'Journal of Ayurveda and Integrative Medicine (JAIM)',
      year: '2025',
      doi: '10.1016/j.jaim.2025.100912',
      type: 'Peer-Reviewed Journal'
    },
    {
      title: 'Standardization of Classical Polyherbal Formulations using CAMAG Automated HPTLC Systems',
      journal: 'Ayush Pharmacopoeial Research Monograph Series',
      year: '2024',
      doi: '10.5530/ayush.mono.2024.77',
      type: 'Government Monograph'
    },
    {
      title: 'Correlative Analysis of Arterial Pulse Waveform with Tridosha Phenotypes',
      journal: 'CCRAS SPARK National Research Monograph',
      year: '2024',
      doi: '10.5530/ccras.spark.2024.0491',
      type: 'Sponsored Grant'
    }
  ];

  const mentees = [
    { name: 'Aarav Sharma', degree: 'BAMS Final Year', readiness: '88%', topic: 'HPLC Standardization of Withania' },
    { name: 'Pooja Iyer', degree: 'MD Dravyaguna', readiness: '93%', topic: 'Heavy Metal Remediation' },
    { name: 'Sunita Patel', degree: 'BAMS 3rd Year', readiness: '84%', topic: 'Cleanroom Protocols' }
  ];

  return (
    <div className="space-y-6 pb-12 font-sans max-w-7xl mx-auto">
      
      {/* Top Header / Back Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Feed</span>
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
        </div>
      )}

      {/* TAB 2: POSTS */}
      {activeTab === 'posts' && (
        <div className="space-y-5 animate-fadeIn">
          {facultyPosts.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-2">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-sm text-slate-800">No public case studies or posts yet</h4>
            </div>
          ) : (
            facultyPosts.map(post => (
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
                          Preceptor
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{post.author.role} • {post.author.institution}</div>
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

      {/* TAB 3: AUTHORED COURSES */}
      {activeTab === 'courses' && (
        <div className="space-y-4 animate-fadeIn">
          {authoredCourses.map(crs => (
            <div key={crs.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {crs.badge}
                </span>
                <h4 className="font-extrabold text-base text-slate-900 mt-1">{crs.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{crs.duration} • {crs.enrolledCount} Scholars Enrolled • ★ {crs.rating}</p>
              </div>
              <button 
                onClick={() => onNavigate && onNavigate('courses')}
                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Access Course
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: PUBLICATIONS */}
      {activeTab === 'publications' && (
        <div className="space-y-4 animate-fadeIn">
          {publications.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-2">
              <span className="text-[10px] font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                {p.type}
              </span>
              <h4 className="font-extrabold text-sm text-slate-900">{p.title}</h4>
              <p className="text-xs text-slate-500">{p.journal} ({p.year}) • DOI: {p.doi}</p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: MENTEES */}
      {activeTab === 'mentees' && (
        <div className="space-y-4 animate-fadeIn">
          {mentees.map((m, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-soft flex justify-between items-center">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">{m.name}</h4>
                <p className="text-xs text-slate-500">{m.degree} • Research: {m.topic}</p>
              </div>
              <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                {m.readiness} Readiness
              </span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
