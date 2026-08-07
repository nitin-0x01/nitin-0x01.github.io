import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { StarfieldCanvas } from './components/3d/StarfieldCanvas';
import { CustomCursor } from './components/ui/CustomCursor';
import { CommandPalette } from './components/ui/CommandPalette';
import { TerminalModal } from './components/ui/TerminalModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { ProjectModal } from './components/ui/ProjectModal';
import { BlogModal } from './components/ui/BlogModal';
import { CertificateModal } from './components/ui/CertificateModal';
import { QuoteBuilderModal } from './components/ui/QuoteBuilderModal';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { GitHubSection } from './components/GitHubSection';
import { CodingProfiles } from './components/CodingProfiles';
import { Services } from './components/Services';
import { Goals } from './components/Goals';
import { Testimonials } from './components/Testimonials';
import { Blogs } from './components/Blogs';
import { Gallery } from './components/Gallery';
import { StatsDashboard } from './components/StatsDashboard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { Project, BlogPost, CertificateItem } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  // Modals state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isQuoteBuilderOpen, setIsQuoteBuilderOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [contactInitialMsg, setContactInitialMsg] = useState('');

  // Scroll spy active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 'about', 'education', 'skills', 'projects',
        'experience', 'achievements', 'certificates', 'github',
        'coding-profiles', 'services', 'goals', 'testimonials',
        'blogs', 'gallery', 'contact'
      ];

      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-purple-500 selection:text-white ${
      themeMode === 'dark' ? 'bg-[#030712] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Boot Preloader */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Custom Trailing Cursor */}
      <CustomCursor />

      {/* 3D WebGL Starfield Particle Canvas */}
      <StarfieldCanvas themeMode={themeMode} />

      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        themeMode={themeMode}
        toggleTheme={toggleTheme}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        currentLang={currentLang}
        setLanguage={setCurrentLang}
      />

      {/* Main Sections Stack */}
      <main className="relative z-10 space-y-8">
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <About onOpenResume={() => setIsResumeOpen(true)} />

        <Education />

        <Skills />

        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        <ExperienceTimeline />

        <Achievements />

        <Certificates onSelectCertificate={(c) => setSelectedCertificate(c)} />

        <GitHubSection />

        <CodingProfiles />

        <Services onOpenQuoteBuilder={() => setIsQuoteBuilderOpen(true)} />

        <Goals />

        <Testimonials />

        <Blogs onSelectBlog={(b) => setSelectedBlog(b)} />

        <Gallery />

        <StatsDashboard />

        <Contact initialMessage={contactInitialMsg} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals Orchestration */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        toggleTheme={toggleTheme}
        themeMode={themeMode}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={handleNavigate}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlogModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <QuoteBuilderModal
        isOpen={isQuoteBuilderOpen}
        onClose={() => setIsQuoteBuilderOpen(false)}
        onOpenContactWithDetails={(details) => {
          setContactInitialMsg(details);
          handleNavigate('contact');
        }}
      />
    </div>
  );
}
