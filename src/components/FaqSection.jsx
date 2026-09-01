import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/stitchData';

export function FaqSection({ onOpenReadinessModal, onOpenAuthModal }) {
  const [openFaqId, setOpenFaqId] = useState(FAQ_ITEMS[0].id);

  const toggleFaq = (id) => {
    setOpenFaqId(prevId => prevId === id ? null : id);
  };

  return (
    <section className="premium-section py-16 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-semibold text-on-surface-variant mb-4">
            <span className="material-symbols-outlined text-base text-primary">help</span>
            <span>Got Questions? We've Got Answers</span>
          </div>

          <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
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
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-headline-md font-bold text-base sm:text-lg text-on-surface"
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
                  <div className="faq-answer px-6 pb-6 pt-1 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                    <p className="pl-11">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Support Callout */}
        <div className="mt-12 max-w-xl mx-auto p-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl text-center space-y-3">
          <h4 className="font-bold text-base text-on-surface">Still have questions about your Ayush discipline?</h4>
          <p className="text-xs text-on-surface-variant">Our team and academic coordinators are here to assist candidates, colleges, and healthcare partners.</p>
          <div className="flex justify-center pt-2">
            <button 
              onClick={() => onOpenAuthModal('signup')}
              className="bg-primary text-on-primary font-bold text-sm px-8 py-3 rounded-full hover:bg-primary/90 transition-all shadow-soft active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Contact Support</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;
