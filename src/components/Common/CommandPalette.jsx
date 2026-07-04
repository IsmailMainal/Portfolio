import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, ArrowRight, Eye, RefreshCw, Github, Linkedin, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium Command Palette (Ctrl+K / Cmd+K).
 * Allows keyboard-based navigation and quick operations.
 * @param {Object} props
 * @param {string} props.theme - 'dark' | 'light'
 * @param {function} props.toggleTheme - Toggle theme function
 */
export default function CommandPalette({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Command items definition
  const commands = [
    { id: 'nav-home', title: 'Go to Home', subtitle: 'Navigate to base camp', icon: ArrowRight, action: () => scrollToSection('home') },
    { id: 'nav-about', title: 'Go to About', subtitle: 'Read biography & stats', icon: ArrowRight, action: () => scrollToSection('about') },
    { id: 'nav-journey', title: 'Go to Journey', subtitle: 'View vertical hiking trail timeline', icon: ArrowRight, action: () => scrollToSection('journey') },
    { id: 'nav-projects', title: 'Go to Projects', subtitle: 'Inspect developer projects', icon: ArrowRight, action: () => scrollToSection('projects') },
    { id: 'nav-skills', title: 'Go to Skills', subtitle: 'Analyze technical competencies', icon: ArrowRight, action: () => scrollToSection('skills') },
    { id: 'nav-contact', title: 'Go to Contact', subtitle: 'Send a message', icon: ArrowRight, action: () => scrollToSection('contact') },
    { id: 'cmd-theme', title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, subtitle: 'Toggle color palette', icon: RefreshCw, action: () => { toggleTheme(); setIsOpen(false); } },
    { id: 'cmd-resume', title: 'View Resume', subtitle: 'Open developer CV (PDF)', icon: FileText, action: () => { window.open('/Ismail_Mainal_Resume_ATS.pdf', '_blank'); setIsOpen(false); } },
    { id: 'link-github', title: 'Open GitHub Profile', subtitle: 'View source code & activity', icon: Github, action: () => { window.open('https://github.com/IsmailMainal', '_blank'); setIsOpen(false); } },
    { id: 'link-linkedin', title: 'Open LinkedIn', subtitle: 'Connect on professional network', icon: Linkedin, action: () => { window.open('https://www.linkedin.com/in/ismail-mainal-187199215/', '_blank'); setIsOpen(false); } },
  ];

  // Filter commands by search
  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle command palette on Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      setSearch('');
    }
  }, [isOpen]);

  // Handle arrow navigation
  useEffect(() => {
    const handleNavigation = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleNavigation);
    return () => window.removeEventListener('keydown', handleNavigation);
  }, [isOpen, selectedIndex, filteredCommands]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Actual Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#0B1120]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5">
                <Search className="w-5 h-5 text-white/40" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent font-body text-sm text-[#F8FAFC] placeholder-white/35 focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded border border-white/10 px-1.5 py-0.5 text-[10px] font-mono text-white/40 hover:text-[#F8FAFC]"
                >
                  ESC
                </button>
              </div>

              {/* Commands List */}
              <div
                ref={listRef}
                className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => {
                    const Icon = cmd.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all ${
                          isSelected
                            ? 'bg-[#2D6A4F]/20 text-[#84CC16] border border-[#2D6A4F]/30'
                            : 'text-white/80 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-md ${isSelected ? 'bg-[#2D6A4F]/30 text-[#84CC16]' : 'bg-white/5 text-white/50'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{cmd.title}</div>
                            <div className={`text-xs ${isSelected ? 'text-white/60' : 'text-white/45'}`}>
                              {cmd.subtitle}
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="flex items-center gap-1 text-[10px] font-mono text-[#84CC16]">
                            <span>Select</span>
                            <kbd className="rounded bg-[#2D6A4F]/40 px-1 py-0.5">Enter</kbd>
                          </div>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center text-white/40">
                    <Eye className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-sm">No results matching &ldquo;{search}&rdquo;</p>
                  </div>
                )}
              </div>

              {/* Footer status bar */}
              <div className="flex items-center justify-between border-t border-white/8 bg-black/20 px-4 py-2 text-[10px] font-mono text-white/30">
                <div className="flex items-center gap-3">
                  <span>↑↓ Navigate</span>
                  <span>Enter Select</span>
                </div>
                <span>Ismail Mainal OS</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
