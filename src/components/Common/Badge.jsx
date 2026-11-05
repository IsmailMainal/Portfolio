import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Editorial Technical Tag Badge.
 */
export default function Badge({
  children,
  variant = 'default',
  className = ''
}) {
  const styles = {
    default:
      'bg-black/[0.03] border border-[#E8E0D8] text-[#6E6A66] hover:text-[#242424] hover:border-[#D5CCC3] transition-colors',
    accent:
      'bg-[#E65639]/10 border border-[#E65639]/25 text-[#E65639]',
    subtle:
      'bg-black/[0.02] border border-transparent text-[#8C8681]'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-[11px] font-medium tracking-wide transition-colors',
        styles[variant] || styles.default,
        className
      )}
    >
      {children}
    </span>
  );
}
