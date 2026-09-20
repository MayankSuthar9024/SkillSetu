import React from 'react';
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
  ExternalLink,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Calendar,
  Check,
  PlusCircle,
  FlaskConical,
  BarChart3,
  School
} from 'lucide-react';
import vikramAvatar from '../../assets/images/vikram_avatar.jpg';
import ayushHeroBanner from '../../assets/images/ayush_hero_banner.jpg';

export const CompanyConsoleView = ({ user = {}, onNavigateToATS }) => {
  const profile = {
    brandName: user.institution || user.name || 'Dabur India R&D Division',
    leadName: user.name || 'Dr. Vikram Sethi',
    leadRole: user.role || 'Talent Acquisition & R&D Preceptor',
    partnerId: user.id || 'AYUSH-IND-2026-081',
    email: user.email || 'recruitment.rd@dabur.com',
    location: user.location || 'Sahibabad Industrial Area, Ghaziabad, NCR 201010',
    website: 'https://www.dabur.com/ayush-rd',
    founded: '1884 (Pharma R&D Division 1994)',
    accreditations: [
      'Schedule T GMP Certified Cleanroom (HVAC Grade A/B)',
      'NABL Accredited Phytochemical Assay Lab',
      'AYUSH Premium Mark Standardized Formulations',
      'WHO-GMP Compliant Formulations Unit'
    ],
    activeListings: 4,
    candidatesInPipeline: 28,
    sponsoredSprints: 12,
    placedScholars: 42
  };

  const sponsoredSprints = [
    {
      id: 'spr-1',
      title: 'HPTLC Botanical Fingerprinting & Marker Extraction',
      institute: 'All India Institute of Ayurveda (AIIA), New Delhi',
      scholarsCount: 18,
      readinessAvg: '92.4%',
      status: 'Active Sprint',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      id: 'spr-2',
      title: 'Schedule T GMP Cleanroom Sanitation & Standard Operating Protocols',
      institute: 'National Institute of Ayurveda (NIA), Jaipur',
      scholarsCount: 14,
      readinessAvg: '88.6%',
      status: 'Active Sprint',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200'
    },
    {
      id: 'spr-3',
      title: 'Ayush Pharmacovigilance & WHO-UMC Adverse Event Reporting',
      institute: 'Government Ayurvedic College, Pune',
      scholarsCount: 12,
      readinessAvg: '85.2%',
      status: 'Evaluation Stage',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      
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
          
          {/* Regulatory Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-emerald-900 shadow-sm border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Verified Enterprise Partner</span>
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
                  Preceptor Lead: <span className="text-slate-900 font-bold">{profile.leadName}</span> · <span className="text-slate-500">{profile.leadRole}</span>
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto pt-2 sm:pt-0">
              <button
                onClick={onNavigateToATS}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-300" />
                <span>Open Talent ATS Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </button>
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Official Site</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Address, Contact & Partner ID */}
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
            <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 min-w-0">
              <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider truncate">Active Roles</div>
              <div className="text-xl font-black text-emerald-950 mt-0.5 leading-tight">{profile.activeListings} <span className="text-xs font-bold">Openings</span></div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5 truncate">QC, Formulations, Trials</div>
            </div>
            <div className="p-3.5 bg-teal-50/60 rounded-2xl border border-teal-100 min-w-0">
              <div className="text-[10px] font-bold text-teal-800 uppercase tracking-wider truncate">Talent Pipeline</div>
              <div className="text-xl font-black text-teal-950 mt-0.5 leading-tight">{profile.candidatesInPipeline} <span className="text-xs font-bold">Candidates</span></div>
              <div className="text-[10px] text-teal-700 font-medium mt-0.5 truncate">4-Stage Active Pipeline</div>
            </div>
            <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-100 min-w-0">
              <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider truncate">Sponsored Sprints</div>
              <div className="text-xl font-black text-amber-950 mt-0.5 leading-tight">{profile.sponsoredSprints} <span className="text-xs font-bold">Cohorts</span></div>
              <div className="text-[10px] text-amber-700 font-medium mt-0.5 truncate">GMP &amp; HPTLC Modules</div>
            </div>
            <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100 min-w-0">
              <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider truncate">Verified Placements</div>
              <div className="text-xl font-black text-blue-950 mt-0.5 leading-tight">{profile.placedScholars} <span className="text-xs font-bold">Scholars</span></div>
              <div className="text-[10px] text-blue-700 font-medium mt-0.5 truncate">NIA, AIIA, IPGTRA</div>
            </div>
          </div>

        </div>

      </div>

      {/* Main Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Accreditations & Sprints */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Quality Benchmarks & Accreditations Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-soft space-y-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-700" />
                <span>Quality Benchmarks &amp; Regulatory Accreditations</span>
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Schedule T Compliant
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              The Dabur Research &amp; Development Center employs strict Ayush Schedule T Good Manufacturing Practices (GMP) and standardized chromatographic fingerprinting to guarantee therapeutic potency and batch reproducibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {profile.accreditations.map((acc, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">{acc}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Candidate Quality Benchmark: 75%+ Clinical Readiness</span>
              </div>
              <p className="text-xs text-emerald-800/90 leading-relaxed">
                All candidates sourced via SkillSetu undergo automated validation against Schedule T GMP documentation, HPTLC botanical marker assessment, and clinical trial ethics before interview invitations are dispatched.
              </p>
            </div>
          </div>

          {/* Collaborative Sprints Sponsored */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-soft space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-emerald-700" />
                <span>Sponsored Academic Micro-Sprints &amp; Fellowships</span>
              </h3>
              <span className="text-xs font-bold text-slate-500">
                3 Active Cohorts
              </span>
            </div>

            <div className="space-y-3">
              {sponsoredSprints.map((spr) => (
                <div key={spr.id} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-emerald-300 transition-all space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{spr.title}</h4>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${spr.badgeColor}`}>
                      {spr.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <School className="w-3.5 h-3.5 text-slate-400" />
                      <span>{spr.institute}</span>
                    </span>
                    <span>·</span>
                    <span className="font-semibold text-emerald-800">
                      Avg Readiness: {spr.readinessAvg}
                    </span>
                    <span>·</span>
                    <span>{spr.scholarsCount} Scholars Enrolled</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Sourcing & ATS Fast Access */}
        <div className="space-y-6">
          
          {/* Quick ATS Sourcing Launchpad Card */}
          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 rounded-3xl p-6 text-white shadow-md space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-800/60 px-2.5 py-1 rounded-full border border-emerald-700/50 inline-block">
                Recruiter Launchpad
              </span>
              <h3 className="text-lg font-black tracking-tight text-white pt-1">
                Candidate ATS &amp; Applications
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Review received applications across the 4-stage pipeline (Applied, Shortlisted, Interview, Offered) with live scheduling and offer letter issuance.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={onNavigateToATS}
                className="w-full py-3 bg-white text-emerald-950 font-bold text-xs rounded-xl shadow-sm hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Briefcase className="w-4 h-4 text-emerald-800" />
                <span>Go to Talent ATS Workspace</span>
                <ArrowRight className="w-4 h-4 text-emerald-800" />
              </button>
            </div>
          </div>

          {/* R&D Facilities & Headquarters Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>R&amp;D Headquarters &amp; Plant</span>
            </h3>

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

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>National Ayush Registry</span>
              <span className="font-bold text-emerald-800">Verified Node</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CompanyConsoleView;
