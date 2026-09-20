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
  Building,
  School,
  Calendar,
  Video,
  BellRing
} from 'lucide-react';
import { useNotifications } from '../../context/NotificationContext';

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

  // Candidates ATS Data
  const [candidates, setCandidates] = useState([
    {
      id: 'c-1',
      name: 'Aarav Sharma',
      institution: 'National Institute of Ayurveda (NIA), Jaipur',
      tier: 'National Institutes of Excellence (NIA/AIIA)',
      region: 'North Zone',
      degree: 'BAMS (Final Year)',
      match: 96,
      skills: ['HPTLC Standardization', 'Schedule T GMP', 'Rasa Shastra', 'Phytochemistry'],
      sprintScore: '94/100',
      sprintTask: 'Triphala Churna HPTLC Marker Fingerprinting',
      hash: '0x9F4C82E1',
      status: 'Applied', // 'Applied' | 'Shortlisted' | 'Interview Scheduled' | 'Offered'
      appliedRole: 'Phytochemistry QC Trainee',
      interviewDetails: null,
      offerDetails: null
    },
    {
      id: 'c-2',
      name: 'Pooja Iyer',
      institution: 'All India Institute of Ayurveda (AIIA), Delhi',
      tier: 'National Institutes of Excellence (NIA/AIIA)',
      region: 'North Zone',
      degree: 'MD Ayurveda (Dravyaguna)',
      match: 93,
      skills: ['Heavy Metal Assay', 'Phytopharmacy', 'Pharmacovigilance', 'HPLC Column Assay'],
      sprintScore: '91/100',
      sprintTask: 'NABL Analytical Method Validation',
      hash: '0x7E3A9102',
      status: 'Shortlisted',
      appliedRole: 'Junior Clinical Trial Coordinator',
      interviewDetails: null,
      offerDetails: null
    },
    {
      id: 'c-3',
      name: 'Rohan Deshmukh',
      institution: 'Government Ayurvedic College, Pune',
      tier: 'State Government Ayush Colleges',
      region: 'Western Zone',
      degree: 'BAMS Graduate',
      match: 88,
      skills: ['GMP Cleanroom Ops', 'Classical Formulations', 'Schedule T'],
      sprintScore: '89/100',
      sprintTask: 'Avaleha Preparation QC Audit Protocol',
      hash: '0x3D88BC21',
      status: 'Ready for Review'
    },
    {
      id: 'c-4',
      name: 'Sneha Kulkarni',
      institution: 'Dr. D. Y. Patil Deemed Ayush University, Navi Mumbai',
      tier: 'Private Deemed Universities',
      region: 'Western Zone',
      degree: 'BAMS Intern',
      match: 84,
      skills: ['Clinical Diagnostics', 'ADR Reporting', 'Pulse Diagnosis'],
      sprintScore: '86/100',
      sprintTask: 'Good Clinical Practice Protocol Verification',
      hash: '0x5B29E381',
      status: 'Ready for Review'
    }
  ]);

  const { dispatchNotification } = useNotifications();
  const [activeViewTab, setActiveViewTab] = useState('listings'); // 'listings' | 'candidates'
  const [filterMatch, setFilterMatch] = useState(80);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobSearchTerm, setJobSearchTerm] = useState('');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [postedSuccess, setPostedSuccess] = useState(false);

  // Interview Scheduling State
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [schedulingCandidate, setSchedulingCandidate] = useState(null);
  const [interviewDate, setInterviewDate] = useState('2026-09-25T11:00');
  const [interviewRound, setInterviewRound] = useState('Technical HPTLC & GMP Assay Round');
  const [interviewMode, setInterviewMode] = useState('SkillSetu Virtual Proctor Video Room');

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

  const handleShortlist = (id) => {
    const target = candidates.find(c => c.id === id);
    setCandidates(prev => prev.map(c => 
      c.id === id ? { ...c, status: 'Fast-Track Shortlisted' } : c
    ));
    if (target) {
      showToast(`Candidate ${target.name} successfully advanced to Shortlisted! Notification dispatched to student.`);
      dispatchNotification({
        targetRole: 'student',
        targetRecipientId: target.id || 'NIA/AY/2026/0491',
        targetRecipientName: target.name,
        senderId: user?.id || 'EMP-DABUR-QC-89',
        senderName: user?.institution || user?.name || 'Dabur India R&D Division',
        senderRole: 'company',
        title: `Shortlisted by ${user?.institution || user?.name || 'Dabur India'}`,
        message: `${user?.institution || user?.name || 'Dabur India'} reviewed your verifiable profile and shortlisted you for technical interview.`,
        link: '#dashboard-student'
      });
    }
  };

  const handleOpenScheduleModal = (cand) => {
    setSchedulingCandidate(cand);
    setIsScheduleModalOpen(true);
  };

  const handleConfirmScheduleInterview = (e) => {
    if (e) e.preventDefault();
    if (!schedulingCandidate) return;

    setCandidates(prev => prev.map(c => 
      c.id === schedulingCandidate.id ? { ...c, status: 'Interview Scheduled' } : c
    ));

    const companyName = user?.institution || user?.name || 'Dabur India R&D Division';
    const companyId = user?.id || 'EMP-DABUR-QC-89';
    let formattedDate = 'Upcoming Date';
    try {
      formattedDate = new Date(interviewDate).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      formattedDate = interviewDate;
    }

    // Cross-Stakeholder Notification: Company -> Student: Interview Scheduled (Workflow 2)
    dispatchNotification({
      targetRole: 'student',
      targetRecipientId: schedulingCandidate.id || 'NIA/AY/2026/0491',
      targetRecipientName: schedulingCandidate.name,
      senderId: companyId,
      senderName: companyName,
      senderRole: 'company',
      title: `Interview scheduled with ${companyName}`,
      message: `${companyName} scheduled an interview for ${interviewRound} on ${formattedDate} (${interviewMode}).`,
      link: '#dashboard-student'
    });

    showToast(`Interview confirmed with ${schedulingCandidate.name} for ${formattedDate}! Notification dispatched to student.`);
    setIsScheduleModalOpen(false);
    setSchedulingCandidate(null);
  };

  const filteredCandidates = candidates.filter(c => 
    c.match >= filterMatch && 
    (c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     c.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
     c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
  );

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
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 max-w-lg">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <BellRing className="w-4 h-4 text-emerald-400 animate-bounce" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-emerald-300">Pipeline Update Dispatched</p>
            <p className="text-slate-200 mt-0.5 leading-snug">{toastMessage}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer ml-auto"
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

      {/* Recruiter Quick Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-slate-900">{postedJobs.length}</span>
          <span className="text-xs text-slate-500 block mt-0.5">Active Posted Roles</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-emerald-800">{filteredCandidates.length}</span>
          <span className="text-xs text-slate-500 block mt-0.5">Matched Candidates (&gt;80%)</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-amber-700">100%</span>
          <span className="text-xs text-slate-500 block mt-0.5">Pre-Audited Proof of Work</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-purple-700">3 Tiers</span>
          <span className="text-xs text-slate-500 block mt-0.5">Academic Sourcing Reach</span>
        </div>
      </div>

      {/* View Switcher Tabs: Recruiter Listings Table vs Candidate Talent Pool */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
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

          <button
            onClick={() => setActiveViewTab('candidates')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeViewTab === 'candidates'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Matched Talent Pool</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeViewTab === 'candidates' ? 'bg-emerald-900 text-emerald-100' : 'bg-slate-100 text-slate-700'
            }`}>
              {candidates.length}
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

      {/* TAB 2: CANDIDATE PIPELINE */}
      {activeViewTab === 'candidates' && (
        <div className="space-y-4">
          {/* Candidate ATS Search & Filter Bar */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search candidates by name, skill, institution, or region..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-medium text-slate-800"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Minimum Vector Match:
              </span>
              <div className="flex gap-1.5">
                {[70, 80, 90].map((threshold) => (
                  <button
                    key={threshold}
                    onClick={() => setFilterMatch(threshold)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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

          {/* Candidate Pipeline Cards */}
          <div className="space-y-4">
            {filteredCandidates.map((cand) => (
              <div key={cand.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-extrabold text-base flex items-center justify-center border border-emerald-200">
                      {cand.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-extrabold text-slate-900">{cand.name}</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          {cand.region}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{cand.degree} · {cand.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                      {cand.match}% Vector Match
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-xs">
                      Hash: {cand.hash}
                    </span>
                  </div>
                </div>

                {/* Practical Proof of Work Box */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Practical Sprint Task</span>
                    <strong className="text-slate-800 font-semibold">{cand.sprintTask}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Sprint Score &amp; Accuracy</span>
                    <strong className="text-emerald-800 font-extrabold">{cand.sprintScore}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Verified Skills</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {cand.skills.map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-700 text-[10px] rounded font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    Verified by Apex Ayush Faculty Mentor
                  </span>

                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={() => handleOpenScheduleModal(cand)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        cand.status === 'Interview Scheduled'
                          ? 'bg-blue-50 text-blue-900 border border-blue-200'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-blue-700" />
                      <span>{cand.status === 'Interview Scheduled' ? 'Reschedule Interview' : 'Schedule Interview'}</span>
                    </button>

                    <button
                      onClick={() => handleShortlist(cand.id)}
                      disabled={cand.status === 'Fast-Track Shortlisted' || cand.status === 'Interview Scheduled'}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        cand.status === 'Fast-Track Shortlisted' || cand.status === 'Interview Scheduled'
                          ? 'bg-emerald-100 text-emerald-900 cursor-default border border-emerald-300'
                          : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
                      }`}
                    >
                      {cand.status === 'Interview Scheduled' ? (
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                          <span>Interview Scheduled</span>
                        </span>
                      ) : cand.status === 'Fast-Track Shortlisted' ? (
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Shortlisted for Interview</span>
                        </span>
                      ) : (
                        'Fast-Track Candidate'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* SCHEDULE INTERVIEW MODAL (WORKFLOW 2: COMPANY -> STUDENT) */}
      {isScheduleModalOpen && schedulingCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 my-8 animate-in zoom-in-95">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-800" />
                  <span>Schedule Technical Interview</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Coordinate live laboratory assessment and dispatch cross-stakeholder notification.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsScheduleModalOpen(false);
                  setSchedulingCandidate(null);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate Card Summary */}
            <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-extrabold text-emerald-950">{schedulingCandidate.name}</h4>
                <p className="text-[11px] text-emerald-700 font-medium">
                  {schedulingCandidate.degree} · {schedulingCandidate.institution}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-xl bg-white border border-emerald-300 text-xs font-black text-emerald-900 shadow-2xs">
                {schedulingCandidate.match}% Match
              </span>
            </div>

            <form onSubmit={handleConfirmScheduleInterview} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Interview Assessment Round
                </label>
                <select
                  value={interviewRound}
                  onChange={(e) => setInterviewRound(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option value="Technical HPTLC & GMP Assay Round">Technical HPTLC &amp; GMP Assay Round</option>
                  <option value="Schedule T Cleanroom Viva & Protocol Review">Schedule T Cleanroom Viva &amp; Protocol Review</option>
                  <option value="Ayurvedic Phytopharmacy & QC Case Evaluation">Ayurvedic Phytopharmacy &amp; QC Case Evaluation</option>
                  <option value="Final Corporate HR & Stipend Discussion">Final Corporate HR &amp; Stipend Discussion</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Date &amp; Time
                </label>
                <input
                  type="datetime-local"
                  required
                  value={interviewDate}
                  onChange={(e) => setInterviewDate(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Interview Venue / Format
                </label>
                <select
                  value={interviewMode}
                  onChange={(e) => setInterviewMode(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option value="SkillSetu Virtual Proctor Video Room">SkillSetu Virtual Proctor Video Room (DigiLocker Stamped)</option>
                  <option value="On-Site Corporate R&D Laboratory">On-Site Corporate R&amp;D Laboratory (Ghaziabad / Haridwar)</option>
                  <option value="Hybrid Remote Viva Room">Hybrid Remote Viva Room</option>
                </select>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Real-Time Cross-Stakeholder Sync</span>
                </div>
                <p>
                  Submitting this dispatch immediately sends an in-app notification to the student, logs the event across browser tabs, and flags candidate status in the ATS.
                </p>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsScheduleModalOpen(false);
                    setSchedulingCandidate(null);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Schedule &amp; Dispatch</span>
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
