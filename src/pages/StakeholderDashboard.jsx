import React, { useState } from 'react';
import { 
  LogOut, 
  RefreshCw, 
  ChevronDown, 
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

export const StakeholderDashboard = ({
  activePortalId,
  currentUser,
  onSwitchPortal,
  onLogout,
  onBackToHome,
  contrastMode,
  onToggleContrast
}) => {
  const [activeTab, setActiveTab] = useState(activePortalId === 'company' ? 'console' : 'feed'); // 'feed' | 'messages' | 'jobs' | 'skills' | 'network' | 'console' | 'profile'
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  // Automatically default to 'console' when logging in or switching to Company Portal
  React.useEffect(() => {
    if (activePortalId === 'company') {
      setActiveTab('console');
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

  const notifications = [
    { id: 1, title: 'Prof. Meenakshi Joshi sent you a new message in Chat', time: '5m ago', unread: true },
    { id: 2, title: 'Dabur R&D Centre viewed your SkillSetu Profile', time: '10m ago', unread: true },
    { id: 3, title: 'Dr. Ananya Vaidya liked your Nadi Pariksha comment', time: '1h ago', unread: true },
    { id: 4, title: 'New Job Match: Junior Ayurvedic Physician at AVP', time: '3h ago', unread: false },
  ];

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
            onNavigate={(page) => {
              if (page === 'profile') setActiveTab('profile');
              else if (page === 'messages') setActiveTab('messages');
              else if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'skill') setActiveTab('skills');
              else if (page === 'industry') setActiveTab('network');
            }}
            currentUser={user}
            openCreatePostModal={openCreatePostModal}
          />
        );
      case 'messages':
        return (
          <MessagePage
            onNavigate={(page) => {
              if (page === 'profile') setActiveTab('profile');
              else if (page === 'feed') setActiveTab('feed');
            }}
            currentUser={user}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            onNavigate={(page) => {
              if (page === 'feed') setActiveTab('feed');
              else if (page === 'messages') setActiveTab('messages');
              else if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'skill') setActiveTab('skills');
            }}
            currentUser={user}
            activePortalId={activePortalId}
          />
        );
      case 'jobs':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-6 sm:p-8 rounded-3xl shadow-md">
              <div className="max-w-3xl">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Verified Ayush Clinical Career Desk
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold mt-3">
                  Verified Opportunities & Clinical Fellowships
                </h1>
                <p className="text-emerald-100 text-xs sm:text-sm mt-2">
                  Apply with 1-click using your verified SkillSetu Readiness Score ({user.readiness || '88%'}).
                </p>
              </div>
            </div>
            <StudentPortalView user={user} />
          </div>
        );
      case 'skills':
        return (
          <SkillPage
            onNavigate={(page) => {
              if (page === 'opportunities') setActiveTab('jobs');
              else if (page === 'feed') setActiveTab('feed');
            }}
            onOpenReadinessModal={() => alert('Launching Skill Readiness Diagnostic Engine...')}
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
      case 'console':
        return (
          <div className="space-y-6">
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

            {activePortalId === 'student' && <StudentPortalView user={user} />}
            {activePortalId === 'company' && <CompanyPortalView user={user} />}
            {activePortalId === 'faculty' && <FacultyPortalView user={user} />}
            {activePortalId === 'college' && <CollegePortalView user={user} />}
            {activePortalId === 'admin' && <MinistryAdminPortalView user={user} />}
          </div>
        );
      default:
        return <FeedPage onNavigate={() => {}} currentUser={user} />;
    }
  };

  const defaultNavItems = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'skills', label: 'Skill Hub', icon: Award },
    { id: 'network', label: 'Industry', icon: Building2 },
    { id: 'console', label: 'Console', icon: Layers }
  ];

  const companyNavItems = [
    { id: 'console', label: 'Console', icon: Layers },
    { id: 'profile', label: 'Company', icon: Building2 },
    { id: 'jobs', label: 'Talent', icon: Briefcase },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'network', label: 'Industry', icon: Building2 },
    { id: 'feed', label: 'Feed', icon: Home }
  ];

  const navItems = activePortalId === 'company' ? companyNavItems : defaultNavItems;

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
            <span className="hidden md:inline text-slate-300">|</span>

            {/* Role Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 text-emerald-700" />
                <span>Switch Portal: {currentPortalConfig.title}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute left-0 mt-1.5 w-60 bg-white rounded-2xl shadow-elevated border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Switch Portal
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
                      <span>{p.title} Portal</span>
                      <span className="text-[10px] text-slate-400 font-normal">{p.subtitle}</span>
                    </button>
                  ))}
                </div>
              )}
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
            
            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer relative"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center">
                  2
                </span>
              </button>

              {notificationsOpen && (
                <div 
                  onMouseLeave={() => setNotificationsOpen(false)}
                  className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in"
                >
                  <div className="px-4 pb-2 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-900">Notifications</span>
                      <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">2 New</span>
                    </div>
                    <button
                      onClick={() => setNotificationsOpen(false)}
                      className="text-slate-400 hover:text-slate-600 p-1 rounded-lg text-xs cursor-pointer"
                      title="Close notifications"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className={`p-3 text-xs hover:bg-slate-50 cursor-pointer ${n.unread ? 'bg-emerald-50/40 font-semibold' : 'text-slate-600'}`}>
                        <p className="text-slate-900">{n.title}</p>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile PFP Avatar Button */}
            <div className="relative">
              <button
                onClick={() => setActiveTab('profile')}
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
                    onClick={() => { setActiveTab('profile'); setProfileDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2"
                  >
                    <User className="w-4 h-4 text-emerald-700" />
                    <span>View Profile Page</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('messages'); setProfileDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-teal-700" />
                    <span>Messages & Connections</span>
                  </button>

                  <button
                    onClick={() => { setActiveTab('console'); setProfileDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-teal-700" />
                    <span>Operational Console ({currentPortalConfig.title})</span>
                  </button>

                  <div className="pt-1 mt-1 border-t border-slate-100">
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2"
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
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 pb-28 md:pb-6">
        {renderActiveView()}
      </main>

      {/* Main Platform Desktop Website Footer (Visible on Desktop / Laptop mode) */}
      {!isMobile && (
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
              <button onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer">
                Community Feed
              </button>
              <button onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer">
                6-Axis Radar
              </button>
              <button onClick={() => { setActiveTab('jobs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer">
                Placements
              </button>
              <button onClick={() => { setActiveTab('network'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer">
                Industry Network
              </button>
              <button onClick={() => { setActiveTab('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-emerald-800 transition-colors cursor-pointer text-emerald-800 font-bold">
                My Profile
              </button>
            </div>

            <div className="text-[11px] text-slate-400">
              © 2026 SkillSetu · Ministry of Ayush & AIIA
            </div>
          </div>
        </footer>
      )}

      {/* Mobile App Bottom Navigation Bar (Auto-detected on Mobile screens) */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl px-4 py-2.5 flex items-center justify-between rounded-t-3xl">
          
          {/* 1. Home */}
          <button
            onClick={() => { setActiveTab('feed'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`flex flex-col items-center justify-center py-1 px-3 text-xs transition-all cursor-pointer ${
              activeTab === 'feed' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <Home className={`w-5 h-5 shrink-0 ${activeTab === 'feed' ? 'text-emerald-700' : 'text-slate-500'}`} />
            <span className="text-[10px] mt-0.5 font-bold">Home</span>
          </button>

          {/* 2. Skills */}
          <button
            onClick={() => { setActiveTab('skills'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`flex flex-col items-center justify-center py-1 px-3 text-xs transition-all cursor-pointer ${
              activeTab === 'skills' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <BarChart3 className={`w-5 h-5 shrink-0 ${activeTab === 'skills' ? 'text-emerald-700' : 'text-slate-500'}`} />
            <span className="text-[10px] mt-0.5 font-bold">Skills</span>
          </button>

          {/* 3. Center Elevated Floating Green (+) Button */}
          <div className="relative -mt-9 flex items-center justify-center shrink-0">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 p-1">
              <button
                onClick={handleOpenCreatePost}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-800 to-teal-900 hover:from-emerald-900 hover:to-teal-950 active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
                title="Create Post"
              >
                <Plus className="w-7 h-7 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* 4. Messages */}
          <button
            onClick={() => { setActiveTab('messages'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`flex flex-col items-center justify-center py-1 px-3 text-xs transition-all cursor-pointer ${
              activeTab === 'messages' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <MessageSquare className={`w-5 h-5 shrink-0 ${activeTab === 'messages' ? 'text-emerald-700' : 'text-slate-500'}`} />
            <span className="text-[10px] mt-0.5 font-bold">Messages</span>
          </button>

          {/* 5. Industry */}
          <button
            onClick={() => { setActiveTab('network'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`flex flex-col items-center justify-center py-1 px-3 text-xs transition-all cursor-pointer ${
              activeTab === 'network' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'
            }`}
          >
            <Building2 className={`w-5 h-5 shrink-0 ${activeTab === 'network' ? 'text-emerald-700' : 'text-slate-500'}`} />
            <span className="text-[10px] mt-0.5 font-bold">Industry</span>
          </button>

        </div>
      )}

    </div>
  );
};

export default StakeholderDashboard;
