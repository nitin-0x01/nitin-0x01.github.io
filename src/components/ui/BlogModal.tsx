import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl bg-gray-950 border border-purple-500/40 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.3)] text-white overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Cover Header */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 space-y-2">
              <div className="flex items-center gap-4 text-xs text-purple-300 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {post.title}
              </h2>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="prose prose-invert prose-purple max-w-none text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {post.content}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-800">
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="w-4 h-4 text-purple-400" />
                {post.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-gray-900 border border-gray-800 text-xs text-purple-300">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-xs font-semibold text-white border border-gray-700 transition"
              >
                <Share2 className="w-4 h-4" /> Share Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
