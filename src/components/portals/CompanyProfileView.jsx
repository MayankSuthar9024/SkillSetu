import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  PlusCircle, 
  ExternalLink, 
  FileText, 
  Search, 
  Filter, 
  Sparkles, 
  Layers,
  ChevronRight,
  Mail,
  Phone,
  ArrowRight,
  FlaskConical,
  Beaker,
  Check
} from 'lucide-react';

export const CompanyProfileView = ({ user, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'jobs' | 'candidates' | 'certifications'
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [newRole, setNewRole] = useState({
    title: '',
    department: 'QC & Standardization',
    stipend: '₹35,000 - ₹45,000 / month',
    skills: 'HPTLC, GMP, Ayush Pharmacopoeia',
    location: 'Ghaziabad R&D Center (Hybrid)'
  });
  const [postSuccess, setPostSuccess] = useState(false);

  const activePostings = [
    {
      id: 'job-1',
      title: 'Junior Ayurvedic QC Officer (HPTLC Fingerprinting)',
      department: 'Phytochemistry & Standardization',
      location: 'Ghaziabad R&D Facility',
      type: 'Full-time / Fellow',
      stipend: '₹35,000 - ₹45,000 / mo',
      matchedCandidates: 12,
      requiredSkills: ['HPTLC Standardization', 'Schedule T GMP', 'Phytochemistry'],
      postedDate: '2 days ago',
      status: 'Active'
    },
    {
      id: 'job-2',
      title: 'MD Dravyaguna Research Fellow (Polyherbal Formulations)',
      department: 'Ayurvedic R&D Division',
      location: 'New Delhi / Hybrid',
      type: 'Research Fellowship',
      stipend: '₹50,000 - ₹65,000 / mo',
      matchedCandidates: 8,
      requiredSkills: ['MD Dravyaguna', 'Heavy Metal Assay', 'Pharmacovigilance'],
      postedDate: '5 days ago',
      status: 'Active'
    },
    {
      id: 'job-3',
      title: 'GMP Cleanroom Operations Specialist',
      department: 'Avaleha & Churna Production',
      location: 'Sahibabad Facility',
      type: 'Full-time',
      stipend: '₹30,000 - ₹40,000 / mo',
      matchedCandidates: 15,
      requiredSkills: ['Schedule T', 'Cleanroom Protocols', 'Batch Records'],
      postedDate: '1 week ago',
      status: 'Active'
    }
  ];

  const shortlistedCandidates = [
    {
      id: 'cand-1',
      name: 'Aarav Sharma',
      institution: 'National Institute of Ayurveda (NIA), Jaipur',
      degree: 'BAMS (Final Year)',
      match: 96,
      sprintScore: '94/100',
      skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Rasa Shastra'],
      status: 'Shortlisted'
    },
    {
      id: 'cand-2',
      name: 'Pooja Iyer',
      institution: 'All India Institute of Ayurveda (AIIA), Delhi',
      degree: 'MD Ayurveda (Dravyaguna)',
      match: 93,
      sprintScore: '91/100',
      skills: ['Heavy Metal Assay', 'Phytopharmacy'],
      status: 'Under Review'
    }
  ];

  const handlePostJob = (e) => {
    e.preventDefault();
    setPostSuccess(true);
    setTimeout(() => {
      setPostSuccess(false);
      setIsPostModalOpen(false);
      setNewRole({
        title: '',
        department: 'QC & Standardization',
        stipend: '₹35,000 - ₹45,000 / month',
        skills: 'HPTLC, GMP, Ayush Pharmacopoeia',
        location: 'Ghaziabad R&D Center (Hybrid)'
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      
      {/* Corporate Header Card with Cover Image */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        
        {/* Cover Photo */}
        <div className="h-48 sm:h-64 w-full bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 relative">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80" 
            alt="Dabur R&D Laboratory" 
            className="w-full h-full object-cover opacity-35 mix-blend-overlay"
          />
          <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md text-emerald-200 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ministry of Ayush Verified Corporate Partner</span>
          </div>
        </div>

        {/* Profile Details Bar */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 md:-mt-20 mb-4">
            
            {/* Logo Avatar */}
            <div className="flex items-end gap-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white font-extrabold text-3xl flex items-center justify-center border border-emerald-400/30 shadow-inner">
                  <span>DR</span>
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Dabur Research & Development Center
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex flex-wrap items-center gap-2">
                  <span>Ayurvedic Pharmaceuticals & Phytochemistry Division</span>
                  <span>•</span>
                  <span className="text-emerald-800 font-bold">ID: AYUSH-ENT-2026-902</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsPostModalOpen(true)}
                className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post Micro-Sprint Role</span>
              </button>
            </div>
          </div>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-700" />
              Ghaziabad & New Delhi, India
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-emerald-700" />
              <a href="https://dabur.com" target="_blank" rel="noreferrer" className="hover:underline text-emerald-800 font-semibold">
                www.dabur.com/ayush-rd
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-700" />
              10,000+ Employees Worldwide
            </span>
            <span className="flex items-center gap-1.5 text-amber-800 font-bold bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
              <Award className="w-3.5 h-3.5" />
              Schedule T GMP & NABL Certified
            </span>
          </div>

        </div>

      </div>

      {/* Recruiter Dashboard Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Active Openings</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">5</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">3 Micro-Sprints Live</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Matched Applicants</span>
          <div className="text-3xl font-extrabold text-emerald-800 mt-1">35</div>
          <span className="text-[11px] text-slate-500 mt-1 block">&gt;85% Vector Match Precision</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Shortlisted Scholars</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">28</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Ready for 1-Click Hiring</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Audit Proof-of-Work</span>
          <div className="text-3xl font-extrabold text-teal-800 mt-1">100%</div>
          <span className="text-[11px] text-teal-700 font-semibold mt-1 block">Blockchain Verified Reports</span>
        </div>
      </div>

      {/* Corporate Tabs Navigation */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'jobs'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Active Openings</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-900 font-extrabold">
            {activePostings.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('candidates')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'candidates'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          <span>Candidates</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-100 text-amber-900 font-extrabold">
            {shortlistedCandidates.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('certifications')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'certifications'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
          }`}
        >
          Compliance
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">About Dabur Ayush R&D Division</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dabur Research & Development Center is India’s premier herbal science research facility, pioneering standardizations for classical Ayurvedic formulations, HPLC marker profiling, phytopharmaceutical extraction, and clinical trial validation under Ministry of Ayush guidelines.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Through SkillSetu, Dabur directly connects with top BAMS and MD scholars from premier institutes (NIA Jaipur, AIIA New Delhi, GAC Pune) to sponsor micro-sprint challenges, evaluate real-world laboratory proof of work, and fast-track hiring for quality control and research roles.
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-emerald-950">Phytochemistry & HPTLC Lab</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">High-performance thin-layer chromatography and chemical standardization for 200+ botanicals.</p>
                  </div>
                </div>

                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200/80 flex items-start gap-3">
                  <Beaker className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-teal-950">Schedule T GMP Cleanrooms</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">State-of-the-art cleanrooms operating under Schedule T Good Manufacturing Practices.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Sprint Hiring Model Explanation */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white p-6 rounded-3xl shadow-md space-y-3">
              <span className="bg-white/20 text-emerald-200 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                SkillSetu Employer Partner Program
              </span>
              <h3 className="text-xl font-extrabold">No Generic Resumes. 100% Practical Evaluation.</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Instead of screening hundreds of static resumes, Dabur posts 2-week Micro-Sprint Challenges (e.g. HPTLC Marker Fingerprinting, GMP QC Protocols). Students submit verified laboratory reports, allowing us to shortlist candidates based on audited capability.
              </p>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="space-y-6">
            
            {/* Key Contact Recruiter */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Authorized Corporate Lead
              </h4>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white font-extrabold text-lg flex items-center justify-center shadow-xs">
                  VS
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">Dr. Vikram Sethi</h4>
                  <p className="text-xs text-slate-500">Industry Recruiter & R&D QC Head</p>
                  <p className="text-[10px] text-emerald-800 font-semibold mt-0.5">emp-dabur-qc-89</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>recruitment.rd@dabur.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>+91 120 3982000 (Ext 402)</span>
                </div>
              </div>
            </div>

            {/* Target Academic Institutions */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-3">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Partnered Ayush Academic Institutions
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 font-semibold text-slate-800 flex justify-between items-center">
                  <span>National Institute of Ayurveda (Jaipur)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Partner</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 font-semibold text-slate-800 flex justify-between items-center">
                  <span>All India Institute of Ayurveda (Delhi)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Partner</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60 font-semibold text-slate-800 flex justify-between items-center">
                  <span>Government Ayurvedic College (Pune)</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Partner</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: ACTIVE JOBS */}
      {activeTab === 'jobs' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200/80">
            <span className="text-xs font-extrabold text-slate-900">
              Active Job Openings & Sponsored Micro-Sprints ({activePostings.length})
            </span>
            <button
              onClick={() => setIsPostModalOpen(true)}
              className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post New Role</span>
            </button>
          </div>

          {activePostings.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4 hover:border-emerald-300 transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-900">{job.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {job.department} • {job.location}
                  </p>
                </div>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                  {job.stipend}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {job.requiredSkills.map((skill, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-semibold">
                    <strong className="text-slate-900">{job.matchedCandidates}</strong> candidates matched
                  </span>
                  <button 
                    onClick={() => setActiveTab('candidates')}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Candidates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: CANDIDATES */}
      {activeTab === 'candidates' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex justify-between items-center">
            <span className="text-xs font-extrabold text-slate-900">
              Shortlisted Candidates with Verified Proof of Work ({shortlistedCandidates.length})
            </span>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Vector Match Precision &gt; 90%
            </span>
          </div>

          {shortlistedCandidates.map((cand) => (
            <div key={cand.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white font-extrabold text-lg flex items-center justify-center">
                    {cand.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900">{cand.name}</h4>
                    <p className="text-xs text-slate-500">{cand.degree} • {cand.institution}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
                  {cand.match}% Match
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex justify-between items-center text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">Practical Sprint Score</span>
                  <strong className="text-emerald-800 font-extrabold">{cand.sprintScore}</strong>
                </div>
                <div className="flex gap-1.5">
                  {cand.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-semibold text-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: CERTIFICATIONS */}
      {activeTab === 'certifications' && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900">Ministry Accreditation & Quality Audits</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-slate-900">Ministry of Ayush Corporate License</h4>
                <p className="text-slate-500 text-[11px] mt-0.5">License No: AYUSH-ENT-2026-902 (Valid thru 2030)</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-slate-900">Schedule T GMP Certification</h4>
                <p className="text-slate-500 text-[11px] mt-0.5">Certified for Herbal Extraction & Formulations</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POST NEW SPRINT MODAL */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-extrabold text-slate-900">Post Micro-Sprint Role</h3>
              </div>
              <button 
                onClick={() => setIsPostModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold p-1"
              >
                ✕
              </button>
            </div>

            {postSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">Micro-Sprint Role Published!</h4>
                <p className="text-xs text-slate-500">Matching candidates with vector similarity &gt; 85% will receive notifications.</p>
              </div>
            ) : (
              <form onSubmit={handlePostJob} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Role Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Junior Ayurvedic QC Officer (HPTLC Fingerprinting)"
                    value={newRole.title}
                    onChange={(e) => setNewRole({ ...newRole, title: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Department</label>
                    <input
                      type="text"
                      placeholder="e.g. Phytochemistry"
                      value={newRole.department}
                      onChange={(e) => setNewRole({ ...newRole, department: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Stipend / Salary</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹35,000 - ₹45,000 / mo"
                      value={newRole.stipend}
                      onChange={(e) => setNewRole({ ...newRole, stipend: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Required Ayush Skills</label>
                  <input
                    type="text"
                    placeholder="HPTLC Standardization, Schedule T GMP, Phytochemistry"
                    value={newRole.skills}
                    onChange={(e) => setNewRole({ ...newRole, skills: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPostModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-800 text-white rounded-xl font-bold hover:bg-emerald-900 shadow-xs"
                  >
                    Publish Role Challenge
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
