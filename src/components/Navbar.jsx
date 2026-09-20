import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  Home, 
  BarChart3, 
  Plus, 
  MessageSquare, 
  Briefcase,
  Building2, 
  ArrowRight, 
  LogIn, 
  LogOut, 
  Sparkles, 
  Menu, 
  X, 
  Flame,
  ShieldCheck,
  Bell,
  CheckCheck,
  Clock,
  ExternalLink
} from 'lucide-react';
import { useNotifications, formatRelativeTime } from '../context/NotificationContext';

export function Navbar({ activePage, setActivePage, onOpenReadinessModal, onOpenVerifierModal, onOpenAuthModal, currentUser, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { 
    roleNotifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    filterMode, 
    setFilterMode 
  } = useNotifications();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'skills', label: 'Fields & Skills' },
    { id: 'comparison', label: 'Comparison' }
  ];

  // ScrollSpy: auto-detect which section is in viewport and move highlight pill
  useEffect(() => {
    if (activePage !== 'home') return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        { id: 'hero', el: document.getElementById('hero') },
        { id: 'how-it-works', el: document.getElementById('how-it-works') },
        { id: 'features', el: document.getElementById('features') },
        { id: 'skills', el: document.getElementById('skills') },
        { id: 'comparison', el: document.getElementById('comparison') }
      ];

      if (scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      // Check sections from bottom up to accurately highlight
      const scrollPos = scrollY + 240;
      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Click outside to close dropdowns
  useEffect(() => {
    if (!profileDropdownOpen && !notificationsOpen) return;
    const handleClickOutside = () => {
      setProfileDropdownOpen(false);
      setNotificationsOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [profileDropdownOpen, notificationsOpen]);

  // Keyboard navigation: Escape key closes menus (Gap #9)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNotificationsOpen(false);
        setProfileDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNotificationClick = (item) => {
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

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    
    if (id === 'hero' || id === 'home') {
      setActiveSection('hero');
      if (activePage !== 'home') {
        setActivePage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setActiveSection(id);
    if (activePage !== 'home') {
      if (['how-it-works', 'features', 'comparison'].includes(id)) {
        setActivePage('home');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setActivePage(id);
      }
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setActivePage(id);
      }
    }
  };

  const userAvatar = currentUser?.avatar || 'AS';
  const userName = currentUser?.name || 'Aarav Sharma';
  const userRole = currentUser?.role || 'BAMS Scholar';

  const renderNotificationBell = (isMobile = false) => (
    <div className="relative">
      <button
        type="button"
        id={isMobile ? 'navbar-bell-mobile' : 'navbar-bell-desktop'}
        aria-haspopup="menu"
        aria-expanded={notificationsOpen}
        aria-label={`Notifications. ${unreadCount} unread`}
        onClick={(e) => {
          e.stopPropagation();
          setNotificationsOpen(prev => !prev);
          setProfileDropdownOpen(false);
        }}
        className={`rounded-xl flex items-center justify-center transition-all cursor-pointer relative border ${
          isMobile ? 'w-9 h-9' : 'w-10 h-10'
        } ${
          notificationsOpen 
            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 ring-2 ring-emerald-600/20' 
            : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200/80 shadow-xs'
        }`}
        title="Notifications & Cross-Stakeholder Activity"
      >
        <Bell className={isMobile ? 'w-4 h-4' : 'w-4.5 h-4.5'} />
        {unreadCount > 0 && (
          <span 
            aria-live="polite"
            className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-rose-500 text-white rounded-full text-[10px] font-black flex items-center justify-center ring-2 ring-white shadow-xs"
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
          className={`absolute ${isMobile ? 'right-[-40px] w-80' : 'right-0 w-80 sm:w-96'} mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in zoom-in-95 text-left`}
        >
          {/* Header */}
          <div className="px-4 pb-2.5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs sm:text-sm text-slate-900">Notifications</span>
              {unreadCount > 0 ? (
                <span className="text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full">
                  {unreadCount} Unread
                </span>
              ) : (
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  All caught up
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  title="Mark all notifications as read"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Mark all read</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setNotificationsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
                title="Close notifications (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Toggle: Current Role vs All Stakeholder Feeds */}
          <div className="px-3 pt-2 pb-1.5 flex gap-1 border-b border-slate-100 bg-slate-50/60">
            <button
              type="button"
              onClick={() => setFilterMode('role')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                filterMode === 'role'
                  ? 'bg-white text-emerald-900 shadow-xs border border-slate-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              My Role
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white text-emerald-900 shadow-xs border border-slate-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              All Activity
            </button>
          </div>

          {/* Notification items list */}
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-100" tabIndex={0}>
            {roleNotifications.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-700">No notifications in this view</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Events from applications, interviews, and NOC requests will sync here automatically.</p>
              </div>
            ) : (
              roleNotifications.map((item) => {
                const roleBadgeColor = 
                  item.targetRole === 'company' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                  item.targetRole === 'student' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                  item.targetRole === 'college' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                  'bg-purple-50 text-purple-800 border-purple-200';

                return (
                  <div
                    key={item.id}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleNotificationClick(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleNotificationClick(item);
                      }
                    }}
                    className={`p-3 sm:p-3.5 transition-colors cursor-pointer flex gap-3 items-start outline-none focus:bg-emerald-50/70 hover:bg-slate-50 ${
                      !item.read ? 'bg-emerald-50/40 border-l-3 border-emerald-600' : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border ${roleBadgeColor}`}>
                      {item.targetRole === 'company' ? <Briefcase className="w-4 h-4" /> :
                       item.targetRole === 'student' ? <User className="w-4 h-4" /> :
                       item.targetRole === 'college' ? <Building2 className="w-4 h-4" /> :
                       <Sparkles className="w-4 h-4" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
                          {item.senderName || item.senderRole || 'System'}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-0.5 shrink-0">
                          <Clock className="w-3 h-3" />
                          {formatRelativeTime(item.timestamp)}
                        </span>
                      </div>
                      <h5 className={`text-xs mt-0.5 line-clamp-1 ${!item.read ? 'font-black text-slate-950' : 'font-bold text-slate-800'}`}>
                        {item.title}
                      </h5>
                      <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-2 leading-tight">
                        {item.message}
                      </p>
                      {item.link && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 mt-1 hover:underline">
                          <span>Open workflow</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>

                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-2" title="Unread" />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="site-nav bg-white/90 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-slate-200/80 shadow-xs transition-all duration-200">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop flex justify-between items-center h-[76px]">

          {/* Brand Logo - Restored Original Ayush spa Logo */}
          <div
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">spa</span>
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-none">
                Skill<span className="text-emerald-700 font-extrabold ml-0.5">Setu</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links with Auto-Moving Highlight Pill */}
          <nav className="hidden md:flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-slate-100/70 p-1 shadow-xs backdrop-blur-md h-12 relative">
            {navItems.map((item) => {
              const isCurrentActive = activePage === 'home' ? activeSection === item.id : activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative h-full flex items-center px-4 rounded-xl text-sm lg:text-[15px] transition-colors duration-200 cursor-pointer select-none z-10 font-bold ${
                    isCurrentActive
                      ? 'text-emerald-900'
                      : 'text-slate-600 hover:text-slate-900 font-semibold'
                  }`}
                >
                  {isCurrentActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm border border-slate-200/90 -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex gap-2.5 items-center">
            {/* Public Cryptographic Credential Verifier Button */}
            <button
              type="button"
              onClick={() => {
                if (onOpenVerifierModal) onOpenVerifierModal();
                else window.dispatchEvent(new CustomEvent('open_credential_verifier'));
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200/90 transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 shrink-0"
              title="Cryptographic Credential Verifier (SHA-256)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Verify Integrity</span>
            </button>

            {/* Cross-Stakeholder Notification Bell (Hidden on Landing Page) */}
            {activePage !== 'home' && renderNotificationBell(false)}

            {currentUser ? (
              /* Profile PFP Avatar Button (Only when user is signed in) */
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfileDropdownOpen(prev => !prev);
                  }}
                  className="flex items-center gap-2.5 bg-white hover:bg-emerald-50/80 border border-slate-200/80 rounded-2xl p-1.5 pr-3.5 shadow-xs transition-all cursor-pointer group active:scale-95"
                  title="Click to toggle Profile menu"
                >
                  <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-900 text-white font-extrabold text-xs flex items-center justify-center shadow-xs border-2 border-emerald-100 group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
                    {currentUser.avatarImage ? (
                      <img src={currentUser.avatarImage} alt={userName} className="w-full h-full object-cover" />
                    ) : (
                      <span>{userAvatar}</span>
                    )}
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                  </div>

                  <div className="text-left hidden lg:block min-w-0">
                    <div className="text-xs font-extrabold text-slate-900 group-hover:text-emerald-800 flex items-center gap-1 truncate">
                      <span>{userName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold leading-none mt-0.5 truncate">
                      {userRole}
                    </div>
                  </div>
                </button>

                {profileDropdownOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95"
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <span className="font-extrabold text-xs text-slate-900 block">{userName}</span>
                      <span className="text-[10px] text-slate-500 font-medium block">{userRole}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNavClick('profile')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-4 h-4 text-emerald-700" />
                      <span>View Profile Page</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        if (onOpenVerifierModal) onOpenVerifierModal();
                        else window.dispatchEvent(new CustomEvent('open_credential_verifier'));
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Verify Credential Integrity</span>
                    </button>

                    <div className="pt-1 mt-1 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onLogout) onLogout();
                          else onOpenAuthModal('login');
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-600" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}



            {!currentUser && (
              <button
                type="button"
                onClick={() => onOpenAuthModal('login')}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-label-sm text-xs font-bold py-2.5 px-5 rounded-xl active:scale-95 hover:shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Sign In</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
              </button>
            )}
          </div>

          {/* Mobile Action Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Notification Bell (Hidden on Landing Page) */}
            {activePage !== 'home' && renderNotificationBell(true)}

            {currentUser ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfileDropdownOpen(prev => !prev);
                  }}
                  className="w-9 h-9 rounded-xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center border-2 border-white shadow-xs shrink-0 overflow-hidden cursor-pointer"
                  title="Profile Menu"
                >
                  {currentUser.avatarImage ? (
                    <img src={currentUser.avatarImage} alt={userName} className="w-full h-full object-cover" />
                  ) : (
                    <span>{userAvatar}</span>
                  )}
                </button>

                {profileDropdownOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95"
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <span className="font-extrabold text-xs text-slate-900 block">{userName}</span>
                      <span className="text-[10px] text-slate-500 font-medium block">{userRole}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNavClick('profile')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-4 h-4 text-emerald-700" />
                      <span>View Profile Page</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        if (onOpenVerifierModal) onOpenVerifierModal();
                        else window.dispatchEvent(new CustomEvent('open_credential_verifier'));
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Verify Credential Integrity</span>
                    </button>

                    <div className="pt-1 mt-1 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onLogout) onLogout();
                          else onOpenAuthModal('login');
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-600" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onOpenAuthModal('login')}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Sign In</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => {
              const isCurrentActive = activePage === 'home' ? activeSection === item.id : activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl font-medium text-base flex justify-between items-center ${isCurrentActive
                      ? 'bg-emerald-800 text-white font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenVerifierModal) onOpenVerifierModal();
                  else window.dispatchEvent(new CustomEvent('open_credential_verifier'));
                }}
                className="w-full py-3 bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 font-bold rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-200 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Verify Credential Integrity</span>
              </button>
              {currentUser ? (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick('profile');
                    }}
                    className="w-full py-3 bg-emerald-50 text-emerald-900 font-bold rounded-xl text-sm flex items-center justify-center gap-2 border border-emerald-200 cursor-pointer"
                  >
                    <User className="w-4 h-4 text-emerald-700" />
                    <span>View Profile ({userName})</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onLogout) onLogout();
                      else onOpenAuthModal('login');
                    }}
                    className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold rounded-xl text-xs flex items-center justify-center gap-2 border border-rose-200 cursor-pointer transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-rose-600" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuthModal('login');
                    }}
                    className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LogIn className="w-4 h-4 text-emerald-300" />
                    <span>Sign In to Portal</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile App Bottom Footer Navigation Bar (Hidden on Landing/Home page) */}
      {activePage !== 'home' && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl px-2 py-2 rounded-t-3xl">
          <div className="grid grid-cols-5 items-center w-full max-w-lg mx-auto">

            {/* 1. Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                activePage === 'home' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
              }`}
            >
              <Home className={`w-5 h-5 shrink-0 ${activePage === 'home' ? 'text-emerald-700' : 'text-slate-500'}`} />
              <span className="text-[10px] mt-1 font-bold">Home</span>
            </button>

            {/* 2. Skills */}
            <button
              onClick={() => handleNavClick('skill')}
              className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                activePage === 'skill' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
              }`}
            >
              <BarChart3 className={`w-5 h-5 shrink-0 ${activePage === 'skill' ? 'text-emerald-700' : 'text-slate-500'}`} />
              <span className="text-[10px] mt-1 font-bold">Skills</span>
            </button>

            {/* 3. Center Elevated Floating Green (+) Button (Perfect 50% Horizontal Center) */}
            <div className="flex items-center justify-center relative -mt-7 w-full">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 p-1">
                <button
                  onClick={() => onOpenAuthModal('login')}
                  className="w-12 h-12 rounded-full bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  title="Access Platform"
                >
                  <Plus className="w-6 h-6 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* 4. Messages */}
            <button
              onClick={() => handleNavClick('messages')}
              className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                activePage === 'messages' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
              }`}
            >
              <MessageSquare className={`w-5 h-5 shrink-0 ${activePage === 'messages' ? 'text-emerald-700' : 'text-slate-500'}`} />
              <span className="text-[10px] mt-1 font-bold">Messages</span>
            </button>

            {/* 5. Jobs */}
            <button
              onClick={() => handleNavClick('jobs')}
              className={`flex flex-col items-center justify-center py-1 w-full text-xs transition-all cursor-pointer ${
                activePage === 'jobs' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
              }`}
            >
              <Briefcase className={`w-5 h-5 shrink-0 ${activePage === 'jobs' ? 'text-emerald-700' : 'text-slate-500'}`} />
              <span className="text-[10px] mt-1 font-bold">Jobs</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
