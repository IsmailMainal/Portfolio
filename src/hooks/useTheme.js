import { useState, useEffect } from 'react';

/**
 * Custom Hook for managing dark/light theme state and persistence.
 * @returns {[string, function]} Current theme and toggleTheme function
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      // Default to dark theme
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.body;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
}
