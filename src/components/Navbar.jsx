import React, { useState } from 'react';

export function Navbar({ activePage, setActivePage, onOpenAuthModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'opportunities', label: 'Opportunities' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-nav bg-[#f7faf8]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/60 transition-all duration-200">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop flex justify-between items-center h-[76px]">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-ayush-deep via-primary to-ayush-emerald flex items-center justify-center text-on-primary font-bold shadow-emerald-glow group-hover:scale-105 transition-transform overflow-hidden">
            <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-white/20" />
            <span className="material-symbols-outlined text-[25px] relative">spa</span>
          </div>
          <div>
            <div className="font-display-lg text-[23px] font-extrabold text-ayush-deep tracking-[-0.04em] leading-none">
              SkillSetu
            </div>
            <div className="text-[9px] uppercase font-bold tracking-[0.16em] text-primary/70 mt-1 hidden sm:block">
              Ayush Skill Ecosystem
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-2xl border border-white/70 bg-white/60 p-1 shadow-sm backdrop-blur-md h-12">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`h-full flex items-center px-4 rounded-xl font-body-md text-sm lg:text-[15px] transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'text-primary font-bold bg-white shadow-sm ring-1 ring-primary/10'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Single Focused Login Action CTA */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => onOpenAuthModal('login')}
            className="shimmer-btn bg-slate-900 hover:bg-slate-800 text-white font-label-sm text-sm py-2.5 px-5 rounded-xl active:scale-95 transition-all shadow-sm flex items-center gap-2 font-bold cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-emerald-400">login</span>
            <span>Portal Sign In</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container-low transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
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
  );
}

export default Navbar;
