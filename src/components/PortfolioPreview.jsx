import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  GraduationCap, 
  QrCode,
  Lock,
  ChevronRight
} from 'lucide-react';
import { DEMO_STUDENT_PROFILE } from '../data/skillsetuData';

export const PortfolioPreview = ({ onOpenDemo }) => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(DEMO_STUDENT_PROFILE.verificationHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verifiable Digital Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Skills. Your Evidence. <span className="text-emerald-800">Your Digital Portfolio.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A portfolio built around evidence, not just claims. Every micro-sprint, project artifact, and diagnostic score is cryptographically verifiable.
          </p>
        </div>

        {/* Master Student Profile Dossier Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-elevated relative">
          
          {/* Top Verification Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white font-extrabold text-xl flex items-center justify-center shadow-md border-2 border-emerald-400">
                AS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {DEMO_STUDENT_PROFILE.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified Dossier</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                  {DEMO_STUDENT_PROFILE.title}
                </p>
                <p className="text-xs text-slate-500">
                  {DEMO_STUDENT_PROFILE.college} · {DEMO_STUDENT_PROFILE.degree}
                </p>
              </div>
            </div>

            {/* Overall Readiness Metric Circle */}
            <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200 text-center min-w-[120px]">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                Skill Readiness
              </span>
              <span className="text-3xl font-black text-emerald-900">
                {DEMO_STUDENT_PROFILE.overallReadiness}%
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 block mt-0.5">
                Top 5% Cohort
              </span>
            </div>
          </div>

          {/* 3 Metric Summary Boxes */}
          <div className="grid grid-cols-3 gap-3 my-6">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs">
              <span className="text-2xl font-extrabold text-slate-900">0{DEMO_STUDENT_PROFILE.certificationsCount}</span>
              <span className="text-[11px] font-semibold text-slate-500 block uppercase mt-0.5">Certifications</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs">
              <span className="text-2xl font-extrabold text-slate-900">0{DEMO_STUDENT_PROFILE.projectsCount}</span>
              <span className="text-[11px] font-semibold text-slate-500 block uppercase mt-0.5">Research Projects</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs">
              <span className="text-2xl font-extrabold text-emerald-800">0{DEMO_STUDENT_PROFILE.challengesCompleted}</span>
              <span className="text-[11px] font-semibold text-emerald-700 block uppercase mt-0.5">Industry Sprints</span>
            </div>
          </div>

          {/* Verified Skills List */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Cryptographically Verified Competencies
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">Click badge to inspect audit proof</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {DEMO_STUDENT_PROFILE.verifiedSkills.map((skill) => (
                <div
                  key={skill.name}
                  onClick={() => setSelectedBadge(skill)}
                  className="p-3 rounded-xl bg-white hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between text-xs group shadow-2xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-slate-900 group-hover:text-emerald-900">
                      {skill.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Verified by: {skill.verifiedBy}
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sprint Showcase */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                Latest Verified Micro-Sprint
              </span>
              <p className="text-xs font-semibold text-slate-100">
                {DEMO_STUDENT_PROFILE.recentSprint}
              </p>
            </div>
            <button
              onClick={onOpenDemo}
              className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              View Artifact
            </button>
          </div>

          {/* Tamper-Proof Hash & Verification Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-700" />
              <span>Dossier Hash:</span>
              <code className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-800">
                {DEMO_STUDENT_PROFILE.verificationHash}
              </code>
              <button
                onClick={handleCopyHash}
                className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                title="Copy Hash"
                aria-label="Copy verification hash"
              >
                {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              onClick={onOpenDemo}
              className="font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Download Signed Dossier (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Verification Badge Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h4 className="font-bold text-slate-900 text-sm">Credential Audit Trail</h4>
              </div>
              <button
                onClick={() => setSelectedBadge(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Skill Name</span>
                <p className="font-bold text-slate-900 text-sm">{selectedBadge.name}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Proficiency Level</span>
                <p className="font-semibold text-emerald-800">{selectedBadge.level}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Verification Authority</span>
                <p className="text-slate-700">{selectedBadge.verifiedBy}</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Cryptographic Proof:</span>
                  <span className="font-mono text-emerald-700 font-bold">VALID (SHA-256)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Assessment Date:</span>
                  <span>August 2026</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedBadge(null)}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
