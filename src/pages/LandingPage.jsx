import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProblemSection } from '../components/ProblemSection';
import { StakeholderCards } from '../components/StakeholderCards';
import { HowItWorks } from '../components/HowItWorks';
import { FeatureBento } from '../components/FeatureBento';
import { MicroSprint } from '../components/MicroSprint';
import { Ecosystem } from '../components/Ecosystem';
import { PortfolioPreview } from '../components/PortfolioPreview';
import { MatchingEngine } from '../components/MatchingEngine';
import { FacultySection } from '../components/FacultySection';
import { AccessibilitySection } from '../components/AccessibilitySection';
import { EcosystemFlow } from '../components/EcosystemFlow';
import { ImpactSection } from '../components/ImpactSection';
import { ProductPreview } from '../components/ProductPreview';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';

export const LandingPage = ({
  currentLang,
  onLangChange,
  contrastMode,
  onToggleContrast,
}) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-ayush-sand selection:bg-emerald-200 selection:text-emerald-950 font-sans text-slate-900 transition-colors duration-200">
      {/* 01. Sticky Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onLangChange={onLangChange}
        contrastMode={contrastMode}
        onToggleContrast={onToggleContrast}
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 02. Asymmetrical Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenDemo={handleOpenDemo}
        />

        {/* 03. Problem & The Gap Map */}
        <ProblemSection />

        {/* 04. Stakeholder Quadrants */}
        <StakeholderCards onOpenDemo={handleOpenDemo} />

        {/* 05. 7-Stage Interactive Pipeline */}
        <HowItWorks onOpenDemo={handleOpenDemo} />

        {/* 06. Core Platform Bento Grid */}
        <FeatureBento onOpenDemo={handleOpenDemo} />

        {/* 07. Key Differentiator: Beyond MCQs */}
        <MicroSprint onOpenDemo={handleOpenDemo} />

        {/* 08. Specialized Ayush Ecosystem */}
        <Ecosystem onOpenDemo={handleOpenDemo} />

        {/* 09. Verifiable Digital Portfolio Dossier */}
        <PortfolioPreview onOpenDemo={handleOpenDemo} />

        {/* 10. Skill-to-Opportunity Matching Engine */}
        <MatchingEngine onOpenDemo={handleOpenDemo} />

        {/* 11. Faculty & Institutional Analytics */}
        <FacultySection onOpenDemo={handleOpenDemo} />

        {/* 12. Vernacular & Pan-India Inclusivity */}
        <AccessibilitySection
          currentLang={currentLang}
          onLangChange={onLangChange}
          contrastMode={contrastMode}
          onToggleContrast={onToggleContrast}
        />

        {/* 13. National Architectural Ecosystem Data Flow */}
        <EcosystemFlow onOpenDemo={handleOpenDemo} />

        {/* 14. Qualitative Evidence-Based Impact */}
        <ImpactSection />

        {/* 15. Cinematic Product Preview */}
        <ProductPreview onOpenDemo={handleOpenDemo} />

        {/* 16. Concluding Call to Action */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* 17. National Ayush Footer */}
      <Footer />

      {/* 18. Interactive Live Demo Sandbox Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
      />
    </div>
  );
};
