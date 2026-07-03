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
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/8 glass hover:border-white/20 text-[#F8FAFC] dark:text-[#F8FAFC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#84CC16]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-[#94A3B8] hover:text-[#F8FAFC]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-[#84CC16]" />
      </motion.div>
    </motion.button>
  );
}
