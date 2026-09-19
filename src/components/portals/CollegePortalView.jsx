import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  XCircle,
  FileText,
  ExternalLink,
  Clock,
  UserCheck,
  Building2,
  Search,
  Filter,
  Check,
  X,
  BellRing,
  Eye,
  Download,
  Copy,
  RotateCcw,
  HelpCircle,
  Calendar,
  Layers,
  Award,
  Users,
  Briefcase
} from 'lucide-react';
import { PLATFORM_METADATA } from '../../data/portalData';

// Initial Mock Data: 5 Student Submissions awaiting Registrar audit
const INITIAL_PENDING_SUBMISSIONS = [
  {
    id: 'sub-001',
    candidateName: 'Aarav Sharma',
    rollNumber: 'NIA-2022-AY-042',
    program: 'BAMS (Final Year)',
    avatar: 'AS',
    documentClaimed: 'BAMS Sem 8 Marksheet (8.94 CGPA)',
    documentCategory: 'Academic Marksheet',
    submittedOn: '18 Sep 2026',
    fileLink: 'aarav_sem8_marksheet.pdf',
    fileSize: '2.4 MB',
    digiLockerStatus: 'DigiLocker Verified',
    digiLockerUri: 'in.gov.digilocker/nia/2026-sem8-042',
    digiLockerVerified: true,
    claimDetails: 'Aggregate: 8.94 CGPA · First Class with Distinction in Shalya Tantra & Kayachikitsa'
  },
  {
    id: 'sub-002',
    candidateName: 'Sunita Patel',
    rollNumber: 'NIA-2021-AY-118',
    program: 'BAMS (Final Year)',
    avatar: 'SP',
    documentClaimed: '12th PCB Certificate',
    documentCategory: 'Eligibility Credential',
    submittedOn: '17 Sep 2026',
    fileLink: 'sunita_patel_cbse_12th_pcb.pdf',
    fileSize: '1.8 MB',
    digiLockerStatus: 'DigiLocker Verified',
    digiLockerUri: 'in.gov.digilocker/cbse/2021-pcb-118',
    digiLockerVerified: true,
    claimDetails: 'CBSE Central Board · Physics: 92%, Chemistry: 95%, Biology: 96% (Aggregate 94.2%)'
  },
  {
    id: 'sub-003',
    candidateName: 'Rohan Deshmukh',
    rollNumber: 'NIA-2023-AY-089',
    program: 'BAMS (3rd Professional)',
    avatar: 'RD',
    documentClaimed: 'Schedule T Internship',
    documentCategory: 'Industrial & GMP Training',
    submittedOn: '16 Sep 2026',
    fileLink: 'rohan_schedule_t_internship.pdf',
    fileSize: '3.1 MB',
    digiLockerStatus: 'DigiLocker Verified',
    digiLockerUri: 'in.gov.digilocker/ayush-gmp/schT-089',
    digiLockerVerified: true,
    claimDetails: 'Completed 240 Hours Schedule T GMP Cleanroom & Classical Rasa Shastra Protocols'
  },
  {
    id: 'sub-004',
    candidateName: 'Pooja Iyer',
    rollNumber: 'NIA-2020-AY-015',
    program: 'MD Ayurveda (Dravyaguna)',
    avatar: 'PI',
    documentClaimed: 'BAMS Degree Certificate (Gold Medalist)',
    documentCategory: 'Graduation Degree',
    submittedOn: '15 Sep 2026',
    fileLink: 'pooja_iyer_bams_degree.pdf',
    fileSize: '4.6 MB',
    digiLockerStatus: 'DigiLocker Verified',
    digiLockerUri: 'in.gov.digilocker/nia/degree-2024-015',
    digiLockerVerified: true,
    claimDetails: 'Degree in Ayurvedic Medicine & Surgery · NCISM Registration: NCISM-AY-2024-89102'
  },
  {
    id: 'sub-005',
    candidateName: 'Vikramaditya Singh',
    rollNumber: 'NIA-2022-AY-104',
    program: 'BAMS (Final Year)',
    avatar: 'VS',
    documentClaimed: 'CCRAS Clinical Research Fellowship Record',
    documentCategory: 'Clinical Competency',
    submittedOn: '14 Sep 2026',
    fileLink: 'vikramaditya_ccras_fellowship.pdf',
    fileSize: '2.0 MB',
    digiLockerStatus: 'DigiLocker Verified',
    digiLockerUri: 'in.gov.digilocker/ccras/pv-104-2026',
    digiLockerVerified: true,
    claimDetails: 'Central Council for Research in Ayurvedic Sciences · Adverse Event Reporting & Pharmacovigilance'
  }
];

// Pre-existing verified records for the audit ledger
const INITIAL_VERIFIED_RECORDS = [
  {
    id: 'ver-101',
    candidateName: 'Meera Nambiar',
    rollNumber: 'NIA-2021-AY-076',
    program: 'BAMS Graduate',
    documentClaimed: 'NCISM Compulsory Rotatory Internship Completion',
    submittedOn: '10 Sep 2026',
    verifiedAt: '12 Sep 2026, 11:30 AM',
    sha256Hash: '0x8f4d92a1c7e3b5601248debf09234ac87e1289dfb610c432ae871629813b5e02',
    status: 'NCISM / University Verified',
    digiLockerUri: 'in.gov.digilocker/nia/rot-intern-076',
    verifiedBy: 'Dr. Rajeshwar Pant (Dean / Registrar Cell)'
  },
  {
    id: 'ver-102',
    candidateName: 'Ananya Verma',
    rollNumber: 'NIA-2021-AY-033',
    program: 'M.Pharm (Ayurveda)',
    documentClaimed: 'HPTLC Phytochemistry Assay Master Credential',
    submittedOn: '08 Sep 2026',
    verifiedAt: '09 Sep 2026, 04:15 PM',
    sha256Hash: '0x3c91a024ed88f01b9204cd612845a7ef629013acbd2148705912cdeba4019284',
    status: 'NCISM / University Verified',
    digiLockerUri: 'in.gov.digilocker/nia/hptlc-033',
    verifiedBy: 'Dr. Rajeshwar Pant (Dean / Registrar Cell)'
  }
];

// Mock Enrolled Student and Placement Directory Data
const INITIAL_COLLEGE_STUDENTS = [
  {
    id: 'stu-001',
    name: 'Aarav Sharma',
    rollNumber: 'NIA-2022-AY-042',
    program: 'BAMS (Final Year)',
    cgpa: '8.94',
    avatar: 'AS',
    placementStatus: 'Placed',
    company: 'Dabur India Ltd',
    package: '₹8.50 LPA',
    role: 'Ayush Analytical QC Associate',
    skills: ['HPTLC', 'Schedule T GMP', 'Phytochemistry']
  },
  {
    id: 'stu-002',
    name: 'Pooja Iyer',
    rollNumber: 'NIA-2021-AY-018',
    program: 'MD Ayurveda (Dravyaguna)',
    cgpa: '9.20',
    avatar: 'PI',
    placementStatus: 'Placed',
    company: 'Himalaya Wellness',
    package: '₹10.20 LPA',
    role: 'Formulations Scientist',
    skills: ['Pharmacovigilance', 'HPLC', 'Heavy Metal Assay']
  },
  {
    id: 'stu-003',
    name: 'Sunita Patel',
    rollNumber: 'NIA-2021-AY-118',
    program: 'BAMS (Final Year)',
    cgpa: '8.75',
    avatar: 'SP',
    placementStatus: 'Placed',
    company: 'Patanjali Research Foundation',
    package: '₹7.80 LPA',
    role: 'Clinical Research Associate',
    skills: ['Clinical Trials', 'Schedule T', 'Phytopharmacy']
  },
  {
    id: 'stu-004',
    name: 'Rohan Deshmukh',
    rollNumber: 'NIA-2023-AY-089',
    program: 'BAMS (3rd Year)',
    cgpa: '8.40',
    avatar: 'RD',
    placementStatus: 'Internship',
    company: 'All India Institute of Ayurveda',
    package: '₹35,000/mo',
    role: 'Clinical Resident Intern',
    skills: ['Kayachikitsa', 'Panchakarma', 'Patient History']
  },
  {
    id: 'stu-005',
    name: 'Neha Gupta',
    rollNumber: 'NIA-2021-AY-064',
    program: 'M.Pharm (Ayurveda)',
    cgpa: '9.10',
    avatar: 'NG',
    placementStatus: 'Placed',
    company: 'Charak Pharma',
    package: '₹9.00 LPA',
    role: 'Quality Assurance Chemist',
    skills: ['Standardization', 'GLP', 'Documentation']
  },
  {
    id: 'stu-006',
    name: 'Kavita Reddy',
    rollNumber: 'NIA-2022-AY-055',
    program: 'BAMS (Final Year)',
    cgpa: '8.60',
    avatar: 'KR',
    placementStatus: 'Internship',
    company: 'CCRAS Regional Center',
    package: '₹30,000/mo',
    role: 'Ayush Research Intern',
    skills: ['Clinical Protocols', 'Nadi Pariksha', 'Epidemiology']
  },
  {
    id: 'stu-007',
    name: 'Vikram Joshi',
    rollNumber: 'NIA-2022-AY-072',
    program: 'BAMS (Final Year)',
    cgpa: '7.90',
    avatar: 'VJ',
    placementStatus: 'Seeking',
    company: 'Emami Ayush Division',
    package: 'Interviewing',
    role: 'QC Trainee (In Pipeline)',
    skills: ['Phytochemistry', 'Rasa Shastra', 'Schedule T']
  },
  {
    id: 'stu-008',
    name: 'Ananya Verma',
    rollNumber: 'NIA-2021-AY-033',
    program: 'M.Pharm (Ayurveda)',
    cgpa: '8.90',
    avatar: 'AV',
    placementStatus: 'Placed',
    company: 'Baidyanath Research',
    package: '₹8.20 LPA',
    role: 'Formulation Chemist',
    skills: ['HPLC', 'Extraction', 'Microbiology']
  }
];

// Helper to generate a realistic 64-character SHA-256 cryptographic digest
const generateSha256Hash = (rollNumber, docName) => {
  const seed = `${rollNumber}-${docName}-${Date.now()}`;
  let hashVal = 0;
  for (let i = 0; i < seed.length; i++) {
    hashVal = ((hashVal << 5) - hashVal) + seed.charCodeAt(i);
    hashVal |= 0;
  }
  const p1 = Math.abs(hashVal).toString(16).padStart(8, '0');
  const p2 = Math.random().toString(16).substring(2, 10);
  const p3 = Math.random().toString(16).substring(2, 10);
  const p4 = Math.random().toString(16).substring(2, 10);
  const p5 = Math.random().toString(16).substring(2, 10);
  const p6 = Math.random().toString(16).substring(2, 10);
  const p7 = Math.random().toString(16).substring(2, 10);
  const p8 = Math.random().toString(16).substring(2, 10);
  return `0x${p1}${p2}${p3}${p4}${p5}${p6}${p7}${p8}`.toLowerCase();
};

export const CollegePortalView = ({ user, onBack }) => {
  // Main Navigation Tabs
  const [activeTab, setActiveTab] = useState('queue'); // 'queue' | 'verified' | 'compliance'

  // Submission Queues State
  const [pendingSubmissions, setPendingSubmissions] = useState(INITIAL_PENDING_SUBMISSIONS);
  const [verifiedRecords, setVerifiedRecords] = useState(INITIAL_VERIFIED_RECORDS);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [studentStatusFilter, setStudentStatusFilter] = useState('all');

  // Modal & Toast States
  const [toast, setToast] = useState(null);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [rejectModalItem, setRejectModalItem] = useState(null);
  const [rejectReason, setRejectReason] = useState('Discrepancy in marks / calculation');
  const [rejectNote, setRejectNote] = useState('');
  const [copiedHash, setCopiedHash] = useState(null);

  // Auto-dismiss toast after 4.5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Handle Verify & Stamp SHA 256
  const handleVerifyAndStamp = (item) => {
    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const sha256Hash = generateSha256Hash(item.rollNumber, item.documentClaimed);

    // Create Verified Record with SHA-256 seal
    const newVerifiedRecord = {
      ...item,
      status: 'NCISM / University Verified',
      sha256Hash: sha256Hash,
      verifiedAt: timestamp,
      verifiedBy: `${user?.name || 'Dr. Rajeshwar Pant'} (Registrar Cell)`
    };

    // Remove from pending queue
    setPendingSubmissions((prev) => prev.filter((s) => s.id !== item.id));

    // Append to verified audit ledger
    setVerifiedRecords((prev) => [newVerifiedRecord, ...prev]);

    // Close preview if it was open
    if (previewDoc && previewDoc.id === item.id) {
      setPreviewDoc(null);
    }

    // Trigger Success Toast
    setToast({
      type: 'success',
      title: 'NCISM / University Verified & Stamped',
      message: `${item.candidateName}'s "${item.documentClaimed}" has been cryptographically stamped with SHA-256 and registered.`
    });
  };

  // Handle Rejection / Request Resubmission
  const handleConfirmReject = () => {
    if (!rejectModalItem) return;

    const item = rejectModalItem;
    // Remove from pending queue
    setPendingSubmissions((prev) => prev.filter((s) => s.id !== item.id));

    // Show warning toast
    setToast({
      type: 'reject',
      title: 'Resubmission Requested',
      message: `Resubmission notification sent to ${item.candidateName} for "${item.documentClaimed}".`
    });

    setRejectModalItem(null);
    setRejectNote('');
  };

  // Copy hash helper
  const handleCopyHash = (hash) => {
    navigator.clipboard?.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  // Filter pending items by search query and category
  const filteredPending = pendingSubmissions.filter((item) => {
    const matchesSearch =
      item.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.documentClaimed.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === 'all' ||
      item.documentCategory.toLowerCase().includes(categoryFilter.toLowerCase()) ||
      item.documentClaimed.toLowerCase().includes(categoryFilter.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  // Filter students by search and placement status
  const filteredStudents = INITIAL_COLLEGE_STUDENTS.filter((stu) => {
    const matchesSearch =
      stu.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
      stu.rollNumber.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
      stu.program.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
      stu.company.toLowerCase().includes(studentSearchQuery.toLowerCase());

    const matchesFilter =
      studentStatusFilter === 'all' || stu.placementStatus === studentStatusFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-start gap-3.5 max-w-lg transition-all animate-in slide-in-from-bottom-5 duration-300">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
              toast.type === 'success'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400" />
            )}
          </div>
          <div className="text-xs flex-1">
            <p className="font-bold text-slate-100 text-sm">{toast.title}</p>
            <p className="text-slate-300 mt-1 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => setToast(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
            title="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* College Registrar Institutional Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white font-bold text-lg flex items-center justify-center shrink-0 overflow-hidden shadow-xs border border-emerald-700/30">
            {user?.avatarImage ? (
              <img src={user.avatarImage} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              user?.avatar || 'RP'
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {user?.name || 'Dr. Rajeshwar Pant'}
              </h2>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Registrar
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              National Institute of Ayurveda · <span className="font-mono text-slate-400">{user?.id || 'AISHE-C-24901'}</span>
            </p>
          </div>
        </div>

        {/* Real-Time Metrics (Column Layout with Separator Lines) */}
        <div className="flex flex-col divide-y divide-slate-200/80 text-xs text-slate-500 sm:border-l sm:border-slate-200/80 sm:pl-5">
          <div className="pb-1.5 flex items-center gap-1.5">
            <strong className="text-sm font-bold text-slate-900">{pendingSubmissions.length}</strong>
            <span>Pending</span>
          </div>
          <div className="py-1.5 flex items-center gap-1.5">
            <strong className="text-sm font-bold text-emerald-700">{verifiedRecords.length}</strong>
            <span>Verified</span>
          </div>
          <div className="pt-1.5 flex items-center gap-1.5 font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>DigiLocker Active</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'queue'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Verification Queue</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'queue'
                ? 'bg-emerald-700 text-emerald-100'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {pendingSubmissions.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('verified')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'verified'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Records</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'verified'
                ? 'bg-emerald-700 text-emerald-100'
                : 'bg-emerald-100 text-emerald-800'
            }`}
          >
            {verifiedRecords.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('students')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'students'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Students & Placements</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'students'
                ? 'bg-emerald-700 text-emerald-100'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {INITIAL_COLLEGE_STUDENTS.length}
          </span>
        </button>
      </div>

      {/* TAB 1 CONTENT: Credentials Verification Queue (Registrar Cell) */}
      {activeTab === 'queue' && (
        <div className="space-y-4">
          {/* Information & Toolbar Header */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Verification Queue ({pendingSubmissions.length} pending)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verify submitted credentials and marks against DigiLocker.
                </p>
              </div>

              {/* Search & Category Filter */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search candidate, roll no, doc..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                >
                  <option value="all">All Document Types</option>
                  <option value="marksheet">Marksheets</option>
                  <option value="internship">Internship Records</option>
                  <option value="degree">Degrees</option>
                  <option value="credential">Eligibility / Competency</option>
                </select>

                {pendingSubmissions.length < INITIAL_PENDING_SUBMISSIONS.length && (
                  <button
                    onClick={() => {
                      setPendingSubmissions(INITIAL_PENDING_SUBMISSIONS);
                      setToast({
                        type: 'success',
                        title: 'Queue Reset',
                        message: 'Reset pending approvals queue back to initial state.'
                      });
                    }}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all"
                    title="Reset mock pending queue"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Queue</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Submissions Table */}
          {filteredPending.length > 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <th className="py-3 px-4 sm:px-6">Candidate</th>
                      <th className="py-3 px-4">Document</th>
                      <th className="py-3 px-4">Submitted</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 sm:px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredPending.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-slate-50/70 transition-colors group"
                      >
                        {/* Candidate */}
                        <td className="py-3.5 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                              {item.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 text-sm">
                                {item.candidateName}
                              </div>
                              <div className="text-slate-500 text-xs mt-0.5">
                                {item.rollNumber} · <span className="text-slate-400">{item.program}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Document Claimed */}
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-slate-900 text-xs">
                            {item.documentClaimed}
                          </div>
                          <span className="text-[11px] text-slate-400 mt-0.5 block">
                            {item.documentCategory}
                          </span>
                        </td>

                        {/* Submitted On & File Link */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="text-xs text-slate-600">
                            {item.submittedOn}
                          </div>
                          <button
                            onClick={() => setPreviewDoc(item)}
                            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 text-xs font-medium mt-0.5 cursor-pointer hover:underline"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>View Document</span>
                          </button>
                        </td>

                        {/* DigiLocker Status */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>DigiLocker Verified</span>
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            {/* Verify Button */}
                            <button
                              onClick={() => handleVerifyAndStamp(item)}
                              className="bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                              title="Verify and approve"
                            >
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Verify</span>
                            </button>

                            {/* Reject Button */}
                            <button
                              onClick={() => setRejectModalItem(item)}
                              className="bg-rose-50 hover:bg-rose-100 active:scale-95 text-rose-700 hover:text-rose-800 border border-rose-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1"
                              title="Reject submission"
                            >
                              <X className="w-3.5 h-3.5" />
                              <span>Reject</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Empty Queue State */
            <div className="bg-white rounded-3xl p-12 border border-slate-200/80 shadow-soft text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>
              <div className="max-w-md mx-auto">
                <h4 className="text-base font-extrabold text-slate-900">
                  {searchQuery || categoryFilter !== 'all'
                    ? 'No Submissions Match Your Filter'
                    : 'Verification Queue Completely Cleared!'}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {searchQuery || categoryFilter !== 'all'
                    ? 'Try clearing the search or category filters to view pending submissions.'
                    : 'All submitted student credentials have been vetted, cryptographically stamped with SHA-256, and stored in the University Audit Ledger.'}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('verified')}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>View Verified Records ({verifiedRecords.length})</span>
                </button>
                <button
                  onClick={() => {
                    setPendingSubmissions(INITIAL_PENDING_SUBMISSIONS);
                    setSearchQuery('');
                    setCategoryFilter('all');
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reload Sample Queue</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2 CONTENT: Verified Records & Cryptographic Ledger */}
      {activeTab === 'verified' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>NCISM / University Verified Audit Ledger</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Permanent cryptographic hash register. Each student document is anchored with an immutable SHA-256 checksum and digital signature.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
                Total Stamped: <span className="font-extrabold text-slate-900">{verifiedRecords.length} Documents</span>
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-4 sm:px-6">Candidate</th>
                    <th className="py-3 px-4">Document</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">SHA-256 Hash</th>
                    <th className="py-3 px-4 sm:px-6 text-right">Verified Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {verifiedRecords.map((rec) => (
                    <tr key={rec.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Candidate */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-semibold text-slate-900">{rec.candidateName}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {rec.rollNumber} · <span className="text-slate-400">{rec.program}</span>
                        </div>
                      </td>

                      {/* Document */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-slate-800">{rec.documentClaimed}</div>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </td>

                      {/* SHA-256 Hash with Copy button */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-2 py-1 rounded-lg w-fit max-w-[200px]">
                          <span className="font-mono text-[10px] text-slate-700 truncate">
                            {rec.sha256Hash}
                          </span>
                          <button
                            onClick={() => handleCopyHash(rec.sha256Hash)}
                            className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                            title="Copy SHA-256 Hash"
                          >
                            {copiedHash === rec.sha256Hash ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Timestamp */}
                      <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap text-slate-600 font-medium">
                        {rec.verifiedAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3 CONTENT: Students Directory & Placement Outcomes */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          {/* Summary Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft">
              <span className="text-[11px] font-medium text-slate-500 block">Total Students</span>
              <span className="text-xl font-bold text-slate-900 mt-0.5 block">{user?.enrolledScholars || 680}</span>
              <span className="text-[10px] text-slate-400">All departments</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft">
              <span className="text-[11px] font-medium text-slate-500 block">Students Placed</span>
              <span className="text-xl font-bold text-emerald-700 mt-0.5 block">520</span>
              <span className="text-[10px] text-emerald-600 font-semibold">{user?.placementRate || '76.5%'} placement rate</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft">
              <span className="text-[11px] font-medium text-slate-500 block">Clinical Internships</span>
              <span className="text-xl font-bold text-blue-700 mt-0.5 block">120</span>
              <span className="text-[10px] text-slate-400">Schedule T & Hospital</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft">
              <span className="text-[11px] font-medium text-slate-500 block">Average Package</span>
              <span className="text-xl font-bold text-slate-900 mt-0.5 block">₹8.40 LPA</span>
              <span className="text-[10px] text-slate-400">Highest: ₹10.20 LPA</span>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Student Directory ({filteredStudents.length} of {INITIAL_COLLEGE_STUDENTS.length})
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  View student academic credentials and placement status.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative min-w-[220px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search student, roll, company..."
                    value={studentSearchQuery}
                    onChange={(e) => setStudentSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all"
                  />
                  {studentSearchQuery && (
                    <button
                      onClick={() => setStudentSearchQuery('')}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <select
                  value={studentStatusFilter}
                  onChange={(e) => setStudentStatusFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="Placed">Placed</option>
                  <option value="Internship">Internship</option>
                  <option value="Seeking">In Pipeline</option>
                </select>
              </div>
            </div>
          </div>

          {/* Students Table */}
          {filteredStudents.length > 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <th className="py-3 px-4 sm:px-6">Student</th>
                      <th className="py-3 px-4">Program & CGPA</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Company & Package</th>
                      <th className="py-3 px-4 sm:px-6">Key Skills</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredStudents.map((stu) => (
                      <tr key={stu.id} className="hover:bg-slate-50/70 transition-colors">
                        {/* Student */}
                        <td className="py-3.5 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                              {stu.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900 text-sm">
                                {stu.name}
                              </div>
                              <div className="text-slate-500 text-xs mt-0.5">
                                {stu.rollNumber}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Program & CGPA */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="font-medium text-slate-900 text-xs">{stu.program}</div>
                          <span className="text-[11px] text-slate-500 mt-0.5 block">
                            CGPA: <span className="font-semibold text-slate-700">{stu.cgpa}</span>
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {stu.placementStatus === 'Placed' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Placed</span>
                            </span>
                          )}
                          {stu.placementStatus === 'Internship' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200">
                              <Clock className="w-3.5 h-3.5 text-blue-600" />
                              <span>Internship</span>
                            </span>
                          )}
                          {stu.placementStatus === 'Seeking' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                              <span>In Pipeline</span>
                            </span>
                          )}
                        </td>

                        {/* Company & Package */}
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-slate-900 text-xs">
                            {stu.company}
                          </div>
                          <span className="text-[11px] text-slate-500 mt-0.5 block font-semibold text-emerald-700">
                            {stu.package}
                          </span>
                        </td>

                        {/* Skills */}
                        <td className="py-3.5 px-4 sm:px-6">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {stu.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 text-slate-600 font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
              <p className="text-xs text-slate-500">No students found matching your filter criteria.</p>
            </div>
          )}
        </div>
      )}

      {/* DOCUMENT PREVIEW MODAL */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-sm">
                  <FileText className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Student Document Verification Preview
                  </h3>
                  <p className="text-xs text-slate-500">
                    Digital Asset Verification Desk · Registrar Cell Inspection
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate & Document Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Candidate Name</span>
                <span className="font-extrabold text-slate-800 text-sm">{previewDoc.candidateName}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Roll Number</span>
                <span className="font-mono font-bold text-slate-700">{previewDoc.rollNumber}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Submitted On</span>
                <span className="font-semibold text-slate-700">{previewDoc.submittedOn}</span>
              </div>
              <div className="col-span-2 sm:col-span-3 pt-1 border-t border-slate-200">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Document Claimed</span>
                <span className="font-bold text-emerald-900 text-sm">{previewDoc.documentClaimed}</span>
                <p className="text-slate-600 mt-0.5 text-xs">{previewDoc.claimDetails}</p>
              </div>
            </div>

            {/* DigiLocker Official Verification Badge Card */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-blue-950 flex items-center gap-1.5">
                    <span>DigiLocker Verified Issuer Asset</span>
                    <span className="bg-blue-200/70 text-blue-900 text-[10px] px-1.5 py-0.5 rounded font-bold">
                      AUTHENTIC
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-blue-800 mt-0.5">
                    URI: {previewDoc.digiLockerUri}
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] text-blue-700 font-bold uppercase block">File Meta</span>
                <span className="text-xs font-mono text-blue-900">{previewDoc.fileSize}</span>
              </div>
            </div>

            {/* High Fidelity Certificate / Marksheet Simulation Card */}
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 bg-amber-50/20 relative space-y-4">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-900 uppercase tracking-wide">
                  <Building2 className="w-4 h-4 text-emerald-700" />
                  National Institute of Ayurveda · Jaipur
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  {previewDoc.documentClaimed}
                </h4>
                <p className="text-[11px] text-slate-500 font-mono">
                  Institutional Candidate ID: {previewDoc.rollNumber} · Session 2022-2026
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Candidate:</span>
                  <span className="font-bold text-slate-900">{previewDoc.candidateName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Program Enrolled:</span>
                  <span className="font-semibold text-slate-800">{previewDoc.program}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Verification Origin:</span>
                  <span className="font-semibold text-emerald-800">DigiLocker Government Repository</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                <span>File: {previewDoc.fileName}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Ready for Cryptographic Stamping
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer transition-all"
              >
                Close Preview
              </button>
              <button
                onClick={() => handleVerifyAndStamp(previewDoc)}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs hover:shadow flex items-center gap-2 cursor-pointer transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-200" />
                <span>Verify & Stamp SHA 256</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REJECT / REQUEST RESUBMISSION MODAL */}
      {rejectModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-rose-700">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-base font-extrabold text-slate-900">
                  Request Resubmission / Reject Claim
                </h3>
              </div>
              <button
                onClick={() => setRejectModalItem(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3.5 text-xs text-rose-900">
              <p className="font-bold">
                Student: {rejectModalItem.candidateName} ({rejectModalItem.rollNumber})
              </p>
              <p className="mt-0.5 text-rose-800 font-medium">
                Document: {rejectModalItem.documentClaimed}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Select Resubmission Reason:
              </label>
              <div className="space-y-1.5">
                {[
                  'Discrepancy in marks / calculation',
                  'Seal or authorized signature illegible',
                  'DigiLocker document issuer mismatch',
                  'Schedule T internship log hours incomplete',
                  'Missing prerequisite professional year clearance'
                ].map((reason) => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setRejectReason(reason)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      rejectReason === reason
                        ? 'bg-rose-100/70 border-rose-300 text-rose-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">
                Additional Registrar Remarks (Optional):
              </label>
              <textarea
                rows={2}
                placeholder="Specify exact corrections required by the student..."
                value={rejectNote}
                onChange={(e) => setRejectNote(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setRejectModalItem(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReject}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1.5 transition-all"
              >
                <XCircle className="w-4 h-4" />
                <span>Confirm Resubmission Request</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegePortalView;

