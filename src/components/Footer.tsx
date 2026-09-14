import React from 'react';
import { Github, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { data } = usePortfolio();
  const personal = data.personal;

  return (
    <footer className="relative z-10 border-t border-gray-800/80 bg-gray-950/90 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-lg font-black text-white tracking-tight">
            {personal.name}
          </div>
          <p className="text-xs text-gray-500 font-mono">
            {personal.tagline} • Built with React 19 & Tailwind
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {personal.githubUrl && (
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 text-gray-400 hover:text-white transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {personal.linkedinUrl && (
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {personal.instagramUrl && (
            <a
              href={personal.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-pink-500 text-gray-400 hover:text-white transition"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}

          <button
            onClick={() => onNavigate('hero')}
            className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white transition"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
