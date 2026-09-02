import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Activity, 
  Users, 
  Building2, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw,
  Database
} from 'lucide-react';
import { PLATFORM_METADATA } from '../../data/portalData';

export const MinistryAdminPortalView = ({ user }) => {
  const [selectedState, setSelectedState] = useState('Rajasthan');

  const stateData = {
    'Rajasthan': { scholars: '14,280', colleges: 48, deficitArea: 'Phytochemistry HPTLC Assay', readiness: '86.4%', enterprises: 62 },
    'Kerala': { scholars: '18,450', colleges: 64, deficitArea: 'Schedule T Cleanroom GMP', readiness: '92.1%', enterprises: 95 },
    'Uttar Pradesh': { scholars: '24,120', colleges: 82, deficitArea: 'Classical Rasa Shastra Protocols', readiness: '81.5%', enterprises: 110 },
    'Maharashtra': { scholars: '19,800', colleges: 71, deficitArea: 'NABL Analytical Validation', readiness: '88.9%', enterprises: 130 },
    'Gujarat': { scholars: '12,940', colleges: 42, deficitArea: 'Adverse Event Pharmacovigilance', readiness: '87.2%', enterprises: 78 }
  };

  const nodes = [
    { name: 'Apex Node #01 · NIA Jaipur', latency: '12ms', status: 'Synchronized (Block #49821)', color: 'text-emerald-700' },
    { name: 'Apex Node #02 · AIIA New Delhi', latency: '15ms', status: 'Synchronized (Block #49821)', color: 'text-emerald-700' },
    { name: 'Apex Node #03 · IPGT&RA Jamnagar', latency: '18ms', status: 'Synchronized (Block #49821)', color: 'text-emerald-700' },
    { name: 'Apex Node #04 · CCRAS Headquarters', latency: '11ms', status: 'Synchronized (Block #49821)', color: 'text-emerald-700' },
  ];

  return (
    <div className="space-y-6">
      {/* Ministry Command Center Banner */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#063A2B] to-[#03241B] text-white font-extrabold text-2xl flex items-center justify-center shadow-md border-2 border-emerald-400/40">
            {user.avatar || 'SV'}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900">{user.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                National Command Administrator
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {PLATFORM_METADATA.ministryFull} · Token ID: <span className="font-mono font-semibold text-slate-700">{user.id}</span>
            </p>
          </div>
        </div>

        {/* National Stats */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700 block">All-India Scholars</span>
            <span className="text-xl font-extrabold text-emerald-950">1,24,500+</span>
          </div>
          <div className="bg-purple-50 border border-purple-200 px-4 py-2 rounded-2xl text-center">
            <span className="text-[10px] uppercase font-bold text-purple-700 block">Blockchain Hash Ledger</span>
            <span className="text-xl font-extrabold text-purple-950">14 Nodes Active</span>
          </div>
        </div>
      </div>

      {/* State-wise Skill Deficit Map Controller */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-emerald-700" />
            <span>State Talent Deficit Selector</span>
          </h3>
          <p className="text-xs text-slate-500">
            Select a state to review live regional skill bottlenecks and institutional compliance.
          </p>

          <div className="space-y-2 pt-2">
            {Object.keys(stateData).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`w-full text-left p-3.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between border ${
                  selectedState === st
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <span>{st}</span>
                <span className={`text-[11px] ${selectedState === st ? 'text-emerald-200' : 'text-slate-400'}`}>
                  {stateData[st].scholars} Scholars
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* State Data Intelligence Card */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase">State Intelligence Dashboard</span>
              <h3 className="text-lg font-extrabold text-slate-900">{selectedState} Ayush Ecosystem</h3>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
              Readiness: {stateData[selectedState].readiness}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 block font-bold">Total Enrolled</span>
              <strong className="text-base text-slate-900">{stateData[selectedState].scholars}</strong>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 block font-bold">Affiliated Colleges</span>
              <strong className="text-base text-blue-900">{stateData[selectedState].colleges}</strong>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 block font-bold">Industry Partners</span>
              <strong className="text-base text-amber-700">{stateData[selectedState].enterprises}</strong>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] text-slate-400 block font-bold">Audit Status</span>
              <strong className="text-base text-emerald-700">100% Verified</strong>
            </div>
          </div>

          {/* Deficit Alert */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block">Primary State Skill Deficit Flagged by Algorithm:</strong>
              <p className="mt-0.5">
                <strong>{stateData[selectedState].deficitArea}</strong> shows an average deficit gap of 8.2% compared to the active recruiting standard. Recommend issuing a targeted Ministry micro-curriculum bridge directive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Ledger Nodes */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-purple-700" />
            <h3 className="text-base font-extrabold text-slate-900">
              National Ayush Cryptographic Consortium Nodes
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">Consensus: Proof of Competency (PoC)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {nodes.map((node, idx) => (
            <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <strong className="text-slate-900 block font-bold">{node.name}</strong>
                <span className="text-emerald-700 font-semibold">{node.status}</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">{node.latency}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
