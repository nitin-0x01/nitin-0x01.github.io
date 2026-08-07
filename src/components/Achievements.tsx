import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Sparkles, Calendar, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="achievements" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Trophy className="w-3.5 h-3.5" />
            <span>Hackathons & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Awards</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Recognition from university level hackathons, design sprints, and engineering problem-solving competitions.
          </p>
        </div>

        {/* Grid of Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={triggerConfetti}
              className="cursor-pointer group bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-2 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 group-hover:scale-110 transition">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-yellow-950/80 text-yellow-300 border border-yellow-500/40">
                    {ach.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-purple-300 transition">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-1">{ach.organizer}</p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {ach.date}
                </span>
                <span className="text-cyan-400 font-semibold group-hover:underline">
                  Click for Confetti 🎉
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
