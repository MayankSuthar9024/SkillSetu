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
  ArrowRight,
  Flame,
  GraduationCap,
  UserCheck
} from 'lucide-react';

import aaravAvatar from '../assets/images/aarav_avatar.jpg';
import vikramAvatar from '../assets/images/vikram_avatar.jpg';
import meenakshiAvatar from '../assets/images/meenakshi_avatar.jpg';
import rajeshwarAvatar from '../assets/images/rajeshwar_avatar.jpg';
import sanjayAvatar from '../assets/images/sanjay_avatar.jpg';
import priyaAvatar from '../assets/images/priya_avatar.jpg';
import ananyaAvatar from '../assets/images/ananya_avatar.jpg';
import { INITIAL_FEED_POSTS } from '../data/feedPostsData';

export function FeedPage({ onNavigate, currentUser, activePortalId, openCreatePostModal, onCloseCreatePostModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Internship');
  const [showCreatePost, setShowCreatePost] = useState(Boolean(openCreatePostModal));
  const [bookmarkedIds, setBookmarkedIds] = useState([1, 2]);
  
  // Track applied internship post IDs (for student scholars)
  const [appliedPostIds, setAppliedPostIds] = useState([]);

  // Track nominated internship post IDs (for faculty preceptors)
  const [nominatedPostIds, setNominatedPostIds] = useState([]);
  const [selectedInternshipForNomination, setSelectedInternshipForNomination] = useState(null);
  const [selectedStudentForNomination, setSelectedStudentForNomination] = useState(
    'Aarav Sharma (BAMS Final Year · Diagnostic Score: 88% · Schedule T GMP Certified)'
  );
  const [nominationEndorsement, setNominationEndorsement] = useState('');
  const [isSubmittingNomination, setIsSubmittingNomination] = useState(false);
  
  // Modal state for applying to an internship (for students)
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [applyCoverNote, setApplyCoverNote] = useState('');
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Check if current logged-in user is a faculty member / preceptor / professor
  const isFacultyUser = Boolean(
    activePortalId === 'faculty' ||
    currentUser?.role?.toLowerCase().includes('faculty') ||
    currentUser?.role?.toLowerCase().includes('professor') ||
    currentUser?.role?.toLowerCase().includes('preceptor') ||
    currentUser?.role?.toLowerCase().includes('hod') ||
    currentUser?.id?.toLowerCase().includes('fac-') ||
    currentUser?.coursesAuthored !== undefined ||
    currentUser?.menteeCount !== undefined
  );

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 5);
      setIsLoadingMore(false);
    }, 400);
  };

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

  // 15 rich posts initialized with verified profiles across all stakeholder roles
  const [posts, setPosts] = useState(INITIAL_FEED_POSTS);

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
              avatarImage: currentUser?.avatarImage || aaravAvatar,
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

  // Open the Apply Internship Modal (for students) or redirect to Nominate (for faculty)
  const handleOpenApplyModal = (post) => {
    if (isFacultyUser) {
      handleOpenNominateModal(post);
      return;
    }
    setSelectedInternship(post);
    setApplyCoverNote(`Dear ${post.author.name} Recruiting Team,\n\nI am eager to apply for this intensive internship. My SkillSetu verified diagnostic score is ${currentUser?.readiness || '88%'}, and I have completed accredited micro-sprints in Schedule T GMP and HPLC Standardization.`);
  };

  // Open the Preceptor Scholar Nomination Modal (for faculty preceptors)
  const handleOpenNominateModal = (post) => {
    setSelectedInternshipForNomination(post);
    const facultyRole = currentUser?.role || 'Professor & HOD (Dravyaguna)';
    const facultyInst = currentUser?.institution || 'All India Institute of Ayurveda (AIIA), New Delhi';
    setNominationEndorsement(
      `As ${facultyRole} at ${facultyInst}, I formally endorse and nominate this scholar for the ${post.title} position at ${post.author.name}. The candidate has demonstrated exemplary lab discipline, analytical method compliance, and verifiable clinical skill readiness.`
    );
  };

  // Submit Preceptor Scholar Nomination
  const handleConfirmNomination = (e) => {
    e.preventDefault();
    if (!selectedInternshipForNomination) return;

    setIsSubmittingNomination(true);
    setTimeout(() => {
      setNominatedPostIds(prev => [...prev, selectedInternshipForNomination.id]);
      setIsSubmittingNomination(false);
      const companyName = selectedInternshipForNomination.author.name;
      const scholarName = selectedStudentForNomination.split('(')[0].trim();
      setSelectedInternshipForNomination(null);
      showToast(`Scholar ${scholarName} nominated to ${companyName} with official Preceptor Endorsement & NCISM seal.`);
    }, 450);
  };

  // Submit Student Internship Application
  const handleConfirmApplication = (e) => {
    e.preventDefault();
    if (!selectedInternship) return;
    
    setIsSubmittingApplication(true);
    setTimeout(() => {
      setAppliedPostIds(prev => [...prev, selectedInternship.id]);
      setIsSubmittingApplication(false);
      const internshipName = selectedInternship.author.name;
      setSelectedInternship(null);
      showToast(`Application submitted to ${internshipName}. Your verified SkillSetu score (${currentUser?.readiness || '88%'}) has been sent.`);
    }, 450);
  };

  const handleCreatePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const authorName = currentUser?.name || 'Aarav Sharma';
    const authorRole = currentUser?.role || 'BAMS Final Year Scholar';
    const authorInst = currentUser?.institution || 'National Institute of Ayurveda, Jaipur';
    const authorAvatar = currentUser?.avatar || 'AS';
    
    // Auto-detect roleType for newly created post
    const roleType = currentUser?.roleType || (
      currentUser?.role?.toLowerCase().includes('recruiter') || currentUser?.institution?.toLowerCase().includes('dabur') ? 'company' :
      currentUser?.role?.toLowerCase().includes('professor') || currentUser?.role?.toLowerCase().includes('faculty') ? 'faculty' :
      currentUser?.role?.toLowerCase().includes('dean') ? 'college' :
      currentUser?.role?.toLowerCase().includes('admin') ? 'admin' : 'student'
    );

    const newPostObj = {
      id: Date.now(),
      isInternship: newPostCategory === 'Internship',
      author: {
        id: currentUser?.id || `user-${Date.now()}`,
        name: authorName,
        brandName: currentUser?.brandName || (roleType === 'company' ? authorInst : authorName),
        role: authorRole,
        roleType: roleType,
        institution: authorInst,
        location: currentUser?.location || authorInst,
        bio: currentUser?.bio || `${authorName} - ${authorRole} at ${authorInst}`,
        avatar: authorAvatar,
        avatarImage: currentUser?.avatarImage || aaravAvatar,
        avatarBg: roleType === 'company' ? 'bg-emerald-950' : 'bg-emerald-700',
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


      {/* Main Content Layout */}
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5 px-3 sm:px-0">
          
          {/* Quick Create Post Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 element-glow-shadow">
            <div className="flex gap-2.5 sm:gap-3 items-center">
              <div 
                onClick={() => onNavigate('profile')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center cursor-pointer border border-emerald-700 shrink-0 overflow-hidden"
              >
                <img src={currentUser?.avatarImage || aaravAvatar} alt={currentUser?.name || 'Aarav Sharma'} className="w-full h-full object-cover" />
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

          {/* Search Bar */}
          <div className="flex justify-end">
            <div className="relative w-full sm:w-64">
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
              filteredPosts.slice(0, visibleCount).map((post) => {
                const isBookmarked = bookmarkedIds.includes(post.id);
                const isApplied = appliedPostIds.includes(post.id);
                const isNominated = nominatedPostIds.includes(post.id);

                return (
                  <article key={post.id} className="bg-white rounded-2xl border border-slate-200/90 element-glow-shadow-hover overflow-hidden transition-all">
                    {/* Post Card Header */}
                    <div className="p-4 sm:p-5 pb-3">
                      <div className="flex justify-between items-start gap-2">
                        
                        {/* Author Info */}
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 max-w-full">
                          <div 
                            onClick={() => onNavigate('profile', post.author)}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${post.author.avatarBg} text-white font-extrabold text-xs flex items-center justify-center cursor-pointer border border-white shrink-0 overflow-hidden`}
                            title="View Author Profile"
                          >
                            {post.author.avatarImage ? (
                              <img src={post.author.avatarImage} alt={post.author.name} className="w-full h-full object-cover" />
                            ) : (
                              post.author.avatar
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1 min-w-0">
                              <span 
                                onClick={() => onNavigate('profile', post.author)}
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
                        
                        {/* Internship Specs Grid Card (Visible only to students, hidden on faculty portal feed) */}
                        {post.isInternship && !isFacultyUser && (
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
                                <span className="text-[9px] text-slate-400 font-bold block uppercase">Role</span>
                                <span className="font-semibold text-emerald-800 text-xs">{post.openings}</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-slate-200/80 text-[11px]">
                              <div className="text-slate-600 flex items-center gap-1 truncate">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                <span className="font-medium text-slate-700">{post.eligibility}</span>
                              </div>

                              {/* Prominent Action Button: Apply for Student */}
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

                        {/* Post Content - kept short */}
                        <p className="text-slate-600 text-xs leading-relaxed mt-1 line-clamp-2">
                          {post.content}
                        </p>
                      </div>
                    </div>



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
                        {post.isInternship && !isFacultyUser && !isApplied && (
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
                                <div 
                                  onClick={() => onNavigate('profile', { name: comment.user, avatarImage: comment.avatarImage, avatar: comment.avatar, roleType: 'student' })}
                                  className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-[10px] flex items-center justify-center shrink-0 overflow-hidden cursor-pointer"
                                  title={`View Profile (${comment.user})`}
                                >
                                  {comment.avatarImage ? (
                                    <img src={comment.avatarImage} alt={comment.user} className="w-full h-full object-cover" />
                                  ) : (
                                    comment.avatar
                                  )}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <div className="flex justify-between items-center">
                                    <span 
                                      onClick={() => onNavigate('profile', { name: comment.user, avatarImage: comment.avatarImage, avatar: comment.avatar, roleType: 'student' })}
                                      className="font-bold text-[11px] text-slate-900 truncate cursor-pointer hover:text-emerald-800"
                                    >
                                      {comment.user}
                                    </span>
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

            {/* Load More Button */}
            {visibleCount < filteredPosts.length ? (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-emerald-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-60 inline-flex items-center gap-2"
                >
                  {isLoadingMore ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-emerald-700/30 border-t-emerald-700 rounded-full animate-spin" />
                      <span>Loading updates...</span>
                    </>
                  ) : (
                    <span>Load More</span>
                  )}
                </button>
              </div>
            ) : filteredPosts.length > 5 ? (
              <div className="pt-4 pb-2 text-center text-xs text-slate-400 font-medium">
                You're all caught up with the community feed.
              </div>
            ) : null}

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
                  <User className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>Role: {selectedInternship.openings}</span>
                </div>
              </div>
            </div>

            {/* Candidate Snapshot */}
            <div className="mt-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase text-emerald-900 tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  SkillSetu Portfolio Attached
                </span>
                <span className="text-xs font-bold text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-300">
                  Score: {currentUser?.readiness || '88%'}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900">{currentUser?.name || 'Aarav Sharma'}</p>
              <p className="text-[11px] text-slate-600">
                {currentUser?.degree || 'BAMS Scholar'} • {currentUser?.institution || 'National Institute of Ayurveda, Jaipur'}
              </p>
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

      {/* PRECEPTOR SCHOLAR NOMINATION MODAL (FOR FACULTY) */}
      {selectedInternshipForNomination && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${selectedInternshipForNomination.author.avatarBg} text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0`}>
                  {selectedInternshipForNomination.author.avatar}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1 w-fit">
                    <UserCheck className="w-3 h-3 text-emerald-700" />
                    Official Preceptor Nomination Desk
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug mt-0.5">
                    {selectedInternshipForNomination.author.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedInternshipForNomination(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
                title="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Position Summary */}
            <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[9px] uppercase font-bold text-slate-400 block">Target Internship Role</span>
              <h4 className="font-bold text-xs text-slate-900 mb-1">{selectedInternshipForNomination.title}</h4>
              <div className="grid grid-cols-2 gap-2 mt-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                  <span className="font-bold text-slate-900">{selectedInternshipForNomination.stipend}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>{selectedInternshipForNomination.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span className="truncate">{selectedInternshipForNomination.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Users className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>{selectedInternshipForNomination.openings}</span>
                </div>
              </div>
            </div>

            {/* Nominating Preceptor Credentials */}
            <div className="mt-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase text-emerald-900 tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Nominating Preceptor Credentials
                </span>
                <span className="text-[10px] font-bold text-emerald-900 bg-white px-2 py-0.5 rounded border border-emerald-300 font-mono">
                  NCISM/FAC/DL/2012/8842
                </span>
              </div>
              <p className="text-xs font-bold text-slate-900">{currentUser?.name || 'Prof. Meenakshi Joshi'}</p>
              <p className="text-[11px] text-slate-600">
                {currentUser?.role || 'Professor & HOD (Dravyaguna)'} • {currentUser?.institution || 'All India Institute of Ayurveda (AIIA), New Delhi'}
              </p>
            </div>

            {/* Nomination Form */}
            <form onSubmit={handleConfirmNomination} className="mt-3 space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Select Department Scholar to Nominate
                </label>
                <select
                  value={selectedStudentForNomination}
                  onChange={(e) => setSelectedStudentForNomination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-600"
                >
                  <option value="Aarav Sharma (BAMS Final Year · Diagnostic Score: 88% · Schedule T GMP Certified)">
                    Aarav Sharma (BAMS Final Year · Diagnostic Score: 88% · Schedule T GMP Certified)
                  </option>
                  <option value="Sunita Patel (BAMS 3rd Year · Diagnostic Score: 89% · Cleanroom Hygiene & SOPs)">
                    Sunita Patel (BAMS 3rd Year · Diagnostic Score: 89% · Cleanroom Hygiene & SOPs)
                  </option>
                  <option value="Karan Malhotra (MD Ayurveda · Diagnostic Score: 96% · NABL Heavy Metals Validation)">
                    Karan Malhotra (MD Ayurveda · Diagnostic Score: 96% · NABL Heavy Metals Validation)
                  </option>
                  <option value="Pooja Deshmukh (BAMS Final Year · Diagnostic Score: 91% · Clinical Pharmacology)">
                    Pooja Deshmukh (BAMS Final Year · Diagnostic Score: 91% · Clinical Pharmacology)
                  </option>
                </select>
                <p className="text-[10px] text-slate-400 mt-1">
                  *Only students from your mentored cohort who satisfy Schedule T GMP and prerequisite clinical benchmarks are selectable.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Preceptor Recommendation & Letter of Support
                </label>
                <textarea
                  rows={3}
                  value={nominationEndorsement}
                  onChange={(e) => setNominationEndorsement(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedInternshipForNomination(null)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmittingNomination}
                  className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-70"
                >
                  {isSubmittingNomination ? (
                    <span>Submitting Nomination...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Submit Official Nomination</span>
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
