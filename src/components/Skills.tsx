import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Search,
  Sparkles,
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...SKILLS_DATA.map(c => c.categoryName)];

  // Flatten and filter skills
  const allSkills = SKILLS_DATA.flatMap(c =>
    c.skills.map(s => ({ ...s, categoryName: c.categoryName }))
  );

  const filteredSkills = allSkills.filter(s => {
    const matchesCategory = selectedCategory === 'All' || s.categoryName === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive overview of programming languages, full-stack frameworks, databases, and engineering tools I utilize.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-gray-950/70 p-1.5 rounded-2xl border border-purple-500/20 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-950/80 border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-2xl p-5 backdrop-blur-xl transition duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:-translate-y-1 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm bg-gray-900 border border-gray-800 group-hover:scale-110 transition"
                    style={{ color: skill.color }}
                  >
                    {skill.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition flex items-center gap-1.5">
                      <span>{skill.name}</span>
                      {skill.popular && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono">
                          Core
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">{skill.experience}</p>
                  </div>
                </div>

                <span className="text-sm font-black font-mono text-cyan-300">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Level Bar */}
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-gray-500 font-mono">
                <span>Category: {skill.categoryName}</span>
                <span className="text-purple-400 font-semibold">Proficient</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
