import React from 'react';
import { ArrowRight, Server, Database, Code2 } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -30 });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 30;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="py-12 sm:py-16 flex flex-col items-center text-center border-b border-[#E8E0D8]/60 mb-16">
      {/* Hand-drawn style Developer Illustration in Terracotta #E65639 */}
      <div className="w-36 h-36 sm:w-44 sm:h-44 mb-8 text-[#E65639]">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Idea sparks / rays */}
          <path d="M40 70 L25 65 M50 45 L38 35 M160 70 L175 65 M150 45 L162 35 M100 25 L100 12" />
          <path d="M45 105 L30 110 M155 105 L170 110" />

          {/* Character head & hair */}
          <circle cx="100" cy="65" r="16" />
          <path d="M86 58 C 88 50, 96 48, 102 50 C 108 48, 114 52, 114 58" />
          {/* Glasses */}
          <rect x="91" y="62" width="7" height="6" rx="1.5" />
          <rect x="102" y="62" width="7" height="6" rx="1.5" />
          <line x1="98" y1="65" x2="102" y2="65" />

          {/* Body & Arms */}
          <path d="M86 85 C 80 95, 75 110, 75 125 L125 125 C 125 110, 120 95, 114 85 Z" fill="#E65639" fillOpacity="0.85" />
          <path d="M78 95 L90 120 M122 95 L110 120" />

          {/* Laptop */}
          <rect x="76" y="115" width="48" height="28" rx="3" fill="#FBF5EF" stroke="#E65639" strokeWidth="2" />
          <line x1="68" y1="143" x2="132" y2="143" strokeWidth="2.5" />
          {/* Code symbol on screen */}
          <path d="M94 125 L88 129 L94 133 M106 125 L112 129 L106 133" strokeWidth="1.5" />

          {/* Crossed legs / seated posture */}
          <path d="M70 145 C 70 160, 90 165, 100 165 C 110 165, 130 160, 130 145" fill="#E65639" fillOpacity="0.85" />
          <path d="M60 152 C 75 160, 95 162, 100 162 C 105 162, 125 160, 140 152" />
        </svg>
      </div>

      {/* Main Serif Headline */}
      <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#242424] tracking-tight mb-4">
        Full Stack Developer
      </h2>

      {/* Subtitle */}
      <p className="max-w-xl text-sm sm:text-base text-[#6E6A66] leading-relaxed mb-8">
        One year of React, Node.js and MySQL — from production ERP modules to statutory tax compliance gateways and cloud backends.
      </p>

      {/* View Experience Button */}
      <button
        onClick={() => scrollTo('experience')}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-[#ECE5DD] hover:bg-[#E4DCD3] text-[#242424] text-xs font-medium transition-colors cursor-pointer shadow-2xs"
      >
        <div className="flex items-center gap-1 text-[#E65639]">
          <Code2 className="w-3.5 h-3.5" />
          <Server className="w-3.5 h-3.5" />
          <Database className="w-3.5 h-3.5" />
        </div>
        <span>View Experience</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#6E6A66]" />
      </button>
    </section>
  );
}
