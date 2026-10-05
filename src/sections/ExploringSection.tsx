import React from 'react';
import { motion } from 'framer-motion';
import { CURRENT_EXPLORING } from '../data/technologies';

export const ExploringSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-paper-border dark:border-paper-dark-border bg-paper-surface/30 dark:bg-paper-dark-surface/30 relative overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="pb-8 border-b border-paper-border dark:border-paper-dark-border mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tightest uppercase text-ink-charcoal dark:text-ink-light leading-none">
            CURRENTLY{' '}
            <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
              exploring
            </span>
          </h2>
          <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted mt-3 max-w-xl">
            Topics and technologies I'm currently studying, testing, and building prototypes with.
          </p>
        </motion.div>

        {/* Three Exploring Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CURRENT_EXPLORING.map((area, idx) => (
            <motion.div
              key={area.tag}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(29, 78, 216, 0.4)' }}
              className="p-8 rounded-xl border border-paper-border dark:border-paper-dark-border bg-paper-light dark:bg-paper-dark flex flex-col justify-between shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-accent-blue/10 text-accent-blue">
                    {area.tag}
                  </span>
                  <span className="font-mono text-xs text-ink-subtle">
                    0{idx + 1} //
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-ink-charcoal dark:text-ink-light mb-3 uppercase tracking-tight">
                  {area.title}
                </h3>
                <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted leading-relaxed mb-6 font-normal">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-paper-border/60 dark:border-paper-dark-border/60 font-mono text-xs">
                <span className="text-[10px] text-ink-subtle uppercase block mb-1">
                  ACTIVE STUDY / PROTOTYPE:
                </span>
                <span className="text-ink-charcoal dark:text-ink-light text-[11px] font-sans">
                  {area.currentStudy}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
