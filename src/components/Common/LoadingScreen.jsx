import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Vesper Living Core Initializer Loader.
 * Features a glowing mint & violet orbital ring and progress telemetry.
 */
export default function LoadingScreen({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const duration = 1200;
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-[#F8FAFC]"
        >
          {/* Vesper Orbital Synaptic Ring */}
          <div className="relative mb-8 w-28 h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#00F5A0] shadow-[0_0_20px_rgba(0,245,160,0.4)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute inset-2 rounded-full border-b-2 border-l-2 border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            />
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#fff] animate-pulse" />
          </div>

          {/* Progress Percentage */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-heading-space text-lg font-bold tracking-widest bg-gradient-to-r from-[#00F5A0] to-[#8B5CF6] bg-clip-text text-transparent">
              {Math.round(progress)}%
            </span>
            <div className="h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00F5A0] via-[#38BDF8] to-[#8B5CF6]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}
              />
            </div>
            <span className="mt-4 text-xs font-mono tracking-widest uppercase text-white/40">
              Activating Vesper Interface
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
