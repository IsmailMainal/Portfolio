import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../Common/ThemeToggle';
import CommandPalette from '../Common/CommandPalette';
import { cn } from '../../utils/cn';

/**
 * Sticky Glassmorphism Header with Active Indicator and Responsive Drawer.
 */
export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Journey', id: 'journey' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  // Track scrolling to toggle glass background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const observers = [];
    const elements = navItems.map((item) => document.getElementById(item.id));

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the middle of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        const yOffset = -80; // Offset for sticky navbar
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 border-b border-transparent',
        isScrolled
          ? 'bg-[#0B1120]/75 dark:bg-[#0B1120]/75 backdrop-blur-md border-white/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group font-heading-space text-lg font-bold tracking-wider text-[#F8FAFC] cursor-pointer"
        >
          <Compass className="w-5 h-5 text-[#84CC16] group-hover:rotate-45 transition-transform duration-500" />
          <span>
            ISMAIL<span className="text-[#84CC16]">.</span>M
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'relative py-1 text-sm font-heading-space font-medium tracking-wider transition-colors cursor-pointer',
                    activeSection === item.id
                      ? 'text-[#84CC16]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2D6A4F] to-[#84CC16]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Toolbar (Mobile Burger) */}
        <div className="flex items-center gap-3">

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full border border-white/8 glass text-[#F8FAFC]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 w-full glass border-b border-white/10 overflow-hidden"
          >
            <nav className="px-6 py-8 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        'w-full text-left py-2 font-heading-space text-lg font-semibold tracking-wider',
                        activeSection === item.id ? 'text-[#84CC16]' : 'text-[#94A3B8]'
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
