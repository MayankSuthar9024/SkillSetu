import React, { useState } from 'react';
import { 
  BookOpen, 
  PlusCircle, 
  Sparkles, 
  Search, 
  Clock, 
  CheckCircle2, 
  Tag, 
  Layers, 
  UploadCloud, 
  ChevronRight, 
  X,
  CreditCard,
  PlayCircle,
  Eye,
  UserCheck,
  ShoppingBag,
  Star
} from 'lucide-react';

import courseGmpPoster from '../assets/images/course_gmp_poster.jpg';
import courseGcpPoster from '../assets/images/course_gcp_poster.jpg';
import ayushHeroBanner from '../assets/images/ayush_hero_banner.jpg';

export function CoursesPage({ currentUser, activePortalId }) {
  // Only faculty members can post courses; students can only view and buy/watch posted courses
  const isFacultyPortal = activePortalId === 'faculty';
  
  const [isPostingOpen, setIsPostingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [publishSuccess, setPublishSuccess] = useState(false);
  
  // Student Buy & Watch Modal State
  const [selectedCourseForBuy, setSelectedCourseForBuy] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);

  // Published Course Posters List
  const [coursesList, setCoursesList] = useState([
    { 
      id: 'mc-1', 
      title: 'Schedule T Basics & Manufacturing Compliance', 
      category: 'Manufacturing & GMP',
      duration: '90 mins', 
      enrolled: 142, 
      rating: '4.9', 
      price: '₹499',
      posterImage: courseGmpPoster,
      author: 'Prof. Meenakshi Joshi',
      authorRole: 'HOD Dravyaguna, AIIA New Delhi',
      targetCohort: 'BAMS Final Year',
      skillGap: 'Understanding Indian pharmaceutical manufacturing requirements, premises, equipment, hygiene, and documentation under Drugs Rules 1945.',
      competencies: ['Schedule T Rules', 'Cleanroom Hygiene', 'GMP Protocol', 'QA SOPs']
    },
    { 
      id: 'mc-2', 
      title: 'Good Clinical Practice (GCP) – ICH E6(R3)', 
      category: 'Clinical Research',
      duration: '120 mins', 
      enrolled: 198, 
      rating: '4.9', 
      price: '₹499',
      posterImage: courseGcpPoster,
      author: 'Prof. Meenakshi Joshi',
      authorRole: 'NCISM Preceptor',
      targetCohort: 'MD Dravyaguna Scholars',
      skillGap: 'International ethical, scientific, and quality standards for clinical trials. Emphasis on participant protection, data reliability, and risk-based quality thinking.',
      competencies: ['ICH E6(R3)', 'Informed Consent', 'Trial Lifecycle', 'Data Integrity']
    },
    { 
      id: 'mc-3', 
      title: 'Good Manufacturing Practice (GMP) Basics', 
      category: 'Quality Assurance / QA',
      duration: '90 mins', 
      enrolled: 112, 
      rating: '4.8', 
      price: 'Free Access',
      posterImage: ayushHeroBanner,
      author: 'Dr. Rajesh Vaidya',
      authorRole: 'QA Director, Dabur R&D',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Quality-management framework for consistently producing and controlling medicines. Covers validation, documentation, and contamination control.',
      competencies: ['WHO-GMP Standards', 'Quality Systems', 'Contamination Control', 'Validation SOPs']
    },
    { 
      id: 'mc-4', 
      title: 'Regulatory Affairs Basics & CDSCO Framework', 
      category: 'Regulatory Compliance',
      duration: '90 mins', 
      enrolled: 85, 
      rating: '4.7', 
      price: '₹499',
      posterImage: courseGcpPoster,
      author: 'Prof. S. K. Sharma',
      authorRole: 'CDSCO Regulatory Advisor',
      targetCohort: 'BAMS 3rd Year',
      skillGap: 'CDSCO regulatory framework, Drugs and Cosmetics Act/Rules, and New Drugs and Clinical Trials Rules high-level drug approval pathways.',
      competencies: ['CDSCO Pathway', 'Drug Approval', 'Submission Checklist', 'CTRI Rules']
    },
    { 
      id: 'mc-5', 
      title: 'Pharmacovigilance Basics & ADR Safety Monitoring', 
      category: 'Pharmacovigilance',
      duration: '90 mins', 
      enrolled: 156, 
      rating: '4.9', 
      price: '₹499',
      posterImage: courseGmpPoster,
      author: 'Prof. Meenakshi Joshi',
      authorRole: 'HOD Dravyaguna, AIIA New Delhi',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Detection, assessment, understanding and prevention of adverse drug effects. Real-world ADR reporting workflows and safety signal processing.',
      competencies: ['ADR Detection', 'WHO-UMC Causality', 'Safety Reporting', 'Signal Assessment']
    }
  ]);

  // Form State for Faculty Posting a Course
  const [courseForm, setCourseForm] = useState({
    title: '',
    category: 'Manufacturing & GMP',
    price: '₹499',
    duration: '90 mins',
    targetCohort: 'BAMS Final Year',
    skillGap: '',
    competencies: '',
    author: currentUser?.name || 'Prof. Meenakshi Joshi',
    authorRole: currentUser?.role || 'Professor & HOD',
    videoUrl: '',
    attachedFileName: ''
  });

  // Task 5 PDF Recommended Presets for 1-Click Auto-Fill
  const coursePresets = [
    {
      label: 'Schedule T Basics',
      tag: 'Manufacturing',
      title: 'Schedule T Basics & Manufacturing Compliance',
      category: 'Manufacturing & GMP',
      price: '₹499',
      duration: '90 mins',
      targetCohort: 'BAMS Final Year',
      skillGap: 'Understanding Indian pharmaceutical manufacturing requirements, premises, equipment, hygiene, and documentation under Drugs Rules 1945.',
      competencies: 'Schedule T Rules, Premises Hygiene, GMP Compliance, QA Documentation'
    },
    {
      label: 'GCP – ICH E6(R3)',
      tag: 'Clinical Research',
      title: 'Good Clinical Practice (GCP) – ICH E6(R3)',
      category: 'Clinical Research',
      price: '₹499',
      duration: '120 mins',
      targetCohort: 'MD Dravyaguna Scholars',
      skillGap: 'International ethical, scientific, and quality standards for clinical trials. Emphasis on participant protection, data reliability, and risk-based quality thinking.',
      competencies: 'ICH E6(R3), Informed Consent, Trial Lifecycle, Data Integrity'
    },
    {
      label: 'GMP Basics',
      tag: 'Quality Assurance',
      title: 'Good Manufacturing Practice (GMP) Basics',
      category: 'Quality Assurance / QA',
      price: 'Free Access',
      duration: '90 mins',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Quality-management framework for consistently producing and controlling medicines. Covers validation, documentation, and contamination control.',
      competencies: 'WHO-GMP Standards, Quality Systems, Contamination Control, Validation SOPs'
    },
    {
      label: 'Regulatory Affairs',
      tag: 'Regulatory',
      title: 'Regulatory Affairs Basics & CDSCO Framework',
      category: 'Regulatory Compliance',
      price: '₹499',
      duration: '90 mins',
      targetCohort: 'BAMS 3rd Year',
      skillGap: 'CDSCO regulatory framework, Drugs and Cosmetics Act/Rules, and New Drugs and Clinical Trials Rules high-level drug approval pathways.',
      competencies: 'CDSCO Regulatory Pathway, Submission Checklist, CTRI Rules, Compliance'
    },
    {
      label: 'Pharmacovigilance',
      tag: 'Medicine Safety',
      title: 'Pharmacovigilance Basics & ADR Safety Monitoring',
      category: 'Pharmacovigilance',
      price: '₹499',
      duration: '90 mins',
      targetCohort: 'All Ayush Scholars',
      skillGap: 'Detection, assessment, understanding and prevention of adverse drug effects. Real-world ADR reporting workflows and safety signal processing.',
      competencies: 'ADR Detection, WHO-UMC Causality, Safety Reporting, Signal Assessment'
    }
  ];

  const handleApplyPreset = (preset) => {
    setCourseForm({
      ...courseForm,
      title: preset.title,
      category: preset.category,
      price: preset.price,
      duration: preset.duration,
      targetCohort: preset.targetCohort,
      skillGap: preset.skillGap,
      competencies: preset.competencies,
      attachedFileName: `${preset.label.replace(/[^a-zA-Z0-9]/g, '_')}_Standard_SOP.pdf`
    });
  };

  const handlePublishCourse = () => {
    if (!courseForm.title.trim()) {
      alert('Please enter a Course Title before publishing.');
      return;
    }

    const newCourse = {
      id: `mc-${Date.now()}`,
      title: courseForm.title,
      category: courseForm.category,
      duration: courseForm.duration,
      enrolled: 0,
      rating: 'New',
      price: courseForm.price || '₹499',
      posterImage: courseGmpPoster,
      author: courseForm.author || 'Prof. Meenakshi Joshi',
      authorRole: courseForm.authorRole || 'Faculty Preceptor',
      targetCohort: courseForm.targetCohort,
      skillGap: courseForm.skillGap || 'Targeted student skill-gap development module',
      competencies: courseForm.competencies ? courseForm.competencies.split(',').map(c => c.trim()) : ['Core Competency'],
      attachedFileName: courseForm.attachedFileName || 'Course_Module_SOP.pdf'
    };

    setCoursesList(prev => [newCourse, ...prev]);
    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setIsPostingOpen(false);
      setCourseForm({
        title: '',
        category: 'Manufacturing & GMP',
        price: '₹499',
        duration: '90 mins',
        targetCohort: 'BAMS Final Year',
        skillGap: '',
        competencies: '',
        author: currentUser?.name || 'Prof. Meenakshi Joshi',
        authorRole: currentUser?.role || 'Professor & HOD',
        videoUrl: '',
        attachedFileName: ''
      });
    }, 1200);
  };

  // Category Filtering
  const categories = ['All', 'Manufacturing & GMP', 'Clinical Research', 'Regulatory Compliance', 'Pharmacovigilance', 'Quality Assurance / QA'];

  const filteredCourses = coursesList.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.skillGap.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.competencies.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Clean Top Header Bar: Search on Left, + Post Course on Right */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-soft flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Left Side: Search Bar Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by title, faculty, or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Right Side: + Post Course Button (Rendered ONLY for Faculty, Removed from Student Page) */}
          {isFacultyPortal && (
            <button
              onClick={() => setIsPostingOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-emerald-300" />
              <span>+ Post Course</span>
            </button>
          )}

        </div>

        {/* Course Posters Grid (Posted by Faculty) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col overflow-hidden group"
            >
              {/* Poster Cover Thumbnail Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img 
                  src={course.posterImage} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-950 bg-emerald-400 px-2.5 py-1 rounded-lg shadow-xs">
                    {course.category}
                  </span>
                  <span className="text-xs font-extrabold text-slate-950 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs">
                    {course.price}
                  </span>
                </div>

                {/* Bottom Overlay: Author Faculty Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white z-10">
                  <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white font-extrabold text-[11px] flex items-center justify-center border border-white/20 shrink-0">
                    {course.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-extrabold text-white block truncate leading-none">
                      Posted by: {course.author}
                    </span>
                    <span className="text-[10px] text-emerald-200 block truncate mt-0.5 font-medium">
                      {course.authorRole}
                    </span>
                  </div>
                </div>
              </div>

              {/* Poster Card Details Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.skillGap}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="text-slate-700 font-extrabold">{course.enrolled} Enrolled</span>
                    <span>•</span>
                    <span className="text-amber-700 font-extrabold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{course.rating}</span>
                    </span>
                  </div>

                  {/* Competencies Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {course.competencies.map((comp, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Role-Specific Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900">
                    {course.price === 'Free Access' ? 'Free for Scholars' : course.price}
                  </span>

                  {isFacultyPortal ? (
                    /* FACULTY VIEW: Manage & SOP (Faculty do NOT enroll) */
                    <button
                      onClick={() => alert(`Opening preceptor SOP canvas for: ${course.title}`)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 border border-slate-200"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>Manage Course</span>
                    </button>
                  ) : (
                    /* STUDENT VIEW: Buy & Watch Course */
                    <button
                      onClick={() => {
                        setSelectedCourseForBuy(course);
                        setIsPurchased(false);
                      }}
                      className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Buy & Watch</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FACULTY ONLY: Simple "+ Post Course" Modal Dialog */}
      {isFacultyPortal && isPostingOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative my-8">
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Faculty Publishing Desk
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 mt-2">
                  + Post New Course
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Publish a new training course poster so students can buy and watch your module.
                </p>
              </div>

              <button
                onClick={() => setIsPostingOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Success Toast */}
            {publishSuccess && (
              <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-lg flex items-center justify-between animate-bounce">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-200" />
                  <div>
                    <h4 className="font-extrabold text-sm">Course Posted Successfully!</h4>
                    <p className="text-xs text-emerald-100">Course poster is now live on the Courses tab for all students.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 1-Click Regulatory Presets */}
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80 space-y-2.5">
              <span className="text-[11px] font-extrabold text-emerald-950 uppercase tracking-wider block">
                Quick 1-Click Topic Templates:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {coursePresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleApplyPreset(preset)}
                    className="px-3 py-1.5 bg-white hover:bg-emerald-800 hover:text-white text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition-all cursor-pointer"
                  >
                    + {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Course Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Schedule T Basics & Manufacturing Compliance"
                  value={courseForm.title}
                  onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Domain / Category
                  </label>
                  <select
                    value={courseForm.category}
                    onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Manufacturing & GMP">Manufacturing & GMP</option>
                    <option value="Clinical Research">Clinical Research (GCP)</option>
                    <option value="Regulatory Compliance">Regulatory Compliance</option>
                    <option value="Pharmacovigilance">Pharmacovigilance</option>
                    <option value="Quality Assurance / QA">Quality Assurance / QA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Course Price (₹)
                  </label>
                  <select
                    value={courseForm.price}
                    onChange={(e) => setCourseForm({ ...courseForm, price: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="₹499">₹499 (Standard)</option>
                    <option value="₹799">₹799 (Advanced)</option>
                    <option value="Free Access">Free for Scholars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Duration
                  </label>
                  <select
                    value={courseForm.duration}
                    onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="60 mins">60 mins</option>
                    <option value="90 mins">90 mins</option>
                    <option value="120 mins">120 mins</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Course Description & Targeted Skill Gap
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the practical concepts and skill gap this course addresses..."
                  value={courseForm.skillGap}
                  onChange={(e) => setCourseForm({ ...courseForm, skillGap: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Core Competencies (Comma Separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Schedule T Rules, Cleanroom SOPs, GMP Audit"
                  value={courseForm.competencies}
                  onChange={(e) => setCourseForm({ ...courseForm, competencies: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                />
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Attach SOP / Reference Material (.pdf)
                </label>
                <div className="border border-dashed border-slate-300 rounded-xl p-3 text-center bg-white cursor-pointer">
                  <UploadCloud className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">
                    {courseForm.attachedFileName || 'Upload SOP Document or Guideline PDF'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setIsPostingOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handlePublishCourse}
                className="px-6 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Publish & Post Course</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* STUDENT: Buy & Watch Course Modal */}
      {selectedCourseForBuy && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative my-8">
            
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Student Checkout & Player
                </span>
                <h2 className="text-xl font-extrabold text-slate-900 mt-2">
                  {selectedCourseForBuy.title}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Posted by {selectedCourseForBuy.author} ({selectedCourseForBuy.authorRole})
                </p>
              </div>

              <button
                onClick={() => setSelectedCourseForBuy(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Thumbnail */}
            <div className="h-44 w-full rounded-2xl overflow-hidden relative bg-slate-900">
              <img src={selectedCourseForBuy.posterImage} alt={selectedCourseForBuy.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <PlayCircle className="w-14 h-14 text-white drop-shadow-lg animate-pulse cursor-pointer" />
              </div>
            </div>

            {isPurchased ? (
              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h3 className="font-extrabold text-base text-emerald-950">Course Purchased & Unlocked!</h3>
                <p className="text-xs text-emerald-900">You now have lifetime access to watch this module and download preceptor SOPs.</p>
                <button
                  onClick={() => alert(`Starting video lecture for: ${selectedCourseForBuy.title}`)}
                  className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-4 h-4 text-white" />
                  <span>Start Watching Video Lecture</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between items-center font-bold text-slate-900 text-sm">
                    <span>Course Tuition Fee:</span>
                    <span className="text-emerald-800 font-extrabold">{selectedCourseForBuy.price}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{selectedCourseForBuy.skillGap}</p>
                </div>

                <button
                  onClick={() => setIsPurchased(true)}
                  className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg cursor-pointer flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <CreditCard className="w-4 h-4 text-emerald-300" />
                  <span>Proceed to Buy & Watch ({selectedCourseForBuy.price})</span>
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default CoursesPage;
