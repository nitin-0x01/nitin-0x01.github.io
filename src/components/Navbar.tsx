import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Menu,
  X,
  Search,
  Terminal,
  FileText,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Languages,
  Sparkles
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  themeMode: 'dark' | 'light';
  toggleTheme: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  currentLang: string;
  setLanguage: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenResume,
  themeMode,
  toggleTheme,
  soundEnabled,
  toggleSound,
  currentLang,
  setLanguage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'github', label: 'GitHub' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-105 transition">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-cyan-300 font-black text-lg">
              NM
            </div>
          </div>
          <div>
            <div className="font-extrabold text-sm sm:text-base tracking-wide text-white group-hover:text-purple-300 transition flex items-center gap-1.5">
              <span>Nitin Mandal</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="text-[10px] text-purple-400/80 font-mono tracking-tight hidden sm:block">
              CS Engineering @ SIT Pune
            </div>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-950/60 p-1.5 rounded-full border border-purple-500/20 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)] -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Action Tools */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            title="Command Palette (Cmd+K)"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-purple-500/50 text-xs font-mono transition"
          >
            <Search className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden md:inline">Search...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-gray-800 border border-gray-700 text-gray-400">
              ⌘K
            </kbd>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            title="Interactive CLI Terminal"
            className="p-2 rounded-xl bg-gray-900/80 border border-gray-800 text-green-400 hover:border-green-500/50 hover:bg-green-950/30 transition"
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${themeMode === 'dark' ? 'Light' : 'Dark'} Mode`}
            className="p-2 rounded-xl bg-gray-900/80 border border-gray-800 text-yellow-400 hover:border-yellow-500/50 transition"
          >
            {themeMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-purple-400" />}
          </button>

          {/* Resume PDF Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-purple-400"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-950/95 border-b border-purple-500/30 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-gray-800">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-2.5 rounded-xl text-left text-xs font-medium transition ${
                      activeSection === link.id
                        ? 'bg-purple-600 text-white font-bold'
                        : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <button
                  onClick={() => {
                    onOpenTerminal();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900 border border-green-500/40 text-green-400 text-xs font-mono"
                >
                  <Terminal className="w-4 h-4" /> CLI Terminal
                </button>

                <button
                  onClick={() => {
                    onOpenResume();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                >
                  <FileText className="w-4 h-4" /> View Resume PDF
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
