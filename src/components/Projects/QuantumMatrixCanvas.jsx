import React, { useEffect, useRef } from 'react';

/**
 * QuantumMatrixCanvas (for Projects Section - "Works I've Built").
 * Visual Concept: Interactive Cyber Warp Matrix & Quantum Laser Grid.
 * Represents interactive full-stack apps, live production systems, and digital matrix grids.
 * Warps dynamically around mouse cursor with gravitational lensing physics.
 */
export default function QuantumMatrixCanvas() {
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
    let points = [];
    let laserScanY = 0;
    let laserScanX = 0;

    const initMatrix = (w, h) => {
      points = [];
      const isMobile = w < 768;
      const step = isMobile ? 75 : Math.max(55, Math.floor(Math.min(w, h) / 14));
      const cols = Math.ceil(w / step);
      const rows = Math.ceil(h / step);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const isOrange = (c + r) % 3 === 0;
          points.push({
            origX: c * step,
            origY: r * step,
            x: c * step,
            y: r * step,
            color: isOrange ? 'rgba(249, 115, 22, ' : 'rgba(250, 204, 21, ',
            baseAlpha: 0.12 + Math.random() * 0.15,
            size: 1.2 + Math.random() * 1.6,
          });
        }
      }
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const isMobile = rect.width < 768;
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);
      width = rect.width;
      height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      initMatrix(width, height);
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

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Laser scan lines traversing grid
      laserScanY = (laserScanY + 1.2) % height;
      laserScanX = (laserScanX + 0.8) % width;

      // Horizontal Laser Beam
      const hGrad = ctx.createLinearGradient(0, laserScanY, width, laserScanY);
      hGrad.addColorStop(0, 'rgba(249, 115, 22, 0)');
      hGrad.addColorStop(0.5, 'rgba(249, 115, 22, 0.12)');
      hGrad.addColorStop(1, 'rgba(250, 204, 21, 0)');
      ctx.strokeStyle = hGrad;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, laserScanY);
      ctx.lineTo(width, laserScanY);
      ctx.stroke();

      // Vertical Laser Beam
      const vGrad = ctx.createLinearGradient(laserScanX, 0, laserScanX, height);
      vGrad.addColorStop(0, 'rgba(250, 204, 21, 0)');
      vGrad.addColorStop(0.5, 'rgba(250, 204, 21, 0.1)');
      vGrad.addColorStop(1, 'rgba(251, 146, 60, 0)');
      ctx.strokeStyle = vGrad;
      ctx.beginPath();
      ctx.moveTo(laserScanX, 0);
      ctx.lineTo(laserScanX, height);
      ctx.stroke();

      // Update and draw matrix points with warp lens
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Gravitational warp toward or away from cursor
        let targetX = p.origX;
        let targetY = p.origY;
        let extraAlpha = 0;

        if (mouse.isHovering) {
          const dx = p.origX - mouse.x;
          const dy = p.origY - mouse.y;
          const dist = Math.hypot(dx, dy);
          const warpRadius = 260;

          if (dist < warpRadius && dist > 1) {
            const factor = (1 - dist / warpRadius);
            const warpDist = Math.sin(factor * Math.PI) * 28;
            targetX += (dx / dist) * warpDist;
            targetY += (dy / dist) * warpDist;
            extraAlpha = factor * 0.6;
          }
        }

        p.x += (targetX - p.x) * 0.1;
        p.y += (targetY - p.y) * 0.1;

        // Proximity to laser scans
        const distLaserY = Math.abs(p.y - laserScanY);
        const distLaserX = Math.abs(p.x - laserScanX);
        if (distLaserY < 40) extraAlpha += (1 - distLaserY / 40) * 0.35;
        if (distLaserX < 40) extraAlpha += (1 - distLaserX / 40) * 0.25;

        const finalAlpha = Math.min(1, p.baseAlpha + extraAlpha);

        ctx.fillStyle = `${p.color}${finalAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + extraAlpha * 1.5), 0, Math.PI * 2);
        ctx.fill();

        // Crosshairs on high-energy points near cursor
        if (extraAlpha > 0.4) {
          ctx.strokeStyle = `rgba(249, 115, 22, ${extraAlpha * 0.45})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x - 6, p.y);
          ctx.lineTo(p.x + 6, p.y);
          ctx.moveTo(p.x, p.y - 6);
          ctx.lineTo(p.x, p.y + 6);
          ctx.stroke();
        }
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
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-55"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] rounded-full bg-[#F97316]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[650px] rounded-full bg-[#FACC15]/6 blur-[160px] pointer-events-none" />
    </div>
  );
}

