import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

/**
 * Footer Section.
 * Contains a dynamic starry sky canvas, vector mountain silhouette backdrop, and social links.
 */
export default function Footer() {
  const canvasRef = useRef(null);

  // Twinkling stars canvas particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.7, // Keep stars in upper portion
          size: Math.random() * 1.5,
          alpha: Math.random(),
          speed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#F8FAFC';

      stars.forEach((star) => {
        // Update twinkling alphas
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed;
        }

        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-bg-primary)] text-[#94A3B8] pt-16 pb-10 overflow-hidden border-t border-[var(--color-border-custom)] transition-all duration-1000">
      {/* Stars Canvas Backdrop Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
        {/* Brand Terminal Symbol */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/8 glass text-[#84CC16]">
            <Terminal className="w-6 h-6 animate-pulse-slow" />
          </div>
          <span className="font-heading-space text-lg font-bold tracking-wider text-[#F8FAFC]">
            ISMAIL MAINAL
          </span>
          <span className="font-heading-space text-[10px] uppercase tracking-[0.2em] text-[#84CC16]">
            Full Stack developer
          </span>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href="https://github.com/IsmailMainal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/8 glass text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20 transition-all"
            aria-label="GitHub profile"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-mainal-187199215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/8 glass text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20 transition-all"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="mailto:ismailmanyal3@gmail.com"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/8 glass text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20 transition-all"
            aria-label="Email contact"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Custom Mountain silhouette path drawn in SVG sticking to bottom */}
        <div className="w-full max-w-lg h-16 pointer-events-none opacity-30 mt-6 relative">
          <svg
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            className="w-full h-full fill-current text-[#111827]"
          >
            <path d="M0 20 L20 8 L35 15 L60 4 L80 14 L100 8 L100 20 Z" />
          </svg>
        </div>

        {/* Copyright notice */}
        <div className="text-center text-[10px] font-mono tracking-wider text-white/30 mt-8 pt-8 border-t border-white/5 w-full">
          &copy; {currentYear} ISMAIL MAINAL. ALL RIGHTS RESERVED. IN HARMONY WITH NATURE.
        </div>
      </div>
    </footer>
  );
}
