import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function ComingSoonView({ onBack }) {
  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-soft max-w-sm w-full flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-2xs">
          <span className="material-symbols-outlined text-3xl text-emerald-800">hourglass_top</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Coming Soon
        </h1>

        {onBack && (
          <button
            onClick={onBack}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Feed</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default ComingSoonView;
