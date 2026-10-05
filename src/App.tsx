import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './sections/HeroSection';
import { TickerRibbon } from './components/TickerRibbon';
import { AboutSection } from './sections/AboutSection';
import { StatementSection } from './sections/StatementSection';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { WorkSection } from './sections/WorkSection';
import { ProcessSection } from './sections/ProcessSection';
import { TechSection } from './sections/TechSection';
import { ExploringSection } from './sections/ExploringSection';
import { ValuesSection } from './sections/ValuesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import type { Project } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const sections = ['top', 'about', 'capabilities', 'work', 'process', 'values', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper-light dark:bg-paper-dark text-ink-primary dark:text-ink-light selection:bg-accent-blue selection:text-white transition-colors duration-300">
      {/* Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Navigation Header */}
      <Navigation activeSection={activeSection} />

      {/* Main Narrative Flow */}
      <main>
        {/* 01: Opening Hero */}
        <HeroSection />

        {/* Editorial Infinite Ticker Ribbon */}
        <TickerRibbon />

        {/* 02: Magazine Profile ("WHO I AM") */}
        <AboutSection />

        {/* 03: Personal Statement ("I DON'T JUST WRITE CODE. I DESIGN SOLUTIONS.") */}
        <StatementSection />

        {/* 04: Capabilities Showcase ("WHAT I CAN BUILD") */}
        <CapabilitiesSection />

        {/* 05: Vertical Case Studies Showcase ("SELECTED WORK") */}
        <WorkSection onOpenCaseStudy={(p) => setSelectedProject(p)} />

        {/* 06: Engineering Pipeline ("HOW I WORK") */}
        <ProcessSection />

        {/* 07: Technology Inventory ("TOOLS I USE TO TURN IDEAS INTO PRODUCTS") */}
        <TechSection />

        {/* 08: Active Frontiers ("CURRENTLY EXPLORING") */}
        <ExploringSection />

        {/* 09: Core Philosophy ("BUILT AROUND THREE PRINCIPLES") */}
        <ValuesSection />

        {/* 10: Contact Experience ("LET'S BUILD SOMETHING USEFUL") */}
        <ContactSection />
      </main>

      {/* Editorial Minimal Footer */}
      <Footer />

      {/* Interactive Case Study Presentation Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}
    </div>
  );
};

export default App;
