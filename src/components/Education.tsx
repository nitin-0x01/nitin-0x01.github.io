import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Education: React.FC = () => {
  const { data } = usePortfolio();
  const eduList = data.education && data.education.length > 0 ? data.education : [];

  return (
    <section id="education" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Timeline</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            My formal engineering training at Symbiosis Institute of Technology (SIT), Pune, built upon strong science foundations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {eduList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl p-8 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-6"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-5">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-purple-400 font-mono mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {item.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-800/60 text-xs font-mono">
                    {item.status || 'In Progress'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Key Courses */}
              {item.courses && item.courses.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 font-semibold">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>KEY COURSES</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-purple-950/40 border border-purple-500/30 text-purple-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Honors */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-gray-800/60">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>HIGHLIGHTS & HONORS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.highlights.map((high, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
