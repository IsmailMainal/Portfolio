import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails, index = 0 }) {
  return (
    <article
      onClick={() => onOpenDetails(project)}
      style={{
        zIndex: 10 + index
      }}
      className="group relative rounded-2xl border border-[#E8E0D8] bg-[#FAF4ED] hover:bg-[#F5ECE1] hover:border-[#D5CCC3] transition-all duration-300 flex flex-col justify-between p-5 sm:p-7 cursor-pointer sticky top-[72px] lg:static shadow-sm min-h-[460px] lg:min-h-0 mb-8 lg:mb-0"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8E0D8]/70">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ECE5DD] font-mono text-[10px] uppercase tracking-wider text-[#6E6A66]">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-md bg-[#E65639]/10 text-[#E65639] font-mono text-[10px] font-medium">
                {project.badge}
              </span>
            )}
          </div>

          <span className="w-7 h-7 rounded-full border border-[#E8E0D8] bg-[#FBF5EF] flex items-center justify-center text-[#6E6A66] group-hover:text-[#242424] group-hover:border-[#242424] transition-colors shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#242424] group-hover:text-[#E65639] transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Key Functionality Bullets */}
          {project.keyFeatures && (
            <ul className="space-y-2 mb-4 text-xs text-[#6E6A66]">
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E65639] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[#ECE5DD]/60 border border-[#E8E0D8]/60 mb-4">
              {project.metrics.slice(0, 2).map((m, i) => (
                <div key={i}>
                  <div className="font-serif text-base sm:text-lg font-normal text-[#242424]">{m.value}</div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-[#8C8681] uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Block */}
      <div>
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[#ECE5DD] text-[#242424] text-[11px] font-mono"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[10px] font-mono text-[#8C8681] self-center ml-1">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-[#E8E0D8]/70 flex items-center justify-between text-xs font-mono text-[#6E6A66]">
          <span className="text-[#242424] group-hover:text-[#E65639] font-medium transition-colors flex items-center gap-1.5 text-xs">
            <span>View Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>

          <div className="flex items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#242424] transition-colors p-1"
                aria-label={`${project.title} GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#242424] transition-colors p-1"
                aria-label={`${project.title} demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
