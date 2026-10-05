import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';
import { toggleAudio, isAudioEnabled, playTactileClick } from '../utils/sound';

interface NavigationProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'capabilities', label: 'CAPABILITIES' },
  { id: 'process', label: 'PROCESS' },
  { id: 'values', label: 'VALUES' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [soundActive, setSoundActive] = useState<boolean>(isAudioEnabled());

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const enabled = toggleAudio();
    setSoundActive(enabled);
    if (enabled) {
      playTactileClick(1000, 0.04, 0.05);
    }
  };

  const scrollToSection = (id: string) => {
    playTactileClick(750, 0.02, 0.03);
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-paper-light/90 dark:bg-paper-dark/90 backdrop-blur-md border-b border-paper-border/80 dark:border-paper-dark-border/80 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Left: Monogram / Name */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            playTactileClick();
          }}
          className="group flex items-center gap-3"
        >
          <span className="w-8 h-8 rounded border border-ink-charcoal/20 dark:border-ink-light/20 flex items-center justify-center font-serif text-lg italic bg-paper-surface dark:bg-paper-dark-surface group-hover:border-accent-blue transition-colors">
            {PROFILE.monogram.substring(0, 2)}
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs tracking-wider uppercase text-ink-charcoal dark:text-ink-light group-hover:text-accent-blue transition-colors">
              {PROFILE.name}
            </span>
            <span className="text-[10px] font-mono text-ink-subtle dark:text-ink-light-subtle hidden sm:inline-block">
              BUKIDNON, PH • 2026
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-wider">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative py-1 transition-colors duration-200 uppercase ${
                  isActive
                    ? 'text-accent-blue font-medium'
                    : 'text-ink-muted dark:text-ink-light-muted hover:text-ink-charcoal dark:hover:text-ink-light'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent-blue rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-3">
          {/* Audio Feedback Toggle */}
          <button
            onClick={handleSoundToggle}
            aria-label={soundActive ? "Mute interface feedback" : "Enable tactile sound feedback"}
            title={soundActive ? "Haptic sounds enabled" : "Enable tactile sounds"}
            className="w-8 h-8 rounded-full border border-paper-border dark:border-paper-dark-border flex items-center justify-center text-ink-muted dark:text-ink-light-muted hover:text-ink-charcoal dark:hover:text-ink-light transition-colors"
          >
            {soundActive ? (
              <Volume2 className="w-3.5 h-3.5 text-accent-blue" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
          </button>

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Let's Talk CTA (Desktop) */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono uppercase rounded border border-ink-charcoal dark:border-ink-light text-ink-charcoal dark:text-ink-light hover:bg-ink-charcoal hover:text-paper-light dark:hover:bg-ink-light dark:hover:text-paper-dark transition-all duration-200"
          >
            <span>INQUIRE</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playTactileClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle mobile menu"
            className="lg:hidden w-9 h-9 rounded border border-paper-border dark:border-paper-dark-border flex items-center justify-center text-ink-charcoal dark:text-ink-light bg-paper-surface dark:bg-paper-dark-surface"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-paper-light/98 dark:bg-paper-dark/98 backdrop-blur-xl border-b border-paper-border dark:border-paper-dark-border shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col gap-4 font-mono text-sm tracking-wider">
            <div className="text-[10px] uppercase text-ink-subtle dark:text-ink-light-subtle pb-2 border-b border-paper-border dark:border-paper-dark-border">
              NAVIGATION INDEX
            </div>
            {NAV_LINKS.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center justify-between py-2 text-left text-ink-primary dark:text-ink-light hover:text-accent-blue transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] text-ink-subtle">0{idx + 1}</span>
                  <span className="font-display font-medium text-base">{link.label}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-paper-border dark:border-paper-dark-border flex items-center justify-between text-xs text-ink-subtle">
              <span>{PROFILE.coordinates}</span>
              <span className="text-accent-blue font-medium">{PROFILE.status}</span>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-blue origin-left pointer-events-none"
      />
    </header>
  );
};
