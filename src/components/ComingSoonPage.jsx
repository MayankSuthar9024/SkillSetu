import React from 'react';
import { Hourglass, ArrowLeft } from 'lucide-react';

export function ComingSoonPage({ 
  buttonText = 'Back to Feed',
  onBack 
}) {
  return (
    <div className="min-h-screen bg-[#f8faf9] flex items-center justify-center p-4 font-sans text-slate-900">
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100/80 flex flex-col items-center text-center max-w-sm w-full mx-auto">
        {/* Soft Mint Rounded Square with Hourglass Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#eafaf1] flex items-center justify-center text-[#0d5c43] mb-5">
          <Hourglass className="w-7 h-7 text-[#0d5c43]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
          Coming Soon
        </h2>

        {/* Pill Button: Back to Feed */}
        <button
          type="button"
          onClick={onBack || (() => window.history.back())}
          className="px-6 py-2.5 rounded-full bg-[#0d5c43] hover:bg-[#094230] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

export default ComingSoonPage;
