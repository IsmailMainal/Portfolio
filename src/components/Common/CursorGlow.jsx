import React, { useEffect, useState } from 'react';

/**
 * Interactive cursor glow follower.
 * Tracks pointer coordinates and moves a blurry accent spotlight behind content.
 * Disabled on touch screens for accessibility and performance.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);

    if (touchCheck) return;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smooth drawing
      window.requestAnimationFrame(() => {
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
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#2D6A4F]/10 to-[#84CC16]/5 blur-[80px] transition-opacity duration-500 ease-out"
        style={{
          transform: `translate3d(${position.x - 200}px, ${position.y - 200}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
