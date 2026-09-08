import React, { useState, useEffect, useRef } from 'react';
import { 
  LogOut, 
  RefreshCw, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Flame, 
  User, 
  Briefcase, 
  Award, 
  Bell, 
  Building2,
  Layers,
  Home,
  BarChart3,
  Plus,
  MessageSquare,
  BookOpen,
  X
} from 'lucide-react';
import { PORTALS_DATA, PLATFORM_METADATA } from '../data/portalData';

import { StudentPortalView } from '../components/portals/StudentPortalView';
import { CompanyPortalView } from '../components/portals/CompanyPortalView';
import { FacultyPortalView } from '../components/portals/FacultyPortalView';
import { CollegePortalView } from '../components/portals/CollegePortalView';
import { MinistryAdminPortalView } from '../components/portals/MinistryAdminPortalView';

import { FeedPage } from './FeedPage';
import { ProfilePage } from './ProfilePage';
import { SkillPage } from './SkillPage';
import { IndustryPage } from './IndustryPage';
import { MessagePage } from './MessagePage';
import { FacultyPage } from './FacultyPage';
import { CompanyPage } from './CompanyPage';
import { MinistryPage } from './MinistryPage';
import { CoursesPage } from './CoursesPage';
import { JobsPage } from './JobsPage';

export const StakeholderDashboard = ({
  activePortalId,
  currentUser,
  onSwitchPortal,
  onLogout,
  onBackToHome,
  contrastMode,
  onToggleContrast
}) => {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['feed', 'messages', 'jobs', 'skills', 'courses', 'network', 'console', 'profile'].includes(hash)) {
      return hash;
    }
    return (activePortalId === 'student' || activePortalId === 'faculty') ? 'feed' : 'console';
  }); // 'feed' | 'messages' | 'jobs' | 'skills' | 'courses' | 'network' | 'console' | 'profile'
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationFilter, setNotificationFilter] = useState('all');
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
  const [viewingProfileUser, setViewingProfileUser] = useState(null);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [selectedSkillCourse, setSelectedSkillCourse] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['feed', 'messages', 'jobs', 'skills', 'courses', 'network', 'console', 'profile'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const [notificationsList, setNotificationsList] = useState([
    { 
      id: 1, 
      title: 'Prof. Meenakshi Joshi sent you a message', 
      description: 'Reviewing clinical research correlation metrics for Ashwagandha standardization.',
      time: '5m ago', 
      unread: true,
      category: 'messages',
      sender: 'Prof. Meenakshi Joshi',
      avatarBg: 'bg-emerald-800',
      avatarText: 'MJ'
    },
    { 
      id: 2, 
      title: 'Dabur R&D matched your profile', 
      description: 'Matched your Schedule T GMP & HPLC credentials for Phytochemistry QC.',
      time: '10m ago', 
      unread: true,
      category: 'jobs',
      sender: 'Dabur India R&D',
      avatarBg: 'bg-teal-800',
      avatarText: 'DB'
    },
    { 
      id: 3, 
      title: 'Interview scheduled with Dr. Vikram Sethi', 
      description: 'Technical Discussion scheduled for Sept 10 at 11:00 AM on Google Meet.',
      time: '45m ago', 
      unread: true,
      category: 'jobs',
      sender: 'Dr. Vikram Sethi',
      avatarBg: 'bg-emerald-900',
      avatarText: 'VS'
    },
    { 
      id: 4, 
      title: 'Dr. Ananya Vaidya endorsed your case study', 
      description: 'Radial arterial pulse report cited in Kayachikitsa departmental journal.',
      time: '2h ago', 
      unread: false,
      category: 'feed',
      sender: 'Dr. Ananya Vaidya',
      avatarBg: 'bg-emerald-700',
      avatarText: 'AV'
    },
    { 
      id: 5, 
      title: 'Level 3 HPLC Certification verified', 
      description: 'Anchored to your National Ayush Registry credential ledger.',
      time: '1d ago', 
      unread: false,
      category: 'skills',
      sender: 'Ministry of Ayush',
      avatarBg: 'bg-slate-800',
      avatarText: 'AY'
    },
  ]);

  const profileDropdownRef = useRef(null);
  const notificationsRef = useRef(null);

  useEffect(() => {
    if (activeTab !== 'messages') {
      setIsMobileChatOpen(false);
    }
  }, [activeTab]);

  // Auto-close dropdowns on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setProfileDropdownOpen(false);
        setNotificationsOpen(false);
      }
    };

    if (profileDropdownOpen || notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [profileDropdownOpen, notificationsOpen]);

  // Default to 'feed' for student and faculty portals, and 'console' for other institutional portals
  React.useEffect(() => {
    if (activePortalId) {
      if (activePortalId === 'student' || activePortalId === 'faculty') {
        setActiveTab('feed');
      } else {
        setActiveTab('console');
      }
    }
  }, [activePortalId]);

  // Automatic screen size detection for responsive mobile app vs desktop website layout
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentPortalConfig = PORTALS_DATA.find(p => p.id === activePortalId) || PORTALS_DATA[0];
  const user = currentUser || currentPortalConfig.profileUser;

  const unreadNotificationsCount = notificationsList.filter(n => n.unread).length;

  const filteredNotifications = notificationsList.filter(n => {
    if (notificationFilter === 'unread') return n.unread;
    if (notificationFilter === 'jobs') return n.category === 'jobs';
    if (notificationFilter === 'messages') return n.category === 'messages';
    if (notificationFilter === 'skills') return n.category === 'skills';
    return true;
  });

  const handleOpenCreatePost = () => {
    setActiveTab('feed');
    setOpenCreatePostModal(true);
    setTimeout(() => setOpenCreatePostModal(false), 500);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <FeedPage
            onNavigate={(page, targetUser) => {
              if (page === 'profile') {
                setViewingProfileUser(targetUser || null);
                setActiveTab('profile');
              }
              else if (page === 'messages') setActiveTab('messages');
              else if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'skill') setActiveTab('skills');
              else if (page === 'industry') setActiveTab('network');
            }}
            currentUser={user}
            activePortalId={activePortalId}
            openCreatePostModal={openCreatePostModal}
          />
        );
      case 'messages':
        return (
          <MessagePage
            onNavigate={(page, targetUser) => {
              if (page === 'profile') {
                setViewingProfileUser(targetUser || null);
                setActiveTab('profile');
              }
              else if (page === 'feed') setActiveTab('feed');
            }}
            currentUser={user}
            onChatOpenStateChange={setIsMobileChatOpen}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            onNavigate={(page, targetUser) => {
              if (page === 'feed') {
                setViewingProfileUser(null);
                setActiveTab('feed');
              }
              else if (page === 'profile') {
                setViewingProfileUser(targetUser || null);
                setActiveTab('profile');
              }
              else if (page === 'messages') setActiveTab('messages');
              else if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'skill') setActiveTab('skills');
              else if (page === 'courses') setActiveTab('courses');
              else if (page === 'console') setActiveTab('console');
            }}
            currentUser={user}
            activePortalId={activePortalId}
            viewingUser={viewingProfileUser}
            onBack={() => {
              setViewingProfileUser(null);
              setActiveTab('feed');
            }}
          />
        );
      case 'jobs':
        if (activePortalId === 'faculty') {
          return (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200/90 text-slate-900 p-6 sm:p-8 rounded-3xl element-glow-shadow">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Academic Preceptor Opportunities & Grants Desk
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                    Preceptor Research Grants & Scholar Nominations
                  </h1>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    Faculty members hold permanent academic appointments and do not apply for student internships. Below you can nominate top scholars from your department for clinical internships and access faculty research grants (CCRAS SPARK, Pharma FDPs).
                  </p>
                </div>
              </div>
              <FacultyPage currentUser={user} onOpenReadinessModal={() => {}} />
            </div>
          );
        }
        return (
          <JobsPage
            currentUser={user}
            onNavigate={(page, data) => {
              if (page === 'messages') setActiveTab('messages');
              else if (page === 'profile') {
                setViewingProfileUser(data || null);
                setActiveTab('profile');
              }
              else if (page === 'feed') setActiveTab('feed');
              else if (page === 'skills') {
                if (data?.course) {
                  setSelectedSkillCourse(data.course);
                }
                setActiveTab('skills');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />
        );
      case 'skills':
        if (activePortalId === 'faculty') {
          return (
            <div className="space-y-6">
              <FacultyPage currentUser={user} onOpenReadinessModal={() => {}} />
            </div>
          );
        }
        return (
          <SkillPage
            onNavigate={(page) => {
              if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'feed') setActiveTab('feed');
            }}
            onOpenReadinessModal={() => alert('Launching Skill Readiness Diagnostic Engine...')}
            selectedCourse={selectedSkillCourse}
            onClearSelectedCourse={() => setSelectedSkillCourse(null)}
          />
        );
      case 'network':
        return (
          <IndustryPage
            onNavigate={(page) => {
              if (page === 'opportunities') setActiveTab('jobs');
            }}
            onOpenAuthModal={() => {}}
          />
        );
      case 'courses':
        return (
          <CoursesPage
            currentUser={user}
            activePortalId={activePortalId}
          />
        );
      case 'console':
        return (
          <div className="space-y-6">
            {activePortalId !== 'faculty' && (
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                    Operations & Management Console
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    {currentPortalConfig.title} Operational Dashboard
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Tailored tools and analytics for {user.name} ({currentPortalConfig.subtitle})
                  </p>
                </div>

                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl flex items-center justify-between sm:justify-start gap-2 cursor-pointer shadow-xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Switch Role: {currentPortalConfig.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {roleDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in">
                      <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Switch Role
                      </div>
                      {PORTALS_DATA.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setRoleDropdownOpen(false);
                            onSwitchPortal(p.id, p.profileUser);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                            activePortalId === p.id 
                              ? 'bg-emerald-50 text-emerald-900 font-bold' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{p.title} Console</span>
                          <span className="text-[10px] text-slate-400">{p.subtitle}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activePortalId === 'student' && <StudentPortalView user={user} />}
            {activePortalId === 'company' && <CompanyPage currentUser={user} onOpenAuthModal={() => {}} />}
            {activePortalId === 'faculty' && <FacultyPage currentUser={user} onOpenReadinessModal={() => {}} />}
            {activePortalId === 'college' && <CollegePortalView user={user} />}
            {activePortalId === 'admin' && <MinistryPage currentUser={user} />}
          </div>
        );
      default:
        return <FeedPage onNavigate={() => {}} currentUser={user} activePortalId={activePortalId} />;
    }
  };

  const studentNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Student Desk', icon: Layers },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const companyNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Company Console', icon: Layers },
    { id: 'jobs', label: 'Talent ATS', icon: Briefcase },
    { id: 'network', label: 'Industry', icon: Building2 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const facultyNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Faculty Console', icon: Layers },
    { id: 'skills', label: 'Department Radar', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const ministryNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Ministry Command', icon: Layers },
    { id: 'network', label: 'State Ecosystem', icon: Building2 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const collegeNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'College Console', icon: Layers },
    { id: 'network', label: 'Placement Desk', icon: Building2 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  let navItems = studentNavItems;
  if (activePortalId === 'company') navItems = companyNavItems;
  else if (activePortalId === 'faculty') navItems = facultyNavItems;
  else if (activePortalId === 'admin') navItems = ministryNavItems;
  else if (activePortalId === 'college') navItems = collegeNavItems;

  return (
    <div className="min-h-screen bg-[#f3f7f5] flex flex-col font-sans text-slate-900 overflow-x-hidden relative">
      
      {/* Sticky Top Header Navigation */}
      <header className="bg-white border-b border-slate-200/90 shadow-xs sticky top-0 z-40">
        
        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
              title="SkillSetu Platform Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-xl sm:text-2xl">spa</span>
              </div>
              <div className="text-left hidden sm:block">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight block leading-none">
                  Skill<span className="text-emerald-700">Setu</span>
                </span>
              </div>
            </button>

            {/* Desktop Search Box */}
            <div className="relative hidden lg:block min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search clinical cases, jobs, messages..."
                className="w-full bg-slate-100 focus:bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* Desktop Center Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center justify-center px-3 lg:px-4 py-1.5 rounded-xl text-xs transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-emerald-800 font-extrabold bg-emerald-50/80 border border-emerald-200/80'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100 font-semibold'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-800' : 'text-slate-500'}`} />
                  <span className="text-[10px] mt-0.5">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Notifications, User PFP Avatar Button) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Notifications Bell Button */}
            <div>
              <button
                onClick={() => {
                  setNotificationsOpen(true);
                  setProfileDropdownOpen(false);
                }}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer relative"
                title="Open Notifications Full Screen"
                aria-expanded={notificationsOpen}
              >
                <Bell className="w-4 h-4" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center animate-pulse">
                    {unreadNotificationsCount}
                  </span>
                )}
              </button>
            </div>

            {/* User Profile PFP Avatar Button */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => {
                  setProfileDropdownOpen(prev => !prev);
                  setNotificationsOpen(false);
                }}
                className="w-9 h-9 rounded-xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center shadow-xs hover:ring-2 hover:ring-emerald-600 transition-all cursor-pointer shrink-0 overflow-hidden border border-emerald-900/20 active:scale-95"
                title={`User Profile Menu (${user.name})`}
                aria-expanded={profileDropdownOpen}
              >
                {user.avatarImage ? (
                  <img src={user.avatarImage} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{user.avatar || 'AS'}</span>
                )}
              </button>

              {profileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in"
                >
                  <div className="px-4 py-2.5 border-b border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                      {user.avatarImage ? (
                        <img src={user.avatarImage} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{user.avatar || 'AS'}</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="font-extrabold text-xs text-slate-900 block truncate">{user.name}</span>
                      <span className="text-[10px] text-slate-500 font-medium block truncate">{user.role}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => { 
                      setViewingProfileUser(null);
                      setActiveTab('profile'); 
                      setProfileDropdownOpen(false); 
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <User className="w-4 h-4 text-emerald-700" />
                    <span>View Profile Page</span>
                  </button>

                  <div className="pt-1 mt-1 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            </div>

        </div>

      </header>

      {/* Main Content Area */}
      <main className={`flex-1 max-w-7xl w-full mx-auto ${activeTab === 'messages' ? 'p-0 sm:px-6 lg:px-8 py-0 sm:py-6' : 'px-3 sm:px-6 lg:px-8 py-4 sm:py-6'} ${activeTab === 'messages' && isMobileChatOpen ? 'pb-0 md:pb-6' : 'pb-28 md:pb-6'}`}>
        {renderActiveView()}
      </main>

      {/* Main Platform Desktop Website Footer (Visible on Desktop / Laptop mode, except on Feed tab) */}
      {!isMobile && activeTab !== 'feed' && (
        <footer className="border-t border-slate-200 bg-white py-8 mt-12 text-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold shadow-xs">
                <span className="material-symbols-outlined text-lg">spa</span>
              </div>
              <div>
                <span className="font-extrabold text-slate-900 block">SkillSetu National Platform</span>
                <span className="text-[11px] text-slate-500">{PLATFORM_METADATA.ministryFull}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-600 font-medium">
              {activePortalId === 'faculty' ? (
                <>
                  <button onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-emerald-800 transition-colors cursor-pointer ${activeTab === 'feed' ? 'text-emerald-800 font-bold' : ''}`}>
                    Feed
                  </button>
                  <button onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-emerald-800 transition-colors cursor-pointer ${activeTab === 'courses' ? 'text-emerald-800 font-bold' : ''}`}>
                    Courses
                  </button>
                  <button onClick={() => { setActiveTab('console'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-emerald-800 transition-colors cursor-pointer ${activeTab === 'console' ? 'text-emerald-800 font-bold' : ''}`}>
                    Faculty Console
                  </button>
                  <button onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-emerald-800 transition-colors cursor-pointer ${activeTab === 'skills' ? 'text-emerald-800 font-bold' : ''}`}>
                    Department Radar
                  </button>
                  <button onClick={() => { setViewingProfileUser(null); setActiveTab('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-emerald-800 transition-colors cursor-pointer ${activeTab === 'profile' ? 'text-emerald-800 font-bold' : ''}`}>
                    My Profile
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer">
                    Community Feed
                  </button>
                  <button onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer">
                    6-Axis Radar
                  </button>
                  <button onClick={() => { setActiveTab('jobs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`hover:text-emerald-800 transition-colors cursor-pointer ${activeTab === 'jobs' ? 'text-emerald-800 font-bold' : ''}`}>
                    Jobs & Applications
                  </button>
                  <button onClick={() => { setViewingProfileUser(null); setActiveTab('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer text-emerald-800 font-bold">
                    My Profile
                  </button>
                </>
              )}
            </div>

            <div className="text-[11px] text-slate-400">
              © 2026 SkillSetu · Ministry of Ayush & AIIA
            </div>
          </div>
        </footer>
      )}

      {/* Mobile App Bottom Navigation Bar (Visible on Mobile screens) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl px-2 py-2 ${activeTab === 'messages' && isMobileChatOpen ? 'hidden' : ''}`}>
        {activePortalId === 'faculty' ? (
          /* Faculty Member Bottom Navigation: Feed | Courses | Faculty Console | Department Radar */
          <div className="grid grid-cols-4 items-center w-full max-w-lg mx-auto">
            
            {/* 1. Feed */}
            <button
              onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex flex-col items-center justify-center py-1.5 w-full text-xs transition-all cursor-pointer ${
                activeTab === 'feed' ? 'text-emerald-800 font-extrabold' : 'text-[#3B627D] hover:text-slate-900 font-medium'
              }`}
            >
              <Home className={`w-5 h-5 shrink-0 ${activeTab === 'feed' ? 'text-emerald-700' : 'text-[#3B627D]'}`} />
              <span className="text-[10px] mt-1 font-semibold">Feed</span>
            </button>

            {/* 2. Courses */}
            <button
              onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex flex-col items-center justify-center py-1.5 w-full text-xs transition-all cursor-pointer ${
                activeTab === 'courses' ? 'text-emerald-800 font-extrabold' : 'text-[#3B627D] hover:text-slate-900 font-medium'
              }`}
            >
              <BookOpen className={`w-5 h-5 shrink-0 ${activeTab === 'courses' ? 'text-emerald-700' : 'text-[#3B627D]'}`} />
              <span className="text-[10px] mt-1 font-semibold">Courses</span>
            </button>

            {/* 3. Faculty Console */}
            <button
              onClick={() => { setActiveTab('console'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex flex-col items-center justify-center py-1.5 w-full text-xs transition-all cursor-pointer ${
                activeTab === 'console' ? 'text-emerald-800 font-extrabold' : 'text-[#3B627D] hover:text-slate-900 font-medium'
              }`}
            >
              <Layers className={`w-5 h-5 shrink-0 ${activeTab === 'console' ? 'text-emerald-700' : 'text-[#3B627D]'}`} />
              <span className="text-[10px] mt-1 font-semibold whitespace-nowrap">Faculty Console</span>
            </button>

            {/* 4. Department Radar */}
            <button
              onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex flex-col items-center justify-center py-1.5 w-full text-xs transition-all cursor-pointer ${
                activeTab === 'skills' ? 'text-emerald-800 font-extrabold' : 'text-[#3B627D] hover:text-slate-900 font-medium'
              }`}
            >
              <BarChart3 className={`w-5 h-5 shrink-0 ${activeTab === 'skills' ? 'text-emerald-700' : 'text-[#3B627D]'}`} />
              <span className="text-[10px] mt-1 font-semibold whitespace-nowrap">Department Radar</span>
            </button>

          </div>
        ) : (
            <div className="grid grid-cols-5 items-center w-full max-w-lg mx-auto">
              
              {/* 1. Home */}
              <button
                onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'feed' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Home className={`w-5 h-5 shrink-0 ${activeTab === 'feed' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Home</span>
              </button>

              {/* 2. Skills */}
              <button
                onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'skills' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <BarChart3 className={`w-5 h-5 shrink-0 ${activeTab === 'skills' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Skills</span>
              </button>

              {/* 3. Center Elevated Floating Green (+) Button */}
              <div className="flex items-center justify-center relative -mt-7 w-full">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 p-1">
                  <button
                    onClick={handleOpenCreatePost}
                    className="w-12 h-12 rounded-full bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    title="Create Post"
                  >
                    <Plus className="w-6 h-6 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* 4. Messages */}
              <button
                onClick={() => { setActiveTab('messages'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'messages' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <MessageSquare className={`w-5 h-5 shrink-0 ${activeTab === 'messages' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Messages</span>
              </button>

              {/* 5. Jobs & Applications */}
              <button
                onClick={() => { setActiveTab('jobs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'jobs' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Briefcase className={`w-5 h-5 shrink-0 ${activeTab === 'jobs' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Jobs</span>
              </button>

            </div>
          )}
        </div>

      {/* Full-Screen Notifications Modal */}
      {notificationsOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center animate-fadeIn p-0 sm:p-4 md:p-6">
          <div 
            ref={notificationsRef}
            className="w-full h-full sm:h-[82vh] sm:max-w-2xl bg-white sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">Notifications</h2>
                {unreadNotificationsCount > 0 && (
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    {unreadNotificationsCount} unread
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {unreadNotificationsCount > 0 && (
                  <button
                    onClick={() => setNotificationsList(prev => prev.map(n => ({ ...n, unread: false })))}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Mark all as read
                  </button>
                )}
                <button
                  onClick={() => setNotificationsOpen(false)}
                  className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close notifications"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="px-5 sm:px-7 py-2.5 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 bg-white">
              {[
                { id: 'all', label: 'All' },
                { id: 'unread', label: `Unread${unreadNotificationsCount > 0 ? ` (${unreadNotificationsCount})` : ''}` },
                { id: 'jobs', label: 'Jobs' },
                { id: 'messages', label: 'Messages' },
                { id: 'skills', label: 'Credentials' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setNotificationFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    notificationFilter === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notifications Feed */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {filteredNotifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center text-slate-400">
                  <Bell className="w-8 h-8 mb-2.5 text-slate-300 stroke-[1.5]" />
                  <h4 className="font-semibold text-sm text-slate-700">No notifications</h4>
                  <p className="text-xs text-slate-400 mt-0.5">You're all caught up.</p>
                </div>
              ) : (
                filteredNotifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      setNotificationsList(prev => prev.map(item => item.id === n.id ? { ...item, unread: false } : item));
                      setNotificationsOpen(false);
                      if (n.category) setActiveTab(n.category);
                    }}
                    className={`px-5 sm:px-7 py-4 transition-colors cursor-pointer flex items-start gap-3.5 sm:gap-4 ${
                      n.unread ? 'bg-emerald-50/25 hover:bg-emerald-50/50' : 'hover:bg-slate-50/70'
                    }`}
                  >
                    {/* Avatar with unread indicator */}
                    <div className="relative shrink-0 mt-0.5">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${n.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-2xs`}>
                        {n.avatarText}
                      </div>
                      {n.unread && (
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-2 ring-white"></span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className={`text-xs sm:text-sm leading-snug truncate ${
                          n.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-800'
                        }`}>
                          {n.title}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-normal shrink-0">
                          {n.time}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed line-clamp-2">
                        {n.description}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default StakeholderDashboard;
