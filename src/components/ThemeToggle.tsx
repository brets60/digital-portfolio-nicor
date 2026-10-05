import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('editorial-theme');
      if (saved) return saved === 'dark';
      // Default to light editorial paper theme as strictly requested
      return false;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('editorial-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('editorial-theme', 'light');
    }
  }, [isDark]);

  const toggle = () => {
    playTactileClick(900, 0.03, 0.04);
    setIsDark(prev => !prev);
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to Paper Light theme" : "Switch to Nocturne Slate theme"}
      className="group relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full border border-paper-border dark:border-paper-dark-border bg-paper-surface/60 dark:bg-paper-dark-surface/60 backdrop-blur-sm text-ink-muted dark:text-ink-light-muted hover:text-ink-charcoal dark:hover:text-ink-light transition-all duration-200"
    >
      <span className="relative flex items-center justify-center w-3.5 h-3.5">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-accent-blue-soft transition-transform group-hover:-rotate-12" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:rotate-45" />
        )}
      </span>
      <span className="text-[10px] hidden sm:inline-block">
        {isDark ? 'NOCTURNE' : 'PAPER'}
      </span>
    </button>
  );
};
