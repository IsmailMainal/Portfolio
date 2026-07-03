import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Top fixed scroll progress indicator.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#2D6A4F] via-[#84CC16] to-[#2D6A4F] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
