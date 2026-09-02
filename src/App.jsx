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

export function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'features' | 'about' | 'opportunities' | 'login' | 'portals' | 'dashboard'
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
          setCurrentUser(portalCfg?.demoUser || null);
        }
        setActivePage('dashboard');
      } else if (hash === 'features' || hash === 'about' || hash === 'opportunities' || hash === 'how-it-works') {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
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
      setCurrentUser(newUser || portalCfg?.demoUser || null);
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
  if (activePage === 'login' || activePage === 'portals') {
    return (
      <PortalSelectPage
        onBackToHome={handleBackToHome}
        onLoginSuccess={handleLoginSuccess}
        contrastMode={contrastMode}
        onToggleContrast={handleToggleContrast}
      />
    );
  }

  // 2. AUTHENTICATED STAKEHOLDER DASHBOARD
  if (activePage === 'dashboard') {
    return (
      <StakeholderDashboard
        activePortalId={activePortalId}
        currentUser={currentUser}
        onSwitchPortal={handleSwitchPortal}
        onLogout={handleLogout}
        onBackToHome={handleBackToHome}
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
        setActivePage={(page) => {
          setActivePage(page);
          window.location.hash = page === 'home' ? '' : page;
        }}
        onOpenReadinessModal={() => setIsReadinessModalOpen(true)}
        onOpenAuthModal={handleOpenAuth}
      />

      {/* Main Content Area Based on Active Page */}
      <main className="flex-grow pt-20">

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
            <div className="bg-surface-container-low border-b border-outline-variant/30 py-8 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-container/20 px-3 py-1 rounded-full">
                  Step-by-Step Architecture
                </span>
                <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-2">
                  How SkillSetu Connects Ayush Talent to Industry
                </h1>
              </div>
            </div>
            <HowItWorks onOpenReadinessModal={() => setIsReadinessModalOpen(true)} />
          </div>
        )}

        {/* FEATURES PAGE */}
        {activePage === 'features' && (
          <div className="animate-fadeIn">
            <div className="bg-surface-container-low border-b border-outline-variant/30 py-8 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-container/20 px-3 py-1 rounded-full">
                  Platform Capabilities
                </span>
                <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-2">
                  All SkillSetu Features & Infrastructure
                </h1>
              </div>
            </div>
            <Features onOpenReadinessModal={() => setIsReadinessModalOpen(true)} />
          </div>
        )}

        {/* ABOUT PAGE */}
        {activePage === 'about' && (
          <div className="animate-fadeIn">
            <div className="bg-surface-container-low border-b border-outline-variant/30 py-8 px-4 text-center">
              <div className="max-w-container-max mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-container/20 px-3 py-1 rounded-full">
                  Ecosystem Overview
                </span>
                <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-2">
                  About SkillSetu National Ayush Platform
                </h1>
              </div>
            </div>
            <AboutEcosystem onOpenReadinessModal={() => setIsReadinessModalOpen(true)} />
          </div>
        )}

        {/* OPPORTUNITIES PAGE */}
        {activePage === 'opportunities' && (
          <div className="animate-fadeIn py-12 px-4 max-w-container-max mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="bg-secondary-container text-tertiary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Active Career Board
              </span>
              <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface mt-3 mb-3">
                Placement & Internship Opportunities
              </h1>
              <p className="text-base text-on-surface-variant">
                Top Ayush hospitals, wellness clinics, and research labs recruiting verified candidates based on SkillSetu readiness scores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Junior Ayurvedic Physician', hospital: 'AVP Research Foundation', location: 'Coimbatore', scoreReq: '80%+ Readiness', stipend: '₹45,000 / month', tag: 'BAMS' },
                { title: 'Naturopathy Wellness Specialist', hospital: 'Soukya Holistic Health', location: 'Bengaluru', scoreReq: '75%+ Readiness', stipend: '₹50,000 / month', tag: 'BNYS' },
                { title: 'Unani Clinical Officer', hospital: 'Central Council for Research in Unani', location: 'New Delhi', scoreReq: '82%+ Readiness', stipend: '₹55,000 / month', tag: 'BUMS' },
                { title: 'Siddha Herbal Pharmacologist', hospital: 'National Institute of Siddha', location: 'Chennai', scoreReq: '78%+ Readiness', stipend: '₹42,000 / month', tag: 'BSMS' },
                { title: 'Homoeopathic Clinical Research Fellow', hospital: 'NIH Kolkata', location: 'Kolkata', scoreReq: '85%+ Readiness', stipend: '₹60,000 / month', tag: 'BHMS' },
                { title: 'Ayush Tele-Consultant Specialist', hospital: 'Patanjali Wellness Network', location: 'Haridwar / Remote', scoreReq: '75%+ Readiness', stipend: '₹40,000 / month', tag: 'BAMS / BHMS' },
              ].map((opp, idx) => (
                <div key={idx} className="opportunity-card group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 soft-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-primary-container text-on-primary-container text-xs font-bold px-2.5 py-1 rounded-md">
                        {opp.tag}
                      </span>
                      <span className="text-xs font-bold text-tertiary bg-secondary-container px-2.5 py-1 rounded-full">
                        {opp.scoreReq}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface mb-1">{opp.title}</h3>
                    <div className="text-xs font-semibold text-outline mb-1">{opp.hospital}</div>
                    <div className="text-xs text-on-surface-variant flex items-center gap-1 mb-4">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span>{opp.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                    <span className="text-xs font-bold text-primary">{opp.stipend}</span>
                    <button
                      onClick={() => handleOpenAuth()}
                      className="opportunity-card-button bg-primary text-on-primary text-xs font-bold px-4 py-2 rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
                    >
                      Apply with Score
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface-bright border border-outline-variant/30 rounded-2xl p-8 text-center max-w-xl mx-auto">
              <h3 className="font-bold text-xl text-on-surface mb-2">Are you an Employer or Ayush Hospital?</h3>
              <p className="text-xs text-on-surface-variant mb-4">Post opportunities and directly recruit candidates verified via SkillSetu assessment engine.</p>
              <button
                onClick={() => handleOpenAuth()}
                className="bg-primary text-on-primary font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
              >
                Register as Employer
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Global Readiness Diagnostic Modal */}
      <ReadinessModal
        isOpen={isReadinessModalOpen}
        onClose={() => setIsReadinessModalOpen(false)}
      />

      {/* Shared Footer */}
      <Footer
        onNavigate={(page) => {
          if (page === 'login') {
            handleOpenAuth();
          } else {
            setActivePage(page);
            window.location.hash = page === 'home' ? '' : page;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onSeeHowItWorks={handleSeeHowItWorks}
      />

    </div>
  );
}

export default App;
