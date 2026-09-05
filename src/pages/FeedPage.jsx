import React, { useState } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Send, 
  Image as ImageIcon, 
  Tag, 
  Sparkles, 
  TrendingUp, 
  Award, 
  Search, 
  CheckCircle2, 
  Clock, 
  User, 
  ExternalLink, 
  BookOpen, 
  Briefcase, 
  X, 
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Check,
  Building2,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export function FeedPage({ onNavigate, currentUser, openCreatePostModal, onCloseCreatePostModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Internship');
  const [showCreatePost, setShowCreatePost] = useState(Boolean(openCreatePostModal));
  const [bookmarkedIds, setBookmarkedIds] = useState([1, 2]);
  
  // Track applied internship post IDs
  const [appliedPostIds, setAppliedPostIds] = useState([]);
  
  // Modal state for applying to an internship
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [applyCoverNote, setApplyCoverNote] = useState('');
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  React.useEffect(() => {
    if (openCreatePostModal) {
      setShowCreatePost(true);
    }
  }, [openCreatePostModal]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Concise dataset of 15 short, punchy posts (12 Intensive Internships + 3 Clinical/Research updates)
  const [posts, setPosts] = useState([
    {
      id: 1,
      isInternship: true,
      category: 'Internship',
      author: {
        name: 'Dabur Ayush R&D Center',
        role: 'Enterprise Partner & Recruiter',
        institution: 'Ghaziabad, Delhi NCR',
        avatar: 'DR',
        avatarBg: 'bg-emerald-900',
        verified: true
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
        { id: 101, user: 'Aarav Sharma', avatar: 'AS', text: 'Submitted my verified Level 3 HPLC badge with application.', time: '1 hr ago' }
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
        name: 'All India Institute of Ayurveda (AIIA)',
        role: 'Apex Academic & Clinical Institute',
        institution: 'Sarita Vihar, New Delhi',
        avatar: 'AI',
        avatarBg: 'bg-emerald-800',
        verified: true
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
        name: 'Patanjali Research Foundation',
        role: 'Botanical Division & QC Centre',
        institution: 'Haridwar, Uttarakhand',
        avatar: 'PR',
        avatarBg: 'bg-amber-800',
        verified: true
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
        name: 'Kottakkal Arya Vaidya Sala (AVS)',
        role: 'Heritage Center & Clinical Directorate',
        institution: 'Kottakkal, Malappuram, Kerala',
        avatar: 'KV',
        avatarBg: 'bg-teal-900',
        verified: true
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
        name: 'The Himalaya Wellness Company',
        role: 'Discovery Research & Formulation',
        institution: 'Makali R&D Campus, Bengaluru',
        avatar: 'HW',
        avatarBg: 'bg-emerald-950',
        verified: true
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
        name: 'Central Council for Research in Homoeopathy (CCRH)',
        role: 'Autonomous Body, Ministry of Ayush',
        institution: 'New Delhi & NIH Kolkata',
        avatar: 'CH',
        avatarBg: 'bg-sky-900',
        verified: true
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
        name: 'Central Council for Research in Unani Medicine (CCRUM)',
        role: 'Apex Research Organization',
        institution: 'NRIUM, Hyderabad',
        avatar: 'CU',
        avatarBg: 'bg-teal-800',
        verified: true
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
        name: 'National Institute of Siddha (NIS)',
        role: 'Autonomous Institute, Ministry of Ayush',
        institution: 'Tambaram Sanatorium, Chennai',
        avatar: 'NS',
        avatarBg: 'bg-indigo-900',
        verified: true
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
        name: 'Soukya Holistic Health Center',
        role: 'Integrative Medical Hospital',
        institution: 'Whitefield, Bengaluru',
        avatar: 'SK',
        avatarBg: 'bg-emerald-800',
        verified: true
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
        name: 'Charak Pharma & Vedistry',
        role: 'Herbal Healthcare Exporters',
        institution: 'Mumbai HQ & Silvassa Plant',
        avatar: 'CP',
        avatarBg: 'bg-teal-900',
        verified: true
      },
      time: '3 days ago',
      title: 'Global Herbal Regulatory Affairs & Quality Assurance Internship',
      stipend: '₹24,000 / month',
      duration: '4 Months Project',
      location: 'Mumbai / Silvassa Plant',
      openings: '10 Openings',
      eligibility: 'BAMS / B.Pharm / Life Sciences',
      skillsRequired: ['USFDA Guidelines', 'EU Directives', 'Dossier Preparation', 'Stability Testing'],
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
        name: 'AVP Research Foundation',
        role: 'Clinical Epidemiology Unit',
        institution: 'Ramanathapuram, Coimbatore',
        avatar: 'AR',
        avatarBg: 'bg-emerald-900',
        verified: true
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
        name: 'Shree Baidyanath Ayurved Bhawan',
        role: 'Rasa Shastra & Formulations',
        institution: 'Jhansi & Naini Plants',
        avatar: 'BA',
        avatarBg: 'bg-amber-900',
        verified: true
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
        name: 'Aarav Sharma',
        role: 'BAMS Final Year Scholar (Score: 88%)',
        institution: 'National Institute of Ayurveda, Jaipur',
        avatar: 'AS',
        avatarBg: 'bg-teal-700',
        verified: true
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
        name: 'Dr. Ananya Vaidya',
        role: 'Senior Clinical Researcher & Faculty',
        institution: 'AIIA, New Delhi',
        avatar: 'AV',
        avatarBg: 'bg-emerald-700',
        verified: true
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
        name: 'CCRAS Research Directorate',
        role: 'Apex Ministry Body',
        institution: 'Ministry of Ayush, New Delhi',
        avatar: 'CC',
        avatarBg: 'bg-emerald-800',
        verified: true
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
  ]);

  const categories = [
    { id: 'all', label: 'All Posts (15)', icon: Flame },
    { id: 'Internship', label: 'Intensive Internships (12)', icon: Briefcase },
    { id: 'Clinical Case', label: 'Clinical Cases', icon: BookOpen },
    { id: 'Skill Achievement', label: 'Skill Badges', icon: Award },
    { id: 'Research', label: 'Research', icon: Sparkles }
  ];

  const handleLikeToggle = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          isLiked: !p.isLiked,
          likes: p.isLiked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    }));
  };

  const handleToggleComments = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return { ...p, showComments: !p.showComments };
      }
      return p;
    }));
  };

  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    const authorName = currentUser?.name || 'Aarav Sharma';
    const authorAvatar = currentUser?.avatar || 'AS';
    
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: Date.now(),
              user: authorName,
              avatar: authorAvatar,
              text: commentText,
              time: 'Just now'
            }
          ]
        };
      }
      return p;
    }));
  };

  const handleBookmarkToggle = (postId) => {
    if (bookmarkedIds.includes(postId)) {
      setBookmarkedIds(bookmarkedIds.filter(id => id !== postId));
      showToast('Removed from saved bookmarks');
    } else {
      setBookmarkedIds([...bookmarkedIds, postId]);
      showToast('Saved to your platform bookmarks');
    }
  };

  // Open the Apply Internship Modal
  const handleOpenApplyModal = (post) => {
    setSelectedInternship(post);
    setApplyCoverNote(`Dear ${post.author.name} Recruiting Team,\n\nI am eager to apply for this intensive internship. My SkillSetu verified diagnostic score is 88%, and I have completed accredited micro-sprints in Schedule T GMP and HPLC Standardization.`);
  };

  // Submit Internship Application
  const handleConfirmApplication = (e) => {
    e.preventDefault();
    if (!selectedInternship) return;
    
    setIsSubmittingApplication(true);
    setTimeout(() => {
      setAppliedPostIds(prev => [...prev, selectedInternship.id]);
      setIsSubmittingApplication(false);
      const internshipName = selectedInternship.author.name;
      setSelectedInternship(null);
      showToast(`Application submitted to ${internshipName}. Your verified SkillSetu score (88%) has been sent.`);
    }, 450);
  };

  const handleCreatePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const authorName = currentUser?.name || 'Aarav Sharma';
    const authorRole = currentUser?.role || 'BAMS Final Year Scholar';
    const authorInst = currentUser?.institution || 'National Institute of Ayurveda, Jaipur';
    const authorAvatar = currentUser?.avatar || 'AS';

    const newPostObj = {
      id: Date.now(),
      isInternship: newPostCategory === 'Internship',
      author: {
        name: authorName,
        role: authorRole,
        institution: authorInst,
        avatar: authorAvatar,
        avatarBg: 'bg-emerald-700',
        verified: true
      },
      time: 'Just now',
      category: newPostCategory,
      title: `${newPostCategory} Insight by ${authorName}`,
      content: newPostText,
      tags: ['SkillSetuPost', newPostCategory.replace(/\s+/g, ''), 'AyushEcosystem'],
      image: null,
      likes: 0,
      isLiked: false,
      comments: [],
      showComments: false,
      shares: 0,
      views: '1'
    };

    setPosts([newPostObj, ...posts]);
    setNewPostText('');
    setShowCreatePost(false);
    showToast('Your post has been published to the Ayush community feed');
  };

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeFilter === 'all' || post.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.location && post.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (post.stipend && post.stipend.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalInternships = posts.filter(p => p.isInternship).length;

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-20 sm:pb-16 overflow-x-hidden relative">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in fade-in max-w-sm sm:max-w-md">
          <div className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <p className="flex-1 leading-snug">{toastMessage}</p>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Clean Minimal Page Header */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Community Feed & Internships
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Verified clinical cases, research updates, and 1-click apply intensive internships.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveFilter('Internship')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'Internship'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships ({totalInternships})</span>
          </button>
          <button
            onClick={() => setShowCreatePost(true)}
            className="bg-emerald-800 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create Post</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Left / Main Feed Column */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-5">
          
          {/* Quick Create Post Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 element-glow-shadow">
            <div className="flex gap-2.5 sm:gap-3 items-center">
              <div 
                onClick={() => onNavigate('profile')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center cursor-pointer border border-emerald-700 shrink-0"
              >
                {currentUser?.avatar || 'AS'}
              </div>
              <div className="flex-grow min-w-0">
                <button
                  onClick={() => setShowCreatePost(true)}
                  className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 font-medium px-3 py-2 sm:py-2.5 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer truncate"
                >
                  <span className="truncate">Share a clinical case, internship opening, or milestone...</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0 ml-1" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-100 text-xs">
              <div className="flex gap-2 sm:gap-4 text-slate-600 font-semibold overflow-x-auto no-scrollbar">
                <button onClick={() => { setNewPostCategory('Internship'); setShowCreatePost(true); }} className="flex items-center gap-1 text-emerald-800 font-bold hover:text-emerald-900 cursor-pointer shrink-0">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Post Internship</span>
                </button>
                <button onClick={() => { setNewPostCategory('Clinical Case'); setShowCreatePost(true); }} className="flex items-center gap-1 hover:text-emerald-800 cursor-pointer shrink-0">
                  <BookOpen className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>Case Study</span>
                </button>
                <button onClick={() => { setNewPostCategory('Skill Achievement'); setShowCreatePost(true); }} className="flex items-center gap-1 hover:text-emerald-800 cursor-pointer shrink-0">
                  <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Badge</span>
                </button>
              </div>

              <button
                onClick={() => setShowCreatePost(true)}
                className="bg-emerald-800 text-white text-[11px] font-bold px-3 py-1 rounded-lg hover:bg-emerald-900 transition-colors cursor-pointer shrink-0"
              >
                Post
              </button>
            </div>
          </div>

          {/* Modal / Overlay for Creating Post */}
          {showCreatePost && (
            <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
              <div className="bg-white rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-xl border border-slate-200 animate-in fade-in">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                    Create Community Feed Post
                  </h3>
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg cursor-pointer hover:bg-slate-100"
                    title="Close dialog"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleCreatePostSubmit} className="mt-4 space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Post Category</label>
                    <select
                      value={newPostCategory}
                      onChange={(e) => setNewPostCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Internship">Intensive Internship / Clinical Rotation</option>
                      <option value="Clinical Case">Clinical Case Study</option>
                      <option value="Skill Achievement">Skill Milestone / Badge</option>
                      <option value="Research">Research & Pharmacovigilance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Post Content</label>
                    <textarea
                      rows={3}
                      value={newPostText}
                      onChange={(e) => setNewPostText(e.target.value)}
                      placeholder="Write brief notes or internship details..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-1 rounded-lg flex items-center gap-1">
                      <Tag className="w-3 h-3 text-emerald-700 shrink-0" />
                      #SkillSetuVerified
                    </span>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowCreatePost(false)}
                        className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-emerald-800 text-white px-4 py-1.5 text-xs font-bold rounded-xl hover:bg-emerald-900 shadow-sm cursor-pointer"
                      >
                        Publish Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Filter Pills & Search Bar */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-between items-stretch sm:items-center">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar max-w-full">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-emerald-800 text-white border border-emerald-900 shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[180px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search feed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Feed Posts List */}
          <div className="space-y-4 sm:space-y-5">
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h3 className="font-bold text-slate-800 text-sm">No posts found matching filter</h3>
                <p className="text-xs text-slate-500 mt-1">Try switching categories or clearing search keywords.</p>
              </div>
            ) : (
              filteredPosts.map((post) => {
                const isBookmarked = bookmarkedIds.includes(post.id);
                const isApplied = appliedPostIds.includes(post.id);

                return (
                  <article key={post.id} className="bg-white rounded-2xl border border-slate-200/90 element-glow-shadow-hover overflow-hidden transition-all">
                    {/* Post Card Header */}
                    <div className="p-4 sm:p-5 pb-3">
                      <div className="flex justify-between items-start gap-2">
                        
                        {/* Author Info */}
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 max-w-full">
                          <div 
                            onClick={() => onNavigate('profile')}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${post.author.avatarBg} text-white font-extrabold text-xs flex items-center justify-center cursor-pointer border border-white shrink-0`}
                            title="View Author Profile"
                          >
                            {post.author.avatar}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1 min-w-0">
                              <span 
                                onClick={() => onNavigate('profile')}
                                className="font-extrabold text-slate-900 text-xs sm:text-sm hover:text-emerald-800 cursor-pointer truncate"
                              >
                                {post.author.name}
                              </span>
                              {post.author.verified && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 fill-emerald-100 shrink-0" title="SkillSetu Verified" />
                              )}
                            </div>
                            <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                              {post.author.role} • {post.author.institution}
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5 flex-wrap">
                              <span className="flex items-center gap-1 shrink-0">
                                <Clock className="w-3 h-3 shrink-0" />
                                {post.time}
                              </span>
                              <span>•</span>
                              <span className="bg-slate-100 text-slate-700 font-semibold px-1.5 py-0.5 rounded text-[10px] shrink-0">
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleBookmarkToggle(post.id)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              isBookmarked ? 'text-emerald-800 bg-emerald-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                            }`}
                            title={isBookmarked ? 'Saved' : 'Bookmark'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-emerald-800' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Post Title */}
                      <div className="mt-2.5 sm:mt-3">
                        <h2 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {post.title}
                        </h2>
                        
                        {/* Internship Specs Grid Card */}
                        {post.isInternship && (
                          <div className="my-3 p-3 bg-slate-50 border border-slate-200/90 rounded-xl space-y-2.5">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                                <span className="text-[9px] text-slate-400 font-bold block uppercase">Stipend</span>
                                <span className="font-extrabold text-emerald-900 text-xs sm:text-sm">{post.stipend}</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                                <span className="text-[9px] text-slate-400 font-bold block uppercase">Duration</span>
                                <span className="font-semibold text-slate-800 text-xs">{post.duration}</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                                <span className="text-[9px] text-slate-400 font-bold block uppercase">Location</span>
                                <span className="font-semibold text-slate-800 text-xs truncate block">{post.location}</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                                <span className="text-[9px] text-slate-400 font-bold block uppercase">Openings</span>
                                <span className="font-semibold text-slate-800 text-xs">{post.openings}</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-slate-200/80 text-[11px]">
                              <div className="text-slate-600 flex items-center gap-1 truncate">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                <span className="font-medium text-slate-700">{post.eligibility}</span>
                              </div>

                              {/* Prominent Apply Internship Action Button */}
                              <div className="w-full sm:w-auto">
                                {isApplied ? (
                                  <button
                                    disabled
                                    className="w-full sm:w-auto bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs px-3.5 py-1.5 rounded-lg flex items-center justify-center gap-1 cursor-default"
                                  >
                                    <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                                    <span>Applied</span>
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleOpenApplyModal(post)}
                                    className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-1.5 rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                                  >
                                    <Briefcase className="w-3.5 h-3.5" />
                                    <span>Apply Internship</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Short Punchy Post Content */}
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-1">
                          {post.content}
                        </p>
                      </div>

                      {/* Required Skills Chips */}
                      {post.skillsRequired && (
                        <div className="flex flex-wrap items-center gap-1 mt-2.5 pt-2 border-t border-slate-100">
                          <span className="text-[9px] font-bold uppercase text-slate-400 mr-1">Skills:</span>
                          {post.skillsRequired.map((skill, sIdx) => (
                            <span key={sIdx} className="text-[10px] font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Post Image Attachment */}
                    {post.image && (
                      <div className="relative bg-slate-900 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full max-h-72 object-cover"
                          loading="lazy"
                        />
                        {post.imageCaption && (
                          <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 p-2 text-[10px] text-slate-300 font-medium truncate flex items-center gap-1">
                            <Camera className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{post.imageCaption}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Post Actions Footer */}
                    <div className="p-3 sm:p-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => handleLikeToggle(post.id)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer text-xs ${
                            post.isLiked
                              ? 'bg-rose-50 text-rose-600 font-bold'
                              : 'hover:bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-rose-600 text-rose-600' : ''}`} />
                          <span>{post.likes}</span>
                        </button>

                        <button
                          onClick={() => handleToggleComments(post.id)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer text-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{post.comments.length}</span>
                        </button>

                        <button 
                          onClick={() => {
                            showToast('Link copied to clipboard');
                          }}
                          className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer text-xs"
                          title="Share link"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        {post.isInternship && !isApplied && (
                          <button
                            onClick={() => handleOpenApplyModal(post)}
                            className="text-emerald-900 bg-emerald-50 hover:bg-emerald-100 font-bold text-[11px] px-2.5 py-1 rounded border border-emerald-200 transition-all cursor-pointer flex items-center gap-1"
                          >
                            <span>Apply</span>
                            <ArrowRight className="w-3 h-3 text-emerald-800" />
                          </button>
                        )}
                        <span className="text-[10px] text-slate-400">
                          {post.views} views
                        </span>
                      </div>
                    </div>

                    {/* Comments Drawer */}
                    {post.showComments && (
                      <div className="bg-slate-50 p-3 border-t border-slate-200 animate-in fade-in">
                        <div className="space-y-2 mb-3 max-h-44 overflow-y-auto">
                          {post.comments.length === 0 ? (
                            <p className="text-xs text-slate-400 italic">No comments yet.</p>
                          ) : (
                            post.comments.map((comment) => (
                              <div key={comment.id} className="flex gap-2 bg-white p-2 rounded-lg border border-slate-200">
                                <div className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                                  {comment.avatar}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold text-[11px] text-slate-900 truncate">{comment.user}</span>
                                    <span className="text-[9px] text-slate-400 shrink-0">{comment.time}</span>
                                  </div>
                                  <p className="text-xs text-slate-700 mt-0.5 break-words">{comment.text}</p>
                                </div>
                              </div>
                            ))
                          )}
                        </div>

                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const input = e.target.elements.commentInput;
                            handleAddComment(post.id, input.value);
                            input.value = '';
                          }}
                          className="flex gap-2"
                        >
                          <input
                            name="commentInput"
                            type="text"
                            placeholder="Write a comment..."
                            className="flex-grow bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                          />
                          <button
                            type="submit"
                            className="bg-emerald-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-emerald-900 flex items-center gap-1 cursor-pointer shrink-0"
                          >
                            <Send className="w-3 h-3" />
                          </button>
                        </form>
                      </div>
                    )}
                  </article>
                );
              })
            )}

          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4 space-y-4 sm:space-y-5">
          
          {/* User Mini Profile Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 element-glow-shadow">
            <div className="flex items-center gap-3">
              <div 
                onClick={() => onNavigate('profile')}
                className="w-11 h-11 rounded-xl bg-emerald-900 text-white font-extrabold text-sm flex items-center justify-center cursor-pointer border border-emerald-800 shrink-0"
              >
                {currentUser?.avatar || 'AS'}
              </div>
              <div className="min-w-0">
                <h3 
                  onClick={() => onNavigate('profile')}
                  className="font-bold text-slate-900 text-sm hover:text-emerald-800 cursor-pointer flex items-center gap-1.5 truncate"
                >
                  <span className="truncate">{currentUser?.name || 'Aarav Sharma'}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 fill-emerald-100 shrink-0" />
                </h3>
                <p className="text-[11px] text-slate-500 truncate">BAMS Final Year Scholar</p>
                <div className="mt-1 inline-flex items-center gap-1 bg-emerald-50 text-emerald-900 font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                  <Award className="w-3 h-3 text-emerald-700 shrink-0" />
                  Readiness: 88%
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Applied Internships:</span>
              <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {appliedPostIds.length} Submitted
              </span>
            </div>
          </div>

          {/* Fast-Track ATS Box */}
          <div className="bg-white border border-slate-200 text-slate-900 rounded-2xl p-4 element-glow-shadow">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Fast-Track ATS</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Recruiters from Dabur, Himalaya, and Patanjali review candidate dossiers with verified 80%+ scores directly from this board.
            </p>
            <button
              onClick={() => setActiveFilter('Internship')}
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold py-2 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Filter 12+ Open Internships
            </button>
          </div>

          {/* Recruiting Mentors */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 element-glow-shadow">
            <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-3">
              <User className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              Recruiting Mentors & Preceptors
            </h3>
            <div className="space-y-2.5">
              {[
                { name: 'Dr. Vikram Sethi', role: 'Chief R&D Recruiter, Dabur', avatar: 'VS', bg: 'bg-emerald-900' },
                { name: 'Prof. Meenakshi Joshi', role: 'Dean & Hospital Director, AIIA', avatar: 'MJ', bg: 'bg-teal-800' },
                { name: 'Dr. Rajeshwari Rao', role: 'Head of Discovery, Himalaya', avatar: 'RR', bg: 'bg-slate-800' }
              ].map((rec, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`w-7 h-7 rounded-full ${rec.bg} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                      {rec.avatar}
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-xs text-slate-900 block leading-tight truncate">{rec.name}</span>
                      <span className="text-[10px] text-slate-500 block truncate">{rec.role}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => showToast(`Connection request sent to ${rec.name}`)}
                    className="border border-slate-300 hover:border-emerald-700 text-slate-700 hover:text-emerald-800 text-[10px] font-bold px-2 py-1 rounded transition-colors cursor-pointer shrink-0"
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* QUICK APPLY TO INTERNSHIP MODAL */}
      {selectedInternship && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${selectedInternship.author.avatarBg} text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0`}>
                  {selectedInternship.author.avatar}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">
                    1-Click Application
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug mt-0.5">
                    {selectedInternship.author.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedInternship(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Position Summary */}
            <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-xs text-slate-900 mb-1">{selectedInternship.title}</h4>
              <div className="grid grid-cols-2 gap-2 mt-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span className="font-bold text-slate-900">{selectedInternship.stipend}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>{selectedInternship.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="truncate">{selectedInternship.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Users className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>{selectedInternship.openings}</span>
                </div>
              </div>
            </div>

            {/* Candidate Snapshot */}
            <div className="mt-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase text-emerald-900 tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  SkillSetu Dossier Attached
                </span>
                <span className="text-xs font-bold text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-300">
                  Score: 88%
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900">{currentUser?.name || 'Aarav Sharma'}</p>
              <p className="text-[11px] text-slate-600">BAMS Scholar • National Institute of Ayurveda, Jaipur</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="text-[9px] font-bold text-emerald-900 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  Schedule T GMP Certified
                </span>
                <span className="text-[9px] font-bold text-emerald-900 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  HPLC Fingerprinting L3
                </span>
                <span className="text-[9px] font-bold text-emerald-900 bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                  Clinical Nadi Pariksha 91%
                </span>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleConfirmApplication} className="mt-3 space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Statement of Interest & Availability
                </label>
                <textarea
                  rows={3}
                  value={applyCoverNote}
                  onChange={(e) => setApplyCoverNote(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedInternship(null)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmittingApplication}
                  className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-70"
                >
                  {isSubmittingApplication ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Submit 1-Click Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default FeedPage;
