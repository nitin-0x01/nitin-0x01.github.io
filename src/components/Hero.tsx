import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  FileText,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowDown,
  Sparkles,
  Award,
  Terminal,
  MapPin,
  ExternalLink,
  Zap
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { ProfileAvatar } from './ui/ProfileAvatar';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenResume,
  onOpenTerminal
}) => {
  // Role typewriter rotator
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_DETAILS.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_DETAILS.roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glowing aurora blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-semibold text-purple-200 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span>{PERSONAL_DETAILS.statusMessage}</span>
          </motion.div>

          {/* Huge Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="text-gray-400 font-mono text-sm sm:text-base">
              Hello World, I&apos;m
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              {PERSONAL_DETAILS.name}
            </h1>

            {/* Typewriter Role */}
            <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">
                {displayText}
              </span>
              <span className="w-1 h-8 sm:h-10 bg-cyan-400 ml-1 animate-pulse" />
            </div>
          </motion.div>

          {/* Tagline & Brief Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            &quot;{PERSONAL_DETAILS.tagline}&quot; — CS Engineering student at{' '}
            <span className="text-purple-300 font-semibold">{PERSONAL_DETAILS.institute}</span>, originating from{' '}
            <span className="text-cyan-300 font-semibold">{PERSONAL_DETAILS.hometown}</span>. Crafting futuristic full-stack web applications, smooth motion systems, and algorithmic software.
          </motion.p>

          {/* Location & University Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-gray-400"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-800">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Pune, India & Janakpur, Nepal</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-800">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>B.Tech CSE (2022 - 2026)</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-105 transition duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 border border-purple-500/30 text-white font-bold text-sm hover:border-purple-500 transition hover:scale-105 duration-200"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>View Resume PDF</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="p-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 border border-green-500/40 text-green-400 transition hover:scale-105"
              title="Open CLI Terminal Mode"
            >
              <Terminal className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center lg:justify-start gap-3 pt-2"
          >
            <a
              href={PERSONAL_DETAILS.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-purple-500 text-gray-300 hover:text-white transition group hover:-translate-y-1"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:text-purple-400" />
            </a>
            <a
              href={PERSONAL_DETAILS.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-blue-500 text-gray-300 hover:text-white transition group hover:-translate-y-1"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
            </a>
            <a
              href={PERSONAL_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-pink-500 text-gray-300 hover:text-white transition group hover:-translate-y-1"
              title="Instagram Profile"
            >
              <Instagram className="w-5 h-5 group-hover:text-pink-400" />
            </a>
            <a
              href={PERSONAL_DETAILS.leetcodeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-gray-900/80 border border-gray-800 hover:border-yellow-500 text-xs font-mono text-gray-300 hover:text-yellow-400 transition hover:-translate-y-1"
              title="LeetCode Profile"
            >
              LeetCode
            </a>
          </motion.div>
        </div>

        {/* Right Column Interactive Avatar & Orbiting Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <ProfileAvatar />
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-[10px] font-mono tracking-widest uppercase text-purple-400">Scroll to Explore</span>
        <button
          onClick={() => onNavigate('about')}
          className="p-2 rounded-full border border-purple-500/30 text-purple-400 hover:border-purple-500 hover:text-white transition animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
