import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Top fixed scroll progress indicator with Vesper holographic glow.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-white/[0.04]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#6366F1] shadow-[0_0_12px_rgba(16,185,129,0.7)] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
