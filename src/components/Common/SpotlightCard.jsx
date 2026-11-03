import React, { useRef, useState, useCallback } from 'react';
import { cn } from '../../utils/cn';

/**
 * Vesper Spotlight Card.
 * Renders an interactive glass surface where the card border and inner surface
 * dynamically illuminate with mint & violet light following the user's cursor.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 245, 160, 0.15)',
  borderColor = 'rgba(139, 92, 246, 0.35)',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative rounded-2xl border border-white/[0.08] bg-[#070B18]/70 backdrop-blur-xl transition-all duration-300 hover:border-transparent overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Outer Glow / Spotlight Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${borderColor}, rgba(0, 245, 160, 0.25), transparent 75%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Inner Radial Glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-1 h-full w-full">{children}</div>
    </div>
  );
}
