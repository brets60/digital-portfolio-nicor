import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import type { Project } from '../types';
import { SpeedRadarSimulator } from './ProjectSimulators';
import { playTactileClick } from '../utils/sound';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (p: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'tech' | 'learnings'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-ink-charcoal/80 dark:bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl bg-paper-light dark:bg-paper-dark border border-paper-border dark:border-paper-dark-border rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-paper-border dark:border-paper-dark-border bg-paper-light/95 dark:bg-paper-dark/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-ink-charcoal dark:text-ink-light">
                {project.title}
              </h2>
              <span className="font-mono text-[11px] text-ink-subtle uppercase tracking-wider">
                {project.categoryLabel} • {project.year}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            aria-label="Close Case Study"
            className="w-9 h-9 rounded-full border border-paper-border dark:border-paper-dark-border flex items-center justify-center text-ink-charcoal dark:text-ink-light hover:bg-paper-surface dark:hover:bg-paper-dark-surface transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2.5 border-b border-paper-border dark:border-paper-dark-border bg-paper-surface/60 dark:bg-paper-dark-surface/60 overflow-x-auto font-mono text-xs">
          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('overview');
            }}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-ink-charcoal text-paper-light dark:bg-ink-light dark:text-paper-dark font-medium'
                : 'text-ink-muted hover:text-ink-charcoal'
            }`}
          >
            OVERVIEW & PROBLEM
          </button>
          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('simulator');
            }}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-accent-blue text-white font-medium shadow-sm'
                : 'text-accent-blue hover:bg-accent-blue/10'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
            LIVE INTERACTIVE BENCH
          </button>
          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('tech');
            }}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider whitespace-nowrap ${
              activeTab === 'tech'
                ? 'bg-ink-charcoal text-paper-light dark:bg-ink-light dark:text-paper-dark font-medium'
                : 'text-ink-muted hover:text-ink-charcoal'
            }`}
          >
            SYSTEM & TECH
          </button>
          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('learnings');
            }}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider whitespace-nowrap ${
              activeTab === 'learnings'
                ? 'bg-ink-charcoal text-paper-light dark:bg-ink-light dark:text-paper-dark font-medium'
                : 'text-ink-muted hover:text-ink-charcoal'
            }`}
          >
            RESULTS & LEARNINGS
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-10">
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-ink-charcoal dark:text-ink-light leading-snug">
                  "{project.tagline}"
                </p>
                <p className="font-sans text-base sm:text-lg text-ink-muted dark:text-ink-light-muted leading-relaxed mt-4 font-normal">
                  {caseStudy.overview}
                </p>
              </div>

              {/* The Problem */}
              <div className="p-6 rounded-lg border border-red-500/20 bg-red-500/5 dark:bg-red-500/5">
                <span className="font-mono text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-bold block mb-2">
                  THE PROBLEM TO SOLVE
                </span>
                <h3 className="font-display font-bold text-xl text-ink-charcoal dark:text-ink-light mb-4">
                  {caseStudy.problem.title}
                </h3>
                <ul className="space-y-2.5">
                  {caseStudy.problem.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-sans text-sm text-ink-muted dark:text-ink-light-muted">
                      <span className="text-red-500 font-mono text-xs mt-0.5 font-bold">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Approach & Real-World Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-blue font-bold block mb-2">
                    THE APPROACH
                  </span>
                  <h4 className="font-display font-bold text-lg text-ink-charcoal dark:text-ink-light mb-2">
                    {caseStudy.idea.title}
                  </h4>
                  <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted leading-relaxed">
                    {caseStudy.idea.description}
                  </p>
                </div>

                <div className="p-6 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-2">
                    THE SOLUTION
                  </span>
                  <h4 className="font-display font-bold text-lg text-ink-charcoal dark:text-ink-light mb-2">
                    {caseStudy.solution.title}
                  </h4>
                  <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted leading-relaxed mb-3">
                    {caseStudy.solution.description}
                  </p>
                  <ul className="space-y-1.5">
                    {caseStudy.solution.highlights.map((hl, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-mono text-ink-primary dark:text-ink-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How It Works */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle block mb-4 font-bold">
                  HOW IT WORKS IN 4 SIMPLE STEPS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudy.howItWorks.map((st) => (
                    <div
                      key={st.step}
                      className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-surface/50 dark:bg-paper-dark-surface/50"
                    >
                      <span className="font-mono text-xs font-bold text-accent-blue">
                        STEP {st.step}
                      </span>
                      <h5 className="font-display font-bold text-sm text-ink-charcoal dark:text-ink-light mt-1 mb-2">
                        {st.title}
                      </h5>
                      <p className="font-sans text-xs text-ink-muted dark:text-ink-light-muted leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE INTERACTIVE SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded bg-accent-blue/10 border border-accent-blue/20">
                <span className="font-mono text-xs uppercase font-bold text-accent-blue block">
                  INTERACTIVE HARDWARE SIMULATOR
                </span>
                <p className="font-sans text-xs text-ink-muted dark:text-ink-light-muted mt-0.5">
                  Test the speed detection logic, trigger simulated vehicle crossings, and see the warning strobes and SQLite logging fire in real-time.
                </p>
              </div>

              <SpeedRadarSimulator />
            </div>
          )}

          {/* TAB 3: SYSTEM & TECH */}
          {activeTab === 'tech' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Architecture Node Visualizer */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle block mb-4 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent-blue" />
                  SYSTEM COMPONENT BREAKDOWN
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {caseStudy.architecture.nodes.map((node) => (
                    <div
                      key={node.id}
                      className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface"
                    >
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-accent-blue/10 text-accent-blue font-bold">
                        {node.category}
                      </span>
                      <div className="font-display font-bold text-sm text-ink-charcoal dark:text-ink-light mt-2">
                        {node.label}
                      </div>
                      <div className="font-mono text-xs text-ink-subtle mt-1">
                        {node.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Pipeline */}
              <div className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-surface/40 dark:bg-paper-dark-surface/40">
                <span className="font-mono text-[10px] uppercase text-ink-subtle block mb-3 font-bold">
                  EXECUTION PIPELINE
                </span>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  {caseStudy.architecture.pipeline.map((p, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-2.5 py-1 rounded bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border text-ink-charcoal dark:text-ink-light">
                        {p}
                      </span>
                      {idx < caseStudy.architecture.pipeline.length - 1 && (
                        <ChevronRight className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Hardware Stack */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle block mb-4 font-bold">
                  HARDWARE & TOOLS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                  {caseStudy.technology.stack.map((cat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface"
                    >
                      <span className="font-mono text-xs font-bold text-ink-charcoal dark:text-ink-light block mb-2">
                        {cat.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-xs text-ink-subtle italic">
                  Rationale: {caseStudy.technology.rationale}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle block mb-4 font-bold">
                  KEY FEATURES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-surface/50"
                    >
                      <h5 className="font-display font-bold text-sm text-ink-charcoal dark:text-ink-light mb-1">
                        {feat.title}
                      </h5>
                      <p className="font-sans text-xs text-ink-muted dark:text-ink-light-muted">
                        {feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RESULTS & LEARNINGS */}
          {activeTab === 'learnings' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface">
                <span className="font-mono text-xs uppercase tracking-wider text-accent-blue font-bold block mb-2">
                  RESULTS & OUTCOMES
                </span>
                <p className="font-sans text-base text-ink-primary dark:text-ink-light leading-relaxed">
                  {caseStudy.result.outcome}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle block mb-3 font-bold">
                  WHAT I LEARNED BUILDING THIS
                </span>
                <div className="space-y-3">
                  {caseStudy.result.learnings.map((learning, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-card/40 dark:bg-paper-dark-card/40 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-bold text-accent-blue mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="font-sans text-sm text-ink-muted dark:text-ink-light-muted leading-relaxed">
                        {learning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-paper-border dark:border-paper-dark-border">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle block mb-3 font-bold">
                  PROJECT LINKS
                </span>
                <div className="flex flex-wrap gap-4">
                  {caseStudy.links.map((link, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface flex-1 min-w-[240px]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-ink-charcoal dark:text-ink-light flex items-center gap-1.5">
                          {link.type === 'github' ? (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                              <path d="M9 18c-4.51 2-5-2-7-2"/>
                            </svg>
                          ) : (
                            <ExternalLink className="w-4 h-4" />
                          )}
                          {link.label}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-ink-subtle block mt-1">
                        {link.statusNote || 'Project artifact'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-paper-border dark:border-paper-dark-border bg-paper-surface/80 dark:bg-paper-dark-surface/80 text-xs font-mono">
          <span className="text-ink-subtle">
            Speed Detection and Warning System • Mark Ephraim Nicor
          </span>

          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded bg-ink-charcoal dark:bg-ink-light text-paper-light dark:text-paper-dark hover:bg-accent-blue dark:hover:bg-accent-blue transition-colors uppercase font-bold"
          >
            <span>CLOSE CASE STUDY</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
