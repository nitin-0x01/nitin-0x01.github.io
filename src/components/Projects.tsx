import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Search,
  ExternalLink,
  Github,
  Star,
  Eye
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { data } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Fallback default projects
  let activeProjects: Project[] = PROJECTS_DATA;

  // Convert Firestore projects into the format expected by the UI
  if (data?.projects && Array.isArray(data.projects) && data.projects.length > 0) {
    activeProjects = data.projects.map((proj: any, idx: number) => {
      // Find matching local project to retain rich fields (images, details) if available
      const localMatch = PROJECTS_DATA.find(
        (p) => p.title.toLowerCase() === (proj.title || '').toLowerCase()
      );

      const technologies = Array.isArray(proj.tags)
        ? proj.tags
        : typeof proj.tags === 'string'
        ? proj.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
        : (localMatch?.technologies || ['Full Stack']);

      return {
        id: localMatch?.id || `fs-proj-${idx}`,
        title: proj.title || 'Untitled Project',
        tagline: proj.description || localMatch?.tagline || 'Engineered with modern full-stack architectures.',
        description: proj.description || localMatch?.description || '',
        category: localMatch?.category || 'Full Stack',
        image: proj.image || proj.imageUrl || localMatch?.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        technologies,
        demoUrl: proj.liveLink || proj.demoUrl || localMatch?.demoUrl,
        githubUrl: proj.githubLink || proj.githubUrl || localMatch?.githubUrl,
        stars: localMatch?.stars ?? 12,
        featured: true,
        features: localMatch?.features || ['Production Scalable', 'Cloud Hosted', 'Secure Architecture'],
        challenges: localMatch?.challenges || 'Optimized database queries and refined responsive UI/UX flow.',
        role: localMatch?.role || 'Lead Engineer'
      } as Project;
    });
  }

  // Derive unique categories dynamically
  const dynamicCategories = Array.from(new Set(activeProjects.map((p) => p.category).filter(Boolean)));
  const categories = ['All', ...dynamicCategories];

  const filteredProjects = activeProjects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500">Showcase</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A collection of production full-stack web applications, AI tools, and open-source contributions crafted with modern engineering architectures.
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
              placeholder="Search projects or tech..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-950/80 border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id || `proj-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-950/70 border border-purple-500/20 hover:border-purple-500/60 rounded-3xl overflow-hidden backdrop-blur-xl transition duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Project Image Box */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) => {
                    // Fallback thumbnail if custom image link fails
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-950/80 text-purple-300 border border-purple-500/40 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Stars */}
                {project.stars !== undefined && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-950/80 border border-gray-800 text-yellow-400 text-xs font-mono backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-purple-300 transition line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-purple-950/50 border border-purple-800/40 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-gray-900 text-gray-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <Eye className="w-4 h-4" /> View Details
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 text-gray-300 hover:text-white transition"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition shadow-md shadow-purple-600/30"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
