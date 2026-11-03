import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '../../hooks/useMagneticButton';
import { cn } from '../../utils/cn';

/**
 * Vesper Magnetic Shimmer Button.
 * Features an illuminated gradient border, frosted glass body, and spring micro-interactions.
 */
export default function Button({
  children,
  className = '',
  variant = 'primary',
  magnetic = true,
  onClick,
  ...rest
}) {
  const [ripples, setRipples] = useState([]);
  const magneticRef = useMagneticButton();

  // Create standard ripple nodes on click
  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const variants = {
    primary:
      'relative bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#FACC15] text-[#050507] font-bold shadow-lg shadow-[#F97316]/25 hover:shadow-[#F97316]/40 border-0 hover:scale-[1.02]',
    secondary:
      'bg-[#0C0D12]/85 text-[#F8FAFC] hover:bg-[#161822] border border-white/10 hover:border-[#F97316]/40 shadow-md shadow-black/40',
    outline:
      'bg-transparent border border-white/15 hover:border-[#F97316]/60 text-[#F8FAFC] hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]',
    ghost:
      'bg-transparent text-[#94A3B8] hover:text-[#F97316] hover:bg-white/5',
  };

  return (
    <motion.button
      ref={magnetic ? magneticRef : null}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group relative overflow-hidden rounded-full px-6 py-3 font-heading-space text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#050507] cursor-pointer inline-flex items-center justify-center gap-2 backdrop-blur-md',
        variants[variant],
        className
      )}
      {...rest}
    >
      {/* Subtle Inner Glow on Hover for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* Ripples container */}
      <span className="absolute inset-0 pointer-events-none overflow-hidden">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
              transform: 'scale(0)',
              animation: 'ripple 0.6s linear',
            }}
          />
        ))}
      </span>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      <style>{`
        @keyframes ripple {
          to {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </motion.button>
  );
}
