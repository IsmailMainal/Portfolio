import React from 'react';
import { ExternalLink, Github, Plus } from 'lucide-react';
import GlassCard from '../Common/GlassCard';
import Badge from '../Common/Badge';

/**
 * Project Display Card.
 * Renders thumbnail, title, badges, links, and triggers detail modal opening.
 */
export default function ProjectCard({ project, index = 0, onOpenDetails }) {
  return (
    <div
      className="sticky md:static transition-all duration-300"
      style={{
        top: `calc(76px + ${Math.min(index, 5) * 26}px)`,
        zIndex: 10 + index,
      }}
    >
      <GlassCard className="p-0 border-white/10 md:border-white/5 overflow-hidden group hover:border-[#F97316]/35 flex flex-col h-full bg-[#0C0D12] md:bg-[#0C0D12]/85 shadow-[0_-14px_32px_rgba(0,0,0,0.85)] md:shadow-none transition-all duration-300">
        {/* Project Thumbnail Image */}
        <div className="relative overflow-hidden aspect-video w-full bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#050507]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[3px]">
            <button
              onClick={() => onOpenDetails(project)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#FACC15] text-[#050507] font-heading-space text-xs font-bold shadow-lg shadow-[#F97316]/30 transition-all hover:scale-105 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Details</span>
            </button>
          </div>

          {/* Project Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#050507]/90 backdrop-blur-md border border-[#F97316]/30 px-3 py-1 rounded-full font-heading-space text-[10px] font-bold tracking-wider uppercase text-[#FB923C] shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              {project.category}
            </span>
          </div>

          {/* Mobile Index Counter */}
          <div className="absolute top-4 right-4 z-10 md:hidden">
            <span className="bg-[#050507]/90 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold text-[#F97316] tracking-widest shadow-md">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Card Metadata info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-heading-sora text-lg font-bold text-[#F8FAFC] group-hover:text-[#FB923C] transition-colors mb-2">
            {project.title}
          </h3>
          <p className="font-body text-sm text-[#94A3B8] leading-relaxed mb-6 flex-grow">
            {project.shortDescription}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] font-code text-[#94A3B8] self-center ml-1">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
            <button
              onClick={() => onOpenDetails(project)}
              className="font-heading-space text-xs font-semibold text-[#F97316] hover:text-[#FACC15] flex items-center gap-1 transition-colors cursor-pointer mr-auto"
            >
              Learn More
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#F97316] transition-colors"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#FACC15] transition-colors"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
