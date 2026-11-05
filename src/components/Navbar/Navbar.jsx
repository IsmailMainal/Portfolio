import React from 'react';
import { MessageSquare, User } from 'lucide-react';

export default function Navbar() {
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
    <nav className="sticky top-0 z-30 flex items-center justify-between py-4 px-6 sm:px-10 lg:px-16 bg-[#FBF5EF]/95 backdrop-blur-md border-b border-[#E8E0D8]/60">
      {/* Left: Avatar Outline & Nav Links */}
      <div className="flex items-center gap-5 sm:gap-7">
        <button
          onClick={() => scrollTo('about')}
          className="w-8 h-8 rounded-full border border-[#E65639] flex items-center justify-center text-[#E65639] hover:bg-[#E65639]/10 transition-colors cursor-pointer"
          title="About Ismail"
          aria-label="About Ismail"
        >
          <User className="w-4 h-4 stroke-[1.75]" />
        </button>

        <div className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-[#6E6A66]">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#242424] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-[#242424] transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-[#242424] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-[#242424] transition-colors cursor-pointer"
          >
            Work
          </button>
        </div>
      </div>

      {/* Right: Contact Me Button */}
      <button
        onClick={() => scrollTo('contact')}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A0A06] hover:bg-[#331B15] text-white text-xs font-medium transition-colors cursor-pointer shadow-xs"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>Contact Me</span>
      </button>
    </nav>
  );
}
