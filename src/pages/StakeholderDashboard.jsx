import React, { useState } from 'react';
import { 
  LogOut, 
  LogIn,
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
  X,
  ShieldCheck,
  Users,
  CheckCheck,
  Clock,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { PORTALS_DATA, PLATFORM_METADATA } from '../data/portalData';
import { useNotifications, formatRelativeTime } from '../context/NotificationContext';

import { StudentPortalView } from '../components/portals/StudentPortalView';
import { CompanyPortalView } from '../components/portals/CompanyPortalView';
import { CollegePortalView } from '../components/portals/CollegePortalView';
import { CollegeStudentsView } from '../components/portals/CollegeStudentsView';

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
import { AssessmentPage } from './AssessmentPage';
import { ComingSoonView } from '../components/ComingSoonView';

export const StakeholderDashboard = ({
  activePortalId,
  currentUser,
  onSwitchPortal,
  onLogout,
  onBackToHome,
  contrastMode,
  onToggleContrast,
  onOpenReadinessModal,
  onOpenVerifierModal
}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenReadiness = onOpenReadinessModal || (() => window.dispatchEvent(new CustomEvent('open_readiness_modal')));
  const handleOpenVerifier = onOpenVerifierModal || ((query) => window.dispatchEvent(new CustomEvent('open_credential_verifier', { detail: { query } })));

  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['feed', 'courses', 'console', 'jobs', 'skills', 'network', 'profile', 'messages', 'students', 'accreditation', 'assessment'].includes(hash)) {
        return hash;
      }
      if (hash === 'diagnostic') return 'assessment';
      if (hash === 'skill') return 'skills';
      if (hash === 'opportunities') return 'jobs';
      if (hash === 'industry') return 'network';
      if (hash === 'placement' || hash === 'placements' || hash === 'student' || hash === 'students') return 'students';
      if (hash === 'compliance' || hash === 'accreditation' || hash === 'reporting' || hash === 'nirf' || hash === 'naac') return 'accreditation';
    }
    return activePortalId === 'student' || activePortalId === 'faculty' || activePortalId === 'college' ? 'feed' : 'console';
  }); // 'feed' | 'messages' | 'jobs' | 'skills' | 'network' | 'console' | 'profile' | 'courses' | 'students' | 'accreditation' | 'assessment'
  const [viewingUser, setViewingUser] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  // Sync hash changes
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['feed', 'courses', 'console', 'jobs', 'skills', 'network', 'profile', 'messages', 'students', 'accreditation', 'assessment'].includes(hash)) {
        setActiveTab(hash);
      } else if (hash === 'diagnostic') {
        setActiveTab('assessment');
      } else if (hash === 'skill') {
        setActiveTab('skills');
      } else if (hash === 'opportunities') {
        setActiveTab('jobs');
      } else if (hash === 'industry') {
        setActiveTab('network');
      } else if (hash === 'placement' || hash === 'placements' || hash === 'student' || hash === 'students') {
        setActiveTab('students');
      } else if (hash === 'compliance' || hash === 'accreditation' || hash === 'reporting' || hash === 'nirf' || hash === 'naac') {
        setActiveTab('accreditation');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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

  const { 
    roleNotifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    filterMode, 
    setFilterMode 
  } = useNotifications();

  const handleDashboardNotificationClick = (item) => {
    markAsRead(item.id);
    setNotificationsOpen(false);
    if (item.link) {
      if (item.link.startsWith('#')) {
        window.location.hash = item.link.slice(1);
      } else {
        window.location.href = item.link;
      }
    }
  };

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
                setViewingUser(targetUser || null);
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
            onNavigate={(page) => {
              if (page === 'profile') {
                setViewingUser(null);
                setActiveTab('profile');
              }
              else if (page === 'feed') setActiveTab('feed');
            }}
            currentUser={user}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            onNavigate={(page) => {
              if (page === 'feed') {
                setViewingUser(null);
                setActiveTab('feed');
              }
              else if (page === 'messages') setActiveTab('messages');
              else if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'skill') setActiveTab('skills');
              else if (page === 'console') setActiveTab('console');
              else if (page === 'network') setActiveTab('network');
            }}
            onBack={viewingUser ? () => setViewingUser(null) : undefined}
            viewingUser={viewingUser}
            currentUser={user}
            activePortalId={activePortalId}
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
              <FacultyPage currentUser={user} onOpenReadinessModal={handleOpenReadiness} />
            </div>
          );
        }
        if (activePortalId === 'company') {
          return <CompanyPortalView user={user} />;
        }
        return (
          <JobsPage
            currentUser={user}
            onNavigate={(page, data) => {
              if (page === 'messages') setActiveTab('messages');
              else if (page === 'profile') setActiveTab('profile');
              else if (page === 'feed') setActiveTab('feed');
              else if (page === 'skills') {
                if (data?.course) setSelectedCourse(data.course);
                setActiveTab('skills');
              }
            }}
          />
        );
      case 'skills':
        if (activePortalId === 'faculty') {
          return <FacultyPage currentUser={user} initialTab="radar" onOpenReadinessModal={handleOpenReadiness} />;
        }
        return (
          <SkillPage
            selectedCourse={selectedCourse}
            onClearSelectedCourse={() => setSelectedCourse(null)}
            onNavigate={(page) => {
              if (page === 'opportunities' || page === 'jobs') setActiveTab('jobs');
              else if (page === 'feed') setActiveTab('feed');
              else if (page === 'assessment') setActiveTab('assessment');
            }}
            onOpenReadinessModal={handleOpenReadiness}
          />
        );
      case 'assessment':
      case 'diagnostic':
        return (
          <AssessmentPage
            currentUser={user}
            onNavigate={(page) => {
              if (page === 'profile') setActiveTab('profile');
              else if (page === 'skills') setActiveTab('skills');
              else if (page === 'feed') setActiveTab('feed');
              else setActiveTab(page);
            }}
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
      case 'students':
        return <CollegeStudentsView user={user} />;
      case 'accreditation':
      case 'compliance':
        return (
          <CollegePortalView 
            user={user} 
            initialTab="compliance" 
            isComplianceOnly={true}
            onNavigateToAccreditation={() => {
              setActiveTab('accreditation');
              window.location.hash = 'accreditation';
            }}
          />
        );
      case 'console':
        return (
          <div className="space-y-6">
            {activePortalId === 'student' && (
              <StudentPortalView 
                user={user} 
                onNavigateToSkills={() => {
                  setActiveTab('skills');
                  window.location.hash = 'skills';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
            {activePortalId === 'company' && <CompanyPortalView user={user} />}
            {activePortalId === 'faculty' && (
              <FacultyPage currentUser={user} onOpenReadinessModal={handleOpenReadiness} />
            )}
            {activePortalId === 'college' && (
              <CollegePortalView 
                user={user} 
                initialTab="queue" 
                isComplianceOnly={false}
                onNavigateToAccreditation={() => {
                  setActiveTab('accreditation');
                  window.location.hash = 'accreditation';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
            {activePortalId === 'admin' && <MinistryPage currentUser={user} />}
          </div>
        );
      default:
        return (
          <FeedPage 
            onNavigate={(page, targetUser) => {
              if (page === 'profile') {
                setViewingUser(targetUser || null);
                setActiveTab('profile');
              } else if (page === 'messages') {
                setActiveTab('messages');
              } else if (page === 'opportunities' || page === 'jobs') {
                setActiveTab('jobs');
              } else if (page === 'skill' || page === 'skills') {
                setActiveTab('skills');
              } else if (page === 'industry' || page === 'network') {
                setActiveTab('network');
              }
            }} 
            currentUser={user} 
            activePortalId={activePortalId} 
          />
        );
    }
  };

  const studentNavItems = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'console', label: 'Student Portal', icon: Layers },
    { id: 'skills', label: 'Skills', icon: BarChart3 },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'jobs', label: 'Jobs', icon: Briefcase }
  ];

  const companyNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Company Console', icon: Layers },
    { id: 'jobs', label: 'Talent ATS', icon: Briefcase },
    { id: 'network', label: 'Industry', icon: Building2 }
  ];

  const facultyNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Faculty Console', icon: Layers },
    { id: 'skills', label: 'Department Radar', icon: BarChart3 }
  ];

  const ministryNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'console', label: 'Ministry Command', icon: Layers },
    { id: 'network', label: 'State Ecosystem', icon: Building2 }
  ];

  const collegeNavItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'console', label: 'Verification', icon: ShieldCheck },
    { id: 'students', label: 'Student', icon: Users },
    { id: 'accreditation', label: 'Accreditation', icon: Award }
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
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setViewingUser(null);
                    setActiveTab(item.id);
                  }}
                  className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-xl text-xs transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-emerald-800 font-extrabold bg-emerald-50/80 border border-emerald-200/80'
                      : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-100 font-semibold'
                  }`}
                  title={item.label}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-800' : 'text-slate-500'}`} />
                  <span className="text-[10px] mt-0.5 whitespace-nowrap">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Verify, Notifications, User PFP Avatar Button) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Cryptographic Credential Verifier Quick Button */}
            <button
              type="button"
              onClick={() => handleOpenVerifier()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 shrink-0"
              title="Cryptographic Credential Verifier (SHA-256)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span className="hidden sm:inline">Verify Integrity</span>
            </button>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                aria-haspopup="menu"
                aria-expanded={notificationsOpen}
                aria-label={`Notifications. ${unreadCount} unread`}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer relative ${
                  notificationsOpen ? 'bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span 
                    aria-live="polite"
                    className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 bg-rose-500 text-white rounded-full text-[9px] font-black flex items-center justify-center ring-2 ring-white"
                  >
                    {unreadCount > 99 ? '99+' : unreadCount}
                  </span>
                )}
              </button>

              {notificationsOpen && (
                <div 
                  role="menu"
                  aria-orientation="vertical"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in zoom-in-95 text-left"
                >
                  <div className="px-4 pb-2 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-900">Notifications</span>
                      {unreadCount > 0 ? (
                        <span className="text-[10px] text-rose-700 font-bold bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                          {unreadCount} New
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded">
                          Caught up
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {unreadCount > 0 && (
                        <button
                          type="button"
                          onClick={markAllAsRead}
                          className="text-[11px] font-bold text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                          title="Mark all as read"
                        >
                          <CheckCheck className="w-3.5 h-3.5" />
                          <span>Mark read</span>
                        </button>
                      )}
                      <button
                        onClick={() => setNotificationsOpen(false)}
                        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg text-xs cursor-pointer"
                        title="Close notifications"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Filter tabs */}
                  <div className="px-3 py-1.5 flex gap-1 border-b border-slate-100 bg-slate-50/60 text-xs">
                    <button
                      type="button"
                      onClick={() => setFilterMode('role')}
                      className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                        filterMode === 'role' ? 'bg-white text-emerald-900 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      My Role
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilterMode('all')}
                      className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                        filterMode === 'all' ? 'bg-white text-emerald-900 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      All Feeds
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto" tabIndex={0}>
                    {roleNotifications.length === 0 ? (
                      <div className="p-6 text-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-1.5" />
                        <p className="text-xs font-bold text-slate-700">No new notifications</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Application and interview events will appear here.</p>
                      </div>
                    ) : (
                      roleNotifications.map((n) => (
                        <div 
                          key={n.id} 
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => handleDashboardNotificationClick(n)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleDashboardNotificationClick(n);
                            }
                          }}
                          className={`p-3 text-xs hover:bg-slate-50 cursor-pointer transition-colors outline-none focus:bg-emerald-50/60 ${
                            !n.read ? 'bg-emerald-50/40 font-semibold border-l-3 border-emerald-600' : 'text-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                            <span className="font-extrabold uppercase text-slate-500">{n.senderName || n.senderRole}</span>
                            <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" />{formatRelativeTime(n.timestamp)}</span>
                          </div>
                          <p className="text-slate-900 font-bold">{n.title}</p>
                          <p className="text-[11px] text-slate-600 font-normal mt-0.5 line-clamp-2">{n.message}</p>
                          {n.link && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 mt-1 hover:underline">
                              <span>Go to workflow</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </span>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile PFP Avatar Button */}
            <div className="relative">
              <button
                onClick={() => {
                  setViewingUser(null);
                  setActiveTab('profile');
                }}
                onMouseEnter={() => setProfileDropdownOpen(true)}
                className="w-9 h-9 rounded-xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center shadow-xs hover:ring-2 hover:ring-emerald-600 transition-all cursor-pointer shrink-0 overflow-hidden border border-emerald-900/20"
                title={`View Profile Page (${user.name})`}
              >
                {user.avatarImage ? (
                  <img src={user.avatarImage} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{user.avatar || 'AS'}</span>
                )}
              </button>

              {profileDropdownOpen && (
                <div 
                  onMouseLeave={() => setProfileDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in"
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <span className="font-extrabold text-xs text-slate-900 block truncate">{user.name}</span>
                    <span className="text-[10px] text-slate-500 font-medium block truncate">{user.role}</span>
                  </div>

                  <button
                    onClick={() => {
                      setViewingUser(null);
                      setActiveTab('profile');
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2 cursor-pointer"
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
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5 text-rose-600" />
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
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 pb-28 md:pb-6">
        {renderActiveView()}
      </main>

      {/* Clean Unified Platform Desktop Footer */}
      {!isMobile && (
        <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm py-6 mt-12 text-slate-500 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                <span className="material-symbols-outlined text-sm">spa</span>
              </div>
              <div>
                <span className="font-extrabold text-slate-800 block">SkillSetu National Ayush Skill Bridge</span>
                <span className="text-[11px] text-slate-400">{PLATFORM_METADATA.ministryFull}</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              © 2026 SkillSetu · NCISM & AIIA Verified Clinical Competency Ledger
            </div>
          </div>
        </footer>
      )}

      {/* Mobile App Bottom Navigation Bar (Auto-detected on Mobile screens) */}
      {isMobile && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl px-2 py-2 rounded-t-3xl">
          {activePortalId === 'faculty' ? (
            <div className="grid grid-cols-5 items-center w-full max-w-lg mx-auto">
              
              {/* 1. Feed */}
              <button
                onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'feed' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Home className={`w-5 h-5 shrink-0 ${activeTab === 'feed' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Feed</span>
              </button>

              {/* 2. Courses */}
              <button
                onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'courses' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <BookOpen className={`w-5 h-5 shrink-0 ${activeTab === 'courses' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Courses</span>
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

              {/* 4. Faculty Console */}
              <button
                onClick={() => { setActiveTab('console'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'console' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Layers className={`w-5 h-5 shrink-0 ${activeTab === 'console' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Console</span>
              </button>

              {/* 5. Department Radar */}
              <button
                onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'skills' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <BarChart3 className={`w-5 h-5 shrink-0 ${activeTab === 'skills' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Radar</span>
              </button>

            </div>
          ) : activePortalId === 'college' ? (
            <div className="grid grid-cols-5 items-center w-full max-w-md mx-auto px-1">
              
              {/* 1. Feed */}
              <button
                onClick={() => {
                  setViewingUser(null);
                  setActiveTab('feed');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'feed' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Home className={`w-5 h-5 shrink-0 ${activeTab === 'feed' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Feed</span>
              </button>

              {/* 2. Verification */}
              <button
                onClick={() => {
                  setViewingUser(null);
                  setActiveTab('console');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'console' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <ShieldCheck className={`w-5 h-5 shrink-0 ${activeTab === 'console' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Verification</span>
              </button>

              {/* 3. Center Elevated Floating Green (+) Button */}
              <div className="flex items-center justify-center relative -mt-7 w-full">
                <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 p-0.5">
                  <button
                    onClick={handleOpenCreatePost}
                    className="w-11 h-11 rounded-full bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    title="Create Post"
                  >
                    <Plus className="w-5 h-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* 4. Student */}
              <button
                onClick={() => {
                  setViewingUser(null);
                  setActiveTab('students');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'students' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Users className={`w-5 h-5 shrink-0 ${activeTab === 'students' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Student</span>
              </button>

              {/* 5. Accreditation */}
              <button
                onClick={() => {
                  setViewingUser(null);
                  setActiveTab('accreditation');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'accreditation' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Award className={`w-5 h-5 shrink-0 ${activeTab === 'accreditation' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Accreditation</span>
              </button>

            </div>
          ) : (
            <div className="grid grid-cols-5 items-center w-full max-w-md mx-auto px-1">
              
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

              {/* 2. Portal */}
              <button
                onClick={() => { setActiveTab('console'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'console' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <Layers className={`w-5 h-5 shrink-0 ${activeTab === 'console' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Portal</span>
              </button>

              {/* 3. Center Elevated Floating Green (+) Button */}
              <div className="flex items-center justify-center relative -mt-7 w-full">
                <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 p-0.5">
                  <button
                    onClick={handleOpenCreatePost}
                    className="w-11 h-11 rounded-full bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    title="Create Post"
                  >
                    <Plus className="w-5 h-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* 4. Skills */}
              <button
                onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                  activeTab === 'skills' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
                }`}
              >
                <BarChart3 className={`w-5 h-5 shrink-0 ${activeTab === 'skills' ? 'text-emerald-700' : 'text-slate-500'}`} />
                <span className="text-[10px] mt-0.5 font-bold">Skills</span>
              </button>

              {/* 5. Jobs */}
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
      )}

    </div>
  );
};

export default StakeholderDashboard;
