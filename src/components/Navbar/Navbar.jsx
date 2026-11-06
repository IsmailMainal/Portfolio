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
    <nav className="sticky top-0 z-40 flex items-center justify-between py-2.5 sm:py-4 px-3 sm:px-8 lg:px-16 bg-[#FBF5EF]/95 backdrop-blur-md border-b border-[#E8E0D8]/60">
      {/* Left: Avatar Outline & Nav Links */}
      <div className="flex items-center gap-2 sm:gap-6 min-w-0">
        <button
          onClick={() => scrollTo('about')}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#E65639] flex items-center justify-center text-[#E65639] hover:bg-[#E65639]/10 transition-colors cursor-pointer shrink-0"
          title="About Ismail"
          aria-label="About Ismail"
        >
          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75]" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-5 text-xs sm:text-sm font-medium text-[#6E6A66] shrink-0">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#242424] transition-colors cursor-pointer px-1 py-0.5"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="hover:text-[#242424] transition-colors cursor-pointer px-1 py-0.5"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="hover:text-[#242424] transition-colors cursor-pointer px-1 py-0.5"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-[#242424] transition-colors cursor-pointer px-1 py-0.5"
          >
            Work
          </button>
        </div>
      </div>

      {/* Right: Contact Me Button */}
      <button
        onClick={() => scrollTo('contact')}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#1A0A06] hover:bg-[#331B15] text-white text-xs font-medium transition-colors cursor-pointer shadow-xs shrink-0 ml-1.5"
        aria-label="Contact Me"
      >
        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden min-[380px]:inline">Contact</span>
        <span className="hidden sm:inline"> Me</span>
      </button>
    </nav>
  );
}
