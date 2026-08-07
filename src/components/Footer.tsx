import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart, Code2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-gray-950/90 text-white py-12">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": PERSONAL_DETAILS.name,
            "jobTitle": "Full Stack Web Developer & Computer Science Engineering Student",
            "almaMater": PERSONAL_DETAILS.institute,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressCountry": "India"
            },
            "email": PERSONAL_DETAILS.email,
            "sameAs": [
              PERSONAL_DETAILS.githubUrl,
              PERSONAL_DETAILS.linkedinUrl,
              PERSONAL_DETAILS.instagramUrl
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span>Nitin Kumar Mandal</span>
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Computer Science Engineering Student @ SIT Pune | Janakpur, Nepal
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_DETAILS.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 text-gray-400 hover:text-white transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DETAILS.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-pink-500 text-gray-400 hover:text-white transition"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 text-gray-400 hover:text-white transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 transition"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono text-center sm:text-left">
          <div>
            © {currentYear} Nitin Kumar Mandal. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline animate-pulse" />
            <span>in Janakpur, Nepal & Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
