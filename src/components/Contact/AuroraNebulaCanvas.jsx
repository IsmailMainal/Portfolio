import React, { useEffect, useRef } from 'react';

/**
 * AuroraNebulaCanvas (for Contact Section - "Let's Collaborate").
 * Visual Concept: Fluid Aurora Borealis Ribbons & Gravitational Nebula Waves.
 * Represents creative synergy, fluid communication, and deep celestial atmosphere.
 * Pauses rendering when scrolled outside viewport.
 */
export default function AuroraNebulaCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovering: false };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const isMobile = rect.width < 768;
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);
      width = rect.width;
      height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
        mouse.targetX = -1000;
        mouse.targetY = -1000;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const render = () => {
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(render);
        return;
      }

      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const NUM_RIBBONS = isMobile ? 3 : 6;
      const POINTS_PER_RIBBON = isMobile ? 25 : 55;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Draw flowing fluid aurora wave ribbons
      for (let r = 0; r < NUM_RIBBONS; r++) {
        const ribbonProg = r / NUM_RIBBONS;
        const midY = height * 0.35 + ribbonProg * (height * 0.35);

        const grad = ctx.createLinearGradient(0, 0, width, height);
        if (r % 2 === 0) {
          grad.addColorStop(0, 'rgba(16, 185, 129, 0.02)');
          grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.14)');
          grad.addColorStop(1, 'rgba(56, 189, 248, 0.02)');
        } else {
          grad.addColorStop(0, 'rgba(99, 102, 241, 0.02)');
          grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.16)');
          grad.addColorStop(1, 'rgba(129, 140, 248, 0.02)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let i = 0; i <= POINTS_PER_RIBBON; i++) {
          const xProg = i / POINTS_PER_RIBBON;
          const x = xProg * width;

          // Multi-frequency harmonic wave equations
          const wave1 = Math.sin(xProg * Math.PI * 2.5 + time * 0.7 + r * 0.7) * 45;
          const wave2 = Math.cos(xProg * Math.PI * 4 - time * 0.5 + r * 0.5) * 30;
          const wave3 = Math.sin(xProg * Math.PI * 1.5 + time * 1.1) * 20;

          let y = midY + wave1 + wave2 + wave3;

          // Mouse fluid attraction
          if (mouse.isHovering) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.hypot(dx, dy);
            const auraRadius = 260;
            if (dist < auraRadius) {
              const factor = (1 - dist / auraRadius);
              y -= Math.sin(factor * Math.PI) * 40;
            }
          }

          if (i === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-75"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-[#10B981]/5 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] rounded-full bg-[#6366F1]/7 blur-[180px] pointer-events-none" />
    </div>
  );
}

