import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Calendar, CheckSquare } from 'lucide-react';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import SynapseLatticeCanvas from './SynapseLatticeCanvas';
import { avatarImage } from '../../assets';


/**
 * About Section containing biography, professional avatar, and metric highlight cards.
 */
export default function About() {
  const [activeCard, setActiveCard] = useState(null);

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
      title: '6 Systems',
      subtitle: 'Projects Built',
      description: 'Enterprise ERP, compliance gateways & full stack platforms.',
      glowColor: 'card-glow-lime',
    },
    {
      id: 'metric-skills',
      icon: Code2,
      title: 'Full Stack',
      subtitle: 'Core Tech',
      description: 'Proficient across TypeScript, React.js, Next.js, Node.js, and MySQL.',
      glowColor: 'card-glow-green',
    },
    {
      id: 'metric-focus',
      icon: Target,
      title: 'ERP Platform',
      subtitle: 'Current Role',
      description: 'Engineering ERP & statutory compliance gateways at Aanirids.',
      glowColor: 'card-glow-lime',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#050507] transition-all duration-1000">
      {/* Bespoke Architectural Synapse Lattice Canvas & Atmospheric Glow (contained safely) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SynapseLatticeCanvas />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F97316]/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FACC15]/6 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          subtitle="Biography"
          title="Engineering with Intention"
          description="Crafting high-integrity backends and elegant web systems inspired by robust production architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Profile Photo Holder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group max-w-sm mx-auto lg:max-w-none w-full lg:sticky lg:top-28"
          >
            {/* Vesper Holographic Frame Glow */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#F97316]/25 via-[#FBBF24]/15 to-[#FACC15]/25 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* Main Picture Wrapper */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-square bg-[#0C0D12]">
              <motion.img
                src={avatarImage}
                alt="Ismail Mainal Avatar Placeholder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-85" />
              
              {/* Bottom text overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-heading-space text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                  Full Stack Developer
                </span>
                <h3 className="font-heading-sora text-xl font-bold text-[#F8FAFC]">
                  Ismail Mainal
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details & Metric Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
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
              <div className="border-l-2 border-[#F97316] pl-4 flex flex-col gap-3.5 mt-8 mb-2">
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🚀 REST API Design:</strong> Built 15+ RESTful API endpoints with Express.js and real-time sync, improving response time by <span className="text-[#F97316] font-semibold">35%</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">⚡ Frontend Efficiency:</strong> Developed responsive React.js SPA modules using Hooks, Context API, and Tailwind CSS, boosting user task efficiency by <span className="text-[#F97316] font-semibold">40%</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🛡️ Production Reliability:</strong> Implemented JWT authentication, RBAC, and MySQL indexing to reduce critical production errors by <span className="text-[#F97316] font-semibold">50%</span>.
                </div>
                <div className="text-sm text-[#94A3B8] leading-relaxed">
                  <strong className="text-[#F8FAFC]">🛠️ Performance Tuning:</strong> Eliminated bottlenecks across frontend and backend, achieving a <span className="text-[#F97316] font-semibold">45% reduction</span> in React re-renders and MySQL execution time.
                </div>
              </div>
            </motion.div>

            {/* Metrics cards: Sticky overlapping deck on mobile | 2x2 grid on desktop */}
            <div className="relative flex flex-col gap-5 pb-8 sm:grid sm:grid-cols-2 sm:gap-4 sm:pb-0">
              {cards.map((card, i) => {
                const Icon = card.icon;
                const isEven = i % 2 === 0;
                const isExpanded = activeCard === card.id;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                    className="sticky sm:static transition-all duration-300"
                    style={{
                      top: `calc(76px + ${i * 32}px)`,
                      zIndex: isExpanded ? 40 : 10 + i,
                    }}
                  >
                    <GlassCard
                      className={`p-5 flex gap-4 items-start h-full cursor-pointer sm:cursor-default transition-all duration-300 ${
                        isExpanded
                          ? 'border-[#F97316] ring-1 ring-[#F97316]/60 shadow-[0_0_35px_rgba(249,115,22,0.35)] bg-[#0C0D12]'
                          : 'border-white/10 bg-[#0C0D12] sm:bg-[#0C0D12]/85 shadow-[0_-12px_28px_rgba(0,0,0,0.85)] sm:shadow-none'
                      }`}
                      glow={false}
                    >
                      <div
                        className={`p-2.5 rounded-xl border shrink-0 transition-transform duration-300 ${
                          isEven
                            ? 'bg-[#F97316]/10 border-[#F97316]/25 text-[#F97316]'
                            : 'bg-[#FACC15]/10 border-[#FACC15]/25 text-[#FACC15]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-heading-sora text-base sm:text-lg font-bold text-[#F8FAFC]">
                            {card.title}
                          </h4>
                          <span className="sm:hidden font-mono text-[10px] text-[#F97316]/70 tracking-widest uppercase font-semibold">
                            0{i + 1}
                          </span>
                        </div>
                        <div className="font-heading-space text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mt-0.5">
                          {card.subtitle}
                        </div>
                        <p className="font-body text-xs text-[#94A3B8]/80 mt-1 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </GlassCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
