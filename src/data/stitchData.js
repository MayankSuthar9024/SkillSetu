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
    title: 'Visit the Portal',
    subtitle: 'Student arrives on the clean, accessible SkillSetu platform.',
    icon: 'travel_explore',
    badge: 'Step 1: Open Portal',
    color: 'emerald',
    description: 'Any Ayush student from any city or village can open SkillSetu on any mobile phone or computer with fast, simple, zero-confusion navigation.',
    highlights: [
      'Accessible on any mobile or desktop device',
      'Simple, clear language designed for all students',
      'Instant access without complicated steps'
    ],
    benchmarkMetric: { label: 'Platform Access', value: '100% Free & Open' }
  },
  {
    step: '02',
    title: 'Select Role & Sign In',
    subtitle: 'Choose Student role and log in with your credentials.',
    icon: 'login',
    badge: 'Step 2: Quick Sign In',
    color: 'teal',
    description: 'Select "Student" and sign in securely with your student email, ABHA ID, or college roll number to access your personal dashboard.',
    highlights: [
      'One-click role selection (Student / College / Company)',
      'Fast and secure login with OTP or password',
      'Instant access to your personalized learning workspace'
    ],
    benchmarkMetric: { label: 'Sign In Time', value: 'Under 30 Seconds' }
  },
  {
    step: '03',
    title: 'Give Skill Test & Know Skill Gap',
    subtitle: 'Take practical tests and see your exact strengths and missing skills.',
    icon: 'quiz',
    badge: 'Step 3: Test & Gap Check',
    color: 'emerald',
    description: 'Complete short, practical assessments on clinical diagnosis, Schedule T GMP, and herb assays. The system instantly reveals your exact skill gap.',
    highlights: [
      'Short, timed practical assessment questions',
      'Identifies exact clinical & lab skill gaps',
      'Clear, visual readiness score report'
    ],
    benchmarkMetric: { label: 'Gap Detection', value: 'Instant Analysis' }
  },
  {
    step: '04',
    title: 'Apply for Jobs & See Match Score',
    subtitle: 'Check job requirements, your match score, and see where skills are missing.',
    icon: 'fact_check',
    badge: 'Step 4: Smart Match',
    color: 'teal',
    description: 'Browse verified roles in top Ayush hospitals and pharma companies. See your exact % matching score and clear highlights of any missing skill.',
    highlights: [
      'Instant Match Score (e.g. 88% Match)',
      'Clear alert showing which skill is missing for the role',
      'Transparent job requirements with zero guesswork'
    ],
    benchmarkMetric: { label: 'Matching Accuracy', value: 'Real-Time Score' }
  },
  {
    step: '05',
    title: 'Get Automatic Course Suggestions',
    subtitle: 'Platform recommends 15-minute bridge courses for missing skills.',
    icon: 'school',
    badge: 'Step 5: Bridge Courses',
    color: 'emerald',
    description: 'SkillSetu automatically recommends short 15-minute practical bridge courses co-created with top Ayush pharma companies to quickly fix your missing skills.',
    highlights: [
      '15-minute bite-sized practical learning modules',
      'Co-developed by top Ayush hospitals & manufacturers',
      'Learn only the exact skills you need for the job'
    ],
    benchmarkMetric: { label: 'Course Duration', value: '15-Minute Sprints' }
  },
  {
    step: '06',
    title: 'Skill Up & Get Placed!',
    subtitle: 'Improve your score, earn verified badges, and get hired.',
    icon: 'verified',
    badge: 'Step 6: Direct Placement',
    color: 'emerald',
    description: 'Complete your bridge training, boost your readiness score to 90%+, and get directly hired by 7,345+ licensed Ayush hospitals and pharma units.',
    highlights: [
      'Instant score upgrade & verified digital badge',
      '100% verified digital portfolio',
      'Direct hiring with top Ayush recruiters without middlemen'
    ],
    benchmarkMetric: { label: 'Placement Rate', value: 'Direct 1-Click Apply' }
  }
];

export const PLATFORM_FEATURES = [
  {
    id: 'skill-testing-gap',
    title: 'Practical Skill Assessment',
    icon: 'quiz',
    description: 'Simple, timed practical tests that measure real-world clinical diagnosis, lab assay, and pharma manufacturing skills.',
    badge: 'Practical Tests'
  },
  {
    id: 'gap-detection',
    title: 'Instant Skill-Gap Report',
    icon: 'analytics',
    description: 'Clear, easy-to-understand report that highlights exactly what you know and what specific skills you need to learn.',
    badge: 'Gap Analysis'
  },
  {
    id: 'micro-bridge-courses',
    title: '15-Minute Bridge Modules',
    icon: 'school',
    description: 'Short, focused training modules built by pharma R&D leaders so you can quickly learn missing skills before applying.',
    badge: '15-Min Modules'
  },
  {
    id: 'smart-internship-matching',
    title: 'Job Match Score & Alerts',
    icon: 'fact_check',
    description: 'See your real-time matching percentage for every job and get instant alerts showing where skills are missing.',
    badge: 'Match Score'
  },
  {
    id: 'direct-placements',
    title: 'Direct Industry Placements',
    icon: 'work',
    description: 'Direct 1-click job and internship applications connecting students directly to 7,345+ verified Ayush hospitals and pharma companies.',
    badge: 'Direct Hiring'
  }
];

/**
 * 3-Platform Comparison Matrix: SkillSetu vs LinkedIn vs Internshala
 * 4 High-Impact Features
 */
export const SYSTEM_COMPARISON_DATA = [
  {
    feature: 'Ayush-Specific Practical Skill Testing & Gap Analysis',
    skillsetu: true,
    linkedin: false,
    internshala: false,
    note: 'Dynamic testing for Schedule T GMP, Nadi Pariksha, and HPTLC assays'
  },
  {
    feature: 'Real-Time Job Match Score with Missing Skill Alerts',
    skillsetu: true,
    linkedin: false,
    internshala: false,
    note: 'Shows exact % match and identifies what skills are missing before applying'
  },
  {
    feature: '15-Minute Bridge Courses to Fix Missing Skills',
    skillsetu: true,
    linkedin: false,
    internshala: false,
    note: 'Targeted micro-modules co-developed with Ayush pharma R&D'
  },
  {
    feature: 'Direct Placements with 7,345+ Ayush Hospitals & Pharma',
    skillsetu: true,
    linkedin: false,
    internshala: false,
    note: 'Direct talent pipeline with verified licensed Ayush employers'
  }
];

export const SAMPLE_STUDENTS = [
  {
    id: 'priya',
    name: 'Priya Sharma',
    degree: 'BAMS Final Year Scholar',
    institution: 'National Institute of Ayurveda (NIA), Jaipur',
    readinessScore: 88,
    verifiedStatus: 'Verified Ayush Profile',
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
    verifiedStatus: 'Verified Ayush Profile',
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
    answer: 'SkillSetu executes a 3-phase progression: (1) Radar: Visual 6-axis competency radar and timed diagnostic assessment; (2) Bridge: 15-minute targeted micro-courses built by pharma R&D to close practical gaps; and (3) 1-Click Apply: Frictionless job and internship applications using verified digital profiles.'
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
