import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { playTactileClick } from '../utils/sound';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    playTactileClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    playTactileClick();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-paper-surface/60 dark:bg-paper-dark-surface/60 text-ink-primary dark:text-ink-light font-mono text-xs">
      <div className="editorial-container">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-paper-border dark:border-paper-dark-border items-start">
          {/* Brand & Location */}
          <div className="md:col-span-6 space-y-2">
            <div className="font-display font-bold text-lg uppercase tracking-tight text-ink-charcoal dark:text-ink-light">
              {PROFILE.name}
            </div>
            <div className="text-ink-muted dark:text-ink-light-muted">
              {PROFILE.role.toUpperCase()}
            </div>
            <div className="text-ink-subtle dark:text-ink-light-subtle text-xs font-sans">
              Bukidnon, Philippines
            </div>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] text-ink-subtle uppercase block mb-1">
              INDEX
            </span>
            <div className="flex flex-col space-y-1.5">
              <button
                onClick={() => scrollTo('work')}
                className="text-left text-ink-muted hover:text-accent-blue transition-colors uppercase"
              >
                WORK
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="text-left text-ink-muted hover:text-accent-blue transition-colors uppercase"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollTo('capabilities')}
                className="text-left text-ink-muted hover:text-accent-blue transition-colors uppercase"
              >
                CAPABILITIES
              </button>
              <button
                onClick={() => scrollTo('process')}
                className="text-left text-ink-muted hover:text-accent-blue transition-colors uppercase"
              >
                PROCESS
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-left text-ink-muted hover:text-accent-blue transition-colors uppercase"
              >
                CONTACT
              </button>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] text-ink-subtle uppercase block mb-1">
              NETWORK
            </span>
            <div className="flex flex-col space-y-1.5">
              {PROFILE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-accent-blue transition-colors uppercase"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-[11px] text-ink-subtle hover:text-ink-charcoal dark:hover:text-ink-light transition-colors uppercase"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Manifesto Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-subtle gap-4">
          <div>
            © {currentYear} {PROFILE.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="tracking-wider uppercase text-[10px]">
            {PROFILE.concept.formula}
          </div>
        </div>
      </div>
    </footer>
  );
};
