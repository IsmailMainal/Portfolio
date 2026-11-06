import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Enterprise ERP', 'Full Stack', 'Backend'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Enterprise ERP') {
      return project.id === 'aanibiz-erp' || project.id === 'aanibiz-compliance-gateway';
    }
    return project.category === activeCategory;
  });

  return (
    <section id="work" className="py-8 sm:py-10 border-b border-[#E8E0D8]/60 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424]">
            Selected Work
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6A66] mt-1">
            Enterprise ERP platforms, statutory compliance gateways, and distributed web applications.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1A0A06] text-white font-medium shadow-xs'
                  : 'bg-[#ECE5DD] text-[#6E6A66] hover:text-[#242424]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Container: Stacked Overlapping Cards on Mobile, 2-Column Grid on Desktop */}
      <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onOpenDetails={setSelectedProject}
          />
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
