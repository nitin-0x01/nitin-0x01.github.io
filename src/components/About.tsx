import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Terminal, 
  Clock, 
  FileText,
  Heart,
  Compass
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AboutProps {
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { data } = usePortfolio();
  const personal = data.personal;

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">{personal.name}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            From the historic city of {personal.hometown} to the technology hub of {personal.institute}.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Bio & Key Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gray-950/70 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl space-y-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-xl font-black text-white">{personal.roles?.[1] || personal.tagline}</h3>
                <p className="text-xs text-purple-400 font-mono mt-0.5">{personal.institute}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-800/60 text-xs font-mono">
                Batch 2025 - 2029
              </span>
            </div>

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>{personal.bio}</p>
              <p>
                My engineering philosophy is rooted in building clean, scalable software with memorable visual polish. Whether it&apos;s architecting full-stack cloud workflows or solving algorithmic challenges, I thrive at the intersection of high logic and intuitive UI design.
              </p>
            </div>

            {/* Highlight Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300">
                <GraduationCap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>CS Engineering @ SIT Pune</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{personal.hometown}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300">
                <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>Full-Stack & Cloud Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300">
                <Sparkles className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>{personal.statusMessage}</span>
              </div>
            </div>

            {onOpenResume && (
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition"
                >
                  <FileText className="w-4 h-4" /> Download Official Resume
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: Interactive Location & Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Live Location Card */}
            <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" /> RESIDENCE & STUDY
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-[10px] text-purple-300 font-mono">
                  Online & Active
                </span>
              </div>
              <p className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{personal.currentLocation}</span>
              </p>
            </div>

            {/* Career Vision Card */}
            <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl space-y-3">
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-mono uppercase tracking-wider font-bold">
                <Compass className="w-4 h-4" /> Career Vision
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                To build impactful web ecosystems and software products that empower developers, optimize financial tools, and solve real-world problems globally.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
