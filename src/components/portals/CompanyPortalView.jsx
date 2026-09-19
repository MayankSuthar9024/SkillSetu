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
  Calendar,
  Clock,
  Video,
  Send,
  Award,
  X,
  UserCheck,
  DollarSign,
  AlertCircle,
  BellRing,
  BarChart3,
  MapPin,
  Mail,
  ChevronDown,
  RotateCcw
} from 'lucide-react';

export const CompanyPortalView = ({ user }) => {
  // Main Tab in Company Portal
  const [mainTab, setMainTab] = useState('applications'); // 'applications' | 'sprints' | 'analytics'

  // Candidates ATS Pipeline state
  const [candidates, setCandidates] = useState([
    {
      id: 'c-1',
      name: 'Aarav Sharma',
      institution: 'National Institute of Ayurveda (NIA), Jaipur',
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
      degree: 'BAMS Graduate',
      match: 88,
      skills: ['GMP Cleanroom Ops', 'Classical Formulations', 'Schedule T'],
      sprintScore: '89/100',
      sprintTask: 'Avaleha Preparation QC Audit Protocol',
      hash: '0x3D88BC21',
      status: 'Applied',
      appliedRole: 'GMP Cleanroom Supervisor',
      interviewDetails: null,
      offerDetails: null
    },
    {
      id: 'c-4',
      name: 'Ananya Verma',
      institution: 'Banaras Hindu University (IMS-BHU)',
      degree: 'M.Pharm (Ayurveda)',
      match: 91,
      skills: ['Botanical Extraction', 'HPLC Column Assay', 'Schedule T', 'GC-MS Analysis'],
      sprintScore: '93/100',
      sprintTask: 'Curcuminoid Purity Quantification',
      hash: '0x4D22FA88',
      status: 'Interview Scheduled',
      appliedRole: 'Analytical Herbal Chemist',
      interviewDetails: {
        date: '2026-09-22',
        time: '11:00 AM IST',
        meetLink: 'https://meet.google.com/setu-herb-qc',
        roundType: 'Technical Viva'
      },
      offerDetails: null
    }
  ]);

  const [activeStageFilter, setActiveStageFilter] = useState('All'); // 'All' | 'Applied' | 'Shortlisted' | 'Interview Scheduled' | 'Offer Extended'
  const [filterMatch, setFilterMatch] = useState(75);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals state
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [postedSuccess, setPostedSuccess] = useState(false);

  // Interview Modal state
  const [selectedCandidateForInterview, setSelectedCandidateForInterview] = useState(null);
  const [interviewForm, setInterviewForm] = useState({
    date: '2026-09-24',
    time: '14:30',
    meetLink: 'https://meet.google.com/setu-tech-viva',
    roundType: 'Technical Viva'
  });

  // Offer Modal state
  const [selectedCandidateForOffer, setSelectedCandidateForOffer] = useState(null);
  const [offerForm, setOfferForm] = useState({
    ctc: '₹8.50 LPA',
    roleTitle: 'Ayush Analytical QC Associate',
    joiningDate: '2026-10-01',
    stipendTerms: '₹45,000/mo stipend during 3-month probation'
  });

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  // Status transitions
  const handleShortlist = (cand) => {
    setCandidates(prev => prev.map(c => 
      c.id === cand.id ? { ...c, status: 'Shortlisted' } : c
    ));
    showToast(`Candidate ${cand.name} successfully advanced to Shortlisted! Notification dispatched to student.`);
  };

  const handleOpenInterviewModal = (cand) => {
    setSelectedCandidateForInterview(cand);
    setInterviewForm({
      date: cand.interviewDetails?.date || '2026-09-24',
      time: cand.interviewDetails?.time || '14:30',
      meetLink: cand.interviewDetails?.meetLink || `https://meet.google.com/setu-${cand.name.toLowerCase().replace(/\s+/g, '-')}`,
      roundType: cand.interviewDetails?.roundType || 'Technical Viva'
    });
  };

  const handleSubmitInterview = (e) => {
    e.preventDefault();
    if (!selectedCandidateForInterview) return;

    setCandidates(prev => prev.map(c => 
      c.id === selectedCandidateForInterview.id 
        ? { ...c, status: 'Interview Scheduled', interviewDetails: { ...interviewForm } } 
        : c
    ));

    // Exact prompt requirement:
    // display a confirmation toast: "Interview Invitation dispatched to candidate email & notification center"
    showToast('Interview Invitation dispatched to candidate email & notification center');

    // Cross-portal notification sync
    try {
      const existing = JSON.parse(localStorage.getItem('skillsetu_candidate_notifications') || '[]');
      existing.unshift({
        id: Date.now(),
        type: 'interview',
        candidateName: selectedCandidateForInterview.name,
        role: selectedCandidateForInterview.appliedRole,
        roundType: interviewForm.roundType,
        date: interviewForm.date,
        time: interviewForm.time,
        meetLink: interviewForm.meetLink,
        timestamp: new Date().toLocaleTimeString()
      });
      localStorage.setItem('skillsetu_candidate_notifications', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage notification sync:', err);
    }

    setSelectedCandidateForInterview(null);
  };

  const handleOpenOfferModal = (cand) => {
    setSelectedCandidateForOffer(cand);
    setOfferForm({
      ctc: cand.offerDetails?.ctc || '₹8.50 LPA',
      roleTitle: cand.offerDetails?.roleTitle || cand.appliedRole || 'Ayush Analytical QC Associate',
      joiningDate: cand.offerDetails?.joiningDate || '2026-10-01',
      stipendTerms: cand.offerDetails?.stipendTerms || '₹45,000/mo stipend during 3-month probation'
    });
  };

  const handleSubmitOffer = (e) => {
    e.preventDefault();
    if (!selectedCandidateForOffer) return;

    // Prompt requirement: update status to "Offered"
    setCandidates(prev => prev.map(c => 
      c.id === selectedCandidateForOffer.id 
        ? { ...c, status: 'Offered', offerDetails: { ...offerForm } } 
        : c
    ));

    showToast(`Job offer extended to ${selectedCandidateForOffer.name}! Offer letter (${offerForm.ctc}) dispatched to student.`);

    // Cross-portal notification sync
    try {
      const existing = JSON.parse(localStorage.getItem('skillsetu_candidate_notifications') || '[]');
      existing.unshift({
        id: Date.now(),
        type: 'offer',
        candidateName: selectedCandidateForOffer.name,
        role: offerForm.roleTitle,
        ctc: offerForm.ctc,
        joiningDate: offerForm.joiningDate,
        timestamp: new Date().toLocaleTimeString()
      });
      localStorage.setItem('skillsetu_candidate_notifications', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage notification sync:', err);
    }

    setSelectedCandidateForOffer(null);
  };

  // Counts for pipeline summary
  const appliedCount = candidates.filter(c => c.status === 'Applied').length;
  const shortlistedCount = candidates.filter(c => c.status === 'Shortlisted').length;
  const interviewCount = candidates.filter(c => c.status === 'Interview Scheduled').length;
  const offeredCount = candidates.filter(c => c.status === 'Offered' || c.status === 'Offer Extended').length;

  const filteredCandidates = candidates.filter(c => {
    const matchesScore = c.match >= filterMatch;
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    let matchesStage = true;
    if (activeStageFilter !== 'All') {
      if (activeStageFilter === 'Offer Extended') {
        matchesStage = c.status === 'Offered' || c.status === 'Offer Extended';
      } else {
        matchesStage = c.status === activeStageFilter;
      }
    }
    return matchesScore && matchesSearch && matchesStage;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Applied':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
            Applied
          </span>
        );
      case 'Shortlisted':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Shortlisted
          </span>
        );
      case 'Interview Scheduled':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-amber-700" />
            Interview Scheduled
          </span>
        );
      case 'Offered':
      case 'Offer Extended':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
            Offer Extended
          </span>
        );
      default:
        return null;
    }
  };

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
            {user?.avatarImage ? (
              <img src={user.avatarImage} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              user?.avatar || 'VS'
            )}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900">{user?.name || 'Vikram Singhal'}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                Dabur India Ltd. (Clinical R&amp;D Division)
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {user?.role || 'Head of Talent Acquisition & Formulations'} · ID: <span className="font-mono font-semibold text-slate-700">{user?.id || 'DABUR-TA-092'}</span>
            </p>
          </div>
        </div>

        {/* Action Button & Stats */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPostModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post New Micro-Sprint Role</span>
          </button>
        </div>
      </div>

      {/* Primary Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200/90 pb-3 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setMainTab('applications')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            mainTab === 'applications'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Received Applications</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
            mainTab === 'applications' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
          }`}>
            {candidates.length}
          </span>
        </button>

        <button
          onClick={() => setMainTab('sprints')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            mainTab === 'sprints'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Active Micro-Sprint Openings</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700">
            3 Active
          </span>
        </button>

        <button
          onClick={() => setMainTab('analytics')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            mainTab === 'analytics'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Talent Pipeline Analytics</span>
        </button>
      </div>

      {/* TAB 1: RECEIVED APPLICATIONS (ATS PIPELINE) */}
      {mainTab === 'applications' && (
        <div className="space-y-6">
          {/* Recruiter 4-Stage Pipeline Lifecycle Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div 
              onClick={() => setActiveStageFilter(activeStageFilter === 'Applied' ? 'All' : 'Applied')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeStageFilter === 'Applied' 
                  ? 'bg-slate-100 border-slate-400 shadow-md ring-2 ring-slate-400/50' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider">1. Applied</span>
                <Users className="w-4 h-4 text-slate-400" />
              </div>
              <span className="text-2xl font-black text-slate-900">{appliedCount}</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Ready for initial screening</span>
            </div>

            <div 
              onClick={() => setActiveStageFilter(activeStageFilter === 'Shortlisted' ? 'All' : 'Shortlisted')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeStageFilter === 'Shortlisted' 
                  ? 'bg-blue-50 border-blue-400 shadow-md ring-2 ring-blue-400/50' 
                  : 'bg-white border-slate-200/80 hover:border-blue-300 shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between text-blue-700 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider">2. Shortlisted</span>
                <UserCheck className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-2xl font-black text-blue-700">{shortlistedCount}</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Vetted high-vector profiles</span>
            </div>

            <div 
              onClick={() => setActiveStageFilter(activeStageFilter === 'Interview Scheduled' ? 'All' : 'Interview Scheduled')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeStageFilter === 'Interview Scheduled' 
                  ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-400/50' 
                  : 'bg-white border-slate-200/80 hover:border-amber-300 shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between text-amber-700 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider">3. Interview Scheduled</span>
                <Calendar className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-2xl font-black text-amber-700">{interviewCount}</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Viva &amp; practical assay rounds</span>
            </div>

            <div 
              onClick={() => setActiveStageFilter(activeStageFilter === 'Offer Extended' ? 'All' : 'Offer Extended')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeStageFilter === 'Offer Extended' 
                  ? 'bg-emerald-50 border-emerald-400 shadow-md ring-2 ring-emerald-400/50' 
                  : 'bg-white border-slate-200/80 hover:border-emerald-300 shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between text-emerald-700 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider">4. Offer Extended</span>
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-2xl font-black text-emerald-800">{offeredCount}</span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Formal offer packets issued</span>
            </div>
          </div>

          {/* Interactive Pipeline Stage Selector Tabs */}
          <div className="flex items-center justify-between bg-white rounded-2xl p-2 border border-slate-200/80 overflow-x-auto no-scrollbar gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider px-3">Filter Stage:</span>
              {['All', 'Applied', 'Shortlisted', 'Interview Scheduled', 'Offer Extended'].map((stage) => {
                let count = candidates.length;
                if (stage === 'Applied') count = appliedCount;
                else if (stage === 'Shortlisted') count = shortlistedCount;
                else if (stage === 'Interview Scheduled') count = interviewCount;
                else if (stage === 'Offer Extended') count = offeredCount;

                return (
                  <button
                    key={stage}
                    onClick={() => setActiveStageFilter(stage)}
                    className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs font-bold ${
                      activeStageFilter === stage
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {stage} ({count})
                  </button>
                );
              })}
            </div>

            {activeStageFilter !== 'All' && (
              <button 
                onClick={() => setActiveStageFilter('All')}
                className="text-[11px] text-emerald-800 font-bold hover:underline px-3 cursor-pointer shrink-0"
              >
                Clear Filter
              </button>
            )}
          </div>

          {/* Candidate ATS Search & Filter Bar */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by candidate name, skill, or institution..."
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
                {[75, 85, 90].map((threshold) => (
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
            {filteredCandidates.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500 space-y-2">
                <Users className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="font-bold text-slate-700">No applicants found in "{activeStageFilter}" stage.</p>
                <p className="text-xs">Adjust your match threshold or select a different pipeline filter above.</p>
              </div>
            ) : (
              filteredCandidates.map((cand) => (
                <div key={cand.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all space-y-4">
                  {/* Candidate Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-extrabold text-base flex items-center justify-center border border-emerald-200">
                        {cand.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-extrabold text-slate-900">{cand.name}</h4>
                          {getStatusBadge(cand.status)}
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

                  {/* 4-Stage Interactive Advancement Pipeline Stepper */}
                  <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                      <span className="uppercase tracking-wider">Candidate Pipeline Stage:</span>
                      <span className="text-slate-700">Current Status: <strong className="text-emerald-800">{cand.status === 'Offered' ? 'Offer Extended' : cand.status}</strong></span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {/* Step 1: Applied */}
                      <button
                        onClick={() => {
                          setCandidates(prev => prev.map(c => c.id === cand.id ? { ...c, status: 'Applied' } : c));
                          showToast(`Candidate ${cand.name} moved to Applied status.`);
                        }}
                        className={`p-2 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                          cand.status === 'Applied'
                            ? 'bg-slate-800 text-white font-bold border-slate-900 shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 font-medium'
                        }`}
                      >
                        <span className="block text-[10px] opacity-75">Stage 1</span>
                        <span>Applied</span>
                      </button>

                      {/* Step 2: Shortlisted */}
                      <button
                        onClick={() => handleShortlist(cand)}
                        className={`p-2 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                          cand.status === 'Shortlisted'
                            ? 'bg-blue-700 text-white font-bold border-blue-800 shadow-xs'
                            : cand.status === 'Interview Scheduled' || cand.status === 'Offered'
                              ? 'bg-blue-50 text-blue-800 border-blue-200 font-semibold'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 font-medium'
                        }`}
                      >
                        <span className="block text-[10px] opacity-75">Stage 2</span>
                        <span>Shortlisted</span>
                      </button>

                      {/* Step 3: Interview Scheduled */}
                      <button
                        onClick={() => handleOpenInterviewModal(cand)}
                        className={`p-2 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                          cand.status === 'Interview Scheduled'
                            ? 'bg-amber-600 text-white font-bold border-amber-700 shadow-xs'
                            : cand.status === 'Offered'
                              ? 'bg-amber-50 text-amber-900 border-amber-200 font-semibold'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400 font-medium'
                        }`}
                      >
                        <span className="block text-[10px] opacity-75">Stage 3</span>
                        <span>Interview</span>
                      </button>

                      {/* Step 4: Offer Extended */}
                      <button
                        onClick={() => handleOpenOfferModal(cand)}
                        className={`p-2 rounded-xl text-center border text-xs transition-all cursor-pointer ${
                          cand.status === 'Offered'
                            ? 'bg-emerald-700 text-white font-bold border-emerald-800 shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 font-medium'
                        }`}
                      >
                        <span className="block text-[10px] opacity-75">Stage 4</span>
                        <span>Offer Extended</span>
                      </button>
                    </div>
                  </div>

                  {/* Practical Proof of Work Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Applied Target Role</span>
                      <strong className="text-slate-800 font-semibold">{cand.appliedRole}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Sprint Score &amp; Proof Task</span>
                      <strong className="text-emerald-800 font-extrabold block">{cand.sprintScore}</strong>
                      <span className="text-[11px] text-slate-600">{cand.sprintTask}</span>
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

                  {/* Scheduled Interview Highlight Banner */}
                  {cand.interviewDetails && (
                    <div className="p-3.5 bg-amber-50/90 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                          <Calendar className="w-4 h-4 text-amber-800" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <strong className="text-amber-950 font-extrabold">Round: {cand.interviewDetails.roundType}</strong>
                            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold">Confirmed</span>
                          </div>
                          <p className="text-amber-900 text-[11px] mt-0.5">
                            Date: <strong>{cand.interviewDetails.date}</strong> at <strong>{cand.interviewDetails.time}</strong>
                          </p>
                        </div>
                      </div>
                      <a 
                        href={cand.interviewDetails.meetLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs shadow-xs transition-colors shrink-0"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Join Room Link</span>
                      </a>
                    </div>
                  )}

                  {/* Extended Offer Highlight Banner */}
                  {cand.offerDetails && (
                    <div className="p-3.5 bg-emerald-50/90 rounded-2xl border border-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-200 text-emerald-900 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4 text-emerald-800" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <strong className="text-emerald-950 font-extrabold">Formal Offer: {cand.offerDetails.roleTitle}</strong>
                            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-mono font-bold text-xs">
                              {cand.offerDetails.ctc}
                            </span>
                          </div>
                          <p className="text-emerald-800 text-[11px] mt-0.5">
                            Target Joining: <strong>{cand.offerDetails.joiningDate}</strong> · {cand.offerDetails.stipendTerms}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-white text-emerald-800 text-[10px] font-bold rounded-lg border border-emerald-200 shadow-xs shrink-0">
                        Formal Packet Sent · Awaiting Acceptance
                      </span>
                    </div>
                  )}

                  {/* Action Bar with Stage Advancement Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      Verified by Apex Ayush Preceptor Faculty
                    </span>

                    <div className="flex flex-wrap items-center gap-2">
                      {/* Stage 1 -> Shortlist Candidate */}
                      {cand.status === 'Applied' && (
                        <button
                          onClick={() => handleShortlist(cand)}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Shortlist Candidate</span>
                        </button>
                      )}

                      {/* Stage 2 -> Schedule Interview */}
                      {(cand.status === 'Applied' || cand.status === 'Shortlisted') && (
                        <button
                          onClick={() => handleOpenInterviewModal(cand)}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Schedule Interview</span>
                        </button>
                      )}

                      {/* Reschedule Interview (if already scheduled) */}
                      {cand.status === 'Interview Scheduled' && (
                        <button
                          onClick={() => handleOpenInterviewModal(cand)}
                          className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 transition-all cursor-pointer flex items-center gap-1.5"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>Reschedule Interview</span>
                        </button>
                      )}

                      {/* Stage 3 -> Extend Offer */}
                      {(cand.status === 'Shortlisted' || cand.status === 'Interview Scheduled') && (
                        <button
                          onClick={() => handleOpenOfferModal(cand)}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Extend Job Offer</span>
                        </button>
                      )}

                      {/* Stage 4 -> Offered Badge & Edit Offer */}
                      {cand.status === 'Offered' && (
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-extrabold flex items-center gap-1 border border-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Offer Extended</span>
                          </div>
                          <button
                            onClick={() => handleOpenOfferModal(cand)}
                            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 cursor-pointer"
                          >
                            Edit Offer
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 2: ACTIVE SPRINT OPENINGS */}
      {mainTab === 'sprints' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900">Active Dabur Micro-Sprint Deployments</h3>
            <button
              onClick={() => setIsPostModalOpen(true)}
              className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl cursor-pointer flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Deploy New Sprint</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Accepting Candidates
                </span>
                <span className="text-xs font-mono text-slate-400">ID: SPR-QC-01</span>
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">Phytochemistry QC Trainee</h4>
              <p className="text-xs text-slate-500">Validation of botanical markers using automated HPTLC plates and Schedule T protocols.</p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Applications: <strong className="text-slate-900">12 Received</strong></span>
                <span className="text-emerald-800 font-bold">Stipend: ₹45K/mo</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Accepting Candidates
                </span>
                <span className="text-xs font-mono text-slate-400">ID: SPR-QC-02</span>
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">Clinical Assay Coordinator</h4>
              <p className="text-xs text-slate-500">Dravyaguna clinical research documentation and Ayurvedic Pharmacopoeia audit preparation.</p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Applications: <strong className="text-slate-900">8 Received</strong></span>
                <span className="text-emerald-800 font-bold">Stipend: ₹50K/mo</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Accepting Candidates
                </span>
                <span className="text-xs font-mono text-slate-400">ID: SPR-QC-03</span>
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">Schedule T Cleanroom Supervisor</h4>
              <p className="text-xs text-slate-500">Avaleha and Asava preparation cleanroom sterile airflow monitoring and batch assay testing.</p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Applications: <strong className="text-slate-900">15 Received</strong></span>
                <span className="text-emerald-800 font-bold">Stipend: ₹42K/mo</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TALENT PIPELINE ANALYTICS */}
      {mainTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Vector Match Quality</span>
              <span className="text-2xl font-black text-emerald-800">92.4%</span>
              <p className="text-xs text-slate-500 mt-1">Average semantic fit between student sprint proof &amp; Dabur job requirements.</p>
            </div>
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Shortlist-to-Interview Rate</span>
              <span className="text-2xl font-black text-blue-700">66.7%</span>
              <p className="text-xs text-slate-500 mt-1">Conversion velocity from vetted proof-of-work to live viva interview.</p>
            </div>
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Time to Offer Dispatch</span>
              <span className="text-2xl font-black text-amber-700">1.8 Days</span>
              <p className="text-xs text-slate-500 mt-1">Accelerated hiring pipeline powered by verified institutional marksheets.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm">Recruiter Pipeline Funnel Progression</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>1. Applied Stage (Initial Inbound)</span>
                  <span>{appliedCount + shortlistedCount + interviewCount + offeredCount} Total (100%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-slate-700 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-blue-800 mb-1">
                  <span>2. Shortlisted Stage (Preceptor Vetted)</span>
                  <span>{shortlistedCount + interviewCount + offeredCount} ({Math.round(((shortlistedCount + interviewCount + offeredCount) / candidates.length) * 100)}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${Math.round(((shortlistedCount + interviewCount + offeredCount) / candidates.length) * 100)}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-amber-800 mb-1">
                  <span>3. Interview Scheduled Stage (Live Viva)</span>
                  <span>{interviewCount + offeredCount} ({Math.round(((interviewCount + offeredCount) / candidates.length) * 100)}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: `${Math.round(((interviewCount + offeredCount) / candidates.length) * 100)}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-emerald-800 mb-1">
                  <span>4. Offer Extended Stage</span>
                  <span>{offeredCount} ({Math.round((offeredCount / candidates.length) * 100)}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-emerald-600 h-3 rounded-full" style={{ width: `${Math.max(10, Math.round((offeredCount / candidates.length) * 100))}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE INTERVIEW MODAL */}
      {selectedCandidateForInterview && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Schedule Interview Round</h3>
                  <p className="text-xs text-slate-500">Candidate: <strong>{selectedCandidateForInterview.name}</strong> ({selectedCandidateForInterview.degree})</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidateForInterview(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitInterview} className="space-y-3.5">
              {/* Round Type (Exact options requested in Agent Prompt #7: Technical Viva, HR, Clinical Assay) */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Round Type</label>
                <select
                  value={interviewForm.roundType}
                  onChange={(e) => setInterviewForm({ ...interviewForm, roundType: e.target.value })}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium cursor-pointer"
                  required
                >
                  <option value="Technical Viva">Technical Viva</option>
                  <option value="HR">HR</option>
                  <option value="Clinical Assay">Clinical Assay</option>
                  <option value="Technical Viva & Clinical Assay">Technical Viva &amp; Clinical Assay</option>
                  <option value="Schedule T Cleanroom QC Protocol Round">Schedule T Cleanroom QC Protocol Round</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Date</label>
                  <input
                    type="date"
                    value={interviewForm.date}
                    onChange={(e) => setInterviewForm({ ...interviewForm, date: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 11:00 AM IST"
                    value={interviewForm.time}
                    onChange={(e) => setInterviewForm({ ...interviewForm, time: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Google Meet / Physical Room Link</label>
                <input
                  type="text"
                  placeholder="https://meet.google.com/xxx-yyyy-zzz or Lab Room 204"
                  value={interviewForm.meetLink}
                  onChange={(e) => setInterviewForm({ ...interviewForm, meetLink: e.target.value })}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium font-mono"
                  required
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-[11px] text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1">
                  <Send className="w-3.5 h-3.5 text-amber-700" />
                  Automatic Notification Dispatch:
                </span>
                <p>Upon submission, candidate will be notified instantly via their SkillSetu Student Portal and institutional registered email.</p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCandidateForInterview(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl cursor-pointer hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Confirm &amp; Dispatch Invitation</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EXTEND OFFER MODAL */}
      {selectedCandidateForOffer && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
                  <Award className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Extend Formal Job Offer</h3>
                  <p className="text-xs text-slate-500">Candidate: <strong>{selectedCandidateForOffer.name}</strong> ({selectedCandidateForOffer.institution})</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidateForOffer(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitOffer} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Role Title</label>
                <input
                  type="text"
                  placeholder="e.g. Phytochemistry QC Trainee"
                  value={offerForm.roleTitle}
                  onChange={(e) => setOfferForm({ ...offerForm, roleTitle: e.target.value })}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Offer Letter CTC</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹8.50 LPA"
                    value={offerForm.ctc}
                    onChange={(e) => setOfferForm({ ...offerForm, ctc: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-bold text-emerald-800 font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Tentative Joining Date</label>
                  <input
                    type="date"
                    value={offerForm.joiningDate}
                    onChange={(e) => setOfferForm({ ...offerForm, joiningDate: e.target.value })}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Stipend / Probation Terms</label>
                <input
                  type="text"
                  placeholder="e.g. ₹45,000/mo during 3-month probation"
                  value={offerForm.stipendTerms}
                  onChange={(e) => setOfferForm({ ...offerForm, stipendTerms: e.target.value })}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                />
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/70 text-[11px] text-emerald-900 space-y-1">
                <span className="font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  Binding Digital Offer Letter:
                </span>
                <p>Status will update to "Offered". The student portfolio will immediately reflect this formal offer with a 7-day acceptance guarantee.</p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCandidateForOffer(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl cursor-pointer hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Issue &amp; Transmit Offer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* POST NEW OPENING MODAL */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Post New Ayush Clinical Opening</h3>
            <p className="text-xs text-slate-500">Candidates will be evaluated through practical competency assessments and verified profiles.</p>
            
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Role Title</label>
                <input
                  type="text"
                  placeholder="e.g., Phytochemistry QC Standardization Trainee"
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Mandatory Competency Requirements</label>
                <input
                  type="text"
                  defaultValue="Schedule T GMP, HPTLC Fingerprinting, Rasa Shastra"
                  className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800"
                />
              </div>
            </div>

            {postedSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs rounded-xl font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Opening published to SkillSetu network</span>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setIsPostModalOpen(false);
                  setPostedSuccess(false);
                }}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => setPostedSuccess(true)}
                className="px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-xl"
              >
                Deploy Opening
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
