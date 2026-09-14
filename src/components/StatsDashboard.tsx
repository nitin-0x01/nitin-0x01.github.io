import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2, CalendarCheck, GitCommit, Cpu } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const StatsDashboard: React.FC = () => {
  const { data } = usePortfolio();
  const stats = data.stats;

  const statItems = [
    {
      label: 'Projects Built',
      value: stats.projectsCompleted ? `${stats.projectsCompleted}+` : '6+',
      icon: FolderGit2,
      color: '#8b5cf6'
    },
    {
      label: 'Years Coding',
      value: stats.yearsExperience ? `${stats.yearsExperience}+` : '2+',
      icon: CalendarCheck,
      color: '#06b6d4'
    },
    {
      label: 'GitHub Contributions',
      value: stats.githubContributions ? `${stats.githubContributions}+` : '250+',
      icon: GitCommit,
      color: '#10b981'
    },
    {
      label: 'Tech Mastered',
      value: stats.technologiesMastered ? `${stats.technologiesMastered}+` : '12+',
      icon: Cpu,
      color: '#f59e0b'
    }
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-gray-950/70 border border-purple-500/20 rounded-3xl backdrop-blur-xl text-center space-y-2 hover:border-purple-500/50 transition shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div className="text-2xl sm:text-4xl font-black font-mono text-white">
                  {item.value}
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
