import React, { useEffect, useRef } from 'react';

/**
 * SynapseLatticeCanvas (for About Section - "Engineering with Intention").
 * Visual Concept: Architectural Software Lattice & Synaptic Data Streams.
 * Represents system architecture, structured data flows, and precision engineering.
 * Pauses when scrolled out of viewport for optimal performance.
 */
export default function SynapseLatticeCanvas() {
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

    // Viewport intersection observer to pause rendering when off-screen
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

    // Lattice nodes configuration
    let nodes = [];
    let pulses = [];

    const initGrid = (w, h) => {
      nodes = [];
      pulses = [];

      const isMobile = w < 768;
      const cols = isMobile ? Math.max(5, Math.floor(w / 130)) : Math.max(10, Math.floor(w / 120));
      const rows = isMobile ? Math.max(4, Math.floor(h / 140)) : Math.max(6, Math.floor(h / 120));
      const spacingX = w / cols;
      const spacingY = h / rows;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const baseX = c * spacingX;
          const baseY = r * spacingY;
          // Add organic offset
          const offsetX = (Math.random() - 0.5) * spacingX * 0.45;
          const offsetY = (Math.random() - 0.5) * spacingY * 0.45;

          const isMint = Math.random() < 0.55;

          nodes.push({
            x: baseX + offsetX,
            y: baseY + offsetY,
            baseX: baseX + offsetX,
            baseY: baseY + offsetY,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: 1.5 + Math.random() * 2.2,
            color: isMint ? 'rgba(16, 185, 129, ' : 'rgba(99, 102, 241, ',
            pulseOffset: Math.random() * Math.PI * 2,
            neighbors: [],
          });
        }
      }

      // Pre-compute neighbor connections
      const maxDist = spacingX * 1.5;
      const maxDistSq = maxDist * maxDist;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            nodes[i].neighbors.push({ index: j, dist: Math.sqrt(distSq) });
          }
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

      initGrid(width, height);
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

      time += 0.018;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Spawn periodic data pulses
      if (Math.random() < 0.04 && nodes.length > 0) {
        const startNodeIdx = Math.floor(Math.random() * nodes.length);
        const startNode = nodes[startNodeIdx];
        if (startNode.neighbors.length > 0) {
          const targetNeighbor = startNode.neighbors[Math.floor(Math.random() * startNode.neighbors.length)];
          pulses.push({
            fromX: startNode.x,
            fromY: startNode.y,
            toX: nodes[targetNeighbor.index].x,
            toY: nodes[targetNeighbor.index].y,
            progress: 0,
            speed: 0.02 + Math.random() * 0.02,
            color: Math.random() < 0.5 ? '#10B981' : '#6366F1',
          });
        }
      }

      // Update nodes positions with floating oscillation + mouse repulsion
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x = n.baseX + Math.sin(time * 1.2 + n.pulseOffset) * 12;
        n.y = n.baseY + Math.cos(time * 0.9 + n.pulseOffset) * 12;

        if (mouse.isHovering) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 200;
          if (distSq < maxDist * maxDist && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / maxDist) * 35;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }
      }

      // Draw connection lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = 0; j < n1.neighbors.length; j++) {
          const neighbor = n1.neighbors[j];
          const n2 = nodes[neighbor.index];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 180;
          if (dist < maxDist) {
            let lineAlpha = (1 - dist / maxDist) * 0.16;

            // Highlight line if near mouse
            if (mouse.isHovering) {
              const midX = (n1.x + n2.x) / 2;
              const midY = (n1.y + n2.y) / 2;
              const mouseDist = Math.hypot(midX - mouse.x, midY - mouse.y);
              if (mouseDist < 160) {
                lineAlpha += (1 - mouseDist / 160) * 0.25;
              }
            }

            if (lineAlpha > 0.02) {
              const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
              grad.addColorStop(0, `rgba(16, 185, 129, ${lineAlpha})`);
              grad.addColorStop(1, `rgba(99, 102, 241, ${lineAlpha})`);

              ctx.strokeStyle = grad;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw traveling data pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const px = p.fromX + (p.toX - p.fromX) * p.progress;
        const py = p.fromY + (p.toY - p.fromY) * p.progress;

        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw lattice node points
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = 0.8 + 0.3 * Math.sin(time * 2 + n.pulseOffset);

        ctx.fillStyle = `${n.color}${pulse * 0.85})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * pulse, 0, Math.PI * 2);
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
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#10B981]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#6366F1]/7 blur-[160px] pointer-events-none" />
    </div>
  );
}

