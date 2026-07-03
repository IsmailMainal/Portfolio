import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '../../hooks/useMagneticButton';
import { cn } from '../../utils/cn';

/**
 * Premium Magnetic Button with custom ripple click effect.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label / elements
 * @param {string} props.className - Custom styles
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {boolean} props.magnetic - Enable magnetic pull
 * @param {function} props.onClick - Click handler
 * @param {Object} props.rest - Other standard button props
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

    // Clean up ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const variants = {
    primary: 'bg-[#2D6A4F] text-[#F8FAFC] hover:bg-[#1B4332] shadow-lg shadow-[#2D6A4F]/10 border border-[#2D6A4F]/20',
    secondary: 'bg-[#111827] text-[#F8FAFC] hover:bg-white/5 border border-white/8',
    outline: 'bg-transparent border border-white/10 hover:border-white/20 text-[#F8FAFC]',
    ghost: 'bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5',
  };

  return (
    <motion.button
      ref={magnetic ? magneticRef : null}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative overflow-hidden rounded-full px-6 py-3 font-heading-space text-sm font-medium tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-[#84CC16] focus:ring-offset-2 focus:ring-offset-[#0B1120] cursor-pointer inline-flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...rest}
    >
      {/* Ripples container */}
      <span className="absolute inset-0 pointer-events-none overflow-hidden">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/25 rounded-full animate-ping pointer-events-none"
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

      {/* CSS style injected directly for ripples */}
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
