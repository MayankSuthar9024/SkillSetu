import React, { useState } from 'react';
import {
  Building2,
  Calendar,
  Award,
  TrendingUp,
  Coins,
  CheckCircle2,
  Users,
  Search,
  Filter,
  PlusCircle,
  Clock,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Sparkles,
  AlertCircle,
  X,
  FileText,
  Download,
  Send,
  Sliders,
  Check,
  Building,
  School,
  Landmark,
  Layers,
  MapPin,
  Briefcase,
  LayoutGrid,
  List
} from 'lucide-react';

export const TPOPlacementCommandCenter = ({ user = {}, isTPOAdmin = true }) => {
  // 6 Scheduled & Active On-Campus Drives
  const [drives, setDrives] = useState([
    {
      id: 'drive-1',
      company: 'Dabur India Ltd',
      sector: 'Ayurvedic FMCG & Clinical R&D',
      role: 'Ayurvedic Formulation Research Fellow & Clinical Associate',
      ctc: '₹18.5 LPA',
      driveDate: '24 Sep 2026',
      eligibleBranches: ['BAMS (Final Year)', 'MD/MS Ayurveda', 'B.Pharm Ayush'],
      cutoffScore: '85% Competency Radar',
      cutoffNumeric: 85,
      status: 'Scheduled',
      vacancies: 8,
      mode: 'On-Campus (Auditorium Hall 2)',
      registeredCount: 42,
      shortlistedCount: 19,
      contactPerson: 'Dr. Vikram Sethi (R&D Talent Lead)'
    },
    {
      id: 'drive-2',
      company: 'Patanjali Research Foundation',
      sector: 'Herbo-Pharmaceuticals & QC',
      role: 'Phytochemical QC Analyst & Heavy Metal Assayer',
      ctc: '₹9.2 LPA',
      driveDate: '28 Sep 2026',
      eligibleBranches: ['BAMS (Final Year)', 'M.Sc Medicinal Plants', 'B.Pharm Ayush'],
      cutoffScore: '80% Readiness',
      cutoffNumeric: 80,
      status: 'Screening',
      vacancies: 14,
      mode: 'Central Instrumentation Wing',
      registeredCount: 56,
      shortlistedCount: 28,
      contactPerson: 'Dr. Ananya Sen (Head Analytical QC)'
    },
    {
      id: 'drive-3',
      company: 'Himalaya Wellness Company',
      sector: 'Wellness Formulations & Hospital Care',
      role: 'Panchakarma Clinical Operations Officer',
      ctc: '₹8.4 LPA',
      driveDate: '05 Oct 2026',
      eligibleBranches: ['BAMS (Final Year)', 'MD/MS Kayachikitsa'],
      cutoffScore: '82% Clinical Dravyaguna',
      cutoffNumeric: 82,
      status: 'Scheduled',
      vacancies: 10,
      mode: 'On-Campus (Clinical Block B)',
      registeredCount: 38,
      shortlistedCount: 21,
      contactPerson: 'Priya Nambiar (Campus Liaison)'
    },
    {
      id: 'drive-4',
      company: 'Charak Pharma',
      sector: 'Classical & Proprietary Formulations',
      role: 'Schedule T GMP Quality Assurance Lead',
      ctc: '₹11.0 LPA',
      driveDate: '12 Oct 2026',
      eligibleBranches: ['BAMS (Final Year)', 'B.Pharm Ayush', 'M.Pharm Ayush'],
      cutoffScore: '88% GMP & QC',
      cutoffNumeric: 88,
      status: 'Scheduled',
      vacancies: 6,
      mode: 'On-Campus (Conference Room 1)',
      registeredCount: 31,
      shortlistedCount: 14,
      contactPerson: 'K. R. Varma (Director Quality Operations)'
    },
    {
      id: 'drive-5',
      company: 'All India Institute of Ayurveda (AIIA)',
      sector: 'Apex Autonomous Clinical Research',
      role: 'Junior Clinical Research Associate (SPARK 4.0)',
      ctc: '₹10.5 LPA',
      driveDate: '15 Sep 2026',
      eligibleBranches: ['BAMS', 'MD/MS Ayurveda'],
      cutoffScore: '86% GCP & Trial Design',
      cutoffNumeric: 86,
      status: 'Completed',
      vacancies: 12,
      mode: 'Apex Research Directorate',
      registeredCount: 64,
      shortlistedCount: 32,
      contactPerson: 'Prof. S. N. Tripathi (Dean Research)'
    },
    {
      id: 'drive-6',
      company: 'Kottakkal Arya Vaidya Sala',
      sector: 'Authentic Traditional Therapeutics',
      role: 'Ayurvedic Hospital Resident Physician',
      ctc: '₹7.8 LPA',
      driveDate: '18 Oct 2026',
      eligibleBranches: ['BAMS (Final Year)'],
      cutoffScore: '84% Diagnosis & Dravyaguna',
      cutoffNumeric: 84,
      status: 'Scheduled',
      vacancies: 15,
      mode: 'On-Campus (Seminar Hall)',
      registeredCount: 47,
      shortlistedCount: 25,
      contactPerson: 'Dr. C. K. Warrier (Chief Medical Superintendent)'
    }
  ]);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'
  const [registeredDrives, setRegisteredDrives] = useState({ 'drive-1': true });

  // Modals
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [selectedDriveForManage, setSelectedDriveForManage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // New Drive Form
  const [newDriveForm, setNewDriveForm] = useState({
    company: '',
    sector: 'Ayush Pharmaceuticals & Healthcare',
    role: '',
    ctc: '₹8.5 LPA',
    driveDate: '',
    eligibleBranches: ['BAMS (Final Year)'],
    cutoffScore: '82% Competency Radar',
    cutoffNumeric: 82,
    status: 'Scheduled',
    vacancies: 10,
    mode: 'On-Campus (Auditorium Hall 1)',
    contactPerson: 'TPO Placement Secretariat'
  });

  const AVAILABLE_BRANCHES = [
    'BAMS (Final Year)',
    'MD/MS Ayurveda',
    'MD/MS Dravyaguna',
    'MD/MS Kayachikitsa',
    'B.Pharm Ayush',
    'M.Pharm Ayush',
    'Ph.D Ayush Sciences'
  ];

  const toggleBranchSelection = (branch) => {
    setNewDriveForm(prev => {
      const exists = prev.eligibleBranches.includes(branch);
      if (exists) {
        if (prev.eligibleBranches.length === 1) return prev; // Keep at least one
        return { ...prev, eligibleBranches: prev.eligibleBranches.filter(b => b !== branch) };
      } else {
        return { ...prev, eligibleBranches: [...prev.eligibleBranches, branch] };
      }
    });
  };

  const handlePublishNewDrive = (e) => {
    e.preventDefault();
    if (!newDriveForm.company.trim() || !newDriveForm.role.trim() || !newDriveForm.driveDate) {
      alert('Please fill out Company Name, Job Role, and Drive Date.');
      return;
    }

    const newDrive = {
      id: `drive-${Date.now()}`,
      company: newDriveForm.company.trim(),
      sector: newDriveForm.sector || 'Ayush Pharmaceuticals',
      role: newDriveForm.role.trim(),
      ctc: newDriveForm.ctc || '₹7.5 LPA',
      driveDate: newDriveForm.driveDate,
      eligibleBranches: newDriveForm.eligibleBranches,
      cutoffScore: `${newDriveForm.cutoffNumeric}% Competency Radar`,
      cutoffNumeric: Number(newDriveForm.cutoffNumeric) || 80,
      status: newDriveForm.status || 'Scheduled',
      vacancies: Number(newDriveForm.vacancies) || 8,
      mode: newDriveForm.mode || 'On-Campus (Auditorium)',
      registeredCount: 0,
      shortlistedCount: 0,
      contactPerson: newDriveForm.contactPerson || 'TPO Cell'
    };

    setDrives(prev => [newDrive, ...prev]);
    setIsPublishModalOpen(false);
    setToastMessage(`On-campus drive for "${newDrive.company}" published successfully!`);
    setTimeout(() => setToastMessage(null), 4000);

    // Reset Form
    setNewDriveForm({
      company: '',
      sector: 'Ayush Pharmaceuticals & Healthcare',
      role: '',
      ctc: '₹8.5 LPA',
      driveDate: '',
      eligibleBranches: ['BAMS (Final Year)'],
      cutoffScore: '82% Competency Radar',
      cutoffNumeric: 82,
      status: 'Scheduled',
      vacancies: 10,
      mode: 'On-Campus (Auditorium Hall 1)',
      contactPerson: 'TPO Placement Secretariat'
    });
  };

  // Filtered Drives
  const filteredDrives = drives.filter(drive => {
    const matchesSearch = 
      drive.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drive.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drive.eligibleBranches.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || drive.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate dynamic metrics
  const activeDrivesCount = drives.filter(d => d.status === 'Scheduled' || d.status === 'Screening').length;

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="p-4 bg-emerald-800 text-white text-xs font-bold rounded-2xl flex items-center justify-between shadow-xl animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
            <span>{toastMessage}</span>
          </div>
          <button 
            type="button" 
            onClick={() => setToastMessage(null)}
            className="text-emerald-200 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 1. HEADER */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200 shadow-2xs">
                <Briefcase className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Campus Placement Drives
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Explore upcoming recruitment drives, review competency radar cutoffs, and register directly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isTPOAdmin ? (
              <button
                type="button"
                onClick={() => setIsPublishModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-emerald-300" />
                <span>Publish New Drive</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-2 rounded-2xl text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-emerald-900 font-bold">
                  Registered: <span className="font-extrabold">{Object.keys(registeredDrives).length} Drive(s)</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Minimal info bar */}
        <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-100/70 text-emerald-900 border border-emerald-200 font-bold text-[10px]">
              AY 2025–26 Placement Season
            </span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              APAAR Verified Eligibility &amp; DigiLocker Synced
            </span>
          </div>

          <span className="text-slate-500 font-medium">
            National Institute of Ayurveda · TPO Cell
          </span>
        </div>
      </div>

      {/* 2. PLACEMENT METRICS (4 Sleek Cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Active Campus Drives</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {activeDrivesCount} Scheduled
          </h3>
          <p className="text-[11px] text-blue-700 font-semibold flex items-center gap-1 mt-1">
            <Clock className="w-3 h-3" /> Next drive in 6 days
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Highest Package</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
              <Coins className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            ₹18.5 LPA
          </h3>
          <p className="text-[11px] text-purple-700 font-bold truncate mt-1">
            Dabur Clinical R&amp;D
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Average Package</span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            ₹7.2 LPA
          </h3>
          <p className="text-[11px] text-teal-700 font-semibold mt-1">
            +18.4% YoY Growth
          </p>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500">Placement Rate</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-emerald-800 tracking-tight">
            84.2%
          </h3>
          <p className="text-[11px] text-slate-500 font-semibold mt-1">
            142 Offers Extended
          </p>
        </div>
      </div>

      {/* 3. RECRUITMENT DRIVES SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
        {/* Toolbar & Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/40">
          <div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-800" />
              <h3 className="font-extrabold text-base text-slate-900 tracking-tight">
                Upcoming Placement Drives
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                {filteredDrives.length} Drives
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Review company requirements, pre-screen cutoffs, and apply directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search company, role, branch..."
                className="pl-8 pr-3 py-1.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700 w-44 sm:w-52"
              />
            </div>

            {/* Status Filter Tabs */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 text-xs">
              {['All', 'Scheduled', 'Screening', 'Completed'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                    statusFilter === status
                      ? 'bg-white text-emerald-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-white text-emerald-800 shadow-2xs'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white text-emerald-800 shadow-2xs'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
                title="Table View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content: Cards View or Table View */}
        {viewMode === 'cards' ? (
          <div className="p-4 sm:p-5">
            {filteredDrives.length === 0 ? (
              <div className="py-12 text-center text-slate-400 font-medium">
                No placement drives match your filter criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDrives.map((drive) => {
                  const isRegistered = Boolean(registeredDrives[drive.id]);
                  const isScheduled = drive.status === 'Scheduled';
                  const isScreening = drive.status === 'Screening';

                  return (
                    <div
                      key={drive.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between space-y-4 group"
                    >
                      {/* Top Row: Company Info & CTC */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-black text-sm border border-emerald-200/80 shrink-0 shadow-2xs group-hover:bg-emerald-800 group-hover:text-white transition-all">
                              {drive.company.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-extrabold text-slate-900 text-sm truncate leading-snug">
                                {drive.company}
                              </h4>
                              <p className="text-[11px] text-slate-400 truncate">
                                {drive.sector}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1 shrink-0">
                            <span className="font-black text-xs text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                              {drive.ctc}
                            </span>
                          </div>
                        </div>

                        {/* Role Title */}
                        <div>
                          <h5 className="font-bold text-slate-800 text-xs leading-snug">
                            {drive.role}
                          </h5>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {drive.vacancies} Vacancies · {drive.contactPerson}
                          </span>
                        </div>

                        {/* Key Info Chips */}
                        <div className="space-y-1.5 pt-1 text-xs">
                          <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="font-semibold text-slate-800">{drive.driveDate}</span>
                            <span className="text-slate-300">·</span>
                            <span className="text-slate-500 truncate">{drive.mode}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px]">
                            <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="font-mono font-bold text-teal-800">{drive.cutoffScore}</span>
                            <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                              Eligible ✓
                            </span>
                          </div>

                          {/* Eligible Disciplines */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {drive.eligibleBranches.slice(0, 2).map((branch, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/80"
                              >
                                {branch}
                              </span>
                            ))}
                            {drive.eligibleBranches.length > 2 && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-50 text-slate-500 border border-slate-200/80">
                                +{drive.eligibleBranches.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          isScheduled
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : isScreening
                            ? 'bg-amber-50 text-amber-900 border-amber-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isScheduled ? 'bg-blue-500' : isScreening ? 'bg-amber-500' : 'bg-slate-400'
                          }`} />
                          {drive.status}
                        </span>

                        <button
                          type="button"
                          onClick={() => setSelectedDriveForManage(drive)}
                          className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1 shadow-2xs ${
                            isRegistered
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                              : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                          }`}
                        >
                          {isRegistered ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                              <span>Registered</span>
                            </>
                          ) : (
                            <>
                              <span>{isTPOAdmin ? 'Manage Drive' : 'View & Register'}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Streamlined Table View */
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50/70 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="py-3 px-5">Company Name</th>
                  <th className="py-3 px-4">Role &amp; Package</th>
                  <th className="py-3 px-4">Date &amp; Venue</th>
                  <th className="py-3 px-4 text-center">Cutoff</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredDrives.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-400 font-medium">
                      No placement drives match your filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredDrives.map((drive) => {
                    const isRegistered = Boolean(registeredDrives[drive.id]);
                    const isScheduled = drive.status === 'Scheduled';
                    const isScreening = drive.status === 'Screening';

                    return (
                      <tr key={drive.id} className="hover:bg-slate-50/60 transition-colors group">
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs border border-slate-200 shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                              {drive.company.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-extrabold text-slate-900 text-xs sm:text-sm">
                                {drive.company}
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {drive.sector}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{drive.role}</div>
                          <span className="font-extrabold text-emerald-800 text-[11px] bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">
                            {drive.ctc}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{drive.driveDate}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 truncate max-w-[150px]">
                            {drive.mode}
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-teal-50 text-teal-900 border border-teal-200">
                            {drive.cutoffScore}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-center">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                            isScheduled
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : isScreening
                              ? 'bg-amber-50 text-amber-900 border-amber-200'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {drive.status}
                          </span>
                        </td>

                        <td className="py-3.5 px-5 text-right whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => setSelectedDriveForManage(drive)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer inline-flex items-center gap-1 ${
                              isRegistered
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                                : 'bg-slate-100 hover:bg-emerald-800 hover:text-white text-slate-700 border border-slate-200'
                            }`}
                          >
                            {isRegistered ? 'Registered ✓' : (isTPOAdmin ? 'Manage Drive' : 'View & Register')}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Table/Card Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>All drives verified by TPO Directorate &amp; aligned with Ayush Industry standards</span>
          </div>
          <span className="font-semibold text-slate-700">
            Total Openings: <strong className="text-emerald-900 font-bold">65 Vacancies</strong>
          </span>
        </div>
      </div>

      {/* 4. MODAL: PUBLISH NEW ON-CAMPUS PLACEMENT DRIVE */}
      {isPublishModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200 shadow-2xs">
                  <PlusCircle className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 tracking-tight">
                    Publish New On-Campus Placement Drive
                  </h4>
                  <p className="text-xs text-slate-500">
                    Training &amp; Placement Cell (TPO) • Directorate Recruitment Scheduler
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPublishModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handlePublishNewDrive} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Company / Employer Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newDriveForm.company}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="e.g. Baidyanath Group / Soukya"
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Industry Sector */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Industry Sector
                  </label>
                  <select
                    value={newDriveForm.sector}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, sector: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Ayurvedic FMCG & Clinical R&D">Ayurvedic FMCG &amp; Clinical R&amp;D</option>
                    <option value="Herbo-Pharmaceuticals & QC">Herbo-Pharmaceuticals &amp; QC</option>
                    <option value="Wellness Formulations & Hospital Care">Wellness Formulations &amp; Hospital Care</option>
                    <option value="Classical & Proprietary Formulations">Classical &amp; Proprietary Formulations</option>
                    <option value="Apex Autonomous Clinical Research">Apex Autonomous Clinical Research</option>
                    <option value="Authentic Traditional Therapeutics">Authentic Traditional Therapeutics</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Role */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Job Role / Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newDriveForm.role}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, role: e.target.value }))}
                    placeholder="e.g. Clinical Formulation Scientist"
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Package / CTC */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Offered CTC
                  </label>
                  <input
                    type="text"
                    value={newDriveForm.ctc}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, ctc: e.target.value }))}
                    placeholder="e.g. ₹9.5 LPA"
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Drive Date */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Drive Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newDriveForm.driveDate}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, driveDate: e.target.value }))}
                    placeholder="e.g. 26 Oct 2026"
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Pre-Screen Cutoff Score */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Pre-Screen Cutoff (%)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="60"
                      max="100"
                      value={newDriveForm.cutoffNumeric}
                      onChange={(e) => setNewDriveForm(prev => ({ ...prev, cutoffNumeric: e.target.value }))}
                      className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                    <span className="text-xs font-bold text-slate-500">% Match</span>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Drive Status
                  </label>
                  <select
                    value={newDriveForm.status}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Screening">Screening Active</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Eligible Branches Multi-Select */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Eligible Academic Branches / Disciplines
                </label>
                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_BRANCHES.map((branch) => {
                    const isSelected = newDriveForm.eligibleBranches.includes(branch);
                    return (
                      <button
                        key={branch}
                        type="button"
                        onClick={() => toggleBranchSelection(branch)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 shadow-2xs ring-1 ring-emerald-500'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-700" />}
                        <span>{branch}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Vacancies */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Vacancies / Intake Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newDriveForm.vacancies}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, vacancies: e.target.value }))}
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                {/* Mode & Venue */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Drive Mode &amp; Venue
                  </label>
                  <input
                    type="text"
                    value={newDriveForm.mode}
                    onChange={(e) => setNewDriveForm(prev => ({ ...prev, mode: e.target.value }))}
                    placeholder="e.g. On-Campus Auditorium Hall 2"
                    className="w-full p-2.5 text-xs bg-white rounded-xl border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPublishModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer active:scale-95"
                >
                  Publish On-Campus Drive
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. MODAL: DRIVE DETAILS / REGISTRATION MODAL */}
      {selectedDriveForManage && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-black text-sm border border-emerald-200 shadow-2xs">
                  {selectedDriveForManage.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-extrabold text-base text-slate-900 tracking-tight">
                      {selectedDriveForManage.company}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                      {selectedDriveForManage.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedDriveForManage.role} • <strong className="text-emerald-800">{selectedDriveForManage.ctc}</strong>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDriveForManage(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drive Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 block">Date &amp; Venue</span>
                <span className="font-bold text-slate-900 text-xs mt-0.5 block">{selectedDriveForManage.driveDate}</span>
                <span className="text-[10px] text-slate-500 truncate block">{selectedDriveForManage.mode}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 block">Cutoff Benchmark</span>
                <span className="font-mono font-bold text-teal-800 text-xs mt-0.5 block">{selectedDriveForManage.cutoffScore}</span>
                <span className="text-[10px] text-teal-600 font-semibold block">Pre-Screen Radar</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 block">Vacancies</span>
                <span className="font-bold text-slate-900 text-xs mt-0.5 block">{selectedDriveForManage.vacancies} Openings</span>
                <span className="text-[10px] text-slate-500 block">{selectedDriveForManage.registeredCount} Applied</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 block">Coordinator</span>
                <span className="font-bold text-slate-900 text-xs mt-0.5 truncate block">{selectedDriveForManage.contactPerson}</span>
                <span className="text-[10px] text-slate-500 block">TPO Directorate</span>
              </div>
            </div>

            {/* Eligibility & Details */}
            {isTPOAdmin ? (
              /* Admin Shortlist View */
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-xs text-slate-800 uppercase tracking-wide">
                    Pre-Screened Shortlist Roster (Above {selectedDriveForManage.cutoffScore})
                  </h5>
                  <button
                    type="button"
                    onClick={() => alert(`Exporting official TPO Shortlist CSV for ${selectedDriveForManage.company}...`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Export Shortlist (CSV)</span>
                  </button>
                </div>

                <div className="space-y-2 border border-slate-200 rounded-2xl p-3 bg-slate-50/50">
                  {[
                    { name: 'Aarav Sharma', id: 'NIA/AY/2026/0491', degree: 'BAMS (Final Year)', radarMatch: '96%', apaar: '9841-2041-8891' },
                    { name: 'Ananya Deshmukh', id: 'NIA/AY/2026/0312', degree: 'MD/MS Dravyaguna', radarMatch: '94%', apaar: '8812-4012-9921' },
                    { name: 'Devendra Varma', id: 'NIA/AY/2026/0189', degree: 'B.Pharm Ayush', radarMatch: '91%', apaar: '7721-9012-4412' }
                  ].map((candidate, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between gap-2 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-200">
                          {candidate.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-slate-900">{candidate.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">
                            {candidate.id} • {candidate.degree} • APAAR: {candidate.apaar}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-200 font-mono">
                          {candidate.radarMatch} Match
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Student Eligibility Verification & Confirmation */
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Academic &amp; Skill Competency Eligibility: Qualified ✓</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-emerald-900 pt-1">
                    <div className="bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                      <span className="text-slate-500 block text-[10px]">CGPA Standard</span>
                      <strong className="font-mono">8.94 / 10.0</strong> (≥ 7.50 ✓)
                    </div>
                    <div className="bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                      <span className="text-slate-500 block text-[10px]">Attendance</span>
                      <strong className="font-mono">88.5%</strong> (≥ 75% ✓)
                    </div>
                    <div className="bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                      <span className="text-slate-500 block text-[10px]">Competency Radar</span>
                      <strong className="font-mono">88%</strong> (&gt; {selectedDriveForManage.cutoffScore} ✓)
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs space-y-1.5">
                  <span className="font-bold text-slate-700 block">Eligible Disciplines:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDriveForManage.eligibleBranches.map((branch, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium text-[11px]">
                        {branch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Action Bar */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 flex-wrap gap-2">
              {isTPOAdmin ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Pre-screening notifications and test links dispatched to ${selectedDriveForManage.shortlistedCount} candidates!`);
                      setSelectedDriveForManage(null);
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Notify Shortlisted Scholars</span>
                  </button>
                </div>
              ) : (
                <div>
                  {registeredDrives[selectedDriveForManage.id] ? (
                    <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Registration Confirmed · Slot 1 Allotted</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setRegisteredDrives(prev => ({ ...prev, [selectedDriveForManage.id]: true }));
                        setToastMessage(`Successfully registered for ${selectedDriveForManage.company} recruitment drive!`);
                        setSelectedDriveForManage(null);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs flex items-center gap-2 shadow-md cursor-pointer transition-all active:scale-95"
                    >
                      <Check className="w-4 h-4" />
                      <span>Register for Campus Drive</span>
                    </button>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedDriveForManage(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TPOPlacementCommandCenter;
