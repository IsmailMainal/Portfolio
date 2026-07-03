import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Reusable Glassmorphism Card with micro-interactions.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card contents
 * @param {string} props.className - Custom styles
 * @param {boolean} props.glow - Show custom hover glow
 * @param {boolean} props.hoverEffect - Apply scale/color transitions
 */
export default function GlassCard({
  children,
  className = '',
  glow = false,
  hoverEffect = true,
  ...rest
}) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        hoverEffect && 'glass-hover',
        glow && 'card-glow-green',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
