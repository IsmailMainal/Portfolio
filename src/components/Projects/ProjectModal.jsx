import React, { useEffect, useState } from 'react';
import { X, Github, ExternalLink, ShieldCheck, Database, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../Common/Badge';

/**
 * Detailed Project Full-Screen Modal Overlay.
 * Includes detailed case-study information (Problem, Solution, Architecture, Challenges).
 * @param {Object} props
 * @param {Object} props.project - Selected project data
 * @param {function} props.onClose - Modal close callback
 */
export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1120]/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#111827] shadow-2xl z-10 scrollbar-thin scrollbar-thumb-white/10"
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-white/8 glass text-[#F8FAFC] hover:border-white/20 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image / Carousel */}
          <div className="relative aspect-video w-full max-h-[420px] bg-slate-950 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient bottom-shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent pointer-events-none z-10" />

            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots indicator at the top-left */}
                <div className="absolute top-8 left-8 z-20 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'w-6 bg-[#84CC16]' : 'w-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Banner Metadata overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
              <span className="bg-[#0B1120]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full font-heading-space text-xs font-bold tracking-wider uppercase text-[#84CC16]">
                {project.category}
              </span>
              <h2 className="font-heading-sora text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] mt-3">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Main Content */}
          <div className="p-6 md:p-8 flex flex-col gap-8">
            {/* Project Overview */}
            <div>
              <p className="font-body text-base md:text-lg text-[#94A3B8] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Links and tech stacks summary */}
            <div className="flex flex-col sm:flex-row justify-between gap-6 p-5 rounded-xl bg-white/3 border border-white/5">
              <div>
                <span className="font-heading-space text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-2">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-end gap-3 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 text-[#F8FAFC] font-heading-space text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#84CC16] text-[#0B1120] font-heading-space text-xs font-bold hover:scale-105 transition-all shadow-md shadow-[#84CC16]/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem / Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-white/5 bg-white/2">
                <div className="flex items-center gap-2 text-[#EF4444] mb-3">
                  <ShieldCheck className="w-5 h-5 rotate-180" />
                  <h3 className="font-heading-sora font-bold text-base text-[#F8FAFC]">
                    The Challenge & Problem
                  </h3>
                </div>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-[#2D6A4F]/5">
                <div className="flex items-center gap-2 text-[#84CC16] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-heading-sora font-bold text-base text-[#F8FAFC]">
                    The Core Solution
                  </h3>
                </div>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Details */}
            {project.architecture && (
              <div className="p-5 rounded-xl border border-white/5 bg-white/2">
                <div className="flex items-center gap-2 text-[#84CC16] mb-3">
                  <Database className="w-5 h-5" />
                  <h3 className="font-heading-sora font-bold text-base text-[#F8FAFC]">
                    System Architecture
                  </h3>
                </div>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Technical Challenges & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading-sora font-bold text-sm text-[#F8FAFC] flex items-center gap-2 mb-2">
                  <Settings className="w-4 h-4 text-[#94A3B8]" />
                  Lessons Solved
                </h4>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div>
                <h4 className="font-heading-sora font-bold text-sm text-[#F8FAFC] flex items-center gap-2 mb-2">
                  <Settings className="w-4 h-4 text-[#84CC16]" />
                  Takeaways & Learnings
                </h4>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  {project.learnings}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
