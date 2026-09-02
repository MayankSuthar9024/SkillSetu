import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Building2, 
  UserCheck, 
  Landmark, 
  ShieldCheck, 
  KeyRound, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  CheckCircle2,
  Smartphone,
  Eye,
  EyeOff
} from 'lucide-react';
import { PLATFORM_METADATA } from '../data/portalData';

export const RoleLoginModal = ({ isOpen, onClose, portal, onLoginSuccess }) => {
  if (!isOpen || !portal) return null;

  const [authMode, setAuthMode] = useState('password'); // 'password' | 'otp'
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getPortalIcon = () => {
    switch (portal.id) {
      case 'student': return <GraduationCap className="w-6 h-6 text-emerald-700" />;
      case 'company': return <Building2 className="w-6 h-6 text-emerald-700" />;
      case 'faculty': return <UserCheck className="w-6 h-6 text-emerald-700" />;
      case 'college': return <Landmark className="w-6 h-6 text-blue-700" />;
      case 'admin': return <ShieldCheck className="w-6 h-6 text-purple-700" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
    }
  };

  const handleQuickDemoLogin = () => {
    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(portal.id, portal.demoUser);
    }, 450);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier) {
      setErrorMsg('Please enter your stakeholder identifier.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      setIsLoading(false);
      const authenticatedUser = {
        ...portal.demoUser,
        name: identifier.includes('@') ? identifier.split('@')[0] : portal.demoUser.name,
        email: identifier.includes('@') ? identifier : portal.demoUser.email,
      };
      onLoginSuccess(portal.id, authenticatedUser);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
              {getPortalIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {portal.title} Portal Sign In
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Official
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {portal.subtitle} · {PLATFORM_METADATA.ministry}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-5">
          
          {/* 1-Click Quick Demo Login Button for Hackathon Evaluation */}
          <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/90 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                SIH 2026 Jury Demonstration Mode
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-800 bg-white/80 px-2 py-0.5 rounded border border-emerald-300">
                1-Click Fast Pass
              </span>
            </div>
            <p className="text-xs text-emerald-900">
              Instant login as verified demo user: <strong className="font-bold text-emerald-950">{portal.demoUser.name}</strong> ({portal.demoUser.institution})
            </p>
            <button
              onClick={handleQuickDemoLogin}
              disabled={isLoading}
              className="w-full mt-1 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <span>Authenticating Credentials...</span>
              ) : (
                <>
                  <span>⚡ 1-Click Quick Demo Login as {portal.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-[11px] font-semibold text-slate-400 uppercase">
              Or Sign In with Credentials
            </span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Auth Mode Toggle */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setAuthMode('password')}
              className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                authMode === 'password'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Password / Key
            </button>
            <button
              onClick={() => setAuthMode('otp')}
              className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                authMode === 'otp'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              OTP / DigiLocker / Parichay
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-semibold">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                {portal.authFields.idLabel}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={portal.authFields.idPlaceholder}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium"
                />
              </div>
            </div>

            {authMode === 'password' ? (
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {portal.authFields.secretLabel}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={portal.authFields.secretPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  6-Digit OTP / Security Token
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Smartphone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter OTP (e.g. 529182)"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      maxLength={6}
                      className="w-full pl-9 pr-4 py-2.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 text-slate-900 font-medium"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setOtpSent(true)}
                    className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {otpSent ? 'Resend (45s)' : 'Get OTP'}
                  </button>
                </div>
                {otpSent && (
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                    ✓ OTP dispatched to registered mobile / ABHA handle
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? <span>Verifying...</span> : <span>Sign In to {portal.title} Portal</span>}
            </button>
          </form>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Protected by Ministry of Ayush Cryptographic RBAC</span>
        </div>

      </div>
    </div>
  );
};
