import React from 'react';
import { Building2, ArrowUpRight, MapPin, Users } from 'lucide-react';

export function IndustryPage({ onNavigate }) {
  const companies = [
    {
      name: 'Dabur India R&D Division',
      type: 'Pharma & Phytochemistry',
      location: 'Ghaziabad / New Delhi',
      openings: '15 Listings',
      verifiedScoreReq: '75%+ Readiness',
      logoBg: 'bg-emerald-900',
      logoText: 'DB',
      desc: 'Leading herbal consumer healthcare enterprise hiring junior formulations officers, HPLC Analysts, and clinical trial coordinators.'
    },
    {
      name: 'Himalaya Wellness Company',
      type: 'Ayurvedic Formulations',
      location: 'Bengaluru, Karnataka',
      openings: '12 Listings',
      verifiedScoreReq: '80%+ Readiness',
      logoBg: 'bg-teal-800',
      logoText: 'HW',
      desc: 'Global herbal care pioneer recruiting BAMS and Dravyaguna research fellows for modern standardization labs.'
    },
    {
      name: 'Kottakkal Arya Vaidya Sala',
      type: 'Classical Ayurvedic Healthcare',
      location: 'Kottakkal, Kerala',
      openings: '8 Listings',
      verifiedScoreReq: '78%+ Readiness',
      logoBg: 'bg-emerald-800',
      logoText: 'AVS',
      desc: 'Centuries-old classical Panchakarma healthcare network offering clinical residency and hospital physician roles.'
    },
    {
      name: 'Patanjali Research Foundation',
      type: 'Herbal R&D & Tele-Ayush',
      location: 'Haridwar, Uttarakhand',
      openings: '20 Listings',
      verifiedScoreReq: '75%+ Readiness',
      logoBg: 'bg-amber-800',
      logoText: 'PRF',
      desc: 'Expansive tele-consultation network and bio-molecular research center seeking certified Ayush doctors.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900 pb-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white py-10 px-6 rounded-3xl shadow-md mb-8">
        <div className="max-w-6xl mx-auto">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 w-max mb-2">
            <Building2 className="w-3.5 h-3.5" />
            Ayush Corporate & R&D Network
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Industry Partners & R&D Laboratories
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mt-1.5">
            Connect directly with verified Ayush enterprise recruiters, research facilities, and apex hospital networks hiring top SkillSetu scholars.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Search & Stats Bar */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-soft flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">45+ Verified Ayush Enterprises</h3>
              <p className="text-xs text-slate-500 font-medium">Recruiting through SkillSetu 1-click verified credentials</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('opportunities')}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            <span>View All Active Job Listings</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Enterprise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((comp, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-soft hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${comp.logoBg} text-white font-extrabold text-lg flex items-center justify-center shadow-xs`}>
                      {comp.logoText}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900">{comp.name}</h3>
                      <span className="text-xs text-slate-500 font-semibold">{comp.type}</span>
                    </div>
                  </div>

                  <span className="bg-emerald-50 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-emerald-200/50">
                    {comp.verifiedScoreReq}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
                  {comp.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <div className="flex items-center gap-1 text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{comp.location}</span>
                </div>

                <button
                  onClick={() => onNavigate('opportunities')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  {comp.openings} →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default IndustryPage;
