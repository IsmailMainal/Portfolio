import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Sun/Moon icon theme switcher toggle button with micro-animations.
 * @param {Object} props
 * @param {string} props.theme - 'dark' | 'light'
 * @param {function} props.toggleTheme - Toggle theme function
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-between w-14 h-8 rounded-full border border-white/8 glass bg-black/10 p-1 cursor-pointer select-none overflow-hidden"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sliding background pill */}
      <motion.div
        className="absolute top-1 bottom-1 w-6 h-6 rounded-full bg-[#84CC16] shadow-[0_0_12px_rgba(132,204,22,0.4)] z-0"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Sun icon */}
      <div className="relative z-10 flex items-center justify-center w-6 h-6">
        <Sun className={`w-3.5 h-3.5 transition-colors duration-300 ${!isDark ? 'text-[#0B1120]' : 'text-[#94A3B8]'}`} />
      </div>

      {/* Moon icon */}
      <div className="relative z-10 flex items-center justify-center w-6 h-6">
        <Moon className={`w-3.5 h-3.5 transition-colors duration-300 ${isDark ? 'text-[#0B1120]' : 'text-[#475569]'}`} />
      </div>
    </motion.div>
  );
}
