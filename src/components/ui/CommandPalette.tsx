import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Code2,
  User,
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  BookOpen,
  Mail,
  Terminal,
  FileText,
  Moon,
  Sun,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_DETAILS, PROJECTS_DATA } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  toggleTheme: () => void;
  themeMode: 'dark' | 'light';
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenTerminal,
  onOpenResume,
  toggleTheme,
  themeMode
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
          // open command palette handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const commandItems = [
    { id: 'about', label: 'Go to About Me', icon: User, category: 'Navigation', action: () => onNavigate('about') },
    { id: 'education', label: 'Go to Education Timeline', icon: GraduationCap, category: 'Navigation', action: () => onNavigate('education') },
    { id: 'skills', label: 'Go to Skills & Tech Stack', icon: Code2, category: 'Navigation', action: () => onNavigate('skills') },
    { id: 'projects', label: 'Go to Projects Showcase', icon: Briefcase, category: 'Navigation', action: () => onNavigate('projects') },
    { id: 'experience', label: 'Go to Experience & Journey', icon: Briefcase, category: 'Navigation', action: () => onNavigate('experience') },
    { id: 'achievements', label: 'Go to Achievements & Hackathons', icon: Trophy, category: 'Navigation', action: () => onNavigate('achievements') },
    { id: 'certificates', label: 'Go to Certificates', icon: Award, category: 'Navigation', action: () => onNavigate('certificates') },
    { id: 'blogs', label: 'Go to Articles & Insights', icon: BookOpen, category: 'Navigation', action: () => onNavigate('blogs') },
    { id: 'contact', label: 'Go to Contact Form', icon: Mail, category: 'Navigation', action: () => onNavigate('contact') },

    // Actions
    { id: 'resume', label: 'View / Download Resume PDF', icon: FileText, category: 'Actions', action: () => onOpenResume() },
    { id: 'terminal', label: 'Launch Interactive CLI Terminal', icon: Terminal, category: 'Actions', action: () => onOpenTerminal() },
    { id: 'theme', label: `Switch to ${themeMode === 'dark' ? 'Light' : 'Dark'} Mode`, icon: themeMode === 'dark' ? Sun : Moon, category: 'Actions', action: () => toggleTheme() },
    { id: 'github', label: 'Open GitHub Profile', icon: ExternalLink, category: 'Links', action: () => window.open(PERSONAL_DETAILS.githubUrl, '_blank') },
    { id: 'linkedin', label: 'Open LinkedIn Profile', icon: ExternalLink, category: 'Links', action: () => window.open(PERSONAL_DETAILS.linkedinUrl, '_blank') }
  ];

  // Also include project shortcuts in search
  const projectItems = PROJECTS_DATA.map(p => ({
    id: `project-${p.id}`,
    label: `Project: ${p.title}`,
    icon: Code2,
    category: 'Projects',
    action: () => {
      onNavigate('projects');
    }
  }));

  const allItems = [...commandItems, ...projectItems];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-gray-950/90 border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.3)] text-white overflow-hidden z-10 backdrop-blur-xl"
        >
          {/* Header Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-gray-800 gap-3">
            <Search className="w-5 h-5 text-purple-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search sections & projects... (ESC to exit)"
              className="w-full bg-transparent text-white text-base placeholder-gray-500 focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-gray-900">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No commands matching &quot;{query}&quot;
              </div>
            ) : (
              filteredItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-purple-900/30 hover:border hover:border-purple-500/30 text-left transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-900 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-200 group-hover:text-white">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-purple-300">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 bg-gray-900/60 border-t border-gray-800/60 flex justify-between items-center text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300 font-mono">⌘K</span>
              <span>or</span>
              <span className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-300 font-mono">Ctrl+K</span>
              <span>to open anywhere</span>
            </div>
            <div>
              <span>Nitin Kumar Mandal Portfolio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
