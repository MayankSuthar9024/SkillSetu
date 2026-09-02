/**
 * 5 Stakeholder Portals Data for SkillSetu (SIH 2026 - SIH26044)
 * Official Stakeholder Configurations & Workflows.
 */

export const PORTALS_DATA = [
  {
    id: "student",
    title: "Student",
    subtitle: "Scholars & Graduates",
    description: "Diagnostic assessments, bridge courses, and 1-click verified job applications.",
    buttonText: "Select Student",
    iconName: "GraduationCap",
    accentBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    borderColor: "border-emerald-200/80",
    buttonStyle: "bg-[#e5ede9] text-[#2d5244] hover:bg-emerald-800 hover:text-white border border-emerald-900/10",
    profileUser: {
      name: "Aarav Sharma",
      role: "Student Scholar",
      id: "NIA/AY/2026/0491",
      email: "aarav.sharma@nia.ac.in",
      institution: "National Institute of Ayurveda (NIA), Jaipur",
      degree: "BAMS (Final Year)",
      readiness: "88%",
      verifiedBadges: 6,
      avatar: "AS"
    },
    defaultCredentials: {
      identifier: "aarav.sharma@nia.ac.in",
      password: "AyushSecure#2026",
      otp: "529182"
    },
    authFields: {
      idLabel: "Student Roll No / ABHA ID / Email",
      idPlaceholder: "e.g., NIA/AY/2026/0491 or ABHA-9921-3412",
      secretLabel: "Password / Security PIN",
      secretPlaceholder: "••••••••••••"
    }
  },
  {
    id: "company",
    title: "Company",
    subtitle: "Enterprises & R&D Labs",
    description: "Explore candidate talent pools, manage job vacancies, and manage applicant ATS pipelines.",
    buttonText: "Select Company",
    iconName: "Building2",
    accentBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    borderColor: "border-emerald-200/80",
    buttonStyle: "bg-[#e5ede9] text-[#2d5244] hover:bg-emerald-800 hover:text-white border border-emerald-900/10",
    profileUser: {
      name: "Dr. Vikram Sethi",
      role: "Industry Recruiter & R&D Lead",
      id: "EMP-DABUR-QC-89",
      email: "recruitment.rd@dabur.com",
      institution: "Dabur Research & Development Center",
      activeListings: 5,
      shortlistedCandidates: 28,
      avatar: "VS"
    },
    defaultCredentials: {
      identifier: "recruitment.rd@dabur.com",
      password: "DaburPartner#891",
      otp: "741903"
    },
    authFields: {
      idLabel: "Corporate Work Email / Partner ID",
      idPlaceholder: "e.g., talent@dabur.com / AY-ENT-902",
      secretLabel: "Corporate Access Key",
      secretPlaceholder: "••••••••••••"
    }
  },
  {
    id: "faculty",
    title: "Faculty",
    subtitle: "Professors & Preceptors",
    description: "Cohort radar analysis, micro-course authoring builder, and student mentorship desk.",
    buttonText: "Select Faculty",
    iconName: "UserCheck",
    accentBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    borderColor: "border-emerald-200/80",
    buttonStyle: "bg-[#e5ede9] text-[#2d5244] hover:bg-emerald-800 hover:text-white border border-emerald-900/10",
    profileUser: {
      name: "Prof. Meenakshi Joshi",
      role: "Professor & HOD (Dravyaguna)",
      id: "FAC-AIIA-7712",
      email: "prof.mjoshi@aiia.gov.in",
      institution: "All India Institute of Ayurveda (AIIA), New Delhi",
      coursesAuthored: 4,
      menteeCount: 142,
      avatar: "MJ"
    },
    defaultCredentials: {
      identifier: "prof.mjoshi@aiia.gov.in",
      password: "FacultyPin#7712",
      otp: "882104"
    },
    authFields: {
      idLabel: "Faculty Institutional Email / ID",
      idPlaceholder: "e.g., prof.mjoshi@aiia.gov.in",
      secretLabel: "Academic PIN / Password",
      secretPlaceholder: "••••••••••••"
    }
  },
  {
    id: "college",
    title: "College",
    subtitle: "Apex Institutes & Deans",
    description: "Institutional benchmarking, campus placement console, and NAAC accreditation audits.",
    buttonText: "Select College",
    iconName: "Landmark",
    accentBg: "bg-blue-50",
    iconColor: "text-blue-700",
    borderColor: "border-blue-200/80",
    buttonStyle: "bg-[#e5ede9] text-[#2d5244] hover:bg-emerald-800 hover:text-white border border-emerald-900/10",
    profileUser: {
      name: "Dr. Rajeshwar Pant",
      role: "Dean of Academic Affairs & Placement Head",
      id: "AISHE-C-24901",
      email: "dean.academics@nia.ac.in",
      institution: "National Institute of Ayurveda (Deemed to be University)",
      enrolledScholars: 680,
      placementRate: "91.4%",
      avatar: "RP"
    },
    defaultCredentials: {
      identifier: "AISHE-C-24901",
      password: "MasterKey#NIA26",
      otp: "904128"
    },
    authFields: {
      idLabel: "AISHE Code / College Master ID",
      idPlaceholder: "e.g., AISHE-C-24901 / NIA-JAIPUR",
      secretLabel: "Institutional Master Key",
      secretPlaceholder: "••••••••••••"
    }
  },
  {
    id: "admin",
    title: "Ministry Admin",
    subtitle: "National Ayush Command",
    description: "State-wise skill deficit map, national reports, RBAC user admin, and blockchain nodes.",
    buttonText: "Select Admin",
    iconName: "ShieldCheck",
    accentBg: "bg-purple-50",
    iconColor: "text-purple-700",
    borderColor: "border-purple-200/80",
    buttonStyle: "bg-[#064e3b] text-white hover:bg-[#043d2e] shadow-sm",
    profileUser: {
      name: "Shri Sanjay K. Verma",
      role: "Director General & National Admin",
      id: "GOI-AYUSH-SEC-01",
      email: "director.skill@ayush.gov.in",
      institution: "Ministry of Ayush, Government of India",
      activeStates: "28 States & 8 UTs",
      verifiedNodes: "14 Apex Nodes",
      avatar: "SV"
    },
    defaultCredentials: {
      identifier: "director.skill@ayush.gov.in",
      password: "ParichayGov#992",
      otp: "661092"
    },
    authFields: {
      idLabel: "Government NIC Email / Parichay SSO ID",
      idPlaceholder: "e.g., admin.ayush@nic.in / parichay.sso",
      secretLabel: "2FA Security Token / Gov Key",
      secretPlaceholder: "••••••••••••"
    }
  }
];

// Alias demoUser to profileUser for full backwards compatibility
PORTALS_DATA.forEach(portal => {
  portal.demoUser = portal.profileUser;
});

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
  activeOpportunities: 24
};
