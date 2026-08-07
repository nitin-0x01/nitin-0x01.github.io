import React from 'react';
import { motion } from 'motion/react';
import { Code2, ExternalLink, Award, CheckCircle2, Flame } from 'lucide-react';
import { CODING_PROFILES_DATA } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Code2 className="w-3.5 h-3.5" />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Coding Profiles</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            450+ Data Structures & Algorithms problems solved across LeetCode, CodeChef, and HackerRank.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CODING_PROFILES_DATA.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl p-6 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-2 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gray-900 border border-gray-800 text-white font-black text-sm group-hover:scale-110 transition">
                    {profile.platform.substring(0, 2).toUpperCase()}
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-yellow-950/80 text-yellow-300 border border-yellow-500/40">
                    {profile.rank}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white">{profile.platform}</h3>
                  <p className="text-xs font-mono text-purple-300">@{profile.username}</p>
                </div>

                <div className="p-3 rounded-2xl bg-gray-900/80 border border-gray-800 space-y-1">
                  <div className="text-[11px] text-gray-400 font-mono">Problems Solved</div>
                  <div className="text-2xl font-black font-mono text-cyan-300">
                    {profile.problemsSolved}+
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Badges</div>
                  <div className="flex flex-wrap gap-1">
                    {profile.badges.map((b) => (
                      <span key={b} className="px-2 py-0.5 rounded text-[10px] bg-purple-950/60 border border-purple-800/40 text-purple-300">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 hover:bg-purple-600 text-white text-xs font-semibold border border-gray-800 hover:border-purple-500 transition shadow-md"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
