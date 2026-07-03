import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Calendar, CheckSquare } from 'lucide-react';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import avatarImage from '../../assets/profile_avatar.png';

/**
 * About Section containing biography, professional avatar, and metric highlight cards.
 */
export default function About() {
  const cards = [
    {
      id: 'metric-experience',
      icon: Calendar,
      title: '1+ Year',
      subtitle: 'Experience',
      description: 'Designing and deploying production-grade web apps.',
      glowColor: 'card-glow-green',
    },
    {
      id: 'metric-projects',
      icon: CheckSquare,
      title: '4 Complete',
      subtitle: 'Projects Built',
      description: 'Full stack software and database architectures.',
      glowColor: 'card-glow-lime',
    },
    {
      id: 'metric-skills',
      icon: Code2,
      title: '15+ Techs',
      subtitle: 'Modern Stack',
      description: 'Proficient across React, Node, Express, and MySQL.',
      glowColor: 'card-glow-green',
    },
    {
      id: 'metric-focus',
      icon: Target,
      title: 'ERP Software',
      subtitle: 'Current Focus',
      description: 'Scaling BillKar invoicing and stock operations.',
      glowColor: 'card-glow-lime',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2D6A4F]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          subtitle="Biography"
          title="Engineering with Intention"
          description="Crafting high-integrity backends and elegant web systems inspired by nature’s robust architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Photo Holder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            {/* Outer Glow frame */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#2D6A4F]/30 to-[#84CC16]/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* Main Picture Wrapper */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-square bg-[#111827]">
              <motion.img
                src={avatarImage}
                alt="Ismail Mainal Avatar Placeholder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-heading-space text-xs font-semibold uppercase tracking-wider text-[#84CC16]">
                  Full Stack Engineer
                </span>
                <h3 className="font-heading-sora text-xl font-bold text-[#F8FAFC]">
                  Ismail Mainal
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details & Metric Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div>
              <h3 className="font-heading-sora text-2xl font-bold text-[#F8FAFC] mb-4">
                Hi, I&apos;m Ismail.
              </h3>
              <p className="font-body text-base text-[#94A3B8] leading-relaxed mb-6">
                I am a software engineer based in Bengaluru, India, focused on developing modular backends and clean architectures. My technical background is rooted heavily in full stack JavaScript development, relational database schemas, and client-side interfaces.
              </p>
              <p className="font-body text-base text-[#94A3B8] leading-relaxed mb-6">
                Whether architecting core transaction modules for the BillKar ERP system or delivering document lifecycle automation (Submit, Cancel, Convert to Invoice), my designs remain calm, structural, and performance-first.
              </p>

              {/* HR Value Highlights */}
              <div className="border-l-2 border-[#2D6A4F] pl-4 flex flex-col gap-3.5 mt-8 mb-2">
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🚀 Direct Business Value:</strong> Optimized database indexes and React rendering cycles, achieving a <span className="text-[#84CC16] font-semibold">30% faster page load</span> and <span className="text-[#84CC16] font-semibold">35% latency drop</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🛡️ Transactional Integrity:</strong> Programmed relational schema constraints to safely process <span className="text-[#84CC16] font-semibold">500+ daily business orders</span> with zero discrepancy drift.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">⚡ Automation & Speed:</strong> Delivered document lifecycle state-automations that cut manual accounting errors by <span className="text-[#84CC16] font-semibold">50%</span>.
                </div>
              </div>
            </div>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <GlassCard
                    key={card.id}
                    className="p-5 flex gap-4 items-start border-white/5 hover:border-[#2D6A4F]/40"
                    glow={false}
                  >
                    <div className="p-2 rounded-lg bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-[#84CC16]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading-sora text-lg font-bold text-[#F8FAFC]">
                        {card.title}
                      </h4>
                      <div className="font-heading-space text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mt-0.5">
                        {card.subtitle}
                      </div>
                      <p className="font-body text-xs text-[#94A3B8]/80 mt-1">
                        {card.description}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
