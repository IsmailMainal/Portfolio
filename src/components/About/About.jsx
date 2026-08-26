import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Calendar, CheckSquare } from 'lucide-react';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import { avatarImage } from '../../assets';


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
      description: 'Building & maintaining production-grade web applications.',
      glowColor: 'card-glow-green',
    },
    {
      id: 'metric-projects',
      icon: CheckSquare,
      title: '4 Complete',
      subtitle: 'Projects Built',
      description: 'Full stack web and database architectures.',
      glowColor: 'card-glow-lime',
    },
    {
      id: 'metric-skills',
      icon: Code2,
      title: 'Full Stack',
      subtitle: 'Core Tech',
      description: 'Proficient across React.js, Node.js, Express.js, and MySQL.',
      glowColor: 'card-glow-green',
    },
    {
      id: 'metric-focus',
      icon: Target,
      title: 'ERP Platform',
      subtitle: 'Current Role',
      description: 'Developing live ERP modules at Aanirids Technologies.',
      glowColor: 'card-glow-lime',
    },
  ];

  return (
    <section id="about" className="relative py-16 bg-[var(--color-bg-primary)] overflow-hidden transition-all duration-1000">
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
                  Full Stack Developer
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
                I am a Full Stack Developer based in Bengaluru, India, with 1+ year of professional experience building, deploying, and maintaining production-grade web applications. Currently, I work as a Full Stack Developer at Aanirids Technologies Private Limited, contributing to a live production ERP platform.
              </p>
              <p className="font-body text-base text-[#94A3B8] leading-relaxed mb-6">
                My technical expertise spans component-based React.js frontend architecture, RESTful API design using Express.js and Node.js, JWT authentication, role-based access control (RBAC), MySQL query optimization, and Agile delivery.
              </p>

              {/* HR Value Highlights */}
              <div className="border-l-2 border-[#2D6A4F] pl-4 flex flex-col gap-3.5 mt-8 mb-2">
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🚀 REST API Design:</strong> Built 15+ RESTful API endpoints with Express.js and real-time sync, improving response time by <span className="text-[#84CC16] font-semibold">35%</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">⚡ Frontend Efficiency:</strong> Developed responsive React.js SPA modules using Hooks, Context API, and Tailwind CSS, boosting user task efficiency by <span className="text-[#84CC16] font-semibold">40%</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🛡️ Production Reliability:</strong> Implemented JWT authentication, RBAC, and MySQL indexing to reduce critical production errors by <span className="text-[#84CC16] font-semibold">50%</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🛠️ Performance Tuning:</strong> Eliminated bottlenecks across frontend and backend, achieving a <span className="text-[#84CC16] font-semibold">45% reduction</span> in React re-renders and MySQL execution time.
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
