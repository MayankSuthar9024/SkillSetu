import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Compass, 
  FileText, 
  TrendingUp,
  Download,
  Clock,
  ChevronRight,
  User,
  LayoutGrid,
  X,
  Video,
  History,
  Calendar,
  Percent,
  Building2,
  Check,
  Star,
  ExternalLink,
  MessageSquare,
  Landmark,
  FileCheck,
  Printer,
  QrCode,
  AlertCircle,
  Upload,
  Eye,
  FilePlus,
  Stamp
} from 'lucide-react';
import { HERO_STATS, PLATFORM_METADATA } from '../../data/portalData';
import { TPOPlacementCommandCenter } from './TPOPlacementCommandCenter';
import { useNotifications } from '../../context/NotificationContext';

// Helper to generate a realistic SHA-256 cryptographic digest
export const generateSha256Hash = (rollNumber, company) => {
  const seed = `${rollNumber}-${company}-${Date.now()}`;
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

// Initial Pre-Seeded NOC Requests for Demonstration
export const INITIAL_NOC_REQUESTS = [
  {
    id: 'NOC-2026-0849',
    referenceNo: 'NIA/AYUSH/NOC/2026/0849',
    studentId: 'AYUSH-BAMS-2022-849',
    studentName: 'Aarav Sharma',
    rollNumber: 'NIA-2022-AY-042',
    program: 'BAMS (Final Year)',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    companyName: 'Dabur R&D Centre',
    role: 'Ayurvedic Formulation Research Fellow',
    duration: '6 Months',
    startDate: '2026-10-01',
    offerLetterName: 'Dabur_Research_Fellow_Offer_Letter.pdf',
    offerLetterSize: '2.4 MB',
    cgpa: '8.94',
    attendance: '88.5%',
    backlogs: 0,
    conduct: 'Exemplary',
    appliedDate: '18 Sep 2026',
    status: 'tpo_clearance', // 'submitted' | 'tpo_clearance' | 'dean_approval' | 'issued'
    statusStep: 2, // 1: Submitted, 2: TPO Clearance, 3: Dean Approval, 4: Issued
    submittedAt: '18 Sep 2026, 10:30 AM',
    tpoApprovedAt: null,
    tpoApprovedBy: null,
    deanApprovedAt: null,
    deanApprovedBy: null,
    sha256Hash: '0x8f4d92a1c7e3b5601248debf09234ac87e1289dfb610c432ae871629813b5e02'
  },
  {
    id: 'NOC-2026-0412',
    referenceNo: 'NIA/AYUSH/NOC/2026/0412',
    studentId: 'AYUSH-BAMS-2021-118',
    studentName: 'Sunita Patel',
    rollNumber: 'NIA-2021-AY-118',
    program: 'BAMS (Final Year)',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    companyName: 'Patanjali Research Foundation',
    role: 'Phytochemical Quality Control Trainee',
    duration: '3 Months',
    startDate: '2026-09-25',
    offerLetterName: 'Patanjali_QC_Offer_Letter.pdf',
    offerLetterSize: '1.8 MB',
    cgpa: '9.12',
    attendance: '92.4%',
    backlogs: 0,
    conduct: 'Exemplary',
    appliedDate: '12 Sep 2026',
    status: 'issued',
    statusStep: 4,
    submittedAt: '12 Sep 2026, 09:15 AM',
    tpoApprovedAt: '13 Sep 2026, 02:40 PM',
    tpoApprovedBy: 'Dr. Vivek Swaroop (TPO Preceptor Cell)',
    deanApprovedAt: '14 Sep 2026, 11:20 AM',
    deanApprovedBy: 'Prof. (Dr.) Rajeshwar Pant (Dean Academic Affairs)',
    sha256Hash: '0x3c91a024ed88f01b9204cd612845a7ef629013acbd2148705912cdeba4019284'
  },
  {
    id: 'NOC-2026-0205',
    referenceNo: 'NIA/AYUSH/NOC/2026/0205',
    studentId: 'AYUSH-BAMS-2023-089',
    studentName: 'Rohan Deshmukh',
    rollNumber: 'NIA-2023-AY-089',
    program: 'BAMS (3rd Professional)',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    companyName: 'Kottakkal Arya Vaidya Sala',
    role: 'Panchakarma Clinical Trainee',
    duration: '6 Months',
    startDate: '2026-10-15',
    offerLetterName: 'Kottakkal_Clinical_Internship_Offer.pdf',
    offerLetterSize: '3.1 MB',
    cgpa: '8.45',
    attendance: '82.0%',
    backlogs: 0,
    conduct: 'Satisfactory',
    appliedDate: '16 Sep 2026',
    status: 'tpo_clearance',
    statusStep: 2,
    submittedAt: '16 Sep 2026, 04:20 PM',
    tpoApprovedAt: null,
    tpoApprovedBy: null,
    deanApprovedAt: null,
    deanApprovedBy: null,
    sha256Hash: '0x9a81c03e48b71d9f24e03b87a912c6f501489e217d84b0621498e72c54091a2e'
  }
];

export const getStoredNocRequests = () => {
  try {
    const raw = localStorage.getItem('skillsetu_noc_requests');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error('Error loading NOC requests from localStorage', e);
  }
  try {
    localStorage.setItem('skillsetu_noc_requests', JSON.stringify(INITIAL_NOC_REQUESTS));
  } catch {}
  return INITIAL_NOC_REQUESTS;
};

export const saveStoredNocRequests = (requests) => {
  try {
    localStorage.setItem('skillsetu_noc_requests', JSON.stringify(requests));
    window.dispatchEvent(new CustomEvent('skillsetu_noc_updated', { detail: requests }));
  } catch (e) {
    console.error('Error saving NOC requests to localStorage', e);
  }
};

// Printable & Downloadable Digital NOC Certificate Modal
export const DigitalNocModal = ({ isOpen, onClose, noc }) => {
  if (!isOpen || !noc) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #digital-noc-print-area, #digital-noc-print-area * {
            visibility: visible !important;
          }
          #digital-noc-print-area {
            position: fixed !important;
            left: 0 !important;
            top: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 24px !important;
            box-sizing: border-box !important;
            background: white !important;
            color: #0f172a !important;
            z-index: 9999999 !important;
            display: block !important;
            overflow: visible !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Action Bar (Hidden during Print) */}
        <div className="no-print bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <FileCheck className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold tracking-tight">Institutional Digital No Objection Certificate</h3>
              <p className="text-[11px] text-slate-400">Ref: {noc.referenceNo || 'NIA/AYUSH/NOC/2026/0849'} · DigiLocker Compliant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Container with Official College Letterhead */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-100/70 flex-1">
          <div
            id="digital-noc-print-area"
            className="bg-white border-4 border-double border-emerald-900/40 rounded-2xl p-6 sm:p-10 shadow-lg text-slate-900 relative space-y-6 mx-auto max-w-3xl"
          >
            {/* Watermark Emblem in Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center overflow-hidden">
              <Landmark className="w-[500px] h-[500px] text-emerald-950" />
            </div>

            {/* 1. COLLEGE LETTERHEAD */}
            <div className="border-b-2 border-emerald-900/30 pb-5 space-y-3">
              <div className="flex items-center justify-between gap-4">
                {/* Ministry / National Insignia */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center rounded-2xl bg-amber-50/80 border border-amber-200/80 p-1.5 shadow-2xs">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-900">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#065f46" strokeWidth="3" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3 2" />
                    <path d="M50 16 L54 28 L66 28 L56 36 L60 48 L50 40 L40 48 L44 36 L34 28 L46 28 Z" fill="#065f46" />
                    <circle cx="50" cy="62" r="14" fill="#fef3c7" stroke="#065f46" strokeWidth="2" />
                    <path d="M42 62 Q50 52 58 62" fill="none" stroke="#065f46" strokeWidth="2" />
                    <text x="50" y="85" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#065f46">GOVT OF INDIA</text>
                  </svg>
                </div>

                {/* Central Letterhead Text */}
                <div className="text-center flex-1 min-w-0">
                  <p className="text-[11px] sm:text-xs font-bold text-amber-900 tracking-wider uppercase">
                    राष्ट्रीय आयुर्वेद संस्थान (मानद विश्वविद्यालय)
                  </p>
                  <h1 className="text-lg sm:text-2xl font-black tracking-tight text-emerald-950 font-serif uppercase">
                    National Institute of Ayurveda
                  </h1>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-700">
                    (Deemed to be University under De-novo Category by Ministry of Ayush, Government of India)
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium">
                    Madhav Vilas Palace, Amer Road, Jaipur - 302002 (Rajasthan) · Phone: +91-141-2635816 · Web: www.nia.nic.in
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1.5 flex-wrap text-[10px] font-bold text-emerald-800">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">NAAC Grade A++</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">NABH Accredited Hospital</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">NCISM Recognized</span>
                  </div>
                </div>

                {/* NIA University Logo Emblem */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-1.5 shadow-2xs">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex flex-col items-center justify-center p-1 text-center shadow-inner">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span className="text-[9px] font-black tracking-tighter uppercase">NIA</span>
                    <span className="text-[7px] font-bold opacity-80">JAIPUR</span>
                  </div>
                </div>
              </div>

              {/* Reference & Date Statutory Bar */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-600 gap-1 font-mono">
                <div>
                  <span className="text-slate-400 font-sans font-bold">Ref No: </span>
                  <strong className="text-slate-900 font-bold">{noc.referenceNo || `NIA/AYUSH/NOC/2026/${noc.id.split('-')[2] || '0849'}`}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-sans font-bold">Date of Issuance: </span>
                  <strong className="text-slate-900">{noc.deanApprovedAt ? noc.deanApprovedAt.split(',')[0] : (noc.appliedDate || '19 Sep 2026')}</strong>
                </div>
              </div>
            </div>

            {/* CERTIFICATE TITLE */}
            <div className="text-center space-y-1">
              <div className="inline-block px-4 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-black uppercase tracking-widest shadow-2xs">
                Statutory Regulatory Clearance
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif uppercase pt-1">
                No Objection Certificate (NOC)
              </h2>
              <p className="text-xs text-slate-500 font-semibold tracking-wide">
                For Compulsory Industrial / Clinical Internship Training (NCISM & Schedule T GMP)
              </p>
            </div>

            {/* 2. CERTIFICATE BODY & STUDENT DETAILS */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
              <p>
                This is to officially certify that <strong className="text-slate-950 font-black underline decoration-emerald-500 decoration-2">{noc.studentName}</strong>, bearing Institutional Roll Number <strong className="font-mono font-bold text-slate-900">{noc.rollNumber}</strong>, Registration ID <strong className="font-mono font-bold text-slate-900">{noc.studentId || 'AYUSH-BAMS-2022-849'}</strong>, is a bona fide regular student of the <strong className="font-bold text-slate-900">{noc.institution || 'National Institute of Ayurveda (NIA), Jaipur'}</strong>, currently enrolled in the <strong className="font-bold text-slate-900">{noc.program || 'BAMS (Final Year)'}</strong> program.
              </p>

              {/* Verified Institutional Audit Highlights */}
              <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/90 space-y-2">
                <div className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Institutional Standing & Academic Clearance Audit</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="bg-white rounded-xl p-2.5 border border-emerald-200/60 shadow-2xs">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Cumulative CGPA</span>
                    <span className="text-sm font-black text-emerald-900 font-mono">{noc.cgpa || '8.94'} / 10.00</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">✓ Cleared (&ge; 7.50 Cutoff)</span>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-emerald-200/60 shadow-2xs">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Institutional Attendance</span>
                    <span className="text-sm font-black text-emerald-900 font-mono">{noc.attendance || '88.5%'}</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">✓ Cleared (&ge; 75.0% Criteria)</span>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-emerald-200/60 shadow-2xs">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Disciplinary & Backlogs</span>
                    <span className="text-sm font-black text-emerald-900">0 Backlogs</span>
                    <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">✓ Conduct Exemplary</span>
                  </div>
                </div>
              </div>

              <p>
                The College Academic Authority and the Training &amp; Placement Office (TPO) have reviewed the student&apos;s credentials and have <strong>NO OBJECTION</strong> to the student undertaking an industry internship program with the approved organization as detailed hereunder:
              </p>

              {/* Host Organization & Role Details Card */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Host Organization / Company</span>
                  <span className="text-sm font-black text-slate-900">{noc.companyName}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Approved Internship Role</span>
                  <span className="text-sm font-black text-slate-900">{noc.role}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Permitted Tenure / Duration</span>
                  <span className="font-bold text-slate-800">{noc.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Permitted Commencement Date</span>
                  <span className="font-bold text-slate-800">{noc.startDate}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 italic">
                During this training period, the candidate shall abide by Schedule T Good Manufacturing Practices (GMP) protocols, laboratory biosafety standards, and the host institution&apos;s regulations. Credits earned will be credited to the student&apos;s Academic Bank of Credits (ABC Bank) account under NEP-2020 guidelines.
              </p>
            </div>

            {/* 3. SECURITY STAMP, QR CODE VERIFICATION & DEAN'S DIGITAL SIGNATURE SEAL */}
            <div className="pt-4 border-t-2 border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              {/* QR Code Verification Stamp */}
              <div className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-200">
                <div className="w-18 h-18 shrink-0 bg-white p-1 rounded-xl border border-slate-300 shadow-2xs">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Corner Finders */}
                    <rect x="6" y="6" width="26" height="26" rx="4" fill="none" stroke="#0f172a" strokeWidth="4" />
                    <rect x="13" y="13" width="12" height="12" rx="2" fill="#065f46" />
                    <rect x="68" y="6" width="26" height="26" rx="4" fill="none" stroke="#0f172a" strokeWidth="4" />
                    <rect x="75" y="13" width="12" height="12" rx="2" fill="#065f46" />
                    <rect x="6" y="68" width="26" height="26" rx="4" fill="none" stroke="#0f172a" strokeWidth="4" />
                    <rect x="13" y="75" width="12" height="12" rx="2" fill="#065f46" />
                    {/* Data Matrix Dots */}
                    <circle cx="40" cy="12" r="3" fill="#0f172a" />
                    <circle cx="54" cy="12" r="3" fill="#0f172a" />
                    <circle cx="46" cy="22" r="3" fill="#0f172a" />
                    <circle cx="60" cy="28" r="3" fill="#0f172a" />
                    <circle cx="12" cy="46" r="3" fill="#0f172a" />
                    <circle cx="24" cy="40" r="3" fill="#0f172a" />
                    <circle cx="36" cy="48" r="3" fill="#0f172a" />
                    <circle cx="50" cy="50" r="4" fill="#065f46" />
                    <circle cx="64" cy="44" r="3" fill="#0f172a" />
                    <circle cx="78" cy="48" r="3" fill="#0f172a" />
                    <circle cx="90" cy="40" r="3" fill="#0f172a" />
                    <circle cx="42" cy="66" r="3" fill="#0f172a" />
                    <circle cx="56" cy="62" r="3" fill="#0f172a" />
                    <circle cx="70" cy="74" r="3" fill="#0f172a" />
                    <circle cx="84" cy="68" r="3" fill="#0f172a" />
                    <circle cx="48" cy="84" r="3" fill="#0f172a" />
                    <circle cx="62" cy="88" r="3" fill="#0f172a" />
                    <circle cx="80" cy="86" r="3" fill="#0f172a" />
                  </svg>
                </div>
                <div className="text-[10px] text-slate-600 leading-tight min-w-0">
                  <strong className="block font-bold text-slate-900 text-[11px] mb-0.5">QR Verification Stamp</strong>
                  <p className="text-slate-500">Scan to verify on the National Ayush Blockchain Node.</p>
                  <p className="font-mono text-[9px] text-emerald-800 font-bold truncate mt-1">
                    SHA256: {noc.sha256Hash ? noc.sha256Hash.substring(0, 16) + '...' : '0x8f4d92a1c7...'}
                  </p>
                </div>
              </div>

              {/* Official Institutional Circular Seal */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-800/80 p-1 flex items-center justify-center bg-emerald-50/50 shadow-inner">
                  <div className="w-full h-full rounded-full border border-emerald-900 flex flex-col items-center justify-center text-[7px] font-black text-emerald-900 uppercase leading-tight tracking-tighter p-1">
                    <span className="text-[6px] text-amber-700">★ ★ ★</span>
                    <span>NIA JAIPUR</span>
                    <span className="text-[8px] font-extrabold text-emerald-950 my-0.5">DEAN CELL</span>
                    <span className="text-[6px] text-slate-600">SEALED &amp; SIGNED</span>
                    <span className="text-[6px] text-amber-700">★ ★ ★</span>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-emerald-900 uppercase tracking-wider mt-1 block">
                  Official Institutional Seal
                </span>
              </div>

              {/* Dean's Digital Signature Seal */}
              <div className="text-right space-y-1">
                <div className="inline-block border-b border-slate-300 pb-1 pr-2">
                  {/* Digital Signature Cursive Graphic */}
                  <svg viewBox="0 0 180 50" className="w-36 h-10 ml-auto">
                    <path
                      d="M 10 38 Q 28 8 48 32 T 78 18 T 102 36 T 128 14 T 152 30 T 172 20"
                      fill="none"
                      stroke="#1e3a8a"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 22 42 Q 80 44 158 38"
                      fill="none"
                      stroke="#1e3a8a"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="text-xs">
                  <strong className="block font-black text-slate-900 text-[11px] leading-tight">
                    Prof. (Dr.) Rajeshwar Pant, MD (Ayu), Ph.D.
                  </strong>
                  <span className="text-[10px] text-slate-600 block">Dean (Academic &amp; Clinical Affairs)</span>
                  <span className="text-[10px] text-slate-500 block">National Institute of Ayurveda, Jaipur</span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-blue-800 mt-1 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    <ShieldCheck className="w-3 h-3 text-blue-600" />
                    e-Sign Token: NIA-DEAN-PKI-2026
                  </span>
                </div>
              </div>
            </div>

            {/* Legal / Statutory Footer */}
            <div className="pt-2 text-center text-[9px] text-slate-400 font-mono border-t border-slate-100">
              Cryptographically stamped document valid under Sec. 5 of Information Technology Act 2000 · DigiLocker URI: in.gov.digilocker/nia/noc-{noc.id}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="no-print bg-white px-6 py-4 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Digital Certificate is tamper-evident with SHA-256 validation</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const hashVal = noc.sha256Hash || noc.referenceNo || noc.id;
                window.dispatchEvent(new CustomEvent('open_credential_verifier', { detail: { query: hashVal } }));
              }}
              className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Verify cryptographic integrity of this NOC"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Verify Integrity</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print Certificate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StudentPortalView = ({ user, onNavigateToSkills }) => {
  const defaultUser = {
    name: 'Aarav Sharma',
    avatar: 'AS',
    degree: 'BAMS Final Year',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    id: 'AYUSH-BAMS-2022-849',
    apaarId: '9841-2041-8891',
    abcCredits: '164 Credits',
    abcId: '164 Credits'
  };
  const safeUser = (user && user.name) ? user : (HERO_STATS?.profileUser || defaultUser);
  const { dispatchNotification } = useNotifications();
  const [activeTab, setActiveTab] = useState('tpo');
  const [selectedAssessmentOption, setSelectedAssessmentOption] = useState(null);
  const [hasAwardedBonus, setHasAwardedBonus] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(88);
  const [appliedJobs, setAppliedJobs] = useState({});
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  // Digital NOC State Management
  const [nocRequests, setNocRequests] = useState(() => getStoredNocRequests());
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedNocCertificate, setSelectedNocCertificate] = useState(null);

  // NOC Application Form State
  const [formCompany, setFormCompany] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formDuration, setFormDuration] = useState('6 Months');
  const [formStartDate, setFormStartDate] = useState('2026-10-01');
  const [formOfferLetter, setFormOfferLetter] = useState(null);
  const [formAgreed, setFormAgreed] = useState(false);
  const [formError, setFormError] = useState('');
  const [nocToast, setNocToast] = useState(null);

  // Auto-dismiss NOC Toast
  useEffect(() => {
    if (nocToast) {
      const timer = setTimeout(() => setNocToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [nocToast]);

  // Synchronize NOC requests across Student and College Portal views
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

  // Handle NOC Application Submission
  const handleApplyNocSubmit = (e) => {
    e.preventDefault();
    if (!formCompany.trim()) {
      setFormError('Please enter the prospective company / organization name.');
      return;
    }
    if (!formRole.trim()) {
      setFormError('Please specify the internship role or designation.');
      return;
    }
    if (!formOfferLetter) {
      setFormError('Please attach your official Offer Letter (PDF / DOC).');
      return;
    }
    if (!formAgreed) {
      setFormError('Please confirm the declaration before submitting.');
      return;
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const newRequest = {
      id: `NOC-2026-${randomDigits}`,
      referenceNo: `NIA/AYUSH/NOC/2026/${randomDigits}`,
      studentId: safeUser.id || 'AYUSH-BAMS-2022-849',
      studentName: safeUser.name || 'Aarav Sharma',
      rollNumber: 'NIA-2022-AY-042',
      program: safeUser.degree || 'BAMS (Final Year)',
      institution: safeUser.institution || 'National Institute of Ayurveda (NIA), Jaipur',
      companyName: formCompany.trim(),
      role: formRole.trim(),
      duration: formDuration,
      startDate: formStartDate,
      offerLetterName: formOfferLetter.name || 'Offer_Letter.pdf',
      offerLetterSize: formOfferLetter.size || '1.8 MB',
      cgpa: '8.94',
      attendance: '88.5%',
      backlogs: 0,
      conduct: 'Exemplary',
      appliedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'tpo_clearance',
      statusStep: 2, // Step 1 (Submitted) done, Step 2 (TPO Clearance) in progress
      submittedAt: timestamp,
      tpoApprovedAt: null,
      tpoApprovedBy: null,
      deanApprovedAt: null,
      deanApprovedBy: null,
      sha256Hash: generateSha256Hash('NIA-2022-AY-042', formCompany.trim())
    };

    const updated = [newRequest, ...nocRequests];
    setNocRequests(updated);
    saveStoredNocRequests(updated);

    // Reset Form
    setFormCompany('');
    setFormRole('');
    setFormDuration('6 Months');
    setFormStartDate('2026-10-01');
    setFormOfferLetter(null);
    setFormAgreed(false);
    setFormError('');
    setIsApplyModalOpen(false);

    setNocToast({
      type: 'success',
      title: 'NOC Application Submitted',
      message: `Your NOC clearance request for ${newRequest.companyName} has been routed to the TPO Command Center.`
    });

    // Cross-Stakeholder Notification: Student -> College TPO (Workflow 3)
    dispatchNotification({
      targetRole: 'college',
      targetRecipientId: 'AISHE-C-24901',
      targetRecipientName: safeUser.institution || 'National Institute of Ayurveda (NIA), Jaipur',
      senderId: safeUser.id || 'NIA/AY/2026/0491',
      senderName: safeUser.name || 'Aarav Sharma',
      senderRole: 'student',
      title: `${safeUser.name || 'Aarav Sharma'} requested an NOC`,
      message: `${safeUser.name || 'Aarav Sharma'} submitted an NOC clearance request for ${newRequest.role} at ${newRequest.companyName} (Ref: ${newRequest.referenceNo}).`,
      link: '#dashboard-college'
    });
  };

  const competencyPillars = [
    { name: 'Schedule T GMP Compliance', score: 94, level: 'Expert Mastery', color: 'bg-emerald-500' },
    { name: 'Phytochemical Standardization (HPTLC)', score: 88, level: 'Advanced', color: 'bg-teal-500' },
    { name: 'Classical Ayurvedic Formulations', score: 92, level: 'Expert Mastery', color: 'bg-emerald-600' },
    { name: 'Clinical Dravyaguna & Diagnostics', score: 82, level: 'Proficient', color: 'bg-amber-500' },
    { name: 'Pharmacovigilance & Adverse Event Reporting', score: 85, level: 'Advanced', color: 'bg-blue-500' },
    { name: 'Ayush Regulatory & IP Filing', score: 79, level: 'Bridging Gap', color: 'bg-purple-500' },
  ];

  const jobsList = [
    {
      id: 'job-1',
      title: 'Ayurvedic Formulation Research Fellow',
      company: 'Dabur R&D Centre',
      location: 'Delhi NCR (Hybrid)',
      stipend: '₹22,000 / month',
      match: 96,
      skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Dravyaguna'],
      deadline: 'In 4 Days'
    },
    {
      id: 'job-2',
      title: 'Phytopharmacy Quality Control Analyst',
      company: 'Patanjali Research Foundation',
      location: 'Haridwar (On-Site)',
      stipend: '₹25,000 / month',
      match: 92,
      skills: ['API Moisture Standards', 'Heavy Metal Assay', 'Batch QC'],
      deadline: 'In 6 Days'
    },
    {
      id: 'job-3',
      title: 'Panchakarma Clinical Trainee',
      company: 'Kottakkal Arya Vaidya Sala',
      location: 'Kottakkal, Kerala',
      stipend: '₹20,000 / month',
      match: 89,
      skills: ['Panchakarma Therapy', 'Pulse Diagnosis', 'Patient Records'],
      deadline: 'In 10 Days'
    }
  ];

  const bridgeModules = [
    {
      id: 'bm-1',
      title: 'Schedule T GMP Cleanroom Protocol',
      duration: '15 Mins',
      sponsor: 'Dabur R&D & AIIA Preceptors',
      status: 'Ready to Solve',
      badge: 'Schedule T Certified'
    },
    {
      id: 'bm-2',
      title: 'HPTLC Rf Value Quantification & Marker Assay',
      duration: '15 Mins',
      sponsor: 'Patanjali Central Instrumentation Lab',
      status: 'In Progress (60%)',
      badge: 'QC Analyst'
    },
    {
      id: 'bm-3',
      title: 'Good Clinical Practices (GCP) & Protocol Case Review',
      duration: '15 Mins',
      sponsor: 'CCRAS SPARK-4.0 Research Cell',
      status: 'Enrolled',
      badge: 'Clinical Associate'
    }
  ];

  // National SWAYAM / NPTEL Learning Bridges for Remediation & Skill Deficits
  const nationalMOOCBridges = [
    {
      id: 'swayam-1',
      title: 'NPTEL: Analytical Chemistry in Herbal Formulations - IIT Madras',
      provider: 'IIT Madras',
      targetDeficit: 'Phytochemical Standardization (HPTLC)',
      duration: '12 Weeks',
      credits: '3 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'NPTEL Certified',
      url: 'https://swayam.gov.in/explorer?searchText=analytical+chemistry',
      enrolledCount: '1,420 Scholars'
    },
    {
      id: 'swayam-2',
      title: 'SWAYAM: Clinical Trials Management - AIIMS',
      provider: 'AIIMS New Delhi',
      targetDeficit: 'Clinical Dravyaguna & Diagnostics',
      duration: '8 Weeks',
      credits: '2 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'SWAYAM Certified',
      url: 'https://swayam.gov.in/explorer?searchText=clinical+trials',
      enrolledCount: '1,890 Scholars'
    },
    {
      id: 'swayam-3',
      title: 'NPTEL: Schedule T Pharmaceutical Engineering & Quality Control - IIT Kharagpur',
      provider: 'IIT Kharagpur',
      targetDeficit: 'Ayush Regulatory & IP Filing',
      duration: '12 Weeks',
      credits: '3 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'NPTEL Certified',
      url: 'https://swayam.gov.in/explorer?searchText=pharmaceutical+engineering',
      enrolledCount: '1,150 Scholars'
    },
    {
      id: 'swayam-4',
      title: 'SWAYAM: Biostatistics & Epidemiological Research for Ayush - PGIMER',
      provider: 'PGIMER Chandigarh',
      targetDeficit: 'Evidence-Based Biostatistics & GCP',
      duration: '8 Weeks',
      credits: '2 Credits (Transferable via ABC Bank)',
      badge: 'Free MOOC • Credit Transferable',
      tag: 'SWAYAM Certified',
      url: 'https://swayam.gov.in/explorer?searchText=biostatistics',
      enrolledCount: '940 Scholars'
    }
  ];

  // Past Interview Logs & Assessments Record
  const pastInterviewsRecord = [
    {
      id: 'int-1',
      role: 'Ayurvedic Formulation Research Fellow',
      company: 'Dabur R&D Centre, Ghaziabad',
      interviewer: 'Dr. Vivek Swaroop (VP Phytopharmacy R&D)',
      date: '28 Aug 2026',
      mode: 'Technical & Case Study Round (Video)',
      status: 'Selected & Offer Issued',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      technicalScore: '94 / 100',
      candidateSpoke: 'Explained standardizing Withanolide marker extraction in Ashwagandha batches using HPTLC, ensuring Schedule T cleanroom protocols and batch QC compliance.',
      outcomeNotes: 'Candidate demonstrated exceptional practical knowledge of Ayurvedic pharmacopoeia and laboratory assay standardization. Cleared all 4 rounds.',
      feedbackTags: ['Strong Dravyaguna Knowledge', 'Laboratory QC Ready', 'Articulate Communication'],
      recordingDuration: '42 mins',
      questionsAsked: [
        'How do you determine Rf value discrepancies in HPTLC finger-printing?',
        'Describe Schedule T airflow pressure differences between cleanrooms.'
      ]
    },
    {
      id: 'int-2',
      role: 'Junior Clinical Research Associate',
      company: 'All India Institute of Ayurveda (AIIA)',
      interviewer: 'Prof. S. N. Tripathi (Dean Clinical Research)',
      date: '14 July 2026',
      mode: 'Clinical Case Evaluation (Hybrid)',
      status: 'Shortlisted (Final Merit)',
      statusColor: 'bg-blue-100 text-blue-800 border-blue-300',
      technicalScore: '89 / 100',
      candidateSpoke: 'Presented protocol for randomized clinical evaluation of Punarnavadi Kwath in diabetic nephropathy fluid management with biometric logging.',
      outcomeNotes: 'Well-structured scientific methodology. Recommended for SPARK-4.0 Clinical Trials Preceptor fellowship.',
      feedbackTags: ['GCP Compliance', 'Patient Ethics', 'Biostatistics'],
      recordingDuration: '35 mins',
      questionsAsked: [
        'Explain ethical clearance documentation steps for human botanical trials.',
        'How is adverse event causality assessed under Ayush Pharmacovigilance?'
      ]
    },
    {
      id: 'int-3',
      role: 'Phytochemical QC Analyst',
      company: 'Patanjali Research Foundation',
      interviewer: 'Dr. Ananya Sen (Head QC Analytical Labs)',
      date: '02 June 2026',
      mode: 'Practical Lab Skills Round',
      status: 'Cleared & Empanelled',
      statusColor: 'bg-teal-100 text-teal-800 border-teal-300',
      technicalScore: '91 / 100',
      candidateSpoke: 'Walked through AAS (Atomic Absorption Spectroscopy) procedures for detecting heavy metal ppm thresholds in raw herbal batches.',
      outcomeNotes: 'Solid hands-on laboratory aptitude. Successfully diagnosed simulated test batch contamination.',
      feedbackTags: ['Heavy Metal Assay', 'Batch Audit', 'Instrumentation'],
      recordingDuration: '28 mins',
      questionsAsked: [
        'What are the permissible lead (Pb) and arsenic (As) limits in classical bhasmas?'
      ]
    }
  ];

  // Academic Qualifications: 10th, 12th & Degree Transcripts
  const academicRecords = {
    class10: {
      exam: 'Secondary School Examination (Class X)',
      board: 'Central Board of Secondary Education (CBSE)',
      school: 'Kendriya Vidyalaya No. 1, Bajaj Nagar, Jaipur',
      passingYear: '2019',
      rollNo: 'CBSE-10-8192410',
      cgpaScore: '94.6% (10.0 CGPA)',
      division: '1st Division with Distinction',
      certificateHash: '0xCB10_99A82D1E4B37',
      subjects: [
        { name: 'Science (Physics, Chemistry, Biology)', marks: '97 / 100', grade: 'A1' },
        { name: 'Mathematics', marks: '93 / 100', grade: 'A1' },
        { name: 'English Language & Literature', marks: '95 / 100', grade: 'A1' },
        { name: 'Hindi Course-A', marks: '96 / 100', grade: 'A1' },
        { name: 'Social Science', marks: '92 / 100', grade: 'A1' }
      ]
    },
    class12: {
      exam: 'Senior School Certificate Examination (Class XII - Science PCB)',
      board: 'Central Board of Secondary Education (CBSE)',
      school: 'Kendriya Vidyalaya No. 1, Bajaj Nagar, Jaipur',
      passingYear: '2021',
      rollNo: 'CBSE-12-9021488',
      cgpaScore: '93.8% Aggregate',
      division: '1st Division with Distinction',
      certificateHash: '0xCB12_77E13F90C512',
      neetScore: 'NEET-UG: 594 Marks (All India Ayush Rank: 1,420)',
      subjects: [
        { name: 'Biology / Biotechnology', marks: '96 / 100', grade: 'A1' },
        { name: 'Chemistry (Organic & Analytical)', marks: '94 / 100', grade: 'A1' },
        { name: 'Physics', marks: '90 / 100', grade: 'A1' },
        { name: 'English Core', marks: '95 / 100', grade: 'A1' },
        { name: 'Physical Education & Yoga', marks: '94 / 100', grade: 'A1' }
      ]
    },
    bams: {
      exam: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS - Final Year)',
      university: 'National Institute of Ayurveda (NIA Deemed to be University), Jaipur',
      regNo: 'NIA/AY/2026/0491',
      passingYear: '2021 - 2026 (Final Year)',
      cgpaScore: '8.94 / 10.0 CGPA (Top 2% Honors)',
      division: 'Distinction in Dravyaguna & Shalya',
      certificateHash: '0xBAMS_4E819C20AF66',
      subjects: [
        { name: 'Dravyaguna Vijnana (Pharmacology & Materia Medica)', marks: '91 / 100', grade: 'Honors' },
        { name: 'Rasa Shastra & Bhaishajya Kalpana (Pharmaceuticals)', marks: '89 / 100', grade: 'Distinction' },
        { name: 'Roga Nidana & Vikriti Vijnana (Diagnostics)', marks: '88 / 100', grade: 'Distinction' },
        { name: 'Kayachikitsa (Internal Medicine)', marks: '90 / 100', grade: 'Honors' },
        { name: 'Panchakarma Procedures & Therapy', marks: '86 / 100', grade: 'Distinction' }
      ]
    }
  };

  const [selectedAcademicTab, setSelectedAcademicTab] = useState('bams');
  const [selectedInterview, setSelectedInterview] = useState(null);

  const handleApply = (jobId) => {
    setAppliedJobs(prev => ({
      ...prev,
      [jobId]: true
    }));

    const appliedJob = jobsList.find(j => j.id === jobId);
    if (appliedJob) {
      dispatchNotification({
        targetRole: 'company',
        targetRecipientId: appliedJob.company.toLowerCase().includes('dabur') ? 'EMP-DABUR-QC-89' : null,
        targetRecipientName: appliedJob.company,
        senderId: safeUser.id || 'NIA/AY/2026/0491',
        senderName: safeUser.name || 'Aarav Sharma',
        senderRole: 'student',
        title: `New applicant for ${appliedJob.title}`,
        message: `${safeUser.name || 'Aarav Sharma'} applied for ${appliedJob.title} at ${appliedJob.company}. Match: ${appliedJob.match}%.`,
        link: '#dashboard-company'
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Student Profile & Verification Banner */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6 min-w-0 max-w-full">
        <div className="flex items-center gap-4 min-w-0 max-w-full">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-xl sm:text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40 shrink-0 overflow-hidden">
            {safeUser.avatarImage ? (
              <img src={safeUser.avatarImage} alt={safeUser.name} className="w-full h-full object-cover" />
            ) : (
              safeUser.avatar || 'AS'
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 truncate">{safeUser.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                100% SHA-256 Verifiable Ayush Portfolio
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/90 flex items-center gap-1 shrink-0 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>APAAR: {safeUser.apaarId || '9841-2041-8891'} • ABC Bank: {safeUser.abcCredits || '164 Credits'} (DigiLocker Verified)</span>
              </span>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open_credential_verifier'))}
                className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95 shrink-0"
                title="Verify cryptographic integrity of student credentials"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>Verify Credential Integrity</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-1 break-words">
              {safeUser.degree} · {safeUser.institution} · Roll: <span className="font-mono font-semibold text-slate-700">{safeUser.id}</span>
            </p>
          </div>
        </div>

        {/* Dynamic Metric Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider block">Industry Readiness</span>
            <span className="text-xl font-extrabold text-emerald-900">{assessmentScore}%</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider block">Verified Credentials</span>
            <span className="text-xl font-extrabold text-amber-900">6 Badges</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider block">Live Matches</span>
            <span className="text-xl font-extrabold text-blue-900">3 Matched Roles</span>
          </div>
        </div>
      </div>

      {/* Portal Navigation Tabs: TPO Placement Command Center & Internship NOC Requests */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar py-1">
        <button
          onClick={() => setActiveTab('tpo')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'tpo'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Landmark className="w-4 h-4 text-emerald-600" />
          <span>TPO Placement Command Center</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-950 border border-emerald-200">
            6 Drives
          </span>
        </button>

        <button
          onClick={() => setActiveTab('noc')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeTab === 'noc'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <FileCheck className="w-4 h-4 text-emerald-600" />
          <span>Internship NOC Requests</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-950 border border-emerald-200">
            {nocRequests.length}
          </span>
        </button>
      </div>



      {/* TAB 5: TPO Placement Command Center */}
      {activeTab === 'tpo' && (
        <TPOPlacementCommandCenter user={safeUser} isTPOAdmin={false} />
      )}

      {/* TAB 6: Internship NOC Requests */}
      {activeTab === 'noc' && (
        <div className="space-y-6">
          {/* Clean Header & Eligibility Bar */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200 shadow-2xs">
                    <FileCheck className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Internship NOC Requests
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Apply for institutional NOC clearance, track verification status, and download verified certificates.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setFormError('');
                  setIsApplyModalOpen(true);
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0 active:scale-95"
              >
                <FilePlus className="w-4 h-4 text-emerald-300" />
                <span>+ Apply for Internship NOC</span>
              </button>
            </div>

            {/* Compact Eligibility Badges */}
            <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  CGPA: <strong className="font-mono">8.94 / 10.0</strong> (Passed Cutoff)
                </span>
                <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  Attendance: <strong className="font-mono">88.5%</strong> (≥ 75% Mandatory)
                </span>
                <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  Backlogs: <strong className="font-mono">0 Nil</strong>
                </span>
              </div>

              <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-bold text-[10px] uppercase tracking-wide">
                NCISM Compliant
              </span>
            </div>
          </div>

          {/* NOC Requests List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <span>My NOC Applications</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                  {nocRequests.length}
                </span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                Tracking Multi-Tier Verification (TPO &rarr; Dean &rarr; Issuance)
              </span>
            </div>

            {nocRequests.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 border border-slate-200/80 text-center space-y-3">
                <FileCheck className="w-12 h-12 text-slate-300 mx-auto" />
                <p className="text-sm font-bold text-slate-700">No Internship NOC applications filed yet.</p>
                <p className="text-xs text-slate-400">Click the button above to apply for an Institutional No Objection Certificate.</p>
              </div>
            ) : (
              nocRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-soft space-y-4 transition-all hover:border-slate-300"
                >
                  {/* Card Top Row: Company & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm border border-emerald-200 shrink-0 shadow-2xs">
                        <Building2 className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base font-extrabold text-slate-900">{req.companyName}</h4>
                          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80">
                            {req.referenceNo || req.id}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {req.role} · Applied on <span className="font-semibold text-slate-700">{req.appliedDate}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                          req.status === 'issued'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : req.status === 'dean_approval'
                            ? 'bg-purple-100 text-purple-800 border border-purple-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {req.status === 'issued' ? (
                          <>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Issued &amp; Stamped</span>
                          </>
                        ) : req.status === 'dean_approval' ? (
                          <>
                            <Clock className="w-3.5 h-3.5 text-purple-700" />
                            <span>Dean Review Pending</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3.5 h-3.5 text-amber-700" />
                            <span>TPO Clearance Pending</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Clean Details Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/70 rounded-xl p-3 text-xs border border-slate-200/60">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Designated Role</span>
                      <strong className="text-slate-800 font-bold truncate block">{req.role}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                      <strong className="text-slate-800 font-bold block">{req.duration}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Starts On</span>
                      <strong className="text-slate-800 font-bold block">{req.startDate}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Offer Letter</span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold truncate mt-0.5">
                        <FileText className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{req.offerLetterName || 'Offer_Letter.pdf'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Clean Modern 4-Step Stepper */}
                  <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200/60 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-700" />
                        Clearance Progress
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800">
                        {req.status === 'issued'
                          ? 'Stage 4 of 4: Completed'
                          : req.status === 'dean_approval'
                          ? 'Stage 3 of 4: Dean Endorsement'
                          : 'Stage 2 of 4: TPO Audit'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {/* Step 1: Submitted */}
                      <div className="bg-white p-2.5 rounded-lg border border-emerald-200 flex items-center gap-2 shadow-2xs">
                        <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-slate-900 block leading-tight text-[11px]">1. Submitted</span>
                          <span className="text-[10px] text-emerald-700 block">Application Filed</span>
                        </div>
                      </div>

                      {/* Step 2: TPO Clearance */}
                      <div className={`p-2.5 rounded-lg border flex items-center gap-2 shadow-2xs ${
                        req.statusStep >= 2
                          ? (req.statusStep > 2 || req.status === 'issued'
                            ? 'bg-white border-emerald-200'
                            : 'bg-amber-50/50 border-amber-300 ring-1 ring-amber-300')
                          : 'bg-white border-slate-200 opacity-60'
                      }`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          req.statusStep > 2 || req.status === 'issued'
                            ? 'bg-emerald-700 text-white'
                            : req.statusStep === 2
                            ? 'bg-amber-500 text-white animate-pulse'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {req.statusStep > 2 || req.status === 'issued' ? <Check className="w-3 h-3" /> : '2'}
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-slate-900 block leading-tight text-[11px]">2. TPO Review</span>
                          <span className="text-[10px] text-slate-500 block truncate">
                            {req.statusStep > 2 || req.status === 'issued' ? 'Audited & Cleared' : 'Under Review'}
                          </span>
                        </div>
                      </div>

                      {/* Step 3: Dean Approval */}
                      <div className={`p-2.5 rounded-lg border flex items-center gap-2 shadow-2xs ${
                        req.statusStep >= 3
                          ? (req.statusStep > 3 || req.status === 'issued'
                            ? 'bg-white border-emerald-200'
                            : 'bg-amber-50/50 border-amber-300 ring-1 ring-amber-300')
                          : 'bg-white border-slate-200 opacity-60'
                      }`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          req.statusStep > 3 || req.status === 'issued'
                            ? 'bg-emerald-700 text-white'
                            : req.statusStep === 3
                            ? 'bg-amber-500 text-white animate-pulse'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {req.statusStep > 3 || req.status === 'issued' ? <Check className="w-3 h-3" /> : '3'}
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-slate-900 block leading-tight text-[11px]">3. Dean Sign</span>
                          <span className="text-[10px] text-slate-500 block truncate">
                            {req.statusStep > 3 || req.status === 'issued' ? 'Endorsed' : 'Awaiting Seal'}
                          </span>
                        </div>
                      </div>

                      {/* Step 4: Issued */}
                      <div className={`p-2.5 rounded-lg border flex items-center gap-2 shadow-2xs ${
                        req.status === 'issued'
                          ? 'bg-emerald-50/40 border-emerald-300 ring-1 ring-emerald-400'
                          : 'bg-white border-slate-200 opacity-60'
                      }`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          req.status === 'issued' ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {req.status === 'issued' ? <ShieldCheck className="w-3 h-3 text-emerald-300" /> : '4'}
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-slate-900 block leading-tight text-[11px]">4. Issued</span>
                          <span className="text-[10px] text-emerald-800 font-semibold block truncate">
                            {req.status === 'issued' ? 'Digital NOC Ready' : 'Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Certificate Trigger */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                    <div className="text-xs text-slate-500">
                      {req.status === 'issued' ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          Digitally stamped with Dean&apos;s signature &amp; verified on Ayush Blockchain Node.
                        </span>
                      ) : (
                        <span className="text-amber-800 font-medium flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                          Institutional verification in progress across TPO &amp; Dean Academic Cell.
                        </span>
                      )}
                    </div>

                    {req.status === 'issued' && (
                      <button
                        onClick={() => setSelectedNocCertificate(req)}
                        className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Download Digital NOC Certificate</span>
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* APPLY FOR INTERNSHIP NOC MODAL */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <FilePlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Apply for Internship NOC</h3>
                  <p className="text-xs text-slate-500">Statutory institutional clearance for academic credit transfer</p>
                </div>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleApplyNocSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Company / Host Organization Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dabur India Ltd / Patanjali Research Foundation / CCRAS"
                  value={formCompany}
                  onChange={(e) => setFormCompany(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Internship Role / Designation *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayurvedic Formulation Research Fellow / QC Analyst"
                  value={formRole}
                  onChange={(e) => setFormRole(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Duration (Months) *</label>
                  <select
                    value={formDuration}
                    onChange={(e) => setFormDuration(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  >
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="12 Months">12 Months</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Tentative Start Date *</label>
                  <input
                    type="date"
                    required
                    value={formStartDate}
                    onChange={(e) => setFormStartDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Offer Letter Attachment * (PDF / DOC)</label>
                <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50 hover:bg-emerald-50/20 rounded-2xl p-4 text-center transition-colors">
                  {formOfferLetter ? (
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-emerald-200">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-5 h-5 text-emerald-700 shrink-0" />
                        <div className="text-left truncate">
                          <p className="text-xs font-bold text-slate-900 truncate">{formOfferLetter.name}</p>
                          <p className="text-[10px] text-slate-500">{formOfferLetter.size}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormOfferLetter(null)}
                        className="text-xs text-rose-600 font-bold hover:underline ml-2 shrink-0 cursor-pointer"
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer block space-y-1.5">
                      <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                      <span className="text-xs font-bold text-emerald-800 block">Click or Drag to Upload Offer Letter</span>
                      <span className="text-[10px] text-slate-400 block">Accepted formats: PDF, DOC, DOCX up to 10MB</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files && e.target.files[0];
                          if (file) {
                            setFormOfferLetter({
                              name: file.name,
                              size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
                            });
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Academic Eligibility Preview */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 text-xs space-y-1.5">
                <div className="font-extrabold text-emerald-950 flex items-center justify-between">
                  <span>Verified Institutional Eligibility Record</span>
                  <span className="text-[10px] px-2 py-0.5 bg-emerald-200/60 rounded-md text-emerald-900">Auto-Verified</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-700">
                  <div>CGPA: <strong className="text-emerald-900">8.94 / 10.0</strong> (&ge; 7.50 ✓)</div>
                  <div>Attendance: <strong className="text-emerald-900">88.5%</strong> (&ge; 75% ✓)</div>
                  <div>Backlogs: <strong className="text-emerald-900">0 Nil</strong> (Cleared ✓)</div>
                </div>
              </div>

              {/* Declarations Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={formAgreed}
                  onChange={(e) => setFormAgreed(e.target.checked)}
                  className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-500"
                />
                <span>
                  I hereby certify that the attached offer letter is authentic and I will adhere to Schedule T Good Manufacturing Practices (GMP) and institutional code of conduct throughout the training.
                </span>
              </label>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit NOC Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DIGITAL NOC CERTIFICATE MODAL */}
      <DigitalNocModal
        isOpen={!!selectedNocCertificate}
        onClose={() => setSelectedNocCertificate(null)}
        noc={selectedNocCertificate}
      />

      {/* TOAST NOTIFICATION */}
      {nocToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-start gap-3.5 max-w-lg transition-all animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs flex-1">
            <p className="font-bold text-slate-100 text-sm">{nocToast.title}</p>
            <p className="text-slate-300 mt-1 leading-relaxed">{nocToast.message}</p>
          </div>
          <button
            onClick={() => setNocToast(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
