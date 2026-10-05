import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STEPS } from '../data/process';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

export const ProcessSection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const activeStep = PROCESS_STEPS[selectedStepIndex];

  return (
    <section id="process" className="py-24 border-b border-paper-border dark:border-paper-dark-border">
      <div className="editorial-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-paper-border dark:border-paper-dark-border mb-12"
        >
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tightest uppercase text-ink-charcoal dark:text-ink-light leading-none">
              HOW I{' '}
              <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
                work
              </span>
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs text-ink-muted dark:text-ink-light-muted max-w-xs">
            MY PRACTICAL PROCESS FOR TAKING AN IDEA TO A WORKING BUILD.
          </p>
        </motion.div>

        {/* Desktop Horizontal Process Timeline / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  playTactileClick();
                  setSelectedStepIndex(idx);
                }}
                className={`p-4 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between min-h-[140px] relative ${
                  isSelected
                    ? 'border-accent-blue bg-accent-blue/10 dark:bg-accent-blue/10 shadow-sm'
                    : 'border-paper-border dark:border-paper-dark-border bg-paper-surface/50 dark:bg-paper-dark-surface/50 hover:border-ink-charcoal/30'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs font-bold text-accent-blue">
                    {step.number}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-ink-subtle hidden lg:inline-block opacity-40" />
                  )}
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg uppercase text-ink-charcoal dark:text-ink-light tracking-tight">
                    {step.phase}
                  </h3>
                  <p className="font-sans text-xs text-ink-muted dark:text-ink-light-muted mt-1 leading-snug">
                    {step.subtitle}
                  </p>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeStepIndicator"
                    className="absolute -bottom-[2px] left-3 right-3 h-[2px] bg-accent-blue rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Step Expanded Inspection Card */}
        <div className="p-6 sm:p-10 rounded-xl border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface shadow-editorial overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-accent-blue text-white shadow-sm">
                    PHASE {activeStep.number}
                  </span>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-ink-charcoal dark:text-ink-light">
                    {activeStep.phase} — {activeStep.subtitle}
                  </h4>
                </div>
                <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-light-muted leading-relaxed font-normal">
                  {activeStep.description}
                </p>
              </div>

              <div className="lg:col-span-5 p-6 rounded-lg bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border shadow-inner">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-subtle block mb-3 font-bold">
                  KEY DELIVERABLES & ARTIFACTS
                </span>
                <ul className="space-y-2.5 font-mono text-xs">
                  {activeStep.deliverables.map((deliv, i) => (
                    <motion.li
                      key={deliv}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-2.5 text-ink-primary dark:text-ink-light"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                      <span>{deliv}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
