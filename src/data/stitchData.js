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
    title: 'Skill Assessment & Diagnostic Tests',
    subtitle: 'Evaluate your clinical and theoretical competencies with standardized Ayush modules.',
    icon: 'assignment',
    badge: 'Baseline Evaluation',
    color: 'emerald',
    description: 'Students complete adaptive micro-evaluations tailored to their specific discipline (BAMS, BNYS, BUMS, BSMS, BHMS). Benchmark your practical skills against national clinical standards.',
    highlights: [
      'NCISM & NCH curriculum alignment',
      'Clinical scenario & case-taking simulations',
      'Real-time automated diagnostic feedback'
    ],
    demoMetric: { label: 'Avg Assessment Duration', value: '25 Mins' }
  },
  {
    step: '02',
    title: 'AI Gap Analysis & Personalized Path',
    subtitle: 'Receive a granular breakdown of skill strengths and target improvement areas.',
    icon: 'insights',
    badge: 'Intelligent Insights',
    color: 'teal',
    description: 'Our proprietary AI algorithm compares your performance with current Ayush hospital and industry hiring benchmarks, recommending targeted micro-sprints to bridge gaps.',
    highlights: [
      'Competency radar across 12+ clinical dimensions',
      'Instant readiness percentage calculation',
      'Customized learning sprint recommendations'
    ],
    demoMetric: { label: 'Gap Precision Score', value: '94.8%' }
  },
  {
    step: '03',
    title: 'Practical Micro-Sprints & Mentorship',
    subtitle: 'Complete short, industry-backed practical projects with expert guidance.',
    icon: 'biotech',
    badge: 'Hands-on Sprint',
    color: 'amber',
    description: 'Engage in 1 to 2-week hands-on learning sprints led by senior practitioners and industry partners. Practice case analysis, herbal formulation compliance, or wellness clinic management.',
    highlights: [
      '1-on-1 feedback from verified Ayush experts',
      'Real clinical case study submissions',
      'Peer collaboration and practitioner networking'
    ],
    demoMetric: { label: 'Micro-Sprint Modules', value: '120+' }
  },
  {
    step: '04',
    title: 'Verified Digital Passport & Job Matching',
    subtitle: 'Showcase tamper-proof credentials directly to top Ayush employers and research centers.',
    icon: 'verified',
    badge: 'Career Placement',
    color: 'emerald',
    description: 'Earn a blockchain-verifiable SkillSetu Digital Passport. Employers can filter and recruit job-ready candidates based on proven competency scores rather than just marks.',
    highlights: [
      'Direct interview invites from 200+ partner clinics & hospitals',
      'Tamper-proof verifiable QR code profile',
      'Smart job matching based on readiness score'
    ],
    demoMetric: { label: 'Employer Match Rate', value: '3.4x Faster' }
  }
];

export const PLATFORM_FEATURES = [
  {
    id: 'verified-passport',
    title: 'Verified Digital Passport',
    icon: 'verified_user',
    description: 'Blockchain-backed digital skill credential summarizing verified clinical competencies, assessment scores, and micro-sprint badges.',
    category: 'Credibility',
    badge: 'Tamper-Proof'
  },
  {
    id: 'ai-gap-mapping',
    title: 'AI Competency Gap Mapping',
    icon: 'analytics',
    description: 'Real-time diagnostic algorithms that compare student performance against current industry demands in Ayurveda, Yoga, Unani, Siddha, and Homeopathy.',
    category: 'Intelligence',
    badge: 'Real-Time'
  },
  {
    id: 'micro-sprints',
    title: 'Clinical Micro-Sprints',
    icon: 'sprint',
    description: 'Short, practical 2-week modules co-created with top Ayush wellness centers, research labs, and pharmaceutical firms.',
    category: 'Practical Skills',
    badge: 'Hands-On'
  },
  {
    id: 'employer-connect',
    title: 'Direct Industry Placement',
    icon: 'handshake',
    description: 'Seamless bridge connecting top-scoring students with Ayush hospital networks, wellness resorts, research bodies, and telemedicine startups.',
    category: 'Career Growth',
    badge: 'Zero Friction'
  },
  {
    id: 'institutional-dashboard',
    title: 'Institutional Analytics Engine',
    icon: 'domain',
    description: 'Comprehensive dashboard for college deans and faculty to monitor batch performance, accreditations readiness, and curriculum alignment.',
    category: 'Academia',
    badge: 'Faculty Tool'
  },
  {
    id: 'expert-mentorship',
    title: 'Senior Practitioner Network',
    icon: 'clinical_notes',
    description: 'Access to 1-on-1 mentorship sessions with experienced Vaidyas, Hakeems, Doctors, and Naturopaths across India.',
    category: 'Mentorship',
    badge: '1-on-1 Guidance'
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
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    assessments: [
      { name: 'Clinical Assessment', score: 'Passed (Advanced)', icon: 'psychiatry', status: 'Completed' },
      { name: 'Pharmacology (Dravyaguna)', score: '88/100', icon: 'local_pharmacy', status: 'Passed' },
      { name: 'Nadi Pariksha Protocol', score: '92/100', icon: 'pulse_alert', status: 'Completed' }
    ]
  },
  {
    id: 'john',
    name: 'John Doe',
    degree: 'BAMS Final Year Student',
    institution: 'Government Ayurveda College, Trivandrum',
    readinessScore: 78,
    verifiedStatus: 'Verified Profile',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
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
    avatar: 'https://images.unsplash.com/photo-1594824813566-7885a6a16089?auto=format&fit=crop&q=80&w=300',
    assessments: [
      { name: 'Repertory Analysis', score: '96/100', icon: 'science', status: 'Completed' },
      { name: 'Constitutional Case Taking', score: '90/100', icon: 'clinical_notes', status: 'Passed' }
    ]
  }
];

export const TRUST_METRICS = [
  { label: 'Active Ayush Learners', value: '1,000+', icon: 'group' },
  { label: 'Standardized Skill Assessments', value: '50+', icon: 'assignment' },
  { label: 'Partner Healthcare Organizations', value: '20+', icon: 'handshake' },
  { label: 'Average Readiness Growth', value: '+34%', icon: 'trending_up' }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What is SkillSetu and how does it benefit Ayush students?',
    answer: 'SkillSetu is a national academia-industry skill mapping and placement ecosystem built for Ayush candidates (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). It allows students to benchmark their clinical competencies, bridge skill gaps through guided micro-sprints, earn tamper-proof digital passports, and directly connect with healthcare employers.'
  },
  {
    id: 'faq-2',
    question: 'How is the Skill Readiness Score calculated?',
    answer: 'Our proprietary evaluation engine uses adaptive micro-assessments aligned with NCISM & NCH national curricula. It measures diagnostic skills, classical herbology/pharmacology, treatment protocols, and case-taking accuracy to compute an objective 0–100% readiness score.'
  },
  {
    id: 'faq-3',
    question: 'What is a Verified Digital Passport?',
    answer: 'The SkillSetu Digital Passport is a tamper-proof credential containing your authenticated competency scores, micro-sprint badges, and verified clinical achievements. Employers can scan your unique QR code to instantly verify your clinical readiness.'
  },
  {
    id: 'faq-4',
    question: 'How do practical Micro-Sprints work?',
    answer: 'Micro-sprints are short, intensive 1 to 2-week practical projects co-created with leading Ayush hospitals, research institutes, and pharmaceutical labs. They provide hands-on experience in real-world clinical scenarios with 1-on-1 feedback from senior Vaidyas and doctors.'
  },
  {
    id: 'faq-5',
    question: 'How can Ayush colleges and institutes participate?',
    answer: 'Ayush medical colleges receive access to an Institutional Analytics Dashboard. Faculty and Deans can track batch performance, evaluate curriculum alignment with industry demands, and streamline clinical internship placements for their students.'
  },
  {
    id: 'faq-6',
    question: 'Is SkillSetu free for students?',
    answer: 'Yes! Core diagnostic assessments, skill gap mapping, digital passport generation, and basic micro-sprint participation are 100% free for verified Ayush undergraduate and postgraduate students.'
  }
];

