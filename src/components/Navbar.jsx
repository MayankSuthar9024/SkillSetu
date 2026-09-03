import React, { useState } from 'react';
import { Home, BarChart3, Plus, Building2, User, CheckCircle2, ChevronDown, Flame, MessageSquare } from 'lucide-react';

export function Navbar({ activePage, setActivePage, onOpenReadinessModal, onOpenAuthModal, currentUser }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'skill', label: 'Skill' },
    { id: 'industry', label: 'Industry' },
    { id: 'feed', label: 'Feed' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    window.location.hash = id === 'home' ? '' : id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const userAvatar = currentUser?.avatar || 'AS';
  const userName = currentUser?.name || 'Aarav Sharma';
  const userRole = currentUser?.role || 'BAMS Scholar';

  return (
    <>
      {/* Top Header Bar */}
      <header className="site-nav bg-[#f7faf8]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/60 shadow-xs transition-all duration-200">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop flex justify-between items-center h-[76px]">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">spa</span>
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-none">
                Skill<span className="text-emerald-700 font-extrabold ml-0.5">Setu</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-2xl border border-white/80 bg-white/70 p-1 shadow-xs backdrop-blur-md h-12">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`h-full flex items-center px-4 rounded-xl font-body-md text-sm lg:text-[15px] transition-all duration-200 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'text-primary font-extrabold bg-white shadow-sm ring-1 ring-primary/10'
                      : 'text-slate-600 hover:text-primary hover:bg-white/80 font-medium'
                  }`}
                >
                  {item.label === 'Feed' && <Flame className="w-3.5 h-3.5 text-rose-500 mr-1 animate-pulse" />}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs & Profile PFP */}
          <div className="hidden md:flex gap-3 items-center">
            {currentUser ? (
              /* Profile PFP Avatar Button (Only when user is signed in) */
              <div className="relative">
                <button
                  onClick={() => handleNavClick('profile')}
                  onMouseEnter={() => setProfileDropdownOpen(true)}
                  className="flex items-center gap-2.5 bg-white hover:bg-emerald-50/80 border border-slate-200/80 rounded-2xl p-1.5 pr-3.5 shadow-xs transition-all cursor-pointer group active:scale-95"
                  title="Click to view your Profile Page"
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
                    onMouseLeave={() => setProfileDropdownOpen(false)}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95"
                  >
                    <div className="px-4 py-2 border-b border-slate-100">
                      <span className="font-extrabold text-xs text-slate-900 block">{userName}</span>
                      <span className="text-[10px] text-slate-500 font-medium block">{userRole}</span>
                    </div>
                    
                    <button
                      onClick={() => handleNavClick('profile')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-emerald-700" />
                      <span>My Profile Page</span>
                    </button>

                    <button
                      onClick={() => handleNavClick('feed')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2"
                    >
                      <Flame className="w-4 h-4 text-rose-500" />
                      <span>Community Feed</span>
                    </button>

                    <div className="pt-1 mt-1 border-t border-slate-100">
                      <button
                        onClick={() => onOpenAuthModal('login')}
                        className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                      >
                        Role Portals
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {/* Sign In / Role Selection CTA */}
            <button 
              onClick={() => onOpenAuthModal('login')}
              className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white font-label-sm text-xs font-bold py-2.5 px-5 rounded-xl active:scale-95 hover:shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Sign In</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          {/* Mobile Action Controls */}
          <div className="md:hidden flex items-center gap-2">
            {currentUser ? (
              <button
                onClick={() => handleNavClick('profile')}
                className="w-9 h-9 rounded-xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center border-2 border-white shadow-xs shrink-0 overflow-hidden"
                title="Profile"
              >
                {currentUser.avatarImage ? (
                  <img src={currentUser.avatarImage} alt={userName} className="w-full h-full object-cover" />
                ) : (
                  <span>{userAvatar}</span>
                )}
              </button>
            ) : (
              <button
                onClick={() => onOpenAuthModal('login')}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-800 text-white text-xs font-bold shadow-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Sign In</span>
              </button>
            )}

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-primary hover:bg-surface-container-low transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-outline-variant/30 bg-surface px-4 py-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg font-medium text-base flex justify-between items-center ${
                    isActive
                      ? 'bg-primary text-on-primary font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container-low'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              );
            })}

            <div className="pt-4 border-t border-outline-variant/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal('login');
                }}
                className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-emerald-400">login</span>
                <span>Portal Sign In</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile App Bottom Footer Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl px-4 py-2.5 flex items-center justify-between rounded-t-3xl">
        
        {/* 1. Home */}
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center justify-center py-1 px-2 text-xs transition-all cursor-pointer ${
            activePage === 'home' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
          }`}
        >
          <Home className={`w-5 h-5 shrink-0 ${activePage === 'home' ? 'text-emerald-700' : 'text-slate-500'}`} />
          <span className="text-[10px] mt-1 font-bold">Home</span>
        </button>

        {/* 2. Skills */}
        <button
          onClick={() => handleNavClick('skill')}
          className={`flex flex-col items-center justify-center py-1 px-2 text-xs transition-all cursor-pointer ${
            activePage === 'skill' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
          }`}
        >
          <BarChart3 className={`w-5 h-5 shrink-0 ${activePage === 'skill' ? 'text-emerald-700' : 'text-slate-500'}`} />
          <span className="text-[10px] mt-1 font-bold">Skills</span>
        </button>

        {/* 3. Center Elevated Floating Green (+) Button */}
        <div className="relative -mt-9 flex items-center justify-center shrink-0">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 p-1">
            <button
              onClick={() => onOpenAuthModal('login')}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-800 to-teal-900 hover:from-emerald-900 hover:to-teal-950 active:scale-95 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer group"
              title="Access Platform"
            >
              <Plus className="w-7 h-7 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* 4. Messages */}
        <button
          onClick={() => handleNavClick('messages')}
          className={`flex flex-col items-center justify-center py-1 px-2 text-xs transition-all cursor-pointer ${
            activePage === 'messages' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
          }`}
        >
          <MessageSquare className={`w-5 h-5 shrink-0 ${activePage === 'messages' ? 'text-emerald-700' : 'text-slate-500'}`} />
          <span className="text-[10px] mt-1 font-bold">Messages</span>
        </button>

        {/* 5. Industry */}
        <button
          onClick={() => handleNavClick('industry')}
          className={`flex flex-col items-center justify-center py-1 px-2 text-xs transition-all cursor-pointer ${
            activePage === 'industry' ? 'text-emerald-800 font-extrabold' : 'text-slate-500 hover:text-slate-900 font-semibold'
          }`}
        >
          <Building2 className={`w-5 h-5 shrink-0 ${activePage === 'industry' ? 'text-emerald-700' : 'text-slate-500'}`} />
          <span className="text-[10px] mt-1 font-bold">Industry</span>
        </button>

      </div>
    </>
  );
}

export default Navbar;
