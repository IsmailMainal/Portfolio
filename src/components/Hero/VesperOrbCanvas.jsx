import React, { useEffect, useRef } from 'react';

/**
 * Vesper Living Mind Canvas.
 * Implements the signature GetLayers Vesper aesthetic:
 * "A cloud of mint and violet light breathes as an orb, blows open into a spiral galaxy,
 * and gathers itself into a thinking brain — a dark, living interface that answers every move you make."
 *
 * Dynamically scales to fill large screens and ultra-wide displays with expansive volumetric geometry.
 */
export default function VesperOrbCanvas({ currentMode = 'orb' }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const stateRef = useRef({
    mode: currentMode,
    targetMode: currentMode,
    modeTransition: 1,
    particles: [],
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0, screenX: -1000, screenY: -1000, smoothScreenX: -1000, smoothScreenY: -1000, isHovering: false },
    rotation: { x: 0.15, y: 0, vx: 0.0012, vy: 0.0018 },
    time: 0,
    width: 0,
    height: 0,
    baseR: 520,
    dpr: 1,
  });

  useEffect(() => {
    if (stateRef.current.mode !== currentMode) {
      stateRef.current.targetMode = currentMode;
      stateRef.current.modeTransition = 0;
    }
  }, [currentMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = stateRef.current;

    // Generate particle targets scaled for big screens and mobile
    const initParticles = (w, h) => {
      const isMobile = w < 768;
      const isTablet = w >= 768 && w < 1200;
      const isWide = w >= 1200 && w < 1800;
      const isUltraWide = w >= 1800;

      // Responsive base radius that fits mobile screens and expands broadly on large displays
      let baseR;
      if (isMobile) {
        baseR = Math.min(w * 0.38, 150);
      } else if (isTablet) {
        baseR = Math.min(w * 0.38, 300);
      } else if (isWide) {
        baseR = Math.max(480, Math.min(w * 0.44, 640));
      } else if (isUltraWide) {
        baseR = Math.max(560, Math.min(w * 0.46, 800));
      } else {
        baseR = Math.max(420, Math.min(w * 0.42, 540));
      }
      state.baseR = baseR;

      // Particle density adapted for mobile (120 pts for 60 FPS) vs desktop (up to 880 pts)
      const numParticles = isMobile
        ? 120
        : Math.min(880, Math.max(480, Math.floor((w * h) / 1900)));
      const sizeMultiplier = isMobile ? 0.9 : isUltraWide ? 1.4 : isWide ? 1.25 : 1.0;

      const particles = [];

      for (let i = 0; i < numParticles; i++) {
        // --- 1. EXPANSIVE ORB DISTRIBUTION (Fibonacci Sphere with Volumetric Depth) ---
        const phi = Math.acos(1 - (2 * (i + 0.5)) / numParticles);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const orbRadius = baseR * (0.55 + 0.65 * Math.random());
        const orbX = orbRadius * Math.sin(phi) * Math.cos(theta);
        const orbY = orbRadius * Math.sin(phi) * Math.sin(theta);
        const orbZ = orbRadius * Math.cos(phi);

        // --- 2. VAST GALAXY SPIRAL DISTRIBUTION (Logarithmic Multi-Arm) ---
        const armIndex = i % 3;
        const armOffset = (armIndex * (Math.PI * 2)) / 3;
        const progress = i / numParticles;
        const spiralDist = baseR * 0.2 + progress * (baseR * 2.2);
        const spiralAngle = progress * Math.PI * 5 + armOffset;
        const spread = (Math.random() - 0.5) * (baseR * 0.45);
        const galaxyX = Math.cos(spiralAngle) * spiralDist + spread * 0.6;
        const galaxyY = (Math.random() - 0.5) * (baseR * 0.45);
        const galaxyZ = Math.sin(spiralAngle) * spiralDist + spread * 0.6;

        // --- 3. LARGE NEURAL BRAIN / SYNAPSE NETWORK (Hemispherical Lobes) ---
        const hemisphere = i % 2 === 0 ? 1 : -1;
        const u = Math.random();
        const v = Math.random();
        const brainTheta = u * 2.0 * Math.PI;
        const brainPhi = Math.acos(2.0 * v - 1.0);
        const lobeSpacing = baseR * 0.42;
        const brainR = baseR * (0.65 + 0.45 * Math.random());
        const rawX = brainR * Math.sin(brainPhi) * Math.cos(brainTheta);
        const rawY = brainR * Math.cos(brainPhi) * 0.88;
        const rawZ = brainR * Math.sin(brainPhi) * Math.sin(brainTheta) * 0.98;
        const brainX = rawX * 0.85 + hemisphere * lobeSpacing;
        const brainY = rawY;
        const brainZ = rawZ;

        // Professional aesthetic spectrum: Emerald Mint vs Tech Indigo vs Sky Cyan
        const colorType = Math.random();
        let color, glowColor;
        if (colorType < 0.52) {
          color = 'rgba(16, 185, 129, ';
          glowColor = '#10B981';
        } else if (colorType < 0.88) {
          color = 'rgba(99, 102, 241, ';
          glowColor = '#6366F1';
        } else {
          color = 'rgba(56, 189, 248, ';
          glowColor = '#38BDF8';
        }

        particles.push({
          x: orbX,
          y: orbY,
          z: orbZ,
          orb: { x: orbX, y: orbY, z: orbZ },
          galaxy: { x: galaxyX, y: galaxyY, z: galaxyZ },
          brain: { x: brainX, y: brainY, z: brainZ },
          size: (1.3 + Math.random() * 2.5) * sizeMultiplier,
          color,
          glowColor,
          pulseOffset: Math.random() * Math.PI * 2,
          pulseSpeed: 1.5 + Math.random() * 2,
        });
      }
      state.particles = particles;
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const isMobile = rect.width < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 2);

      state.width = rect.width;
      state.height = rect.height;
      state.dpr = dpr;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      initParticles(rect.width, rect.height);
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
        state.mouse.screenX = e.clientX - rect.left;
        state.mouse.screenY = e.clientY - rect.top;
        if (state.mouse.smoothScreenX === -1000) {
          state.mouse.smoothScreenX = state.mouse.screenX;
          state.mouse.smoothScreenY = state.mouse.screenY;
        }
        state.mouse.targetX = e.clientX - rect.left - state.width / 2;
        state.mouse.targetY = e.clientY - rect.top - state.height / 2;
        state.mouse.isHovering = true;
      } else {
        state.mouse.isHovering = false;
        state.mouse.targetX = 0;
        state.mouse.targetY = 0;
        state.mouse.screenX = -1000;
        state.mouse.screenY = -1000;
      }
    };

    const handlePointerLeave = () => {
      state.mouse.isHovering = false;
      state.mouse.targetX = 0;
      state.mouse.targetY = 0;
      state.mouse.screenX = -1000;
      state.mouse.screenY = -1000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    // Render loop
    const render = () => {
      state.time += 0.016;
      const { time, width, height, mouse, rotation, baseR } = state;
      if (width === 0 || height === 0) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse easing with reactive tilt
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      if (mouse.screenX !== -1000) {
        mouse.smoothScreenX += (mouse.screenX - mouse.smoothScreenX) * 0.08;
        mouse.smoothScreenY += (mouse.screenY - mouse.smoothScreenY) * 0.08;
      }

      const targetRotX = mouse.y * 0.00045 + 0.12;
      const targetRotY = mouse.x * 0.0006;
      rotation.x += (targetRotX - rotation.x) * 0.04;
      rotation.y += (targetRotY - rotation.y) * 0.04 + rotation.vy;

      // Mode Transition smoothing
      if (state.modeTransition < 1) {
        state.modeTransition = Math.min(1, state.modeTransition + 0.025);
        if (state.modeTransition === 1) {
          state.mode = state.targetMode;
        }
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = Math.max(550, baseR * 1.25);
      const cameraZ = baseR * 0.85;

      // Harmonic breathing factor
      const breath = 1 + 0.09 * Math.sin(time * 1.8);
      const rotCosX = Math.cos(rotation.x);
      const rotSinX = Math.sin(rotation.x);
      const rotCosY = Math.cos(rotation.y);
      const rotSinY = Math.sin(rotation.y);

      const projected = [];
      const curMode = state.mode;
      const tgtMode = state.targetMode;
      const tProgress = easeInOutCubic(state.modeTransition);

      for (let i = 0; i < state.particles.length; i++) {
        const p = state.particles[i];

        const fromPos = p[curMode] || p.orb;
        const toPos = p[tgtMode] || p.orb;

        let targetX = fromPos.x + (toPos.x - fromPos.x) * tProgress;
        let targetY = fromPos.y + (toPos.y - fromPos.y) * tProgress;
        let targetZ = fromPos.z + (toPos.z - fromPos.z) * tProgress;

        if (curMode === 'orb' || tgtMode === 'orb') {
          targetX *= breath;
          targetY *= breath;
          targetZ *= breath;
        }

        p.x += (targetX - p.x) * 0.055;
        p.y += (targetY - p.y) * 0.055;
        p.z += (targetZ - p.z) * 0.055;

        // 3D Rotation
        const x1 = p.x * rotCosY - p.z * rotSinY;
        const z1 = p.z * rotCosY + p.x * rotSinY;
        const y1 = p.y * rotCosX - z1 * rotSinX;
        const z2 = z1 * rotCosX + p.y * rotSinX;

        // Perspective projection
        const scale = fov / (fov + z2 + cameraZ);
        const px = cx + x1 * scale;
        const py = cy + y1 * scale;

        // Tactile screen-space cursor collision & displacement
        if (mouse.isHovering && mouse.screenX !== -1000) {
          const dx = px - mouse.smoothScreenX;
          const dy = py - mouse.smoothScreenY;
          const distSq = dx * dx + dy * dy;
          const hoverRadius = Math.max(160, baseR * 0.28);
          if (distSq < hoverRadius * hoverRadius && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / hoverRadius) * 28;
            p.x += ((dx / dist) * force) / scale;
            p.y += ((dy / dist) * force) / scale;
            p.z += (force * 0.5) / scale;
          }
        }

        const depthAlpha = Math.max(0.14, Math.min(1, (z2 + baseR * 0.75) / (baseR * 1.5)));
        const pulse = 0.82 + 0.28 * Math.sin(time * p.pulseSpeed + p.pulseOffset);

        projected.push({
          x: px,
          y: py,
          z: z2,
          scale,
          color: p.color,
          alpha: depthAlpha * pulse,
          size: Math.max(0.8, p.size * scale * pulse),
        });
      }

      projected.sort((a, b) => a.z - b.z);

      // --- DRAW SYNAPTIC NEURAL CONNECTIONS ---
      ctx.lineWidth = 0.85;
      const maxConnDist = (tgtMode === 'brain' || curMode === 'brain')
        ? Math.max(65, baseR * 0.17)
        : Math.max(48, baseR * 0.13);
      const maxConnDistSq = maxConnDist * maxConnDist;

      for (let i = 0; i < projected.length; i += 2) {
        const p1 = projected[i];
        if (p1.z < -baseR * 0.3) continue;

        for (let j = i + 1; j < Math.min(i + 14, projected.length); j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxConnDist) * 0.3 * p1.alpha * p2.alpha;
            if (lineAlpha > 0.02) {
              const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              gradient.addColorStop(0, `rgba(16, 185, 129, ${lineAlpha})`);
              gradient.addColorStop(1, `rgba(99, 102, 241, ${lineAlpha})`);

              ctx.strokeStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // --- DRAW GLOWING PARTICLES ---
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Inner glowing core
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // High intensity halo for prominent front particles
        if (p.alpha > 0.55 && p.scale > 0.75) {
          ctx.fillStyle = `${p.color}${p.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Volumetric Radial Glows (Responsive for Mobile & Desktop) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[650px] sm:h-[650px] lg:w-[1350px] lg:h-[1350px] 2xl:w-[1700px] 2xl:h-[1700px] rounded-full bg-gradient-to-tr from-[#10B981]/12 via-[#6366F1]/14 to-transparent blur-[80px] sm:blur-[140px] lg:blur-[220px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] lg:w-[750px] lg:h-[750px] rounded-full bg-[#10B981]/8 blur-[90px] lg:blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] lg:w-[850px] lg:h-[850px] rounded-full bg-[#6366F1]/10 blur-[90px] lg:blur-[160px] pointer-events-none" />
    </div>
  );
}
