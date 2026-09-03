import React, { useState } from 'react';
import { AYUSH_DISCIPLINES } from '../data/stitchData';
import { CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export function ReadinessModal({ isOpen, onClose }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState('ayurveda');
  const [ratings, setRatings] = useState({
    diagnostics: 4,
    pharmacology: 3,
    protocols: 4,
    caseTaking: 3
  });
  const [calculatedScore, setCalculatedScore] = useState(null);

  if (!isOpen) return null;

  const currentDisc = AYUSH_DISCIPLINES.find(d => d.id === selectedDiscipline) || AYUSH_DISCIPLINES[0];

  const handleRatingChange = (key, value) => {
    setRatings(prev => ({ ...prev, [key]: value }));
    setCalculatedScore(null); // Reset until calculate click
  };

  const calculateScore = () => {
    const totalPossible = 20;
    const currentSum = ratings.diagnostics + ratings.pharmacology + ratings.protocols + ratings.caseTaking;
    const baseScore = Math.round((currentSum / totalPossible) * 100);
    setCalculatedScore(baseScore);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 soft-shadow relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">fact_check</span>
            </div>
            <div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface">
                Skill Readiness Assessor
              </h3>
              <p className="text-xs text-on-surface-variant">Standardized Ayush Clinical Competency Benchmark</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-outline hover:text-on-surface rounded-full hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Discipline Picker */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">
            1. Select Your Ayush Qualification
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {AYUSH_DISCIPLINES.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDiscipline(d.id);
                  setCalculatedScore(null);
                }}
                className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center border ${
                  selectedDiscipline === d.id
                    ? 'bg-primary text-on-primary border-primary shadow-xs'
                    : 'bg-surface-bright text-on-surface-variant border-outline-variant/30 hover:bg-surface-container-low'
                }`}
              >
                <div>{d.code}</div>
                <div className="text-[10px] font-medium opacity-80">{d.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Rating Competency Sliders */}
        <div className="space-y-4 mb-6">
          <label className="block text-xs font-bold text-outline uppercase tracking-wider">
            2. Rate Your Current Competency Levels (1 to 5)
          </label>

          {[
            { key: 'diagnostics', label: 'Clinical Diagnostic & Pulse Skills' },
            { key: 'pharmacology', label: 'Herbal & Classical Formulations Knowledge' },
            { key: 'protocols', label: 'Treatment Protocol Execution & Safety' },
            { key: 'caseTaking', label: 'Patient Case Taking & Symptom Synthesis' }
          ].map((item) => (
            <div key={item.key} className="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/20">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-on-surface">{item.label}</span>
                <span className="text-primary font-bold bg-primary-container/20 px-2 py-0.5 rounded">
                  Level {ratings[item.key]} / 5
                </span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => handleRatingChange(item.key, lvl)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      ratings[item.key] === lvl
                        ? 'bg-primary text-on-primary shadow-xs'
                        : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Calculate Trigger */}
        {!calculatedScore ? (
          <button
            onClick={calculateScore}
            className="w-full bg-primary text-on-primary font-bold py-3.5 px-6 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-soft active:scale-95 text-sm"
          >
            <span>Calculate My Readiness Score</span>
            <span className="material-symbols-outlined text-lg">calculate</span>
          </button>
        ) : (
          <div className="bg-surface-bright border border-primary/30 rounded-2xl p-5 text-center animate-fadeIn">
            <div className="text-xs font-bold text-outline uppercase tracking-wide mb-1">
              {currentDisc.code} ({currentDisc.name}) Readiness Result
            </div>
            <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-primary mb-2">
              {calculatedScore}%
            </div>
            
            <div className="text-xs font-semibold text-on-surface-variant mb-4 flex justify-center">
              {calculatedScore >= 80 ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Verified: Eligible for Clinical Fellowships & Direct Placements</span>
                </span>
              ) : calculatedScore >= 60 ? (
                <span className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>Advancing: Recommended Formulations Micro-Sprint</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-blue-800 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                  <BookOpen className="w-4 h-4 text-blue-700" />
                  <span>Foundational: Baseline Clinical Diagnostic Modules Recommended</span>
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCalculatedScore(null)}
                className="flex-1 py-2.5 bg-surface-container border border-outline-variant text-on-surface font-semibold text-xs rounded-xl hover:bg-surface-container-high"
              >
                Recalculate
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 bg-primary text-on-primary font-bold text-xs rounded-xl hover:bg-primary/90"
              >
                Save & Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ReadinessModal;
