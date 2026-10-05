import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    // Detect touch-only devices to prevent duplicate/sticky cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]');
        setIsHovered(isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-300 hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Outer ring */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-charcoal/40 dark:border-ink-light/40 transition-all duration-200 ease-out ${
          isHovered
            ? 'w-10 h-10 bg-accent-blue/10 border-accent-blue scale-110'
            : 'w-6 h-6 bg-transparent'
        }`}
      />
      {/* Center pinpoint */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ${
          isHovered ? 'w-1.5 h-1.5 bg-accent-blue' : 'w-1 h-1 bg-ink-charcoal dark:bg-ink-light'
        }`}
      />
    </div>
  );
};
