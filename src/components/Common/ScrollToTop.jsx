import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating Scroll-To-Top button.
 * Appears when scrolling past 400px, executes smooth scrolling to top.
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // If Lenis is active, it handles window.scrollTo smoothly.
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0C0D12]/85 backdrop-blur-xl hover:border-[#F97316]/40 text-[#F97316] shadow-lg shadow-black/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 hover:-translate-y-[2px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
