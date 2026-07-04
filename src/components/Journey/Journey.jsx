import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, Laptop, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import Badge from '../Common/Badge';
import { journeyData } from '../../data/journey';

const iconMap = {
  GraduationCap,
  Zap,
  Laptop,
  Rocket
};

/**
 * Journey Section — Interactive Hiking Trail Timeline.
 * Implements a vertical path drawing itself on scroll using GSAP ScrollTrigger.
 */
export default function Journey() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline trail line animation
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    // Milestone markers popup triggers
    const milestones = gsap.utils.toArray('.milestone-node');
    milestones.forEach((node) => {
      gsap.fromTo(
        node.querySelector('.milestone-circle'),
        { scale: 0.6, borderColor: 'rgba(255, 255, 255, 0.1)', backgroundColor: '#111827' },
        {
          scale: 1.2,
          borderColor: '#84CC16',
          backgroundColor: '#2D6A4F',
          boxShadow: '0 0 20px rgba(132, 204, 22, 0.6)',
          scrollTrigger: {
            trigger: node,
            start: 'top center+=100',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === triggerRef.current || milestones.includes(trigger.trigger)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={containerRef} id="journey" className="relative py-16 bg-[var(--color-bg-surface)] overflow-hidden transition-all duration-1000">
      {/* Visual Accent lighting */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#84CC16]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          subtitle="Timeline"
          title="Hiking Up the Tech Stack"
          description="Tracing my progression as a software engineer, from initial base camp milestones to high-altitude ERP systems and AI tools."
        />

        {/* Trail container */}
        <div ref={triggerRef} className="relative max-w-4xl mx-auto mt-20">
          {/* Base Trail Line (Gray) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px]" />

          {/* Active Trail Line (Green, scaled on scroll) */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2D6A4F] to-[#84CC16] -translate-x-[1px] origin-top transform"
          />

          {/* Timeline Milestones */}
          <div className="flex flex-col gap-16 md:gap-24">
            {journeyData.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className="milestone-node relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Circle Indicator on vertical line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8">
                    <div className="milestone-circle w-4 h-4 rounded-full border-2 border-white/10 bg-[#111827] transition-all duration-300 flex items-center justify-center font-bold text-xs" />
                  </div>

                  {/* Spacer or Card (Left side for desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? 'md:text-right' : 'md:opacity-0 md:pointer-events-none md:h-0 overflow-hidden'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        <JourneyCard milestone={milestone} align="right" />
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer or Card (Right side for desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 ${!isEven ? 'md:text-left' : 'md:opacity-0 md:pointer-events-none md:h-0 overflow-hidden'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                      >
                        <JourneyCard milestone={milestone} align="left" />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * JourneyCard Timeline Milestone details renderer.
 */
function JourneyCard({ milestone, align }) {
  const isRight = align === 'right';
  const IconComponent = iconMap[milestone.icon] || Laptop;

  return (
    <GlassCard className="border-white/5 hover:border-[#84CC16]/30 text-left">
      <div className={`flex items-center gap-3 mb-3 ${isRight ? 'md:justify-end md:flex-row-reverse' : 'justify-start'}`}>
        <div className="p-2.5 rounded-xl bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-[#84CC16] flex items-center justify-center shrink-0">
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="font-heading-space text-xs font-bold text-[#84CC16] bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
          {milestone.date}
        </span>
      </div>

      <h3 className="font-heading-sora text-xl font-bold text-[#F8FAFC]">
        {milestone.title}
      </h3>
      <h4 className="font-heading-space text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mt-0.5 mb-3">
        {milestone.subtitle}
      </h4>

      <p className="font-body text-sm text-[#94A3B8] leading-relaxed mb-4">
        {milestone.description}
      </p>

      <div className={`flex flex-wrap gap-1.5 ${isRight ? 'md:justify-end' : 'justify-start'}`}>
        {milestone.skills.map((skill) => (
          <Badge key={skill} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
}
