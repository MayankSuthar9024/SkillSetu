import React, { useState } from 'react';
import {
  Users,
  Search,
  Check,
  Clock,
  Briefcase,
  Building2,
  GraduationCap,
  Download,
  TrendingUp,
  X,
  Award,
  Filter,
  Sparkles,
  MapPin,
  ExternalLink,
  FileText,
  Send,
  CheckCircle2,
  ChevronRight,
  Eye,
  Info,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  LayoutGrid,
  List
} from 'lucide-react';

export const INITIAL_COLLEGE_STUDENTS = [
  {
    id: 'stu-001',
    name: 'Aarav Sharma',
    rollNumber: 'NIA-2022-AY-042',
    ncismReg: 'NCISM/AYU/RJ/2022/9912',
    abhaId: '91-4402-8819-2041',
    program: 'BAMS (Final Year)',
    semester: '8th Semester (4th Professional)',
    batch: 'Batch 2022–2027',
    gender: 'Male',
    dob: '14 Oct 2002',
    bloodGroup: 'B+',
    email: 'aarav.sharma@nia.edu.in',
    phone: '+91 98291 44021',
    domicile: 'Jaipur, Rajasthan',
    cgpa: '8.94',
    attendance: '94.5%',
    clinicalHours: '680 Hours',
    theoryMarks: '88.2%',
    practicalMarks: '90.6%',
    preceptor: 'Prof. (Dr.) Meenakshi Joshi',
    department: 'Kayachikitsa & Shalya Tantra',
    avatar: 'AS',
    placementStatus: 'Placed',
    company: 'Dabur India Ltd',
    package: '₹8.50 LPA',
    role: 'Ayush Analytical QC Associate',
    skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Phytochemistry', 'Nadi Pariksha'],
    verifiedBadges: ['HPTLC QC Specialist (Level 3)', 'Schedule T Cleanroom GMP', 'Nadi Pariksha Clinical Diagnostics']
  },
  {
    id: 'stu-002',
    name: 'Pooja Iyer',
    rollNumber: 'NIA-2021-AY-018',
    ncismReg: 'NCISM/AYU/RJ/2021/8834',
    abhaId: '91-3310-7741-9022',
    program: 'MD Ayurveda (Dravyaguna)',
    semester: 'Final PG Year (Thesis Phase)',
    batch: 'Batch 2021–2024',
    gender: 'Female',
    dob: '22 May 1999',
    bloodGroup: 'O+',
    email: 'pooja.iyer@nia.edu.in',
    phone: '+91 98402 11984',
    domicile: 'Chennai / Jaipur Campus',
    cgpa: '9.20',
    attendance: '96.0%',
    clinicalHours: '1,240 Hours',
    theoryMarks: '91.5%',
    practicalMarks: '93.0%',
    preceptor: 'Prof. Anita Sharma',
    department: 'Dravyaguna Vigyana (Pharmacology)',
    avatar: 'PI',
    placementStatus: 'Placed',
    company: 'The Himalaya Wellness Company',
    package: '₹10.20 LPA',
    role: 'Formulations Scientist',
    skills: ['Pharmacovigilance', 'HPLC', 'Heavy Metal Assay', 'Botanical Taxonomy'],
    verifiedBadges: ['Formulations R&D Fellow', 'Pharmacovigilance Ayush GCP', 'HPLC Chromatography']
  },
  {
    id: 'stu-003',
    name: 'Sunita Patel',
    rollNumber: 'NIA-2021-AY-118',
    ncismReg: 'NCISM/AYU/RJ/2021/7721',
    abhaId: '91-5519-6632-1088',
    program: 'BAMS (Final Year)',
    semester: '8th Semester (4th Professional)',
    batch: 'Batch 2021–2026',
    gender: 'Female',
    dob: '08 Dec 2002',
    bloodGroup: 'A+',
    email: 'sunita.patel@nia.edu.in',
    phone: '+91 94140 33812',
    domicile: 'Ahmedabad / Jaipur',
    cgpa: '8.75',
    attendance: '91.0%',
    clinicalHours: '640 Hours',
    theoryMarks: '86.4%',
    practicalMarks: '89.0%',
    preceptor: 'Prof. S. N. Sharma',
    department: 'Kayachikitsa (Internal Medicine)',
    avatar: 'SP',
    placementStatus: 'Placed',
    company: 'Patanjali Research Foundation',
    package: '₹7.80 LPA',
    role: 'Clinical Research Associate',
    skills: ['Clinical Trials GCP', 'Schedule T', 'Phytopharmacy', 'Case Logs'],
    verifiedBadges: ['Clinical Trial Monitoring GCP', 'Schedule T Cleanroom']
  },
  {
    id: 'stu-004',
    name: 'Rohan Deshmukh',
    rollNumber: 'NIA-2023-AY-089',
    ncismReg: 'NCISM/AYU/RJ/2023/5541',
    abhaId: '91-7782-9901-4456',
    program: 'BAMS (3rd Year)',
    semester: '6th Semester (3rd Professional)',
    batch: 'Batch 2023–2028',
    gender: 'Male',
    dob: '19 Jul 2003',
    bloodGroup: 'AB+',
    email: 'rohan.deshmukh@nia.edu.in',
    phone: '+91 98220 54109',
    domicile: 'Nagpur, Maharashtra',
    cgpa: '8.40',
    attendance: '89.5%',
    clinicalHours: '420 Hours',
    theoryMarks: '82.5%',
    practicalMarks: '85.5%',
    preceptor: 'Prof. M. K. Meena',
    department: 'Shalya Tantra (Surgical Sciences)',
    avatar: 'RD',
    placementStatus: 'Internship',
    company: 'All India Institute of Ayurveda',
    package: '₹30,000/mo',
    role: 'Clinical Resident Intern',
    skills: ['Kayachikitsa', 'Panchakarma', 'Patient History', 'Nadi Pariksha'],
    verifiedBadges: ['Panchakarma Therapy Inpatient', 'Digital Nadi Pariksha']
  },
  {
    id: 'stu-005',
    name: 'Neha Gupta',
    rollNumber: 'NIA-2021-AY-064',
    ncismReg: 'NCISM/AYU/RJ/2021/6604',
    abhaId: '91-8843-1120-7765',
    program: 'M.Pharm (Ayurveda)',
    semester: '4th Semester (Postgraduate)',
    batch: 'Batch 2021–2024',
    gender: 'Female',
    dob: '11 Mar 2000',
    bloodGroup: 'B+',
    email: 'neha.gupta@nia.edu.in',
    phone: '+91 99100 88231',
    domicile: 'New Delhi / Jaipur',
    cgpa: '9.10',
    attendance: '95.0%',
    clinicalHours: '880 Hours',
    theoryMarks: '90.2%',
    practicalMarks: '92.4%',
    preceptor: 'Prof. Rajeshwar Pant',
    department: 'Rasa Shastra & Bhaishajya Kalpana',
    avatar: 'NG',
    placementStatus: 'Placed',
    company: 'Charak Pharma & Vedistry',
    package: '₹9.00 LPA',
    role: 'Quality Assurance Chemist',
    skills: ['Standardization', 'GLP', 'Documentation', 'WHO-GMP'],
    verifiedBadges: ['WHO-GMP Quality Assurance', 'GLP Phytochemistry Assay']
  },
  {
    id: 'stu-006',
    name: 'Kavita Reddy',
    rollNumber: 'NIA-2022-AY-055',
    ncismReg: 'NCISM/AYU/RJ/2022/4419',
    abhaId: '91-2290-4411-8832',
    program: 'BAMS (Final Year)',
    semester: '8th Semester (4th Professional)',
    batch: 'Batch 2022–2027',
    gender: 'Female',
    dob: '30 Aug 2002',
    bloodGroup: 'O-',
    email: 'kavita.reddy@nia.edu.in',
    phone: '+91 94401 22987',
    domicile: 'Hyderabad, Telangana',
    cgpa: '8.60',
    attendance: '92.0%',
    clinicalHours: '610 Hours',
    theoryMarks: '84.8%',
    practicalMarks: '87.5%',
    preceptor: 'Prof. S. N. Sharma',
    department: 'Kayachikitsa (Internal Medicine)',
    avatar: 'KR',
    placementStatus: 'Internship',
    company: 'CCRAS Regional Center',
    package: '₹30,000/mo',
    role: 'Ayush Research Intern',
    skills: ['Clinical Protocols', 'Nadi Pariksha', 'Epidemiology', 'NAMASTE EHR'],
    verifiedBadges: ['Ayush Epidemiology Fellow', 'Nadi Pariksha Level 2']
  },
  {
    id: 'stu-007',
    name: 'Vikram Joshi',
    rollNumber: 'NIA-2022-AY-072',
    ncismReg: 'NCISM/AYU/RJ/2022/3389',
    abhaId: '91-6632-8819-0012',
    program: 'BAMS (Final Year)',
    semester: '8th Semester (4th Professional)',
    batch: 'Batch 2022–2027',
    gender: 'Male',
    dob: '05 Jan 2002',
    bloodGroup: 'A+',
    email: 'vikram.joshi@nia.edu.in',
    phone: '+91 98280 77419',
    domicile: 'Udaipur, Rajasthan',
    cgpa: '7.90',
    attendance: '86.5%',
    clinicalHours: '540 Hours',
    theoryMarks: '78.5%',
    practicalMarks: '80.0%',
    preceptor: 'Prof. Rajeshwar Pant',
    department: 'Rasa Shastra & Bhaishajya Kalpana',
    avatar: 'VJ',
    placementStatus: 'Seeking',
    company: 'Emami Ayush Division',
    package: 'Interviewing',
    role: 'QC Trainee (In Pipeline)',
    skills: ['Phytochemistry', 'Rasa Shastra', 'Schedule T GMP', 'Bhasma Pariksha'],
    verifiedBadges: ['Schedule T GMP Apprentice', 'Bhasma Standardization']
  },
  {
    id: 'stu-008',
    name: 'Ananya Verma',
    rollNumber: 'NIA-2021-AY-033',
    ncismReg: 'NCISM/AYU/RJ/2021/2208',
    abhaId: '91-4401-6655-9988',
    program: 'M.Pharm (Ayurveda)',
    semester: '4th Semester (Postgraduate)',
    batch: 'Batch 2021–2024',
    gender: 'Female',
    dob: '17 Sep 2000',
    bloodGroup: 'B-',
    email: 'ananya.verma@nia.edu.in',
    phone: '+91 98110 33452',
    domicile: 'Lucknow, Uttar Pradesh',
    cgpa: '8.90',
    attendance: '93.0%',
    clinicalHours: '820 Hours',
    theoryMarks: '87.5%',
    practicalMarks: '90.2%',
    preceptor: 'Prof. Anita Sharma',
    department: 'Dravyaguna Vigyana (Pharmacology)',
    avatar: 'AV',
    placementStatus: 'Placed',
    company: 'Baidyanath Research',
    package: '₹8.20 LPA',
    role: 'Formulation Chemist',
    skills: ['HPLC', 'Extraction', 'Microbiology Assay', 'Standardization'],
    verifiedBadges: ['HPLC Analytical Method Validation', 'Microbiology Cleanroom']
  }
];

export const AVAILABLE_OPPORTUNITIES = [
  // Full-Time Roles
  {
    id: 'opp-ft-1',
    type: 'role',
    typeLabel: 'Full-Time Role',
    title: 'Ayush Analytical QC Associate',
    company: 'Dabur India Ltd',
    brandName: 'Dabur Ayush Research Center',
    logo: 'DR',
    logoBg: 'bg-emerald-900',
    location: 'Ghaziabad, Delhi NCR',
    package: '₹8.50 LPA',
    duration: 'Full-Time Permanent',
    openings: '3 Openings',
    category: 'Quality Control',
    eligibility: 'BAMS (Final Year) / B.Pharm (Ayurveda) with min 8.0 CGPA',
    skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Phytochemistry', 'NABL Protocol'],
    description: 'Lead chromatographic marker profiling for classical and proprietary Ayurvedic formulations. Collaborate with NABL accredited testing suites and conduct Schedule T GMP compliance audits.',
    recruiter: {
      name: 'Dr. Vikram Sethi',
      role: 'Head of Herbal Analytics',
      email: 'recruitment.rd@dabur.com',
      phone: '+91 120 3982000'
    },
    eligibleCount: 4
  },
  {
    id: 'opp-ft-2',
    type: 'role',
    typeLabel: 'Full-Time Role',
    title: 'Ayurvedic Formulations Scientist',
    company: 'The Himalaya Wellness Company',
    brandName: 'Himalaya Discovery R&D Campus',
    logo: 'HW',
    logoBg: 'bg-emerald-950',
    location: 'Makali, Bengaluru',
    package: '₹10.20 LPA',
    duration: 'Full-Time Permanent',
    openings: '2 Openings',
    category: 'Formulation R&D',
    eligibility: 'MD Ayurveda (Dravyaguna / Rasa Shastra) or M.Pharm (Ayush)',
    skills: ['Formulation R&D', 'HPLC', 'Pharmacovigilance', 'Heavy Metal Assay'],
    description: 'Develop novel phyto-formulations, conduct accelerated stability testing under ICH guidelines, and oversee pilot batch scaling for global export markets.',
    recruiter: {
      name: 'Dr. Priya Ramachandran',
      role: 'Talent Acquisition & Discovery Lead',
      email: 'talent.discovery@himalayawellness.com',
      phone: '+91 80 6754 9999'
    },
    eligibleCount: 3
  },
  {
    id: 'opp-ft-3',
    type: 'role',
    typeLabel: 'Full-Time Role',
    title: 'Clinical Research Associate (Ayush Trials)',
    company: 'Patanjali Research Foundation',
    brandName: 'Patanjali Research Institute',
    logo: 'PR',
    logoBg: 'bg-amber-800',
    location: 'Haridwar, Uttarakhand',
    package: '₹7.80 LPA',
    duration: 'Full-Time Permanent',
    openings: '4 Openings',
    category: 'Clinical Research',
    eligibility: 'BAMS / MD Ayurveda with clinical research exposure',
    skills: ['Clinical Trials GCP', 'Schedule T', 'Phytopharmacy', 'Patient Data Logs'],
    description: 'Coordinate multicenter clinical trials evaluating Ayurvedic protocols against chronic metabolic disorders. Interface between hospital trial sites and ethics committees.',
    recruiter: {
      name: 'Dr. Anurag Varshney',
      role: 'VP & Head of Research',
      email: 'careers.rd@patanjali.org',
      phone: '+91 1334 240008'
    },
    eligibleCount: 5
  },
  {
    id: 'opp-ft-4',
    type: 'role',
    typeLabel: 'Full-Time Role',
    title: 'Junior Ayush Medical Officer (Inpatient Care)',
    company: 'Kottakkal Arya Vaidya Sala (AVS)',
    brandName: 'Vaidyaratnam P.S. Varier AVS',
    logo: 'KV',
    logoBg: 'bg-teal-900',
    location: 'Kottakkal & Kochi, Kerala',
    package: '₹9.50 LPA',
    duration: 'Full-Time Permanent',
    openings: '3 Openings',
    category: 'Clinical Hospital',
    eligibility: 'BAMS graduates with completed clinical internship',
    skills: ['Keraleeya Panchakarma', 'Nadi Pariksha', 'Classical Dravyaguna', 'Inpatient Care'],
    description: 'Supervise authentic Keraleeya Panchakarma procedures, manage inpatient admissions, and conduct daily clinical rounds with preceptors across AVS referral hospitals.',
    recruiter: {
      name: 'Dr. K. Muraleedharan',
      role: 'Chief Medical Superintendent',
      email: 'clinical.hr@aryavaidyasala.com',
      phone: '+91 483 2808000'
    },
    eligibleCount: 4
  },
  {
    id: 'opp-ft-5',
    type: 'role',
    typeLabel: 'Full-Time Role',
    title: 'Quality Assurance & Regulatory Affairs Chemist',
    company: 'Charak Pharma & Vedistry',
    brandName: 'Charak Pharma Private Limited',
    logo: 'CP',
    logoBg: 'bg-teal-900',
    location: 'Mumbai HQ & Silvassa Plant',
    package: '₹9.00 LPA',
    duration: 'Full-Time Permanent',
    openings: '2 Openings',
    category: 'Quality Assurance',
    eligibility: 'BAMS / B.Pharm / M.Pharm (Ayurveda)',
    skills: ['USFDA 21 CFR Part 111', 'WHO-GMP', 'Standardization', 'Batch Documentation'],
    description: 'Audit finished dosage batches against WHO-GMP and international botanical quality standards. Maintain export regulatory documentation for 35+ countries.',
    recruiter: {
      name: 'Dr. Ram Shroff',
      role: 'Director of Formulations & QA',
      email: 'qa.recruitment@charak.com',
      phone: '+91 22 2495 1414'
    },
    eligibleCount: 3
  },
  {
    id: 'opp-ft-6',
    type: 'role',
    typeLabel: 'Full-Time Role',
    title: 'Rasa Shastra & Metal Limits Formulations Chemist',
    company: 'Shree Baidyanath Ayurved Bhawan',
    brandName: 'Baidyanath Research & Formulations',
    logo: 'BA',
    logoBg: 'bg-amber-900',
    location: 'Jhansi & Nagpur Units',
    package: '₹8.20 LPA',
    duration: 'Full-Time Permanent',
    openings: '2 Openings',
    category: 'Classical Formulations',
    eligibility: 'BAMS / B.Pharm (Ayurveda)',
    skills: ['Bhasma Pariksha', 'ICP-MS Safety', 'Shodhana Cleansing', 'Schedule T'],
    description: 'Execute classical Shodhana and Marana protocols on mineral and herbal ingredients. Verify safety compliance through modern ICP-MS heavy metal limits assays.',
    recruiter: {
      name: 'Dr. Suresh Sharma',
      role: 'Formulations & Manufacturing Lead',
      email: 'qc.apprentices@baidyanath.com',
      phone: '+91 510 2441201'
    },
    eligibleCount: 3
  },

  // Internships
  {
    id: 'opp-int-1',
    type: 'internship',
    typeLabel: 'Industrial Internship',
    title: 'Phytochemical Standardization & HPTLC QC Specialist',
    company: 'Dabur Ayush R&D Center',
    brandName: 'Dabur Research & Development Center',
    logo: 'DR',
    logoBg: 'bg-emerald-900',
    location: 'Ghaziabad (On-site Lab)',
    package: '₹25,000 / month',
    duration: '6 Months Intensive',
    openings: '2 Openings',
    category: 'Quality Control',
    eligibility: 'BAMS / B.Pharm with min 80% SkillSetu Score',
    skills: ['HPTLC Fingerprinting', 'Schedule T GMP', 'Heavy Metal Assay', 'Phytochemistry'],
    description: 'Hands-on 6-month laboratory fellowship working on chromatographic standardization of Ashwagandha & Guduchi extracts using CAMAG HPTLC systems. Direct fast-track hiring into Junior QC Officer roles.',
    recruiter: {
      name: 'Dr. Vikram Sethi',
      role: 'Industry Recruiter & R&D Lead',
      email: 'recruitment.rd@dabur.com',
      phone: '+91 120 3982000'
    },
    eligibleCount: 6
  },
  {
    id: 'opp-int-2',
    type: 'internship',
    typeLabel: 'Clinical Internship',
    title: 'Clinical Resident: Inpatient Panchakarma & Metabolic Disorders Unit',
    company: 'All India Institute of Ayurveda (AIIA)',
    brandName: 'All India Institute of Ayurveda',
    logo: 'AI',
    logoBg: 'bg-emerald-800',
    location: 'Sarita Vihar, New Delhi',
    package: '₹30,000 / month + Housing',
    duration: '4 Months Rotation',
    openings: '3 Openings',
    category: 'Clinical Hospital',
    eligibility: 'BAMS Final Year / Interns with min 82% Diagnostic Score',
    skills: ['Nadi Pariksha', 'Snehan-Swedan', 'Panchakarma Dietetics', 'ABDM EHR'],
    description: 'Clinical immersion managing inpatient care, precision Vamana/Virechana protocols, and digital pulse-wave diagnostics under senior hospital preceptors across 400+ daily OPD cases.',
    recruiter: {
      name: 'Prof. (Dr.) Meenakshi Joshi',
      role: 'Academic Dean & Preceptor',
      email: 'dean.academic@aiia.gov.in',
      phone: '+91 11 2987 8888'
    },
    eligibleCount: 5
  },
  {
    id: 'opp-int-3',
    type: 'internship',
    typeLabel: 'Industrial Internship',
    title: 'Industrial Apprentice: Large-Scale GMP Extraction & Botanicals QC',
    company: 'Patanjali Research Foundation',
    brandName: 'Divya Pharmacy & Botanical Extraction Plant',
    logo: 'PR',
    logoBg: 'bg-amber-800',
    location: 'Haridwar (Divya Pharmacy)',
    package: '₹22,000 / month + Boarding',
    duration: '3 Months Practicum',
    openings: '5 Openings',
    category: 'Manufacturing & QC',
    eligibility: 'BAMS / B.Pharm (Ayurveda) / BUMS / BSMS',
    skills: ['GMP Cleanroom', 'Microbiology Assay', 'Solvent Extraction', 'Batch QC'],
    description: 'Apprentice training covering supercritical fluid extraction, Kwath spray drying, automated tablet compression, and microbial purity testing at Asia\'s largest herbal manufacturing complex.',
    recruiter: {
      name: 'Dr. Anurag Varshney',
      role: 'VP & Head of R&D',
      email: 'careers.rd@patanjali.org',
      phone: '+91 1334 240008'
    },
    eligibleCount: 7
  },
  {
    id: 'opp-int-4',
    type: 'internship',
    typeLabel: 'Clinical Internship',
    title: 'Clinical Resident: Keraleeya Panchakarma & Classical Dravyaguna',
    company: 'Kottakkal Arya Vaidya Sala (AVS)',
    brandName: 'Vaidyaratnam P. S. Varier’s Arya Vaidya Sala',
    logo: 'KV',
    logoBg: 'bg-teal-900',
    location: 'Kottakkal & Kochi, Kerala',
    package: '₹28,000 / month + Stay',
    duration: '6 Months Immersion',
    openings: '2 Openings',
    category: 'Clinical Hospital',
    eligibility: 'BAMS Final Year & Interns (Score 80%+)',
    skills: ['Keraleeya Panchakarma', 'Bhasma Assessment', 'Herbarium Curation', 'Case Workups'],
    description: 'Shadow senior physicians handling complex neurological and rheumatological cases. Includes authentic Western Ghats medicinal plant identification and classical therapy procedures.',
    recruiter: {
      name: 'Dr. K. Muraleedharan',
      role: 'Chief Medical Superintendent',
      email: 'clinical.hr@aryavaidyasala.com',
      phone: '+91 483 2808000'
    },
    eligibleCount: 4
  },
  {
    id: 'opp-int-5',
    type: 'internship',
    typeLabel: 'Industrial Internship',
    title: 'Preclinical Research Associate: Phyto-Formulation & Pharmacology',
    company: 'The Himalaya Wellness Company',
    brandName: 'The Himalaya Drug Company & R&D Center',
    logo: 'HW',
    logoBg: 'bg-emerald-950',
    location: 'Makali, Bengaluru',
    package: '₹26,000 / month + Transport',
    duration: '4 Months Project',
    openings: '2 Openings',
    category: 'Pharmacology R&D',
    eligibility: 'BAMS, BHMS, BSMS, M.Pharm (Ayush)',
    skills: ['Phyto-chemistry', 'In Vitro Assay', 'Stability Testing', 'Ayush GCP'],
    description: 'Assist the Discovery Team in screening herbal fractions for cellular anti-inflammatory biomarkers and syrup formulations with access to LC-MS/MS and high-content imaging labs.',
    recruiter: {
      name: 'Dr. Priya Ramachandran',
      role: 'Senior Discovery Lead',
      email: 'talent.discovery@himalayawellness.com',
      phone: '+91 80 6754 9999'
    },
    eligibleCount: 4
  },
  {
    id: 'opp-int-6',
    type: 'internship',
    typeLabel: 'Clinical Internship',
    title: 'Integrative Clinical Fellow: Holistic Health & Naturopathy',
    company: 'Soukya Holistic Health Center',
    brandName: 'SOUKYA International Holistic Health Centre',
    logo: 'SK',
    logoBg: 'bg-emerald-800',
    location: 'Whitefield, Bengaluru',
    package: '₹35,000 / month + Stay',
    duration: '3 Months Immersion',
    openings: '2 Openings',
    category: 'Integrative Medicine',
    eligibility: 'BNYS, BAMS, BHMS Interns',
    skills: ['Hydrotherapy', 'Medical Yoga', 'Dietary Detox', 'Lifestyle Counseling'],
    description: 'Collaborate with multidisciplinary physicians, Naturopaths, and Yoga therapists in designing holistic detoxification, organic nutrition, and clinical wellness protocols across 30 organic acres.',
    recruiter: {
      name: 'Dr. Isaac Mathai',
      role: 'Medical Director',
      email: 'careers@soukya.com',
      phone: '+91 80 2801 7000'
    },
    eligibleCount: 3
  },
  {
    id: 'opp-int-7',
    type: 'internship',
    typeLabel: 'Clinical Internship',
    title: 'Clinical Tele-Ayurveda Fellow: Digital Health & Documentation',
    company: 'AVP Research Foundation',
    brandName: 'The Arya Vaidya Pharmacy Research Foundation',
    logo: 'AR',
    logoBg: 'bg-emerald-900',
    location: 'Coimbatore / Remote Hybrid',
    package: '₹22,500 / month',
    duration: '3 Months Hybrid',
    openings: '4 Openings',
    category: 'Digital Health',
    eligibility: 'BAMS 3rd/4th Year & Interns',
    skills: ['Tele-OPD Triage', 'NAMASTE Portal EHR', 'Prakriti Assessment', 'Case Logs'],
    description: 'Gain practical experience in telemedicine triage, NAMASTE standardized morbidity terminology data logging, and assisting senior physicians with remote consultations.',
    recruiter: {
      name: 'Dr. P. Ram Manohar',
      role: 'Research Director',
      email: 'research.fellowships@avpresearch.org',
      phone: '+91 422 4322888'
    },
    eligibleCount: 5
  },
  {
    id: 'opp-int-8',
    type: 'internship',
    typeLabel: 'Research Internship',
    title: 'Research Fellow: Homoeopathic Drug Proving & Clinical Trials',
    company: 'Central Council for Research in Homoeopathy (CCRH)',
    brandName: 'CCRH Ministry of Ayush',
    logo: 'CH',
    logoBg: 'bg-sky-900',
    location: 'Janakpuri, New Delhi',
    package: '₹32,000 / month',
    duration: '6 Months Research',
    openings: '2 Openings',
    category: 'Clinical Research',
    eligibility: 'BHMS Final Year & Interns (Score 78%+)',
    skills: ['Repertorization', 'Drug Proving', 'Clinical Data Management', 'GCP Compliance'],
    description: 'Participate in evidence-based clinical trials for chronic lifestyle disorders, modern computer repertory analysis, and adverse event monitoring.',
    recruiter: {
      name: 'Dr. Ananya Vaidya',
      role: 'Research Preceptor',
      email: 'research@ccrhindia.nic.in',
      phone: '+91 11 2852 4444'
    },
    eligibleCount: 4
  }
];

export const CollegeStudentsView = ({ user }) => {
  // Navigation Tabs: 'students' (Student Directory - DEFAULT) | 'openings' (Available Roles & Internships)
  const [activeTab, setActiveTab] = useState('students');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  // Opportunities Filtering
  const [opportunityTypeFilter, setOpportunityTypeFilter] = useState('all'); // 'all' | 'role' | 'internship'
  const [opportunitySearchQuery, setOpportunitySearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Students Filtering & Sorting
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [studentStatusFilter, setStudentStatusFilter] = useState('all');
  const [studentProgramFilter, setStudentProgramFilter] = useState('all');
  const [sortField, setSortField] = useState('cgpa'); // 'cgpa' | 'attendance' | 'name' | 'rollNumber' | 'program' | 'placementStatus'
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc' | 'desc'

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      if (field === 'cgpa' || field === 'attendance') {
        setSortDirection('desc');
      } else {
        setSortDirection('asc');
      }
    }
  };

  // Interactive Modals
  const [selectedStudentDossier, setSelectedStudentDossier] = useState(null);
  const [selectedOpportunityForModal, setSelectedOpportunityForModal] = useState(null);
  const [nominateModalOpportunity, setNominateModalOpportunity] = useState(null);
  const [selectedStudentForNomination, setSelectedStudentForNomination] = useState(INITIAL_COLLEGE_STUDENTS[0].id);
  const [endorsementNote, setEndorsementNote] = useState('');

  // Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Filtered Opportunities
  const filteredOpportunities = AVAILABLE_OPPORTUNITIES.filter((opp) => {
    const matchesType =
      opportunityTypeFilter === 'all' || opp.type === opportunityTypeFilter;

    const query = opportunitySearchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      opp.title.toLowerCase().includes(query) ||
      opp.company.toLowerCase().includes(query) ||
      opp.location.toLowerCase().includes(query) ||
      opp.skills.some((sk) => sk.toLowerCase().includes(query));

    const matchesCategory =
      categoryFilter === 'all' || opp.category === categoryFilter;

    return matchesType && matchesSearch && matchesCategory;
  });
  const filteredStudents = INITIAL_COLLEGE_STUDENTS.filter((s) => {
    const query = studentSearchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      s.name.toLowerCase().includes(query) ||
      s.rollNumber.toLowerCase().includes(query) ||
      s.ncismReg.toLowerCase().includes(query) ||
      s.email.toLowerCase().includes(query) ||
      s.company.toLowerCase().includes(query) ||
      s.skills.some((sk) => sk.toLowerCase().includes(query));

    const matchesStatus =
      studentStatusFilter === 'all' || s.placementStatus === studentStatusFilter;

    const matchesProgram =
      studentProgramFilter === 'all' ||
      s.program.toLowerCase().includes(studentProgramFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesProgram;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    let result = 0;
    if (sortField === 'cgpa') {
      result = parseFloat(a.cgpa) - parseFloat(b.cgpa);
    } else if (sortField === 'attendance') {
      result = parseFloat(a.attendance) - parseFloat(b.attendance);
    } else if (sortField === 'name') {
      result = a.name.localeCompare(b.name);
    } else if (sortField === 'rollNumber') {
      result = a.rollNumber.localeCompare(b.rollNumber);
    } else if (sortField === 'program') {
      result = a.program.localeCompare(b.program);
    } else if (sortField === 'placementStatus') {
      const priority = { Placed: 3, Internship: 2, Seeking: 1 };
      result = (priority[a.placementStatus] || 0) - (priority[b.placementStatus] || 0);
    }
    return sortDirection === 'asc' ? result : -result;
  });

  const handleExportReport = () => {
    showToast('NAAC & NCISM Student Academic Dossier exported as CSV successfully.');
  };

  const handleOpenNominateModal = (opportunity) => {
    setNominateModalOpportunity(opportunity);
    setSelectedStudentForNomination(INITIAL_COLLEGE_STUDENTS[0].id);
    setEndorsementNote(
      `On behalf of the ${user?.institution || 'National Institute of Ayurveda'} Placement Desk, I formally endorse this scholar for the ${opportunity.title} at ${opportunity.company}. Their verified clinical coursework and academic performance reflect exemplary institutional readiness.`
    );
  };

  const handleSubmitNomination = () => {
    const stu = INITIAL_COLLEGE_STUDENTS.find((s) => s.id === selectedStudentForNomination);
    showToast(`Dean's Official Nomination submitted for ${stu?.name} to ${nominateModalOpportunity?.company}!`);
    setNominateModalOpportunity(null);
  };

  // Count metrics
  const fullTimeRolesCount = AVAILABLE_OPPORTUNITIES.filter((o) => o.type === 'role').length;
  const internshipsCount = AVAILABLE_OPPORTUNITIES.filter((o) => o.type === 'internship').length;
  const placedCount = INITIAL_COLLEGE_STUDENTS.filter((s) => s.placementStatus === 'Placed').length;
  const internCount = INITIAL_COLLEGE_STUDENTS.filter((s) => s.placementStatus === 'Internship').length;
  const seekingCount = INITIAL_COLLEGE_STUDENTS.filter((s) => s.placementStatus === 'Seeking').length;

  return (
    <div className="space-y-6 font-sans max-w-7xl mx-auto pb-12">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 bg-white text-slate-900 text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 animate-in fade-in max-w-sm sm:max-w-md">
          <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 stroke-[2.5]" />
          </div>
          <p className="flex-1 leading-snug">{toastMessage}</p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('students')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'students'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Directory</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
              activeTab === 'students'
                ? 'bg-emerald-700 text-emerald-100'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {filteredStudents.length} Listed
          </span>
        </button>

        <button
          onClick={() => setActiveTab('openings')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'openings'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Roles &amp; Internships</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
              activeTab === 'openings'
                ? 'bg-emerald-700 text-emerald-100'
                : 'bg-emerald-100 text-emerald-800'
            }`}
          >
            {AVAILABLE_OPPORTUNITIES.length} Active
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: STUDENT DIRECTORY & BASIC DATA (DEFAULT TAB)                       */}
      {/* ========================================================================= */}
      {activeTab === 'students' && (
        <div className="space-y-4">
          {/* Header Toolbar (Matching NOC Clearances UI) */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Student Directory
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                    {sortedStudents.length} Enrolled
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Academic transcripts, clinical attendance, and career placement records.
                </p>
              </div>

              {/* Minimal Metric Summary & Export Button */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="flex items-center gap-2 text-xs bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/70">
                  <span className="text-slate-500">Enrolled: <strong className="text-slate-800 font-bold">{user?.enrolledScholars || 680}</strong></span>
                  <span className="text-slate-300">·</span>
                  <span className="text-teal-700">Avg CGPA: <strong className="text-teal-800 font-bold">8.72</strong></span>
                  <span className="text-slate-300">·</span>
                  <span className="text-blue-700">Attendance: <strong className="text-blue-800 font-bold">92.4%</strong></span>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700">Placed: <strong className="text-emerald-800 font-bold">520</strong></span>
                </div>

                <button
                  onClick={handleExportReport}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  title="Export Student Dossier as CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="pt-3 border-t border-slate-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search candidate, roll, skill, company..."
                  value={studentSearchQuery}
                  onChange={(e) => setStudentSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
                />
                {studentSearchQuery && (
                  <button
                    onClick={() => setStudentSearchQuery('')}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Filter Buttons + Dropdowns + View Mode Toggle */}
              <div className="flex items-center gap-2 flex-wrap">
                {/* Status Filter Pills */}
                <div className="flex items-center gap-1 overflow-x-auto">
                  <button
                    onClick={() => setStudentStatusFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      studentStatusFilter === 'all'
                        ? 'bg-emerald-800 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    All ({INITIAL_COLLEGE_STUDENTS.length})
                  </button>
                  <button
                    onClick={() => setStudentStatusFilter('Placed')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      studentStatusFilter === 'Placed'
                        ? 'bg-emerald-700 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Placed ({placedCount})
                  </button>
                  <button
                    onClick={() => setStudentStatusFilter('Internship')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      studentStatusFilter === 'Internship'
                        ? 'bg-blue-700 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Intern ({internCount})
                  </button>
                  <button
                    onClick={() => setStudentStatusFilter('Seeking')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      studentStatusFilter === 'Seeking'
                        ? 'bg-amber-700 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Pipeline ({seekingCount})
                  </button>
                </div>

                {/* Program Filter */}
                <select
                  value={studentProgramFilter}
                  onChange={(e) => setStudentProgramFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                >
                  <option value="all">All Programs</option>
                  <option value="BAMS">BAMS</option>
                  <option value="MD Ayurveda">MD Ayurveda</option>
                  <option value="M.Pharm">M.Pharm</option>
                </select>

                {/* Quick Sort Dropdown */}
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2 py-1.5 text-xs">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <select
                    value={`${sortField}-${sortDirection}`}
                    onChange={(e) => {
                      const [field, dir] = e.target.value.split('-');
                      setSortField(field);
                      setSortDirection(dir);
                    }}
                    className="bg-transparent font-semibold text-slate-800 text-xs focus:outline-none cursor-pointer"
                  >
                    <option value="cgpa-desc">Highest CGPA</option>
                    <option value="cgpa-asc">Lowest CGPA</option>
                    <option value="attendance-desc">Highest Attendance</option>
                    <option value="name-asc">Name (A → Z)</option>
                    <option value="rollNumber-asc">Roll No.</option>
                  </select>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      viewMode === 'cards'
                        ? 'bg-white text-emerald-800 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Card View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      viewMode === 'table'
                        ? 'bg-white text-emerald-800 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Table View"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN STUDENTS CONTENT: CARDS VIEW (DEFAULT) OR TABLE VIEW */}
          {sortedStudents.length > 0 ? (
            viewMode === 'cards' ? (
              /* CARD VIEW - EXACT MATCH TO NOC CLEARANCES UI */
              <div className="space-y-4">
                {sortedStudents.map((stu) => (
                  <div
                    key={stu.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-4 transition-all hover:border-slate-300"
                  >
                    {/* Top Row: Student Identity & Request Meta */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-200">
                          {stu.avatar || stu.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-slate-900">{stu.name}</h4>
                            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60">
                              {stu.rollNumber}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {stu.program} · {stu.semester.split('(')[0].trim()} · Mentor: {stu.preceptor}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                            stu.placementStatus === 'Placed'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : stu.placementStatus === 'Internship'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {stu.placementStatus === 'Placed' ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Placed · {stu.package}</span>
                            </>
                          ) : stu.placementStatus === 'Internship' ? (
                            <>
                              <Clock className="w-3.5 h-3.5 text-blue-600" />
                              <span>Clinical Intern</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3.5 h-3.5 text-amber-600" />
                              <span>Placement Pipeline</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Clean 2-Section Grid (Matching Screenshot 1) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {/* Left: Career & Placement Specifications */}
                      <div className="bg-slate-50/70 rounded-xl p-3.5 space-y-2 border border-slate-200/60">
                        <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          <span>Career &amp; Placement</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900">{stu.company}</h5>
                          <p className="text-slate-600 font-medium">{stu.role}</p>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 pt-0.5">
                          <span>Package: <strong className="text-emerald-800 font-semibold">{stu.package}</strong></span>
                          <span>Batch: <strong className="text-slate-800 font-semibold">{stu.batch}</strong></span>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                          <span className="text-slate-500 font-medium">Key Skills:</span>
                          <div className="flex items-center gap-1 overflow-hidden">
                            {stu.skills.slice(0, 3).map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded-md text-[10px] bg-white border border-slate-200 text-slate-700 font-medium whitespace-nowrap"
                              >
                                {skill}
                              </span>
                            ))}
                            {stu.skills.length > 3 && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60">
                                +{stu.skills.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: Academic Standing & Clinical Audit */}
                      <div className="bg-slate-50/70 rounded-xl p-3.5 space-y-2 border border-slate-200/60">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                            <span>Academic Standing</span>
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 normal-case tracking-normal">
                            <Check className="w-3 h-3 text-emerald-600" /> Verified Record
                          </span>
                        </div>

                        {/* 3 Metric Cards */}
                        <div className="grid grid-cols-3 gap-2 text-center pt-0.5">
                          <div className="bg-white rounded-lg p-2 border border-slate-200/80">
                            <span className="text-[10px] text-slate-400 font-medium block">CGPA</span>
                            <span className="text-sm font-bold text-slate-900">{stu.cgpa}</span>
                            <span className="text-[10px] text-emerald-600 font-semibold block">Distinction</span>
                          </div>
                          <div className="bg-white rounded-lg p-2 border border-slate-200/80">
                            <span className="text-[10px] text-slate-400 font-medium block">Attendance</span>
                            <span className="text-sm font-bold text-slate-900">{stu.attendance}</span>
                            <span className="text-[10px] text-emerald-600 font-semibold block">{stu.clinicalHours}</span>
                          </div>
                          <div className="bg-white rounded-lg p-2 border border-slate-200/80">
                            <span className="text-[10px] text-slate-400 font-medium block">Backlogs</span>
                            <span className="text-sm font-bold text-slate-900">0</span>
                            <span className="text-[10px] text-emerald-600 font-semibold block">Clean</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-500 leading-snug">
                          Statutory clinical postings cleared · Theory: {stu.theoryMarks} · Practical: {stu.practicalMarks}
                        </p>
                      </div>
                    </div>

                    {/* Actions & Reference Row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-500 font-mono">
                        NCISM: <span className="font-semibold text-slate-700">{stu.ncismReg}</span> · ABHA: <span className="text-slate-600">{stu.abhaId}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedStudentDossier(stu)}
                          className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5 text-emerald-300" />
                          <span>View Full Dossier</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* TABLE VIEW (ACCESSIBLE VIA VIEW MODE TOGGLE) */
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden">
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left border-collapse table-auto">
                    <thead>
                      <tr className="bg-slate-50/90 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        <th
                          onClick={() => handleSort('name')}
                          className="py-3 px-4 sm:px-5 cursor-pointer select-none hover:bg-slate-100 transition-colors group w-[26%]"
                          title="Click to sort by Name"
                        >
                          <div className="flex items-center gap-1.5">
                            <span>Student &amp; Identity</span>
                            {sortField === 'name' ? (
                              sortDirection === 'asc' ? (
                                <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              ) : (
                                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              )
                            ) : (
                              <ArrowUpDown className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                            )}
                          </div>
                        </th>

                        <th
                          onClick={() => handleSort('program')}
                          className="py-3 px-4 cursor-pointer select-none hover:bg-slate-100 transition-colors group w-[18%]"
                          title="Click to sort by Program"
                        >
                          <div className="flex items-center gap-1.5">
                            <span>Program &amp; Mentor</span>
                            {sortField === 'program' ? (
                              sortDirection === 'asc' ? (
                                <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              ) : (
                                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              )
                            ) : (
                              <ArrowUpDown className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                            )}
                          </div>
                        </th>

                        <th
                          onClick={() => handleSort('cgpa')}
                          className="py-3 px-4 cursor-pointer select-none hover:bg-slate-100 transition-colors group w-[16%]"
                          title="Click to sort by CGPA"
                        >
                          <div className="flex items-center gap-1.5">
                            <span>Academic &amp; Attendance</span>
                            {sortField === 'cgpa' ? (
                              sortDirection === 'asc' ? (
                                <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              ) : (
                                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              )
                            ) : sortField === 'attendance' ? (
                              sortDirection === 'asc' ? (
                                <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              ) : (
                                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              )
                            ) : (
                              <ArrowUpDown className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                            )}
                          </div>
                        </th>

                        <th
                          onClick={() => handleSort('placementStatus')}
                          className="py-3 px-4 cursor-pointer select-none hover:bg-slate-100 transition-colors group w-[18%]"
                          title="Click to sort by Placement Status"
                        >
                          <div className="flex items-center gap-1.5">
                            <span>Placement Status</span>
                            {sortField === 'placementStatus' ? (
                              sortDirection === 'asc' ? (
                                <ArrowUp className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              ) : (
                                <ArrowDown className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                              )
                            ) : (
                              <ArrowUpDown className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                            )}
                          </div>
                        </th>

                        <th className="py-3 px-4 w-[12%]">
                          <span>Key Competencies</span>
                        </th>

                        <th className="py-3 px-4 sm:px-5 text-right w-[10%]">
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {sortedStudents.map((stu) => (
                        <tr
                          key={stu.id}
                          className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                          onClick={() => setSelectedStudentDossier(stu)}
                        >
                          <td className="py-2.5 px-4 sm:px-5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                                {stu.avatar}
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-emerald-800 transition-colors">
                                    {stu.name}
                                  </span>
                                  <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-medium">
                                    {stu.rollNumber}
                                  </span>
                                </div>
                                <div className="text-[10px] text-slate-400 mt-0.5">
                                  {stu.ncismReg} · <span className="text-slate-500">{stu.gender}</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="py-2.5 px-4">
                            <div className="font-semibold text-slate-800 text-xs">
                              {stu.program}{' '}
                              <span className="text-slate-400 font-normal text-[11px]">
                                · {stu.semester.split('(')[0].trim()}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[170px]">
                              {stu.preceptor}
                            </div>
                          </td>

                          <td className="py-2.5 px-4">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-black text-slate-900">{stu.cgpa} CGPA</span>
                              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                                {stu.attendance}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              {stu.clinicalHours} clinical
                            </div>
                          </td>

                          <td className="py-2.5 px-4">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {stu.placementStatus === 'Placed' && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span>Placed</span>
                                </span>
                              )}
                              {stu.placementStatus === 'Internship' && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                                  <Clock className="w-3 h-3 text-blue-600" />
                                  <span>Intern</span>
                                </span>
                              )}
                              {stu.placementStatus === 'Seeking' && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                                  <span>Pipeline</span>
                                </span>
                              )}
                              <span className="text-xs font-semibold text-slate-800">
                                {stu.company}
                              </span>
                            </div>
                            <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                              {stu.package}
                            </div>
                          </td>

                          <td className="py-2.5 px-4">
                            <div className="flex items-center gap-1">
                              {stu.skills.slice(0, 2).map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 text-slate-700 font-medium whitespace-nowrap"
                                >
                                  {skill}
                                </span>
                              ))}
                              {stu.skills.length > 2 && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60 whitespace-nowrap">
                                  +{stu.skills.length - 2}
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="py-2.5 px-4 sm:px-5 text-right">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedStudentDossier(stu);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-800 hover:text-white text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ml-auto shadow-2xs group-hover:bg-emerald-800 group-hover:text-white whitespace-nowrap"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>Basic Data</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
              <p className="text-xs text-slate-500">No students found matching your filter criteria.</p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: AVAILABLE ROLES & INTERNSHIPS                                      */}
      {/* ========================================================================= */}
      {activeTab === 'openings' && (
        <div className="space-y-6">
          {/* Sub-toolbar: Filters and Search */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-soft space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
            {/* Type Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setOpportunityTypeFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  opportunityTypeFilter === 'all'
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({AVAILABLE_OPPORTUNITIES.length})
              </button>
              <button
                onClick={() => setOpportunityTypeFilter('role')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  opportunityTypeFilter === 'role'
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>Full-time Roles</span>
                <span className="text-[10px] opacity-80">({fullTimeRolesCount})</span>
              </button>
              <button
                onClick={() => setOpportunityTypeFilter('internship')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  opportunityTypeFilter === 'internship'
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>Clinical & Industrial Internships</span>
                <span className="text-[10px] opacity-80">({internshipsCount})</span>
              </button>
            </div>

            {/* Search & Category Filter */}
            <div className="flex items-center gap-2.5 flex-1 max-w-lg justify-end">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search role, partner, skills, city..."
                  value={opportunitySearchQuery}
                  onChange={(e) => setOpportunitySearchQuery(e.target.value)}
                  className="w-full bg-slate-50 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-8 py-1.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-all"
                />
                {opportunitySearchQuery && (
                  <button
                    onClick={() => setOpportunitySearchQuery('')}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
              >
                <option value="all">All Disciplines</option>
                <option value="Quality Control">Quality Control</option>
                <option value="Formulation R&D">Formulation R&D</option>
                <option value="Clinical Hospital">Clinical Hospital</option>
                <option value="Clinical Research">Clinical Research</option>
                <option value="Quality Assurance">Quality Assurance</option>
              </select>
            </div>
          </div>

          {/* Opportunities Cards Grid */}
          {filteredOpportunities.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-soft space-y-3">
              <Briefcase className="w-10 h-10 text-slate-300 mx-auto stroke-[1.5]" />
              <p className="text-sm font-bold text-slate-800">No opportunities matching this filter</p>
              <p className="text-xs text-slate-500">Try resetting search keywords or selecting all categories.</p>
              <button
                onClick={() => {
                  setOpportunityTypeFilter('all');
                  setOpportunitySearchQuery('');
                  setCategoryFilter('all');
                }}
                className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  {/* Top: Company info & Type Badge */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-xl ${opp.logoBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                        >
                          {opp.logo}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                              {opp.company}
                            </h3>
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Industry Partner" />
                          </div>
                          <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{opp.location}</span>
                          </p>
                        </div>
                      </div>

                      {opp.type === 'role' ? (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                          Full-time Role
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200 shrink-0">
                          Internship
                        </span>
                      )}
                    </div>

                    {/* Title & Compensation */}
                    <div>
                      <h2 className="font-extrabold text-base text-slate-900 leading-snug">
                        {opp.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50/90 px-2.5 py-0.5 rounded-lg border border-emerald-200/80">
                          {opp.package}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">·</span>
                        <span className="text-xs text-slate-600 font-medium">
                          {opp.duration}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">·</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {opp.openings}
                        </span>
                      </div>
                    </div>

                    {/* Eligibility Note */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600 flex items-start gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-700">Eligibility: </span>
                        <span>{opp.eligibility}</span>
                      </div>
                    </div>

                    {/* Required Skills Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {opp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{opp.eligibleCount} scholars eligible in college</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setSelectedOpportunityForModal(opp)}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>Brief</span>
                      </button>

                      <button
                        onClick={() => handleOpenNominateModal(opp)}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Nominate Scholar</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 1: STUDENT DOSSIER / BASIC DATA DIALOG                              */}
      {/* ========================================================================= */}
      {selectedStudentDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between shrink-0 bg-slate-50/80">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {selectedStudentDossier.avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                      {selectedStudentDossier.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                      DigiLocker Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Roll No: <span className="font-mono text-slate-700 font-bold">{selectedStudentDossier.rollNumber}</span> · {selectedStudentDossier.program}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudentDossier(null)}
                className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto flex-1 text-xs">
              {/* 4 Stat Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Academic CGPA</span>
                  <span className="text-lg font-black text-slate-900 mt-0.5 block">{selectedStudentDossier.cgpa} / 10.0</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Attendance</span>
                  <span className="text-lg font-black text-emerald-700 mt-0.5 block">{selectedStudentDossier.attendance}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Clinical Log</span>
                  <span className="text-lg font-black text-blue-800 mt-0.5 block">{selectedStudentDossier.clinicalHours}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Status</span>
                  <span className="text-sm font-extrabold text-purple-900 mt-1 block">{selectedStudentDossier.placementStatus}</span>
                </div>
              </div>

              {/* Section 1: Candidate Basic Identity & Statutory Codes */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>1. Candidate Identity & Statutory Registration</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">NCISM Student Registration</span>
                    <span className="font-mono text-slate-800 font-bold text-xs mt-0.5 block">{selectedStudentDossier.ncismReg}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">ABHA National Health ID</span>
                    <span className="font-mono text-slate-800 font-bold text-xs mt-0.5 block">{selectedStudentDossier.abhaId}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Date of Birth & Gender</span>
                    <span className="text-slate-800 font-medium text-xs mt-0.5 block">{selectedStudentDossier.dob} · {selectedStudentDossier.gender} (Blood: {selectedStudentDossier.bloodGroup})</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Domicile / Home State</span>
                    <span className="text-slate-800 font-medium text-xs mt-0.5 block">{selectedStudentDossier.domicile}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Institutional Email</span>
                    <a href={`mailto:${selectedStudentDossier.email}`} className="text-emerald-800 font-semibold text-xs mt-0.5 block hover:underline">
                      {selectedStudentDossier.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Registered Phone</span>
                    <span className="text-slate-800 font-medium text-xs mt-0.5 block">{selectedStudentDossier.phone}</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Academic Curriculum & Preceptor */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>2. Academic Curriculum & Faculty Preceptor</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Program & Specialty</span>
                    <span className="text-slate-800 font-bold text-xs mt-0.5 block">{selectedStudentDossier.program} · {selectedStudentDossier.department}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Current Semester & Batch</span>
                    <span className="text-slate-800 font-medium text-xs mt-0.5 block">{selectedStudentDossier.semester} · {selectedStudentDossier.batch}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Assigned Faculty Preceptor</span>
                    <span className="text-slate-800 font-semibold text-xs mt-0.5 block">{selectedStudentDossier.preceptor}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Theory vs Practical Scores</span>
                    <span className="text-slate-800 font-medium text-xs mt-0.5 block">Theory: {selectedStudentDossier.theoryMarks} · Practical: {selectedStudentDossier.practicalMarks}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: DigiLocker Verified Badges */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>3. Verified Credentials & Badges</span>
                </h4>
                <div className="space-y-1.5">
                  {selectedStudentDossier.verifiedBadges?.map((badge, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-bold text-slate-900">{badge}</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-200">
                        DigiLocker Stamped
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Placement & Career Status */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-emerald-700" />
                  <span>4. Career Placement & Clinical Training Outcome</span>
                </h4>
                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-teal-900 block">Assigned Enterprise / Hospital</span>
                    <span className="font-bold text-slate-900 text-sm mt-0.5 block">{selectedStudentDossier.company}</span>
                    <span className="text-xs text-slate-600 mt-0.5 block">{selectedStudentDossier.role}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase text-teal-900 block">Package / Stipend</span>
                    <span className="font-extrabold text-emerald-800 text-base mt-0.5 block">{selectedStudentDossier.package}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0 bg-slate-50/60">
              <button
                type="button"
                onClick={() => setSelectedStudentDossier(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Close Dossier
              </button>

              <button
                type="button"
                onClick={() => {
                  showToast(`Student dossier for ${selectedStudentDossier.name} exported successfully.`);
                }}
                className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Official Record (CSV)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: SCHOLAR NOMINATION DIALOG                                        */}
      {/* ========================================================================= */}
      {nominateModalOpportunity && (() => {
        const currentStudent = INITIAL_COLLEGE_STUDENTS.find(
          (s) => s.id === selectedStudentForNomination
        ) || INITIAL_COLLEGE_STUDENTS[0];

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between shrink-0 bg-slate-50/70">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                      Nominate Scholar for Opportunity
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {nominateModalOpportunity.title} · <span className="font-semibold text-slate-700">{nominateModalOpportunity.company}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setNominateModalOpportunity(null)}
                  className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4 overflow-y-auto flex-1 text-xs">
                {/* Opportunity Summary Card */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Target Position</span>
                    <span className="font-bold text-slate-900 text-xs mt-0.5 block">{nominateModalOpportunity.title}</span>
                    <span className="text-[11px] text-emerald-700 font-semibold">{nominateModalOpportunity.package} · {nominateModalOpportunity.location}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-white font-bold text-emerald-800 border border-emerald-200 text-[11px]">
                    {nominateModalOpportunity.typeLabel}
                  </span>
                </div>

                {/* Select Scholar */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800 block">
                    Select Scholar from College Roster:
                  </label>
                  <select
                    value={selectedStudentForNomination}
                    onChange={(e) => setSelectedStudentForNomination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 cursor-pointer"
                  >
                    {INITIAL_COLLEGE_STUDENTS.map((stu) => (
                      <option key={stu.id} value={stu.id}>
                        {stu.name} ({stu.rollNumber}) — {stu.program} · CGPA: {stu.cgpa}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Scholar Profile Preview */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-200/80 text-emerald-900 font-bold flex items-center justify-center text-xs">
                        {currentStudent.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{currentStudent.name}</div>
                        <div className="text-[11px] text-slate-500">{currentStudent.program} · CGPA {currentStudent.cgpa}</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      Verified Portfolio
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Student Verified Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {currentStudent.skills.map((sk, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-700">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dean Endorsement Note */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800 flex items-center justify-between">
                    <span>Institutional Dean / TPO Endorsement Note:</span>
                    <span className="text-[10px] text-slate-400 font-normal">Included in recruiter transmission</span>
                  </label>
                  <textarea
                    rows={3}
                    value={endorsementNote}
                    onChange={(e) => setEndorsementNote(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 leading-relaxed resize-none"
                    placeholder="Provide Dean's recommendation or highlight candidate achievements..."
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0 bg-slate-50/60">
                <button
                  type="button"
                  onClick={() => setNominateModalOpportunity(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSubmitNomination}
                  className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Institutional Endorsement</span>
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ========================================================================= */}
      {/* MODAL 3: OPPORTUNITY BRIEF & RECRUITER CONTACT DETAILS                    */}
      {/* ========================================================================= */}
      {selectedOpportunityForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between shrink-0 bg-slate-50/70">
              <div className="flex items-start gap-3 min-w-0">
                <div className={`w-11 h-11 rounded-xl ${selectedOpportunityForModal.logoBg} text-white font-black text-xs flex items-center justify-center shrink-0`}>
                  {selectedOpportunityForModal.logo}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {selectedOpportunityForModal.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {selectedOpportunityForModal.company} · {selectedOpportunityForModal.location}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedOpportunityForModal(null)}
                className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 overflow-y-auto flex-1 text-xs">
              {/* Key Details Pill Box */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Compensation</span>
                  <span className="font-extrabold text-emerald-800 text-sm mt-0.5 block">{selectedOpportunityForModal.package}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Commitment</span>
                  <span className="font-bold text-slate-800 text-xs mt-0.5 block">{selectedOpportunityForModal.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Discipline</span>
                  <span className="font-bold text-slate-800 text-xs mt-0.5 block">{selectedOpportunityForModal.category}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Openings</span>
                  <span className="font-bold text-slate-800 text-xs mt-0.5 block">{selectedOpportunityForModal.openings}</span>
                </div>
              </div>

              {/* Role Scope & Responsibilities */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Role Brief & Institutional Scope:
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedOpportunityForModal.description}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Candidate Qualification Standards:
                </h4>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
                  {selectedOpportunityForModal.eligibility}
                </div>
              </div>

              {/* Required Skills */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Target Technical Competencies:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedOpportunityForModal.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recruiter Liaison Contact */}
              {selectedOpportunityForModal.recruiter && (
                <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-teal-900 uppercase tracking-wider">
                      Partner Placement Liaison:
                    </span>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                      Direct Campus Recruiter
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 text-xs">
                    {selectedOpportunityForModal.recruiter.name} — <span className="font-normal text-slate-600">{selectedOpportunityForModal.recruiter.role}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-teal-900 font-medium">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-teal-700" />
                      <span>{selectedOpportunityForModal.recruiter.email}</span>
                    </span>
                    {selectedOpportunityForModal.recruiter.phone && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-teal-700" />
                        <span>{selectedOpportunityForModal.recruiter.phone}</span>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0 bg-slate-50/60">
              <button
                type="button"
                onClick={() => setSelectedOpportunityForModal(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  const opp = selectedOpportunityForModal;
                  setSelectedOpportunityForModal(null);
                  handleOpenNominateModal(opp);
                }}
                className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Nominate Scholar Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeStudentsView;

