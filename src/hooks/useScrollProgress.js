import { useState, useEffect } from 'react';

/**
 * Custom Hook for tracking the user's scroll progress (percentage).
 * @returns {number} Scroll progress from 0 to 100
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight === 0) {
        setProgress(0);
        return;
      }
      const scrollPercent = (window.scrollY / totalHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
}
