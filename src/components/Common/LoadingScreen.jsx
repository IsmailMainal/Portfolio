import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium loading screen with a custom mountain outline drawing and progress percentage.
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether application is loading
 */
export default function LoadingScreen({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const duration = 1500; // 1.5s simulated loading
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-[#F8FAFC]"
        >
          {/* Logo / Silhouette */}
          <div className="relative mb-8 w-40 h-40 flex items-center justify-center">
            {/* SVG Mountain Outline */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-glow-accent stroke-current fill-none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M10 80 L35 40 L50 60 L75 25 L90 80 Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
                className="stroke-[#2D6A4F]"
              />
              <motion.path
                d="M30 80 L50 45 L65 65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.1, ease: 'easeInOut', delay: 0.1 }}
                className="stroke-[#84CC16]"
              />
            </svg>
          </div>

          {/* Progress Percentage */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-heading-space text-lg font-medium tracking-widest text-[#94A3B8]">
              {Math.round(progress)}%
            </span>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2D6A4F] to-[#84CC16]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}
              />
            </div>
            <span className="mt-4 text-xs font-mono tracking-wider uppercase text-white/40">
              Initializing Ecosystem
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
