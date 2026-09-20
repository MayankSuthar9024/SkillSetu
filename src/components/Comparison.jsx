import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Check, X } from 'lucide-react';
import { SYSTEM_COMPARISON_DATA } from '../data/stitchData';

export function Comparison() {
  return (
    <section id="comparison" className="premium-section py-8 sm:py-14 lg:py-20 bg-surface-container-lowest border-b border-outline-variant/30 relative overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-2.5 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-full text-xs font-bold mb-3 shadow-2xs"
          >
            <Scale className="w-3.5 h-3.5 text-emerald-700" />
            <span>Platform Comparison</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.05 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 tracking-tight"
          >
            Why SkillSetu is Different
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px 0px -20px 0px" }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed"
          >
            Compare SkillSetu against general job boards on what matters most for Ayush scholars and employers.
          </motion.p>
        </div>

        {/* 100% Fully Responsive Comparison Table (No horizontal scrolling or text clipping) */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xs w-full max-w-4xl mx-auto overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full table-fixed text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[9px] xs:text-[10.5px] sm:text-xs">
                <th className="py-3 sm:py-4 px-2 sm:px-5 w-[37%] sm:w-[46%] tracking-normal sm:tracking-wider">
                  Key Capability
                </th>
                <th className="py-3 sm:py-4 px-0.5 sm:px-3 text-center bg-emerald-50 text-emerald-900 font-extrabold border-x border-emerald-200 w-[21%] sm:w-[18%]">
                  SkillSetu
                </th>
                <th className="py-3 sm:py-4 px-0.5 sm:px-3 text-center text-slate-600 w-[21%] sm:w-[18%]">
                  LinkedIn
                </th>
                <th className="py-3 sm:py-4 px-0.5 sm:px-3 text-center text-slate-600 w-[21%] sm:w-[18%]">
                  Internshala
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {SYSTEM_COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 sm:py-4 px-2 sm:px-5">
                    <div className="font-bold text-slate-900 text-[11px] xs:text-xs sm:text-sm leading-snug">
                      {row.feature}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-normal mt-0.5 hidden xs:block sm:block">
                      {row.note}
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-0.5 sm:px-3 text-center bg-emerald-50/50 border-x border-emerald-100">
                    <span 
                      className="inline-flex items-center justify-center w-5.5 h-5.5 sm:w-7 sm:h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold mx-auto shadow-2xs" 
                      title="Fully Supported"
                    >
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-0.5 sm:px-3 text-center">
                    <span 
                      className="inline-flex items-center justify-center w-5.5 h-5.5 sm:w-7 sm:h-7 rounded-full bg-slate-100 text-slate-400 mx-auto"
                      title="Not Available"
                    >
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-0.5 sm:px-3 text-center">
                    <span 
                      className="inline-flex items-center justify-center w-5.5 h-5.5 sm:w-7 sm:h-7 rounded-full bg-slate-100 text-slate-400 mx-auto"
                      title="Not Available"
                    >
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Comparison;
