import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom Hook that initializes Lenis smooth scrolling.
 * Synchronizes ScrollTrigger scroll offsets with Lenis RAF updates.
 */
export function useLenis() {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    // Sync Lenis scroll events with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Link Lenis RAF to GSAP Ticker
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Expose lenis instance globally for scroll links
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerUpdate);
      window.lenis = null;
    };
  }, []);
}
