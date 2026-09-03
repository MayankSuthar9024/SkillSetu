import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Building2, 
  UserCheck, 
  Landmark, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Check, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PORTALS_DATA, PLATFORM_METADATA } from '../data/portalData';

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

  // 1. SPECIFIC ROLE LOGIN PAGE (when user clicks on any role)
  if (selectedPortalForAuth) {
    return (
      <SpecificRoleLoginPage
        portal={selectedPortalForAuth}
        onBack={() => setSelectedPortalForAuth(null)}
        onSwitchPortal={(p) => setSelectedPortalForAuth(p)}
        onLoginSuccess={onLoginSuccess}
        getPortalIcon={getPortalIcon}
      />
    );
  }

  // 2. ROLE SELECTION OVERVIEW PAGE
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

        {/* Right Status / Organization */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-emerald-900 border border-emerald-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Ministry of Ayush · AIIA
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center justify-center">
        
        {/* Page Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            National Ayush Professional Ecosystem
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Select Your Ayush Portal
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose your stakeholder role to access domain-specific tools, verified competencies, and official workflows.
          </p>
        </div>

        {/* 5 Portal Cards Grid */}
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

    </div>
  );
};

// DEDICATED SPECIFIC ROLE LOGIN PAGE COMPONENT
function SpecificRoleLoginPage({ portal, onBack, onSwitchPortal, onLoginSuccess, getPortalIcon }) {
  const [identifier, setIdentifier] = useState(portal?.defaultCredentials?.identifier || '');
  const [password, setPassword] = useState(portal?.defaultCredentials?.password || '');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update credentials if user switches portal on the page
  useEffect(() => {
    if (portal) {
      setIdentifier(portal.defaultCredentials?.identifier || '');
      setPassword(portal.defaultCredentials?.password || '');
      setErrorMsg('');
      setIsLoading(false);
    }
  }, [portal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier) {
      setErrorMsg('Please enter your email or stakeholder ID.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      setIsLoading(false);
      const authenticatedUser = {
        ...portal.profileUser,
        name: identifier.includes('@') ? (portal.profileUser?.name || identifier.split('@')[0]) : (portal.profileUser?.name || identifier),
        email: identifier.includes('@') ? identifier : (portal.profileUser?.email || identifier),
      };
      onLoginSuccess(portal.id, authenticatedUser);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#f3f9f6] bg-gradient-to-b from-[#e3f4ec] via-[#f2f9f5] to-[#f7faf8] flex flex-col font-sans text-slate-900 relative selection:bg-emerald-200">
      
      {/* Top Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between z-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-950 bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs hover:shadow-sm transition-all cursor-pointer group"
          aria-label="Back to Role Selection"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Role Selection</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-emerald-900 border border-emerald-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Ministry of Ayush · AIIA
          </span>
        </div>
      </header>

      {/* Main Specific Role Login Card */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-6 sm:py-10 flex flex-col justify-center">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
          
          {/* Card Header */}
          <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
            <div className="flex items-center gap-3.5">
              <div className="transition-transform duration-300">
                {getPortalIcon(portal.id)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-slate-900">
                    {portal.title} Sign In
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Official
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {portal.subtitle} · {PLATFORM_METADATA.ministry}
                </p>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-6 sm:p-8 space-y-5">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Identifier Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {portal.authFields.idLabel}
                  </label>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Official Account
                  </span>
                </div>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder={portal.authFields.idPlaceholder}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {portal.authFields.secretLabel}
                  </label>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={portal.authFields.secretPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-emerald-700 focus:ring-emerald-700 w-3.5 h-3.5"
                  />
                  <span>Remember on this device</span>
                </label>
                <span className="text-emerald-800 font-semibold cursor-pointer hover:underline text-[11px]">
                  Forgot password?
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#064e3b] hover:bg-[#033629] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-75"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In to {portal.title} Console</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Switcher to Other Roles */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-500 block mb-2 font-medium">
                Need to access a different stakeholder console?
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {PORTALS_DATA.filter(p => p.id !== portal.id).map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onSwitchPortal(p)}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 transition-colors cursor-pointer border border-slate-200"
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Security Banner */}
          <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500 font-medium">
            Protected by Ministry of Ayush RBAC & ABHA single sign-on protocols.
          </div>

        </div>
      </main>

    </div>
  );
}

export default PortalSelectPage;
