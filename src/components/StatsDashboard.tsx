import React from 'react';
import { motion } from 'motion/react';
import { Activity, Code2, GitCommit, Trophy, Coffee, Clock } from 'lucide-react';
import { STATS_DATA } from '../data/portfolioData';

export const StatsDashboard: React.FC = () => {
  const stats = STATS_DATA || {};

  const statItems = [
    { label: 'Projects Completed', value: `${stats?.projectsCompleted ?? 6}+`, icon: Code2, color: 'text-purple-400' },
    { label: 'Commits in 2024', value: `${stats?.githubContributions ?? 250}+`, icon: GitCommit, color: 'text-cyan-300' },
    { label: 'LeetCode Solved', value: `${stats?.yearsExperience ?? 2}+`, icon: Activity, color: 'text-yellow-400' },
    { label: 'Technologies Mastered', value: `${stats?.technologiesMastered ?? 12}`, icon: Trophy, color: 'text-green-400' },
    { label: 'Cups of Coffee', value: `${stats?.projectsCompleted ?? 6}+`, icon: Coffee, color: 'text-amber-400' },
    { label: 'Years Experience', value: `${stats?.yearsExperience ?? 2}+`, icon: Clock, color: 'text-blue-400' }
  ];

  return (
    <section className="py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-950/40 via-gray-950 to-indigo-950/40 border border-purple-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.2)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {statItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="space-y-2 p-3 rounded-2xl bg-gray-900/60 border border-gray-800"
                >
                  <IconComp className={`w-5 h-5 mx-auto ${item.color}`} />
                  <div className={`text-2xl sm:text-3xl font-black font-mono ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
