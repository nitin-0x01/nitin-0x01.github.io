import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Timeline</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            My formal engineering training at Symbiosis Institute of Technology (SIT), Pune, built upon strong science foundations in Nepal.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-32 space-y-12">
          {EDUCATION_DATA.map((item, index) => {
            const period = item.period || item.duration || 'Present';
            const location = item.location || item.institution || 'Remote';
            const grade = item.grade || item.status || 'In Progress';
            const highlights = item.highlights || item.achievements || [];
            const skills = item.skills || item.skillsLearned || [];
            const courseList = item.courses || [];
            const key = item.id || `${item.degree}-${index}`;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 md:pl-12 group"
              >
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gray-950 border-2 border-purple-500 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-125 transition">
                  <GraduationCap className="w-4 h-4" />
                </div>

                <div className="hidden md:block absolute -left-36 top-2 text-xs font-mono font-bold text-purple-400 text-right w-28">
                  {period}
                </div>

                <div className="bg-gray-950/70 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-purple-500/50 transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-800 pb-4">
                    <div>
                      <span className="md:hidden inline-block text-xs font-mono text-purple-400 font-bold mb-1">
                        {period}
                      </span>
                      <h3 className="text-xl font-extrabold text-white">{item.degree}</h3>
                      <p className="text-sm font-semibold text-purple-300 mt-0.5">{item.institution}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-gray-900 border border-gray-800 text-gray-300">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        {location}
                      </span>
                      {grade && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold">
                          {grade}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {courseList.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> Courses
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {courseList.map((course, idx) => (
                          <span
                            key={`${course}-${idx}`}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-900 border border-gray-800 text-cyan-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> Highlights & Honors
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {highlights.map((ach, idx) => (
                          <div key={`${ach}-${idx}`} className="flex items-start gap-2 text-xs text-gray-300 bg-gray-900/60 p-2.5 rounded-xl border border-gray-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skills.map((s, idx) => (
                        <span
                          key={`${s}-${idx}`}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-900 border border-gray-800 text-purple-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
