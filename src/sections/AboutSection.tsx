import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';
import { Terminal, Cpu, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-paper-border dark:border-paper-dark-border relative overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between pb-6 border-b border-paper-border dark:border-paper-dark-border mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-accent-blue font-semibold">
            {PROFILE.about.kicker}
          </span>
        </motion.div>

        {/* Asymmetric Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Lead & Editorial Studio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tightest uppercase text-ink-charcoal dark:text-ink-light leading-none mb-6">
                WHO <br />
                <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
                  i
                </span>{' '}
                AM
              </h2>
              <p className="font-sans text-lg sm:text-xl text-ink-primary dark:text-ink-light font-medium leading-relaxed mb-6">
                {PROFILE.about.lead}
              </p>
            </div>

            {/* Editorial Identity & Studio Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface p-6 shadow-editorial group/card"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-paper-border/60 dark:border-paper-dark-border/60 text-xs font-mono">
                <span className="text-ink-subtle uppercase">BUKIDNON, PHILIPPINES</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Work
                </span>
              </div>

              {/* Developer Monogram & Ethos */}
              <div className="my-6 space-y-4">
                <div className="w-16 h-16 rounded-xl border border-accent-blue/30 bg-accent-blue/5 dark:bg-accent-blue/10 flex items-center justify-center font-serif text-3xl italic text-accent-blue font-bold shadow-sm">
                  {PROFILE.monogram}
                </div>

                <div>
                  <div className="font-display font-bold text-xl uppercase tracking-tight text-ink-charcoal dark:text-ink-light">
                    {PROFILE.name}
                  </div>
                  <div className="font-mono text-xs text-ink-muted dark:text-ink-light-muted mt-1">
                    {PROFILE.role}
                  </div>
                </div>

                <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted leading-relaxed italic border-l-2 border-accent-blue pl-3 py-1">
                  "I focus on building straightforward, dependable systems—bridging code, hardware, and everyday utility."
                </p>

                {/* Micro metrics */}
                <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-paper-border/50 dark:border-paper-dark-border/50 text-[10px] font-mono">
                  <div className="flex flex-col items-center group-hover/card:text-accent-blue transition-colors">
                    <Terminal className="w-3.5 h-3.5 mb-1 text-accent-blue" />
                    <span className="text-ink-subtle">FULL STACK</span>
                  </div>
                  <div className="flex flex-col items-center group-hover/card:text-accent-blue transition-colors">
                    <Cpu className="w-3.5 h-3.5 mb-1 text-accent-blue" />
                    <span className="text-ink-subtle">IOT & SENSORS</span>
                  </div>
                  <div className="flex flex-col items-center group-hover/card:text-accent-blue transition-colors">
                    <Layers className="w-3.5 h-3.5 mb-1 text-accent-blue" />
                    <span className="text-ink-subtle">SYSTEMS</span>
                  </div>
                </div>
              </div>

              {/* Location Tag */}
              <div className="flex items-center justify-between text-[11px] font-mono text-ink-subtle dark:text-ink-light-subtle pt-2 border-t border-paper-border/50 dark:border-paper-dark-border/50">
                <span>BASED IN BUKIDNON, PH</span>
                <span className="text-accent-blue">AVAILABLE GLOBALLY</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Three Story Chapters */}
          <div className="lg:col-span-7 space-y-8">
            {PROFILE.about.chapters.map((chapter, idx) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6, borderColor: 'rgba(29, 78, 216, 0.4)' }}
                className="group p-6 sm:p-8 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface/40 dark:bg-paper-dark-surface/40 hover:bg-paper-surface dark:hover:bg-paper-dark-surface transition-all duration-300"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-sm sm:text-base font-semibold text-accent-blue group-hover:scale-110 transition-transform origin-left inline-block">
                    {chapter.number} —
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink-charcoal dark:text-ink-light tracking-tight group-hover:text-accent-blue transition-colors">
                    {chapter.title}
                  </h3>
                </div>
                <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-light-muted leading-relaxed font-normal">
                  {chapter.text}
                </p>
              </motion.div>
            ))}

            {/* Engineering Facts / Editorial Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-paper-border dark:border-paper-dark-border"
            >
              {PROFILE.about.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="flex flex-col font-mono text-xs p-2 rounded hover:bg-paper-surface/50 dark:hover:bg-paper-dark-surface/50 transition-colors"
                >
                  <span className="text-[10px] text-ink-subtle dark:text-ink-light-subtle uppercase">
                    {stat.label}
                  </span>
                  <span className="font-medium text-ink-charcoal dark:text-ink-light mt-1">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
