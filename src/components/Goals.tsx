import React from 'react';
import { motion } from 'motion/react';
import { Target, Rocket, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { GOALS_DATA } from '../data/portfolioData';

export const Goals: React.FC = () => {
  return (
    <section id="goals" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Target className="w-3.5 h-3.5" />
            <span>Engineering Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Goals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Aspirations</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            My strategic milestones for technical growth, open-source impact, and software engineering career.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOALS_DATA.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-xl space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800/50">
                  {goal.timeframe}
                </span>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  goal.status === 'Achieved'
                    ? 'bg-green-950 text-green-300 border border-green-800'
                    : goal.status === 'In Progress'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                    : 'bg-gray-900 text-gray-400 border border-gray-800'
                }`}>
                  {goal.status}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white">{goal.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
