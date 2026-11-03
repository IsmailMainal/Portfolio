import React, { useEffect, useRef } from 'react';

/**
 * TopographicWaveCanvas (for Journey Section - "Hiking Up the Tech Stack").
 * Visual Concept: 3D Topographic Contour Waves & Elevation Ridges.
 * Represents climbing milestones, increasing technical elevation, and the hiking path motif.
 * Pauses rendering when scrolled outside viewport.
 */
export default function TopographicWaveCanvas() {
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

      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const NUM_LINES = isMobile ? 8 : 16;
      const POINTS_PER_LINE = isMobile ? 32 : 65;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.lineWidth = 1.1;

      // Draw undulating topographic elevation lines
      for (let i = 0; i < NUM_LINES; i++) {
        const lineProgress = i / NUM_LINES;
        const baseY = height * 0.15 + lineProgress * (height * 0.75);

        // Molten golden topography gradient along the elevation lines
        const grad = ctx.createLinearGradient(0, baseY, width, baseY);
        const lineAlpha = 0.08 + Math.sin(lineProgress * Math.PI) * 0.18;
        grad.addColorStop(0, `rgba(249, 115, 22, ${lineAlpha * 0.6})`);
        grad.addColorStop(0.5, `rgba(251, 191, 36, ${lineAlpha * 0.85})`);
        grad.addColorStop(1, `rgba(250, 204, 21, ${lineAlpha * 0.6})`);

        ctx.strokeStyle = grad;
        ctx.beginPath();

        for (let j = 0; j <= POINTS_PER_LINE; j++) {
          const xProgress = j / POINTS_PER_LINE;
          const x = xProgress * width;

          // Harmonic wave equation for topographic mountain contours
          const wave1 = Math.sin(xProgress * Math.PI * 4 + time * 0.8 + i * 0.4) * 22;
          const wave2 = Math.cos(xProgress * Math.PI * 2 - time * 0.5 + i * 0.3) * 16;
          const wave3 = Math.sin(xProgress * Math.PI * 8 + time * 1.2) * 8;

          let elevation = wave1 + wave2 + wave3;

          // Mouse proximity peak elevation
          if (mouse.isHovering) {
            const dx = x - mouse.x;
            const dy = baseY - mouse.y;
            const dist = Math.hypot(dx, dy);
            const peakRadius = 240;
            if (dist < peakRadius) {
              const peakForce = (1 - dist / peakRadius);
              elevation -= Math.sin(peakForce * Math.PI) * 45;
            }
          }

          const y = baseY + elevation;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Floating elevation spark particles
      const sparkCount = 20;
      for (let i = 0; i < sparkCount; i++) {
        const sx = ((i * 137.5 + time * 40) % width);
        const sy = ((i * 219.3 + time * 20) % height);
        const pulse = 0.5 + 0.5 * Math.sin(time * 3 + i);
        ctx.fillStyle = i % 2 === 0 ? `rgba(249, 115, 22, ${pulse * 0.4})` : `rgba(250, 204, 21, ${pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.4, 0, Math.PI * 2);
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
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-65"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#F97316]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#FACC15]/6 blur-[160px] pointer-events-none" />
    </div>
  );
}

