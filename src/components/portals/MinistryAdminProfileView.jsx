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
  Database,
  Mail,
  Building,
  FileText,
  Lock
} from 'lucide-react';
import { PLATFORM_METADATA } from '../../data/portalData';

export const MinistryAdminProfileView = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'states' | 'nodes' | 'rbac'
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
      
      {/* Ministry Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft overflow-hidden">
        
        {/* Banner Graphic */}
        <div className="h-44 sm:h-56 w-full bg-gradient-to-r from-[#052c20] via-[#031d15] to-[#043325] relative">
          <div className="absolute top-4 right-4 bg-[#031d15]/90 backdrop-blur-md text-emerald-200 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>National Ayush Command Administrator</span>
          </div>
        </div>

        {/* Profile Info Row */}
        <div className="px-6 pb-6 pt-0 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-14 md:-mt-16 mb-4">
            
            {/* Logo Avatar */}
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-2 border-4 border-white shadow-xl relative z-10">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#064e3b] to-[#022c21] text-white font-extrabold text-3xl flex items-center justify-center border border-emerald-400/30 shadow-inner">
                  <span>{user?.avatar || 'SV'}</span>
                </div>
              </div>

              <div className="pt-2 md:pt-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {user?.name || 'Shri Sanjay K. Verma'}
                  </h1>
                  <ShieldCheck className="w-6 h-6 text-emerald-600 fill-emerald-100 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 flex flex-wrap items-center gap-2">
                  <span>{user?.role || 'Director General & National Admin'}</span>
                  <span>•</span>
                  <span className="text-emerald-900 font-bold">GOI Token: {user?.id || 'GOI-AYUSH-SEC-01'}</span>
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setActiveTab('nodes')}
                className="px-4 py-2.5 bg-[#064e3b] hover:bg-[#03392b] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Database className="w-4 h-4" />
                <span>Verify Cryptographic Consensus</span>
              </button>
            </div>
          </div>

          {/* Info Tags */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-800" />
              {PLATFORM_METADATA.ministryFull}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-emerald-800" />
              28 States & 8 Union Territories
            </span>
            <span className="flex items-center gap-1.5 text-purple-900 font-bold bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
              <Lock className="w-3.5 h-3.5" />
              14 Apex Blockchain Consortium Nodes Active
            </span>
          </div>

        </div>

      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">All-India Scholars</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">1,24,500+</div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Registered Scholars</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Affiliated Colleges</span>
          <div className="text-3xl font-extrabold text-blue-900 mt-1">540</div>
          <span className="text-[11px] text-blue-700 font-semibold mt-1 block">Apex & Regional Colleges</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Corporate Partners</span>
          <div className="text-3xl font-extrabold text-amber-700 mt-1">420</div>
          <span className="text-[11px] text-amber-800 font-semibold mt-1 block">Verified Enterprises</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Cryptographic Nodes</span>
          <div className="text-3xl font-extrabold text-purple-900 mt-1">14</div>
          <span className="text-[11px] text-purple-700 font-semibold mt-1 block">100% Block Consensus</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-xs flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-[#064e3b] text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
          }`}
        >
          Ministry Overview & Policy Directives
        </button>

        <button
          onClick={() => setActiveTab('states')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'states'
              ? 'bg-[#064e3b] text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
          }`}
        >
          State Skill Deficit Map
        </button>

        <button
          onClick={() => setActiveTab('nodes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'nodes'
              ? 'bg-[#064e3b] text-white shadow-xs'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
          }`}
        >
          Consortium Nodes
        </button>
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">National Ayush Skill Mapping Mandate</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Ministry of Ayush, Government of India, established SkillSetu to create a standardized national clinical competency framework. By combining diagnostic skill assessment, micro-course bridge training, and cryptographically verified proof-of-work certificates, SkillSetu eliminates MCQ reliance and bridges Ayush academia directly with industry healthcare employers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-soft space-y-4">
              <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                Government Credentials
              </h4>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>director.skill@ayush.gov.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="font-semibold text-emerald-900">Parichay SSO / GOI Auth Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: STATES */}
      {activeTab === 'states' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-700" />
              <span>Select State</span>
            </h3>

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

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block">Algorithm Flagged Regional Skill Deficit:</strong>
                <p className="mt-0.5">
                  <strong>{stateData[selectedState].deficitArea}</strong> shows an average deficit gap of 8.2% compared to corporate recruiting standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB: NODES */}
      {activeTab === 'nodes' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900">
              National Ayush Cryptographic Consortium Nodes
            </h3>
            <span className="text-xs font-mono text-slate-500">Proof of Competency (PoC)</span>
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
      )}

    </div>
  );
};
