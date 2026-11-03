import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

/**
 * Vesper Footer Section.
 * Implements twinkling stellar dust canvas, cosmic void backdrop, and brand links.
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
      const numStars = Math.floor((canvas.width * canvas.height) / 7000);
      for (let i = 0; i < numStars; i++) {
        const isOrange = Math.random() < 0.55;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.6,
          alpha: Math.random(),
          speed: 0.01 + Math.random() * 0.02,
          color: isOrange ? 'rgba(249, 115, 22, ' : 'rgba(250, 204, 21, ',
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed;
        }

        const clampedAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillStyle = `${star.color}${clampedAlpha})`;
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
    <footer className="relative bg-[#050507] text-[#94A3B8] pt-16 pb-12 overflow-hidden border-t border-white/[0.08] transition-all duration-1000">
      {/* Stars Canvas Backdrop Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center">
        {/* Brand Terminal Symbol */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 glass text-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.3)]">
            <Terminal className="w-6 h-6 animate-pulse-slow" />
          </div>
          <span className="font-heading-space text-lg font-bold tracking-wider text-[#F8FAFC]">
            ISMAIL MAINAL
          </span>
          <span className="font-heading-space text-[10px] uppercase tracking-[0.25em] text-[#F97316]">
            Full Stack Developer • Cyber Obsidian System
          </span>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-4 mb-10">
          <a
            href="https://github.com/IsmailMainal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass text-[#94A3B8] hover:text-[#F97316] hover:border-[#F97316]/40 transition-all"
            aria-label="GitHub profile"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-mainal-187199215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass text-[#94A3B8] hover:text-[#FACC15] hover:border-[#FACC15]/40 transition-all"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="mailto:ismailmanyal3@gmail.com"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass text-[#94A3B8] hover:text-[#F97316] hover:border-[#F97316]/40 transition-all"
            aria-label="Email contact"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Copyright notice */}
        <div className="text-center text-[11px] font-mono tracking-wider text-white/30 pt-6 border-t border-white/5 w-full">
          &copy; {currentYear} ISMAIL MAINAL. CRAFTED WITH REACT, TAILWIND & VESPER LIVING SYSTEM.
        </div>
      </div>
    </footer>
  );
}
