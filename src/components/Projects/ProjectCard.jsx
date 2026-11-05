import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import Badge from '../Common/Badge';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <article
      onClick={() => onOpenDetails(project)}
      className="group relative rounded-2xl border border-[#E8E0D8] bg-white hover:border-[#D5CCC3] hover:shadow-md transition-all duration-300 flex flex-col p-6 sm:p-7 cursor-pointer"
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E8E0D8]">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#FBF5EF] border border-[#E8E0D8] font-mono text-[10px] uppercase tracking-wider text-[#E65639]">
            {project.category}
          </span>
          {project.badge && (
            <span className="text-[11px] font-mono text-[#8C8681]">
              {project.badge}
            </span>
          )}
        </div>

        <span className="w-7 h-7 rounded-full bg-[#FBF5EF] border border-[#E8E0D8] flex items-center justify-center text-[#6E6A66] group-hover:text-[#242424] group-hover:border-[#D5CCC3] transition-all">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Title & Description */}
      <div className="mb-5 flex-grow">
        <h3 className="font-display text-xl font-bold text-[#242424] group-hover:text-[#E65639] transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Key Functionality Bullets */}
        {project.keyFeatures && (
          <ul className="space-y-1.5 mb-4">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#6E6A66]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Metrics Strip */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#FBF5EF] border border-[#E8E0D8] mb-4">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div key={i}>
                <div className="font-display text-sm font-bold text-[#E65639]">{m.value}</div>
                <div className="font-mono text-[10px] text-[#8C8681] uppercase">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="default">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && (
          <span className="text-[10px] font-mono text-[#8C8681] self-center ml-1">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#E8E0D8] flex items-center justify-between text-xs font-mono text-[#6E6A66]">
        <span className="text-[#E65639] font-medium group-hover:underline flex items-center gap-1">
          <Terminal className="w-3.5 h-3.5" />
          Technical Specs →
        </span>

        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#242424] transition-colors"
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
              className="hover:text-[#242424] transition-colors"
              aria-label={`${project.title} demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
