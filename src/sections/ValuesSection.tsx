import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_VALUES } from '../data/technologies';

export const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="py-24 border-b border-paper-border dark:border-paper-dark-border relative overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="pb-8 border-b border-paper-border dark:border-paper-dark-border mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tightest uppercase text-ink-charcoal dark:text-ink-light leading-none max-w-4xl">
            BUILT AROUND{' '}
            <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
              three
            </span>{' '}
            PRINCIPLES
          </h2>
          <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted mt-3 max-w-lg">
            Simple principles that guide how I approach my work and solve problems.
          </p>
        </motion.div>

        {/* Three Principles Rows */}
        <div className="divide-y divide-paper-border dark:divide-paper-dark-border border-y border-paper-border dark:border-paper-dark-border">
          {PERSONAL_VALUES.map((val, idx) => (
            <motion.div
              key={val.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 px-2 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline group hover:bg-paper-surface/40 dark:hover:bg-paper-dark-surface/40 transition-colors"
            >
              {/* Number and Title */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-base font-bold text-accent-blue group-hover:scale-110 transition-transform origin-left">
                  {val.number} —
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-ink-charcoal dark:text-ink-light group-hover:text-accent-blue transition-colors">
                  {val.title}
                </h3>
              </div>

              {/* Bold Statement */}
              <div className="lg:col-span-4">
                <p className="font-display font-bold text-lg sm:text-xl text-ink-primary dark:text-ink-light leading-snug">
                  "{val.statement}"
                </p>
              </div>

              {/* In-depth Description */}
              <div className="lg:col-span-4">
                <p className="font-sans text-sm sm:text-base text-ink-muted dark:text-ink-light-muted leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
