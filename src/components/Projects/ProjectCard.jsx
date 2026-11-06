import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import Badge from '../Common/Badge';

export default function ProjectCard({ project, onOpenDetails, index = 0 }) {
  return (
    <article
      onClick={() => onOpenDetails(project)}
      style={{
        zIndex: 10 + index
      }}
      className="group relative rounded-2xl border border-[#E8E0D8] bg-white hover:border-[#D5CCC3] hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-5 sm:p-7 cursor-pointer sticky top-[72px] lg:static shadow-lg lg:shadow-sm min-h-[460px] lg:min-h-0 mb-8 lg:mb-0"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8E0D8]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FBF5EF] border border-[#E8E0D8] font-mono text-[10px] uppercase tracking-wider text-[#E65639]">
              {project.category}
            </span>
            {project.badge && (
              <span
                className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md ${
                  project.isFlagship
                    ? 'bg-[#E65639]/10 text-[#E65639] font-medium'
                    : 'text-[#8C8681]'
                }`}
              >
                {project.badge}
              </span>
            )}
          </div>

          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FBF5EF] border border-[#E8E0D8] flex items-center justify-center text-[#6E6A66] group-hover:text-[#242424] group-hover:border-[#D5CCC3] transition-all shrink-0">
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </span>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#242424] group-hover:text-[#E65639] transition-colors mb-1.5">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed mb-3">
            {project.shortDescription}
          </p>

          {/* Key Functionality Bullets */}
          {project.keyFeatures && (
            <ul className="space-y-1.5 mb-3">
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-[#6E6A66]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#FBF5EF] border border-[#E8E0D8] mb-3">
              {project.metrics.slice(0, 2).map((m, i) => (
                <div key={i}>
                  <div className="font-display text-xs sm:text-sm font-bold text-[#E65639]">{m.value}</div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-[#8C8681] uppercase">{m.label}</div>
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
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] font-mono text-[#8C8681] self-center ml-0.5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-[#E8E0D8] flex items-center justify-between text-xs font-mono text-[#6E6A66]">
          <span className="text-[#E65639] font-medium group-hover:underline flex items-center gap-1 text-[11px] sm:text-xs">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Technical Specs →
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
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
