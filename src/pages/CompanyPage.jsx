import React from 'react';
import { CompanyPortalView } from '../components/portals/CompanyPortalView';
import { PORTALS_DATA } from '../data/portalData';
import { ArrowLeft } from 'lucide-react';

export function CompanyPage({ onNavigate, onBack, user }) {
  const companyUser = user || PORTALS_DATA.find(p => p.id === 'company')?.profileUser;

  return (
    <div className="min-h-screen bg-[#f3f7f5] pb-12 font-sans text-slate-900">
      {onBack && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-emerald-950 bg-white border border-slate-200 shadow-xs hover:shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-700" />
            <span>Back</span>
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <CompanyPortalView user={companyUser} />
      </div>
    </div>
  );
}

export default CompanyPage;
