import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-12 pb-16 mt-12 border-t border-[#E8E0D8] text-[#6E6A66]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#E8E0D8]/60">
        {/* Brand info */}
        <div className="space-y-1">
          <div className="font-serif text-lg text-[#242424] tracking-tight">
            Ismail Mainal
          </div>
          <p className="text-xs text-[#6E6A66]">
            Full Stack Developer • Enterprise ERP & Web Systems
          </p>
        </div>

        {/* Social Profiles & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/IsmailMainal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#242424] hover:bg-black/[0.04] transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-mainal-187199215/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#242424] hover:bg-black/[0.04] transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:ismailmanyal3@gmail.com"
            className="p-2 rounded-lg hover:text-[#242424] hover:bg-black/[0.04] transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E0D8] bg-white hover:bg-[#ECE5DD] text-xs font-mono text-[#6E6A66] hover:text-[#242424] transition-colors cursor-pointer ml-2 shadow-2xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8C8681]">
        <div>
          &copy; {currentYear} Ismail Mainal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
