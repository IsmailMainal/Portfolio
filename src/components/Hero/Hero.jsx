import React from 'react';
import { ArrowRight, Server, Database, Code2 } from 'lucide-react';
import { heroDeveloperImage } from '../../assets';

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
    <section id="hero" className="py-8 sm:py-10 flex flex-col items-center text-center border-b border-[#E8E0D8]/60">
      {/* Official Kozoriz Developer Illustration */}
      <div className="w-[290px] sm:w-[380px] md:w-[440px] max-w-[85vw] h-auto mb-6 flex items-center justify-center">
        <img
          src={heroDeveloperImage}
          alt="Full Stack Developer"
          className="w-full h-auto object-contain select-none"
          draggable="false"
        />
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
