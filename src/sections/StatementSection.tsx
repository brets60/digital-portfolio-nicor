import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { Compass, Cpu, ShieldCheck } from 'lucide-react';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-paper-surface/50 dark:bg-paper-dark-surface/50 border-b border-paper-border dark:border-paper-dark-border relative overflow-hidden">
      <div className="editorial-container">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-6 h-[1px] bg-accent-blue" />
          <span className="font-mono text-xs uppercase tracking-wider text-accent-blue font-semibold">
            MY APPROACH
          </span>
        </motion.div>

        {/* Typographic Statement */}
        <div className="max-w-5xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.05] uppercase text-ink-charcoal dark:text-ink-light"
          >
            I DON'T JUST WRITE CODE.{' '}
            <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase tracking-normal">
              i solve
            </span>{' '}
            REAL PROBLEMS.
          </motion.blockquote>
        </div>

        {/* Narrative & Three Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 pt-12 border-t border-paper-border/80 dark:border-paper-dark-border/80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <p className="font-sans text-lg sm:text-xl text-ink-primary dark:text-ink-light leading-relaxed font-normal">
              {PROFILE.statement.body}
            </p>
            <p className="font-sans text-base text-ink-muted dark:text-ink-light-muted leading-relaxed mt-4">
              I prefer practical, reliable systems over hype. Whether it's setting up local SQLite storage so a camera can work offline, or choosing the right microcontroller for a road safety project, the goal is always the same: keep it clean, durable, and simple to use.
            </p>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, borderColor: 'rgba(29, 78, 216, 0.5)' }}
              className="p-5 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-light dark:bg-paper-dark group shadow-sm transition-all"
            >
              <Compass className="w-5 h-5 text-accent-blue mb-3 group-hover:rotate-45 transition-transform duration-300" />
              <div className="font-bold text-ink-charcoal dark:text-ink-light uppercase mb-1">
                CLARITY
              </div>
              <p className="text-ink-muted dark:text-ink-light-muted font-sans text-xs leading-relaxed">
                Understand the root problem before jumping into code or hardware design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, borderColor: 'rgba(29, 78, 216, 0.5)' }}
              className="p-5 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-light dark:bg-paper-dark group shadow-sm transition-all"
            >
              <Cpu className="w-5 h-5 text-accent-blue mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-bold text-ink-charcoal dark:text-ink-light uppercase mb-1">
                RELIABILITY
              </div>
              <p className="text-ink-muted dark:text-ink-light-muted font-sans text-xs leading-relaxed">
                Build software and hardware that don't break when unexpected conditions happen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -6, borderColor: 'rgba(29, 78, 216, 0.5)' }}
              className="p-5 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-light dark:bg-paper-dark group shadow-sm transition-all"
            >
              <ShieldCheck className="w-5 h-5 text-accent-blue mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-bold text-ink-charcoal dark:text-ink-light uppercase mb-1">
                PRACTICALITY
              </div>
              <p className="text-ink-muted dark:text-ink-light-muted font-sans text-xs leading-relaxed">
                Focus on real utility for real people, not just theoretical complexity.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
