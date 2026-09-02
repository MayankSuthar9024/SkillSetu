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
  Briefcase
} from 'lucide-react';

export const CompanyPortalView = ({ user }) => {
  const [candidates, setCandidates] = useState([
    {
      id: 'c-1',
      name: 'Aarav Sharma',
      institution: 'NIA Jaipur',
      degree: 'BAMS (Final Year)',
      match: 96,
      skills: ['HPTLC Standardization', 'Schedule T GMP', 'Rasa Shastra', 'Phytochemistry'],
      sprintScore: '94/100',
      sprintTask: 'Triphala Churna HPTLC Marker Fingerprinting',
      hash: '0x9F4C82E1',
      status: 'Ready for Review'
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
      status: 'Ready for Review'
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
      status: 'Ready for Review'
    }
  ]);

  const [filterMatch, setFilterMatch] = useState(85);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState('');
  const [postedSuccess, setPostedSuccess] = useState(false);

  const handleShortlist = (id) => {
    setCandidates(prev => prev.map(c => 
      c.id === id ? { ...c, status: 'Fast-Track Shortlisted' } : c
    ));
  };

  const filteredCandidates = candidates.filter(c => 
    c.match >= filterMatch && 
    (c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="space-y-6">
      {/* Enterprise Recruiter Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40">
            {user.avatar || 'VS'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900">{user.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                Verified Corporate Partner
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {user.role} · {user.institution} · ID: <span className="font-mono font-semibold text-slate-700">{user.id}</span>
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

      {/* Recruiter Quick Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-slate-900">{filteredCandidates.length}</span>
          <span className="text-xs text-slate-500 block mt-0.5">Matched Profiles (&gt;85%)</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-emerald-800">100%</span>
          <span className="text-xs text-slate-500 block mt-0.5">Pre-Audited Proof of Work</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-amber-700">5</span>
          <span className="text-xs text-slate-500 block mt-0.5">Active Job Openings</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center">
          <span className="text-2xl font-extrabold text-blue-700">0% Noise</span>
          <span className="text-xs text-slate-500 block mt-0.5">Zero MCQ Reliance</span>
        </div>
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
        {filteredCandidates.map((cand) => (
          <div key={cand.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-extrabold text-base flex items-center justify-center border border-emerald-200">
                  {cand.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">{cand.name}</h4>
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
                Verified by Apex Ayush Faculty Mentor
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

      {/* Post Opening Modal Simulation */}
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
