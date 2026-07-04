import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../../data/projects';

/**
 * Projects Section.
 * Implements search inputs, category filter tags, layout-animated responsive grids, and full details modal overlays.
 */
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Backend', 'AI'];

  // Filter projects by category and search query
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-16 bg-[var(--color-bg-primary)] overflow-hidden transition-all duration-1000">
      {/* Background Soft lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#2D6A4F]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#84CC16]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          subtitle="Works"
          title="Projects I've Built"
          description="A selection of real-world management systems, databases, and client interfaces."
        />

        {/* Filters and Search Bar row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 p-4 rounded-xl border border-white/5 bg-white/2">
          {/* Tabs Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-heading-space text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#2D6A4F] text-[#F8FAFC] border border-[#2D6A4F]/20'
                    : 'bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="relative flex items-center w-full md:max-w-xs">
            <Search className="absolute left-3 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search technologies or titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111827] border border-white/8 rounded-full pl-9 pr-4 py-2 font-body text-xs text-[#F8FAFC] placeholder-white/35 focus:outline-none focus:border-[#84CC16]"
            />
          </div>
        </div>

        {/* Project responsive grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center text-[#94A3B8]"
          >
            <SlidersHorizontal className="w-10 h-10 mb-3 opacity-40" />
            <h3 className="font-heading-sora text-lg font-bold">No Projects Found</h3>
            <p className="text-sm mt-1">Try resetting the search terms or filters.</p>
          </motion.div>
        )}
      </div>

      {/* Full detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
