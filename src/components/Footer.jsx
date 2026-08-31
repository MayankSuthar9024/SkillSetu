import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Globe, 
  ExternalLink, 
  Award, 
  Heart,
  BookOpen
} from 'lucide-react';
import { PLATFORM_METADATA } from '../data/skillsetuData';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Platform Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center border border-emerald-600 font-black text-base shadow-sm">
                SS
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg text-white tracking-tight">
                    Skill<span className="text-emerald-400">Setu</span>
                  </span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {PLATFORM_METADATA.nameHindi}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Ayush Industry–Academia Skill Mapping & Opportunity Platform
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An ecosystem designed for Smart India Hackathon 2026 under the Ministry of Ayush, connecting scholars, colleges, faculty, and pharmaceutical enterprises.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>SIH 2026 Problem Statement ID: <strong>{PLATFORM_METADATA.sihId}</strong></span>
            </div>
          </div>

          {/* Col 3: Ecosystem Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li><a href="#why-skillsetu" className="hover:text-emerald-400 transition-colors">Why SkillSetu</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">7-Stage Pipeline</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Diagnostic Radar</a></li>
              <li><a href="#micro-sprints" className="hover:text-emerald-400 transition-colors">Micro-Sprints</a></li>
              <li><a href="#ecosystem" className="hover:text-emerald-400 transition-colors">Ayush Disciplines</a></li>
            </ul>
          </div>

          {/* Col 4: Stakeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Stakeholders
            </h4>
            <ul className="space-y-2">
              <li><a href="#why-skillsetu" className="hover:text-emerald-400 transition-colors">Students & Scholars</a></li>
              <li><a href="#analytics" className="hover:text-emerald-400 transition-colors">Apex Colleges (NIA/AIIA)</a></li>
              <li><a href="#analytics" className="hover:text-emerald-400 transition-colors">Faculty Development</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Ayush Enterprise Hub</a></li>
              <li><a href="#analytics" className="hover:text-emerald-400 transition-colors">Ministry Analytics</a></li>
            </ul>
          </div>

          {/* Col 5: Governance & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Standards & Compliance
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Schedule T GMP Rubrics</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ayush Pharmacopoeia (API)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>WCAG 2.1 AAA Contrast</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cryptographic Proof Hashes</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & SIH Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 SkillSetu (कौशलसेतु) · Smart India Hackathon 2026 Prototype Submission.
          </p>
          <p className="text-center md:text-right">
            Designed for Ministry of Ayush Problem Statement <strong>SIH26044</strong> · All numerical values represent prototype demonstration data.
          </p>
        </div>

      </div>
    </footer>
  );
};
