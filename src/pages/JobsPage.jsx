import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Calendar,
  X,
  AlertTriangle,
  BookOpen,
  Star,
  Clock,
  ChevronRight,
  Sparkles,
  PlayCircle
} from 'lucide-react';
import { INITIAL_FEED_POSTS } from '../data/feedPostsData';
import { ALL_COURSES } from '../data/coursesData';

export function JobsPage({ currentUser, onNavigate }) {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' | 'applied'
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [appliedModalJob, setAppliedModalJob] = useState(null);
  const [gapAnalysisJob, setGapAnalysisJob] = useState(null);

  // Available job opportunities from feed
  const jobs = INITIAL_FEED_POSTS.filter(p => p.isInternship).map(p => ({
    id: `job-${p.id}`,
    title: p.title,
    company: p.author?.brandName || p.author?.name || 'Ayush Enterprise',
    location: p.location,
    stipend: p.stipend,
    duration: p.duration,
    skills: (p.skillsRequired || []).slice(0, 3),
    match: 90 + (p.id % 8),
    logoBg: p.author?.avatarBg || 'bg-emerald-900',
    logoText: p.author?.avatar || 'AY',
    logoImage: p.author?.avatarImage,
    recruiter: p.author?.recruiter
  }));

  // Student's applied jobs with timeline progress
  const [appliedList, setAppliedList] = useState([
    {
      id: 'app-1',
      jobId: 'job-1',
      title: 'Phytochemical Standardization & HPTLC QC Specialist',
      company: 'Dabur Research Center',
      location: 'Ghaziabad',
      stipend: '₹25,000 / mo',
      appliedDate: 'Yesterday',
      status: 'Interview Scheduled',
      statusType: 'success', // 'success' | 'pending' | 'active'
      activeStep: 3,
      steps: ['Applied', 'Reviewed', 'Matched', 'Interview'],
      interviewNote: 'Technical Round with Dr. Vikram Sethi on Sept 10 at 11:00 AM'
    },
    {
      id: 'app-2',
      jobId: 'job-3',
      title: 'Industrial Apprentice: Large-Scale GMP Extraction',
      company: 'Patanjali Research Foundation',
      location: 'Haridwar',
      stipend: '₹22,000 / mo',
      appliedDate: '3 days ago',
      status: 'In Review',
      statusType: 'pending',
      activeStep: 1,
      steps: ['Applied', 'Reviewed', 'Matched', 'Interview'],
      interviewNote: null
    }
  ]);

  // Determine student's verified skills vs required job competencies
  const getSkillBreakdown = (job) => {
    if (!job) return { matched: [], gaps: [], matchScore: 78 };
    const studentVerifiedSkills = [
      'Phytochemistry',
      'HPTLC Fingerprinting',
      'Radial Pulse Diagnostics',
      'Herbal Formulation',
      'Analytical QC',
      'Classical Formulations'
    ];

    const matched = [];
    const gaps = [];

    (job.skills || []).forEach(skill => {
      const isMatched = studentVerifiedSkills.some(s => 
        skill.toLowerCase().includes(s.toLowerCase().split(' ')[0]) || 
        s.toLowerCase().includes(skill.toLowerCase().split(' ')[0])
      );
      if (isMatched || (matched.length === 0 && job.skills.length > 1)) {
        matched.push(skill);
      } else {
        gaps.push(skill);
      }
    });

    // Ensure at least 1 gap exists so bridge courses can always be demonstrated
    if (gaps.length === 0 && job.skills && job.skills.length > 1) {
      gaps.push(matched.pop());
    }

    const matchScore = Math.round((matched.length / Math.max(1, (matched.length + gaps.length))) * 100);
    return { 
      matched, 
      gaps, 
      matchScore: Math.min(matchScore, 82)
    };
  };

  // Find targeted bridge courses from catalog that resolve the missing skills
  const getSuggestedCoursesForJob = (job, gaps) => {
    if (!job) return [];
    const matched = ALL_COURSES.filter(course => 
      gaps.some(gap => {
        const keyword = gap.toLowerCase().split(' ')[0];
        return course.title.toLowerCase().includes(keyword) ||
          course.competencies.some(c => c.toLowerCase().includes(keyword)) ||
          (course.relatedSkills && course.relatedSkills.some(r => r.toLowerCase().includes(keyword)));
      })
    );
    // Include top relevant foundational bridge courses as fallbacks
    const fallbacks = ALL_COURSES.filter(c => !matched.some(m => m.id === c.id));
    return [...matched, ...fallbacks].slice(0, 2);
  };

  // Trigger skill match modal first when user clicks apply
  const handleInitiateApply = (job) => {
    if (appliedList.some(a => a.jobId === job.id)) {
      setActiveTab('applied');
      return;
    }
    setGapAnalysisJob(job);
  };

  // Final confirmation to submit application
  const handleConfirmApply = (job) => {
    setGapAnalysisJob(null);
    const newApplication = {
      id: `app-${Date.now()}`,
      jobId: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      stipend: job.stipend,
      appliedDate: 'Today',
      status: 'Application Submitted',
      statusType: 'active',
      activeStep: 0,
      steps: ['Applied', 'Reviewed', 'Matched', 'Interview'],
      interviewNote: null
    };

    setAppliedList(prev => [newApplication, ...prev]);
    setAppliedModalJob(job);
  };

  // Open course in Skill section
  const handleOpenCourseInSkills = (course) => {
    setGapAnalysisJob(null);
    if (onNavigate) {
      onNavigate('skills', { course });
    }
  };

  // Filtered jobs for Explore tab
  const filteredJobs = jobs.filter(job => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.skills.some(s => s.toLowerCase().includes(query));

    const matchesLocation = locationFilter === 'all' || 
      (locationFilter === 'delhi' && job.location.toLowerCase().includes('delhi')) ||
      (locationFilter === 'kerala' && job.location.toLowerCase().includes('kerala')) ||
      (locationFilter === 'hybrid' && job.location.toLowerCase().includes('hybrid'));

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="max-w-6xl mx-auto pb-20 px-4 sm:px-6 space-y-8 animate-fadeIn">

      {/* Spacious, Intentional Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pt-2 border-b border-slate-200/70 pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Careers
          </h1>
          <p className="text-sm text-slate-500 font-normal">
            Verified clinical & industrial roles matched to your credentials.
          </p>
        </div>

        {/* Minimalist Segmented Switcher */}
        <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200/80 self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'explore'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Explore ({jobs.length})
          </button>
          <button
            onClick={() => setActiveTab('applied')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'applied'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Applications</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'applied' ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-700'
            }`}>
              {appliedList.length}
            </span>
          </button>
        </div>
      </div>

      {/* EXPLORE VIEW */}
      {activeTab === 'explore' && (
        <div className="space-y-6">
          {/* Refined Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search roles, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 rounded-xl pl-10 pr-9 py-2 text-sm text-slate-900 placeholder-slate-400 transition-all outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Location Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {[
                { id: 'all', label: 'All' },
                { id: 'delhi', label: 'Delhi NCR' },
                { id: 'kerala', label: 'Kerala' },
                { id: 'hybrid', label: 'Hybrid' }
              ].map(loc => (
                <button
                  key={loc.id}
                  onClick={() => setLocationFilter(loc.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    locationFilter === loc.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Postings Grid */}
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 space-y-3">
              <Briefcase className="w-10 h-10 text-slate-300 mx-auto stroke-[1.5]" />
              <p className="text-sm font-medium text-slate-700">No matching positions found</p>
              <button
                onClick={() => { setSearchQuery(''); setLocationFilter('all'); }}
                className="text-xs font-semibold text-slate-900 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredJobs.map((job) => {
                const isApplied = appliedList.some(a => a.jobId === job.id);

                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-100 transition-all flex flex-col justify-between space-y-5"
                  >
                    {/* Header: Company Avatar, Title, Match Indicator */}
                    <div className="space-y-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-11 h-11 rounded-xl ${job.logoBg} text-white font-bold text-xs flex items-center justify-center shrink-0 overflow-hidden shadow-2xs border border-slate-100`}>
                            {job.logoImage ? (
                              <img src={job.logoImage} alt={job.company} className="w-full h-full object-cover" />
                            ) : (
                              job.logoText
                            )}
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-bold text-base text-slate-900 leading-snug truncate">
                              {job.title}
                            </h2>
                            <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                              {job.company}
                            </p>
                          </div>
                        </div>

                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0 border border-emerald-100">
                          {job.match}% match
                        </span>
                      </div>

                      {/* Key Details (Spacious, quiet metadata) */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-600">
                        <span className="font-semibold text-slate-900">{job.stipend}</span>
                        <span className="text-slate-300">·</span>
                        <span>{job.duration}</span>
                        <span className="text-slate-300">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </span>
                      </div>

                      {/* Essential Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      {isApplied ? (
                        <div className="flex items-center justify-between w-full">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>Applied</span>
                          </span>
                          <button
                            onClick={() => setActiveTab('applied')}
                            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            Track Status →
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleInitiateApply(job)}
                          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Apply</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* APPLICATIONS VIEW: CLEAN STATUS TRACKING */}
      {activeTab === 'applied' && (
        <div className="space-y-4">
          {appliedList.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 space-y-3">
              <Briefcase className="w-10 h-10 text-slate-300 mx-auto stroke-[1.5]" />
              <p className="text-sm font-medium text-slate-700">No submitted applications yet</p>
              <button
                onClick={() => setActiveTab('explore')}
                className="text-xs font-semibold text-slate-900 hover:underline cursor-pointer"
              >
                Explore open positions
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {appliedList.map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5"
                >
                  {/* Top: Position, Company, Status Pill, Recruiter Message CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="font-bold text-base sm:text-lg text-slate-900">
                          {app.title}
                        </h2>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          app.statusType === 'success' 
                            ? 'text-emerald-800 bg-emerald-50 border-emerald-200'
                            : app.statusType === 'pending'
                            ? 'text-amber-800 bg-amber-50 border-amber-200'
                            : 'text-slate-700 bg-slate-100 border-slate-200'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        {app.company} · {app.location} · {app.stipend} · Applied {app.appliedDate}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate && onNavigate('messages')}
                      className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      <span>Message Recruiter</span>
                    </button>
                  </div>

                  {/* Horizontal Segmented Progress Bar */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2">
                      {app.steps.map((stepName, stepIdx) => {
                        const isDone = stepIdx <= app.activeStep;
                        const isCurrent = stepIdx === app.activeStep;

                        return (
                          <div key={stepIdx} className="space-y-1.5">
                            {/* Segment Bar */}
                            <div className={`h-1.5 rounded-full transition-colors ${
                              isDone ? 'bg-slate-900' : 'bg-slate-100'
                            }`} />
                            {/* Step Label */}
                            <span className={`text-[11px] block truncate transition-colors ${
                              isCurrent 
                                ? 'font-bold text-slate-900' 
                                : isDone 
                                ? 'font-medium text-slate-700' 
                                : 'font-normal text-slate-400'
                            }`}>
                              {stepName}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interview Note Callout */}
                  {app.interviewNote && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 flex items-center gap-2.5 text-xs text-slate-800">
                      <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span className="font-medium">{app.interviewNote}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Clean Application Confirmation Modal */}
      {appliedModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl border border-slate-200 space-y-4 text-center">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Application Submitted
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your portfolio has been shared with <strong>{appliedModalJob.company}</strong>.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setAppliedModalJob(null);
                  setActiveTab('applied');
                }}
                className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Track Status
              </button>
              <button
                onClick={() => setAppliedModalJob(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SKILL MATCH & GAP ANALYSIS MODAL */}
      {gapAnalysisJob && (() => {
        const { matched, gaps, matchScore } = getSkillBreakdown(gapAnalysisJob);
        const suggestedCourses = getSuggestedCoursesForJob(gapAnalysisJob, gaps);

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200/80 overflow-hidden my-auto flex flex-col max-h-[92vh]">
              
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight truncate">
                    Role Match Analysis
                  </h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {gapAnalysisJob.title} · <span className="text-slate-700 font-medium">{gapAnalysisJob.company}</span>
                  </p>
                </div>

                <button
                  onClick={() => setGapAnalysisJob(null)}
                  className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 overflow-y-auto flex-1">
                
                {/* Clean Score Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{matchScore}%</span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                        {matchScore >= 80 ? 'Strong Match' : 'Prerequisites Met'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-normal">
                      {matched.length} of {matched.length + gaps.length} criteria verified on your portfolio
                    </p>
                  </div>
                  <div className="w-20 sm:w-28 bg-slate-200 rounded-full h-2 overflow-hidden shrink-0">
                    <div 
                      className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${matchScore}%` }}
                    />
                  </div>
                </div>

                {/* Matched vs Gaps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>Verified Match ({matched.length})</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {matched.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>Missing Skills ({gaps.length})</span>
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {gaps.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bridge Course Recommendation */}
                {suggestedCourses.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Suggested Bridge Course
                      </h4>
                      <span className="text-[11px] text-slate-400">Available in Skills</span>
                    </div>

                    {suggestedCourses.slice(0, 1).map(course => (
                      <div
                        key={course.id}
                        className="p-3.5 sm:p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img 
                            src={course.posterImage} 
                            alt={course.title}
                            className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200"
                          />
                          <div className="min-w-0">
                            <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                              {course.title}
                            </h5>
                            <p className="text-xs text-slate-500 truncate mt-0.5">
                              {course.author} · {course.duration} · Free Access
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleOpenCourseInSkills(course)}
                          className="self-stretch sm:self-auto px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-semibold shrink-0 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <span>Open in Skills</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 bg-white">
                <button
                  onClick={() => setGapAnalysisJob(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer text-center"
                >
                  Cancel
                </button>

                <button
                  onClick={() => handleConfirmApply(gapAnalysisJob)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <span>Apply with {matchScore}% Match</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        );
      })()}

    </div>
  );
}

export default JobsPage;
