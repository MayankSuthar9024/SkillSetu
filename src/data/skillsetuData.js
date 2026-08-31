/**
 * SkillSetu Domain Dataset for Smart India Hackathon 2026 (SIH26044)
 * Focus: Ayush Academia-Industry Collaboration, Competency Mapping & Placements
 * All numerical metrics represent realistic prototype/demonstration values.
 */

export const PLATFORM_METADATA = {
  name: "SkillSetu",
  nameHindi: "कौशलसेतु",
  slogan: "Bridging Ayush Academia, Skills & Industry",
  sihId: "SIH26044",
  sihYear: "2026",
  ministry: "Ministry of Ayush",
  ministryFull: "Ministry of Ayush, Government of India",
  tagline: "National Skill Mapping, Micro-Sprints, and Verified Opportunity Matching Ecosystem",
};

export const HERO_STATS = {
  studentReadiness: 78,
  skillMatch: 92,
  verifiedSkillsCount: 12,
  activeOpportunities: 24,
  capabilityDistribution: [
    { label: "Technical & Analytical", value: 85, color: "#10B981" },
    { label: "Clinical Diagnostics", value: 78, color: "#0D5C43" },
    { label: "Research & Standardization", value: 72, color: "#D97706" },
    { label: "Regulatory & Schedule T", value: 88, color: "#3B82F6" },
    { label: "Communication & Soft Skills", value: 82, color: "#8B5CF6" },
  ],
  sampleOpportunity: {
    title: "Ayurvedic Formulation Research Intern",
    organization: "Patanjali Research Foundation / Dabur R&D",
    matchPercentage: 94,
    location: "Haridwar / Delhi NCR (Hybrid)",
    domain: "Ayurveda & Phytopharmacy",
    stipend: "₹18,000 / month",
    skillsRequired: ["HPTLC Standardization", "Schedule T GMP", "Rasa Shastra", "Phytochemistry"],
  }
};

export const FOUR_STAKEHOLDERS = [
  {
    id: "students",
    title: "Students & Scholars",
    subtitle: "Undergraduate (BAMS, BHMS, BUMS, BYNS, BSMS) & Postgraduates",
    rolePath: "Assess → Learn → Prove → Apply",
    summary: "Diagnose clinical and technical competencies, bridge identified knowledge gaps through micro-modules, demonstrate skills through practical sprint tasks, and apply directly to verified industry opportunities.",
    icon: "GraduationCap",
    accentColor: "emerald",
    keyPoints: [
      "Radar-based diagnostic skill assessment",
      "Personalized modular micro-bridge courses",
      "Hands-on industry case challenges",
      "Cryptographically verified digital portfolio"
    ]
  },
  {
    id: "institutions",
    title: "Ayush Institutions & Colleges",
    subtitle: "Universities, Apex Institutes (NIA, AIIA, IPGT&RA) & Affiliated Colleges",
    rolePath: "Monitor → Analyse → Improve → Collaborate",
    summary: "Gain aggregated real-time visibility into departmental skill deficits, placement readiness indices, curriculum alignment with industry demands, and institutional accreditation analytics.",
    icon: "Building2",
    accentColor: "primary",
    keyPoints: [
      "Real-time student competency heatmaps",
      "Department-wise skill deficit diagnosis",
      "Placement readiness tracking index",
      "Industry partnership & MoU tracking"
    ]
  },
  {
    id: "faculty",
    title: "Faculty & Academicians",
    subtitle: "Professors, Clinical Preceptors & Research Guides",
    rolePath: "Train → Research → Consult → Connect",
    summary: "Discover specialized industry Faculty Development Programs (FDPs), access sponsored research grants, engage in industrial consultancy, and align classroom pedagogy with evolving pharmaceutical standards.",
    icon: "BookOpenCheck",
    accentColor: "saffron",
    keyPoints: [
      "Industry-sponsored FDPs & GMP workshops",
      "Translational research & grant portals",
      "Consultancy & formulation advisory access",
      "Evidence-based clinical pedagogy exchange"
    ]
  },
  {
    id: "industry",
    title: "Ayush Industry & Enterprises",
    subtitle: "Pharma Manufacturers, R&D Labs, Wellness Chains & Hospitals",
    rolePath: "Discover → Challenge → Evaluate → Hire",
    summary: "Post specialized internship and job openings, deploy targeted micro-sprint challenges to evaluate real-world problem-solving abilities, and recruit pre-verified job-ready Ayush talent.",
    icon: "Briefcase",
    accentColor: "blue",
    keyPoints: [
      "Targeted competency-matched recruitment",
      "Custom micro-sprint challenge deployment",
      "Direct portfolio evidence verification",
      "Reduced time-to-hire by skipping generic filters"
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Assess",
    tag: "Diagnostic Phase",
    description: "Multi-dimensional diagnostic assessment evaluating fundamental clinical acumen, Schedule T GMP knowledge, pharmacognosy, and domain specializations.",
    outcome: "Baseline competency radar profile generated.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Map",
    tag: "Intelligence Phase",
    description: "Algorithmically benchmarks individual competency against active enterprise requirements to pinpoint exact skill gaps and deficits.",
    outcome: "Transparent breakdown of strengths vs deficit areas.",
    icon: "GitFork"
  },
  {
    step: "03",
    title: "Learn",
    tag: "Bridging Phase",
    description: "Targeted, bite-sized micro-learning modules designed in collaboration with apex institutions and industry mentors to bridge specific deficits.",
    outcome: "Modular micro-courses completed at the student's pace.",
    icon: "BookOpen"
  },
  {
    step: "04",
    title: "Challenge",
    tag: "Practical Phase",
    description: "Solve practical, real-world industry micro-sprints such as formulation standardization protocols, clinical case reviews, or pharmacovigilance reports.",
    outcome: "Proof-of-work created beyond simple multiple-choice questions.",
    icon: "Flame"
  },
  {
    step: "05",
    title: "Verify",
    tag: "Credential Phase",
    description: "Peer and mentor evaluation of micro-sprint submissions generates tamper-proof, verified digital credentials attached to the student's identity dossier.",
    outcome: "Comprehensive evidence-backed portfolio dossier.",
    icon: "ShieldCheck"
  },
  {
    step: "06",
    title: "Connect",
    tag: "Opportunity Phase",
    description: "Intelligent skill-matching engine pairs verified profiles with curated internships, residency programs, clinical research fellowships, and industry roles.",
    outcome: "High-relevance applications with verified skill badges.",
    icon: "Sparkles"
  },
  {
    step: "07",
    title: "Grow",
    tag: "Continuous Evolution",
    description: "Lifelong professional trajectory tracking, continuing Ayush medical education (CME), faculty research collaborations, and national talent network participation.",
    outcome: "Ecosystem-wide talent pipeline strengthening.",
    icon: "TrendingUp"
  }
];

export const CORE_BENTO_FEATURES = [
  {
    id: "skill-intelligence",
    size: "large",
    title: "Diagnostic Skill Intelligence & Radar Mapping",
    eyebrow: "01 · Competency Diagnosis",
    description: "Evaluates multi-dimensional Ayush competencies across 6 core pillars: Phytochemistry, Classical Formulations, Schedule T GMP, Clinical Diagnostics, Research Methodology, and Regulatory Compliance.",
    badge: "Interactive Radar Engine",
    radarMetrics: [
      { subject: "Schedule T GMP", score: 85, benchmark: 70 },
      { subject: "Phytochemistry", score: 78, benchmark: 65 },
      { subject: "Classical Formulations", score: 92, benchmark: 80 },
      { subject: "Clinical Diagnostics", score: 80, benchmark: 75 },
      { subject: "Pharmacovigilance", score: 88, benchmark: 70 },
      { subject: "Biostatistics", score: 72, benchmark: 60 }
    ],
    actionText: "Simulate Assessment"
  },
  {
    id: "opportunity-hub",
    size: "medium",
    title: "Curated Ayush Opportunity & Internship Hub",
    eyebrow: "02 · Centralized Board",
    description: "Direct access to pre-vetted internships, clinical fellowships, R&D roles, and quality assurance positions across leading Ayush enterprises and research bodies.",
    badge: "24+ Verified Openings",
    openings: [
      { role: "Phytochemical Standardization Fellow", org: "Dabur Research & Development", match: 96, stipend: "₹22,000/mo" },
      { role: "Classical Formulation Quality Trainee", org: "Baidyanath Ayurved Bhawan", match: 91, stipend: "₹18,500/mo" },
      { role: "Clinical Panchakarma Resident", org: "Kottakkal Arya Vaidya Sala", match: 88, stipend: "₹25,000/mo" }
    ],
    actionText: "Browse Opportunities"
  },
  {
    id: "verified-portfolio",
    size: "medium",
    title: "Evidence-Backed Student Digital Portfolio",
    eyebrow: "03 · Digital Identity",
    description: "A tamper-evident digital dossier containing verifiable project artifacts, laboratory test protocols, clinical case audits, and micro-sprint submissions.",
    badge: "Verifiable Badges",
    highlight: "“Don’t just list your skills. Prove them with tangible evidence.”",
    actionText: "View Sample Dossier"
  },
  {
    id: "faculty-portal",
    size: "medium",
    title: "Faculty Development & Industry Mentorship",
    eyebrow: "04 · Faculty Portal",
    description: "Empowering educators with continuous exposure to modern industrial instrumentation, NABL/NABH protocols, FDPs, and sponsored research initiatives.",
    badge: "FDPs & Grants",
    actionText: "Explore Faculty Cohorts"
  },
  {
    id: "institutional-analytics",
    size: "large",
    title: "Institutional Deficit & Placement Analytics",
    eyebrow: "05 · Institutional Intelligence",
    description: "Comprehensive administration dashboards for colleges and the Ministry of Ayush to inspect state-level talent trends, syllabus deficits, and placement conversion rates.",
    badge: "Jury-Ready Heatmap",
    stats: [
      { label: "College Readiness Index", val: "82.4%", change: "+14% YoY" },
      { label: "Active Industry MoUs", val: "148+", change: "National" },
      { label: "Internship Conversion", val: "91.2%", change: "Verified" }
    ],
    actionText: "View Analytics"
  }
];

export const MICRO_SPRINT_CASE_STUDY = {
  id: "ms-01",
  title: "Standardization of Triphala Churna Extract via HPTLC Fingerprinting",
  enterprise: "Ayush Pharma R&D Network",
  domain: "Ayurvedic Phytopharmacy & QC",
  difficulty: "Intermediate",
  estimatedTime: "3 to 4 Hours",
  objective: "Design and execute a high-performance thin-layer chromatography (HPTLC) protocol to quantify gallic acid marker in a commercial Triphala formulation in compliance with Ayush Pharmacopoeia standards.",
  steps: [
    {
      num: "01",
      name: "Industry Case Setup",
      detail: "Review real-world batch failure data where tannin marker deviation was flagged in QC."
    },
    {
      num: "02",
      name: "Protocol Formulation",
      detail: "Select mobile phase (Toluene:Ethyl Acetate:Formic Acid) and wavelength absorption calibration."
    },
    {
      num: "03",
      name: "Data Submission",
      detail: "Upload chromatogram interpretation sheet, Rf calculation, and standard error tolerance report."
    },
    {
      num: "04",
      name: "Automated & Peer Audit",
      detail: "Rubric-based evaluation validates accuracy against the official Pharmacopoeia benchmark."
    },
    {
      num: "05",
      name: "Badge Issued",
      detail: "Verifiable digital credential added directly to student's SkillSetu portfolio."
    }
  ]
};

export const AYUSH_DOMAINS = [
  {
    id: "ayurveda",
    name: "Ayurveda",
    sanskrit: "आयुर्वेदः",
    tagline: "The Science of Life & Longevity",
    keyAreas: ["Dravyaguna (Pharmacognosy)", "Rasa Shastra (Herbomineral Formulation)", "Panchakarma Clinical Protocols", "Schedule T GMP Standards"],
    roles: ["Ayurvedic Clinical Researcher", "QC Formulation Specialist", "Panchakarma Physician"],
    icon: "Leaf"
  },
  {
    id: "yoga",
    name: "Yoga & Naturopathy",
    sanskrit: "योग एवं प्राकृतिक चिकित्सा",
    tagline: "Holistic Health, Mind-Body Science & Naturopathy",
    keyAreas: ["Therapeutic Yoga Protocols", "Hydrotherapy & Dietetics", "Lifestyle Disease Management", "Stress Biofeedback Assessment"],
    roles: ["Clinical Naturopath", "Therapeutic Yoga Consultant", "Wellness Center Director"],
    icon: "Sun"
  },
  {
    id: "unani",
    name: "Unani Medicine",
    sanskrit: "طب یونانی",
    tagline: "Humoral Equilibrium & Natural Therapeutics",
    keyAreas: ["Ilmul Advia (Pharmacology)", "Moalajat (Clinical Medicine)", "Ilaj-bit-Tadbeer (Regimenal Therapy)", "Standardization of Kushta"],
    roles: ["Unani Medical Officer", "Herbal Extract Researcher", "Regimenal Specialist"],
    icon: "Flower2"
  },
  {
    id: "siddha",
    name: "Siddha Medicine",
    sanskrit: "சித்த மருத்துவம்",
    tagline: "Ancient Dravidian Herbomineral Science",
    keyAreas: ["Gunapadam (Pharmacology)", "Maruthuvam (Clinical Practice)", "Muppu Preparation Protocols", "Varmam Therapy"],
    roles: ["Siddha Formulation Technologist", "Varmam Therapist", "Marine Herbology Analyst"],
    icon: "Sparkle"
  },
  {
    id: "homoeopathy",
    name: "Homoeopathy",
    sanskrit: "होम्योपैथी",
    tagline: "Similia Similibus Curentur & Potentization",
    keyAreas: ["Organon of Medicine", "Materia Medica", "Homoeopathic Pharmacy Protocols", "Clinical Repertorization"],
    roles: ["Homoeopathic Pharmacopoeia Analyst", "Clinical Repertorist", "Quality Assay Executive"],
    icon: "Droplets"
  },
  {
    id: "tech-pharma",
    name: "Ayush Tech & Formulation",
    sanskrit: "आयुष जैव-प्रौद्योगिकी",
    tagline: "Phytochemistry, Modern QC & Digital Health",
    keyAreas: ["HPLC & LC-MS Fingerprinting", "Ayush Health Informatics", "Schedule M/T Plant Compliance", "Pre-clinical Animal Trials"],
    roles: ["Phytochemistry Analyst", "Ayush EHR Informatics Developer", "Clinical Trial Coordinator"],
    icon: "Microscope"
  }
];

export const DEMO_STUDENT_PROFILE = {
  name: "Aarav Sharma",
  title: "Ayush Research & Formulation Scholar",
  college: "National Institute of Ayurveda (NIA), Jaipur",
  degree: "BAMS Final Year (Batch of 2026)",
  overallReadiness: 87,
  verifiedSkills: [
    { name: "Schedule T GMP Compliance", level: "Expert", verifiedBy: "Ministry-Approved Enterprise Audit" },
    { name: "Phytochemical HPTLC Standardization", level: "Advanced", verifiedBy: "Micro-Sprint #AY-204" },
    { name: "Dravyaguna Botanical Identification", level: "Mastery", verifiedBy: "NIA Departmental Assessment" },
    { name: "Clinical Case Documentation", level: "Proficient", verifiedBy: "Apex Hospital Internship" },
    { name: "Ayush Pharmacovigilance Protocols", level: "Advanced", verifiedBy: "National Pharmacovigilance Program" }
  ],
  certificationsCount: 3,
  projectsCount: 5,
  challengesCompleted: 8,
  verificationHash: "0x9F4C...B28E (Tamper-Proof SIH Hash)",
  recentSprint: "Triphala Extract HPTLC Standardization — Scored 94/100 (Top 5% Cohort)"
};

export const MATCHING_FACTORS = [
  { factor: "Technical Skill Proficiency (GMP, HPTLC)", weight: "30%", candidateScore: 96 },
  { factor: "Ayush Domain Knowledge (BAMS Classical)", weight: "25%", candidateScore: 92 },
  { factor: "Practical Micro-Sprint Portfolio Evidence", weight: "20%", candidateScore: 95 },
  { factor: "Certified Compliance (Schedule T / NABL)", weight: "15%", candidateScore: 90 },
  { factor: "Geographic & Availability Fit", weight: "10%", candidateScore: 98 }
];

export const APEX_COLLEGES_DEMO = [
  { name: "National Institute of Ayurveda (NIA)", city: "Jaipur", state: "Rajasthan", activeStudents: "640+", readiness: "89%" },
  { name: "All India Institute of Ayurveda (AIIA)", city: "New Delhi", state: "Delhi", activeStudents: "520+", readiness: "92%" },
  { name: "Institute of Teaching and Research in Ayurveda (ITRA)", city: "Jamnagar", state: "Gujarat", activeStudents: "480+", readiness: "88%" },
  { name: "Faculty of Ayurveda, IMS, BHU", city: "Varanasi", state: "Uttar Pradesh", activeStudents: "710+", readiness: "91%" },
  { name: "National Institute of Homoeopathy (NIH)", city: "Kolkata", state: "West Bengal", activeStudents: "450+", readiness: "86%" },
  { name: "National Institute of Unani Medicine (NIUM)", city: "Bengaluru", state: "Karnataka", activeStudents: "390+", readiness: "87%" }
];
