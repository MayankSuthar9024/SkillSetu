import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  BookOpenCheck, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const ImpactSection = () => {
  const impactPillars = [
    {
      role: "For Ayush Students & Scholars",
      icon: GraduationCap,
      headline: "Transparent Visibility & Verifiable Capability",
      points: [
        "Replaces unverified resume claims with tangible, rubric-evaluated practical project artifacts.",
        "Uncovers personalized micro-bridge learning pathways to eliminate clinical and regulatory skill deficits.",
        "Direct fast-track discovery by specialized Ayush pharmaceutical and healthcare recruiters."
      ],
      color: "emerald"
    },
    {
      role: "For Ayush Institutions & Colleges",
      icon: Building2,
      headline: "Data-Driven Curriculum Modernization",
      points: [
        "Continuous visibility into student competency distribution across classical and modern instrumentation subjects.",
        "Actionable analytics to upgrade laboratory syllabus in alignment with Schedule T and NABL standards.",
        "Streamlined corporate relations and verifiable campus placement tracking."
      ],
      color: "primary"
    },
    {
      role: "For Faculty & Academicians",
      icon: BookOpenCheck,
      headline: "Institutional & Enterprise Collaboration",
      points: [
        "Structured access to industry-sponsored Faculty Development Programs (FDPs) and laboratory workshops.",
        "Direct pipeline for joint translational research grants and pharmaceutical consultancy mandates.",
        "Benchmarking clinical pedagogy with contemporary pharmacovigilance and evidence-based standards."
      ],
      color: "saffron"
    },
    {
      role: "For Ayush Industry & R&D Labs",
      icon: Briefcase,
      headline: "Accelerated Hiring of Pre-Verified Talent",
      points: [
        "Eliminates thousands of generic, unverified resumes through deterministic skill-vector filtering.",
        "Deploy customized micro-sprints to evaluate real-world problem solving prior to interview calls.",
        "Builds sustainable industry-academia talent pipelines with premier Ayush apex institutions."
      ],
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Evidence-Based Stakeholder Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Skill Gaps to <span className="text-emerald-800">Career Outcomes.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A comprehensive transformation addressing the root structural challenges in the Ayush talent development ecosystem.
          </p>
        </div>

        {/* 4 Impact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {impactPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.role}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft hover:shadow-medium transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {pillar.role}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {pillar.headline}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
