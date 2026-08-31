import React, { useState } from 'react';
import { 
  Leaf, 
  Sun, 
  Flower2, 
  Sparkle, 
  Droplets, 
  Microscope, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Layers,
  ChevronRight
} from 'lucide-react';
import { AYUSH_DOMAINS } from '../data/skillsetuData';

const domainIconMap = {
  Leaf,
  Sun,
  Flower2,
  Sparkle,
  Droplets,
  Microscope
};

export const Ecosystem = ({ onOpenDemo }) => {
  const [selectedDomainIndex, setSelectedDomainIndex] = useState(0);
  const activeDomain = AYUSH_DOMAINS[selectedDomainIndex];
  const IconComponent = domainIconMap[activeDomain.icon] || Leaf;

  return (
    <section id="ecosystem" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Domain Specialization Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built Around the <span className="text-emerald-800">Real Ayush Ecosystem.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Unlike generic platforms, SkillSetu embeds specialized clinical classifications, pharmacopoeial standards, and industry requirements for each Ayush discipline.
          </p>
        </div>

        {/* Domain Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {AYUSH_DOMAINS.map((domain, index) => {
            const DomIcon = domainIconMap[domain.icon] || Leaf;
            const isSelected = selectedDomainIndex === index;

            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainIndex(index)}
                className={`p-3.5 rounded-2xl text-center transition-all cursor-pointer border flex flex-col items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-600/20'
                    : 'bg-white hover:bg-slate-100/80 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-800'
                }`}>
                  <DomIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">{domain.name}</div>
                  <div className={`text-[10px] font-medium mt-0.5 ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {domain.sanskrit}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Deep Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Domain Core Profile */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {activeDomain.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold font-sans">
                      {activeDomain.sanskrit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {activeDomain.tagline}
                  </p>
                </div>
              </div>

              {/* Key Competency Areas */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Diagnostic & Skill Mapping Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDomain.keyAreas.map((area) => (
                    <div 
                      key={area}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunity Career Pathways */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Sample Enterprise Career Roles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeDomain.roles.map((role) => (
                    <span 
                      key={role}
                      className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Specialized Ayush Radar & Placement Preview */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {activeDomain.name} Industry Alignment
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Active MoUs
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Standardized Assessment Rubric</span>
                  <p className="text-slate-700 font-medium">
                    Integrated with Ayush Pharmacopoeia standards and Schedule T Good Manufacturing Practices (GMP).
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Collaborating Industry Partners</span>
                  <p className="text-slate-700 font-medium">
                    Patanjali Research, Dabur India, Himalaya Wellness, Baidyanath, Kottakkal Arya Vaidya Sala, Charak Pharma.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>View {activeDomain.name} Internship Pipelines</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
