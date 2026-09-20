import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Users, 
  Briefcase, 
  Layers, 
  ArrowLeft, 
  ExternalLink,
  Sparkles,
  FileCheck2,
  Calendar,
  Check
} from 'lucide-react';
import { CompanyPortalView } from './CompanyPortalView';
import { PORTALS_DATA } from '../../data/portalData';
import vikramAvatar from '../../assets/images/vikram_avatar.jpg';
import ayushHeroBanner from '../../assets/images/ayush_hero_banner.jpg';

export const CompanyProfileView = ({ user, onNavigate, onBack, isPublicView = false }) => {
  const [activeTab, setActiveTab] = useState(isPublicView ? 'overview' : 'pipeline'); // 'pipeline' | 'overview' | 'listings'
  const [toastMessage, setToastMessage] = useState(null);

  const defaultUser = PORTALS_DATA.find(p => p.id === 'company')?.profileUser;
  const companyUser = user || defaultUser;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const profile = {
    brandName: companyUser?.institution || companyUser?.name || 'Dabur Research & Development Center',
    leadName: companyUser?.name || 'Dr. Vikram Sethi',
    leadRole: companyUser?.role || 'Industry Recruiter & R&D Lead',
    partnerId: companyUser?.id || 'EMP-DABUR-QC-89',
    email: companyUser?.email || 'recruitment.rd@dabur.com',
    location: companyUser?.location || 'Sahibabad Industrial Area, Ghaziabad, NCR 201010',
    website: 'https://www.dabur.com/ayush-rd',
    founded: '1884 (Pharma R&D Division 1994)',
    accreditations: [
      'Schedule T GMP Certified Cleanroom',
      'NABL Accredited Phytochemical Assay Lab',
      'AYUSH Premium Mark Standardized',
      'WHO-GMP Compliant Formulations Unit'
    ],
    activeListings: companyUser?.activeListings || 5,
    candidatesInPipeline: companyUser?.shortlistedCandidates || 28,
    sponsoredSprints: 12,
    placedScholars: 42
  };

  const activeJobs = [
    {
      id: 'job-1',
      title: 'Junior Formulations Officer (Schedule T GMP)',
      dept: 'R&D Quality Assurance',
      location: 'Ghaziabad, NCR',
      stipend: '₹45,000 / mo',
      scoreReq: '80%+ Clinical Readiness',
      type: 'Full Time'
    },
    {
      id: 'job-2',
      title: 'HPTLC & Botanical Fingerprinting Analyst',
      dept: 'Phytochemistry Division',
      location: 'New Delhi / NCR',
      stipend: '₹50,000 / mo',
      scoreReq: '82%+ Clinical Readiness',
      type: 'Full Time'
    },
    {
      id: 'job-3',
      title: 'Ayush Clinical Trial Coordinator',
      dept: 'Human Evidence & Safety Trials',
      location: 'New Delhi',
      stipend: '₹42,000 / mo',
      scoreReq: '75%+ Clinical Readiness',
      type: 'Full Time'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-900 pb-16 font-sans">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-emerald-500 flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header Back Navigation */}
      {onBack && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-950 bg-white border border-slate-200 shadow-xs hover:shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
            <span>Back</span>
          </button>
        </div>
      )}

      {/* Main Enterprise Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Enterprise Brand Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden">
          
          {/* Cover Banner */}
          <div className="h-44 sm:h-52 w-full relative bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 overflow-hidden">
            <img 
              src={ayushHeroBanner} 
              alt="Ayush Enterprise R&D" 
              className="w-full h-full object-cover opacity-35 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Regulatory Badge in Top Right */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-emerald-900 shadow-sm border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Verified Ayush Enterprise</span>
              </span>
            </div>
          </div>

          {/* Identity & Details Row */}
          <div className="px-6 sm:px-8 pb-6 pt-0 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-12 sm:-mt-14 mb-4">
              
              {/* Avatar + Company Name & Lead */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-1.5 shadow-xl border border-slate-200 shrink-0 overflow-hidden">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-white overflow-hidden">
                    <img 
                      src={vikramAvatar} 
                      alt={profile.leadName} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {profile.brandName}
                    </h1>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100 shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">
                    Lead: <span className="text-slate-900 font-bold">{profile.leadName}</span> · <span className="text-slate-500">{profile.leadRole}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto pt-2 sm:pt-0">
                {!isPublicView && (
                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Open Talent ATS</span>
                  </button>
                )}
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Official Website</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Address, Contact & Partner Info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 mb-4 pt-0.5">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium text-slate-700">{profile.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium text-slate-700">{profile.email}</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Partner ID: {profile.partnerId}</span>
              </span>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-100">
              <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 min-w-0">
                <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider truncate">Active Roles</div>
                <div className="text-lg font-black text-emerald-950 mt-0.5 leading-tight">{profile.activeListings} <span className="text-sm">Positions</span></div>
                <div className="text-[10px] text-emerald-700 font-medium mt-0.5 truncate">QC, Formulations, Trials</div>
              </div>
              <div className="p-3 bg-teal-50/60 rounded-2xl border border-teal-100 min-w-0">
                <div className="text-[10px] font-bold text-teal-800 uppercase tracking-wider truncate">ATS Pipeline</div>
                <div className="text-lg font-black text-teal-950 mt-0.5 leading-tight">{profile.candidatesInPipeline} <span className="text-sm">Candidates</span></div>
                <div className="text-[10px] text-teal-700 font-medium mt-0.5 truncate">4-Stage Pipeline</div>
              </div>
              <div className="p-3 bg-amber-50/60 rounded-2xl border border-amber-100 min-w-0">
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider truncate">Clinical Sprints</div>
                <div className="text-lg font-black text-amber-950 mt-0.5 leading-tight">{profile.sponsoredSprints} <span className="text-sm">Sponsored</span></div>
                <div className="text-[10px] text-amber-700 font-medium mt-0.5 truncate">GMP & HPTLC Courses</div>
              </div>
              <div className="p-3 bg-blue-50/60 rounded-2xl border border-blue-100 min-w-0">
                <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider truncate">Verified Hires</div>
                <div className="text-lg font-black text-blue-950 mt-0.5 leading-tight">{profile.placedScholars} <span className="text-sm">Scholars</span></div>
                <div className="text-[10px] text-blue-700 font-medium mt-0.5 truncate">NIA, AIIA, IPGTRA</div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-5 mt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>Overview &amp; Certifications</span>
              </button>
              <button
                onClick={() => setActiveTab('listings')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'listings'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Job Listings ({profile.activeListings})</span>
              </button>
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  activeTab === 'pipeline'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span>{isPublicView ? 'Recruiter ATS Preview' : 'Recruiter ATS & Pipeline'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Tab Content 1: Enterprise Overview & Certifications */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            
            {/* Left Column: Certifications & Standards */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-soft space-y-6">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <span>Research Division Mandate &amp; Quality Benchmarks</span>
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  The Dabur Research &amp; Development Center acts as the clinical and pharmacological innovation backbone for botanical formulations. We employ strict Ayush Schedule T Good Manufacturing Practices (GMP) and standardized spectroscopic fingerprinting to guarantee therapeutic potency and batch reproducibility.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Regulatory Accreditations &amp; Audited Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.accreditations.map((acc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">{acc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Candidate Quality Benchmark: 75%+ SkillSetu Readiness</span>
                </div>
                <p className="text-xs text-emerald-800/90 leading-relaxed">
                  All candidates routed through the SkillSetu talent engine undergo rigorous automated validation against Schedule T GMP documentation, HPTLC botanical marker assessment, and clinical trial ethics before interview invitations are dispatched.
                </p>
              </div>
            </div>

            {/* Right Column: Contact & R&D Facilities */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900">R&amp;D Headquarters</h3>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>Sahibabad Industrial Area, Sector 4, Ghaziabad, Uttar Pradesh 201010</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>recruitment.rd@dabur.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>dabur.com/ayush-rd</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveTab('listings')}
                    className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    View Active Openings ({profile.activeListings}) →
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab Content 2: Active Job Listings */}
        {activeTab === 'listings' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {activeJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft flex flex-col justify-between hover:border-emerald-500/60 transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-200">
                        {job.type}
                      </span>
                      <span className="text-xs font-bold text-slate-800 font-mono">
                        {job.stipend}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">{job.title}</h4>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">{job.dept} · {job.location}</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 font-medium">
                      Requirement: <span className="font-bold text-emerald-800">{job.scoreReq}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => showToast(`Application submitted for ${job.title} with verified SkillSetu credentials.`)}
                      className="flex-1 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition-all cursor-pointer text-center"
                    >
                      Apply with Score
                    </button>
                    {!isPublicView && (
                      <button
                        onClick={() => setActiveTab('pipeline')}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer text-center"
                        title="Manage in ATS"
                      >
                        ATS
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: ATS Recruitment Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="space-y-4 animate-fadeIn">
            <CompanyPortalView user={companyUser} />
          </div>
        )}

      </div>

    </div>
  );
};

export default CompanyProfileView;
