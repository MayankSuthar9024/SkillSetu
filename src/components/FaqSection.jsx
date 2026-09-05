import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/stitchData';

export function FaqSection({ onOpenReadinessModal, onOpenAuthModal }) {
  const [openFaqId, setOpenFaqId] = useState(FAQ_ITEMS[0].id);

  const toggleFaq = (id) => {
    setOpenFaqId(prevId => prevId === id ? null : id);
  };

  return (
    <section className="premium-section py-8 sm:py-14 lg:py-20 bg-surface-container-lowest border-b border-outline-variant/30 overflow-hidden w-full max-w-full">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant mb-4">
            <span className="material-symbols-outlined text-base text-primary">help</span>
            <span>Got Questions? We've Got Answers</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-3 sm:mb-4 tracking-tight break-words">
            Frequently Asked Questions
          </h2>

          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Everything you need to know about SkillSetu skill assessments, digital passports, micro-sprints, and institutional placements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-surface-bright border-primary shadow-soft ring-1 ring-primary/20'
                    : 'bg-surface-container-lowest border-outline-variant/30 hover:border-primary/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-sm sm:text-lg text-on-surface"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                      isOpen ? 'bg-primary text-on-primary' : 'bg-surface-container text-outline'
                    }`}>
                      ?
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <span className={`material-symbols-outlined text-xl transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary' : 'text-outline'
                  }`}>
                    expand_more
                  </span>
                </button>

                <div
                  id={`${faq.id}-answer`}
                  className={`faq-answer-shell ${isOpen ? 'faq-answer-open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                    <p className="pl-0 sm:pl-11">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Support Callout */}
        <div className="mt-12 max-w-xl mx-auto p-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl text-center space-y-3">
          <h4 className="font-bold text-base text-on-surface">Ready to access your Ayush workspace?</h4>
          <p className="text-xs text-on-surface-variant">Sign in directly with your stakeholder credentials as a Student, Company, Faculty, College, or Ministry Admin.</p>
          <div className="flex justify-center pt-2">
            <button 
              onClick={() => onOpenAuthModal('login')}
              className="shimmer-btn bg-emerald-800 text-white font-bold text-sm px-8 py-3 rounded-xl hover:bg-emerald-900 transition-all shadow-soft active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base text-emerald-400">login</span>
              <span>Sign In to Portal</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;
