import React from 'react';

interface TickerRibbonProps {
  items?: string[];
  direction?: 'left' | 'right';
  className?: string;
}

const DEFAULT_ITEMS = [
  'SPEED DETECTION & WARNING SYSTEM',
  'ESP32-CAM & ARDUINO UNO',
  'PYTHON & OPENCV TRACKING',
  'SQLITE LOCAL EVENT LEDGER',
  'FULL-STACK WEB DEVELOPMENT',
  'TYPESCRIPT & REACT',
  'OFFLINE-FIRST SYSTEM RELIABILITY',
  'HARDWARE SENSORS & STROBE ALERTS',
  'CLEAN ARCHITECTURE & SIMPLE DESIGN'
];

export const TickerRibbon: React.FC<TickerRibbonProps> = ({
  items = DEFAULT_ITEMS,
  className = ''
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden border-y border-paper-border/80 dark:border-paper-dark-border/80 bg-paper-surface/50 dark:bg-paper-dark-surface/50 py-3.5 select-none ${className}`}
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* First copy */}
        <div className="flex items-center gap-8 shrink-0 pr-8 font-mono text-xs tracking-widest uppercase">
          {items.map((item, idx) => (
            <React.Fragment key={`first-${idx}`}>
              <span className="text-ink-charcoal dark:text-ink-light font-semibold hover:text-accent-blue transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/80 shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate copy for seamless loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8 font-mono text-xs tracking-widest uppercase" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`second-${idx}`}>
              <span className="text-ink-charcoal dark:text-ink-light font-semibold hover:text-accent-blue transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/80 shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
