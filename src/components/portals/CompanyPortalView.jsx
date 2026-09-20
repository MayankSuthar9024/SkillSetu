import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  PlusCircle, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Briefcase,
  MapPin,
  GraduationCap,
  Sliders,
  Layers,
  Globe,
  X,
  Clock,
  Award,
  Check,
  Building,
  School,
  Calendar,
  Video,
  Send,
  BellRing,
  FileCheck,
  CheckCircle,
  LayoutGrid,
  List,
  DollarSign,
  ArrowUpRight,
  AlertCircle,
  Copy
} from 'lucide-react';

export const CompanyPortalView = ({ user = {} }) => {
  // Available Academic Institution Tiers for Targeting
  const INSTITUTION_TIERS = [
    {
      id: 'national_excellence',
      label: 'National Institutes of Excellence (NIA/AIIA)',
      shortLabel: 'NIA / AIIA Apex',
      color: 'bg-purple-50 text-purple-900 border-purple-200',
      icon: GraduationCap
    },
    {
      id: 'state_govt',
      label: 'State Government Ayush Colleges',
      shortLabel: 'State Govt Colleges',
      color: 'bg-blue-50 text-blue-900 border-blue-200',
      icon: Building2
    },
    {
      id: 'private_deemed',
      label: 'Private Deemed Universities',
      shortLabel: 'Private Deemed Univ',
      color: 'bg-teal-50 text-teal-900 border-teal-200',
      icon: School
    }
  ];

  // Target Geographic Regions
  const TARGET_REGIONS = [
    'Pan India',
    'North Zone',
    'Western Zone',
    'South Zone'
  ];

  // Minimum Readiness Benchmarks
  const READINESS_BENCHMARKS = [
    'Any',
    '70%+',
    '80%+',
    '90%+'
  ];

  // Initial Posted Opportunities with Academic Tier & Regional Targeting
  const [postedJobs, setPostedJobs] = useState([
    {
      id: 'post-1',
      title: 'Ayurvedic Formulation Research Fellow',
      department: 'Phytopharmacy & Drug Discovery',
      location: 'Delhi NCR (Hybrid)',
      type: 'Micro-Sprint Fellowship',
      stipend: '₹28,000 / month',
      applicationsCount: 14,
      targetTiers: ['National Institutes of Excellence (NIA/AIIA)'],
      targetRegion: 'Pan India',
      minReadiness: '90%+',
      mandatorySkills: ['Schedule T GMP', 'HPTLC Fingerprinting', 'Classical Dravyaguna'],
      status: 'Active Recruiting',
      postedDate: '2 days ago'
    },
    {
      id: 'post-2',
      title: 'Phytopharmacy Quality Control Analyst',
      department: 'Analytical Instrumentation Lab',
      location: 'Haridwar (On-Site)',
      type: 'Industrial Internship',
      stipend: '₹25,000 / month',
      applicationsCount: 9,
      targetTiers: [
        'National Institutes of Excellence (NIA/AIIA)',
        'State Government Ayush Colleges'
      ],
      targetRegion: 'North Zone',
      minReadiness: '80%+',
      mandatorySkills: ['API Moisture Standards', 'Heavy Metal Assay', 'Batch QC'],
      status: 'Active Recruiting',
      postedDate: '4 days ago'
    },
    {
      id: 'post-3',
      title: 'Clinical Pharmacovigilance & Safety Associate',
      department: 'Clinical Trial Management Cell',
      location: 'Pune / Mumbai (Hybrid)',
      type: 'Preceptorship',
      stipend: '₹24,000 / month',
      applicationsCount: 12,
      targetTiers: [
        'State Government Ayush Colleges',
        'Private Deemed Universities'
      ],
      targetRegion: 'Western Zone',
      minReadiness: '70%+',
      mandatorySkills: ['WHO-UMC Causality', 'ADR Reporting', 'Protocol Review'],
      status: 'Active Recruiting',
      postedDate: '1 week ago'
    },
    {
      id: 'post-4',
      title: 'Schedule T Cleanroom Operations Lead',
      department: 'Industrial Manufacturing Unit',
      location: 'Baddi, Himachal Pradesh',
      type: 'Full-Time Junior Scientist',
      stipend: '₹30,000 / month',
      applicationsCount: 7,
      targetTiers: [
        'National Institutes of Excellence (NIA/AIIA)',
        'State Government Ayush Colleges',
        'Private Deemed Universities'
      ],
      targetRegion: 'Pan India',
      minReadiness: 'Any',
      mandatorySkills: ['HVAC Grade A Cleanroom', 'Cleanroom Sanitation', 'Validation SOPs'],
      status: 'Active Recruiting',
      postedDate: '1 week ago'
    }
  ]);

  // Candidates ATS Data across 4 Pipeline Stages: [Applied, Shortlisted, Interview, Offered]
  const [candidates, setCandidates] = useState([
    {
      id: 'c-1',
      name: 'Aarav Sharma',
      institution: 'NIA Jaipur',
      tier: 'National Institutes of Excellence (NIA/AIIA)',
      region: 'North Zone',
      degree: 'BAMS',
      match: 96,
      skills: ['HPTLC Standardization', 'Schedule T GMP', 'Rasa Shastra'],
      sprintScore: '94/100',
      sprintTask: 'HPTLC Fingerprinting',
      hash: '0x9F4C82E1',
      status: 'Applied',
      appliedRole: 'QC Trainee',
      interviewDetails: null,
      offerDetails: null
    },
    {
      id: 'c-2',
      name: 'Pooja Iyer',
      institution: 'AIIA Delhi',
      tier: 'National Institutes of Excellence (NIA/AIIA)',
      region: 'North Zone',
      degree: 'MD Ayurveda',
      match: 93,
      skills: ['Heavy Metal Assay', 'Phytopharmacy', 'Pharmacovigilance'],
      sprintScore: '91/100',
      sprintTask: 'NABL Validation',
      hash: '0x7E3A9102',
      status: 'Shortlisted',
      appliedRole: 'Trial Coordinator',
      interviewDetails: null,
      offerDetails: null
    },
    {
      id: 'c-3',
      name: 'Rohan Deshmukh',
      institution: 'Govt. Ayush College Pune',
      tier: 'State Government Ayush Colleges',
      region: 'Western Zone',
      degree: 'BAMS',
      match: 88,
      skills: ['GMP Cleanroom Ops', 'Schedule T'],
      sprintScore: '89/100',
      sprintTask: 'QC Audit Protocol',
      hash: '0x3D88BC21',
      status: 'Interview',
      appliedRole: 'Cleanroom Lead',
      interviewDetails: {
        date: '2026-09-24',
        time: '11:00 AM',
        link: 'https://meet.google.com/ayush-tech-viva',
        roundType: 'Technical Viva'
      },
      offerDetails: null
    },
    {
      id: 'c-4',
      name: 'Sneha Kulkarni',
      institution: 'DY Patil University Mumbai',
      tier: 'Private Deemed Universities',
      region: 'Western Zone',
      degree: 'BAMS',
      match: 84,
      skills: ['Clinical Diagnostics', 'ADR Reporting'],
      sprintScore: '86/100',
      sprintTask: 'GCP Verification',
      hash: '0x5B29E381',
      status: 'Offered',
      appliedRole: 'Pharmacovigilance Associate',
      interviewDetails: {
        date: '2026-09-15',
        time: '02:30 PM',
        link: 'Conference Room 4B, Dabur Clinical Labs',
        roundType: 'Clinical Assay'
      },
      offerDetails: {
        ctc: '₹6.5 LPA',
        roleTitle: 'Pharmacovigilance Associate',
        extendedDate: 'Sep 18, 2026'
      }
    }
  ]);

  const [activeViewTab, setActiveViewTab] = useState('applications'); // 'applications' | 'listings' | 'candidates'
  const [pipelineLayout, setPipelineLayout] = useState('list'); // 'list' | 'kanban'
  const [selectedStageFilter, setSelectedStageFilter] = useState('All'); // 'All' | 'Applied' | 'Shortlisted' | 'Interview Scheduled' | 'Offer Extended'
  const [filterMatch, setFilterMatch] = useState(70);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobSearchTerm, setJobSearchTerm] = useState('');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [postedSuccess, setPostedSuccess] = useState(false);

  // Scheduled Count state: initial count is 1 (c-3), increments whenever an interview is scheduled!
  const [scheduledCount, setScheduledCount] = useState(1);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTimer, setToastTimer] = useState(null);

  const showToast = (message) => {
    if (toastTimer) clearTimeout(toastTimer);
    setToastMessage(message);
    const t = setTimeout(() => {
      setToastMessage(null);
    }, 4500);
    setToastTimer(t);
  };

  // Schedule Interview Modal State
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [scheduleCandidate, setScheduleCandidate] = useState(null);
  const [scheduleForm, setScheduleForm] = useState({
    date: '2026-09-26',
    time: '11:00',
    link: 'https://meet.google.com/ayu-viva-vct',
    roundType: 'Technical Viva'
  });

  // Extend Offer Modal State
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [offerCandidate, setOfferCandidate] = useState(null);
  const [offerForm, setOfferForm] = useState({
    roleTitle: '',
    ctc: '₹7.5 LPA'
  });

  // 4 Simple & Clean Pipeline Stages (Unified minimal styling, not overly colorful)
  const PIPELINE_STAGES = [
    { id: 'Applied', label: 'Applied', stepNum: '1' },
    { id: 'Shortlisted', label: 'Shortlisted', stepNum: '2' },
    { id: 'Interview', label: 'Interview', stepNum: '3' },
    { id: 'Offered', label: 'Offered', stepNum: '4' }
  ];

  const isOfferedStatus = (status) => status === 'Offered' || status === 'Offer Extended';
  const isInterviewStatus = (status) => status === 'Interview' || status === 'Interview Scheduled';

  const getStageIndex = (status) => {
    if (status === 'Applied') return 0;
    if (status === 'Shortlisted' || status === 'Shortlist') return 1;
    if (isInterviewStatus(status)) return 2;
    if (isOfferedStatus(status)) return 3;
    return 0;
  };

  const getStageLabel = (status) => {
    if (isOfferedStatus(status)) return 'Offered';
    if (isInterviewStatus(status)) return 'Interview';
    if (status === 'Shortlisted' || status === 'Shortlist') return 'Shortlisted';
    return 'Applied';
  };

  // Stage Advancement Handlers
  const handleShortlistCandidate = (cand) => {
    setCandidates(prev => prev.map(c => 
      c.id === cand.id ? { ...c, status: 'Shortlisted' } : c
    ));
    showToast(`Candidate ${cand.name} successfully advanced to Shortlisted! Notification dispatched to candidate.`);
  };

  const handleOpenSchedule = (cand) => {
    setScheduleCandidate(cand);
    setScheduleForm({
      date: cand.interviewDetails?.date || '2026-09-26',
      time: cand.interviewDetails?.time || '11:00',
      link: cand.interviewDetails?.link || 'https://meet.google.com/ayu-viva-vct',
      roundType: cand.interviewDetails?.roundType || 'Technical Viva'
    });
    setIsScheduleModalOpen(true);
  };

  const handleScheduleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!scheduleCandidate) return;

    const candId = scheduleCandidate.id;
    setCandidates(prev => prev.map(c => 
      c.id === candId ? {
        ...c,
        status: 'Interview',
        interviewDetails: {
          date: scheduleForm.date,
          time: scheduleForm.time,
          link: scheduleForm.link,
          roundType: scheduleForm.roundType
        }
      } : c
    ));

    // Increment scheduled count as required
    setScheduledCount(prev => prev + 1);

    setIsScheduleModalOpen(false);
    setScheduleCandidate(null);

    // Exact required toast:
    showToast("Interview Invitation dispatched to candidate's notification center");
  };

  const handleOpenOffer = (cand) => {
    setOfferCandidate(cand);
    setOfferForm({
      roleTitle: cand.offerDetails?.roleTitle || cand.appliedRole || 'Ayush Research Scientist',
      ctc: cand.offerDetails?.ctc || '₹7.5 LPA'
    });
    setIsOfferModalOpen(true);
  };

  const handleOfferSubmit = (e) => {
    if (e) e.preventDefault();
    if (!offerCandidate) return;

    const candId = offerCandidate.id;
    const candName = offerCandidate.name;

    setCandidates(prev => prev.map(c => 
      c.id === candId ? {
        ...c,
        status: 'Offered',
        offerDetails: {
          roleTitle: offerForm.roleTitle,
          ctc: offerForm.ctc,
          extendedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        }
      } : c
    ));

    setIsOfferModalOpen(false);
    setOfferCandidate(null);

    showToast(`Official Offer Letter (${offerForm.ctc}) for ${offerForm.roleTitle} extended to ${candName}! Status updated to Offered.`);
  };

  const handleDirectStageChange = (cand, targetStage) => {
    if (targetStage === 'Interview' || targetStage === 'Interview Scheduled') {
      handleOpenSchedule(cand);
      return;
    }
    if (targetStage === 'Offered' || targetStage === 'Offer Extended') {
      handleOpenOffer(cand);
      return;
    }
    if (targetStage === 'Shortlisted' || targetStage === 'Shortlist') {
      handleShortlistCandidate(cand);
      return;
    }
    // Moving to Applied
    setCandidates(prev => prev.map(c => 
      c.id === cand.id ? { ...c, status: 'Applied' } : c
    ));
    showToast(`Candidate ${cand.name} moved to Applied stage.`);
  };

  // New Opportunity Form State with Candidate Sourcing Scope
  const [opportunityForm, setOpportunityForm] = useState({
    title: '',
    department: 'Phytopharmacy & Drug Discovery',
    location: 'Haridwar / Delhi NCR (Hybrid)',
    type: 'Micro-Sprint Fellowship',
    stipend: '₹25,000 / month',
    mandatorySkills: 'Schedule T GMP, HPTLC Fingerprinting, Quality Control',
    // Candidate Sourcing Scope
    targetTiers: ['National Institutes of Excellence (NIA/AIIA)'],
    targetRegion: 'Pan India',
    minReadiness: '80%+'
  });

  // Toggle selection for Target Institution Tier pills
  const handleToggleTier = (tierLabel) => {
    setOpportunityForm(prev => {
      const exists = prev.targetTiers.includes(tierLabel);
      if (exists) {
        // Prevent deselecting all tiers
        if (prev.targetTiers.length === 1) return prev;
        return {
          ...prev,
          targetTiers: prev.targetTiers.filter(t => t !== tierLabel)
        };
      } else {
        return {
          ...prev,
          targetTiers: [...prev.targetTiers, tierLabel]
        };
      }
    });
  };

  // Submit and Deploy New Opportunity
  const handleDeployOpportunity = (e) => {
    if (e) e.preventDefault();
    if (!opportunityForm.title.trim()) {
      alert('Please enter a role title for the opportunity.');
      return;
    }

    const newJob = {
      id: `post-${Date.now()}`,
      title: opportunityForm.title,
      department: opportunityForm.department || 'Ayush R&D Division',
      location: opportunityForm.location || 'Pan India',
      type: opportunityForm.type || 'Micro-Sprint Fellowship',
      stipend: opportunityForm.stipend || 'Competitive Stipend',
      applicationsCount: 0,
      targetTiers: [...opportunityForm.targetTiers],
      targetRegion: opportunityForm.targetRegion,
      minReadiness: opportunityForm.minReadiness,
      mandatorySkills: opportunityForm.mandatorySkills
        .split(',')
        .map(s => s.trim())
        .filter(Boolean),
      status: 'Active Recruiting',
      postedDate: 'Just Now'
    };

    setPostedJobs(prev => [newJob, ...prev]);
    setPostedSuccess(true);

    setTimeout(() => {
      setPostedSuccess(false);
      setIsPostModalOpen(false);
      // Reset form
      setOpportunityForm({
        title: '',
        department: 'Phytopharmacy & Drug Discovery',
        location: 'Haridwar / Delhi NCR (Hybrid)',
        type: 'Micro-Sprint Fellowship',
        stipend: '₹25,000 / month',
        mandatorySkills: 'Schedule T GMP, HPTLC Fingerprinting, Quality Control',
        targetTiers: ['National Institutes of Excellence (NIA/AIIA)'],
        targetRegion: 'Pan India',
        minReadiness: '80%+'
      });
    }, 1200);
  };

  const filteredCandidates = candidates.filter(c => {
    const matchesScore = c.match >= filterMatch;
    const matchesSearch = 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.appliedRole && c.appliedRole.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const currentStageLabel = getStageLabel(c.status);
    const matchesStage = selectedStageFilter === 'All' || currentStageLabel === selectedStageFilter;

    return matchesScore && matchesSearch && matchesStage;
  });

  const filteredJobs = postedJobs.filter(j => 
    j.title.toLowerCase().includes(jobSearchTerm.toLowerCase()) ||
    j.department.toLowerCase().includes(jobSearchTerm.toLowerCase()) ||
    j.targetRegion.toLowerCase().includes(jobSearchTerm.toLowerCase()) ||
    j.targetTiers.some(t => t.toLowerCase().includes(jobSearchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 backdrop-blur-md text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-lg">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <BellRing className="w-5 h-5 text-emerald-400 animate-bounce" />
          </div>
          <div className="text-xs flex-1">
            <p className="font-extrabold text-emerald-300 flex items-center gap-1.5">
              <span>Recruiter Pipeline Notification</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </p>
            <p className="text-slate-200 mt-0.5 leading-snug font-medium">{toastMessage}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer ml-auto transition-colors"
            title="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Enterprise Recruiter Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40 shrink-0 overflow-hidden">
            {user.avatarImage ? (
              <img src={user.avatarImage} alt={user.name || 'Company'} className="w-full h-full object-cover" />
            ) : (
              user.avatar || 'DR'
            )}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900">{user.name || 'Dabur India R&D Division'}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                Dabur India Ltd. (Clinical R&amp;D Division)
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {user.role || 'Talent Acquisition & R&D Preceptor'} · {user.institution || 'Ayush Corporate Alliance'} · Partner ID: <span className="font-mono font-semibold text-slate-700">{user.id || 'AYUSH-IND-2026-081'}</span>
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPostModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
          >
            <PlusCircle className="w-4 h-4 text-emerald-300" />
            <span>Create New Opportunity</span>
          </button>
        </div>
      </div>

      {/* Recruiter Quick Metrics with Live Increment Counter */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center hover:border-emerald-200 transition-all">
          <span className="text-2xl font-extrabold text-slate-900">{postedJobs.length}</span>
          <span className="text-xs text-slate-500 block mt-0.5">Active Posted Roles</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center hover:border-emerald-200 transition-all">
          <span className="text-2xl font-extrabold text-emerald-800">{candidates.length}</span>
          <span className="text-xs text-slate-500 block mt-0.5">Received Applications</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center hover:border-amber-300 transition-all bg-gradient-to-b from-white to-amber-50/20">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-extrabold text-amber-700">{scheduledCount}</span>
            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Live ATS
            </span>
          </div>
          <span className="text-xs text-slate-500 block mt-0.5">Interviews Scheduled</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center hover:border-purple-200 transition-all">
          <span className="text-2xl font-extrabold text-purple-700">
            {candidates.filter(c => isOfferedStatus(c.status)).length}
          </span>
          <span className="text-xs text-slate-500 block mt-0.5">Offers Extended</span>
        </div>
      </div>

      {/* View Switcher Tabs: Received Applications vs Recruiter Listings Table */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveViewTab('applications')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeViewTab === 'applications' || activeViewTab === 'candidates'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Received Applications</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeViewTab === 'applications' || activeViewTab === 'candidates' ? 'bg-emerald-900 text-emerald-100' : 'bg-slate-100 text-slate-700'
            }`}>
              {candidates.length}
            </span>
          </button>

          <button
            onClick={() => setActiveViewTab('listings')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeViewTab === 'listings'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recruiter Listings Table &amp; Cards</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeViewTab === 'listings' ? 'bg-emerald-900 text-emerald-100' : 'bg-slate-100 text-slate-700'
            }`}>
              {postedJobs.length}
            </span>
          </button>
        </div>

        {activeViewTab === 'listings' && (
          <button
            onClick={() => setIsPostModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>+ Add Targeted Role</span>
          </button>
        )}
      </div>

      {/* TAB 1: RECRUITER LISTINGS TABLE & JOB CARDS WITH TARGET CRITERIA BADGES */}
      {activeViewTab === 'listings' && (
        <div className="space-y-4">
          {/* Sourcing Scope Information Alert */}
          <div className="p-4 bg-teal-50/70 border border-teal-200/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-teal-950">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-teal-100 text-teal-800">
                <Sliders className="w-4 h-4" />
              </span>
              <div>
                <strong className="block font-bold">Academic Tier &amp; Regional Sourcing Engine:</strong>
                Each opportunity displays specific Target Institution Tiers, Regional Targeting, and Minimum Readiness Benchmarks.
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-white border border-teal-300 text-teal-800 shrink-0">
              Active Sourcing Active
            </span>
          </div>

          {/* Search Filter for Posted Roles */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search posted opportunities by role, tier, or region..."
                value={jobSearchTerm}
                onChange={(e) => setJobSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-medium text-slate-800"
              />
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Showing {filteredJobs.length} of {postedJobs.length} roles
            </span>
          </div>

          {/* Posted Job Cards Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredJobs.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-md hover:border-emerald-300 transition-all space-y-4"
              >
                {/* Header: Role Title, Status, and Department */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-black text-slate-900 tracking-tight">
                        {job.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        {job.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {job.department} · <span className="font-semibold text-slate-700">{job.type}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.postedDate}
                    </span>
                    <span className="font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      {job.stipend}
                    </span>
                  </div>
                </div>

                {/* CRITICAL: Target Criteria Badges Section (Academic Tier, Regional, Readiness) */}
                <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200/90 space-y-2.5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sliders className="w-3 h-3 text-slate-500" />
                      Candidate Sourcing Scope Badges:
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">
                      Location: <strong className="text-slate-800">{job.location}</strong>
                    </span>
                  </div>

                  {/* Sourcing Badges Container */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* 1. Target Institution Tiers Badges */}
                    {job.targetTiers.map((tier, idx) => {
                      const isNational = tier.includes('National Institutes');
                      const isStateGovt = tier.includes('State Government');
                      
                      return (
                        <span 
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold border shadow-2xs ${
                            isNational 
                              ? 'bg-purple-50 text-purple-900 border-purple-200' 
                              : isStateGovt
                              ? 'bg-blue-50 text-blue-900 border-blue-200'
                              : 'bg-teal-50 text-teal-900 border-teal-200'
                          }`}
                          title={`Target Institution Tier: ${tier}`}
                        >
                          {isNational ? (
                            <GraduationCap className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          ) : isStateGovt ? (
                            <Building2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          ) : (
                            <School className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                          )}
                          <span>Tier: {tier}</span>
                        </span>
                      );
                    })}

                    {/* 2. Target Region Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold bg-amber-50 text-amber-950 border border-amber-200 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Region: {job.targetRegion}</span>
                    </span>

                    {/* 3. Minimum Readiness Benchmark Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-extrabold bg-emerald-50 text-emerald-950 border border-emerald-200 shadow-2xs">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>Min Readiness: {job.minReadiness}</span>
                    </span>
                  </div>
                </div>

                {/* Mandatory Competency Tags */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-bold text-slate-500 mr-1">Mandatory Competencies:</span>
                    {job.mandatorySkills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-[10px] font-semibold"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveViewTab('candidates');
                        setSearchTerm(job.title.split(' ')[0]);
                      }}
                      className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Users className="w-3.5 h-3.5 text-emerald-700" />
                      <span>View Matched Talent ({job.applicationsCount})</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: RECEIVED APPLICATIONS & ADVANCEMENT PIPELINE */}
      {(activeViewTab === 'applications' || activeViewTab === 'candidates') && (
        <div className="space-y-4">
          {/* Simple Clean Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  Applications ({candidates.length})
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Pipeline: Applied → Shortlisted → Interview → Offered
                </p>
              </div>
            </div>

            {/* Layout Toggle: List vs Kanban */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setPipelineLayout('list')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  pipelineLayout === 'list'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
              <button
                onClick={() => setPipelineLayout('kanban')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  pipelineLayout === 'kanban'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Kanban</span>
              </button>
            </div>
          </div>

          {/* Candidate Search & 4-Stage Filter Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
            {/* 4 Short Stage Filter Pills */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-slate-400" /> Stage:
                </span>
                {['All', 'Applied', 'Shortlisted', 'Interview', 'Offered'].map((stage) => {
                  const count = stage === 'All'
                    ? candidates.length
                    : candidates.filter(c => getStageLabel(c.status) === stage).length;
                  const isSelected = selectedStageFilter === stage;

                  return (
                    <button
                      key={stage}
                      onClick={() => setSelectedStageFilter(stage)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                          : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      <span>{stage}</span>
                      <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${
                        isSelected ? 'bg-emerald-950 text-emerald-200' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <span className="text-xs text-slate-400 font-medium">
                {filteredCandidates.length} of {candidates.length} candidates
              </span>
            </div>

            {/* Search & Min Match */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search candidates by name, role, skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-700 font-medium text-slate-800"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Min Match:
                </span>
                <div className="flex gap-1">
                  {[70, 80, 90].map((threshold) => (
                    <button
                      key={threshold}
                      onClick={() => setFilterMatch(threshold)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        filterMatch === threshold
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {threshold}%+
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VIEW 1: CLEAN ATS LIST VIEW */}
          {pipelineLayout === 'list' && (
            <div className="space-y-3">
              {filteredCandidates.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">No applicants found</h4>
                  <p className="text-xs text-slate-500">
                    Try adjusting your stage filter or search term.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedStageFilter('All');
                      setSearchTerm('');
                      setFilterMatch(70);
                    }}
                    className="px-3 py-1.5 bg-emerald-800 text-white rounded-lg text-xs font-bold cursor-pointer hover:bg-emerald-900"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredCandidates.map((cand) => {
                  const currentStageIdx = getStageIndex(cand.status);
                  const currentStageLabel = getStageLabel(cand.status);

                  return (
                    <div 
                      key={cand.id} 
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-soft hover:border-emerald-200 transition-all space-y-3"
                    >
                      {/* Top Row: Candidate Info & Stage Pill */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {cand.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <h4 className="text-sm font-black text-slate-900">{cand.name}</h4>
                              <span className="text-xs text-slate-600 font-semibold">· {cand.degree}</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              <span className="font-bold text-slate-700">{cand.appliedRole}</span> · <span className="font-medium text-slate-500">{cand.institution}</span>
                            </p>
                          </div>
                        </div>

                        {/* Match % & Status Pill */}
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            {cand.match}%
                          </span>
                          <span className="px-2 py-0.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {currentStageLabel}
                          </span>
                        </div>
                      </div>

                      {/* 4 PIPELINE STAGES — Emerald Theme */}
                      <div className="bg-slate-50 p-1 rounded-xl border border-slate-200 flex items-center justify-between gap-1 overflow-x-auto">
                        {PIPELINE_STAGES.map((stage, idx) => {
                          const isCurrent = currentStageLabel === stage.label;
                          const isPast = currentStageIdx > idx;

                          return (
                            <button
                              key={stage.id}
                              type="button"
                              onClick={() => handleDirectStageChange(cand, stage.id)}
                              className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                                isCurrent
                                  ? 'bg-emerald-800 text-white shadow-xs'
                                  : isPast
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-800'
                              }`}
                              title={`Click to switch to ${stage.label}`}
                            >
                              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                                isCurrent
                                  ? 'bg-white/20 text-white'
                                  : isPast
                                  ? 'bg-emerald-200 text-emerald-800'
                                  : 'bg-slate-100 text-slate-500'
                              }`}>
                                {isPast ? '✓' : stage.stepNum}
                              </span>
                              <span>{stage.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Interview Details Banner */}
                      {currentStageLabel === 'Interview' && cand.interviewDetails && (
                        <div className="px-3 py-1.5 bg-emerald-50/60 rounded-lg border border-emerald-200 flex items-center justify-between gap-2 text-xs text-emerald-900">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span className="font-bold text-emerald-900">{cand.interviewDetails.roundType}:</span>
                            <span className="font-medium text-emerald-800">{cand.interviewDetails.date} · {cand.interviewDetails.time}</span>
                            <span className="text-emerald-600 text-[11px] font-semibold hidden sm:inline">(Meet Link)</span>
                          </div>
                          <button
                            onClick={() => handleOpenSchedule(cand)}
                            className="px-2.5 py-0.5 bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded text-xs font-bold transition-colors cursor-pointer"
                          >
                            Reschedule
                          </button>
                        </div>
                      )}

                      {/* Offer Details Banner */}
                      {currentStageLabel === 'Offered' && cand.offerDetails && (
                        <div className="px-3 py-1.5 bg-emerald-50/60 rounded-lg border border-emerald-200 flex items-center justify-between gap-2 text-xs text-emerald-900">
                          <div className="flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span className="font-bold text-emerald-900">Offered:</span>
                            <span className="font-medium text-emerald-800">{cand.offerDetails.roleTitle} · <strong className="text-emerald-900 font-extrabold">{cand.offerDetails.ctc}</strong></span>
                          </div>
                          <button
                            onClick={() => handleOpenOffer(cand)}
                            className="px-2.5 py-0.5 bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded text-xs font-bold transition-colors cursor-pointer"
                          >
                            Modify
                          </button>
                        </div>
                      )}

                      {/* Bottom Row: Sprint + CTA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-700">Sprint: {cand.sprintScore.split('/')[0]}%</span>
                          <span className="text-slate-300">·</span>
                          <span className="font-medium text-slate-600">{cand.sprintTask}</span>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          {currentStageLabel === 'Applied' && (
                            <button
                              onClick={() => handleShortlistCandidate(cand)}
                              className="px-3 py-1 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Shortlist</span>
                            </button>
                          )}
                          {currentStageLabel === 'Shortlisted' && (
                            <button
                              onClick={() => handleOpenSchedule(cand)}
                              className="px-3 py-1 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                            >
                              <Calendar className="w-3.5 h-3.5" />
                              <span>Schedule Interview</span>
                            </button>
                          )}
                          {currentStageLabel === 'Interview' && (
                            <button
                              onClick={() => handleOpenOffer(cand)}
                              className="px-3 py-1 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                            >
                              <Award className="w-3.5 h-3.5 text-emerald-200" />
                              <span>Extend Offer</span>
                            </button>
                          )}
                          {currentStageLabel === 'Offered' && (
                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Offered</span>
                            </span>
                          )}

                          {/* Quick Jump Dropdown */}
                          <select
                            value={currentStageLabel}
                            onChange={(e) => handleDirectStageChange(cand, e.target.value)}
                            className="py-1 px-1.5 text-xs bg-white rounded-lg border border-slate-200 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                            title="Jump to Stage"
                          >
                            <option value="Applied">Applied</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Interview">Interview</option>
                            <option value="Offered">Offered</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* VIEW 2: KANBAN 4-COLUMN BOARD */}
          {pipelineLayout === 'kanban' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {PIPELINE_STAGES.map((stage) => {
                const stageCandidates = candidates.filter(c => getStageLabel(c.status) === stage.label);

                return (
                  <div 
                    key={stage.id} 
                    className="bg-slate-50/80 rounded-2xl p-3 border border-slate-200/90 flex flex-col space-y-2.5 min-h-[450px]"
                  >
                    {/* Column Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-500" />
                        <h4 className="text-xs font-bold text-slate-900">{stage.label}</h4>
                      </div>
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-white border border-slate-200 text-slate-700">
                        {stageCandidates.length}
                      </span>
                    </div>

                    {/* Column Cards */}
                    <div className="space-y-2 flex-1 overflow-y-auto">
                      {stageCandidates.length === 0 ? (
                        <div className="p-4 text-center text-slate-400 text-xs italic">
                          No candidates
                        </div>
                      ) : (
                        stageCandidates.map((cand) => (
                          <div 
                            key={cand.id} 
                            className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all space-y-2 text-xs"
                          >
                            <div className="flex items-start justify-between gap-1.5">
                              <div>
                                <h5 className="font-bold text-slate-900">{cand.name}</h5>
                                <p className="text-[10px] text-slate-500">{cand.institution.split(',')[0]}</p>
                              </div>
                              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                                {cand.match}%
                              </span>
                            </div>

                            <p className="text-[10px] text-slate-600">
                              Role: <strong className="text-slate-800">{cand.appliedRole || 'QC Specialist'}</strong>
                            </p>

                            {/* Interview Snippet */}
                            {isInterviewStatus(cand.status) && cand.interviewDetails && (
                              <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 text-[10px] text-slate-700 space-y-0.5">
                                <div className="font-semibold text-slate-800 flex items-center gap-1">
                                  <Calendar className="w-3 h-3 text-slate-500" />
                                  <span>{cand.interviewDetails.roundType}</span>
                                </div>
                                <div className="text-slate-500">{cand.interviewDetails.date} · {cand.interviewDetails.time}</div>
                              </div>
                            )}

                            {/* Offer Snippet */}
                            {isOfferedStatus(cand.status) && cand.offerDetails && (
                              <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-200 text-[10px] text-slate-700 flex items-center justify-between">
                                <div className="font-semibold text-slate-800 flex items-center gap-1">
                                  <Award className="w-3 h-3 text-slate-500" />
                                  <span>Offered</span>
                                </div>
                                <div className="font-bold text-slate-900">{cand.offerDetails.ctc}</div>
                              </div>
                            )}

                            {/* Action Button */}
                            <div className="pt-1 border-t border-slate-100">
                              {stage.label === 'Applied' && (
                                <button
                                  onClick={() => handleShortlistCandidate(cand)}
                                  className="w-full py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-[10px] font-semibold transition-all cursor-pointer text-center"
                                >
                                  Shortlist →
                                </button>
                              )}
                              {stage.label === 'Shortlisted' && (
                                <button
                                  onClick={() => handleOpenSchedule(cand)}
                                  className="w-full py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-[10px] font-semibold transition-all cursor-pointer text-center flex items-center justify-center gap-1"
                                >
                                  <Calendar className="w-3 h-3" />
                                  <span>Schedule</span>
                                </button>
                              )}
                              {stage.label === 'Interview' && (
                                <button
                                  onClick={() => handleOpenOffer(cand)}
                                  className="w-full py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-[10px] font-semibold transition-all cursor-pointer text-center flex items-center justify-center gap-1"
                                >
                                  <Award className="w-3 h-3 text-slate-300" />
                                  <span>Extend Offer</span>
                                </button>
                              )}
                              {stage.label === 'Offered' && (
                                <button
                                  onClick={() => handleOpenOffer(cand)}
                                  className="w-full py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-md text-[10px] font-semibold transition-all cursor-pointer text-center"
                                >
                                  Modify Offer
                                </button>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* CREATE NEW OPPORTUNITY MODAL (WITH CANDIDATE SOURCING SCOPE) */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-2xl w-full shadow-2xl border border-slate-200 space-y-5 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-800" />
                  <span>Create New Opportunity</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Define opening specifications, mandatory laboratory competencies, and targeted sourcing scope.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsPostModalOpen(false);
                  setPostedSuccess(false);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleDeployOpportunity} className="space-y-4">
              {/* SECTION 1: Basic Role Details */}
              <div className="space-y-3">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">
                  1. Role &amp; Opportunity Details
                </span>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Role Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Phytochemistry QC Standardization Trainee"
                    value={opportunityForm.title}
                    onChange={(e) => setOpportunityForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Department / Division</label>
                    <input
                      type="text"
                      value={opportunityForm.department}
                      onChange={(e) => setOpportunityForm(prev => ({ ...prev, department: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Role Type</label>
                    <select
                      value={opportunityForm.type}
                      onChange={(e) => setOpportunityForm(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    >
                      <option value="Micro-Sprint Fellowship">Micro-Sprint Fellowship</option>
                      <option value="Industrial Internship">Industrial Internship</option>
                      <option value="Preceptorship">Preceptorship</option>
                      <option value="Full-Time Junior Scientist">Full-Time Junior Scientist</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Location &amp; Work Mode</label>
                    <input
                      type="text"
                      value={opportunityForm.location}
                      onChange={(e) => setOpportunityForm(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Stipend / Honorarium</label>
                    <input
                      type="text"
                      value={opportunityForm.stipend}
                      onChange={(e) => setOpportunityForm(prev => ({ ...prev, stipend: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Mandatory Competencies (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={opportunityForm.mandatorySkills}
                    onChange={(e) => setOpportunityForm(prev => ({ ...prev, mandatorySkills: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Presets: Schedule T GMP, HPTLC Fingerprinting, Heavy Metal Assay, GCP Protocol Review
                  </p>
                </div>
              </div>

              {/* SECTION 2: CANDIDATE SOURCING SCOPE (CORE TASK REQUIREMENT) */}
              <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200/90 space-y-4">
                <div className="flex items-center gap-2 pb-1 border-b border-emerald-200/60">
                  <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                    <Sliders className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                      Candidate Sourcing Scope
                    </h4>
                    <p className="text-[11px] text-emerald-800 font-medium">
                      Configure Academic Tier, Regional Targeting, and Minimum Readiness Benchmarks.
                    </p>
                  </div>
                </div>

                {/* 1. Target Institution Tiers: Selectable Pills */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-800 block">
                    Target Institution Tiers <span className="text-slate-400 font-normal">(Click pills to select / deselect)</span>:
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {INSTITUTION_TIERS.map((tier) => {
                      const isSelected = opportunityForm.targetTiers.includes(tier.label);
                      const IconComponent = tier.icon;

                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => handleToggleTier(tier.label)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                            isSelected
                              ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs ring-2 ring-emerald-600/30'
                              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200/90'
                          }`}
                        >
                          <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`} />
                          <span>{tier.label}</span>
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 text-emerald-300 ml-0.5" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-300 ml-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Target Region & 3. Minimum Readiness Benchmark (Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Target Region Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Target Region:</span>
                    </label>
                    <select
                      value={opportunityForm.targetRegion}
                      onChange={(e) => setOpportunityForm(prev => ({ ...prev, targetRegion: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-white rounded-xl border border-emerald-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    >
                      {TARGET_REGIONS.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                    <span className="text-[10px] text-slate-500 block">
                      Restricts automated talent matching to candidates in selected region.
                    </span>
                  </div>

                  {/* Minimum Readiness Benchmark: Dropdown & Slider Pills */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Minimum Readiness Benchmark:</span>
                      </label>
                      <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {opportunityForm.minReadiness}
                      </span>
                    </div>

                    <select
                      value={opportunityForm.minReadiness}
                      onChange={(e) => setOpportunityForm(prev => ({ ...prev, minReadiness: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-white rounded-xl border border-emerald-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="Any">Any (No Minimum Threshold)</option>
                      <option value="70%+">70%+ (Basic Lab Readiness)</option>
                      <option value="80%+">80%+ (Proficient &amp; Validated)</option>
                      <option value="90%+">90%+ (Apex Industry Mastery)</option>
                    </select>

                    {/* Interactive Slider Segmented Buttons */}
                    <div className="grid grid-cols-4 gap-1 pt-1">
                      {READINESS_BENCHMARKS.map((bench) => (
                        <button
                          key={bench}
                          type="button"
                          onClick={() => setOpportunityForm(prev => ({ ...prev, minReadiness: bench }))}
                          className={`py-1 text-[10px] font-extrabold rounded-lg transition-all cursor-pointer border ${
                            opportunityForm.minReadiness === bench
                              ? 'bg-emerald-800 text-white border-emerald-900 shadow-2xs'
                              : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {bench}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {postedSuccess && (
                <div className="p-3 bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs rounded-xl font-bold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Opportunity published successfully with customized academic &amp; regional targeting!</span>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsPostModalOpen(false);
                    setPostedSuccess(false);
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Deploy Opportunity</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 1. SCHEDULE INTERVIEW MODAL */}
      {isScheduleModalOpen && scheduleCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 my-8 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-700" />
                  <span>Schedule Interview</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Configure technical round, session schedule, and dispatch calendar link to candidate.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsScheduleModalOpen(false);
                  setScheduleCandidate(null);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate Context Pill */}
            <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center text-sm shrink-0 border border-amber-200">
                {scheduleCandidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold">{scheduleCandidate.name}</strong>
                <span className="text-slate-500">{scheduleCandidate.degree} · {scheduleCandidate.institution}</span>
                <span className="block text-amber-800 font-bold mt-0.5">Role: {scheduleCandidate.appliedRole || 'Ayush QC Trainee'}</span>
              </div>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              {/* Round Type */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Evaluation Round Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Technical Viva', 'HR', 'Clinical Assay'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setScheduleForm(prev => ({ ...prev, roundType: type }))}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                        scheduleForm.roundType === type
                          ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Interview Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={scheduleForm.date}
                    onChange={(e) => setScheduleForm(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Session Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={scheduleForm.time}
                    onChange={(e) => setScheduleForm(prev => ({ ...prev, time: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
              </div>

              {/* Google Meet / Physical Room Link */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Google Meet / Physical Room Link <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Video className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="https://meet.google.com/xyz-abc-def or Lab Room No."
                    value={scheduleForm.link}
                    onChange={(e) => setScheduleForm(prev => ({ ...prev, link: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
                {/* Presets */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] text-slate-400 font-bold self-center">Presets:</span>
                  <button
                    type="button"
                    onClick={() => setScheduleForm(prev => ({ ...prev, link: 'https://meet.google.com/ayu-viva-vct' }))}
                    className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-[10px] font-semibold cursor-pointer"
                  >
                    Google Meet
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleForm(prev => ({ ...prev, link: 'Cleanroom Operations Lab 2B, Haridwar' }))}
                    className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-[10px] font-semibold cursor-pointer"
                  >
                    Cleanroom Lab 2B
                  </button>
                  <button
                    type="button"
                    onClick={() => setScheduleForm(prev => ({ ...prev, link: 'Apex Assessment Hall 4A, AIIA Delhi' }))}
                    className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-[10px] font-semibold cursor-pointer"
                  >
                    Apex Boardroom 4A
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsScheduleModalOpen(false);
                    setScheduleCandidate(null);
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Schedule &amp; Dispatch Invitation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. EXTEND OFFER MODAL */}
      {isOfferModalOpen && offerCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 my-8 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <span>Extend Official Offer Letter</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Specify CTC compensation terms and role title to issue formal pre-placement offer.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsOfferModalOpen(false);
                  setOfferCandidate(null);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate Context Pill */}
            <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 font-extrabold flex items-center justify-center text-sm shrink-0 border border-emerald-200">
                {offerCandidate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold">{offerCandidate.name}</strong>
                <span className="text-slate-500">{offerCandidate.degree} · {offerCandidate.institution}</span>
                <span className="block text-emerald-800 font-bold mt-0.5">Sprint Score: {offerCandidate.sprintScore} · Match: {offerCandidate.match}%</span>
              </div>
            </div>

            <form onSubmit={handleOfferSubmit} className="space-y-4">
              {/* Role Title */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Designated Role Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayurvedic Formulation Research Fellow"
                  value={offerForm.roleTitle}
                  onChange={(e) => setOfferForm(prev => ({ ...prev, roleTitle: e.target.value }))}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {/* Offer Letter CTC */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Offer Letter CTC / Stipend Package <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹7.5 LPA or ₹32,000 / month"
                    value={offerForm.ctc}
                    onChange={(e) => setOfferForm(prev => ({ ...prev, ctc: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-black focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                {/* Preset Chips */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] text-slate-400 font-bold self-center">Presets:</span>
                  {['₹6.0 LPA', '₹7.5 LPA', '₹9.0 LPA', '₹35,000 / month'].map((pkg) => (
                    <button
                      key={pkg}
                      type="button"
                      onClick={() => setOfferForm(prev => ({ ...prev, ctc: pkg }))}
                      className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-[10px] font-semibold cursor-pointer"
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsOfferModalOpen(false);
                    setOfferCandidate(null);
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Award className="w-4 h-4 text-emerald-300" />
                  <span>Issue &amp; Extend Offer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyPortalView;
