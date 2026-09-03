import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  UserCheck, 
  Landmark, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Contrast,
  CheckCircle2
} from 'lucide-react';
import { PORTALS_DATA, PLATFORM_METADATA } from '../data/portalData';
import { RoleLoginModal } from '../components/RoleLoginModal';

export const PortalSelectPage = ({
  onBackToHome,
  onLoginSuccess
}) => {
  const [selectedPortalForAuth, setSelectedPortalForAuth] = useState(null);
  const [hoveredPortal, setHoveredPortal] = useState(null);

  const getPortalIcon = (id) => {
    switch (id) {
      case 'student':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#e6f7f0] text-[#0d5c43] flex items-center justify-center border border-[#c6eedb]">
            <GraduationCap className="w-7 h-7" />
          </div>
        );
      case 'company':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#e6f7f0] text-[#0d5c43] flex items-center justify-center border border-[#c6eedb]">
            <Building2 className="w-7 h-7" />
          </div>
        );
      case 'faculty':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#e6f7f0] text-[#0d5c43] flex items-center justify-center border border-[#c6eedb]">
            <UserCheck className="w-7 h-7" />
          </div>
        );
      case 'college':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#eaf2fd] text-[#2563eb] flex items-center justify-center border border-[#cce1fb]">
            <Landmark className="w-7 h-7" />
          </div>
        );
      case 'admin':
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#f4ebfa] text-[#9333ea] flex items-center justify-center border border-[#e8d2fa]">
            <ShieldCheck className="w-7 h-7" />
          </div>
        );
      default:
        return (
          <div className="w-14 h-14 rounded-2xl bg-[#e6f7f0] text-[#0d5c43] flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f9f6] bg-gradient-to-b from-[#e3f4ec] via-[#f2f9f5] to-[#f7faf8] flex flex-col font-sans text-slate-900 relative overflow-x-hidden selection:bg-emerald-200">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-emerald-100/25 via-slate-100/15 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Header Navigation */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between z-10">
        {/* Back to Home Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-950 bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs hover:shadow-sm transition-all cursor-pointer group"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Right Help / SIH Context */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-emerald-900 border border-emerald-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Team {PLATFORM_METADATA.teamName} · {PLATFORM_METADATA.sihId}
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center justify-center">
        
        {/* Page Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Select Your Portal
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose your stakeholder role to access personalized dashboards and verified Ayush workflows.
          </p>
        </div>

        {/* 5 Portal Cards Grid matching Slide 2 & 3 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {PORTALS_DATA.map((portal) => {
            const isAdmin = portal.id === 'admin';
            const isHovered = hoveredPortal === portal.id;

            return (
              <div
                key={portal.id}
                onMouseEnter={() => setHoveredPortal(portal.id)}
                onMouseLeave={() => setHoveredPortal(null)}
                onClick={() => setSelectedPortalForAuth(portal)}
                className={`group bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer relative ${
                  isAdmin 
                    ? 'border-emerald-600/40 shadow-md hover:shadow-xl hover:border-emerald-600'
                    : 'border-[#e0ebe4] shadow-sm hover:shadow-xl hover:border-emerald-400'
                } hover:-translate-y-1.5`}
              >
                {/* Top Subtle Stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-opacity duration-200 ${
                  isHovered ? 'bg-gradient-to-r from-emerald-600 to-teal-500 opacity-100' : 'opacity-0'
                }`} />

                {/* Card Main Info */}
                <div className="flex flex-col items-center space-y-3 w-full">
                  {/* Icon Container */}
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    {getPortalIcon(portal.id)}
                  </div>

                  {/* Portal Title & Documented Subtitle */}
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {portal.title}
                    </h3>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1">
                      {portal.subtitle}
                    </span>
                  </div>

                  {/* Portal Description */}
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[58px] flex items-center justify-center font-normal">
                    {portal.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="w-full pt-6">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPortalForAuth(portal);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                      isAdmin
                        ? 'bg-[#064e3b] text-white hover:bg-[#033629] shadow-sm'
                        : 'bg-[#e2ece6] text-[#284f41] hover:bg-[#064e3b] hover:text-white border border-transparent'
                    }`}
                  >
                    <span>{portal.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info banner */}
        <div className="mt-14 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Ministry of Ayush Role-Based Access Control</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80">
            Unified Single Sign-On (SSO) & ABHA authentication enabled
          </span>
        </div>

      </main>

      {/* Role Login Modal Dialog */}
      <RoleLoginModal
        isOpen={Boolean(selectedPortalForAuth)}
        onClose={() => setSelectedPortalForAuth(null)}
        portal={selectedPortalForAuth}
        onLoginSuccess={(portalId, user) => {
          setSelectedPortalForAuth(null);
          onLoginSuccess(portalId, user);
        }}
      />

    </div>
  );
};
