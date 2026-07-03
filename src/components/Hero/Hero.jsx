import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Download, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../Common/Button';
import heroMountainImage from '../../assets/hero_mountain.png';

/**
 * 100vh Premium Hero Section.
 * Implements GSAP ScrollTrigger Parallax, floating cloud arrays, and interactive CTAs.
 */
export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Mountain moves slower than content (Parallax)
    tl.to(bgRef.current, { yPercent: 20, ease: 'none' }, 0);
    // Cloud 1 moves right and faster
    tl.to(cloud1Ref.current, { xPercent: 30, yPercent: -10, ease: 'none' }, 0);
    // Cloud 2 moves left
    tl.to(cloud2Ref.current, { xPercent: -20, yPercent: 5, ease: 'none' }, 0);
    // Content fades out and moves up
    tl.to(contentRef.current, { opacity: 0.3, yPercent: -15, ease: 'none' }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

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

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0B1120]"
    >
      {/* Background Image Layer with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${heroMountainImage})`,
        }}
      />

      {/* Dark & Soft Fog Overlays */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0B1120]/40 via-[#0B1120]/65 to-[#0B1120] pointer-events-none" />
      
      {/* Floating Cloud 1 (Left to Right, subtle blur) */}
      <div
        ref={cloud1Ref}
        className="absolute top-1/4 left-[-10%] w-[50%] h-32 bg-white/5 rounded-full blur-[70px] pointer-events-none z-1 animate-float"
      />

      {/* Floating Cloud 2 (Right to Left, slower float) */}
      <div
        ref={cloud2Ref}
        className="absolute top-1/2 right-[-10%] w-[60%] h-40 bg-white/4 rounded-full blur-[90px] pointer-events-none z-1 animate-float-slow"
      />

      {/* Bottom fog gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none z-2" />

      {/* Content Layer */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col items-center mt-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading-space text-sm font-semibold tracking-[0.2em] text-[#84CC16] uppercase mb-4"
        >
          🌲 Full Stack Software Engineer • Bengaluru, India
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading-sora text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-[#F8FAFC] leading-none mb-6"
        >
          Ismail Mainal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl font-body text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-10"
        >
          Building transactional ERP applications and high-performance backends. Lead architect of BillKar, delivering a 35% API latency reduction while processing 500+ daily financial operations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button onClick={() => handleScrollClick()} variant="primary">
            View Projects <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary" onClick={() => window.open('/Ismail_Mainal_Resume_ATS.pdf', '_blank')}>
            Download Resume <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/ismail-mainal-187199215/', '_blank')}>
            LinkedIn <Linkedin className="w-4 h-4 text-[#84CC16]" />
          </Button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.button
        onClick={handleScrollClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer text-white/50 hover:text-[#84CC16] transition-colors focus:outline-none"
      >
        <span className="font-heading-space text-[10px] uppercase tracking-[0.2em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
