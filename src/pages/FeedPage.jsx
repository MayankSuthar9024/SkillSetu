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
  MoreHorizontal,
  User,
  ExternalLink,
  BookOpen,
  Briefcase,
  Flame
} from 'lucide-react';

export function FeedPage({ onNavigate, currentUser, openCreatePostModal, onCloseCreatePostModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostText, setNewPostText] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Clinical Case');
  const [showCreatePost, setShowCreatePost] = useState(Boolean(openCreatePostModal));
  const [showHelpBanner, setShowHelpBanner] = useState(true);

  React.useEffect(() => {
    if (openCreatePostModal) {
      setShowCreatePost(true);
    }
  }, [openCreatePostModal]);
  const [bookmarkedIds, setBookmarkedIds] = useState([2]);

  // Initial feed posts sample data
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: 'Dr. Ananya Vaidya',
        role: 'Senior Ayurvedic Clinical Researcher & Faculty',
        institution: 'All India Institute of Ayurveda (AIIA), New Delhi',
        avatar: 'AV',
        avatarBg: 'bg-emerald-700',
        verified: true
      },
      time: '2 hours ago',
      category: 'Clinical Case',
      title: 'Standardized Nadi Pariksha Protocol for Chronic Metabolic Care',
      content: 'Recently concluded a 12-week clinical study comparing digital pulse wave analysis with classical Nadi Pariksha parameters in 120 patients suffering from Type-2 Metabolic Syndrome. The correlation index reached 91.4%. Glad to share our open-access protocol notes below for student interns!',
      tags: ['NadiPariksha', 'AyushResearch', 'MetabolicHealth', 'BAMS2026'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'Pulse wave sensor mapping correlated with Tridosha diagnostic markers.',
      likes: 142,
      isLiked: false,
      comments: [
        { id: 101, user: 'Aarav Sharma', avatar: 'AS', text: 'Dr. Ananya, does this protocol include Vata-Pitta diurnal variations?', time: '1 hr ago' },
        { id: 102, user: 'Prof. Meenakshi Joshi', avatar: 'MJ', text: 'Excellent work! We are introducing this reading in our Dravyaguna postgrad curriculum next semester.', time: '30 mins ago' }
      ],
      showComments: false,
      shares: 38,
      views: '1.4k'
    },
    {
      id: 2,
      author: {
        name: 'Aarav Sharma',
        role: 'BAMS Final Year Scholar (SkillSetu Verified Score: 88%)',
        institution: 'National Institute of Ayurveda (NIA), Jaipur',
        avatar: 'AS',
        avatarBg: 'bg-teal-700',
        verified: true
      },
      time: '5 hours ago',
      category: 'Skill Achievement',
      title: 'Earned Level 3 Certification in Herbal Standardization & HPLC Quality Control!',
      content: 'Super thrilled to complete the 4-week micro-sprint on Chromatographic Fingerprinting for Ashwagandha & Guduchi extracts under Dabur R&D Mentorship. Huge thanks to SkillSetu for bridging academic theory with hands-on lab industry specs.',
      tags: ['SkillBadge', 'Dravyaguna', 'QualityControl', 'PhytoChemistry', 'AyushIndustry'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'HPLC Chromatogram report verified via SkillSetu blockchain node.',
      likes: 215,
      isLiked: true,
      comments: [
        { id: 201, user: 'Dr. Vikram Sethi', avatar: 'VS', text: 'Congrats Aarav! Your score report came across our desk. Feel free to apply for our R&D Fellow posting.', time: '3 hrs ago' }
      ],
      showComments: false,
      shares: 54,
      views: '2.8k'
    },
    {
      id: 3,
      author: {
        name: 'Dabur Ayush R&D Center',
        role: 'Enterprise Partner & Ayush Industry Recruiter',
        institution: 'Corporate Headquarters, Ghaziabad',
        avatar: 'DR',
        avatarBg: 'bg-emerald-900',
        verified: true
      },
      time: '1 day ago',
      category: 'Industry Update',
      title: 'Hiring Notice: 15 Junior Formulations Officers & Quality Control Analysts',
      content: 'We are expanding our Botanical Extraction & QC Division. Openings are available for BAMS, BHMS, BUMS, and B.Pharm (Ayush) graduates with verified SkillSetu Phytochemistry & GCP badges. Fast-track interviews start next Monday!',
      tags: ['AyushJobs', 'Recruitment2026', 'PharmaQC', 'DaburResearch'],
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'State-of-the-art Dabur Botanical Extraction Facility.',
      likes: 389,
      isLiked: false,
      comments: [
        { id: 301, user: 'Priya Nair', avatar: 'PN', text: 'Applied with my SkillSetu score 84%! Looking forward.', time: '18 hrs ago' }
      ],
      showComments: false,
      shares: 112,
      views: '5.2k'
    },
    {
      id: 4,
      author: {
        name: 'Central Council for Research in Ayurvedic Sciences (CCRAS)',
        role: 'Apex Ministry Body',
        institution: 'Ministry of Ayush, New Delhi',
        avatar: 'CC',
        avatarBg: 'bg-emerald-800',
        verified: true
      },
      time: '2 days ago',
      category: 'Research',
      title: 'National Ayush Pharmacovigilance Guidelines 2026 Released',
      content: 'The new Safety Monitoring Framework for Polyherbal Formulations is now official. All undergraduate scholars and preceptors are encouraged to go through the digital toolkit available on SkillSetu learning repository.',
      tags: ['Pharmacovigilance', 'MinistryOfAyush', 'PolyherbalSafety', 'AyushPolicy'],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      imageCaption: 'CCRAS Official Document Release 2026.',
      likes: 512,
      isLiked: false,
      comments: [],
      showComments: false,
      shares: 204,
      views: '8.1k'
    }
  ]);

  const categories = [
    { id: 'all', label: 'All', icon: Flame },
    { id: 'Clinical Case', label: 'Clinical', icon: BookOpen },
    { id: 'Skill Achievement', label: 'Skills', icon: Award },
    { id: 'Industry Update', label: 'Industry', icon: Briefcase },
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
    } else {
      setBookmarkedIds([...bookmarkedIds, postId]);
    }
  };

  const handleCreatePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const authorName = currentUser?.name || 'Aarav Sharma';
    const authorRole = currentUser?.role || 'BAMS Final Year Scholar (SkillSetu Verified)';
    const authorInst = currentUser?.institution || 'National Institute of Ayurveda (NIA), Jaipur';
    const authorAvatar = currentUser?.avatar || 'AS';

    const newPostObj = {
      id: Date.now(),
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
  };

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeFilter === 'all' || post.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16 overflow-x-hidden">
      
      {/* Feed Hero Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white py-6 sm:py-7 px-4 sm:px-6 rounded-3xl shadow-md mb-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                Community Feed
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              Ayush Doctors & Scholars Community
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl mt-1.5">
              Read medical case studies, research updates, verified skill badges, and job openings.
            </p>
          </div>

          <div className="flex gap-2.5 w-full md:w-auto">
            <button
              onClick={() => setShowCreatePost(true)}
              className="flex-1 md:flex-none bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>+ Create Post</span>
            </button>

            <button
              onClick={() => onNavigate('profile')}
              className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
            >
              <User className="w-4 h-4 shrink-0" />
              <span>My Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left / Main Feed Column */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* Non-Tech User Friendly Onboarding Help Banner */}
          {showHelpBanner && (
            <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex items-start justify-between gap-3 animate-in fade-in">
              <div className="flex gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-xs">
                  🌿
                </div>
                <div className="min-w-0">
                  <h3 className="font-extrabold text-sm text-slate-900">Welcome! Quick Guide to SkillSetu</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2.5 text-xs text-slate-700 font-medium">
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100/80 shadow-2xs">
                      <strong className="text-emerald-900 block mb-0.5 font-extrabold">1. Browse Feed</strong>
                      Read medical case studies & community posts.
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100/80 shadow-2xs">
                      <strong className="text-emerald-900 block mb-0.5 font-extrabold">2. Explore Jobs</strong>
                      Click "Jobs" to see verified Ayush openings.
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-100/80 shadow-2xs">
                      <strong className="text-emerald-900 block mb-0.5 font-extrabold">3. Share Post</strong>
                      Tap the green <span className="font-extrabold text-emerald-700 text-sm">+</span> button anytime to post.
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowHelpBanner(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-xs p-1 rounded-lg shrink-0"
                title="Dismiss Guide"
              >
                ✕
              </button>
            </div>
          )}
          
          {/* Quick Create Post Box */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-3 items-center">
              <div 
                onClick={() => onNavigate('profile')}
                className="w-10 h-10 rounded-full bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center cursor-pointer shadow-xs border-2 border-emerald-100 shrink-0"
              >
                {currentUser?.avatar || 'AS'}
              </div>
              <div className="flex-grow min-w-0">
                <button
                  onClick={() => setShowCreatePost(true)}
                  className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 font-medium px-3.5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer truncate"
                >
                  <span className="truncate">Share a clinical case or skill milestone...</span>
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 text-xs">
              <div className="flex gap-2 sm:gap-4 text-slate-600 font-semibold overflow-x-auto no-scrollbar">
                <button onClick={() => setShowCreatePost(true)} className="flex items-center gap-1 hover:text-emerald-700 cursor-pointer shrink-0">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Case Study</span>
                </button>
                <button onClick={() => setShowCreatePost(true)} className="flex items-center gap-1 hover:text-emerald-700 cursor-pointer shrink-0">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Badge</span>
                </button>
                <button onClick={() => setShowCreatePost(true)} className="flex items-center gap-1 hover:text-emerald-700 cursor-pointer shrink-0">
                  <ImageIcon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Media</span>
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
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    Create Community Feed Post
                  </h3>
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleCreatePostSubmit} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Post Category</label>
                    <select
                      value={newPostCategory}
                      onChange={(e) => setNewPostCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Clinical Case">Clinical Case Study</option>
                      <option value="Skill Achievement">Skill Milestone / Badge</option>
                      <option value="Research">Research & Pharmacovigilance</option>
                      <option value="Industry Update">Industry & Internship Alert</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Post Content</label>
                    <textarea
                      rows={4}
                      value={newPostText}
                      onChange={(e) => setNewPostText(e.target.value)}
                      placeholder="Write your clinical observations or research notes..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Tag className="w-3 h-3 text-emerald-600 shrink-0" />
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
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar max-w-full">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
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
                className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Feed Posts List */}
          <div className="space-y-5">
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="font-bold text-slate-800 text-sm">No posts found matching filter</h3>
                <p className="text-xs text-slate-500 mt-1">Try switching categories or clearing search keywords.</p>
              </div>
            ) : (
              filteredPosts.map((post) => {
                const isBookmarked = bookmarkedIds.includes(post.id);

                return (
                  <article key={post.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden transition-all hover:border-slate-300">
                    
                    {/* Post Card Header */}
                    <div className="p-4 sm:p-5 pb-3">
                      <div className="flex justify-between items-start gap-2">
                        
                        {/* Author Info & Avatar Flex Container */}
                        <div className="flex items-center gap-3 min-w-0 max-w-full">
                          
                          {/* Author PFP - Strictly shrink-0 to prevent oval squishing! */}
                          <div 
                            onClick={() => onNavigate('profile')}
                            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${post.author.avatarBg} text-white font-extrabold text-xs sm:text-sm flex items-center justify-center cursor-pointer shadow-xs border-2 border-white shrink-0`}
                            title="View Author Profile"
                          >
                            {post.author.avatar}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span 
                                onClick={() => onNavigate('profile')}
                                className="font-extrabold text-slate-900 text-xs sm:text-sm hover:text-emerald-800 cursor-pointer truncate"
                              >
                                {post.author.name}
                              </span>
                              {post.author.verified && (
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 fill-emerald-100 shrink-0" title="SkillSetu Verified" />
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
                              <span className="bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-md text-[10px] border border-emerald-200/50 shrink-0">
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleBookmarkToggle(post.id)}
                            className={`p-1.5 sm:p-2 rounded-xl transition-colors ${
                              isBookmarked ? 'text-emerald-700 bg-emerald-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                            }`}
                            title={isBookmarked ? 'Saved to bookmarks' : 'Bookmark post'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-emerald-700' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Post Title & Content */}
                      <div className="mt-3">
                        <h2 className="font-bold text-sm sm:text-base text-slate-900 mb-1 leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line break-words">
                          {post.content}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 bg-slate-100 px-2 py-0.5 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Post Image Attachment if present */}
                    {post.image && (
                      <div className="mt-1 relative bg-slate-900 group overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full max-h-80 object-cover"
                        />
                        {post.imageCaption && (
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-2 text-[10px] text-slate-200 font-medium truncate">
                            📷 {post.imageCaption}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Post Actions & Stats Footer */}
                    <div className="p-3.5 sm:p-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                      
                      <div className="flex items-center gap-2 sm:gap-4">
                        <button
                          onClick={() => handleLikeToggle(post.id)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-xl transition-all cursor-pointer text-xs ${
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
                          className="flex items-center gap-1 px-2.5 py-1 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer text-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{post.comments.length}</span>
                        </button>

                        <button 
                          onClick={() => alert(`Link copied for post: "${post.title}"`)}
                          className="flex items-center gap-1 px-2 py-1 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer text-xs"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[10px] text-slate-400">
                        {post.views} views
                      </div>
                    </div>

                    {/* Expandable Comments Drawer */}
                    {post.showComments && (
                      <div className="bg-slate-50 p-3.5 border-t border-slate-200/80 animate-in slide-in-from-top-2">
                        <div className="space-y-2.5 mb-3 max-h-52 overflow-y-auto">
                          {post.comments.length === 0 ? (
                            <p className="text-xs text-slate-400 italic">No comments yet.</p>
                          ) : (
                            post.comments.map((comment) => (
                              <div key={comment.id} className="flex gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60">
                                <div className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                                  {comment.avatar}
                                </div>
                                <div className="flex-grow min-w-0">
                                  <div className="flex justify-between items-center">
                                    <span className="font-extrabold text-[11px] text-slate-900 truncate">{comment.user}</span>
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
                            className="flex-grow bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                          <button
                            type="submit"
                            className="bg-emerald-800 text-white font-bold text-xs px-3 py-1.5 rounded-xl hover:bg-emerald-900 flex items-center gap-1 cursor-pointer shrink-0"
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
        <div className="lg:col-span-4 space-y-5">
          
          {/* User Mini Profile Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <div 
                onClick={() => onNavigate('profile')}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-950 text-white font-extrabold text-base flex items-center justify-center cursor-pointer shadow-md border-2 border-emerald-50 shrink-0"
              >
                {currentUser?.avatar || 'AS'}
              </div>
              <div className="min-w-0">
                <h3 
                  onClick={() => onNavigate('profile')}
                  className="font-extrabold text-slate-900 text-sm hover:text-emerald-800 cursor-pointer flex items-center gap-1.5 truncate"
                >
                  <span className="truncate">{currentUser?.name || 'Aarav Sharma'}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                </h3>
                <p className="text-[11px] text-slate-500 font-medium truncate">BAMS Final Year Scholar</p>
                <div className="mt-1 inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded-full border border-emerald-200/60 shrink-0">
                  <Award className="w-3 h-3 text-emerald-600 shrink-0" />
                  Readiness: 88%
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Ayush Scholars */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-soft">
            <h3 className="font-extrabold text-slate-900 text-xs flex items-center gap-2 mb-3">
              <User className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              Recommended Connections
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Prof. Meenakshi Joshi', role: 'HOD Dravyaguna, AIIA', avatar: 'MJ', bg: 'bg-emerald-800' },
                { name: 'Dr. Vikram Sethi', role: 'R&D Lead, Dabur Research', avatar: 'VS', bg: 'bg-teal-800' }
              ].map((rec, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-8 h-8 rounded-full ${rec.bg} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                      {rec.avatar}
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-xs text-slate-900 block leading-tight truncate">{rec.name}</span>
                      <span className="text-[10px] text-slate-500 block truncate">{rec.role}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`Connect request sent to ${rec.name}`)}
                    className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 text-[10px] font-bold px-2 py-1 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    + Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default FeedPage;
