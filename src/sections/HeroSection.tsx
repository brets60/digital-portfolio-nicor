import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, Terminal, Cpu, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { playTactileClick } from '../utils/sound';

export const HeroSection: React.FC = () => {
  const scrollToWork = () => {
    playTactileClick();
    const elem = document.getElementById('work');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] pt-24 md:pt-28 pb-12 flex flex-col justify-between border-b border-paper-border dark:border-paper-dark-border overflow-hidden"
    >
      {/* Subtle ambient blur background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

      <div className="editorial-container w-full flex-1 flex flex-col justify-between">
        {/* Main Hero Split Grid: Bold Text (Left) + Direct Portrait (Right) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Typographic Opening */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider uppercase bg-paper-surface dark:bg-paper-dark-surface border border-paper-border dark:border-paper-dark-border rounded-full text-accent-blue font-semibold shadow-sm">
                <Sparkles className="w-3 h-3 text-accent-blue" />
                FULL-STACK DEVELOPER & HARDWARE BUILDER
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tightest leading-[0.96] text-ink-charcoal dark:text-ink-light uppercase"
            >
              I BUILD DIGITAL <br />
              <span className="font-serif italic font-normal lowercase tracking-normal text-accent-blue dark:text-accent-blue-soft pr-2 inline-block">
                systems
              </span>
              & SMART <br />
              HARDWARE.
            </motion.h1>

            {/* Short Editorial Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg md:text-xl text-ink-muted dark:text-ink-light-muted leading-relaxed max-w-xl font-normal"
            >
              {PROFILE.concept.subheadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-ink-charcoal dark:bg-ink-light text-paper-light dark:text-paper-dark rounded font-mono text-xs uppercase tracking-wider hover:bg-accent-blue dark:hover:bg-accent-blue transition-colors duration-200 shadow-sm font-bold"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-paper-border dark:border-paper-dark-border bg-paper-surface/50 dark:bg-paper-dark-surface/50 rounded font-mono text-xs uppercase tracking-wider text-ink-primary dark:text-ink-light hover:border-accent-blue transition-colors shadow-sm font-medium"
              >
                <span>GET IN TOUCH</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Prominent Portrait Frame — Visible Immediately on Open */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm sm:max-w-md rounded-xl border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface p-5 sm:p-6 shadow-editorial group/photo-card relative overflow-hidden"
            >
              {/* Card Header Status */}
              <div className="flex items-center justify-between pb-3 border-b border-paper-border/60 dark:border-paper-dark-border/60 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-ink-subtle uppercase">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  Bukidnon, Philippines
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open for Work
                </span>
              </div>

              {/* Photo Viewport */}
              <div className="my-4 relative aspect-[4/5] rounded-lg overflow-hidden border border-paper-border/70 dark:border-paper-dark-border/70 shadow-md bg-paper-card group/pic">
                <img
                  src="/portrait.jpg"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover/pic:grayscale-0 group-hover/pic:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded bg-black/80 backdrop-blur-sm text-[11px] font-mono text-white tracking-widest uppercase font-bold shadow-md">
                  {PROFILE.name}
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="pt-2 text-center">
                <div className="font-display font-bold text-base sm:text-lg tracking-wider uppercase text-ink-charcoal dark:text-ink-light">
                  {PROFILE.name}
                </div>
                <div className="font-mono text-xs text-ink-muted dark:text-ink-light-muted mt-0.5">
                  {PROFILE.role}
                </div>

                {/* Micro Skills Badges */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-paper-border/50 dark:border-paper-dark-border/50 text-[10px] font-mono text-ink-subtle">
                  <div className="flex flex-col items-center group-hover/photo-card:text-accent-blue transition-colors">
                    <Terminal className="w-3.5 h-3.5 mb-1 text-accent-blue" />
                    <span>FULL STACK</span>
                  </div>
                  <div className="flex flex-col items-center group-hover/photo-card:text-accent-blue transition-colors">
                    <Cpu className="w-3.5 h-3.5 mb-1 text-accent-blue" />
                    <span>IOT & SENSORS</span>
                  </div>
                  <div className="flex flex-col items-center group-hover/photo-card:text-accent-blue transition-colors">
                    <Layers className="w-3.5 h-3.5 mb-1 text-accent-blue" />
                    <span>SYSTEMS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom: Pillars Grid & Scroll Explorer Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
          className="pt-6 border-t border-paper-border/70 dark:border-paper-dark-border/70"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 font-mono text-xs">
            {PROFILE.concept.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, borderColor: '#1D4ED8' }}
                transition={{ duration: 0.2 }}
                className="flex flex-col p-3 rounded bg-paper-surface/40 dark:bg-paper-dark-surface/40 border border-paper-border/50 dark:border-paper-dark-border/50 hover:bg-paper-surface dark:hover:bg-paper-dark-surface transition-colors cursor-default"
              >
                <span className="text-[10px] text-ink-subtle dark:text-ink-light-subtle">
                  0{idx + 1} //
                </span>
                <span className="font-medium tracking-wider text-ink-charcoal dark:text-ink-light mt-1">
                  {pillar}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 pt-3 text-[11px] font-mono text-ink-subtle dark:text-ink-light-subtle">
            <span className="tracking-widest uppercase">
              PORTFOLIO EDITION • {PROFILE.year}
            </span>
            <button
              onClick={scrollToWork}
              className="flex items-center gap-2 hover:text-accent-blue transition-colors uppercase tracking-widest group"
            >
              <span>SCROLL TO EXPLORE</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <ArrowDown className="w-3.5 h-3.5 text-accent-blue" />
              </motion.span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
