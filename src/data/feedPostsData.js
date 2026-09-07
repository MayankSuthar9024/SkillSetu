/**
 * Central Feed Posts and Profile Dataset for SkillSetu
 * Contains rich stakeholder author profiles (Company, College, Faculty, Ministry, Student)
 * and their respective verified posts and opportunities.
 */

import aaravAvatar from '../assets/images/aarav_avatar.jpg';
import vikramAvatar from '../assets/images/vikram_avatar.jpg';
import meenakshiAvatar from '../assets/images/meenakshi_avatar.jpg';
import rajeshwarAvatar from '../assets/images/rajeshwar_avatar.jpg';
import sanjayAvatar from '../assets/images/sanjay_avatar.jpg';
import priyaAvatar from '../assets/images/priya_avatar.jpg';
import ananyaAvatar from '../assets/images/ananya_avatar.jpg';
import kabirAvatar from '../assets/images/kabir_avatar.jpg';

export const INITIAL_FEED_POSTS = [
  {
    id: 1,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'dabur-rd',
      name: 'Dabur Ayush R&D Center',
      brandName: 'Dabur Research & Development Center',
      role: 'Enterprise Partner & Recruiter',
      roleType: 'company',
      institution: 'Ghaziabad, Delhi NCR',
      location: 'Ghaziabad, Uttar Pradesh & New Delhi, India',
      avatarImage: vikramAvatar,
      avatar: 'DR',
      avatarBg: 'bg-emerald-900',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-902',
      website: 'https://www.dabur.com/ayush-rd',
      employees: '10,000+ Worldwide',
      established: '1884',
      coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80',
      bio: 'Dabur Research & Development Center is India’s premier herbal science research facility, pioneering standardizations for classical Ayurvedic formulations, HPLC marker profiling, phytopharmaceutical extraction, and clinical trial validation under Ministry of Ayush guidelines.',
      recruiter: {
        name: 'Dr. Vikram Sethi',
        title: 'Industry Recruiter & R&D Lead',
        email: 'recruitment.rd@dabur.com',
        phone: '+91 120 3982000 (Ext 402)',
        id: 'EMP-DABUR-QC-89',
        avatarImage: vikramAvatar
      },
      certifications: ['Schedule T GMP Certified', 'NABL Accredited Laboratory', 'ISO 9001:2015', 'Ministry of Ayush Corporate License'],
      stats: {
        activeOpenings: 5,
        matchedCandidates: 35,
        shortlistedScholars: 28,
        proofOfWorkAudit: '100%'
      }
    },
    time: '2 hours ago',
    title: 'Summer 2026 Intensive R&D Internship: Phytochemical Standardization & HPTLC QC',
    stipend: '₹25,000 / month',
    duration: '6 Months Intensive',
    location: 'Ghaziabad (On-site Lab)',
    openings: '15 Positions',
    eligibility: 'BAMS / B.Pharm with min 80% SkillSetu Score',
    skillsRequired: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Heavy Metal Assay', 'Phytochemistry'],
    content: 'Hands-on 6-month laboratory fellowship working on chromatographic standardization of Ashwagandha & Guduchi extracts using automated CAMAG HPTLC systems. Direct fast-track hiring into Junior QC Officer roles upon completion.',
    tags: ['DaburInternship', 'HPTLC', 'PhytoChemistry', 'ScheduleTGMP'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Dabur Phyto-Analytical Instrumentation Facility — CAMAG HPTLC Suite',
    likes: 342,
    isLiked: false,
    comments: [
      { id: 101, user: 'Aarav Sharma', avatar: 'AS', avatarImage: aaravAvatar, text: 'Submitted my verified Level 3 HPLC badge with application.', time: '1 hr ago' }
    ],
    showComments: false,
    shares: 89,
    views: '4.2k'
  },
  {
    id: 2,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'aiia-delhi',
      name: 'All India Institute of Ayurveda (AIIA)',
      brandName: 'All India Institute of Ayurveda (AIIA)',
      role: 'Apex Academic & Clinical Institute',
      roleType: 'college',
      institution: 'Sarita Vihar, New Delhi',
      location: 'Sarita Vihar, Mathura Road, New Delhi 110076',
      avatarImage: meenakshiAvatar,
      avatar: 'AI',
      avatarBg: 'bg-emerald-800',
      verified: true,
      aisheCode: 'AISHE-U-0102',
      naacRating: 'NAAC A++ Grade & NCISM Accredited',
      established: '2015',
      website: 'https://aiia.gov.in',
      dean: 'Prof. (Dr.) Meenakshi Joshi (Academic Dean)',
      coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      bio: 'All India Institute of Ayurveda (AIIA) is an autonomous apex institute under the Ministry of Ayush, dedicated to bringing synergy between traditional wisdom of Ayurveda and modern scientific diagnostic technologies across a 200-bed clinical referral hospital.',
      stats: {
        enrolledScholars: 840,
        placementRate: '94.2%',
        hospitalBeds: '200 IPD Beds',
        dailyOpdFootfall: '1,800+'
      }
    },
    time: '4 hours ago',
    title: 'Clinical Residency Internship: Inpatient Panchakarma & Metabolic Disorders Unit',
    stipend: '₹30,000 / month + Housing',
    duration: '4 Months Rotation',
    location: 'New Delhi (200-Bed IPD/OPD)',
    openings: '12 Slots',
    eligibility: 'BAMS Final Year / Interns with min 82% Diagnostic Score',
    skillsRequired: ['Nadi Pariksha', 'Snehan-Swedan', 'Panchakarma Dietetics', 'ABDM EHR'],
    content: 'Clinical immersion managing inpatient care, precision Vamana/Virechana protocols, and digital pulse-wave diagnostics under senior hospital preceptors across 400+ daily OPD patient cases.',
    tags: ['AIIAInternship', 'ClinicalAyurveda', 'Panchakarma', 'NadiPariksha'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'AIIA Clinical Diagnostic Wing & Pulse Mapping Lab',
    likes: 418,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 124,
    views: '5.8k'
  },
  {
    id: 3,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'patanjali-rd',
      name: 'Patanjali Research Foundation',
      brandName: 'Patanjali Research Institute & Divya Pharmacy',
      role: 'Botanical Division & QC Centre',
      roleType: 'company',
      institution: 'Haridwar, Uttarakhand',
      location: 'Haridwar, Uttarakhand 249405, India',
      avatarImage: rajeshwarAvatar,
      avatar: 'PR',
      avatarBg: 'bg-amber-800',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-104',
      website: 'https://www.patanjaliresearchfoundation.com',
      employees: '25,000+ Worldwide',
      established: '2006',
      coverImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1600&q=80',
      bio: 'Patanjali Research Foundation leads high-throughput herbal extract characterization, Ayurvedic pharmacopoeial monograph validation, and Asia’s largest botanical extraction manufacturing complex at Divya Pharmacy.',
      recruiter: {
        name: 'Dr. Anurag Varshney',
        title: 'Vice President & Head of R&D',
        email: 'careers.rd@patanjali.org',
        phone: '+91 1334 240008',
        id: 'EMP-PATANJALI-R01',
        avatarImage: rajeshwarAvatar
      },
      certifications: ['Schedule T GMP Certified', 'NABL Accredited Lab', 'WHO-GMP Certified Herbal Extraction', 'Ayush Premium Mark'],
      stats: {
        activeOpenings: 6,
        matchedCandidates: 42,
        shortlistedScholars: 31,
        proofOfWorkAudit: '100%'
      }
    },
    time: '6 hours ago',
    title: 'Industrial Apprentice Internship: Large-Scale GMP Extraction & Botanicals QC',
    stipend: '₹22,000 / month + Boarding',
    duration: '3 Months Practicum',
    location: 'Haridwar (Divya Pharmacy)',
    openings: '20 Openings',
    eligibility: 'BAMS / B.Pharm (Ayurveda) / BUMS / BSMS',
    skillsRequired: ['GMP Cleanroom', 'Microbiology Assay', 'Solvent Extraction', 'Batch QC'],
    content: 'Apprentice training covering supercritical extraction, Kwath spray drying, tablet compression, and heavy metal testing at Asia\'s largest herbal manufacturing complex.',
    tags: ['PatanjaliApprentice', 'IndustrialAyurveda', 'GMPCleanroom', 'BatchQC'],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Divya Pharmacy High-Capacity Botanicals Extraction Plant',
    likes: 295,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 77,
    views: '3.9k'
  },
  {
    id: 4,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'avs-kottakkal',
      name: 'Kottakkal Arya Vaidya Sala (AVS)',
      brandName: 'Vaidyaratnam P. S. Varier’s Arya Vaidya Sala',
      role: 'Heritage Center & Clinical Directorate',
      roleType: 'company',
      institution: 'Kottakkal, Malappuram, Kerala',
      location: 'Kottakkal, Malappuram District, Kerala 676503',
      avatarImage: sanjayAvatar,
      avatar: 'KV',
      avatarBg: 'bg-teal-900',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-331',
      website: 'https://www.aryavaidyasala.com',
      employees: '4,500+ Staff & Vaidyans',
      established: '1902',
      coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
      bio: 'Arya Vaidya Sala, Kottakkal is a century-old pioneer institution delivering authentic classical Ayurvedic healthcare and medicine manufacturing based strictly on Kerala classical traditions.',
      recruiter: {
        name: 'Dr. K. Muraleedharan',
        title: 'Chief Medical Superintendent & Placement Liaison',
        email: 'clinical.hr@aryavaidyasala.com',
        phone: '+91 483 2808000',
        id: 'EMP-AVS-MED-09',
        avatarImage: sanjayAvatar
      },
      certifications: ['Classical Keraleeya Panchakarma Center', 'GMP Accredited Manufacturing Units', 'NABL Certified Testing Laboratory', 'Ayush Corporate License'],
      stats: {
        activeOpenings: 4,
        matchedCandidates: 28,
        shortlistedScholars: 22,
        proofOfWorkAudit: '100%'
      }
    },
    time: '10 hours ago',
    title: 'Keraleeya Panchakarma & Classical Dravyaguna Clinical Residency',
    stipend: '₹28,000 / month + Stay',
    duration: '6 Months Immersion',
    location: 'Kottakkal & Kochi, Kerala',
    openings: '10 Positions',
    eligibility: 'BAMS Final Year & Interns (Score 80%+)',
    skillsRequired: ['Keraleeya Panchakarma', 'Bhasma Assessment', 'Herbarium Curation', 'Case Workups'],
    content: 'Shadow senior physicians handling complex neurological and rheumatological cases. Includes authentic Western Ghats medicinal plant identification and classical therapy procedures.',
    tags: ['KottakkalAVS', 'KeraleeyaPanchakarma', 'ClinicalImmersion', 'AyushHeritage'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'AVS Classical Therapy Suites & Botanical Garden',
    likes: 520,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 160,
    views: '7.1k'
  },
  {
    id: 5,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'himalaya-wellness',
      name: 'The Himalaya Wellness Company',
      brandName: 'The Himalaya Drug Company & R&D Center',
      role: 'Discovery Research & Formulation',
      roleType: 'company',
      institution: 'Makali R&D Campus, Bengaluru',
      location: 'Makali, Tumkur Road, Bengaluru 562123, Karnataka',
      avatarImage: priyaAvatar,
      avatar: 'HW',
      avatarBg: 'bg-emerald-950',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-554',
      website: 'https://www.himalayawellness.in',
      employees: '12,000+ Global Team',
      established: '1930',
      coverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
      bio: 'Himalaya Discovery Team pioneers head-to-heel wellness by validating classical Ayurvedic herbs through modern pharmaceutical pharmacology, cellular bioassays, and LC-MS/MS fingerprinting.',
      recruiter: {
        name: 'Dr. Priya Ramachandran',
        title: 'Senior Discovery Lead & Talent Partner',
        email: 'talent.discovery@himalayawellness.com',
        phone: '+91 80 6754 9999',
        id: 'EMP-HIMALAYA-BIO-14',
        avatarImage: priyaAvatar
      },
      certifications: ['US FDA cGMP Compliant (21 CFR Part 111)', 'NABL Accredited Analytics', 'Schedule T Certified Cleanroom', 'OECD GLP Certified'],
      stats: {
        activeOpenings: 5,
        matchedCandidates: 38,
        shortlistedScholars: 25,
        proofOfWorkAudit: '100%'
      }
    },
    time: '12 hours ago',
    title: 'Phyto-Formulation & Preclinical Pharmacology Research Internship',
    stipend: '₹26,000 / month + Transport',
    duration: '4 Months Project',
    location: 'Bengaluru (Hybrid Available)',
    openings: '8 Positions',
    eligibility: 'BAMS, BHMS, BSMS, M.Pharm (Ayush)',
    skillsRequired: ['Phyto-chemistry', 'In Vitro Assay', 'Stability Testing', 'Ayush GCP'],
    content: 'Assist the Discovery Team in screening herbal fractions for cellular anti-inflammatory biomarkers and syrup formulations with access to LC-MS/MS and high-content imaging labs.',
    tags: ['HimalayaWellness', 'PhytoPharma', 'PreclinicalResearch', 'Biotech'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Himalaya Discovery Laboratory — High Resolution Mass Spec',
    likes: 310,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 65,
    views: '3.6k'
  },
  {
    id: 6,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'ccrh-delhi',
      name: 'Central Council for Research in Homoeopathy (CCRH)',
      brandName: 'Central Council for Research in Homoeopathy',
      role: 'Autonomous Body, Ministry of Ayush',
      roleType: 'admin',
      institution: 'New Delhi & NIH Kolkata',
      location: 'Janakpuri, New Delhi 110058',
      avatarImage: ananyaAvatar,
      avatar: 'CH',
      avatarBg: 'bg-sky-900',
      verified: true,
      councilCode: 'CCRH-GOI-AYUSH-03',
      website: 'https://www.ccrhindia.nic.in',
      established: '1978',
      coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80',
      bio: 'CCRH is the apex autonomous research organization in Homoeopathy under the Ministry of Ayush, executing multidisciplinary clinical research, fundamental drug proving, and drug standardization across 24 institutes nationwide.',
      stats: {
        affiliatedHospitals: 24,
        activeClinicalTrials: 48,
        researchFellows: 180,
        publishedMonographs: 120
      }
    },
    time: '1 day ago',
    title: 'Homoeopathic Drug Proving & Clinical Trial Research Fellowship',
    stipend: '₹32,000 / month',
    duration: '6 Months Research',
    location: 'New Delhi & Kolkata Units',
    openings: '14 Seats',
    eligibility: 'BHMS Final Year & Interns (Score 78%+)',
    skillsRequired: ['Repertorization', 'Drug Proving', 'Clinical Data Management', 'GCP Compliance'],
    content: 'Participate in evidence-based Homoeopathic clinical trials for chronic lifestyle disorders, modern computer repertory analysis, and adverse event monitoring.',
    tags: ['HomoeopathyResearch', 'CCRH', 'BHMSInternship', 'DrugProving'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'CCRH Clinical Trial Documentation and Patient Assessment Wing',
    likes: 264,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 52,
    views: '3.1k'
  },
  {
    id: 7,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'ccrum-hyderabad',
      name: 'Central Council for Research in Unani Medicine (CCRUM)',
      brandName: 'Central Council for Research in Unani Medicine',
      role: 'Apex Research Organization',
      roleType: 'admin',
      institution: 'NRIUM, Hyderabad',
      location: 'National Research Institute of Unani Medicine, Hyderabad 500038',
      avatarImage: kabirAvatar,
      avatar: 'CU',
      avatarBg: 'bg-teal-800',
      verified: true,
      councilCode: 'CCRUM-GOI-AYUSH-04',
      website: 'https://ccrum.res.in',
      established: '1979',
      coverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
      bio: 'CCRUM is an autonomous organization under the Ministry of Ayush dedicated to scientific validation of classical Unani medicine, Ilaj-bit-Tadbeer regimental therapy, and standardized botanical pharmacology.',
      stats: {
        affiliatedHospitals: 22,
        activeClinicalTrials: 36,
        researchFellows: 140,
        publishedMonographs: 88
      }
    },
    time: '1 day ago',
    title: 'Regimental Therapy (Ilaj-bit-Tadbeer) & Ilmul Advia Clinical Internship',
    stipend: '₹28,000 / month',
    duration: '4 Months Rotation',
    location: 'Hyderabad & Srinagar Units',
    openings: '9 Slots',
    eligibility: 'BUMS Scholars & Postgraduates',
    skillsRequired: ['Hijama (Cupping)', 'Daluk (Massage)', 'Nabz Diagnosis', 'Mufradat Testing'],
    content: 'Clinical and pharmacological training in classical Unani regimental therapies for pain management, chronic musculoskeletal care, and compound formulation testing.',
    tags: ['UnaniMedicine', 'IlajBitTadbeer', 'BUMSInternship', 'CCRUM'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'CCRUM Regimental Therapy & Clinical Procedure Unit',
    likes: 198,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 44,
    views: '2.5k'
  },
  {
    id: 8,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'nis-chennai',
      name: 'National Institute of Siddha (NIS)',
      brandName: 'National Institute of Siddha (NIS)',
      role: 'Apex Siddha Academic & Hospital Body',
      roleType: 'college',
      institution: 'Tambaram Sanatorium, Chennai',
      location: 'Grand Southern Trunk Rd, Tambaram Sanatorium, Chennai, Tamil Nadu 600047',
      avatarImage: meenakshiAvatar,
      avatar: 'NS',
      avatarBg: 'bg-indigo-900',
      verified: true,
      aisheCode: 'AISHE-U-0428',
      naacRating: 'Apex National Institute, Ministry of Ayush',
      established: '2005',
      website: 'https://nischennai.org',
      dean: 'Dr. R. Meenakumari (Director)',
      coverImage: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1600&q=80',
      bio: 'National Institute of Siddha is an autonomous premier institute of the Ministry of Ayush providing tertiary clinical healthcare, PG education, and standardized Gunapadam botanical and mineral pharmaceutical research.',
      stats: {
        enrolledScholars: 320,
        placementRate: '92.8%',
        hospitalBeds: '180 IPD Beds',
        dailyOpdFootfall: '1,400+'
      }
    },
    time: '2 days ago',
    title: 'Siddha Maruthuvam & Gunapadam Standardization Internship',
    stipend: '₹27,000 / month',
    duration: '5 Months Rotation',
    location: 'Chennai, Tamil Nadu',
    openings: '7 Openings',
    eligibility: 'BSMS Scholars & Interns (Score 75%+)',
    skillsRequired: ['Naadi Thervu', 'Thailam Formulation', 'Heavy Metal Safety', 'Siddha Protocols'],
    content: 'Hospital OPD/IPD rotations and Gunapadam laboratory training covering standardized herbal-mineral drug preparations, pulse diagnosis, and outreach camps.',
    tags: ['SiddhaMedicine', 'BSMSInternship', 'Gunapadam', 'NISChennai'],
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'NIS Gunapadam Pharmacy and Quality Assurance Lab',
    likes: 223,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 49,
    views: '2.8k'
  },
  {
    id: 9,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'soukya-bengaluru',
      name: 'Soukya Holistic Health Center',
      brandName: 'SOUKYA International Holistic Health Centre',
      role: 'Integrative Medical Hospital',
      roleType: 'company',
      institution: 'Whitefield, Bengaluru',
      location: 'Soukya Road, Samethanahalli, Whitefield, Bengaluru 560067',
      avatarImage: priyaAvatar,
      avatar: 'SK',
      avatarBg: 'bg-emerald-800',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-789',
      website: 'https://www.soukya.com',
      employees: '600+ Doctors & Therapists',
      established: '2001',
      coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
      bio: 'SOUKYA is a residential integrative medical facility combining Ayurveda, Naturopathy, Homeopathy, and Yoga under qualified medical specialists across 30 organic acres.',
      recruiter: {
        name: 'Dr. Isaac Mathai',
        title: 'Chairman & Medical Director',
        email: 'careers@soukya.com',
        phone: '+91 80 2801 7000',
        id: 'EMP-SOUKYA-DIR-01',
        avatarImage: priyaAvatar
      },
      certifications: ['NABH Accredited Hospital', 'Ayush Diamond Standard Center', 'Organic Certified Botanical Cultivation'],
      stats: {
        activeOpenings: 3,
        matchedCandidates: 24,
        shortlistedScholars: 18,
        proofOfWorkAudit: '100%'
      }
    },
    time: '2 days ago',
    title: 'Integrative Medicine & Clinical Naturopathy Residential Fellowship',
    stipend: '₹35,000 / month + Cottage Stay',
    duration: '3 Months Immersion',
    location: 'Whitefield, Bengaluru',
    openings: '6 Positions',
    eligibility: 'BNYS, BAMS, BHMS Interns',
    skillsRequired: ['Hydrotherapy', 'Medical Yoga', 'Dietary Detox', 'Lifestyle Counseling'],
    content: 'Collaborate with multidisciplinary physicians, Naturopaths, and Yoga therapists in designing holistic detoxification, organic nutrition, and clinical wellness protocols.',
    tags: ['SoukyaFellowship', 'IntegrativeHealth', 'BNYSInternship', 'HolisticCare'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Soukya Integrative Treatment & Healing Centre',
    likes: 467,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 135,
    views: '6.2k'
  },
  {
    id: 10,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'charak-pharma',
      name: 'Charak Pharma & Vedistry',
      brandName: 'Charak Pharma Private Limited',
      role: 'Herbal Healthcare Exporters',
      roleType: 'company',
      institution: 'Mumbai HQ & Silvassa Plant',
      location: 'Evergreen Industrial Estate, Shakti Mills Lane, Mahalaxmi, Mumbai 400011',
      avatarImage: vikramAvatar,
      avatar: 'CP',
      avatarBg: 'bg-teal-900',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-612',
      website: 'https://charak.com',
      employees: '3,000+ Personnel',
      established: '1947',
      coverImage: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1600&q=80',
      bio: 'Charak Pharma is a leading Ayurvedic manufacturer exporting certified phytomedicines to 35+ countries adhering to strict international pharmaceutical standardization and stability guidelines.',
      recruiter: {
        name: 'Dr. Ram Shroff',
        title: 'Director of Formulations & Quality',
        email: 'qa.recruitment@charak.com',
        phone: '+91 22 2495 1414',
        id: 'EMP-CHARAK-MUM-08',
        avatarImage: vikramAvatar
      },
      certifications: ['WHO-GMP Certified Plant', 'Schedule T GMP Compliance', 'ISO 9001:2015', 'Ministry of Ayush Corporate License'],
      stats: {
        activeOpenings: 4,
        matchedCandidates: 29,
        shortlistedScholars: 21,
        proofOfWorkAudit: '100%'
      }
    },
    time: '3 days ago',
    title: 'Global Herbal Regulatory Affairs & Quality Assurance Internship',
    stipend: '₹24,000 / month',
    duration: '4 Months Project',
    location: 'Mumbai / Silvassa Plant',
    openings: '10 Openings',
    eligibility: 'BAMS / B.Pharm / Life Sciences',
    skillsRequired: ['USFDA Guidelines', 'EU Directives', 'Regulatory Documentation', 'Stability Testing'],
    content: 'Learn export compliance, US FDA cGMP (21 CFR Part 111), EU Herbal Directives, heavy metal limits validation, and stability testing protocols.',
    tags: ['CharakPharma', 'AyushExports', 'RegulatoryAffairs', 'GMPCompliance'],
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Charak Pharma Export Compliance & Documentation Center',
    likes: 288,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 61,
    views: '3.4k'
  },
  {
    id: 11,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'avp-research',
      name: 'AVP Research Foundation',
      brandName: 'AVP Research Foundation (The Arya Vaidya Pharmacy)',
      role: 'Clinical Epidemiology Unit',
      roleType: 'company',
      institution: 'Ramanathapuram, Coimbatore',
      location: '1665, Trichy Road, Ramanathapuram, Coimbatore, Tamil Nadu 641045',
      avatarImage: rajeshwarAvatar,
      avatar: 'AR',
      avatarBg: 'bg-emerald-900',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-441',
      website: 'https://avpresearch.org',
      employees: '2,800+ Across Network',
      established: '1943',
      coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
      bio: 'AVP Research Foundation is renowned for groundbreaking evidence-based clinical research in Ayurveda, leading clinical trials funded by NIH USA, CCRAS, and the Ministry of Ayush.',
      recruiter: {
        name: 'Dr. P. Ram Manohar',
        title: 'Research Director & Chief Preceptor',
        email: 'research.fellowships@avpresearch.org',
        phone: '+91 422 4322888',
        id: 'EMP-AVP-CBE-03',
        avatarImage: rajeshwarAvatar
      },
      certifications: ['DSIR Recognised SIRO', 'NABH Accredited Hospital', 'Ayush GCP Audited Clinical Trial Site', 'Schedule T Certified Units'],
      stats: {
        activeOpenings: 5,
        matchedCandidates: 33,
        shortlistedScholars: 24,
        proofOfWorkAudit: '100%'
      }
    },
    time: '3 days ago',
    title: 'Digital Tele-Ayurveda & Clinical Documentation Internship',
    stipend: '₹22,500 / month + Allowance',
    duration: '3 Months Hybrid',
    location: 'Coimbatore / Remote Hybrid',
    openings: '16 Slots',
    eligibility: 'BAMS 3rd/4th Year & Interns',
    skillsRequired: ['Tele-OPD Triage', 'NAMASTE Portal EHR', 'Prakriti Assessment', 'Case Logs'],
    content: 'Gain practical experience in telemedicine triage, NAMASTE standardized morbidity terminology data logging, and assisting senior physicians with remote consultations.',
    tags: ['TeleAyurveda', 'AVPResearch', 'DigitalHealth', 'BAMS2026'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'AVP Tele-Ayurveda Command Center and Diagnostic Hub',
    likes: 350,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 78,
    views: '4.1k'
  },
  {
    id: 12,
    isInternship: true,
    category: 'Internship',
    author: {
      id: 'baidyanath-ayurved',
      name: 'Shree Baidyanath Ayurved Bhawan',
      brandName: 'Shree Baidyanath Ayurved Bhawan Private Limited',
      role: 'Classical Rasa Shastra & Formulations',
      roleType: 'company',
      institution: 'Jhansi & Naini Plants',
      location: 'Baidyanath Bhawan, Great Nag Road, Nagpur & Jhansi Units',
      avatarImage: sanjayAvatar,
      avatar: 'BA',
      avatarBg: 'bg-amber-900',
      verified: true,
      partnerId: 'AYUSH-ENT-2026-218',
      website: 'https://baidyanath.co.in',
      employees: '6,000+ Workers & Pharmacists',
      established: '1917',
      coverImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1600&q=80',
      bio: 'Baidyanath is a legendary Ayurvedic formulations enterprise preserving classical Rasa Shastra metal-mineral purifications (Shodhana) and Bhasma preparations with modern ICP-MS safety verification.',
      recruiter: {
        name: 'Dr. Suresh Sharma',
        title: 'Managing Director & Formulations Lead',
        email: 'qc.apprentices@baidyanath.com',
        phone: '+91 510 2441201',
        id: 'EMP-BAIDYA-JHS-01',
        avatarImage: sanjayAvatar
      },
      certifications: ['Schedule T GMP Certified Heavy Industrial Complex', 'NABL Testing Laboratory', 'Ayush Premium Mark', 'Ministry of Ayush Corporate License'],
      stats: {
        activeOpenings: 4,
        matchedCandidates: 26,
        shortlistedScholars: 20,
        proofOfWorkAudit: '100%'
      }
    },
    time: '4 days ago',
    title: 'Classical Rasa Shastra & Herbomineral Processing Internship',
    stipend: '₹21,000 / month + Quarters',
    duration: '3 Months Practicum',
    location: 'Jhansi / Patna Plants',
    openings: '12 Positions',
    eligibility: 'BAMS & B.Pharm (Ayurveda)',
    skillsRequired: ['Bhasma Pariksha', 'Puta Heating', 'Shodhana Cleansing', 'Metal Limits Assay'],
    content: 'Hands-on practical training in classical purification (Shodhana), calcination (Marana), and ICP-MS safety verification of Bhasmas and Rasayanas.',
    tags: ['Baidyanath', 'RasaShastra', 'BhasmaQC', 'ClassicalFormulation'],
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Baidyanath Traditional Puta Heating Kilns & Testing Suite',
    likes: 314,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 70,
    views: '3.7k'
  },
  {
    id: 13,
    isInternship: false,
    category: 'Skill Achievement',
    author: {
      id: 'aarav-sharma',
      name: 'Aarav Sharma',
      role: 'BAMS Final Year Scholar (Score: 88%)',
      roleType: 'student',
      institution: 'National Institute of Ayurveda, Jaipur',
      degree: 'BAMS (Final Year 2026)',
      location: 'Jaipur, Rajasthan, India',
      avatarImage: aaravAvatar,
      avatar: 'AS',
      avatarBg: 'bg-teal-700',
      verified: true,
      readinessScore: 88,
      abhaId: '91-4402-8819-2041',
      ncismReg: 'NCISM/AYU/RJ/2022/9912',
      cgpa: '8.94 / 10.0 (Honors)',
      preceptor: 'Prof. Meenakshi Joshi',
      coverImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=80',
      bio: 'Pioneering evidence-based Ayurvedic medicine, digital Nadi Pariksha diagnostics, and botanical extraction HPLC standardization. Fast-tracking Ayush academic research to clinical industry applications.',
      stats: {
        readinessScore: '88%',
        verifiedBadges: 6,
        rotationsCompleted: 5,
        publications: 3
      }
    },
    time: '4 days ago',
    title: 'Earned Level 3 Certification in Herbal Standardization & HPLC QC',
    content: 'Completed the 4-week micro-sprint on Chromatographic Fingerprinting for Ashwagandha & Guduchi extracts under Dabur R&D Mentorship with verified blockchain accreditation.',
    tags: ['SkillBadge', 'Dravyaguna', 'QualityControl', 'PhytoChemistry'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'HPLC Chromatogram report verified via SkillSetu node',
    likes: 215,
    isLiked: true,
    comments: [],
    showComments: false,
    shares: 54,
    views: '2.8k'
  },
  {
    id: 14,
    isInternship: false,
    category: 'Clinical Case',
    author: {
      id: 'dr-ananya-vaidya',
      name: 'Dr. Ananya Vaidya',
      role: 'Senior Clinical Researcher & Faculty',
      roleType: 'faculty',
      institution: 'All India Institute of Ayurveda (AIIA), New Delhi',
      department: 'Kayachikitsa & Clinical Diagnostic Sciences',
      location: 'New Delhi, India',
      avatarImage: ananyaAvatar,
      avatar: 'AV',
      avatarBg: 'bg-emerald-700',
      verified: true,
      facultyId: 'FAC-AIIA-8832',
      ncismFacultyReg: 'NCISM/FAC/DL/2018/4412',
      coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      bio: 'Associate Professor of Kayachikitsa at AIIA New Delhi. Investigating radial arterial pulse waveforms, Tridosha phenotypes, and metabolic disease management through integrative Ayurvedic protocols.',
      stats: {
        menteeCount: 96,
        coursesAuthored: 3,
        researchPapers: 19,
        activeGrants: '₹48 Lakhs'
      }
    },
    time: '5 days ago',
    title: 'Standardized Nadi Pariksha Protocol for Chronic Metabolic Care',
    content: 'Concluded 12-week study comparing digital pulse wave analysis with classical Nadi Pariksha parameters in 120 metabolic syndrome patients (91.4% correlation). Open protocol available for interns.',
    tags: ['NadiPariksha', 'AyushResearch', 'MetabolicHealth', 'BAMS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Pulse wave mapping correlated with Tridosha markers',
    likes: 142,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 38,
    views: '1.4k'
  },
  {
    id: 15,
    isInternship: false,
    category: 'Research',
    author: {
      id: 'ccras-directorate',
      name: 'CCRAS Research Directorate',
      brandName: 'Central Council for Research in Ayurvedic Sciences (CCRAS)',
      role: 'Apex Ministry Body & Regulatory Directorate',
      roleType: 'admin',
      institution: 'Ministry of Ayush, New Delhi',
      location: 'CCRAS Headquarters, 61-65 Institutional Area, Janakpuri, New Delhi 110058',
      avatarImage: sanjayAvatar,
      avatar: 'CC',
      avatarBg: 'bg-emerald-800',
      verified: true,
      councilCode: 'CCRAS-GOI-AYUSH-01',
      website: 'https://ccras.nic.in',
      established: '1978',
      coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
      bio: 'CCRAS is the apex autonomous body under the Ministry of Ayush for the formulation, co-ordination, development and promotion of research on scientific lines in Ayurvedic sciences across 30 premier peripheral institutes.',
      stats: {
        accreditedColleges: '536+',
        activeSparkGrants: '₹12.4 Cr',
        pharmacovigilanceNodes: '68 Nodes',
        verifiedPractitioners: '1.2 Lakh+'
      }
    },
    time: '5 days ago',
    title: 'National Ayush Pharmacovigilance & Clinical Trial Directive Released',
    content: 'Revised GCP safety monitoring framework for polyherbal compounds is integrated into the SkillSetu Diagnostic Engine. Enrolled hospital interns receive automatic digital case accreditation.',
    tags: ['Pharmacovigilance', 'MinistryOfAyush', 'PolyherbalSafety', 'Policy'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'CCRAS Official Document Release',
    likes: 512,
    isLiked: false,
    comments: [],
    showComments: false,
    shares: 204,
    views: '8.1k'
  }
];

/**
 * Retrieve all posts authored by an entity (matches author.name or author.id)
 */
export function getPostsByAuthor(authorIdentifier) {
  if (!authorIdentifier) return [];
  const query = typeof authorIdentifier === 'string' ? authorIdentifier.toLowerCase() : '';
  return INITIAL_FEED_POSTS.filter(post => {
    const a = post.author;
    if (!a) return false;
    if (a.id && a.id.toLowerCase() === query) return true;
    if (a.name && a.name.toLowerCase().includes(query)) return true;
    if (a.brandName && a.brandName.toLowerCase().includes(query)) return true;
    return false;
  });
}

/**
 * Resolve full author profile from name, id, or partial author object
 */
export function getAuthorProfile(authorObjOrName) {
  if (!authorObjOrName) return null;

  if (typeof authorObjOrName === 'object' && authorObjOrName.roleType) {
    return authorObjOrName;
  }

  const queryName = typeof authorObjOrName === 'string' 
    ? authorObjOrName 
    : (authorObjOrName.name || authorObjOrName.institution || '');

  const matchedPost = INITIAL_FEED_POSTS.find(p => {
    const a = p.author;
    return a && (
      (a.name && a.name.toLowerCase() === queryName.toLowerCase()) ||
      (a.id && a.id.toLowerCase() === queryName.toLowerCase()) ||
      (a.brandName && a.brandName.toLowerCase() === queryName.toLowerCase())
    );
  });

  if (matchedPost) {
    return matchedPost.author;
  }

  return typeof authorObjOrName === 'object' ? authorObjOrName : null;
}
