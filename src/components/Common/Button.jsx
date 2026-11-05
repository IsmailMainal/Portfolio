import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Editorial Button Component.
 * Styled after Kozoriz: deep espresso `#1A0A06` or terracotta `#E65639` on warm cream.
 */
export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65639] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF5EF]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full',
    md: 'text-sm px-5 py-2.5 rounded-full',
    lg: 'text-base px-7 py-3 rounded-full'
  };

  const variants = {
    primary:
      'bg-[#1A0A06] text-white font-semibold hover:bg-[#331B15] shadow-sm',
    accent:
      'bg-[#E65639] text-white font-semibold hover:bg-[#D4492D] shadow-sm',
    secondary:
      'bg-white text-[#242424] border border-[#E8E0D8] hover:border-[#D5CCC3] hover:bg-[#F3ECE3]',
    outline:
      'bg-transparent text-[#242424] border border-[#E8E0D8] hover:border-[#242424] hover:bg-black/[0.03]',
    ghost:
      'bg-transparent text-[#6E6A66] hover:text-[#242424] hover:bg-black/[0.04]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
