import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Quote className="w-3.5 h-3.5" />
            <span>Peer & Mentor Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Testimonials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Recommendations</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Words from SIT Pune professors, product leaders, and hackathon teammates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6 hover:-translate-y-2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-500/30" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  &quot;{t.content}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-purple-300">{t.role}</p>
                  <p className="text-[10px] text-gray-500 font-mono">{t.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
