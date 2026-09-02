import React, { useState } from 'react';
import { 
  LogOut, 
  ArrowLeft, 
  RefreshCw, 
  ShieldCheck, 
  ChevronDown, 
  Globe, 
  Contrast,
  GraduationCap,
  Building2,
  UserCheck,
  Landmark
} from 'lucide-react';
import { PORTALS_DATA, PLATFORM_METADATA } from '../data/portalData';

import { StudentPortalView } from '../components/portals/StudentPortalView';
import { CompanyPortalView } from '../components/portals/CompanyPortalView';
import { FacultyPortalView } from '../components/portals/FacultyPortalView';
import { CollegePortalView } from '../components/portals/CollegePortalView';
import { MinistryAdminPortalView } from '../components/portals/MinistryAdminPortalView';

export const StakeholderDashboard = ({
  activePortalId,
  currentUser,
  onSwitchPortal,
  onLogout,
  onBackToHome,
  contrastMode,
  onToggleContrast
}) => {
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const currentPortalConfig = PORTALS_DATA.find(p => p.id === activePortalId) || PORTALS_DATA[0];
  const user = currentUser || currentPortalConfig.profileUser || currentPortalConfig.demoUser;

  const renderActiveView = () => {
    switch (activePortalId) {
      case 'student':
        return <StudentPortalView user={user} />;
      case 'company':
        return <CompanyPortalView user={user} />;
      case 'faculty':
        return <FacultyPortalView user={user} />;
      case 'college':
        return <CollegePortalView user={user} />;
      case 'admin':
        return <MinistryAdminPortalView user={user} />;
      default:
        return <StudentPortalView user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-ayush-sand flex flex-col font-sans text-slate-900">
      
      {/* Top Government Context Header */}
      <header className="bg-ayush-darker text-ayush-mint text-xs py-2 px-4 border-b border-emerald-900/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              SIH 2026 · {PLATFORM_METADATA.sihId}
            </span>
            <span className="hidden sm:inline text-emerald-200/90 font-medium">
              National Ayush Unified Stakeholder Portal
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-emerald-100/80">
            <button
              onClick={onToggleContrast}
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-white transition-colors cursor-pointer"
            >
              <Contrast className="w-3.5 h-3.5" />
              <span>{contrastMode === 'high' ? 'Standard Light' : 'High Contrast'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Navbar */}
      <nav className="bg-white border-b border-slate-200 shadow-soft sticky top-[33px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
              title="Return to Landing Page"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-white shadow-xs">
                <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19C4 13 8 9 12 9C16 9 20 13 20 19" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M12 4C10 7 9 9 9 12C9 14.5 10.5 16 12 16C13.5 16 15 14.5 15 12C15 9 14 7 12 4Z" fill="#10B981" />
                </svg>
              </div>
              <div className="text-left">
                <span className="font-extrabold text-base text-slate-900 tracking-tight block">
                  Skill<span className="text-emerald-700">Setu</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  {currentPortalConfig.title} Console
                </span>
              </div>
            </button>

            <span className="hidden md:inline text-slate-300">|</span>

            {/* Role Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 text-emerald-700" />
                <span>Switch Portal: {currentPortalConfig.title}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute left-0 mt-1.5 w-60 bg-white rounded-2xl shadow-elevated border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Select Stakeholder Portal
                  </div>
                  {PORTALS_DATA.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setRoleDropdownOpen(false);
                        onSwitchPortal(p.id, p.demoUser);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                        activePortalId === p.id 
                          ? 'bg-emerald-50 text-emerald-900 font-bold' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{p.title} Portal</span>
                      <span className="text-[10px] text-slate-400 font-normal">{p.subtitle}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchPortal}
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-800"
            >
              <RefreshCw className="w-3 h-3" /> Switch
            </button>

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 hover:border-red-200 text-xs font-bold transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>

        </div>
      </nav>

      {/* Main Role Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveView()}
      </main>

      {/* Footer note */}
      <footer className="py-4 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        SkillSetu SIH 2026 Prototype · {PLATFORM_METADATA.ministryFull}
      </footer>

    </div>
  );
};
