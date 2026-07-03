import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Technical Tag Badge.
 * @param {Object} props
 * @param {string} props.children - Text content
 * @param {string} props.variant - 'default' | 'accent' | 'highlight'
 * @param {string} props.className - Custom styles
 */
export default function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const styles = {
    default: 'bg-white/5 border border-white/8 text-[#94A3B8]',
    accent: 'bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 text-[#84CC16]',
    highlight: 'bg-[#84CC16]/10 border border-[#84CC16]/30 text-[#84CC16]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full font-code text-xs font-medium tracking-wide',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
