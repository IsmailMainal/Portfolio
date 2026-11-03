import React, { useEffect, useState } from 'react';

/**
 * Vesper Interactive Cursor Glow.
 * Casts a soft, breathing mint and violet chromatic aura that smoothly follows the cursor.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* Vesper Dual Emerald & Indigo chromatic aura */}
      <div
        className="absolute w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#10B981]/10 via-[#6366F1]/10 to-transparent blur-[100px] transition-opacity duration-500 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x - 230}px, ${position.y - 230}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
