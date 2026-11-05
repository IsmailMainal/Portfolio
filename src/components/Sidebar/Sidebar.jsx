import React from 'react';
import { MapPin, Briefcase, Globe, Github, Linkedin, Mail } from 'lucide-react';
import { avatarImage, signatureImage } from '../../assets';

export default function Sidebar() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ismailmanyal3@gmail.com';
  };

  return (
    <aside className="w-full lg:w-[320px] xl:w-[350px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#E8E0D8] bg-[#FBF5EF] p-6 sm:p-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto z-20">
      <div className="space-y-6">
        {/* Profile Avatar matching Kozoriz */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-[#E8E0D8] bg-white shadow-2xs">
          <img
            src={avatarImage}
            alt="Ismail Mainal"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name & Title */}
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#242424] tracking-tight">
            Ismail Mainal
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A66] mt-1">
            Full Stack Developer
          </p>
        </div>

        {/* Bio Narrative */}
        <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed">
          One year spent engineering production ERP platforms and statutory compliance backends — building systems that carry real traffic, complex transactions, and keep their shape as they grow.
        </p>

        {/* Authentic Handwritten Signature */}
        <div className="py-1">
          <img
            src={signatureImage}
            alt="Ismail Mainal Signature"
            className="h-12 w-auto object-contain select-none"
            draggable="false"
          />
        </div>

        {/* Hairline Divider with Metadata List */}
        <div className="border-t border-[#E8E0D8] pt-5 space-y-3 text-xs text-[#6E6A66]">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#E65639] shrink-0" />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-3.5 h-3.5 text-[#E65639] shrink-0" />
            <span>1+ year of commercial experience</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Globe className="w-3.5 h-3.5 text-[#E65639] shrink-0" />
            <span>Full Stack & ERP Systems</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions & Socials */}
      <div className="pt-8 mt-6 border-t border-[#E8E0D8] space-y-4">
        {/* Social Icons */}
        <div className="flex items-center gap-3 text-[#6E6A66]">
          <a
            href="https://www.linkedin.com/in/ismail-mainal-187199215/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#242424] hover:bg-black/[0.04] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/IsmailMainal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#242424] hover:bg-black/[0.04] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:ismailmanyal3@gmail.com"
            className="p-2 rounded-lg hover:text-[#242424] hover:bg-black/[0.04] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Email Me Button */}
        <button
          onClick={handleEmailClick}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1A0A06] hover:bg-[#331B15] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer shadow-xs"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email Me</span>
        </button>
      </div>
    </aside>
  );
}
