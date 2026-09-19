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
  Briefcase,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  FileCheck,
  Printer,
  FileSpreadsheet,
  TrendingUp,
  Sparkles,
  GraduationCap,
  ChevronRight,
  Building,
  CheckSquare,
  Hash,
  Landmark,
  Coins
} from 'lucide-react';
import { PLATFORM_METADATA } from '../../data/portalData';
import { 
  DigitalNocModal, 
  getStoredNocRequests, 
  saveStoredNocRequests, 
  generateSha256Hash 
} from './StudentPortalView';
import {
  CORPORATE_MOUS_DATA,
  COMPLIANCE_COHORT_DATA,
  REGULATORY_YEAR_TRENDS,
  calculateComplianceMetrics,
  generateNirfCsvString,
  generateNaacCsvString,
  generateNbaCsvString
} from '../../data/complianceData';

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

export const CollegePortalView = ({ 
  user, 
  onBack, 
  initialTab = 'queue', 
  isComplianceOnly = false,
  onNavigateToAccreditation 
}) => {
  // Main Navigation Tabs
  const [activeTab, setActiveTab] = useState(isComplianceOnly ? 'compliance' : initialTab);

  useEffect(() => {
    if (isComplianceOnly) {
      setActiveTab('compliance');
    } else if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isComplianceOnly]);

  // Compliance Export Engine States
  const [complianceTab, setComplianceTab] = useState('nirf'); // 'nirf' | 'naac' | 'nba'
  const [complianceYear, setComplianceYear] = useState('2025–26');
  const [complianceProgram, setComplianceProgram] = useState('all');
  const [complianceSearch, setComplianceSearch] = useState('');
  const [complianceCategory, setComplianceCategory] = useState('all');
  const [selectedComplianceStudent, setSelectedComplianceStudent] = useState(null);
  const [activeMouModal, setActiveMouModal] = useState(false);
  const [isExportingNirf, setIsExportingNirf] = useState(false);

  // Submission Queues State
  const [pendingSubmissions, setPendingSubmissions] = useState(INITIAL_PENDING_SUBMISSIONS);
  const [verifiedRecords, setVerifiedRecords] = useState(INITIAL_VERIFIED_RECORDS);

  // Institutional NOC Clearances State
  const [nocRequests, setNocRequests] = useState(() => getStoredNocRequests());
  const [selectedNocForCert, setSelectedNocForCert] = useState(null);
  const [previewOfferDoc, setPreviewOfferDoc] = useState(null);
  const [nocSearchQuery, setNocSearchQuery] = useState('');
  const [nocStatusFilter, setNocStatusFilter] = useState('all'); // 'all' | 'pending' | 'issued'

  // Synchronize NOC requests across Student and College portals
  useEffect(() => {
    const handleSync = () => {
      setNocRequests(getStoredNocRequests());
    };
    window.addEventListener('skillsetu_noc_updated', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('skillsetu_noc_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const pendingNocCount = nocRequests.filter((r) => r.status !== 'issued').length;

  // Handle TPO Review & Approve & Digitally Sign NOC
  const handleApproveAndSignNoc = (req) => {
    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const sha256Hash = generateSha256Hash(req.rollNumber, req.companyName);

    const updatedRequests = nocRequests.map((item) => {
      if (item.id === req.id) {
        return {
          ...item,
          status: 'issued',
          statusStep: 4,
          tpoApprovedAt: timestamp,
          tpoApprovedBy: `${user?.name || 'Dr. Vivek Swaroop'} (TPO Preceptor Cell)`,
          deanApprovedAt: timestamp,
          deanApprovedBy: 'Prof. (Dr.) Rajeshwar Pant (Dean Academic Affairs)',
          sha256Hash: sha256Hash
        };
      }
      return item;
    });

    setNocRequests(updatedRequests);
    saveStoredNocRequests(updatedRequests);

    setToast({
      type: 'success',
      title: 'NOC Approved & Digitally Signed',
      message: `Digital NOC for ${req.studentName} (${req.companyName}) has been approved and cryptographically stamped with Dean's digital signature seal.`
    });
  };

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Compliance Cohort Filtering Logic
  const filteredComplianceCohort = COMPLIANCE_COHORT_DATA.filter((item) => {
    const matchesYear = complianceYear === 'all' || item.academicYear === complianceYear;
    const matchesProgram =
      complianceProgram === 'all' ||
      (complianceProgram === 'bams' && item.programCode === 'UG-BAMS') ||
      (complianceProgram === 'md' && item.programCode === 'PG-MD-AYU') ||
      (complianceProgram === 'mpharm' && item.programCode === 'PG-MPHARM');
    const matchesCategory = complianceCategory === 'all' || item.outcomeCategory === complianceCategory;
    const matchesSearch =
      complianceSearch === '' ||
      item.candidateName.toLowerCase().includes(complianceSearch.toLowerCase()) ||
      item.rollNumber.toLowerCase().includes(complianceSearch.toLowerCase()) ||
      item.employerOrInstitution.toLowerCase().includes(complianceSearch.toLowerCase()) ||
      item.designationOrDegree.toLowerCase().includes(complianceSearch.toLowerCase());

    return matchesYear && matchesProgram && matchesCategory && matchesSearch;
  });

  // Dynamic Calculated Metrics for Active Scope
  const complianceMetrics = calculateComplianceMetrics(filteredComplianceCohort, CORPORATE_MOUS_DATA);

  // 1-Click Button: "Export NIRF Formatted Data (.CSV)"
  const handleExportNirfCsv = () => {
    setIsExportingNirf(true);
    try {
      const csvString = generateNirfCsvString({
        user,
        selectedYear: complianceYear,
        selectedProgram: complianceProgram,
        cohort: filteredComplianceCohort,
        metrics: complianceMetrics,
        mous: CORPORATE_MOUS_DATA
      });

      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const cleanYear = complianceYear.replace(/–|-/g, '_');
      link.download = `NIRF_GO_GPH_Compliance_Data_${user?.id || 'AISHE-C-24901'}_${cleanYear}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setToast({
        type: 'success',
        title: 'NIRF Formatted Data Exported (.CSV)',
        message: `Audit-ready NIRF DCS CSV file downloaded with standard regulatory column headers (${filteredComplianceCohort.length} candidate verification records).`
      });
    } catch (err) {
      console.error('NIRF Export Error:', err);
      setToast({
        type: 'reject',
        title: 'Export Failed',
        message: 'Could not generate NIRF regulatory CSV file. Please check data parameters.'
      });
    } finally {
      setIsExportingNirf(false);
    }
  };

  // Companion NAAC SSR CSV Export
  const handleExportNaacCsv = () => {
    try {
      const csvString = generateNaacCsvString({
        user,
        selectedYear: complianceYear,
        cohort: filteredComplianceCohort,
        metrics: complianceMetrics,
        mous: CORPORATE_MOUS_DATA
      });
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `NAAC_Criterion_5_2_SSR_${user?.id || 'AISHE-C-24901'}_${complianceYear.replace(/–|-/g, '_')}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setToast({
        type: 'success',
        title: 'NAAC SSR Formatted Data Exported (.CSV)',
        message: 'Downloaded NAAC Criterion 5.2 Student Progression audit dataset.'
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Companion NBA SAR CSV Export
  const handleExportNbaCsv = () => {
    try {
      const csvString = generateNbaCsvString({
        user,
        selectedYear: complianceYear,
        cohort: filteredComplianceCohort,
        metrics: complianceMetrics,
        mous: CORPORATE_MOUS_DATA
      });
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `NBA_Criterion_4_SAR_${user?.id || 'AISHE-C-24901'}_${complianceYear.replace(/–|-/g, '_')}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setToast({
        type: 'success',
        title: 'NBA SAR Formatted Data Exported (.CSV)',
        message: 'Downloaded NBA Criterion 4 Student Performance & Skill Assessments dataset.'
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Sorting State for Queue
  const [sortField, setSortField] = useState('date'); // 'date' | 'name' | 'rollNumber' | 'document'
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc' | 'desc'

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection(field === 'date' ? 'desc' : 'asc');
    }
  };

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

  const sortedPending = [...filteredPending].sort((a, b) => {
    let result = 0;
    if (sortField === 'name') {
      result = a.candidateName.localeCompare(b.candidateName);
    } else if (sortField === 'rollNumber') {
      result = a.rollNumber.localeCompare(b.rollNumber);
    } else if (sortField === 'document') {
      result = a.documentClaimed.localeCompare(b.documentClaimed);
    } else if (sortField === 'date') {
      result = new Date(a.submittedOn).getTime() - new Date(b.submittedOn).getTime();
    }
    return sortDirection === 'asc' ? result : -result;
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

      {/* College Registrar Institutional Banner & Verification Navigation */}
      {!isComplianceOnly && (
        <>
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

            {/* Real-Time Metrics & Compliance Quick Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-500 sm:border-l sm:border-slate-200/80 sm:pl-5">
              <div className="flex flex-col divide-y divide-slate-200/80">
                <div className="pb-1.5 flex items-center gap-1.5">
                  <strong className="text-sm font-bold text-slate-900">{pendingSubmissions.length}</strong>
                  <span>Pending Credentials</span>
                </div>
                <div className="py-1.5 flex items-center gap-1.5">
                  <strong className="text-sm font-bold text-emerald-700">{verifiedRecords.length}</strong>
                  <span>Verified Stamped</span>
                </div>
                <div className="pt-1.5 flex items-center gap-1.5 font-medium text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>DigiLocker &amp; APAAR Synced</span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (onNavigateToAccreditation) {
                    onNavigateToAccreditation();
                  } else {
                    window.location.hash = 'accreditation';
                  }
                }}
                className="px-3 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-2xs bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-emerald-200"
                title="Institutional Accreditation & Regulatory Reporting (NIRF / NAAC / NBA)"
              >
                <Award className="w-4 h-4 text-emerald-600" />
                <div className="text-left">
                  <div className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider">Compliance Engine</div>
                  <div className="text-xs font-bold leading-tight">NIRF · NAAC · NBA</div>
                </div>
              </button>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setActiveTab('queue')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'queue'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Credentials Queue</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  activeTab === 'queue'
                    ? 'bg-emerald-700 text-emerald-100'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {pendingSubmissions.length} Pending
              </span>
            </button>

            <button
              onClick={() => setActiveTab('verified')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'verified'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Ledger</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  activeTab === 'verified'
                    ? 'bg-emerald-700 text-emerald-100'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {verifiedRecords.length} Stamped
              </span>
            </button>

            <button
              onClick={() => setActiveTab('noc')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'noc'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>NOC Clearances</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  activeTab === 'noc'
                    ? 'bg-emerald-700 text-emerald-100'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {pendingNocCount} Pending
              </span>
            </button>
          </div>
        </>
      )}

      {/* TAB 1 CONTENT: Credentials Verification Queue (Registrar Cell) */}
      {activeTab === 'queue' && (
        <div className="space-y-4">
          {/* Information & Toolbar Header */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-soft space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Digital Asset Verification Cell
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-800 border border-amber-200">
                    {sortedPending.length} Pending
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Click headers to sort or use controls below to audit DigiLocker credentials.
                </p>
              </div>

              {/* Search, Sort & Category Filter */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Search Box */}
                <div className="relative min-w-[200px] flex-1 sm:flex-initial">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search candidate, roll, doc..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-7 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Quick Sort Dropdown */}
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sort:</span>
                  <select
                    value={`${sortField}-${sortDirection}`}
                    onChange={(e) => {
                      const [field, dir] = e.target.value.split('-');
                      setSortField(field);
                      setSortDirection(dir);
                    }}
                    className="bg-transparent font-semibold text-slate-800 text-xs focus:outline-none cursor-pointer"
                  >
                    <option value="date-desc">Newest Submissions</option>
                    <option value="date-asc">Oldest Submissions</option>
                    <option value="name-asc">Candidate Name (A → Z)</option>
                    <option value="name-desc">Candidate Name (Z → A)</option>
                    <option value="rollNumber-asc">Roll Number (Asc)</option>
                    <option value="document-asc">Document Name</option>
                  </select>
                </div>

                {/* Category Filter */}
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
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
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all"
                    title="Reset mock pending queue"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Submissions Table - Simplified, No Horizontal Scroll */}
          {sortedPending.length > 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden">
              <div className="w-full">
                <table className="w-full text-left border-collapse table-auto">
                  <thead>
                    <tr className="bg-slate-50/90 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {/* 1. Sortable: Candidate & Roll (28%) */}
                      <th
                        onClick={() => handleSort('name')}
                        className="py-3 px-4 sm:px-5 cursor-pointer select-none hover:bg-slate-100 transition-colors group w-[28%]"
                        title="Click to sort by Candidate Name"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>Candidate & Roll</span>
                          {sortField === 'name' ? (
                            sortDirection === 'asc' ? (
                              <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                            ) : (
                              <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                          )}
                        </div>
                      </th>

                      {/* 2. Sortable: Claimed Document & Evidence (40%) */}
                      <th
                        onClick={() => handleSort('document')}
                        className="py-3 px-4 cursor-pointer select-none hover:bg-slate-100 transition-colors group w-[40%]"
                        title="Click to sort by Document Title"
                      >
                        <div className="flex items-center gap-1.5">
                          <span>Document Claimed & Evidence</span>
                          {sortField === 'document' ? (
                            sortDirection === 'asc' ? (
                              <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                            ) : (
                              <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                            )
                          ) : sortField === 'date' ? (
                            sortDirection === 'asc' ? (
                              <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                            ) : (
                              <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                          )}
                        </div>
                      </th>

                      {/* 3. Status (14%) */}
                      <th className="py-3 px-4 w-[14%]">
                        <span>Status</span>
                      </th>

                      {/* 4. Actions (18%) */}
                      <th className="py-3 px-4 sm:px-5 text-right w-[18%]">
                        <span>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {sortedPending.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        {/* 1. Candidate Name & Roll Number */}
                        <td className="py-2.5 px-4 sm:px-5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                              {item.avatar}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                                  {item.candidateName}
                                </span>
                                <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-medium">
                                  {item.rollNumber}
                                </span>
                              </div>
                              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                                {item.program}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* 2. Simplified: Document Claimed + File Attachment + Date */}
                        <td className="py-2.5 px-4">
                          <div className="font-semibold text-slate-900 text-xs leading-snug">
                            {item.documentClaimed}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 flex-wrap">
                            <button
                              onClick={() => setPreviewDoc(item)}
                              className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-semibold cursor-pointer hover:underline"
                              title="Click to view submitted document preview"
                            >
                              <FileText className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{item.fileLink}</span>
                            </button>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 text-[10px]">{item.submittedOn}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400 text-[10px]">{item.documentCategory}</span>
                          </div>
                        </td>

                        {/* 3. DigiLocker Status */}
                        <td className="py-2.5 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>DigiLocker Verified</span>
                          </span>
                        </td>

                        {/* 4. Actions: Compact & Aligned */}
                        <td className="py-2.5 px-4 sm:px-5 text-right">
                          <div className="flex items-center justify-end gap-1.5 flex-nowrap">
                            {/* Verify & Stamp Button */}
                            <button
                              onClick={() => handleVerifyAndStamp(item)}
                              className="bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer whitespace-nowrap"
                              title="Verify & Stamp SHA-256 Digest"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                              <span>Verify & Stamp</span>
                            </button>

                            {/* Reject / Resubmit Button */}
                            <button
                              onClick={() => setRejectModalItem(item)}
                              className="bg-rose-50 hover:bg-rose-100 active:scale-95 text-rose-700 hover:text-rose-800 border border-rose-200 px-2 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap"
                              title="Reject / Request Resubmission"
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

      {/* TAB 3 CONTENT: Institutional NOC Clearances Inbox (TPO & Dean Cell) */}
      {activeTab === 'noc' && (
        <div className="space-y-4">
          {/* Header Toolbar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    NOC Clearances
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-800 border border-amber-200">
                    {pendingNocCount} Pending
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Review student internship eligibility and issue institutional digital NOC clearance.
                </p>
              </div>

              {/* Minimal Metric Summary */}
              <div className="flex items-center gap-2 text-xs bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/70 w-fit">
                <span className="text-slate-500">Total: <strong className="text-slate-800 font-bold">{nocRequests.length}</strong></span>
                <span className="text-slate-300">·</span>
                <span className="text-amber-700">Pending: <strong className="text-amber-800 font-bold">{pendingNocCount}</strong></span>
                <span className="text-slate-300">·</span>
                <span className="text-emerald-700">Approved: <strong className="text-emerald-800 font-bold">{nocRequests.filter(r => r.status === 'issued').length}</strong></span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search student, roll no, company, role..."
                  value={nocSearchQuery}
                  onChange={(e) => setNocSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                />
                {nocSearchQuery && (
                  <button
                    onClick={() => setNocSearchQuery('')}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <button
                  onClick={() => setNocStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    nocStatusFilter === 'all'
                      ? 'bg-emerald-800 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({nocRequests.length})
                </button>
                <button
                  onClick={() => setNocStatusFilter('pending')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    nocStatusFilter === 'pending'
                      ? 'bg-amber-700 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Pending ({pendingNocCount})
                </button>
                <button
                  onClick={() => setNocStatusFilter('issued')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    nocStatusFilter === 'issued'
                      ? 'bg-emerald-700 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Approved ({nocRequests.filter(r => r.status === 'issued').length})
                </button>
              </div>
            </div>
          </div>

          {/* NOC Clearance Applications List */}
          <div className="space-y-4">
            {nocRequests
              .filter((item) => {
                const matchesSearch =
                  item.studentName.toLowerCase().includes(nocSearchQuery.toLowerCase()) ||
                  item.rollNumber.toLowerCase().includes(nocSearchQuery.toLowerCase()) ||
                  item.companyName.toLowerCase().includes(nocSearchQuery.toLowerCase()) ||
                  item.role.toLowerCase().includes(nocSearchQuery.toLowerCase());

                const matchesStatus =
                  nocStatusFilter === 'all' ||
                  (nocStatusFilter === 'pending' && item.status !== 'issued') ||
                  (nocStatusFilter === 'issued' && item.status === 'issued');

                return matchesSearch && matchesStatus;
              })
              .map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4 transition-all hover:border-slate-300"
                >
                  {/* Top Row: Student Identity & Request Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-200">
                        {req.studentName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-slate-900">{req.studentName}</h4>
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60">
                            {req.rollNumber}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {req.program} · Applied {req.appliedDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                          req.status === 'issued'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {req.status === 'issued' ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>NOC Approved &amp; Stamped</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            <span>Pending Clearance</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Clean 2-Section Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* Left: Internship Placement Specifications */}
                    <div className="bg-slate-50/70 rounded-xl p-3.5 space-y-2 border border-slate-200/60">
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>Internship Placement</span>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900">{req.companyName}</h5>
                        <p className="text-slate-600 font-medium">{req.role}</p>
                      </div>
                      <div className="flex items-center gap-4 text-slate-500 pt-0.5">
                        <span>Duration: <strong className="text-slate-800 font-semibold">{req.duration}</strong></span>
                        <span>Starts: <strong className="text-slate-800 font-semibold">{req.startDate}</strong></span>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-slate-500 font-medium">Offer Letter:</span>
                        <button
                          onClick={() => setPreviewOfferDoc(req)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-xs hover:text-emerald-700 hover:border-emerald-300 hover:bg-slate-50 cursor-pointer transition-all shadow-2xs"
                        >
                          <FileText className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="truncate max-w-[140px]">{req.offerLetterName || 'Offer_Letter.pdf'}</span>
                          <Eye className="w-3 h-3 text-slate-400" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Academic Standing & Criteria Check */}
                    <div className="bg-slate-50/70 rounded-xl p-3.5 space-y-2 border border-slate-200/60">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                          <span>Academic Standing</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 normal-case tracking-normal">
                          <Check className="w-3 h-3 text-emerald-600" /> Criteria Met
                        </span>
                      </div>

                      {/* 3 Metric Cards */}
                      <div className="grid grid-cols-3 gap-2 text-center pt-0.5">
                        <div className="bg-white rounded-lg p-2 border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 font-medium block">CGPA</span>
                          <span className="text-sm font-bold text-slate-900">{req.cgpa || '8.94'}</span>
                          <span className="text-[10px] text-emerald-600 font-semibold block">&ge; 7.50 req</span>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 font-medium block">Attendance</span>
                          <span className="text-sm font-bold text-slate-900">{req.attendance || '88.5%'}</span>
                          <span className="text-[10px] text-emerald-600 font-semibold block">&ge; 75% req</span>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 font-medium block">Backlogs</span>
                          <span className="text-sm font-bold text-slate-900">0</span>
                          <span className="text-[10px] text-emerald-600 font-semibold block">Clean</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500 leading-snug">
                        Candidate has fulfilled statutory clinical postings and theoretical requirements.
                      </p>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
                    <div className="text-xs text-slate-500 font-mono">
                      Ref: {req.referenceNo || req.id}
                      {req.status === 'issued' && (
                        <span className="text-emerald-700 font-sans font-semibold ml-2">
                          · Digitally signed
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {req.status !== 'issued' ? (
                        <button
                          onClick={() => handleApproveAndSignNoc(req)}
                          className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-300" />
                          <span>Approve &amp; Sign NOC</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => setSelectedNocForCert(req)}
                          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Printer className="w-3.5 h-3.5 text-emerald-400" />
                          <span>View Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* TAB 4 CONTENT: Institutional Accreditation & Regulatory Reporting (NIRF / NAAC / NBA) */}
      {activeTab === 'compliance' && (
        <div className="space-y-6">
          {/* Main Accreditation Header */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold shadow-xs">
                    <Award className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                      <span>Institutional Accreditation &amp; Reports</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Verified
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Placement &amp; graduation outcome data for NIRF, NAAC, and NBA audits.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 flex-wrap pt-1">
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5 text-emerald-700" />
                    {user?.institution || 'National Institute of Ayurveda'}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="font-mono text-slate-500">AISHE: {user?.id || 'C-24901'}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    NAAC A++
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded">
                    NIRF #1
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {/* Academic Year Filter */}
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-400">Year:</span>
                  <select
                    value={complianceYear}
                    onChange={(e) => setComplianceYear(e.target.value)}
                    className="bg-transparent font-bold text-slate-800 text-xs focus:outline-none cursor-pointer"
                  >
                    <option value="2025–26">2025–26</option>
                    <option value="2024–25">2024–25</option>
                    <option value="2023–24">2023–24</option>
                    <option value="all">All Years</option>
                  </select>
                </div>

                {/* Program Scope Selector */}
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-400">Program:</span>
                  <select
                    value={complianceProgram}
                    onChange={(e) => setComplianceProgram(e.target.value)}
                    className="bg-transparent font-bold text-slate-800 text-xs focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Programs</option>
                    <option value="bams">BAMS (UG)</option>
                    <option value="md">MD Ayurveda (PG)</option>
                    <option value="mpharm">M.Pharm</option>
                  </select>
                </div>

                {/* Primary Export Button */}
                <button
                  onClick={handleExportNirfCsv}
                  disabled={isExportingNirf}
                  className="px-3.5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  title="Export NIRF CSV Data"
                >
                  <Download className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Download NIRF Data (.CSV)</span>
                </button>
              </div>
            </div>

            {/* Quick Secondary Reports */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-semibold text-slate-700">Other Reports:</span>
                <button
                  onClick={handleExportNaacCsv}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-[11px] flex items-center gap-1 transition-all cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
                  <span>NAAC SSR (.CSV)</span>
                </button>
                <button
                  onClick={handleExportNbaCsv}
                  className="px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 font-semibold text-[11px] flex items-center gap-1 transition-all cursor-pointer"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-purple-600" />
                  <span>NBA SAR (.CSV)</span>
                </button>
              </div>

              <button
                onClick={() => setActiveMouModal(true)}
                className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>View {CORPORATE_MOUS_DATA.length} Industry MoUs</span>
              </button>
            </div>
          </div>

          {/* Clean 3 Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
            <button
              onClick={() => setComplianceTab('nirf')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                complianceTab === 'nirf'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>NIRF Rankings</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                complianceTab === 'nirf' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
              }`}>
                Placements &amp; Outcomes
              </span>
            </button>

            <button
              onClick={() => setComplianceTab('naac')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                complianceTab === 'naac'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>NAAC Accreditation</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                complianceTab === 'naac' ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-600'
              }`}>
                Criterion 5.2
              </span>
            </button>

            <button
              onClick={() => setComplianceTab('nba')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                complianceTab === 'nba'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>NBA Accreditation</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                complianceTab === 'nba' ? 'bg-purple-800 text-purple-100' : 'bg-slate-100 text-slate-600'
              }`}>
                Criteria 4
              </span>
            </button>
          </div>

          {/* TAB 1 BODY: NIRF PARAMETERS */}
          {complianceTab === 'nirf' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              {/* Metric Values Grid (6 Cards) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {/* 1. Median Salary */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Median Salary
                  </span>
                  <div className="text-xl font-extrabold text-emerald-800">
                    ₹{complianceMetrics.medianSalaryLpa} LPA
                  </div>
                  <p className="text-[10px] text-slate-500">
                    ₹{complianceMetrics.medianSalaryNumeric.toLocaleString('en-IN')} / yr
                  </p>
                </div>

                {/* 2. Success Rate */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Placement Rate
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    {complianceMetrics.totalProgressionPercent}%
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Jobs, Higher Ed &amp; Startups
                  </p>
                </div>

                {/* 3. Corporate MoUs */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Industry MoUs
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    {complianceMetrics.corporateMouCount} Active
                  </div>
                  <button
                    onClick={() => setActiveMouModal(true)}
                    className="text-[10px] text-emerald-700 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                  >
                    <span>View MoUs</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 4. Higher Studies */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Higher Studies
                  </span>
                  <div className="text-xl font-extrabold text-purple-900">
                    {complianceMetrics.totalHigherStudiesCount} Students
                  </div>
                  <p className="text-[10px] text-slate-500">
                    MD / MS &amp; Fellowships
                  </p>
                </div>

                {/* 5. Entrepreneurs */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Entrepreneurs
                  </span>
                  <div className="text-xl font-extrabold text-amber-900">
                    {complianceMetrics.totalEntrepreneurCount} Founders
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Clinics &amp; Startups
                  </p>
                </div>

                {/* 6. Direct Placements */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Campus Placed
                  </span>
                  <div className="text-xl font-extrabold text-emerald-700">
                    {complianceMetrics.totalPlacedCount} Placed
                  </div>
                  <p className="text-[10px] text-slate-500">
                    {complianceMetrics.directPlacementPercent}% of graduates
                  </p>
                </div>
              </div>

              {/* NIRF Summary Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        NIRF Placement Summary (Table 3.1)
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                        DCS Audit
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Graduation outcomes and salary statistics for Academic Cycle {complianceYear}
                    </p>
                  </div>

                  <button
                    onClick={handleExportNirfCsv}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer transition-all shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Download Report (.CSV)</span>
                  </button>
                </div>

                {/* Statutory NIRF Aggregated Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                        <th className="py-2.5 px-4">Audit Year</th>
                        <th className="py-2.5 px-4">Intake</th>
                        <th className="py-2.5 px-4">Graduating</th>
                        <th className="py-2.5 px-4 text-emerald-900">Placed</th>
                        <th className="py-2.5 px-4 text-emerald-900">Median Salary</th>
                        <th className="py-2.5 px-4 text-purple-900">Higher Studies</th>
                        <th className="py-2.5 px-4 text-amber-900">Entrepreneurs</th>
                        <th className="py-2.5 px-4 text-right">Success Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 font-medium">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          {complianceYear === 'all' ? '2025–26 (Active)' : complianceYear}
                        </td>
                        <td className="py-3 px-4 font-mono">150</td>
                        <td className="py-3 px-4 font-bold text-slate-900 font-mono">
                          {complianceMetrics.totalGraduatingCohort}
                        </td>
                        <td className="py-3 px-4 font-bold text-emerald-800 font-mono">
                          {complianceMetrics.totalPlacedCount}
                        </td>
                        <td className="py-3 px-4 font-bold text-emerald-900">
                          ₹{complianceMetrics.medianSalaryLpa} LPA
                        </td>
                        <td className="py-3 px-4 font-bold text-purple-900 font-mono">
                          {complianceMetrics.totalHigherStudiesCount}
                        </td>
                        <td className="py-3 px-4 font-bold text-amber-900 font-mono">
                          {complianceMetrics.totalEntrepreneurCount}
                        </td>
                        <td className="py-3 px-4 text-right font-black text-emerald-800 font-mono">
                          {complianceMetrics.totalProgressionPercent}%
                        </td>
                      </tr>
                      {complianceYear === '2025–26' && (
                        <>
                          <tr className="hover:bg-slate-50/80 text-slate-500 text-[11px]">
                            <td className="py-2 px-4 font-medium text-slate-700">2024–25 (Previous)</td>
                            <td className="py-2 px-4 font-mono">150</td>
                            <td className="py-2 px-4 font-mono">144</td>
                            <td className="py-2 px-4 font-mono text-emerald-700">94</td>
                            <td className="py-2 px-4 font-mono text-emerald-700">₹7.80 LPA</td>
                            <td className="py-2 px-4 font-mono text-purple-700">21</td>
                            <td className="py-2 px-4 font-mono text-amber-700">7</td>
                            <td className="py-2 px-4 text-right font-bold text-slate-700 font-mono">84.7%</td>
                          </tr>
                          <tr className="hover:bg-slate-50/80 text-slate-500 text-[11px]">
                            <td className="py-2 px-4 font-medium text-slate-700">2023–24 (Historical)</td>
                            <td className="py-2 px-4 font-mono">150</td>
                            <td className="py-2 px-4 font-mono">140</td>
                            <td className="py-2 px-4 font-mono text-emerald-700">86</td>
                            <td className="py-2 px-4 font-mono text-emerald-700">₹7.20 LPA</td>
                            <td className="py-2 px-4 font-mono text-purple-700">19</td>
                            <td className="py-2 px-4 font-mono text-amber-700">6</td>
                            <td className="py-2 px-4 text-right font-bold text-slate-700 font-mono">79.3%</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50/60 rounded-xl p-3 border border-emerald-200/60 flex items-start gap-2.5 text-xs text-emerald-950">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <p className="text-emerald-800 text-[11px] leading-relaxed">
                    Graduation Outcome score combines Placements, Higher Studies, and Entrepreneurship. All {filteredComplianceCohort.length} candidate records are verified with DigiLocker and APAAR institutional registries.
                  </p>
                </div>
              </div>

              {/* Student Audit Ledger */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>Student Verification List</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800">
                        {filteredComplianceCohort.length} Students
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Verified candidate records. Click any student to view offer letter &amp; credentials.
                    </p>
                  </div>

                  {/* Filter Toolbar for Ledger */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Search Candidate */}
                    <div className="relative min-w-[200px]">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search candidate, roll, employer..."
                        value={complianceSearch}
                        onChange={(e) => setComplianceSearch(e.target.value)}
                        className="w-full bg-slate-50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-7 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                      {complianceSearch && (
                        <button
                          onClick={() => setComplianceSearch('')}
                          className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Outcome Category Filter */}
                    <select
                      value={complianceCategory}
                      onChange={(e) => setComplianceCategory(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-700 cursor-pointer focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="all">All Outcomes</option>
                      <option value="GO-P">GO-P: Campus Placed</option>
                      <option value="GO-HS">GO-HS: Higher Studies</option>
                      <option value="GO-E">GO-E: Entrepreneurship</option>
                    </select>

                    <button
                      onClick={handleExportNirfCsv}
                      className="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                      title="Download audit CSV"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>

                {/* Candidate Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-extrabold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                        <th className="py-3 px-4">Candidate &amp; Roll Number</th>
                        <th className="py-3 px-4">Program &amp; Batch</th>
                        <th className="py-3 px-4">Regulatory Category</th>
                        <th className="py-3 px-4">Employer / Admitting University</th>
                        <th className="py-3 px-4">Package / Stipend</th>
                        <th className="py-3 px-4">DigiLocker / APAAR ID</th>
                        <th className="py-3 px-4 text-right">Audit Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {filteredComplianceCohort.map((student) => (
                        <tr
                          key={student.id}
                          onClick={() => setSelectedComplianceStudent(student)}
                          className="hover:bg-emerald-50/40 cursor-pointer transition-colors"
                        >
                          <td className="py-3 px-4 font-bold text-slate-900">
                            <div>{student.candidateName}</div>
                            <span className="font-mono text-[10px] text-slate-500 font-semibold">{student.rollNumber}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-semibold text-slate-800">{student.program}</div>
                            <span className="text-[10px] text-slate-500">{student.batch}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                                student.outcomeCategory === 'GO-P'
                                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                                  : student.outcomeCategory === 'GO-HS'
                                  ? 'bg-purple-100 text-purple-900 border border-purple-200'
                                  : 'bg-amber-100 text-amber-900 border border-amber-200'
                              }`}
                            >
                              {student.categoryLabel.split('(')[1]?.replace(')', '') || student.outcomeCategory}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-bold text-slate-900">{student.employerOrInstitution}</div>
                            <span className="text-[11px] text-slate-500">{student.designationOrDegree}</span>
                          </td>
                          <td className="py-3 px-4 font-black text-slate-900">
                            {student.packageDisplay}
                          </td>
                          <td className="py-3 px-4 font-mono text-[11px] text-slate-600">
                            {student.apaarId}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Verified</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 BODY: NAAC CRITERION 5.2 */}
          {complianceTab === 'naac' && (
            <div className="space-y-5 animate-in fade-in duration-300">
              {/* Metric Values Grid (6 Cards) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {/* 1. Median Salary */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Median Salary
                  </span>
                  <div className="text-xl font-extrabold text-blue-900">
                    ₹{complianceMetrics.medianSalaryLpa} LPA
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Criterion 5.2.1 Baseline
                  </p>
                </div>

                {/* 2. Total Placed % */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Placement Rate
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    {complianceMetrics.directPlacementPercent}%
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Campus Placed (5.2.1)
                  </p>
                </div>

                {/* 3. Corporate MoUs */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Active MoUs
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    {complianceMetrics.corporateMouCount} Active
                  </div>
                  <button
                    onClick={() => setActiveMouModal(true)}
                    className="text-[10px] text-blue-700 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                  >
                    <span>Criterion 3.5 MoUs</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 4. Exams Qualified */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Exams Qualified
                  </span>
                  <div className="text-xl font-extrabold text-emerald-800">
                    42 Qualified
                  </div>
                  <p className="text-[10px] text-slate-500">
                    AIAPGET &amp; AYUSH-NET
                  </p>
                </div>

                {/* 5. Higher Studies */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Higher Studies
                  </span>
                  <div className="text-xl font-extrabold text-purple-900">
                    {complianceMetrics.totalHigherStudiesCount} Scholars
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Enrolled in MD/MS &amp; Ph.D
                  </p>
                </div>

                {/* 6. Average Package */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Average Package
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    ₹{complianceMetrics.averageSalaryLpa} LPA
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Top: ₹{complianceMetrics.highestSalaryLpa} LPA
                  </p>
                </div>
              </div>

              {/* NAAC Criterion 5.2 Key Indicator Matrix Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      NAAC Student Progression Report (Criterion 5.2)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Self Study Report (SSR) student progression &amp; placement records
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleExportNaacCsv}
                      className="px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SSR (.CSV)</span>
                    </button>
                    <button
                      onClick={handleExportNirfCsv}
                      className="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Download NIRF (.CSV)</span>
                    </button>
                  </div>
                </div>

                {/* NAAC SSR Format Audit Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-extrabold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                        <th className="py-3 px-4">Year</th>
                        <th className="py-3 px-4">Student Name &amp; Roll Number</th>
                        <th className="py-3 px-4">Program Graduated</th>
                        <th className="py-3 px-4">Employer / Admitting Organization</th>
                        <th className="py-3 px-4">Annual Package (INR)</th>
                        <th className="py-3 px-4">Appointment Order Ref / Date</th>
                        <th className="py-3 px-4">National Exam (5.2.2)</th>
                        <th className="py-3 px-4 text-right">MoU Linkage (3.5)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {filteredComplianceCohort.map((student) => (
                        <tr
                          key={student.id}
                          onClick={() => setSelectedComplianceStudent(student)}
                          className="hover:bg-blue-50/40 cursor-pointer transition-colors"
                        >
                          <td className="py-3 px-4 font-mono font-bold text-slate-900">{student.academicYear}</td>
                          <td className="py-3 px-4">
                            <div className="font-bold text-slate-900">{student.candidateName}</div>
                            <span className="font-mono text-[10px] text-slate-500">{student.rollNumber}</span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-slate-800">{student.program}</td>
                          <td className="py-3 px-4">
                            <div className="font-bold text-slate-900">{student.employerOrInstitution}</div>
                            <span className="text-[11px] text-slate-500">{student.designationOrDegree}</span>
                          </td>
                          <td className="py-3 px-4 font-black text-slate-900">{student.packageDisplay}</td>
                          <td className="py-3 px-4 font-mono text-[11px] text-slate-600">{student.offerRef}</td>
                          <td className="py-3 px-4">
                            <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              {student.naacExamQualified}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right font-mono text-[10px] font-semibold text-slate-600">
                            {student.mouCode}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3 BODY: NBA CRITERIA 4 */}
          {complianceTab === 'nba' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Metric Values Grid (6 Cards) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {/* 1. Median Salary */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Median Salary
                  </span>
                  <div className="text-xl font-extrabold text-purple-900">
                    ₹{complianceMetrics.medianSalaryLpa} LPA
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Criterion 4 Benchmark
                  </p>
                </div>

                {/* 2. Total Placed % */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Placement Index
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    88.0%
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Target: &ge; 80% Attained
                  </p>
                </div>

                {/* 3. Corporate MoUs */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Active MoUs
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    {complianceMetrics.corporateMouCount} MoUs
                  </div>
                  <button
                    onClick={() => setActiveMouModal(true)}
                    className="text-[10px] text-purple-700 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                  >
                    <span>Training MoUs</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 4. Campus Drives */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Campus Drives
                  </span>
                  <div className="text-xl font-extrabold text-emerald-800">
                    18 Drives
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Top Recruiter Sessions
                  </p>
                </div>

                {/* 5. Skill Pass Rate */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Skill Pass Rate
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    92.4%
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Lab &amp; Clinical Certified
                  </p>
                </div>

                {/* 6. Top Package */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-soft space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Top Package
                  </span>
                  <div className="text-xl font-extrabold text-slate-900">
                    ₹{complianceMetrics.highestSalaryLpa} LPA
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Highest Offer
                  </p>
                </div>
              </div>

              {/* NBA Criteria 4 Performance & PO Matrix Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      NBA Student Performance &amp; Outcomes (Criterion 4)
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Program Outcome (PO) attainment and campus drive records
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleExportNbaCsv}
                      className="px-3 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SAR (.CSV)</span>
                    </button>
                    <button
                      onClick={handleExportNirfCsv}
                      className="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Download NIRF (.CSV)</span>
                    </button>
                  </div>
                </div>

                {/* NBA Program Outcome Attainment Summary Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">PO3: GMP Standards</span>
                    <span className="text-sm font-bold text-slate-900">96.2% Attained</span>
                    <span className="text-[10px] text-emerald-600 font-semibold block">&ge; 80% Target Met</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">PO5: Quality Control</span>
                    <span className="text-sm font-bold text-slate-900">91.8% Attained</span>
                    <span className="text-[10px] text-emerald-600 font-semibold block">&ge; 80% Target Met</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">PO8: Clinical Practice</span>
                    <span className="text-sm font-bold text-slate-900">94.5% Attained</span>
                    <span className="text-[10px] text-emerald-600 font-semibold block">&ge; 80% Target Met</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">PO12: Lifelong Learning</span>
                    <span className="text-sm font-bold text-slate-900">89.0% Attained</span>
                    <span className="text-[10px] text-emerald-600 font-semibold block">&ge; 80% Target Met</span>
                  </div>
                </div>

                {/* NBA SAR Format Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-extrabold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                        <th className="py-3 px-4">Student &amp; Roll Number</th>
                        <th className="py-3 px-4">Campus Drive / Recruiter</th>
                        <th className="py-3 px-4">Drive Date</th>
                        <th className="py-3 px-4">Core Skill Assessment Scores</th>
                        <th className="py-3 px-4">POs Attained</th>
                        <th className="py-3 px-4">Package Offered</th>
                        <th className="py-3 px-4 text-right">MoU Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {filteredComplianceCohort.map((student) => (
                        <tr
                          key={student.id}
                          onClick={() => setSelectedComplianceStudent(student)}
                          className="hover:bg-purple-50/40 cursor-pointer transition-colors"
                        >
                          <td className="py-3 px-4">
                            <div className="font-bold text-slate-900">{student.candidateName}</div>
                            <span className="font-mono text-[10px] text-slate-500 font-semibold">{student.rollNumber}</span>
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">{student.employerOrInstitution}</td>
                          <td className="py-3 px-4 font-mono text-[11px] text-slate-600">{student.campusDriveDate}</td>
                          <td className="py-3 px-4">
                            <span className="text-[11px] font-semibold text-purple-900 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              {student.nbaSkillScore}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-[11px] font-bold text-slate-800">
                            {student.nbaOutcomeAttained}
                          </td>
                          <td className="py-3 px-4 font-black text-slate-900">{student.packageDisplay}</td>
                          <td className="py-3 px-4 text-right font-mono text-[10px] text-slate-500">
                            {student.mouCode}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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

      {/* OFFER LETTER PREVIEW MODAL */}
      {previewOfferDoc && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Official Internship Offer Letter</h3>
                  <p className="text-xs text-slate-500">Host Organization Appointment Verification</p>
                </div>
              </div>
              <button
                onClick={() => setPreviewOfferDoc(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Offer Document Body */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3.5 text-xs text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-sm font-black text-slate-900">{previewOfferDoc.companyName}</h4>
                  <p className="text-[11px] text-slate-500">Phytopharmacy Research &amp; Formulation Division</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Verified Offer
                </span>
              </div>

              <div className="space-y-2">
                <p>
                  To: <strong className="text-slate-900">{previewOfferDoc.studentName}</strong> ({previewOfferDoc.rollNumber})
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We are pleased to offer you the position of <strong className="text-slate-900">{previewOfferDoc.role}</strong> at <strong className="text-slate-900">{previewOfferDoc.companyName}</strong> for a duration of <strong className="text-slate-900">{previewOfferDoc.duration}</strong> commencing on <strong className="text-slate-900">{previewOfferDoc.startDate}</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This training includes Schedule T GMP compliance, classical Ayush pharmacopoeial standardization, and laboratory analytical assay training.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[11px]">
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9px]">File Attached</span>
                  <span className="font-semibold text-slate-800">{previewOfferDoc.offerLetterName || 'Offer_Letter.pdf'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9px]">File Size</span>
                  <span className="font-semibold text-slate-800">{previewOfferDoc.offerLetterSize || '1.8 MB'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewOfferDoc(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close Inspection
              </button>
              {previewOfferDoc.status !== 'issued' && (
                <button
                  onClick={() => {
                    handleApproveAndSignNoc(previewOfferDoc);
                    setPreviewOfferDoc(null);
                  }}
                  className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Approve &amp; Digitally Sign NOC</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CANDIDATE AUDIT INSPECTION MODAL */}
      {selectedComplianceStudent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Statutory Candidate Verification Dossier
                  </h3>
                  <p className="text-xs text-slate-500">
                    NIRF DCS · NAAC 5.2 · NBA Criterion 4 Audit Record
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedComplianceStudent(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate Identity Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Candidate Name</span>
                <span className="font-extrabold text-slate-900 text-sm">{selectedComplianceStudent.candidateName}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Roll Number</span>
                <span className="font-mono font-bold text-slate-800">{selectedComplianceStudent.rollNumber}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Enrolled Program</span>
                <span className="font-semibold text-slate-700">{selectedComplianceStudent.program}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Academic Batch</span>
                <span className="font-semibold text-slate-700">{selectedComplianceStudent.batch} (Cycle {selectedComplianceStudent.academicYear})</span>
              </div>
            </div>

            {/* Regulatory Classification */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-900">
                  Regulatory Outcome Parameter
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-200 text-emerald-950">
                  {selectedComplianceStudent.outcomeCategory}
                </span>
              </div>
              <div className="font-extrabold text-emerald-950 text-sm">
                {selectedComplianceStudent.categoryLabel}
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-200/60 text-[11px]">
                <div>
                  <span className="text-emerald-800/80 block font-semibold">Employer / Institution:</span>
                  <span className="font-bold text-emerald-950">{selectedComplianceStudent.employerOrInstitution}</span>
                </div>
                <div>
                  <span className="text-emerald-800/80 block font-semibold">Designation / Role:</span>
                  <span className="font-bold text-emerald-950">{selectedComplianceStudent.designationOrDegree}</span>
                </div>
                <div>
                  <span className="text-emerald-800/80 block font-semibold">Annual CTC / Package:</span>
                  <span className="font-black text-emerald-900">{selectedComplianceStudent.packageDisplay}</span>
                </div>
                <div>
                  <span className="text-emerald-800/80 block font-semibold">Appointment Ref:</span>
                  <span className="font-mono font-bold text-emerald-950">{selectedComplianceStudent.offerRef}</span>
                </div>
              </div>
            </div>

            {/* Multi-Framework Audit Parameters */}
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-blue-700 uppercase block">NAAC Metric 5.2.2 Qualifying Exam</span>
                <span className="font-bold text-slate-900">{selectedComplianceStudent.naacExamQualified}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] font-bold text-purple-700 uppercase block">NBA Criterion 4 Skill &amp; PO Attainment</span>
                <span className="font-bold text-slate-900 block">{selectedComplianceStudent.nbaSkillScore}</span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold mt-0.5 block">Program Outcomes: {selectedComplianceStudent.nbaOutcomeAttained}</span>
              </div>
            </div>

            {/* DigiLocker & SHA-256 Stamp */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Cryptographic Audit Seal</span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> DigiLocker Synced
                </span>
              </div>
              <div className="text-[11px] break-all text-slate-300">
                {selectedComplianceStudent.sha256Hash}
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                <span>APAAR ID: {selectedComplianceStudent.apaarId}</span>
                <span>MoU: {selectedComplianceStudent.mouCode}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyHash(selectedComplianceStudent.sha256Hash)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedHash === selectedComplianceStudent.sha256Hash ? 'Copied Seal!' : 'Copy Audit Hash'}</span>
              </button>
              <button
                onClick={() => setSelectedComplianceStudent(null)}
                className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CORPORATE MOUS DIRECTORY MODAL */}
      {activeMouModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Active Corporate &amp; Institutional MoUs (14 Partners)
                  </h3>
                  <p className="text-xs text-slate-500">
                    NAAC Criterion 3.5 Collaborations · NIRF Institutional Linkages · NBA Industry Drives
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveMouModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of MoUs */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              {CORPORATE_MOUS_DATA.map((mou) => (
                <div
                  key={mou.id}
                  className="bg-slate-50 hover:bg-emerald-50/30 p-4 rounded-2xl border border-slate-200/80 transition-all space-y-2 text-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h5 className="font-extrabold text-sm text-slate-900">{mou.partnerName}</h5>
                      <span className="font-mono text-[10px] text-emerald-800 font-bold bg-emerald-100/70 px-2 py-0.5 rounded">
                        {mou.code}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 w-fit">
                      {mou.status}
                    </span>
                  </div>

                  <p className="text-slate-600 font-medium leading-relaxed">
                    {mou.scope}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                    <div>
                      <span>Validity: </span>
                      <strong className="text-slate-800 font-semibold">{mou.signedDate} → {mou.validTill}</strong>
                    </div>
                    <div>
                      <span>Placements Supported: </span>
                      <strong className="text-emerald-800 font-bold">{mou.studentsPlacedCount} Scholars</strong>
                    </div>
                    <div className="truncate">
                      <span>SPOC: </span>
                      <strong className="text-slate-800 font-semibold">{mou.spoc}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                All 14 MoUs signed under Registrar Institutional Seal · AISHE-C-24901
              </span>
              <button
                onClick={() => setActiveMouModal(false)}
                className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold cursor-pointer"
              >
                Close Directory
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DIGITAL NOC CERTIFICATE MODAL */}
      <DigitalNocModal
        isOpen={!!selectedNocForCert}
        onClose={() => setSelectedNocForCert(null)}
        noc={selectedNocForCert}
      />
    </div>
  );
};

export default CollegePortalView;

