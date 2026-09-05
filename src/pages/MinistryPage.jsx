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
  Landmark,
  FileText,
  Award,
  Send,
  Sliders,
  Sparkles,
  Download
} from 'lucide-react';
import { PLATFORM_METADATA } from '../data/portalData';

export function MinistryPage({ onNavigate, currentUser }) {
  const [selectedState, setSelectedState] = useState('Rajasthan');
  const [directiveStatus, setDirectiveStatus] = useState(false);

  const adminUser = currentUser || {
    name: "Shri Sanjay K. Verma",
    role: "Director General & National Admin",
    id: "GOI-AYUSH-SEC-01",
    email: "director.skill@ayush.gov.in",
    institution: "Ministry of Ayush, Government of India",
    avatar: "SV"
  };

  const stateData = {
    'Rajasthan': { scholars: '14,280', colleges: 48, deficitArea: 'Phytochemistry HPTLC Assay', readiness: '86.4%', enterprises: 62, status: 'Moderate Deficit' },
    'Kerala': { scholars: '18,450', colleges: 64, deficitArea: 'Schedule T Cleanroom GMP', readiness: '92.1%', enterprises: 95, status: 'Optimal Readiness' },
    'Uttar Pradesh': { scholars: '24,120', colleges: 82, deficitArea: 'Classical Rasa Shastra Protocols', readiness: '81.5%', enterprises: 110, status: 'Action Required' },
    'Maharashtra': { scholars: '19,800', colleges: 71, deficitArea: 'NABL Analytical Validation', readiness: '88.9%', enterprises: 130, status: 'Good Readiness' },
    'Gujarat': { scholars: '12,940', colleges: 42, deficitArea: 'Adverse Event Pharmacovigilance', readiness: '87.2%', enterprises: 78, status: 'Moderate Deficit' },
    'Tamil Nadu': { scholars: '15,600', colleges: 50, deficitArea: 'Siddha Bioactive Fingerprinting', readiness: '90.4%', enterprises: 88, status: 'Optimal Readiness' }
  };

  const nodes = [
    { name: 'Apex Node #01 · NIA Jaipur', latency: '12ms', status: 'Synchronized (Block #49821)', location: 'Rajasthan', color: 'text-emerald-700' },
    { name: 'Apex Node #02 · AIIA New Delhi', latency: '15ms', status: 'Synchronized (Block #49821)', location: 'New Delhi', color: 'text-emerald-700' },
    { name: 'Apex Node #03 · IPGT&RA Jamnagar', latency: '18ms', status: 'Synchronized (Block #49821)', location: 'Gujarat', color: 'text-emerald-700' },
    { name: 'Apex Node #04 · CCRAS Headquarters', latency: '11ms', status: 'Synchronized (Block #49821)', location: 'New Delhi', color: 'text-emerald-700' },
    { name: 'Apex Node #05 · NIS Chennai', latency: '14ms', status: 'Synchronized (Block #49821)', location: 'Tamil Nadu', color: 'text-emerald-700' },
  ];

  const handleIssueDirective = () => {
    setDirectiveStatus(true);
    setTimeout(() => setDirectiveStatus(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#f3f7f5] py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Government Banner */}
        <div className="relative overflow-hidden bg-white border border-slate-200/90 text-slate-900 rounded-3xl p-6 sm:p-10 element-glow-shadow">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-800 text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center shadow-md border border-emerald-700 shrink-0">
                {adminUser.avatar || 'SV'}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-purple-50 text-purple-900 border border-purple-200 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-700" /> Government Command Center
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full border border-slate-200">
                    Token: {adminUser.id}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-serif">
                  Ministry of Ayush Command Portal
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                  {adminUser.name} · {adminUser.role} · {adminUser.institution}
                </p>
              </div>
            </div>

            {/* National High Level Counter */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl text-center flex-1 md:flex-initial">
                <span className="text-[10px] uppercase font-bold text-emerald-200 block">All-India Scholars</span>
                <span className="text-xl font-extrabold text-white">1,24,500+</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl text-center flex-1 md:flex-initial">
                <span className="text-[10px] uppercase font-bold text-purple-200 block">Blockchain Ledger</span>
                <span className="text-xl font-extrabold text-white">14 Apex Nodes</span>
              </div>
            </div>
          </div>
        </div>

        {/* National Performance Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">536+</span>
            <span className="text-xs text-slate-500 font-semibold block">NCISM Permitted Colleges</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800">7,345+</span>
            <span className="text-xs text-slate-500 font-semibold block">Licensed Pharma Units</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-800">100% SHA-256</span>
            <span className="text-xs text-slate-500 font-semibold block">Verifiable Credentials</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-teal-800">88.4%</span>
            <span className="text-xs text-slate-500 font-semibold block">National Talent Index</span>
          </div>
        </div>

        {/* Main State Deficit Controller Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* State List Selector */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-emerald-700" />
                <span>State Talent Deficit Heatmap</span>
              </h3>
              <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Live AI Engine</span>
            </div>
            <p className="text-xs text-slate-500">
              Select an Indian state to audit live regional skill bottlenecks and compliance.
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
                  <div>
                    <span className="block font-bold">{st}</span>
                    <span className={`text-[10px] ${selectedState === st ? 'text-emerald-200' : 'text-slate-400'}`}>
                      {stateData[st].scholars} Scholars · {stateData[st].colleges} Colleges
                    </span>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                    selectedState === st ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {stateData[st].readiness}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected State Detailed Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  State Intelligence & Deficit Monitor
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {selectedState} Ayush Ecosystem
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Readiness Index: {stateData[selectedState].readiness}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-bold">Total Enrolled Scholars</span>
                <strong className="text-base text-slate-900 font-extrabold">{stateData[selectedState].scholars}</strong>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-bold">NCISM Affiliated Colleges</span>
                <strong className="text-base text-blue-900 font-extrabold">{stateData[selectedState].colleges}</strong>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-bold">Licensed Pharma Units</span>
                <strong className="text-base text-amber-700 font-extrabold">{stateData[selectedState].enterprises}</strong>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <span className="text-[10px] text-slate-400 block font-bold">State Audit Status</span>
                <strong className="text-base text-emerald-700 font-extrabold">100% Verified</strong>
              </div>
            </div>

            {/* Deficit Alert Banner */}
            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 space-y-3 text-xs text-amber-950">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Algorithm Flagged Skill Deficit Area:</span>
              </div>
              <p className="leading-relaxed">
                <strong>{stateData[selectedState].deficitArea}</strong> in {selectedState} shows an average student competency gap of 8.2% compared to active employer hiring standards.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={handleIssueDirective}
                  className="px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Issue 1-Click Curriculum Bridge Directive</span>
                </button>
              </div>

              {directiveStatus && (
                <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl font-extrabold text-xs flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Ministry Bridge Directive dispatched to all {stateData[selectedState].colleges} affiliated colleges in {selectedState}!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Blockchain Cryptographic Consortium Ledger Nodes */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-extrabold">
                <Database className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  National Ayush Cryptographic Consortium Nodes
                </h3>
                <p className="text-xs text-slate-500">
                  Consensus Standard: Proof of Competency (PoC) · SHA-256 Ledger
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Block Height #49,821 (Live)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {nodes.map((node, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-2">
                <div>
                  <strong className="text-slate-900 block font-extrabold">{node.name}</strong>
                  <span className="text-slate-500 text-[11px]">Location: {node.location}</span>
                </div>

                <div className="flex justify-between items-center text-[11px] pt-2 border-t border-slate-200">
                  <span className="text-emerald-700 font-bold">{node.status}</span>
                  <span className="text-slate-400 font-mono">{node.latency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default MinistryPage;
