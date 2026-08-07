import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOGS_DATA } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogsProps {
  onSelectBlog: (blog: BlogPost) => void;
}

export const Blogs: React.FC<BlogsProps> = ({ onSelectBlog }) => {
  return (
    <section id="blogs" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Insights & Writings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Articles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Publications</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Deep dives into React 19, Docker microservices, system architecture, and my journey as a CS student at SIT Pune.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS_DATA.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => onSelectBlog(post)}
              className="cursor-pointer group bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl overflow-hidden backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-purple-300 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white group-hover:text-purple-300 transition line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-purple-950/60 border border-purple-800/40 text-purple-300">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
