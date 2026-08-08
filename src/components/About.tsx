import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  User,
  MapPin,
  Clock,
  GraduationCap,
  Sparkles,
  Download,
  Target,
  Heart,
  Globe,
  Code2,
  Coffee,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_DETAILS } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const educationDuration = EDUCATION_DATA[0]?.duration || '2025 - 2029';
  const [timeMode, setTimeMode] = useState<'IST' | 'NST'>('IST');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: timeMode === 'IST' ? 'Asia/Kolkata' : 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, [timeMode]);

  const hobbies = [
    'Competitive Coding',
    'Open Source Contributing',
    'Full Stack Web Dev',
    '3D WebGL Graphics',
    'UI Motion Design',
    'Cricket & Badminton',
    'Tech Podcasts'
  ];

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Nitin Kumar Mandal</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            From the historic city of Janakpur in Nepal to the technology hub of Symbiosis Institute of Technology in Pune, India.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Main Story (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-purple-900/40 border border-purple-500/40 text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Full Stack Web Developer & CS Student</h3>
                    <p className="text-xs text-purple-300 font-mono">Symbiosis Institute of Technology (SIT), Pune</p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono bg-green-950/80 border border-green-500/40 text-green-400">
                  Batch {educationDuration}
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I am a passionate Computer Science & Engineering undergraduate at SIT Pune, originating from Janakpur, Nepal. I specialize in crafting ultra-responsive web applications with React 19, Node.js, TypeScript, and modern cloud databases.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My engineering philosophy is rooted in building clean, scalable software with memorable visual polish. Whether it&apos;s architecting a collaborative cloud IDE with WebSockets or solving 450+ algorithmic problems on LeetCode, I thrive at the intersection of complex logic and beautiful user interfaces.
              </p>

              {/* Key Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>CS Engineering @ SIT Pune (8.8 CGPA)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Janakpurdham, Nepal Hometown Roots</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>SIT HackNation 1st Place Gold Winner</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Knight Rank (Top 8%) on LeetCode</span>
                </div>
              </div>
            </div>

            {/* Bottom Download CTA */}
            <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-400 font-mono">
                Looking for an energetic SDE Intern / Full Stack Developer?
              </div>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition"
              >
                <Download className="w-4 h-4" /> Download Official Resume
              </button>
            </div>
          </motion.div>

          {/* Card 2: Location Clock & Personal Info (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 flex flex-col justify-between"
          >
            {/* Live Clock Card */}
            <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                  <Clock className="w-4 h-4" /> Current Time
                </div>

                {/* Timezone Switcher */}
                <div className="flex items-center gap-1 bg-gray-900 p-1 rounded-lg border border-gray-800">
                  <button
                    onClick={() => setTimeMode('IST')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition ${
                      timeMode === 'IST' ? 'bg-purple-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    Pune (IST)
                  </button>
                  <button
                    onClick={() => setTimeMode('NST')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition ${
                      timeMode === 'NST' ? 'bg-purple-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    Nepal (NST)
                  </button>
                </div>
              </div>

              <div className="text-3xl font-black font-mono text-cyan-300 text-center py-2 bg-gray-900/80 rounded-2xl border border-gray-800 shadow-inner">
                {currentTime || '00:00:00 AM'}
              </div>

              <div className="text-xs text-gray-400 flex items-center justify-between font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {timeMode === 'IST' ? 'Pune, Maharashtra' : 'Janakpur, Nepal'}
                </span>
                <span className="text-green-400">Online & Ready</span>
              </div>
            </div>

            {/* Hobbies / Interests Pill Cloud */}
            <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                <Heart className="w-4 h-4" /> Interests & Hobbies
              </h4>

              <div className="flex flex-wrap gap-2">
                {hobbies.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1.5 rounded-xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300 font-medium hover:border-purple-500 hover:text-white transition"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Goals Quick Box */}
            <div className="bg-gradient-to-br from-purple-950/40 via-gray-950 to-blue-950/40 border border-purple-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-2">
                <Target className="w-4 h-4" /> Career Vision
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                To build impactful web ecosystems and software products that empower thousands of users across Nepal, India, and globally.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
