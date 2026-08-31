import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  BookOpenCheck, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { FOUR_STAKEHOLDERS } from '../data/skillsetuData';

const iconMap = {
  GraduationCap,
  Building2,
  BookOpenCheck,
  Briefcase
};

export const StakeholderCards = ({ onOpenDemo }) => {
  const [selectedStakeholder, setSelectedStakeholder] = useState(0);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Stakeholder Alignment Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Ecosystem. Four Stakeholders. <span className="text-emerald-800">One Shared Goal.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Tailored workflows engineered specifically for the distinct requirements of Ayush students, colleges, faculty members, and industrial enterprises.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_STAKEHOLDERS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            const isSelected = selectedStakeholder === index;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedStakeholder(index)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-elevated ring-2 ring-emerald-500/20'
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-soft hover:shadow-medium'
                }`}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-emerald-800 text-white'
                        : 'bg-emerald-50 text-emerald-800'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {item.subtitle}
                  </p>

                  {/* Workflow Pathway Flow */}
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200/70 mb-4">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Action Pipeline
                    </span>
                    <p className="text-xs font-bold text-emerald-800 tracking-tight">
                      {item.rolePath}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {item.keyPoints.map((point) => (
                      <div key={point} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    Explore Workflow
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                    isSelected ? 'bg-emerald-800 text-white translate-x-1' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stakeholder Deep Dive Panel */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <span>Active Stakeholder Module</span>
                <span>·</span>
                <span>{FOUR_STAKEHOLDERS[selectedStakeholder].title}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {FOUR_STAKEHOLDERS[selectedStakeholder].rolePath}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                {FOUR_STAKEHOLDERS[selectedStakeholder].summary}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
              >
                <span>Launch {FOUR_STAKEHOLDERS[selectedStakeholder].title.split(' ')[0]} Sandbox</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
