import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import AboutEcosystem from './components/AboutEcosystem';
import FaqSection from './components/FaqSection';
import ReadinessModal from './components/ReadinessModal';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import { PortalSelectPage } from './pages/PortalSelectPage';
import { StakeholderDashboard } from './pages/StakeholderDashboard';
import { PORTALS_DATA } from './data/portalData';
import { SkillPage } from './pages/SkillPage';
import { IndustryPage } from './pages/IndustryPage';
import { FeedPage } from './pages/FeedPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagePage } from './pages/MessagePage';

export function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'features' | 'about' | 'opportunities' | 'skill' | 'industry' | 'feed' | 'profile' | 'messages' | 'login' | 'portals' | 'dashboard'
  const [isReadinessModalOpen, setIsReadinessModalOpen] = useState(false);
  const [activePortalId, setActivePortalId] = useState('student');
  const [currentUser, setCurrentUser] = useState(null);
  const [contrastMode, setContrastMode] = useState('standard');

  const handleToggleContrast = () => {
    setContrastMode(prev => (prev === 'standard' ? 'high' : 'standard'));
  };

  useEffect(() => {
    if (contrastMode === 'high') {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  }, [contrastMode]);

  // Sync hash routing for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'login' || hash === 'portals' || hash === 'portal-select') {
        setActivePage('login');
      } else if (hash.startsWith('dashboard')) {
        const role = hash.split('-')[1];
        if (role && PORTALS_DATA.some(p => p.id === role)) {
          setActivePortalId(role);
          const portalCfg = PORTALS_DATA.find(p => p.id === role);
          setCurrentUser(portalCfg?.profileUser || null);
        }
        setActivePage('dashboard');
      } else if (['features', 'about', 'opportunities', 'how-it-works', 'skill', 'industry', 'feed', 'profile', 'messages'].includes(hash)) {
        setActivePage(hash);
      } else if (!hash || hash === 'home') {
        if (currentUser) {
          setActivePage('dashboard');
        } else {
          setActivePage('home');
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAuth = () => {
    setActivePage('login');
    window.location.hash = 'login';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (portalId, user) => {
    setActivePortalId(portalId);
    setCurrentUser(user);
    setActivePage('dashboard');
    window.location.hash = `dashboard-${portalId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchPortal = (newPortalId, newUser) => {
    if (newPortalId) {
      setActivePortalId(newPortalId);
      const portalCfg = PORTALS_DATA.find(p => p.id === newPortalId);
      setCurrentUser(newUser || portalCfg?.profileUser || null);
      window.location.hash = `dashboard-${newPortalId}`;
    } else {
      setActivePage('login');
      window.location.hash = 'login';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActivePage('login');
    window.location.hash = 'login';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActivePage('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page) => {
    if (currentUser) {
      setActivePage('dashboard');
      window.location.hash = `dashboard-${activePortalId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (page === 'login' || page === 'portals') {
      handleOpenAuth();
    } else if (page === 'dashboard') {
      setActivePage('dashboard');
      window.location.hash = `dashboard-${activePortalId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActivePage(page);
      window.location.hash = page === 'home' ? '' : page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeUser = currentUser || PORTALS_DATA[0].profileUser;

  const handleSeeHowItWorks = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('how-it-works');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. DEDICATED PORTAL SELECTION / LOGIN PAGE
  if (!currentUser && (activePage === 'login' || activePage === 'portals')) {
    return (
      <PortalSelectPage
        onBackToHome={handleBackToHome}
        onLoginSuccess={handleLoginSuccess}
        contrastMode={contrastMode}
        onToggleContrast={handleToggleContrast}
      />
    );
  }

  // 2. AUTHENTICATED STAKEHOLDER DASHBOARD (Once signed in, user stays on platform)
  if (currentUser || activePage === 'dashboard') {
    return (
      <StakeholderDashboard
        activePortalId={activePortalId}
        currentUser={currentUser || PORTALS_DATA[0].profileUser}
        onSwitchPortal={handleSwitchPortal}
        onLogout={handleLogout}
        onBackToHome={() => {}}
        contrastMode={contrastMode}
        onToggleContrast={handleToggleContrast}
      />
    );
  }

  // 3. MAIN LANDING PAGES (Home, Features, About, Opportunities)
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans flex flex-col antialiased">

      {/* Shared Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenReadinessModal={() => setIsReadinessModalOpen(true)}
        onOpenAuthModal={handleOpenAuth}
        currentUser={currentUser}
      />

      {/* Main Content Area Based on Active Page */}
      <main className="flex-grow pt-20 pb-24 md:pb-8">

        {/* HOME PAGE */}
        {activePage === 'home' && (
          <div className="animate-fadeIn">
            <Hero
              onGetStarted={() => handleOpenAuth()}
              onSeeHowItWorks={handleSeeHowItWorks}
              onOpenReadinessModal={() => setIsReadinessModalOpen(true)}
            />
            <ScrollReveal><HowItWorks onOpenReadinessModal={() => setIsReadinessModalOpen(true)} /></ScrollReveal>
            <ScrollReveal delay={80}><Features onOpenReadinessModal={() => setIsReadinessModalOpen(true)} /></ScrollReveal>
            <ScrollReveal delay={120}><AboutEcosystem onOpenReadinessModal={() => setIsReadinessModalOpen(true)} /></ScrollReveal>
            <ScrollReveal delay={160}><FaqSection
              onOpenReadinessModal={() => setIsReadinessModalOpen(true)}
              onOpenAuthModal={handleOpenAuth}
            /></ScrollReveal>
          </div>
        )}

        {/* HOW IT WORKS PAGE */}
        {activePage === 'how-it-works' && (
          <div className="animate-fadeIn">
            <div className="hero-grid-bg border-b border-outline-variant/30 py-12 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-white/90 border border-emerald-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
                  Step-by-Step Architecture
                </span>
                <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
                  How SkillSetu Connects Ayush Talent to Industry
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mt-2">
                  A standardized clinical competency journey backed by national academic benchmarks and healthcare employers.
                </p>
              </div>
            </div>
            <HowItWorks onOpenReadinessModal={() => setIsReadinessModalOpen(true)} />
          </div>
        )}

        {/* FEATURES PAGE */}
        {activePage === 'features' && (
          <div className="animate-fadeIn">
            <div className="hero-grid-bg border-b border-outline-variant/30 py-12 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-white/90 border border-emerald-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
                  Platform Capabilities
                </span>
                <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
                  All SkillSetu Features & Infrastructure
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mt-2">
                  Unified competency scoring, micro-sprints, and verifiable credentials for India's Ayush practitioners.
                </p>
              </div>
            </div>
            <Features onOpenReadinessModal={() => setIsReadinessModalOpen(true)} />
          </div>
        )}

        {/* ABOUT PAGE */}
        {activePage === 'about' && (
          <div className="animate-fadeIn">
            <div className="hero-grid-bg border-b border-outline-variant/30 py-12 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-white/90 border border-emerald-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
                  Ecosystem Overview
                </span>
                <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
                  About SkillSetu National Ayush Platform
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mt-2">
                  Connecting students, colleges, industry partners, and the Ministry under one standardized national framework.
                </p>
              </div>
            </div>
            <AboutEcosystem onOpenReadinessModal={() => setIsReadinessModalOpen(true)} />
          </div>
        )}

        {/* OPPORTUNITIES PAGE */}
        {activePage === 'opportunities' && (
          <div className="animate-fadeIn">
            <div className="hero-grid-bg border-b border-outline-variant/30 py-12 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-white/90 border border-emerald-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
                  Active Career Board
                </span>
                <h1 className="font-display-lg text-3xl sm:text-5xl font-extrabold text-on-surface mt-4 tracking-tight">
                  Placement & Internship Opportunities
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mt-2">
                  Top Ayush hospitals, research foundations, and pharmaceutical leaders recruiting verified clinical candidates.
                </p>
              </div>
            </div>

            <div className="py-12 px-4 max-w-container-max mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: 'Junior Ayurvedic Physician', hospital: 'AVP Research Foundation', location: 'Coimbatore', scoreReq: '80%+ Readiness', stipend: '₹45,000 / month', tag: 'BAMS' },
                  { title: 'Naturopathy Wellness Specialist', hospital: 'Soukya Holistic Health', location: 'Bengaluru', scoreReq: '75%+ Readiness', stipend: '₹50,000 / month', tag: 'BNYS' },
                  { title: 'Unani Clinical Officer', hospital: 'Central Council for Research in Unani', location: 'New Delhi', scoreReq: '82%+ Readiness', stipend: '₹55,000 / month', tag: 'BUMS' },
                  { title: 'Siddha Herbal Pharmacologist', hospital: 'National Institute of Siddha', location: 'Chennai', scoreReq: '78%+ Readiness', stipend: '₹42,000 / month', tag: 'BSMS' },
                  { title: 'Homoeopathic Clinical Research Fellow', hospital: 'NIH Kolkata', location: 'Kolkata', scoreReq: '85%+ Readiness', stipend: '₹60,000 / month', tag: 'BHMS' },
                  { title: 'Ayush Tele-Consultant Specialist', hospital: 'Patanjali Wellness Network', location: 'Haridwar / Remote', scoreReq: '75%+ Readiness', stipend: '₹40,000 / month', tag: 'BAMS / BHMS' },
                ].map((opp, idx) => (
                  <div key={idx} className="opportunity-card group bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 soft-shadow flex flex-col justify-between hover:border-primary/40 transition-all">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-lg">
                          {opp.tag}
                        </span>
                        <span className="text-xs font-bold text-tertiary bg-secondary-container px-3 py-1 rounded-full border border-secondary-container/40">
                          {opp.scoreReq}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{opp.title}</h3>
                      <div className="text-xs font-semibold text-outline mb-1">{opp.hospital}</div>
                      <div className="text-xs text-on-surface-variant flex items-center gap-1 mb-4">
                        <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                        <span>{opp.location}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                      <span className="text-xs font-bold text-primary font-mono">{opp.stipend}</span>
                      <button
                        onClick={() => handleOpenAuth()}
                        className="shimmer-btn bg-primary text-on-primary text-xs font-bold px-4 py-2 rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
                      >
                        Apply with Score
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-surface-bright border border-outline-variant/30 rounded-3xl p-8 text-center max-w-xl mx-auto shadow-xs">
                <h3 className="font-bold text-xl text-on-surface mb-2">Are you an Employer or Ayush Hospital?</h3>
                <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Post clinical opportunities and recruit verified candidates directly from the SkillSetu talent engine.</p>
                <button
                  onClick={() => handleOpenAuth()}
                  className="shimmer-btn bg-primary text-on-primary font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all cursor-pointer shadow-soft"
                >
                  Register as Employer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SKILL HUB PAGE */}
        {activePage === 'skill' && (
          <div className="animate-fadeIn">
            <SkillPage
              onNavigate={handleNavigate}
              onOpenReadinessModal={() => setIsReadinessModalOpen(true)}
            />
          </div>
        )}

        {/* INDUSTRY PAGE */}
        {activePage === 'industry' && (
          <div className="animate-fadeIn">
            <IndustryPage
              onNavigate={handleNavigate}
              onOpenAuthModal={handleOpenAuth}
            />
          </div>
        )}

        {/* COMMUNITY FEED PAGE */}
        {activePage === 'feed' && (
          <div className="animate-fadeIn py-6 px-4 max-w-7xl mx-auto">
            <FeedPage
              onNavigate={handleNavigate}
              currentUser={activeUser}
            />
          </div>
        )}

        {/* PROFILE PAGE */}
        {activePage === 'profile' && (
          <div className="animate-fadeIn py-6 px-4 max-w-7xl mx-auto">
            <ProfilePage
              onNavigate={handleNavigate}
              currentUser={activeUser}
            />
          </div>
        )}

        {/* MESSAGES PAGE */}
        {activePage === 'messages' && (
          <div className="animate-fadeIn py-6 px-4 max-w-7xl mx-auto">
            <MessagePage
              onNavigate={handleNavigate}
              currentUser={activeUser}
            />
          </div>
        )}

      </main>

      {/* Global Readiness Diagnostic Modal */}
      <ReadinessModal
        isOpen={isReadinessModalOpen}
        onClose={() => setIsReadinessModalOpen(false)}
      />

      {/* Shared Footer - Removed from landing page per user flow specification */}
      {activePage !== 'home' && (
        <Footer
          onNavigate={(page) => {
            if (page === 'login') {
              handleOpenAuth();
            } else {
              handleNavigate(page);
            }
          }}
          onSeeHowItWorks={handleSeeHowItWorks}
        />
      )}

    </div>
  );
}

export default App;
