import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowLeft,
  ExternalLink,
  Edit3,
  Sparkles,
  Check,
  X,
  TrendingUp,
  Landmark,
  Building,
  HeartPulse,
  BookOpen
} from 'lucide-react';

import rajeshwarAvatar from '../../assets/images/rajeshwar_avatar.jpg';
import ayushHeroBanner from '../../assets/images/ayush_hero_banner.jpg';

export const CollegeProfileView = ({ user, onNavigate, onBack, isPublicView = false }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'departments' | 'infrastructure' | 'placements'
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [collegeData, setCollegeData] = useState({
    name: user?.name || 'Dr. Rajeshwar Pant',
    title: user?.role || 'Dean of Academic Affairs & Placement Head',
    institution: 'National Institute of Ayurveda',
    institutionFull: 'National Institute of Ayurveda (Deemed to be University)',
    categoryTag: 'Deemed to be University (De-novo)',
    aisheCode: user?.id || 'AISHE-C-24901',
    email: user?.email || 'dean.academics@nia.ac.in',
    phone: '+91 141 2635816',
    location: 'Zorawar Singh Gate, Amer Road, Jaipur 302002, Rajasthan',
    website: 'https://nia.nic.in',
    established: '1976',
    accreditations: [
      'NAAC A++ Grade (CGPA 3.68)',
      'NCISM Statutory Permitted',
      'NABH Accredited Hospital',
      'NABL Accredited Laboratory'
    ],
    enrolledScholars: user?.enrolledScholars || 680,
    placementRate: user?.placementRate || '91.4%',
    hospitalBeds: '300+ Beds',
    departmentsCount: '14 Specialties',
    bio: 'The National Institute of Ayurveda (NIA), Jaipur is the apex autonomous institute established under the Ministry of Ayush, Government of India, and declared as a Deemed to be University under the De-novo Category. NIA imparts high-caliber teaching, clinical training, postgraduate specialization, and clinical trial research across all 14 classical Ayurvedic specialties.',
    avatarImage: user?.avatarImage || rajeshwarAvatar,
    coverImage: ayushHeroBanner
  });

  const [editForm, setEditForm] = useState({ ...collegeData });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveBio = (e) => {
    e.preventDefault();
    setCollegeData({ ...editForm });
    setIsEditingBio(false);
    showToast('Institutional profile successfully updated.');
  };

  const handleShareProfile = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    showToast('Official University Profile link copied to clipboard.');
  };

  const departments = [
    {
      name: 'Department of Kayachikitsa (Internal Medicine)',
      head: 'Prof. S. N. Sharma',
      seats: '18 PG Seats',
      description: 'Specializing in systemic metabolic disorders, clinical panchakarma protocols, and autoimmune management.'
    },
    {
      name: 'Department of Shalya Tantra (Surgery & Kshara Sutra)',
      head: 'Prof. M. K. Meena',
      seats: '14 PG Seats',
      description: 'World-renowned Kshara Sutra ano-rectal unit, surgical wound management, and minimal invasive parasurgical procedures.'
    },
    {
      name: 'Department of Dravyaguna Vigyana (Pharmacology)',
      head: 'Prof. Anita Sharma',
      seats: '12 PG Seats',
      description: 'Medicinal flora pharmacognosy, chromatographic botanical finger-printing, and phytopharmacological bio-assays.'
    },
    {
      name: 'Department of Rasa Shastra & Bhaishajya Kalpana (Pharmacy)',
      head: 'Prof. Rajeshwar Pant',
      seats: '16 PG Seats',
      description: 'Schedule T GMP teaching pharmacy, classical bhasma standardizations, and heavy metal remediation research.'
    }
  ];

  const infrastructure = [
    {
      title: '300-Bed NABH Teaching Hospital',
      tag: 'NABH Accredited',
      desc: '14 specialized OPDs, 24x7 clinical emergency services, Panchakarma therapy suites, and clinical research ward.'
    },
    {
      title: 'Schedule T GMP Pharmacy Unit',
      tag: 'Statutory GMP',
      desc: 'In-house commercial-grade production of over 120 classical Ayurvedic medicines and standardization pilot plant.'
    },
    {
      title: 'NABL Drug Testing Laboratory',
      tag: 'NABL ISO 17025',
      desc: 'Equipped with HPTLC, HPLC, AAS, GC-MS, and microbiological testing for raw herb and finished drug assay validation.'
    },
    {
      title: 'Central Digital Academic Depository (NAD)',
      tag: 'DigiLocker Linked',
      desc: 'Secure national repository maintaining permanent digital transcripts, degrees, and academic merit certificates for all scholars.'
    }
  ];

  const placementPartners = [
    { name: 'Dabur R&D Centre', role: 'Clinical Formulation Apprenticeships', recruits: '42 Scholars' },
    { name: 'Patanjali Research Institute', role: 'Botanical QC & Cleanroom Officers', recruits: '38 Scholars' },
    { name: 'The Arya Vaidya Pharmacy (AVP)', role: 'Resident Physicians & Panchakarma', recruits: '26 Scholars' },
    { name: 'Himalaya Wellness Company', role: 'Analytical Validation Trainees', recruits: '18 Scholars' }
  ];

  return (
    <div className="space-y-6 pb-12 font-sans max-w-7xl mx-auto">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 bg-white text-slate-900 text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 animate-in fade-in max-w-sm sm:max-w-md">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <p className="flex-1 leading-snug">{toastMessage}</p>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Header / Back Navigation */}
      {onBack && (
        <div className="flex items-center justify-between gap-3 bg-white p-3.5 px-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <button
            onClick={onBack}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-emerald-700" />
            <span>Back</span>
          </button>
          <span className="text-xs font-semibold text-slate-500">
            College & University Institutional Profile
          </span>
        </div>
      )}

      {/* Premier Hero Banner & Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
        {/* Cover Photo with Cinematic Vignette */}
        <div className="h-48 sm:h-64 w-full relative overflow-hidden bg-slate-900">
          <img
            src={collegeData.coverImage}
            alt="Campus Cover"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Top Floating Institutional Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/40 backdrop-blur-md text-emerald-200 border border-emerald-400/30 flex items-center gap-1.5 shadow-sm">
              <Landmark className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ministry of Ayush · Apex Autonomous Institute</span>
            </span>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-slate-900 border border-white shadow-xs flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>AISHE Code: {collegeData.aisheCode}</span>
            </span>
          </div>
        </div>

        {/* Profile Info Header Container */}
        <div className="px-6 sm:px-8 pb-6 pt-0 relative bg-white">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Left: Avatar + Title & Leadership */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              {/* Prestigious Avatar Portrait - strictly isolated negative top margin */}
              <div className="-mt-14 sm:-mt-16 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-2 shadow-xl border-4 border-white shrink-0 overflow-hidden relative z-20">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200/80">
                  <img
                    src={collegeData.avatarImage}
                    alt={collegeData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Institution Title & Details - 100% on clean white card, zero overlap */}
              <div className="pt-3 sm:pt-4">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{collegeData.categoryTag}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">• Estd. {collegeData.established}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {collegeData.institution}
                </h1>

                <div className="mt-2 text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 flex-wrap font-medium">
                  <span className="text-slate-400 font-semibold">Leadership:</span>
                  <strong className="text-emerald-800 font-bold">{collegeData.name}</strong>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{collegeData.title}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1.5 font-medium text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{collegeData.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0 pt-0 sm:pt-4 self-start lg:self-start">
              {!isPublicView && (
                <button
                  onClick={() => {
                    setEditForm({ ...collegeData });
                    setIsEditingBio(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  <Edit3 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Edit Profile</span>
                </button>
              )}
              <button
                onClick={handleShareProfile}
                className="px-4 py-2.5 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Share Profile</span>
              </button>
            </div>

          </div>

          {/* Institutional Highlights Ticker */}
          <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mr-1">
              Recognitions:
            </span>
            {collegeData.accreditations.map((acc, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px] flex items-center gap-1"
              >
                <Award className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>{acc}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Standalone Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-md transition-shadow flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Enrolled Scholars</span>
            <span className="text-2xl font-extrabold text-slate-900 mt-0.5 block">{collegeData.enrolledScholars}</span>
            <span className="text-[11px] text-slate-500 font-medium">BAMS, MD/MS & Ph.D Scholars</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-md transition-shadow flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/60 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Placement Rate</span>
            <span className="text-2xl font-extrabold text-emerald-700 mt-0.5 block">{collegeData.placementRate}</span>
            <span className="text-[11px] text-emerald-800 font-medium">520 Placed · Pharma & Clinical</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-md transition-shadow flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center justify-center shrink-0">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Teaching Hospital</span>
            <span className="text-2xl font-extrabold text-slate-900 mt-0.5 block">{collegeData.hospitalBeds}</span>
            <span className="text-[11px] text-blue-800 font-medium">NABH Accredited 14 OPDs</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-md transition-shadow flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Specialties</span>
            <span className="text-2xl font-extrabold text-slate-900 mt-0.5 block">{collegeData.departmentsCount}</span>
            <span className="text-[11px] text-purple-800 font-medium">NCISM Permitted PG Wings</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'overview'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>About & Administration</span>
        </button>

        <button
          onClick={() => setActiveTab('departments')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'departments'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Academic Departments ({departments.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('infrastructure')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'infrastructure'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Hospital & Facilities</span>
        </button>

        <button
          onClick={() => setActiveTab('placements')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'placements'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Placement & Industry Partners</span>
        </button>
      </div>

      {/* Tab 1: About & Administration */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main About Description */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>Institutional Overview</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {collegeData.bio}
            </p>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Institutional Accreditations & Recognitions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {collegeData.accreditations.map((acc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{acc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Dean Info Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Registrar & Dean Desk
            </h3>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Official Email</span>
                  <a href={`mailto:${collegeData.email}`} className="text-emerald-800 font-semibold hover:underline">
                    {collegeData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Office Telephone</span>
                  <span className="text-slate-700 font-medium">{collegeData.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Official Portal</span>
                  <a
                    href={collegeData.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-800 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>{collegeData.website}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Established Year</span>
                  <span className="text-slate-700 font-medium">{collegeData.established} (50th Golden Jubilee)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Academic Departments */}
      {activeTab === 'departments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {departments.map((dept, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-slate-900">{dept.name}</h4>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                  {dept.seats}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{dept.description}</p>
              <div className="text-[11px] text-slate-600 font-medium pt-2 border-t border-slate-100 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                <span>Head of Department: <strong className="text-slate-800">{dept.head}</strong></span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Hospital & Infrastructure */}
      {activeTab === 'infrastructure' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infrastructure.map((fac, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-soft space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-slate-900">{fac.title}</h4>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200 shrink-0">
                  {fac.tag}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{fac.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Placement & Industry Partners */}
      {activeTab === 'placements' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-700" />
                  <span>Institutional Placement & Clinical Training Partners</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  MoUs and enterprise recruitment ties established under NCISM Skill Bridge framework
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {collegeData.placementRate} Placed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {placementPartners.map((partner, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{partner.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{partner.role}</p>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold text-xs shrink-0 shadow-2xs">
                    {partner.recruits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {isEditingBio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-700" />
                <h3 className="font-bold text-slate-900 text-base">Edit Institutional Profile</h3>
              </div>
              <button
                onClick={() => setIsEditingBio(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveBio} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Dean / Head of Institution Name
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Designation / Academic Role
                </label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Institutional Overview Statement
                </label>
                <textarea
                  rows={4}
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Office Telephone
                  </label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Official Website URL
                </label>
                <input
                  type="url"
                  value={editForm.website}
                  onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditingBio(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-sm cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeProfileView;
