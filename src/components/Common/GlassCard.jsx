import React, { useRef, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';

/**
 * Reusable Vesper Glassmorphism Card with cursor-tracking spotlight and border illumination.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card contents
 * @param {string} props.className - Custom styles
 * @param {boolean} props.glow - Show custom hover glow
 * @param {boolean} props.hoverEffect - Apply scale/color transitions
 * @param {boolean} props.spotlight - Enable cursor-following spotlight
 */
export default function GlassCard({
  children,
  className = '',
  glow = false,
  hoverEffect = true,
  spotlight = true,
  ...rest
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !spotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [spotlight]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative rounded-2xl p-6 transition-all duration-300 overflow-hidden',
        'bg-[#0C0D12]/85 backdrop-blur-xl border border-white/[0.08]',
        hoverEffect && 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F97316]/10',
        glow && 'shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)]',
        className
      )}
      {...rest}
    >
      {/* Dynamic Cursor Spotlight Border Reveal */}
      {spotlight && (
        <>
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
            style={{
              background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.42), rgba(250, 204, 21, 0.32), transparent 75%)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
            style={{
              background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.07), rgba(250, 204, 21, 0.05), transparent 60%)`,
            }}
          />
        </>
      )}

      {/* Card Content */}
      <div className="relative z-1 h-full w-full">{children}</div>
    </div>
  );
}
