import priyaAvatar from '../assets/images/priya_avatar.jpg';
import kabirAvatar from '../assets/images/kabir_avatar.jpg';
import ananyaAvatar from '../assets/images/ananya_avatar.jpg';

export const AYUSH_DISCIPLINES = [
  {
    id: 'ayurveda',
    code: 'BAMS',
    name: 'Ayurveda',
    icon: 'psychiatry',
    description: 'Traditional Indian medicine system focused on holistic balance, herbal pharmacology, and Panchakarma therapies.',
    studentsCount: '45,000+',
    coreSkills: ['Nadi Pariksha (Pulse Diagnosis)', 'Dravyaguna (Herbal Pharmacology)', 'Panchakarma Protocol Execution', 'Rasashastra Prep']
  },
  {
    id: 'yoga',
    code: 'BNYS',
    name: 'Yoga & Naturopathy',
    icon: 'self_improvement',
    description: 'Preventive healthcare utilizing yogic sciences, hydrotherapy, lifestyle interventions, and natural healing.',
    studentsCount: '18,000+',
    coreSkills: ['Yogic Anatomy & Physiology', 'Hydrotherapy Protocols', 'Acupressure & Reflexology', 'Dietary Therapy Planning']
  },
  {
    id: 'unani',
    code: 'BUMS',
    name: 'Unani',
    icon: 'local_pharmacy',
    description: 'Perso-Arabic system of medicine emphasizing body humors (Akhlat) and natural herbal formulations.',
    studentsCount: '12,000+',
    coreSkills: ['Nabz (Pulse Evaluation)', 'Kulliyat (Unani Fundamentals)', 'Ilaj-bit-Tadbeer (Regimenal Therapy)', 'Single Herb Formulation']
  },
  {
    id: 'siddha',
    code: 'BSMS',
    name: 'Siddha',
    icon: 'nature_people',
    description: 'Ancient Dravidian medical science prioritizing longevity (Kayakalpa) and mineral-herbal pharmacology.',
    studentsCount: '8,500+',
    coreSkills: ['Envagai Thervu (8 Diagnostic Tools)', 'Varmam Therapy', 'Muppu Preparation', 'Herbology & Mineralogy']
  },
  {
    id: 'homeopathy',
    code: 'BHMS',
    name: 'Homeopathy',
    icon: 'science',
    description: 'System based on "like cures like" principles, potency dilutions, and individualized holistic constitutional prescribing.',
    studentsCount: '32,000+',
    coreSkills: ['Repertory Analysis', 'Materia Medica Cross-Match', 'Case Taking & Totality', 'Potency Selection']
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Visual 6-Axis Competency Radar',
    subtitle: 'Maps clinical and industrial skills like Schedule T GMP and HPTLC to replace flat text resumes.',
    icon: 'radar',
    badge: 'Phase 1: Radar',
    color: 'emerald',
    description: 'Students benchmark their practical competencies across 6 core industry axes: Schedule T GMP, HPTLC Fingerprinting, Clinical Diagnosis & Nadi Pariksha, Dravyaguna Pharmacology, Rasa Shastra, and Good Clinical Practices (GCP).',
    highlights: [
      'Visual 6-Axis diagnostic mapping',
      'Dynamic testing with strict per-item timer',
      'Replaces unverified text resumes with real competency metrics'
    ],
    benchmarkMetric: { label: 'Deficit Detection', value: 'Instant 6-Axis Plot' }
  },
  {
    step: '02',
    title: 'Automated Skill-Gap Analysis',
    subtitle: 'Identifies what practical skills a student lacks compared to current Ayush industry needs.',
    icon: 'analytics',
    badge: 'Phase 2: Gap Analysis',
    color: 'teal',
    description: 'Directly addresses the 55%+ practical skill deficit reported by FICCI & HSSC by pinpointing exact cleanroom, assay, and clinical protocol gaps before application.',
    highlights: [
      'Standardized against 12 HSSC NQR Qualification Packs',
      'Curriculum-to-industry discrepancy detection',
      'Instant generation of tailored remediation roadmap'
    ],
    benchmarkMetric: { label: 'Accuracy Index', value: '94.8% Curricular Match' }
  },
  {
    step: '03',
    title: 'Targeted 15-Minute Micro-Bridge Courses',
    subtitle: 'Suggests short training modules so students can improve weak skills before applying.',
    icon: 'biotech',
    badge: 'Phase 3: Bridge',
    color: 'amber',
    description: 'Interactive 15-minute micro-courses built directly by Ayush pharmaceutical R&D labs and industry preceptors covering Schedule T GMP, HPTLC standardization, and clinical protocols.',
    highlights: [
      '15-minute bite-sized practical sprints',
      'Built and verified by Ayush pharma R&D leaders',
      'Unlocks verified digital badges upon completion'
    ],
    benchmarkMetric: { label: 'Course Format', value: '15-Min Focused Sprints' }
  },
  {
    step: '04',
    title: 'Smart Matching & 1-Click Apply',
    subtitle: 'Automatically matches eligible students with internships and jobs across 7,345+ Ayush companies.',
    icon: 'verified',
    badge: 'Phase 4: 1-Click Apply',
    color: 'emerald',
    description: 'Frictionless 1-click application system with automated skill threshold filtering. Slashes hiring cycles from 10 weeks to 6 weeks for 42,000+ BAMS graduates.',
    highlights: [
      '1-click apply with 100% SHA-256 verifiable portfolio',
      'Direct talent pipeline to India\'s 7,345+ licensed pharmacies',
      'Eliminates 900,000+ paper A4 sheets annually'
    ],
    benchmarkMetric: { label: 'Placement Speedup', value: '40% Faster (6 Wks)' }
  }
];

export const PLATFORM_FEATURES = [
  {
    id: 'centralized-platform',
    title: 'Centralized Ayush Web Platform',
    icon: 'hub',
    description: 'Single portal connecting students, colleges, and companies for standardized skill testing, gap analysis, and verified hiring.',
    category: 'Core Infrastructure',
    badge: 'Unified Ecosystem'
  },
  {
    id: 'skill-testing-gap',
    title: 'Skill Testing & Gap Analysis',
    icon: 'quiz',
    description: 'Dynamic diagnostic tests with strict per-item timer to identify exact practical skills a student lacks compared to industry needs.',
    category: 'Assessment',
    badge: 'Timed Engine'
  },
  {
    id: 'micro-bridge-courses',
    title: 'Targeted Bridge Courses',
    icon: 'school',
    description: '15-minute practical training modules built by pharma R&D so students can improve weak skills before applying for roles.',
    category: 'Remediation',
    badge: '15-Min Modules'
  },
  {
    id: 'smart-internship-matching',
    title: 'Smart Internship Matching',
    icon: 'handshake',
    description: 'Automatically matches eligible candidates with internships and entry-level jobs across India\'s 7,345+ licensed Ayush manufacturers.',
    category: 'Placements',
    badge: 'Auto-Match'
  },
  {
    id: 'competency-radar',
    title: 'Visual 6-Axis Competency Radar',
    icon: 'radar',
    description: 'Maps clinical and industrial skills like Schedule T GMP and HPTLC fingerprinting to replace flat text resumes with verified proof-of-work.',
    category: 'Credibility',
    badge: '6-Axis Visual'
  },
  {
    id: 'app-first-mobile',
    title: 'App-First Mobile Interface',
    icon: 'smartphone',
    description: 'Built with a native mobile UI, featuring a bottom navigation bar and zero web clutter for smooth access on any device across rural and urban India.',
    category: 'Accessibility',
    badge: 'PWA Mobile-First'
  }
];

/**
 * Industry Comparison Matrix
 * Comprehensive Ayush platform comparison against general portals.
 */
export const SYSTEM_COMPARISON_DATA = [
  { feature: 'Job and Internship Listing', skillsetu: true, aicte: true, internshala: true, linkedin: true, ncs: true },
  { feature: 'Profile and Application Tracking', skillsetu: true, aicte: true, internshala: true, linkedin: true, ncs: true },
  { feature: '1-Click Apply System', skillsetu: true, aicte: true, internshala: true, linkedin: true, ncs: true },
  { feature: 'Ayush Domain Skill Mapping', skillsetu: true, aicte: false, internshala: false, linkedin: false, ncs: false },
  { feature: 'Visual Competency Radar System', skillsetu: true, aicte: false, internshala: false, linkedin: false, ncs: false },
  { feature: 'Automated Skill-Gap Analysis', skillsetu: true, aicte: false, internshala: false, linkedin: false, ncs: false },
  { feature: 'Targeted Ayush Course Suggestions', skillsetu: true, aicte: false, internshala: false, linkedin: false, ncs: false },
  { feature: 'Verified Digital Student Portfolio', skillsetu: true, aicte: false, internshala: false, linkedin: false, ncs: false },
  { feature: 'College and Industry Analytics Dashboard', skillsetu: true, aicte: true, internshala: false, linkedin: false, ncs: false },
  { feature: 'Industry-Academia Collaboration Hub', skillsetu: true, aicte: true, internshala: false, linkedin: false, ncs: true },
];

export const SAMPLE_STUDENTS = [
  {
    id: 'priya',
    name: 'Priya Sharma',
    degree: 'BAMS Final Year Scholar',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    readinessScore: 88,
    verifiedStatus: 'Verified Ayush Dossier',
    avatar: priyaAvatar,
    assessments: [
      { name: 'Schedule T GMP Compliance', score: '94/100', icon: 'verified', status: 'Passed' },
      { name: 'HPTLC Standardization Assay', score: '88/100', icon: 'biotech', status: 'Passed' },
      { name: 'Nadi Pariksha Clinical Protocol', score: '92/100', icon: 'ecg_heart', status: 'Completed' }
    ]
  },
  {
    id: 'kabir',
    name: 'Kabir Mehta',
    degree: 'BAMS Graduate Trainee',
    institution: 'Government Ayurveda College, Thiruvananthapuram',
    readinessScore: 78,
    verifiedStatus: 'Verified Ayush Dossier',
    avatar: kabirAvatar,
    assessments: [
      { name: 'Dravyaguna Herbology', score: '85/100', icon: 'local_pharmacy', status: 'Completed' },
      { name: 'Rasa Shastra Formulations', score: '72/100', icon: 'science', status: 'In Progress' }
    ]
  },
  {
    id: 'ananya',
    name: 'Dr. Ananya Varma',
    degree: 'BHMS House Surgeon',
    institution: 'Nehru Homoeopathic Medical College, New Delhi',
    readinessScore: 92,
    verifiedStatus: 'Top 5% Candidate',
    avatar: ananyaAvatar,
    assessments: [
      { name: 'Good Clinical Practices (GCP)', score: '96/100', icon: 'assignment_turned_in', status: 'Completed' },
      { name: 'Constitutional Case Taking', score: '90/100', icon: 'clinical_notes', status: 'Passed' }
    ]
  }
];

export const TRUST_METRICS = [
  { label: 'Indian Ayush Market Growth', value: '$43.4B+', subtext: 'WHO / Invest India / PIB Delhi', icon: 'trending_up' },
  { label: 'Schedule T GMP Skill Deficit', value: '55%+', subtext: 'FICCI & HSSC Industry Report', icon: 'warning' },
  { label: 'Licensed Drug Manufacturers', value: '7,345+', subtext: 'Ministry of Ayush Directory', icon: 'domain' },
  { label: 'Permitted Ayush Colleges', value: '536+', subtext: 'NCISM Permitted Seat Matrix', icon: 'school' }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What is SkillSetu and what problem does it solve?',
    answer: 'SkillSetu is the national collaboration platform developed under the Ministry of Ayush and All India Institute of Ayurveda (AIIA). It bridges the critical competency gap between academic curricula and industry requirements for 42,000+ scholars across India\'s 536+ permitted Ayush colleges and 7,345+ licensed pharmaceutical units.'
  },
  {
    id: 'faq-2',
    question: 'How does the 3-Phase Modular Pipeline work?',
    answer: 'SkillSetu executes a 3-phase progression: (1) Radar: Visual 6-axis competency radar and timed diagnostic assessment; (2) Bridge: 15-minute targeted micro-courses built by pharma R&D to close practical gaps; and (3) 1-Click Apply: Frictionless job and internship applications using verified digital dossiers.'
  },
  {
    id: 'faq-3',
    question: 'What is the 6-Axis Competency Radar?',
    answer: 'The radar replaces flat, unverified text resumes by dynamically plotting student skills across 6 high-demand axes: Schedule T GMP, HPTLC Fingerprinting, Clinical Diagnosis (Nadi Pariksha), Dravyaguna Pharmacology, Rasa Shastra Formulations, and Good Clinical Practices (GCP).'
  },
  {
    id: 'faq-4',
    question: 'How does SkillSetu assist Ayush Colleges with NAAC & NCISM compliance?',
    answer: 'Colleges access automated analytics and 1-click exportable reports specifically formatted for NAAC Criteria 3.5 (Collaborations) and Criteria 5.2 (Student Placement), as well as NCISM annual academic inspection audits.'
  },
  {
    id: 'faq-5',
    question: 'What are the 5 official user roles supported by SkillSetu?',
    answer: 'SkillSetu provides role-based access for: (1) Students (Learn & Explore), (2) Ayush Pharma Companies (Partner & Hire), (3) Faculty (Guide & Mentor), (4) Colleges (Manage & Connect), and (5) Ministry Administrators (Control & Manage).'
  },
  {
    id: 'faq-6',
    question: 'How does SkillSetu compare to general portals like LinkedIn or Internshala?',
    answer: 'Unlike general platforms, SkillSetu specializes strictly in Ayush healthcare domains. It features domain skill mapping, 6-axis radar plotting, automated skill-gap analysis, pharma-sponsored micro-bridges, and SHA-256 verifiable credentials that general job boards do not offer.'
  }
];
