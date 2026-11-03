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
    default: 'bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:border-[#F97316]/30 hover:text-white transition-colors',
    accent: 'bg-[#F97316]/12 border border-[#F97316]/30 text-[#FB923C]',
    highlight: 'bg-[#FACC15]/12 border border-[#FACC15]/30 text-[#FACC15]',
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
