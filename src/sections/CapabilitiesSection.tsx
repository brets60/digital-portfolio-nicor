import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAPABILITIES } from '../data/capabilities';
import { Plus, ArrowRight } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

export const CapabilitiesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('web-apps');

  const toggleRow = (id: string) => {
    playTactileClick();
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="capabilities" className="py-24 border-b border-paper-border dark:border-paper-dark-border">
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
              WHAT I CAN{' '}
              <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
                build
              </span>
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs text-ink-muted dark:text-ink-light-muted max-w-xs">
            CLICK ANY AREA BELOW TO SEE THE TOOLS AND APPROACH I USE.
          </p>
        </motion.div>

        {/* Large Horizontal Capability Rows */}
        <div className="divide-y divide-paper-border dark:divide-paper-dark-border border-y border-paper-border dark:border-paper-dark-border">
          {CAPABILITIES.map((capability, idx) => {
            const isExpanded = expandedId === capability.id;
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group transition-colors duration-200 ${
                  isExpanded
                    ? 'bg-paper-surface/70 dark:bg-paper-dark-surface/70'
                    : 'hover:bg-paper-surface/30 dark:hover:bg-paper-dark-surface/30'
                }`}
              >
                {/* Row Header / Toggle Bar */}
                <button
                  onClick={() => toggleRow(capability.id)}
                  aria-expanded={isExpanded}
                  className="w-full py-8 px-2 sm:px-6 flex flex-col md:flex-row md:items-center justify-between text-left transition-all gap-4"
                >
                  <div className="flex items-baseline sm:items-center gap-4 sm:gap-8 flex-1">
                    <span className="font-mono text-sm sm:text-base font-semibold text-accent-blue group-hover:scale-110 transition-transform origin-left">
                      {capability.number}
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-ink-charcoal dark:text-ink-light group-hover:text-accent-blue transition-colors">
                        {capability.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-ink-muted dark:text-ink-light-muted mt-1 max-w-2xl font-normal">
                        {capability.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-ink-subtle">
                      {isExpanded ? 'COLLAPSE' : 'EXPAND'}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-paper-border dark:border-paper-dark-border flex items-center justify-center text-ink-charcoal dark:text-ink-light bg-paper-light dark:bg-paper-dark group-hover:border-accent-blue group-hover:text-accent-blue transition-colors">
                      <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </button>

                {/* Smooth Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${capability.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-paper-border/50 dark:border-paper-dark-border/50">
                        <div className="lg:col-span-6">
                          <h4 className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle dark:text-ink-light-subtle mb-2 flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-accent-blue" />
                            DEEP DIVE & EXECUTION FOCUS
                          </h4>
                          <p className="font-sans text-base text-ink-primary dark:text-ink-light leading-relaxed font-normal">
                            {capability.deepDive}
                          </p>
                        </div>

                        <div className="lg:col-span-3">
                          <h4 className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle dark:text-ink-light-subtle mb-2">
                            CORE TECHNOLOGIES
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {capability.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded text-xs font-mono bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border text-ink-charcoal dark:text-ink-light hover:border-accent-blue transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <h4 className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle dark:text-ink-light-subtle mb-2">
                            SYSTEM ARCHITECTURES
                          </h4>
                          <ul className="space-y-1 font-mono text-xs text-ink-muted dark:text-ink-light-muted">
                            {capability.architectures.map((arch) => (
                              <li key={arch} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/70" />
                                <span>{arch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
