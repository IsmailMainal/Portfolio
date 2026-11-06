import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Server, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../Common/Badge';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Pause Lenis smooth scroll while modal is active
    if (window.lenis) {
      window.lenis.stop();
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.lenis) {
        window.lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A0A06]/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto overscroll-contain rounded-2xl border border-[#E8E0D8] bg-[#FBF5EF] shadow-2xl z-10 p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#E8E0D8] text-[#242424] hover:border-[#D5CCC3] hover:scale-105 transition-all cursor-pointer shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Info */}
          <div className="border-b border-[#E8E0D8] pb-6 mb-6">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#E65639] uppercase tracking-wider">
              <span>{project.category}</span>
              {project.badge && (
                <>
                  <span className="text-black/15">•</span>
                  <span className="text-[#8C8681]">{project.badge}</span>
                </>
              )}
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#242424]">
              {project.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#6E6A66] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-6">
            {/* Metrics if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#8C8681] mb-3">
                  System Metrics & Performance
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl border border-[#E8E0D8] bg-white shadow-2xs">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-left">
                      <div className="font-display text-xl font-bold text-[#E65639]">{m.value}</div>
                      <div className="font-mono text-[11px] text-[#8C8681] uppercase tracking-wider mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features & Functional Modules */}
            {project.keyFeatures && (
              <div>
                <h3 className="font-display text-base font-semibold text-[#242424] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E65639]" /> Key Functionality & Modules
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6E6A66]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E65639] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Highlights / Architecture */}
            {project.technicalHighlights && (
              <div>
                <h3 className="font-display text-base font-semibold text-[#242424] mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#E65639]" /> Engineering & Architecture Notes
                </h3>
                <div className="space-y-2">
                  {project.technicalHighlights.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[#E8E0D8] bg-white text-xs text-[#6E6A66] font-mono leading-relaxed flex items-start gap-2 shadow-2xs"
                    >
                      <Terminal className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills & Actions */}
            <div className="pt-6 border-t border-[#E8E0D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E8E0D8] bg-white hover:border-[#D5CCC3] text-xs font-medium text-[#242424] transition-colors shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A0A06] hover:bg-[#331B15] text-xs font-semibold text-white transition-colors shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
