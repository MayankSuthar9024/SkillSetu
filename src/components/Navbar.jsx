import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Globe, 
  Sun, 
  Contrast, 
  ArrowRight, 
  Menu, 
  X, 
  Building2, 
  GraduationCap, 
  Briefcase,
  ChevronDown
} from 'lucide-react';
import { PLATFORM_METADATA } from '../data/skillsetuData';
import { VERNACULAR_LANGUAGES } from '../data/vernacularData';

export const Navbar = ({ 
  currentLang, 
  onLangChange, 
  contrastMode, 
  onToggleContrast,
  onOpenDemo 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why SkillSetu', href: '#why-skillsetu' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Core Platform', href: '#features' },
    { label: 'Micro-Sprints', href: '#micro-sprints' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Analytics', href: '#analytics' },
  ];

  return (
    <>
      {/* Top Government & SIH Context Banner */}
      <aside 
        aria-label="Government Hackathon Context Banner" 
        className="bg-ayush-darker text-ayush-mint border-b border-emerald-900/60 text-xs py-1.5 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              SIH 2026 · {PLATFORM_METADATA.sihId}
            </span>
            <span className="hidden sm:inline text-emerald-200/80">
              National Initiative · {PLATFORM_METADATA.ministryFull}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-emerald-100/70">
            <span className="hidden md:inline">
              Problem Statement: Academia-Industry Collaboration for Skill Mapping & Placement
            </span>
            <button
              onClick={onToggleContrast}
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition-colors cursor-pointer"
              title="Toggle Accessibility Contrast"
              aria-label="Toggle High Contrast Mode"
            >
              <Contrast className="w-3.5 h-3.5" />
              <span>{contrastMode === 'high' ? 'Standard Light' : 'High Contrast'}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-2.5 shadow-soft border-b border-slate-200/80 dark:border-slate-800' 
            : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded-lg p-1"
          >
            {/* Custom Ayush Emblem Icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-white shadow-md border border-emerald-600/30 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Stylized bridge arch & medicinal leaf motif */}
                <path d="M4 19C4 13 8 9 12 9C16 9 20 13 20 19" stroke="currentColor" strokeWidth="2.2" />
                <path d="M12 4C10 7 9 9 9 12C9 14.5 10.5 16 12 16C13.5 16 15 14.5 15 12C15 9 14 7 12 4Z" fill="#10B981" stroke="#34D399" strokeWidth="1.5" />
                <circle cx="12" cy="19" r="1.5" fill="#F59E0B" />
                <line x1="2" y1="19" x2="22" y2="19" stroke="#E2E8F0" strokeWidth="2" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  Skill<span className="text-emerald-700">Setu</span>
                </span>
                <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {PLATFORM_METADATA.nameHindi}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                Ayush Academia × Industry Bridge
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-2 rounded-lg transition-colors border border-slate-200/80 cursor-pointer"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                <span>{VERNACULAR_LANGUAGES.find(l => l.code === currentLang)?.native || 'EN'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-xl shadow-elevated border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Languages (भाषा)
                  </div>
                  {VERNACULAR_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLangChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                        currentLang === lang.code 
                          ? 'bg-emerald-50 text-emerald-800 font-bold' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-[10px] text-slate-400">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Secondary CTA */}
            <button
              onClick={onOpenDemo}
              className="text-xs font-semibold text-slate-700 hover:text-emerald-800 px-3.5 py-2 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-all cursor-pointer shadow-xs"
            >
              Login / Portal Switch
            </button>

            {/* Primary Platform CTA */}
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={() => onLangChange(currentLang === 'en' ? 'hi' : 'en')}
              className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-1.5 rounded-md"
            >
              {currentLang === 'en' ? 'हिन्दी' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-slate-700 hover:text-emerald-700 py-1.5 px-2 rounded-md hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  onToggleContrast();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg flex items-center justify-between"
              >
                <span>Accessibility Mode</span>
                <span className="font-bold text-emerald-800">{contrastMode === 'high' ? 'High Contrast' : 'Medical Light'}</span>
              </button>

              <button
                onClick={() => {
                  onOpenDemo();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Launch Interactive Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
