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
  Award,
  Layers,
  Check,
  UserCheck,
  Globe
} from 'lucide-react';

export function CompanyPage({ onNavigate, onOpenAuthModal, currentUser }) {
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
      status: 'Ready for Review',
      mentor: 'Prof. Meenakshi Joshi'
    },
    {
      id: 'c-2',
      name: 'Pooja Iyer',
      institution: 'All India Institute of Ayurveda (AIIA), Delhi',
      degree: 'MD Ayurveda (Dravyaguna)',
      match: 93,
      skills: ['Heavy Metal Assay', 'Phytopharmacy', 'Pharmacovigilance'],
      sprintScore: '91/100',
      sprintTask: 'NABL Analytical Method Validation',
      hash: '0x7E3A9102',
      status: 'Ready for Review',
      mentor: 'Dr. Rajeshwar Pant'
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
      status: 'Ready for Review',
      mentor: 'Prof. V. K. Nambiar'
    },
    {
      id: 'c-4',
      name: 'Divya Nair',
      institution: 'Government Siddha Medical College, Chennai',
      degree: 'BSMS Graduate',
      match: 91,
      skills: ['Siddha Herbal Extraction', 'Standardization', 'Microbiology'],
      sprintScore: '92/100',
      sprintTask: 'Herbal Bioactive Marker Extraction Protocol',
      hash: '0x5C91BA44',
      status: 'Ready for Review',
      mentor: 'Dr. K. Swaminathan'
    }
  ]);

  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'openings' | 'labs'
  const [filterMatch, setFilterMatch] = useState(85);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [postedSuccess, setPostedSuccess] = useState(false);

  const companyUser = currentUser || {
    name: "Dr. Vikram Sethi",
    role: "Industry Recruiter & R&D Lead",
    id: "EMP-DABUR-QC-89",
    email: "recruitment.rd@dabur.com",
    institution: "Dabur Research & Development Center",
    avatar: "VS"
  };

  const handleShortlist = (id) => {
    setCandidates(prev => prev.map(c => 
      c.id === id ? { ...c, status: 'Fast-Track Shortlisted' } : c
    ));
  };

  const filteredCandidates = candidates.filter(c => 
    c.match >= filterMatch && 
    (c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
     c.institution.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Enterprise Banner */}
        <div className="relative overflow-hidden bg-white border border-slate-200/90 text-slate-900 rounded-3xl p-6 sm:p-10 element-glow-shadow">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-800 text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center shadow-md border border-emerald-700 shrink-0">
                {companyUser.avatar || 'VS'}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-amber-700" /> Verified Corporate Partner
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200">
                    Partner ID: {companyUser.id}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-serif">
                  {companyUser.institution}
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                  {companyUser.name} · {companyUser.role}
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsPostModalOpen(true)}
                className="w-full md:w-auto px-5 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4 text-emerald-300" />
                <span>Post Micro-Sprint Role</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{filteredCandidates.length}</span>
            <span className="text-xs text-slate-500 font-semibold block">Pre-Vetted Candidates (&gt;85%)</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800">100%</span>
            <span className="text-xs text-slate-500 font-semibold block">Audited Proof of Work</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-700">5 Active</span>
            <span className="text-xs text-slate-500 font-semibold block">Pharma & QC Openings</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-teal-800">40% Faster</span>
            <span className="text-xs text-slate-500 font-semibold block">Recruitment Speed</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-3">
          {[
            { id: 'pipeline', label: 'Talent Vector ATS Pipeline', icon: Users, badge: `${filteredCandidates.length} Candidates` },
            { id: 'openings', label: 'Active Micro-Sprint Openings', icon: Briefcase, badge: '5 Openings' },
            { id: 'labs', label: 'Corporate R&D Lab Showcase', icon: Building2, badge: 'Verified' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm ring-2 ring-emerald-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                <span>{tab.label}</span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: ATS Pipeline */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Filter Search Bar */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search candidate name, skill, or institution..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-medium text-slate-800"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Minimum Skill Threshold:
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

            {/* Candidates Pipeline Cards */}
            <div className="space-y-4">
              {filteredCandidates.map((cand) => (
                <div key={cand.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 font-extrabold text-base flex items-center justify-center border border-emerald-200 shrink-0">
                        {cand.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900">{cand.name}</h4>
                        <p className="text-xs text-slate-500">{cand.degree} · {cand.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                        {cand.match}% Skill Vector Match
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
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Sprint Score & Accuracy</span>
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
                      Mentored & Verified by {cand.mentor}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShortlist(cand.id)}
                        disabled={cand.status === 'Fast-Track Shortlisted'}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          cand.status === 'Fast-Track Shortlisted'
                            ? 'bg-emerald-100 text-emerald-900 cursor-default border border-emerald-300'
                            : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-xs'
                        }`}
                      >
                        {cand.status === 'Fast-Track Shortlisted' ? (
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

        {/* TAB 2: Active Openings */}
        {activeTab === 'openings' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Active Corporate Openings
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Roles configured with automatic SkillSetu vector thresholds.
                  </p>
                </div>
                <button 
                  onClick={() => setIsPostModalOpen(true)}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Post New Role</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Phytochemistry QC Standardization Trainee', stipend: '₹45,000 / mo', location: 'Ghaziabad R&D Lab', applicants: 18, req: 'Schedule T & HPTLC 85%+' },
                  { title: 'Schedule T GMP Sterile Area Manager', stipend: '₹60,000 / mo', location: 'Sahibabad Facility', applicants: 12, req: 'Cleanroom & QA 80%+' },
                  { title: 'Ayush Pharmacovigilance Associate', stipend: '₹40,000 / mo', location: 'New Delhi / Hybrid', applicants: 24, req: 'Adverse Event Protocol 75%+' },
                  { title: 'Botanical Marker Extraction Specialist', stipend: '₹55,000 / mo', location: 'Haridwar Facility', applicants: 9, req: 'Spectrophotometry 85%+' },
                ].map((job, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-extrabold text-sm text-slate-900">{job.title}</h3>
                      <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                        {job.stipend}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{job.location} · <strong className="text-slate-700">{job.applicants} Candidates Matched</strong></p>
                    <div className="text-[11px] font-bold text-slate-700 bg-white p-2 rounded-xl border border-slate-200">
                      Required Threshold: {job.req}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Corporate Labs */}
        {activeTab === 'labs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Dabur Research & Development Center Infrastructure
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Pioneering standardizations for classical Ayurvedic formulations & phytopharmaceutical extraction.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <h3 className="font-extrabold text-sm text-slate-900">HPTLC Marker Profiling Lab</h3>
                  <p className="text-xs text-slate-500">High-performance thin layer chromatography units for botanical bio-equivalence testing.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <h3 className="font-extrabold text-sm text-slate-900">Schedule T GMP Cleanrooms</h3>
                  <p className="text-xs text-slate-500">Class 100,000 cleanroom facilities for sterile herbal extract formulations.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <h3 className="font-extrabold text-sm text-slate-900">Heavy Metal ICP-MS Center</h3>
                  <p className="text-xs text-slate-500">Inductively coupled plasma mass spectrometry for sub-ppm trace metal validation.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Post Modal */}
        {isPostModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Post New Ayush Clinical Opening</h3>
              <p className="text-xs text-slate-500">Candidates will be evaluated through practical competency assessments and verified dossiers.</p>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Role Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Phytochemistry QC Standardization Trainee"
                    value={newJobTitle}
                    onChange={(e) => setNewJobTitle(e.target.value)}
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mandatory Competency Requirements</label>
                  <input
                    type="text"
                    defaultValue="Schedule T GMP, HPTLC Fingerprinting, Rasa Shastra"
                    className="w-full p-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium"
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
    </div>
  );
}

export default CompanyPage;
