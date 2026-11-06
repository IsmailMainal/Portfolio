import React, { useState } from 'react';
import { MessageSquare, User } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (id === 'profile-top') {
      if (window.innerWidth < 1024) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      id = 'about';
    }
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
    <nav className="bg-[#FBF5EF]/95 backdrop-blur-md border-b border-[#E8E0D8]/60">
      <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-8 lg:px-16">
        {/* Left: User Avatar Outline */}
        <div className="flex items-center gap-6 min-w-0">
          <button
            onClick={() => scrollTo('profile-top')}
            className="w-8 h-8 rounded-full border border-[#E65639] flex items-center justify-center text-[#E65639] hover:bg-[#E65639]/10 transition-colors cursor-pointer shrink-0"
            title="About Ismail"
            aria-label="About Ismail"
          >
            <User className="w-4 h-4 stroke-[1.75]" />
          </button>

          {/* Desktop Nav Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-[#6E6A66]">
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

        {/* Right Desktop: Contact Me Button */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A0A06] hover:bg-[#331B15] text-white text-xs font-medium transition-colors cursor-pointer shadow-xs shrink-0"
          aria-label="Contact Me"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>Contact Me</span>
        </button>

        {/* Right Mobile: 2-line Hamburger Menu matching Kozoriz */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-[#242424] cursor-pointer p-1"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block h-[1.75px] w-5 bg-[#242424] rounded-full transition-transform duration-200 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[3.75px]' : ''
            }`}
          />
          <span
            className={`block h-[1.75px] w-5 bg-[#242424] rounded-full transition-transform duration-200 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown matching Kozoriz */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E0D8] bg-[#FBF5EF] px-5 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2 text-sm font-medium text-[#242424] hover:text-[#E65639] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="block w-full text-left py-2 text-sm font-medium text-[#242424] hover:text-[#E65639] transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="block w-full text-left py-2 text-sm font-medium text-[#242424] hover:text-[#E65639] transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('work')}
            className="block w-full text-left py-2 text-sm font-medium text-[#242424] hover:text-[#E65639] transition-colors"
          >
            Work
          </button>
          <div className="pt-2 border-t border-[#E8E0D8]/60">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1A0A06] text-white text-xs font-medium hover:bg-[#331B15] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
