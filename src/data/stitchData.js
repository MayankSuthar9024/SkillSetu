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
    title: 'Standardized Clinical Assessments',
    subtitle: 'Evaluate practical and clinical competencies against national Ayush benchmarks.',
    icon: 'assignment',
    badge: 'Baseline Assessment',
    color: 'emerald',
    description: 'Students complete structured micro-evaluations tailored to their specific medical stream (BAMS, BNYS, BUMS, BSMS, BHMS) benchmarking diagnostic skills against clinical standards.',
    highlights: [
      'National NCISM & NCH curriculum alignment',
      'Clinical scenario & case-taking simulations',
      'Instant diagnostic score computation'
    ],
    demoMetric: { label: 'Evaluation Format', value: '25 Min Modules' }
  },
  {
    step: '02',
    title: 'Competency Gap Analysis',
    subtitle: 'Detailed breakdown of diagnostic strengths and priority learning areas.',
    icon: 'insights',
    badge: 'Gap Analysis',
    color: 'teal',
    description: 'Our diagnostic benchmarking engine analyzes student performance against industry criteria, highlighting specific clinical competencies that require advancement.',
    highlights: [
      'Competency radar across 12+ clinical dimensions',
      'Objective clinical readiness score (0-100%)',
      'Targeted skill enhancement roadmap'
    ],
    demoMetric: { label: 'Benchmark Precision', value: '94.8%' }
  },
  {
    step: '03',
    title: 'Practical Micro-Sprints',
    subtitle: 'Hands-on practical modules mentored by senior practitioners.',
    icon: 'biotech',
    badge: 'Hands-on Sprint',
    color: 'amber',
    description: 'Participate in structured 1 to 2-week practical sprints. Practice case analysis, herbal formulation compliance, and modern clinic protocols with senior practitioner guidance.',
    highlights: [
      'Standardized review from verified senior practitioners',
      'Real clinical case analysis submissions',
      'Hands-on formulation and protocol practice'
    ],
    demoMetric: { label: 'Active Modules', value: '120+' }
  },
  {
    step: '04',
    title: 'Verified Digital Dossier',
    subtitle: 'Connect with healthcare employers using authenticated credentials.',
    icon: 'verified',
    badge: 'Employer Matching',
    color: 'emerald',
    description: 'Generate an authenticated SkillSetu digital dossier. Ayush hospitals, pharmaceutical labs, and wellness centers review verified practical competency scores for placements.',
    highlights: [
      'Standardized verification for hospital and industry partners',
      'Verifiable QR credentials for clinical portfolios',
      'Direct candidate shortlisting by readiness index'
    ],
    demoMetric: { label: 'Verification Speed', value: 'Real-Time' }
  }
];

export const PLATFORM_FEATURES = [
  {
    id: 'verified-passport',
    title: 'Verified Digital Dossier',
    icon: 'verified_user',
    description: 'Cryptographically verifiable digital credential summarizing authenticated clinical competencies, assessment scores, and sprint achievements.',
    category: 'Credibility',
    badge: 'Verifiable'
  },
  {
    id: 'competency-gap-mapping',
    title: 'Competency Gap Mapping',
    icon: 'analytics',
    description: 'Real-time diagnostic algorithms that benchmark candidate performance against current clinical demands across all 5 Ayush streams.',
    category: 'Intelligence',
    badge: 'Standardized'
  },
  {
    id: 'micro-sprints',
    title: 'Clinical Micro-Sprints',
    icon: 'sprint',
    description: 'Structured 2-week practical modules aligned with Ayush wellness centers, research laboratories, and pharmaceutical facilities.',
    category: 'Practical Skills',
    badge: 'Hands-On'
  },
  {
    id: 'employer-connect',
    title: 'Direct Industry Matching',
    icon: 'handshake',
    description: 'Direct pipeline connecting qualified candidates with Ayush hospital networks, wellness centers, and research foundations.',
    category: 'Career Growth',
    badge: 'Direct Match'
  },
  {
    id: 'institutional-dashboard',
    title: 'Institutional Analytics Desk',
    icon: 'domain',
    description: 'Comprehensive workspace for college deans and faculty to monitor batch competency curves and curriculum alignment.',
    category: 'Academia',
    badge: 'Institutional'
  },
  {
    id: 'expert-mentorship',
    title: 'Senior Practitioner Network',
    icon: 'clinical_notes',
    description: 'Structured clinical feedback from experienced Vaidyas, Hakeems, Doctors, and Naturopaths across India.',
    category: 'Mentorship',
    badge: 'Clinical Guidance'
  }
];

export const SAMPLE_STUDENTS = [
  {
    id: 'priya',
    name: 'Priya Sharma',
    degree: 'BAMS Final Year',
    institution: 'National Institute of Ayurveda, Jaipur',
    readinessScore: 85,
    verifiedStatus: 'Verified Profile',
    avatar: '/images/priya_avatar.jpg',
    assessments: [
      { name: 'Clinical Assessment', score: 'Passed (Advanced)', icon: 'psychiatry', status: 'Completed' },
      { name: 'Pharmacology (Dravyaguna)', score: '88/100', icon: 'local_pharmacy', status: 'Passed' },
      { name: 'Nadi Pariksha Protocol', score: '92/100', icon: 'pulse_alert', status: 'Completed' }
    ]
  },
  {
    id: 'kabir',
    name: 'Kabir Mehta',
    degree: 'BAMS Final Year Scholar',
    institution: 'Government Ayurveda College, Trivandrum',
    readinessScore: 78,
    verifiedStatus: 'Verified Profile',
    avatar: '/images/kabir_avatar.jpg',
    assessments: [
      { name: 'Diagnostic Skills', score: '85/100', icon: 'insights', status: 'Completed' },
      { name: 'Treatment Protocols', score: '72/100', icon: 'medical_services', status: 'In Progress' }
    ]
  },
  {
    id: 'ananya',
    name: 'Dr. Ananya Varma',
    degree: 'BHMS House Surgeon',
    institution: 'Nehru Homoeopathic Medical College, Delhi',
    readinessScore: 92,
    verifiedStatus: 'Top 5% Candidate',
    avatar: '/images/ananya_avatar.jpg',
    assessments: [
      { name: 'Repertory Analysis', score: '96/100', icon: 'science', status: 'Completed' },
      { name: 'Constitutional Case Taking', score: '90/100', icon: 'clinical_notes', status: 'Passed' }
    ]
  }
];

export const TRUST_METRICS = [
  { label: 'Registered Candidates', value: '1,000+', icon: 'group' },
  { label: 'Standardized Competencies', value: '50+', icon: 'assignment' },
  { label: 'Partner Healthcare Networks', value: '20+', icon: 'handshake' },
  { label: 'Average Competency Growth', value: '+34%', icon: 'trending_up' }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What is SkillSetu and how does it benefit Ayush students?',
    answer: 'SkillSetu is a national skill benchmarking and placement ecosystem built for Ayush candidates (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). It allows students to benchmark their practical competencies, bridge skill gaps through guided micro-sprints, earn digital dossiers, and connect with healthcare employers.'
  },
  {
    id: 'faq-2',
    question: 'How is the Skill Readiness Score calculated?',
    answer: 'Our standardized evaluation engine uses adaptive micro-assessments aligned with NCISM & NCH national curricula. It measures diagnostic skills, classical herbology/pharmacology, treatment protocols, and case-taking accuracy to compute an objective 0–100% readiness score.'
  },
  {
    id: 'faq-3',
    question: 'What is a Verified Digital Dossier?',
    answer: 'The SkillSetu Digital Dossier is an authenticated credential containing your verified competency scores, micro-sprint records, and practical clinical evaluations. Healthcare employers can review this dossier to evaluate candidate suitability.'
  },
  {
    id: 'faq-4',
    question: 'How do practical Micro-Sprints work?',
    answer: 'Micro-sprints are short, intensive 1 to 2-week practical modules aligned with Ayush hospitals, research institutes, and pharmaceutical laboratories. They provide hands-on experience in real-world clinical and formulation scenarios.'
  },
  {
    id: 'faq-5',
    question: 'How can Ayush colleges participate?',
    answer: 'Ayush medical colleges receive access to an Institutional Analytics Dashboard. Faculty and Deans can track batch performance, evaluate curriculum alignment with industry demands, and support student placement readiness.'
  },
  {
    id: 'faq-6',
    question: 'How do stakeholders access their workspaces?',
    answer: 'Students, Companies, Faculty, Colleges, and Ministry Administrators can log in through their dedicated stakeholder portals using official credentials.'
  }
];
