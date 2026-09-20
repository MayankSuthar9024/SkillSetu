import React, { useState } from 'react';
import { 
  BookOpen, 
  PlusCircle, 
  Sparkles, 
  Search, 
  Clock, 
  CheckCircle2, 
  Tag, 
  Layers, 
  UploadCloud, 
  ChevronRight, 
  X,
  CreditCard,
  PlayCircle,
  Eye,
  UserCheck,
  ShoppingBag,
  Star,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Award,
  Building2,
  GraduationCap,
  Filter,
  Users,
  FileText,
  Check,
  Landmark,
  TrendingUp,
  AlertCircle,
  FileCheck
} from 'lucide-react';

import courseGmpPoster from '../assets/images/course_gmp_poster.jpg';
import courseGcpPoster from '../assets/images/course_gcp_poster.jpg';
import ayushHeroBanner from '../assets/images/ayush_hero_banner.jpg';

// Standardized National Ayush Course Types Directory for Ministry Oversight
export const MINISTRY_COURSE_TYPES = [
  {
    id: 'type-gmp',
    domainCode: 'DOMAIN-01',
    category: 'Manufacturing & GMP',
    title: 'Schedule T GMP & Industrial Manufacturing Protocols',
    statutoryBadge: 'NCISM Pre-Internship Mandatory',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    description: 'Mandatory technical training modules covering Indian pharmaceutical manufacturing requirements under Schedule T of Drugs and Cosmetics Rules 1945. Focuses on premises layout, cleanroom hygiene, HVAC pressure cascades, equipment calibration, and batch manufacturing records (BMR).',
    durationFormat: '90–120 Mins Micro-Credentials',
    academicCredits: '2 Credits (Transferable via ABC Bank)',
    targetCohort: 'BAMS Final Year, MD Scholars & Pharma Trainees',
    accreditingBody: 'NCISM & Drugs Controller General of India (DCGI)',
    preceptorInstitutes: 'All India Institute of Ayurveda (AIIA), National Institute of Ayurveda (NIA), Dabur R&D Centre',
    nationalEnrollment: '4,120 Scholars',
    activeModulesCount: '4 Modules Active',
    auditStatus: 'Approved & Accredited',
    curriculumSummary: 'Standardized factory-floor readiness curriculum bridging the 55% Day-1 industry skill deficit in GMP compliance.',
    competencies: [
      'Schedule T Premises Rules',
      'Cleanroom HVAC & Particle Classification',
      'Batch Manufacturing Records (BMR)',
      'Contamination Control SOPs',
      'QA/QC Auditing Protocols'
    ],
    detailedModules: [
      { name: 'Module 1: Schedule T Legal Provisions & Plant Layout', duration: '30 mins', provider: 'AIIA New Delhi' },
      { name: 'Module 2: Cleanroom Air Handling & HVAC Maintenance', duration: '30 mins', provider: 'Dabur R&D' },
      { name: 'Module 3: In-Process Quality Controls & BMR Documentation', duration: '30 mins', provider: 'NIA Jaipur' },
      { name: 'Module 4: WHO-GMP & Ayush Standard Mark Audit Protocols', duration: '30 mins', provider: 'NCISM Preceptor Cell' }
    ]
  },
  {
    id: 'type-gcp',
    domainCode: 'DOMAIN-02',
    category: 'Clinical Research',
    title: 'Good Clinical Practice (GCP) & Botanical Drug Trials (ICH E6-R3)',
    statutoryBadge: 'ICMR / CDSCO Aligned',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    description: 'Statutory curriculum on international and national ethical guidelines for conducting clinical trials on ASU (Ayurveda, Siddha, Unani) herbal formulations. Enforces patient safety, informed consent, trial registry (CTRI) compliance, and trial lifecycle data integrity.',
    durationFormat: '120 Mins Micro-Credentials + 8 Weeks MOOC',
    academicCredits: '3 Credits (Transferable via ABC Bank)',
    targetCohort: 'MD/MS Dravyaguna & Kayachikitsa Scholars, Clinical Fellows',
    accreditingBody: 'Central Drugs Standard Control Organization (CDSCO) & ICMR',
    preceptorInstitutes: 'AIIMS New Delhi, AIIA Clinical Trials Cell, CCRAS',
    nationalEnrollment: '3,890 Scholars',
    activeModulesCount: '5 Modules Active',
    auditStatus: 'Approved & Accredited',
    curriculumSummary: 'Ensures botanical clinical evaluations meet global GCP standards with biometric logging and transparent ethical clearance.',
    competencies: [
      'ICH E6(R3) Principles',
      'Institutional Ethics Committee (IEC) Clearances',
      'Informed Consent Process in Botanical Trials',
      'Adverse Event Reporting (ADR)',
      'CTRI Protocol Registration'
    ],
    detailedModules: [
      { name: 'Module 1: Ethical Principles & Human Subject Rights', duration: '30 mins', provider: 'AIIMS New Delhi' },
      { name: 'Module 2: Informed Consent Documentation in ASU Trials', duration: '25 mins', provider: 'AIIA Clinical Cell' },
      { name: 'Module 3: Investigator Brochure & Protocol Design', duration: '35 mins', provider: 'CCRAS' },
      { name: 'Module 4: CTRI Registration & Data Integrity Systems', duration: '30 mins', provider: 'CDSCO Advisory Wing' }
    ]
  },
  {
    id: 'type-qa',
    domainCode: 'DOMAIN-03',
    category: 'Quality Assurance / QA',
    title: 'Phytochemical Standardization & High-Performance Chromatography (HPTLC)',
    statutoryBadge: 'API & Pharmacopoeial Standard',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    description: 'Analytical chemistry framework for classical formulations and herbal extracts. Imparts practical knowledge of High-Performance Thin-Layer Chromatography (HPTLC), Atomic Absorption Spectroscopy (AAS) for heavy metals, pesticide residue analysis, and microbial limits.',
    durationFormat: '12 Weeks (NPTEL / SWAYAM Partnered)',
    academicCredits: '3 Credits (Transferable via ABC Bank)',
    targetCohort: 'Ayush Researchers, QC Analysts, Phytochemists',
    accreditingBody: 'Pharmacopoeia Commission for Indian Medicine & Homoeopathy (PCIM&H)',
    preceptorInstitutes: 'IIT Madras, National Institute of Ayurveda, Patanjali Research Foundation',
    nationalEnrollment: '4,450 Scholars',
    activeModulesCount: '4 Modules Active',
    auditStatus: 'Approved & Accredited',
    curriculumSummary: 'Hands-on laboratory standardization ensuring raw herb authentication and pharmacopoeial marker compliance.',
    competencies: [
      'HPTLC Fingerprint Profiling',
      'AAS Heavy Metal Assays (Pb, Cd, As, Hg)',
      'Pesticide Residue Limits (USP/API)',
      'Raw Herb Authentication Markers',
      'Stability Testing & Shelf-Life Assessment'
    ],
    detailedModules: [
      { name: 'Module 1: Chromatographic Separation Fundamentals', duration: '3 Weeks', provider: 'IIT Madras' },
      { name: 'Module 2: Fingerprint Profiling of Classical Kwathas', duration: '3 Weeks', provider: 'Patanjali R&D' },
      { name: 'Module 3: Heavy Metal Limits & Spectroscopic Quantification', duration: '3 Weeks', provider: 'NIA Jaipur' },
      { name: 'Module 4: Pharmacopoeial Monographs & Assay Audits', duration: '3 Weeks', provider: 'PCIM&H' }
    ]
  },
  {
    id: 'type-pv',
    domainCode: 'DOMAIN-04',
    category: 'Pharmacovigilance',
    title: 'National Pharmacovigilance & Adverse Drug Reaction (ADR) Monitoring',
    statutoryBadge: 'National Pharmacovigilance Programme',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    description: 'Statutory drug safety monitoring curriculum establishing the National Pharmacovigilance Programme for ASU drugs. Covers causality assessment (WHO-UMC criteria), yellow-form incident filing, signal detection, and regulatory pharmacovigilance inspections.',
    durationFormat: '90 Mins Practical Certification',
    academicCredits: '2 Credits (Certificate Program)',
    targetCohort: 'Hospital Resident Doctors, Medical Officers, Ayush Pharmacists',
    accreditingBody: 'National Pharmacovigilance Coordination Centre (NPvCC) & Ministry of Ayush',
    preceptorInstitutes: 'All India Institute of Ayurveda (National Apex Node), State Peripheral Centres',
    nationalEnrollment: '2,980 Scholars',
    activeModulesCount: '3 Modules Active',
    auditStatus: 'Approved & Accredited',
    curriculumSummary: 'Comprehensive clinical safety vigilance training for real-time incident reporting and public health assurance.',
    competencies: [
      'ADR Causality Assessment (WHO-UMC)',
      'Yellow-Form Regulatory Filing',
      'Herbal-Drug Interaction Monitoring',
      'Safety Signal Processing',
      'Clinical Risk Communications'
    ],
    detailedModules: [
      { name: 'Module 1: Introduction to Ayush Pharmacovigilance Program', duration: '30 mins', provider: 'NPvCC / AIIA' },
      { name: 'Module 2: WHO-UMC Causality Assessment Algorithm', duration: '30 mins', provider: 'National Apex Node' },
      { name: 'Module 3: Electronic Submission & Risk Minimization Protocols', duration: '30 mins', provider: 'Ministry of Ayush' }
    ]
  },
  {
    id: 'type-mooc',
    domainCode: 'DOMAIN-05',
    category: 'Academic Credit MOOCs',
    title: 'SWAYAM & NPTEL National Online Credit Transfer Modules',
    statutoryBadge: 'NEP 2020 Multi-Disciplinary Credit Banking',
    badgeColor: 'bg-teal-100 text-teal-950 border-teal-300',
    description: 'National multi-institutional semester-long MOOC bridges hosted on SWAYAM. Fully recognized by UGC and NCISM for direct credit transfer into student Academic Bank of Credits (ABC) accounts to remediate identified regional curricular deficits.',
    durationFormat: '8 to 12 Weeks (Full Semester)',
    academicCredits: '3 to 4 Credits (NEP 2020 ABC Bank)',
    targetCohort: 'All Ayush Undergraduates & Postgraduates across 536 Colleges',
    accreditingBody: 'Ministry of Education / UGC / NCISM',
    preceptorInstitutes: 'IIT Madras, IIT Kharagpur, AIIMS New Delhi, PGIMER Chandigarh',
    nationalEnrollment: '5,400 Scholars',
    activeModulesCount: '6 MOOCs Active',
    auditStatus: 'Approved & Credit-Linked',
    curriculumSummary: 'UGC-accredited MOOC framework empowering students with automated transfer of up to 4 semester credits.',
    competencies: [
      'Analytical Instrumentation',
      'Clinical Biostatistics & Epidemiology',
      'Pharmaceutical Biochemical Engineering',
      'Evidence-Based Ayush Protocol Design'
    ],
    detailedModules: [
      { name: 'Module 1: Analytical Chemistry in Herbal Formulations', duration: '12 Weeks', provider: 'IIT Madras' },
      { name: 'Module 2: Clinical Trials Management & Ethics', duration: '8 Weeks', provider: 'AIIMS New Delhi' },
      { name: 'Module 3: Pharmaceutical Engineering & Schedule T', duration: '12 Weeks', provider: 'IIT Kharagpur' },
      { name: 'Module 4: Biostatistics for Ayush Clinical Trials', duration: '8 Weeks', provider: 'PGIMER Chandigarh' }
    ]
  },
  {
    id: 'type-formulation',
    domainCode: 'DOMAIN-06',
    category: 'Classical Formulations',
    title: 'Bhaishajya Kalpana & Pilot Plant Batch Scale-Up',
    statutoryBadge: 'Schedule T Pilot Plant Standards',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
    description: 'Industrial transition curriculum converting small-scale laboratory preparation into Schedule T pilot plant batch manufacturing. Covers classical Rasa Shastra formulations, automated extraction, standardization of dosage forms, and packaging integrity.',
    durationFormat: '90 Mins Practical Demonstration',
    academicCredits: '2 Credits (Certificate Program)',
    targetCohort: 'BAMS Final Year, M.D. (Rasa Shastra & Bhaishajya Kalpana)',
    accreditingBody: 'NCISM Minimum Standards of Education',
    preceptorInstitutes: 'National Institute of Ayurveda (NIA), Kerala Ayurveda, Kottakkal Arya Vaidya Sala',
    nationalEnrollment: '2,680 Scholars',
    activeModulesCount: '3 Modules Active',
    auditStatus: 'Approved & Accredited',
    curriculumSummary: 'Scalability protocols bridging benchtop classical preparation and Schedule T industrial manufacturing lines.',
    competencies: [
      'Pilot Plant Extraction Scaling',
      'Rasa Bhasma Standard Operating Procedures',
      'Modern Dosage Form Conversion (Tablets/Syrups)',
      'In-Process Quality Control (IPQC)',
      'Primary & Secondary Packaging Standards'
    ],
    detailedModules: [
      { name: 'Module 1: Batch Scalability & Pilot Extraction Setup', duration: '30 mins', provider: 'NIA Jaipur' },
      { name: 'Module 2: Quality SOPs in Classical Rasa Preparations', duration: '30 mins', provider: 'Kottakkal Arya Vaidya Sala' },
      { name: 'Module 3: Tablet Compression, Packaging & Stability Logs', duration: '30 mins', provider: 'Kerala Ayurveda' }
    ]
  }
];

// Dedicated Ministry Curriculum Directory & Course Types Overview (No retail course cards)
export function MinistryCoursesOverview() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetailType, setSelectedDetailType] = useState(null);

  const categories = [
    'All', 
    'Manufacturing & GMP', 
    'Clinical Research', 
    'Quality Assurance / QA', 
    'Pharmacovigilance', 
    'Academic Credit MOOCs', 
    'Classical Formulations'
  ];

  const filteredTypes = MINISTRY_COURSE_TYPES.filter(type => {
    const matchesCategory = selectedCategory === 'All' || type.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      type.title.toLowerCase().includes(q) ||
      type.description.toLowerCase().includes(q) ||
      type.targetCohort.toLowerCase().includes(q) ||
      type.accreditingBody.toLowerCase().includes(q) ||
      type.preceptorInstitutes.toLowerCase().includes(q) ||
      type.competencies.some(c => c.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 space-y-6 max-w-6xl mx-auto animate-in fade-in duration-300">
      
      {/* 1. Clean, Simple Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
            Ministry of Ayush
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Available Course Types
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Accredited course categories and basic specifications under Ministry oversight.
          </p>
        </div>
        <div className="shrink-0">
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            {filteredTypes.length} Types Available
          </span>
        </div>
      </div>

      {/* 2. Search & Category Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search course types..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Simplified Course Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTypes.map((type) => (
          <div 
            key={type.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {type.category}
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {type.domainCode}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                {type.title}
              </h3>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {type.curriculumSummary || type.description}
              </p>

              {/* Clean Basic Info in simple rows */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Duration</span>
                  <span className="text-slate-800 font-semibold">{type.durationFormat.split('+')[0].trim()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Credits</span>
                  <span className="text-emerald-800 font-bold">{type.academicCredits.split(' ')[0]} Credits</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Accrediting Authority</span>
                  <span className="text-slate-700 font-medium truncate block">{type.accreditingBody}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedDetailType(type)}
              className="w-full py-2 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Course Modules</span>
            </button>
          </div>
        ))}
      </div>

      {/* 4. Lightweight Modal for Course Modules */}
      {selectedDetailType && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">{selectedDetailType.category}</span>
                <h3 className="text-base font-extrabold text-slate-900">{selectedDetailType.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDetailType(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Standard Modules</span>
              <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                {selectedDetailType.detailedModules.map((mod, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{mod.name}</span>
                    <span className="text-[10px] text-slate-500 font-bold bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0 ml-2">
                      {mod.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedDetailType(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export function CoursesPage({ currentUser, activePortalId }) {
  // Check if current view is Ministry of Ayush Portal
  const isMinistryPortal = activePortalId === 'admin' || 
                           activePortalId === 'ministry' || 
                           currentUser?.roleType === 'admin' ||
                           currentUser?.role?.toLowerCase().includes('ministry') ||
                           currentUser?.role?.toLowerCase().includes('director general') ||
                           currentUser?.institution?.toLowerCase().includes('ministry');

  // Ministry portal gets high-level curriculum oversight & course types directory (No retail course cards)
  if (isMinistryPortal) {
    return <MinistryCoursesOverview />;
  }

  // Only faculty members can post courses; students can only view and buy/watch posted courses
  const isFacultyPortal = activePortalId === 'faculty';
  
  const [isPostingOpen, setIsPostingOpen] = useState(false);
  const [portalFilter, setPortalFilter] = useState('All'); // 'All' | 'Ministry Certified' | 'NPTEL / SWAYAM'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [publishSuccess, setPublishSuccess] = useState(false);
  
  // Student Buy & Watch Modal State
  const [selectedCourseForBuy, setSelectedCourseForBuy] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);

  // Published Course Posters List
  const [coursesList, setCoursesList] = useState([
    { 
      id: 'mc-1', 
      title: 'Schedule T Basics & Manufacturing Compliance', 
      category: 'Manufacturing & GMP',
      providerType: 'Ministry Certified',
      duration: '90 mins', 
      enrolled: 142, 
      rating: '4.9', 
      price: 'Free Access',
      posterImage: courseGmpPoster,
      author: 'Prof. Meenakshi Joshi',
      authorRole: 'HOD Dravyaguna, AIIA New Delhi',
      targetCohort: 'BAMS Final Year',
      skillGap: 'Understanding Indian pharmaceutical manufacturing requirements, premises, equipment, hygiene, and documentation under Drugs Rules 1945.',
      competencies: ['Schedule T Rules', 'Cleanroom Hygiene', 'GMP Protocol', 'QA SOPs']
    },
    { 
      id: 'mc-2', 
      title: 'Good Clinical Practice (GCP) – ICH E6(R3)', 
      category: 'Clinical Research',
      providerType: 'Ministry Certified',
      duration: '120 mins', 
      enrolled: 198, 
      rating: '4.9', 
      price: 'Free Access',
      posterImage: courseGcpPoster,
      author: 'Prof. Meenakshi Joshi',
      authorRole: 'NCISM Preceptor',
      targetCohort: 'MD Dravyaguna Scholars',
      skillGap: 'International ethical, scientific, and quality standards for clinical trials. Emphasis on participant protection, data reliability, and risk-based quality thinking.',
      competencies: ['ICH E6(R3)', 'Informed Consent', 'Trial Lifecycle', 'Data Integrity']
    },
    { 
      id: 'mc-3', 
      title: 'Good Manufacturing Practice (GMP) Basics', 
      category: 'Quality Assurance / QA',
      providerType: 'Ministry Certified',
      duration: '90 mins', 
      enrolled: 112, 
      rating: '4.8', 
      price: 'Free Access',
      posterImage: ayushHeroBanner,
      author: 'Dr. Rajesh Vaidya',
      authorRole: 'QA Director, Dabur R&D',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Quality-management framework for consistently producing and controlling medicines. Covers validation, documentation, and contamination control.',
      competencies: ['WHO-GMP Standards', 'Quality Systems', 'Contamination Control', 'Validation SOPs']
    },
    { 
      id: 'mc-4', 
      title: 'Regulatory Affairs Basics & CDSCO Framework', 
      category: 'Regulatory Compliance',
      providerType: 'Ministry Certified',
      duration: '90 mins', 
      enrolled: 85, 
      rating: '4.7', 
      price: 'Free Access',
      posterImage: courseGcpPoster,
      author: 'Prof. S. K. Sharma',
      authorRole: 'CDSCO Regulatory Advisor',
      targetCohort: 'BAMS 3rd Year',
      skillGap: 'CDSCO regulatory framework, Drugs and Cosmetics Act/Rules, and New Drugs and Clinical Trials Rules high-level drug approval pathways.',
      competencies: ['CDSCO Pathway', 'Drug Approval', 'Submission Checklist', 'CTRI Rules']
    },
    { 
      id: 'mc-5', 
      title: 'Pharmacovigilance Basics & ADR Safety Monitoring', 
      category: 'Pharmacovigilance',
      providerType: 'Ministry Certified',
      duration: '90 mins', 
      enrolled: 156, 
      rating: '4.9', 
      price: 'Free Access',
      posterImage: courseGmpPoster,
      author: 'Prof. Meenakshi Joshi',
      authorRole: 'HOD Dravyaguna, AIIA New Delhi',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Detection, assessment, understanding and prevention of adverse drug effects. Real-world ADR reporting workflows and safety signal processing.',
      competencies: ['ADR Detection', 'WHO-UMC Causality', 'Safety Reporting', 'Signal Assessment']
    },
    // National MOOC Learning Bridges (SWAYAM & NPTEL)
    {
      id: 'mc-swayam-1',
      title: 'NPTEL: Analytical Chemistry in Herbal Formulations - IIT Madras',
      category: 'Quality Assurance / QA',
      providerType: 'NPTEL / SWAYAM',
      duration: '12 Weeks (Credit Transferable)',
      enrolled: 1420,
      rating: '4.9',
      price: 'Free MOOC',
      posterImage: courseGmpPoster,
      author: 'Prof. S. Ranganathan',
      authorRole: 'Department of Chemistry, IIT Madras',
      targetCohort: 'BAMS & Ayush Researchers',
      skillGap: 'Remediation for HPTLC fingerprinting, chromatography calibration, and herbal API standardization.',
      competencies: ['HPLC / HPTLC', 'Mass Spectrometry', 'Herbal Marker Assay', 'NPTEL Certified'],
      swayamUrl: 'https://swayam.gov.in/explorer?searchText=analytical+chemistry',
      isSwayam: true
    },
    {
      id: 'mc-swayam-2',
      title: 'SWAYAM: Clinical Trials Management - AIIMS',
      category: 'Clinical Research',
      providerType: 'NPTEL / SWAYAM',
      duration: '8 Weeks (Credit Transferable)',
      enrolled: 1890,
      rating: '4.9',
      price: 'Free MOOC',
      posterImage: courseGcpPoster,
      author: 'Dr. Priya Narang',
      authorRole: 'Clinical Research Centre, AIIMS New Delhi',
      targetCohort: 'Ayush Scholars & MD Fellows',
      skillGap: 'Remediation for clinical research protocol design, ethical clearances, and ICH-GCP trial monitoring.',
      competencies: ['ICH-GCP E6(R3)', 'Trial Ethics', 'CDSCO Filing', 'SWAYAM Certified'],
      swayamUrl: 'https://swayam.gov.in/explorer?searchText=clinical+trials',
      isSwayam: true
    },
    {
      id: 'mc-swayam-3',
      title: 'NPTEL: Schedule T Pharmaceutical Engineering & Quality Control - IIT Kharagpur',
      category: 'Manufacturing & GMP',
      providerType: 'NPTEL / SWAYAM',
      duration: '12 Weeks (Credit Transferable)',
      enrolled: 1150,
      rating: '4.8',
      price: 'Free MOOC',
      posterImage: ayushHeroBanner,
      author: 'Prof. K. B. Roy',
      authorRole: 'Biochemical Engineering, IIT Kharagpur',
      targetCohort: 'BAMS Final Year & GMP Auditors',
      skillGap: 'Remediation for HVAC cleanroom protocols, particle counts, and industrial Schedule T validation.',
      competencies: ['Schedule T GMP', 'Cleanroom HVAC', 'Sterility Testing', 'NPTEL Certified'],
      swayamUrl: 'https://swayam.gov.in/explorer?searchText=pharmaceutical+engineering',
      isSwayam: true
    },
    {
      id: 'mc-swayam-4',
      title: 'SWAYAM: Biostatistics & Epidemiological Research for Ayush - PGIMER',
      category: 'Clinical Research',
      providerType: 'NPTEL / SWAYAM',
      duration: '8 Weeks (Credit Transferable)',
      enrolled: 940,
      rating: '4.8',
      price: 'Free MOOC',
      posterImage: courseGcpPoster,
      author: 'Prof. Anita Deshmukh',
      authorRole: 'Biostatistics Division, PGIMER',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Remediation for epidemiological study design, statistical power, and SPSS / R analytics in clinical trials.',
      competencies: ['Clinical Biostatistics', 'Epidemiology', 'Evidence Synthesis', 'SWAYAM Certified'],
      swayamUrl: 'https://swayam.gov.in/explorer?searchText=biostatistics',
      isSwayam: true
    }
  ]);

  // Form State for Faculty Posting a Course
  const [courseForm, setCourseForm] = useState({
    title: '',
    category: 'Manufacturing & GMP',
    price: 'Free Access',
    duration: '90 mins',
    targetCohort: 'BAMS Final Year',
    skillGap: '',
    competencies: '',
    author: currentUser?.name || 'Prof. Meenakshi Joshi',
    authorRole: currentUser?.role || 'Professor & HOD',
    videoUrl: '',
    attachedFileName: ''
  });

  // Task 5 PDF Recommended Presets for 1-Click Auto-Fill
  const coursePresets = [
    {
      label: 'Schedule T Basics',
      tag: 'Manufacturing',
      title: 'Schedule T Basics & Manufacturing Compliance',
      category: 'Manufacturing & GMP',
      price: 'Free Access',
      duration: '90 mins',
      targetCohort: 'BAMS Final Year',
      skillGap: 'Understanding Indian pharmaceutical manufacturing requirements, premises, equipment, hygiene, and documentation under Drugs Rules 1945.',
      competencies: 'Schedule T Rules, Premises Hygiene, GMP Compliance, QA Documentation'
    },
    {
      label: 'GCP – ICH E6(R3)',
      tag: 'Clinical Research',
      title: 'Good Clinical Practice (GCP) – ICH E6(R3)',
      category: 'Clinical Research',
      price: 'Free Access',
      duration: '120 mins',
      targetCohort: 'MD Dravyaguna Scholars',
      skillGap: 'International ethical, scientific, and quality standards for clinical trials. Emphasis on participant protection, data reliability, and risk-based quality thinking.',
      competencies: 'ICH E6(R3), Informed Consent, Trial Lifecycle, Data Integrity'
    },
    {
      label: 'GMP Basics',
      tag: 'Quality Assurance',
      title: 'Good Manufacturing Practice (GMP) Basics',
      category: 'Quality Assurance / QA',
      price: 'Free Access',
      duration: '90 mins',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Quality-management framework for consistently producing and controlling medicines. Covers validation, documentation, and contamination control.',
      competencies: 'WHO-GMP Standards, Quality Systems, Contamination Control, Validation SOPs'
    },
    {
      label: 'Regulatory Affairs',
      tag: 'Regulatory',
      title: 'Regulatory Affairs Basics & CDSCO Framework',
      category: 'Regulatory Compliance',
      price: 'Free Access',
      duration: '90 mins',
      targetCohort: 'BAMS 3rd Year',
      skillGap: 'CDSCO regulatory framework, Drugs and Cosmetics Act/Rules, and New Drugs and Clinical Trials Rules high-level drug approval pathways.',
      competencies: 'CDSCO Regulatory Pathway, Submission Checklist, CTRI Rules, Compliance'
    },
    {
      label: 'Pharmacovigilance',
      tag: 'Medicine Safety',
      title: 'Pharmacovigilance Basics & ADR Safety Monitoring',
      category: 'Pharmacovigilance',
      price: 'Free Access',
      duration: '90 mins',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Detection, assessment, understanding and prevention of adverse drug effects. Real-world ADR reporting workflows and safety signal processing.',
      competencies: 'ADR Detection, WHO-UMC Causality, Safety Reporting, Signal Assessment'
    }
  ];

  const handleApplyPreset = (preset) => {
    setCourseForm({
      ...courseForm,
      title: preset.title,
      category: preset.category,
      price: preset.price,
      duration: preset.duration,
      targetCohort: preset.targetCohort,
      skillGap: preset.skillGap,
      competencies: preset.competencies,
      attachedFileName: `${preset.label.replace(/[^a-zA-Z0-9]/g, '_')}_Standard_SOP.pdf`
    });
  };

  const handlePublishCourse = () => {
    if (!courseForm.title.trim()) {
      alert('Please enter a Course Title before publishing.');
      return;
    }

    const newCourse = {
      id: `mc-${Date.now()}`,
      title: courseForm.title,
      category: courseForm.category,
      duration: courseForm.duration,
      enrolled: 0,
      rating: 'New',
      price: courseForm.price || '₹499',
      posterImage: courseGmpPoster,
      author: courseForm.author || 'Prof. Meenakshi Joshi',
      authorRole: courseForm.authorRole || 'Faculty Preceptor',
      targetCohort: courseForm.targetCohort,
      skillGap: courseForm.skillGap || 'Targeted student skill-gap development module',
      competencies: courseForm.competencies ? courseForm.competencies.split(',').map(c => c.trim()) : ['Core Competency'],
      attachedFileName: courseForm.attachedFileName || 'Course_Module_SOP.pdf'
    };

    setCoursesList(prev => [newCourse, ...prev]);
    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setIsPostingOpen(false);
      setCourseForm({
        title: '',
        category: 'Manufacturing & GMP',
        price: '₹499',
        duration: '90 mins',
        targetCohort: 'BAMS Final Year',
        skillGap: '',
        competencies: '',
        author: currentUser?.name || 'Prof. Meenakshi Joshi',
        authorRole: currentUser?.role || 'Professor & HOD',
        videoUrl: '',
        attachedFileName: ''
      });
    }, 1200);
  };

  // Category Filtering
  const categories = ['All', 'Manufacturing & GMP', 'Clinical Research', 'Regulatory Compliance', 'Pharmacovigilance', 'Quality Assurance / QA'];

  const filteredCourses = coursesList.filter(course => {
    const matchesPortal = portalFilter === 'All' || 
                          (portalFilter === 'Ministry Certified' && course.providerType === 'Ministry Certified') ||
                          (portalFilter === 'NPTEL / SWAYAM' && (course.providerType === 'NPTEL / SWAYAM' || course.isSwayam));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.skillGap.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.competencies.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesPortal && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Clean Top Header Bar: Search on Left, + Post Course on Right */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Left Side: Search Bar Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by title, faculty, or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Right Side: + Post Course Button (Rendered ONLY for Faculty, Removed from Student Page) */}
          {isFacultyPortal && (
            <button
              onClick={() => setIsPostingOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-emerald-300" />
              <span>+ Post Course</span>
            </button>
          )}

        </div>

        {/* National Learning Portal Filter Tabs (Prompt #2: All | Ministry Certified | NPTEL / SWAYAM) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-3xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Source:
            </span>
            {['All', 'Ministry Certified', 'NPTEL / SWAYAM'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setPortalFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  portalFilter === tab
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80'
                }`}
              >
                <span>{tab}</span>
                {tab === 'NPTEL / SWAYAM' && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-300 text-amber-950 font-black">
                    Free MOOC
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden lg:inline">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                    : 'bg-white text-slate-500 hover:text-slate-800 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col overflow-hidden group"
            >
              {/* Poster Cover Thumbnail Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img 
                  src={course.posterImage} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-950 bg-emerald-400 px-2.5 py-1 rounded-lg shadow-xs truncate">
                      {course.category}
                    </span>
                    {course.isSwayam && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-teal-950 bg-teal-200 border border-teal-300 px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1 shrink-0">
                        <Sparkles className="w-3 h-3 text-teal-800" />
                        NPTEL / SWAYAM
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-extrabold text-slate-950 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs shrink-0">
                    {course.price}
                  </span>
                </div>

                {/* Bottom Overlay: Author Faculty Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white z-10">
                  <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-extrabold text-[11px] flex items-center justify-center border border-white/20 shrink-0">
                    {course.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-extrabold text-white block truncate leading-none">
                      {course.isSwayam ? `Course Instructor: ${course.author}` : `Posted by: ${course.author}`}
                    </span>
                    <span className="text-[10px] text-emerald-200 block truncate mt-0.5 font-medium">
                      {course.authorRole}
                    </span>
                  </div>
                </div>
              </div>

              {/* Poster Card Details Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  {course.isSwayam && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-teal-900 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3 h-3 text-teal-700" />
                        Free MOOC • Credit Transferable
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-900 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                        NPTEL / SWAYAM Certified
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.skillGap}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="text-slate-700 font-extrabold">{course.enrolled} Enrolled</span>
                    <span>•</span>
                    <span className="text-amber-700 font-extrabold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{course.rating}</span>
                    </span>
                  </div>

                  {/* Competencies Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {course.competencies.map((comp, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role-Specific Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-extrabold text-slate-900">
                    {course.price === 'Free Access' ? 'Free for Scholars' : course.price}
                  </span>

                  {course.isSwayam ? (
                    <a
                      href={course.swayamUrl || 'https://swayam.gov.in'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      <span>Enroll on swayam.gov.in</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
                    </a>
                  ) : isFacultyPortal ? (
                    /* FACULTY VIEW: Manage & SOP (Faculty do NOT enroll) */
                    <button
                      onClick={() => alert(`Opening preceptor SOP canvas for: ${course.title}`)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 border border-slate-200"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>Manage Course</span>
                    </button>
                  ) : (
                    /* STUDENT VIEW: Buy & Watch Course */
                    <button
                      onClick={() => {
                        setSelectedCourseForBuy(course);
                        setIsPurchased(false);
                      }}
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Buy & Watch</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FACULTY ONLY: Simple "+ Post Course" Modal Dialog */}
      {isFacultyPortal && isPostingOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn pb-24 sm:pb-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 relative my-auto overflow-hidden">
            
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex justify-between items-center shrink-0 bg-white">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Faculty Publishing Desk
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 mt-2">
                  + Post New Course
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publish a new training course poster so students can buy and watch your module.
                </p>
              </div>

              <button
                onClick={() => setIsPostingOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
              {/* Success Toast */}
              {publishSuccess && (
                <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-lg flex items-center justify-between animate-bounce">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-200" />
                    <div>
                      <h4 className="font-extrabold text-sm">Course Posted Successfully!</h4>
                      <p className="text-xs text-emerald-100">Course poster is now live on the Courses tab for all students.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 1-Click Regulatory Presets */}
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80 space-y-2.5">
                <span className="text-[11px] font-extrabold text-emerald-950 uppercase tracking-wider block">
                  Quick 1-Click Topic Templates:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {coursePresets.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleApplyPreset(preset)}
                      className="px-3 py-1.5 bg-white hover:bg-emerald-800 hover:text-white text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition-all cursor-pointer"
                    >
                      + {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Course Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Schedule T Basics & Manufacturing Compliance"
                    value={courseForm.title}
                    onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Domain / Category
                    </label>
                    <select
                      value={courseForm.category}
                      onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="Manufacturing & GMP">Manufacturing & GMP</option>
                      <option value="Clinical Research">Clinical Research (GCP)</option>
                      <option value="Regulatory Compliance">Regulatory Compliance</option>
                      <option value="Pharmacovigilance">Pharmacovigilance</option>
                      <option value="Quality Assurance / QA">Quality Assurance / QA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Course Price (₹)
                    </label>
                    <select
                      value={courseForm.price}
                      onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="Free Access">Free Access (Ministry Subsidized)</option>
                      <option value="Free Access">Free for Scholars</option>
                      <option value="₹499">₹499 (Standard)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Duration
                    </label>
                    <select
                      value={courseForm.duration}
                      onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="60 mins">60 mins</option>
                      <option value="90 mins">90 mins</option>
                      <option value="120 mins">120 mins</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Course Description & Targeted Skill Gap
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the practical concepts and skill gap this course addresses..."
                    value={courseForm.skillGap}
                    onChange={(e) => setCourseForm({ ...courseForm, skillGap: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Core Competencies (Comma Separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Schedule T Rules, Cleanroom SOPs, GMP Audit"
                    value={courseForm.competencies}
                    onChange={(e) => setCourseForm({ ...courseForm, competencies: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                  />
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Attach SOP / Reference Material (.pdf)
                  </label>
                  <div className="border border-dashed border-slate-300 rounded-xl p-3 text-center bg-white cursor-pointer">
                    <UploadCloud className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                    <span className="text-xs font-bold text-slate-800 block">
                      {courseForm.attachedFileName || 'Upload SOP Document or Guideline PDF'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Modal Footer */}
            <div className="p-4 sm:p-6 pt-3 border-t border-slate-100 flex justify-end gap-3 shrink-0 bg-slate-50/50">
              <button
                onClick={() => setIsPostingOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handlePublishCourse}
                className="px-6 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer flex items-center gap-1.5 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Publish & Post Course</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* STUDENT: Full-Page Course View */}
      {selectedCourseForBuy && (
        <div className="fixed inset-0 z-[100] bg-[#f8fafc] text-slate-900 overflow-y-auto min-h-screen animate-fadeIn">
          {/* Top Full-Page Header */}
          <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
            <button
              onClick={() => setSelectedCourseForBuy(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-800 transition-colors cursor-pointer py-1.5 px-3 rounded-xl hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-700" />
              <span>Back to Courses</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                {selectedCourseForBuy.category}
              </span>
              <button
                onClick={() => setSelectedCourseForBuy(null)}
                className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Full Page Content Container */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column (2 Cols on Desktop) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* 16:9 Hero Player */}
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-slate-950 shadow-lg group">
                  <img 
                    src={selectedCourseForBuy.posterImage} 
                    alt={selectedCourseForBuy.title}
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                    <div 
                      onClick={() => setIsPurchased(true)}
                      className="w-20 h-20 rounded-full bg-white/95 hover:bg-white text-emerald-800 flex items-center justify-center shadow-2xl transition-all hover:scale-105 cursor-pointer"
                    >
                      <PlayCircle className="w-10 h-10 text-emerald-800" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl">
                    <span className="font-semibold">Interactive Video Lecture & Lab Simulation</span>
                    <span className="font-mono text-xs text-slate-300">{selectedCourseForBuy.duration}</span>
                  </div>
                </div>

                {/* Course Header Info */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-slate-900">{selectedCourseForBuy.author}</span>
                    <span>·</span>
                    <span>{selectedCourseForBuy.authorRole}</span>
                    <span>·</span>
                    <span className="text-amber-500 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      {selectedCourseForBuy.rating} ({selectedCourseForBuy.enrolled} enrolled)
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {selectedCourseForBuy.title}
                  </h1>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {selectedCourseForBuy.skillGap}
                  </p>
                </div>

                {/* Modules & Curriculum */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">Course Curriculum & Modules</h3>
                  <div className="space-y-2.5">
                    {[
                      { num: '01', title: 'Regulatory Framework & Industry Standard Operating Procedures', time: '25 mins' },
                      { num: '02', title: 'Practical Lab Execution, Testing & Phytochemical Standardization', time: '35 mins' },
                      { num: '03', title: 'Quality Assurance, Audit Readiness & Final Verification Case', time: '30 mins' },
                    ].map((mod, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between gap-4 hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center font-mono">
                            {mod.num}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">{mod.title}</span>
                        </div>
                        <span className="text-xs text-slate-400 font-medium shrink-0">{mod.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Competencies */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">Core Competencies</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedCourseForBuy.competencies.map((comp, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-2.5 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column / Sticky Sidebar */}
              <div className="space-y-6">
                <div className="sticky top-20 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      National Skill Portal
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900 pt-1">
                      {selectedCourseForBuy.price || 'Free Access'}
                    </div>
                    <p className="text-xs text-slate-500">
                      Subsidized for Ayush scholars & practitioners
                    </p>
                  </div>

                  {isPurchased ? (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 text-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                      <div>
                        <span className="font-bold text-sm text-emerald-950 block">Access Unlocked</span>
                        <span className="text-xs text-emerald-800">Module is ready for full lecture playback and credential verification.</span>
                      </div>
                      <button
                        onClick={() => alert(`Starting video lecture for: ${selectedCourseForBuy.title}`)}
                        className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer flex items-center justify-center gap-2"
                      >
                        <PlayCircle className="w-4 h-4 text-white" />
                        <span>Start Video Lecture</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsPurchased(true)}
                      className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Enroll & Start ({selectedCourseForBuy.price})</span>
                    </button>
                  )}

                  <div className="pt-2 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Duration:</span>
                      <span className="font-semibold text-slate-900">{selectedCourseForBuy.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Accreditation:</span>
                      <span className="font-semibold text-slate-900">NCISM / Ayush CoE</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Certificate:</span>
                      <span className="font-semibold text-slate-900">Digital Verifiable Badge</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      )}

    </div>
  );
}

export default CoursesPage;
