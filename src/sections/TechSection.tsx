import React from 'react';
import { motion } from 'framer-motion';
import { TECH_CATEGORIES } from '../data/technologies';

export const TechSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-paper-border dark:border-paper-dark-border relative overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="pb-8 border-b border-paper-border dark:border-paper-dark-border mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tightest uppercase text-ink-charcoal dark:text-ink-light leading-tight max-w-4xl">
            TOOLS I USE TO TURN <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
              ideas
            </span>{' '}
            INTO PRODUCTS.
          </h2>
          <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted mt-3 max-w-xl">
            The programming languages, frameworks, hardware, and tools I work with.
          </p>
        </motion.div>

        {/* Categorized Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, borderColor: 'rgba(29, 78, 216, 0.4)' }}
              className="p-6 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface/40 dark:bg-paper-dark-surface/40 flex flex-col justify-between transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-paper-border/60 dark:border-paper-dark-border/60 mb-4">
                  <h3 className="font-display font-bold text-lg uppercase text-ink-charcoal dark:text-ink-light tracking-wide">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-accent-blue font-semibold">
                    {cat.items.length} TOOLS
                  </span>
                </div>
                <p className="font-sans text-xs text-ink-muted dark:text-ink-light-muted mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Tech List */}
                <div className="space-y-3 font-mono text-xs">
                  {cat.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="p-2.5 rounded bg-paper-card/60 dark:bg-paper-dark-card/60 border border-paper-border/40 dark:border-paper-dark-border/40 flex flex-col gap-0.5 hover:border-accent-blue/40 transition-colors cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-ink-charcoal dark:text-ink-light">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-ink-subtle px-1.5 py-0.5 rounded bg-paper-surface dark:bg-paper-dark-surface">
                          {item.level}
                        </span>
                      </div>
                      {item.note && (
                        <span className="text-[10px] text-ink-muted dark:text-ink-light-muted font-sans">
                          {item.note}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
