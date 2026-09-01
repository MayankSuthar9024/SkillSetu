import React from 'react';

export function Footer({ onNavigate, onSeeHowItWorks }) {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/50">
      
      {/* Final CTA Banner Replicating Stitch Landing CTA */}
      <div className="py-16 bg-surface hero-grid-bg border-b border-outline-variant/30 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="font-display-lg text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
            Designed to strengthen the Ayush talent pipeline.
          </h2>
          <p className="font-body-lg text-base text-on-surface-variant max-w-xl mx-auto">
            Join the national ecosystem of students, educators, research institutes, and healthcare employers building the future of Ayush medicine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button 
              onClick={onSeeHowItWorks}
              className="bg-primary text-on-primary font-label-sm text-sm py-3.5 px-8 rounded-xl hover:bg-primary/90 transition-all font-semibold shadow-soft active:scale-95"
            >
              Explore How It Works
            </button>
            <button 
              onClick={() => onNavigate('features')}
              className="bg-surface-container-lowest text-on-surface font-label-sm text-sm py-3.5 px-8 rounded-xl border border-outline-variant/50 hover:bg-surface-container-low transition-colors font-semibold active:scale-95"
            >
              Explore Platform Features
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start">
        
        {/* Brand Info (Spans 2 columns on desktop) */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-bold shadow-soft">
              <span className="material-symbols-outlined text-xl">spa</span>
            </div>
            <div className="font-display-lg text-2xl font-extrabold text-primary tracking-tight">
              SkillSetu
            </div>
          </div>
          <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm">
            National Ayush academia-industry collaboration ecosystem for skill assessment, gap mapping, practical micro-sprints, verified student portfolios, and industry placements.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant/30 rounded-lg text-xs font-semibold text-outline">
            <span className="material-symbols-outlined text-sm text-primary">workspace_premium</span>
            <span>Smart India Hackathon 2026 • SIH26044</span>
          </div>
        </div>

        {/* Column 1: Pages */}
        <div className="space-y-3">
          <h4 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-wider text-primary">
            Pages
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <button 
                onClick={() => onNavigate('home')} 
                className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('features')} 
                className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline"
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={onSeeHowItWorks} 
                className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline"
              >
                How It Works
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('about')} 
                className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('opportunities')} 
                className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline"
              >
                Opportunities
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Policies & Terms */}
        <div className="space-y-3">
          <h4 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-wider text-primary">
            Policies & Terms
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Academic Compliance
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support, Feedback & Contact */}
        <div className="space-y-3">
          <h4 className="font-headline-md text-sm font-bold text-on-surface uppercase tracking-wider text-primary">
            Support & Contact
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Send Feedback
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium hover:underline">
                FAQ & Help
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-outline-variant/20 py-4 text-center text-xs text-outline font-medium">
        © 2026 SkillSetu National Ayush Skill Portal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
