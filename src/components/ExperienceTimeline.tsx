import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional & Leadership Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Internships, university tech club leadership, and freelance software engineering projects.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/40 text-purple-400 shrink-0 mt-1">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">{exp.role}</h3>
                    <p className="text-sm font-semibold text-purple-300">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-purple-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {exp.location}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/60 font-bold">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet Descriptions */}
              <div className="space-y-2 pt-2">
                {exp.description.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-900 border border-gray-800 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
