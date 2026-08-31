import React from 'react';
import { 
  Globe, 
  Contrast, 
  Eye, 
  Keyboard, 
  Type, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Languages
} from 'lucide-react';
import { VERNACULAR_LANGUAGES, VERNACULAR_TRANSLATIONS } from '../data/vernacularData';

export const AccessibilitySection = ({ 
  currentLang, 
  onLangChange, 
  contrastMode, 
  onToggleContrast 
}) => {
  const currentTranslation = VERNACULAR_TRANSLATIONS[currentLang] || VERNACULAR_TRANSLATIONS.en;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Pan-India Inclusivity & Vernacular-First UI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for India. <span className="text-emerald-800">Accessible to Everyone.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            One ecosystem. Many languages. Pan-India accessibility. Built to empower scholars, faculty, and practitioners across both rural colleges and urban apex institutes.
          </p>
        </div>

        {/* Interactive Accessibility Playground */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls Side (Col-Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Language Selector Controls */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-emerald-700" />
                  <span>Select Interface Language (भाषा चयन)</span>
                </label>
                
                <div className="grid grid-cols-3 gap-2">
                  {VERNACULAR_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => onLangChange(lang.code)}
                      className={`p-2.5 rounded-xl text-center transition-all cursor-pointer border text-xs font-bold ${
                        currentLang === lang.code
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <div>{lang.native}</div>
                      <span className={`text-[10px] font-normal block ${currentLang === lang.code ? 'text-emerald-200' : 'text-slate-400'}`}>
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Modes Switcher */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                  <Contrast className="w-4 h-4 text-emerald-700" />
                  <span>Visual Accessibility Theme</span>
                </label>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => contrastMode === 'high' && onToggleContrast()}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      contrastMode !== 'high'
                        ? 'bg-emerald-50 border-emerald-600 ring-1 ring-emerald-600/30'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">Medical Light Mode</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Calm, botanical clean aesthetic</div>
                  </button>

                  <button
                    onClick={() => contrastMode !== 'high' && onToggleContrast()}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      contrastMode === 'high'
                        ? 'bg-slate-900 text-white border-amber-400 ring-1 ring-amber-400'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">High Contrast Mode</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">WCAG AAA maximum contrast</div>
                  </button>
                </div>
              </div>

              {/* Key Accessibility Standards List */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WCAG 2.1 AAA Contrast & Keyboard Focus Trapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Screen Reader Compatible Semantic HTML5 Tags</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Responsive for Low-Bandwidth 2G/3G & Mobile Devices</span>
                </div>
              </div>

            </div>

            {/* Live Vernacular & Accessibility Preview Panel (Col-Span 7) */}
            <div className="lg:col-span-7">
              <div className={`rounded-2xl p-6 sm:p-7 border transition-all ${
                contrastMode === 'high' 
                  ? 'bg-black text-white border-amber-400 shadow-2xl' 
                  : 'bg-slate-50 text-slate-900 border-slate-200 shadow-soft'
              }`}>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Live Vernacular Interface Preview
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    Language: {currentLang.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">
                      Headline (मुख्य शीर्षक)
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold mt-1 leading-snug">
                      {currentTranslation.heroTitle}
                    </h4>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">
                      Description (विवरण)
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {currentTranslation.heroSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                      <span className="text-[10px] font-bold text-slate-400 block">Feature 01</span>
                      <span className="font-bold text-slate-800">{currentTranslation.assessTitle}</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                      <span className="text-[10px] font-bold text-slate-400 block">Feature 02</span>
                      <span className="font-bold text-slate-800">{currentTranslation.mapTitle}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-950 border border-emerald-200 text-xs font-medium">
                    {currentTranslation.accessibilityNotice}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
