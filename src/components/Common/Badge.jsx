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
    default: 'bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:border-[#10B981]/30 hover:text-white transition-colors',
    accent: 'bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]',
    highlight: 'bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1]',
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
