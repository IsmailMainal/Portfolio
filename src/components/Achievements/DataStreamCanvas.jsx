import React, { useEffect, useRef } from 'react';

/**
 * DataStreamCanvas (for Achievements Section - Metrics & Numbers).
 * Visual Concept: High-Speed Telemetry Streams & Optical Laser Rays.
 * Represents high throughput, data metrics, and production velocity.
 * Pauses rendering when scrolled outside viewport.
 */
export default function DataStreamCanvas() {
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

    let beams = [];
    const mouse = { x: -1000, y: -1000, isHovering: false };

    const initBeams = (w, h) => {
      beams = [];
      const count = Math.min(32, Math.max(16, Math.floor(w / 60)));

      for (let i = 0; i < count; i++) {
        const isOrange = Math.random() < 0.52;
        beams.push({
          x: Math.random() * w,
          y: Math.random() * h,
          baseY: Math.random() * h,
          length: 60 + Math.random() * 140,
          speed: 2.5 + Math.random() * 4.5,
          color: isOrange ? 'rgba(249, 115, 22, ' : 'rgba(250, 204, 21, ',
          alpha: 0.15 + Math.random() * 0.35,
          lineWidth: 0.8 + Math.random() * 1.5,
        });
      }
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      initBeams(width, height);
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
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const render = () => {
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < beams.length; i++) {
        const b = beams[i];

        // Accelerate when hovered nearby
        let currentSpeed = b.speed;
        let currentY = b.y;

        if (mouse.isHovering) {
          const dy = mouse.y - b.y;
          const dist = Math.abs(dy);
          if (dist < 120) {
            currentSpeed *= 1.4;
            currentY += (mouse.y - currentY) * 0.04;
          }
        }

        b.x += currentSpeed;
        b.y = currentY;

        if (b.x - b.length > width) {
          b.x = -b.length;
          b.y = Math.random() * height;
        }

        const grad = ctx.createLinearGradient(b.x - b.length, b.y, b.x, b.y);
        grad.addColorStop(0, `${b.color}0)`);
        grad.addColorStop(0.7, `${b.color}${b.alpha * 0.4})`);
        grad.addColorStop(1, `${b.color}${b.alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = b.lineWidth;
        ctx.beginPath();
        ctx.moveTo(b.x - b.length, b.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Glowing spark head
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.lineWidth * 1.1, 0, Math.PI * 2);
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
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F97316]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#FACC15]/6 blur-[160px] pointer-events-none" />
    </div>
  );
}

