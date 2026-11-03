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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] text-[#F8FAFC]"
        >
          {/* Ambient Background Aura */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#F97316]/12 via-[#FACC15]/10 to-transparent blur-[120px] pointer-events-none" />

          {/* Vesper Orbital Synaptic Ring */}
          <div className="relative mb-8 w-28 h-28 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#F97316] shadow-[0_0_25px_rgba(249,115,22,0.5)]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute inset-2 rounded-full border-b-2 border-l-2 border-[#FACC15] shadow-[0_0_25px_rgba(250,204,21,0.5)]"
            />
            <div className="w-3.5 h-3.5 rounded-full bg-[#FACC15] shadow-[0_0_20px_#FACC15] animate-pulse" />
          </div>

          {/* Progress Percentage */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="font-heading-space text-lg font-bold tracking-widest bg-gradient-to-r from-[#F97316] to-[#FACC15] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              {Math.round(progress)}%
            </span>
            <div className="h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#F97316] via-[#FBBF24] to-[#FACC15] shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}
              />
            </div>
            <span className="mt-4 text-xs font-mono tracking-widest uppercase text-white/40 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F97316] animate-ping" />
              Initializing Cyber Interface
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
