import React, { useState, useRef } from 'react';
import { ChevronDown, ArrowRight, Download, Linkedin, Sparkles, Orbit, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../Common/Button';
import VesperOrbCanvas from './VesperOrbCanvas';

/**
 * Vesper Living Hero Section.
 * Implements GetLayers' signature breathing mint & violet reactive particle mind,
 * multi-mode canvas transformations (Orb -> Galaxy -> Brain), and high-end SaaS typography.
 */
export default function Hero() {
  const containerRef = useRef(null);
  const [activeMode, setActiveMode] = useState('orb'); // 'orb' | 'galaxy' | 'brain'

  const handleScrollClick = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      if (window.lenis) {
        window.lenis.scrollTo(nextSection, { offset: -80 });
      } else {
        const yOffset = -80;
        const y = nextSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const modeOptions = [
    { id: 'orb', label: 'Living Orb', icon: Sparkles },
    { id: 'galaxy', label: 'Spiral Galaxy', icon: Orbit },
    { id: 'brain', label: 'Neural Mind', icon: Brain },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#050507] vesper-grid-bg pt-20 pb-16"
    >
      {/* 3D Living Mind Canvas Layer (Molten Orange & Solar Yellow Particles) */}
      <VesperOrbCanvas currentMode={activeMode} />

      {/* Atmospheric Radial Shimmer Overlays */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050507]/50 to-[#050507] pointer-events-none z-1" />

      {/* Bottom Fog Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent pointer-events-none z-2" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
        {/* Vesper Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-4 sm:mb-6 shadow-[0_0_25px_-5px_rgba(249,115,22,0.25)] max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]" />
          </span>
          <span className="font-heading-space text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-[#F97316] uppercase truncate">
            Full Stack Developer • Bengaluru
          </span>
        </motion.div>

        {/* Hero Name with Holographic Glow */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading-sora text-4xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] font-black tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6"
        >
          <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]">
            Ismail
          </span>{' '}
          <span className="bg-gradient-to-r from-[#F97316] via-[#FBBF24] to-[#FACC15] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(249,115,22,0.45)]">
            Mainal
          </span>
        </motion.h1>

        {/* Hero Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl lg:max-w-3xl font-body text-sm sm:text-lg md:text-xl lg:text-2xl text-[#94A3B8] leading-relaxed mb-6 sm:mb-8 px-2"
        >
          Engineering high-performance, production-grade ERP and financial platforms with{' '}
          <span className="text-white font-medium">TypeScript</span>,{' '}
          <span className="text-white font-medium">React.js</span>,{' '}
          <span className="text-white font-medium">Next.js</span>,{' '}
          <span className="text-white font-medium">Node.js</span>, and{' '}
          <span className="text-[#F97316] font-medium">MySQL</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button onClick={handleScrollClick} variant="primary" className="w-full sm:w-auto">
            Explore Works <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="secondary"
            onClick={() => window.open(encodeURI('/Ismail Mainal — Full Stack Developer.pdf'), '_blank')}
            className="w-full sm:w-auto"
          >
            Download Resume <Download className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open('https://www.linkedin.com/in/ismail-mainal-187199215/', '_blank')}
            className="w-full sm:w-auto"
          >
            LinkedIn <Linkedin className="w-4 h-4 text-[#FACC15]" />
          </Button>
        </motion.div>

        {/* Interactive Vesper Core Controller (Switch between Orb, Galaxy, Brain) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-[#0C0D12]/85 border border-white/[0.08] backdrop-blur-xl max-w-full"
        >
          <span className="hidden sm:inline-block px-3 py-1 font-heading-space text-[11px] font-bold uppercase tracking-wider text-white/40">
            Vesper Core:
          </span>
          {modeOptions.map((opt) => {
            const Icon = opt.icon;
            const isActive = activeMode === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveMode(opt.id)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-heading-space font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F97316]/20 to-[#FACC15]/20 border border-[#F97316]/40 text-[#F97316] shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F97316]' : 'text-white/40'}`} />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.button
        onClick={handleScrollClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer text-white/40 hover:text-[#F97316] transition-colors focus:outline-none"
      >
        <span className="font-heading-space text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
