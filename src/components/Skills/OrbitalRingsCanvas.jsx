import React, { useEffect, useRef } from 'react';

/**
 * OrbitalRingsCanvas (for Skills Section - "Curated Technology Stack").
 * Visual Concept: 3D Atomic Orbital Gyroscope & Celestial Tech Rings.
 * Represents core skills revolving in harmonic balance like electrons in atomic orbitals.
 * Pauses rendering when scrolled outside viewport.
 */
export default function OrbitalRingsCanvas() {
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

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false };

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
        mouse.targetX = (e.clientX - rect.left - width / 2) * 0.0008;
        mouse.targetY = (e.clientY - rect.top - height / 2) * 0.0008;
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
        mouse.targetX = 0;
        mouse.targetY = 0;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Orbital Rings configuration
    const rings = [
      { radiusX: 0.38, radiusY: 0.16, angle: 0.3, speed: 0.008, color: '#F97316', particleCount: 3 },
      { radiusX: 0.48, radiusY: 0.22, angle: -0.5, speed: -0.006, color: '#FACC15', particleCount: 4 },
      { radiusX: 0.32, radiusY: 0.14, angle: 0.8, speed: 0.011, color: '#FB923C', particleCount: 3 },
      { radiusX: 0.58, radiusY: 0.26, angle: -0.2, speed: 0.005, color: '#F97316', particleCount: 5 },
      { radiusX: 0.25, radiusY: 0.11, angle: -0.9, speed: -0.013, color: '#FDE047', particleCount: 2 },
    ];

    const render = () => {
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(render);
        return;
      }

      time += 0.014;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const cx = width / 2;
      const cy = height / 2;
      const baseScale = Math.min(width, height);

      ctx.save();
      ctx.translate(cx, cy);

      // Draw each orbital ellipse and orbiting photon nodes
      for (let r = 0; r < rings.length; r++) {
        const ring = rings[r];
        const rx = ring.radiusX * baseScale;
        const ry = ring.radiusY * baseScale;
        const currentAngle = ring.angle + mouse.x * 2.0;

        ctx.save();
        ctx.rotate(currentAngle);

        // Draw elliptical orbital track
        ctx.strokeStyle = ring.color === '#F97316'
          ? 'rgba(249, 115, 22, 0.16)'
          : ring.color === '#FB923C'
          ? 'rgba(251, 146, 60, 0.15)'
          : 'rgba(250, 204, 21, 0.16)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Draw orbiting quantum particles
        for (let p = 0; p < ring.particleCount; p++) {
          const particleOffset = (p * (Math.PI * 2)) / ring.particleCount;
          const theta = time * ring.speed * 8 + particleOffset;

          const px = rx * Math.cos(theta);
          const py = ry * Math.sin(theta);

          // Fading comet trail behind particle
          const trailLength = 8;
          for (let t = trailLength; t > 0; t--) {
            const trailTheta = theta - t * (ring.speed > 0 ? 0.05 : -0.05);
            const tx = rx * Math.cos(trailTheta);
            const ty = ry * Math.sin(trailTheta);
            const trailAlpha = (1 - t / trailLength) * 0.35;

            ctx.fillStyle = ring.color;
            ctx.globalAlpha = trailAlpha;
            ctx.beginPath();
            ctx.arc(tx, ty, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }

          // Main orbiting photon
          ctx.globalAlpha = 1;
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(px, py, 2.4, 0, Math.PI * 2);
          ctx.fill();

          // Outer luminous glow halo
          ctx.fillStyle = ring.color;
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.arc(px, py, 6.0, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.restore();
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
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F97316]/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FACC15]/6 blur-[160px] pointer-events-none" />
    </div>
  );
}

