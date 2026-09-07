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
  User
} from 'lucide-react';
import { PORTALS_DATA, PLATFORM_METADATA } from '../data/portalData';

export const PortalSelectPage = ({
  onBackToHome,
  onLoginSuccess
}) => {
  const [selectedPortalForAuth, setSelectedPortalForAuth] = useState(null);

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

  // 1. SPECIFIC ROLE LOGIN & SIGN-UP PAGE
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
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-950 bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center justify-center">
        
        {/* Page Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Select Your Ayush Portal
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose your stakeholder role to sign in or create a new account for domain-specific tools, verified competencies, and official workflows.
          </p>
        </div>

        {/* 5 Portal Cards Grid with Zoom-in Animation on Hover */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {PORTALS_DATA.map((portal) => {
            const isAdmin = portal.id === 'admin';

            return (
              <div
                key={portal.id}
                onClick={() => setSelectedPortalForAuth(portal)}
                className={`group bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 ease-out flex flex-col justify-between items-center text-center cursor-pointer relative hover:scale-105 active:scale-95 ${
                  isAdmin 
                    ? 'border-emerald-600/40 shadow-md hover:shadow-2xl hover:border-emerald-600'
                    : 'border-[#e0ebe4] shadow-sm hover:shadow-2xl hover:border-emerald-500'
                }`}
              >
                {/* Card Main Info */}
                <div className="flex flex-col items-center space-y-3 w-full">
                  {/* Icon Container with Zoom */}
                  <div className="transition-transform duration-300 group-hover:scale-110">
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

                {/* Action Button with Zoom-in Animation */}
                <div className="w-full pt-6">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPortalForAuth(portal);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 shadow-xs hover:shadow-md bg-emerald-800 text-white hover:bg-emerald-900"
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
        <div className="mt-14 text-center text-xs text-slate-500 flex items-center justify-center">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Ministry of Ayush Role-Based Access Control</span>
          </span>
        </div>

      </main>

    </div>
  );
};

// DEDICATED SPECIFIC ROLE LOGIN & SIGN-UP PAGE COMPONENT
function SpecificRoleLoginPage({ portal, onBack, onSwitchPortal, onLoginSuccess, getPortalIcon }) {
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  
  // Login fields
  const [identifier, setIdentifier] = useState(portal?.defaultCredentials?.identifier || '');
  const [password, setPassword] = useState(portal?.defaultCredentials?.password || '');
  
  // Sign Up fields
  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [specialization, setSpecialization] = useState(
    portal.id === 'student' ? 'BAMS (Ayurveda)' : 
    portal.id === 'company' ? 'Ayush Pharmaceutical / Hospital' : 
    portal.id === 'college' ? 'Ayush University / College' : 
    portal.id === 'faculty' ? 'Clinical Faculty / Preceptor' : 'National Administrator'
  );
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(true);

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
    setErrorMsg('');

    if (authMode === 'login') {
      if (!identifier) {
        setErrorMsg('Please enter your email or stakeholder ID.');
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        const authenticatedUser = {
          ...portal.profileUser,
          name: identifier.includes('@') ? (portal.profileUser?.name || identifier.split('@')[0]) : (portal.profileUser?.name || identifier),
          email: identifier.includes('@') ? identifier : (portal.profileUser?.email || identifier),
        };
        onLoginSuccess(portal.id, authenticatedUser);
      }, 400);
    } else {
      // Sign Up Validation
      if (!fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!signupEmail.trim() || !signupEmail.includes('@')) {
        setErrorMsg('Please enter a valid official email address.');
        return;
      }
      if (!signupPassword || signupPassword.length < 6) {
        setErrorMsg('Password must be at least 6 characters long.');
        return;
      }
      if (signupPassword !== confirmPassword) {
        setErrorMsg('Passwords do not match. Please verify your password.');
        return;
      }
      if (!termsAccepted) {
        setErrorMsg('Please agree to the SkillSetu guidelines and terms.');
        return;
      }

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        const newRegisteredUser = {
          ...portal.profileUser,
          name: fullName.trim(),
          email: signupEmail.trim(),
          degree: portal.id === 'student' ? `${specialization} Scholar` : portal.profileUser?.degree,
          institution: portal.profileUser?.institution || 'Ayush Affiliated Institution',
          isNewAccount: true
        };
        onLoginSuccess(portal.id, newRegisteredUser);
      }, 600);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f9f6] bg-gradient-to-b from-[#e3f4ec] via-[#f2f9f5] to-[#f7faf8] flex flex-col font-sans text-slate-900 relative selection:bg-emerald-200">
      
      {/* Top Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between z-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-950 bg-white/90 hover:bg-white border border-slate-200/90 shadow-xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          aria-label="Back to Role Selection"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Role Selection</span>
        </button>
      </header>

      {/* Main Specific Role Login / Sign Up Card */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-6 sm:py-8 flex flex-col justify-center">
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
                    {authMode === 'login' ? `${portal.title} Sign In` : `Create ${portal.title} Account`}
                  </h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Official
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-6 sm:p-8 pt-6 space-y-4">
            
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-semibold animate-fadeIn">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* SIGN UP SPECIFIC: Full Name */}
              {authMode === 'signup' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Dr. Aarav Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email / Identifier Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {authMode === 'login' ? portal.authFields.idLabel : (portal.id === 'student' ? 'Student Email' : 'Official Email Address')}
                  </label>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> Official Account
                  </span>
                </div>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder={authMode === 'login' ? portal.authFields.idPlaceholder : (portal.id === 'student' ? 'e.g., aarav.sharma@nia.ac.in' : 'scholar@ayush.gov.in')}
                    value={authMode === 'login' ? identifier : signupEmail}
                    onChange={(e) => authMode === 'login' ? setIdentifier(e.target.value) : setSignupEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all"
                    required
                  />
                </div>
              </div>

              {/* SIGN UP SPECIFIC: Discipline / Specialization */}
              {authMode === 'signup' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    {portal.id === 'student' ? 'Ayush Discipline / Degree' : 'Specialization / Organization'}
                  </label>
                  {portal.id === 'student' ? (
                    <select
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all cursor-pointer"
                    >
                      <option value="BAMS (Ayurveda)">Ayurveda — BAMS (Bachelor of Ayurvedic Medicine & Surgery)</option>
                      <option value="BHMS (Homeopathy)">Homeopathy — BHMS (Bachelor of Homeopathic Medicine & Surgery)</option>
                      <option value="BUMS (Unani)">Unani — BUMS (Bachelor of Unani Medicine & Surgery)</option>
                      <option value="BNYS (Yoga & Naturopathy)">Yoga & Naturopathy — BNYS</option>
                      <option value="BSMS (Siddha)">Siddha — BSMS (Bachelor of Siddha Medicine & Surgery)</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      placeholder="e.g. AIIA Faculty / Research Department"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all"
                    />
                  )}
                </div>
              )}

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {authMode === 'login' ? portal.authFields.secretLabel : 'Create Password'}
                  </label>
                  {authMode === 'signup' && (
                    <span className="text-[10px] text-slate-500 font-medium">Min. 6 chars</span>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={authMode === 'login' ? portal.authFields.secretPlaceholder : 'Create secure password'}
                    value={authMode === 'login' ? password : signupPassword}
                    onChange={(e) => authMode === 'login' ? setPassword(e.target.value) : setSignupPassword(e.target.value)}
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

              {/* SIGN UP SPECIFIC: Confirm Password */}
              {authMode === 'signup' && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50/90 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Remember Me (Login) or Terms (Sign Up) */}
              {authMode === 'login' ? (
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
              ) : (
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none text-[11px] text-slate-600 leading-snug">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="rounded text-emerald-700 focus:ring-emerald-700 w-3.5 h-3.5 mt-0.5 shrink-0"
                    />
                    <span>I agree to the National Ayush Academic & Placement Framework terms.</span>
                  </label>
                </div>
              )}

              {/* Submit CTA with Zoom-in hover */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>
                      {authMode === 'login'
                        ? 'Sign In'
                        : `Create ${portal.title} Account`
                      }
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Switch Mode Footer Link */}
            <div className="pt-3 text-center text-xs text-slate-600 border-t border-slate-100">
              {authMode === 'login' ? (
                <span>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setAuthMode('signup'); setErrorMsg(''); }}
                    className="font-bold text-emerald-800 hover:underline cursor-pointer"
                  >
                    Sign Up
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setAuthMode('login'); setErrorMsg(''); }}
                    className="font-bold text-emerald-800 hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </span>
              )}
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}

export default PortalSelectPage;
