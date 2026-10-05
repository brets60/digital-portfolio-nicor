import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ArrowRight, Eye, ShieldAlert, Cpu } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface WorkSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenCaseStudy }) => {
  const project = PROJECTS[0]; // Speed Detection and Warning System

  if (!project) return null;

  return (
    <section id="work" className="py-24 border-b border-paper-border dark:border-paper-dark-border relative overflow-hidden">
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
            FEATURED{' '}
            <span className="font-serif italic font-normal text-accent-blue dark:text-accent-blue-soft lowercase">
              project
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-light-muted mt-3 max-w-xl">
            A working hardware and software solution built to improve road safety in school zones and neighborhood streets.
          </p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group p-6 sm:p-10 lg:p-12 rounded-xl border border-paper-border dark:border-paper-dark-border bg-paper-surface/40 dark:bg-paper-dark-surface/40 hover:border-ink-charcoal/30 dark:hover:border-ink-light/30 transition-all duration-300 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Project Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-accent-blue/10 text-accent-blue text-xs font-mono font-bold uppercase">
                  {project.categoryLabel}
                </span>
                <span className="text-xs font-mono text-ink-subtle">
                  PROTOTYPE • {project.year}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-ink-charcoal dark:text-ink-light leading-[1.08] group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-light-muted leading-relaxed font-normal">
                {project.shortDescription}
              </p>

              {/* Real World Problem Highlights */}
              <div className="p-4 rounded-lg bg-paper-card/70 dark:bg-paper-dark-card/70 border border-paper-border dark:border-paper-dark-border space-y-2 text-xs font-sans">
                <div className="font-mono text-[11px] font-bold text-ink-charcoal dark:text-ink-light uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                  Why I Built This
                </div>
                <p className="text-ink-muted dark:text-ink-light-muted leading-relaxed">
                  Most community streets lack affordable warning systems for pedestrians. Commercial radar signs are very costly. This project provides an accessible alternative using low-cost hardware and computer vision.
                </p>
              </div>

              {/* Hardware & Tools */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider block mb-2 font-bold">
                  TECH & HARDWARE USED:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded font-mono text-xs bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border text-ink-charcoal dark:text-ink-light font-medium hover:border-accent-blue transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    playTactileClick();
                    onOpenCaseStudy(project);
                  }}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-ink-charcoal dark:bg-ink-light text-paper-light dark:text-paper-dark font-mono text-xs uppercase tracking-wider hover:bg-accent-blue dark:hover:bg-accent-blue transition-colors font-bold shadow-sm"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    playTactileClick();
                    onOpenCaseStudy(project);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded border border-paper-border dark:border-paper-dark-border text-xs font-mono uppercase text-ink-muted hover:text-accent-blue hover:border-accent-blue transition-colors font-medium bg-paper-light dark:bg-paper-dark"
                >
                  <Eye className="w-3.5 h-3.5 text-accent-blue" />
                  <span>TEST INTERACTIVE RADAR</span>
                </motion.button>
              </div>
            </div>

            {/* Right: Radar Preview Screen */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                playTactileClick();
                onOpenCaseStudy(project);
              }}
              className="lg:col-span-6 cursor-pointer rounded-lg border border-paper-border dark:border-paper-dark-border overflow-hidden bg-paper-card dark:bg-paper-dark-card p-6 sm:p-8 hover:shadow-editorial-hover transition-all duration-300 relative group/visual"
            >
              <div className="aspect-[4/3] rounded bg-zinc-950 p-6 flex flex-col justify-between text-zinc-300 font-mono text-xs relative overflow-hidden border border-zinc-800 shadow-inner">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ESP32-CAM FEED • 30 FPS
                  </span>
                  <span className="flex items-center gap-1 text-sky-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                    OPENCV RUNNING
                  </span>
                </div>

                {/* Radar Target Overlay with animated rings */}
                <div className="relative my-auto flex flex-col items-center justify-center py-6">
                  {/* Outer spinning radar circle */}
                  <div
                    className="w-36 h-36 rounded-full border border-dashed border-sky-500/40 flex items-center justify-center animate-spin"
                    style={{ animationDuration: '18s' }}
                  >
                    <div className="w-28 h-28 rounded-full border border-sky-500/30" />
                  </div>

                  {/* Pulsing radar target ping */}
                  <div className="absolute w-20 h-20 rounded-full border border-sky-400/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

                  {/* Central Speed Readout */}
                  <div className="absolute flex flex-col items-center text-center">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">CALCULATED SPEED</span>
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-sky-400 my-0.5 tracking-tight">
                      42.8 km/h
                    </span>
                    <span className="text-[10px] text-red-400 tracking-wider font-bold animate-pulse">
                      ▲ WARNING STROBE ACTIVE
                    </span>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-800 text-[10px] text-zinc-400">
                  <div>SPEED LIMIT: 30 km/h</div>
                  <div>RESPONSE: &lt;100ms</div>
                  <div className="text-right text-emerald-400 font-bold">SQLITE LOGGED</div>
                </div>

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-accent-blue/15 backdrop-blur-[2px] opacity-0 group-hover/visual:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.span
                    initial={{ y: 5 }}
                    whileHover={{ y: 0 }}
                    className="px-5 py-2.5 rounded bg-ink-charcoal text-white text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-2xl font-bold border border-white/10"
                  >
                    <span>LAUNCH INTERACTIVE SIMULATOR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-ink-subtle">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-accent-blue" />
                  Arduino + ESP32 Hardware Integration
                </span>
                <span className="text-accent-blue font-semibold hover:underline">Click to test live →</span>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
