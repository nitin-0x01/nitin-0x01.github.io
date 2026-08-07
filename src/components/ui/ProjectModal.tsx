import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Star, GitFork, CheckCircle, Cpu } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

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
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-gray-950 border border-purple-500/40 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.3)] text-white overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header Image */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/90 text-white backdrop-blur-md border border-purple-400/40">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 drop-shadow-md">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            {/* Architecture / Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-purple-950/30 border border-purple-800/40 p-4 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Engineering Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture && (
              <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4" /> System Architecture
                </h4>
                <p className="text-xs font-mono text-cyan-300">{project.architecture}</p>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-900 border border-gray-800 text-purple-300 hover:border-purple-500 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                {project.stars !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{project.stars} Stars</span>
                  </div>
                )}
                {project.forks !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <GitFork className="w-4 h-4 text-blue-400" />
                    <span>{project.forks} Forks</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white text-xs font-semibold transition"
                  >
                    <Github className="w-4 h-4" /> GitHub Code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
