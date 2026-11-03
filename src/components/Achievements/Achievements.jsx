import React from 'react';
import ReactCountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GlassCard from '../Common/GlassCard';
import DataStreamCanvas from './DataStreamCanvas';
import { achievementsData } from '../../data/achievements';

// Extract functional component from ESM/CJS compatibility wrapper
const CountUp = ReactCountUp.default || ReactCountUp;

/**
 * Achievements stats counter dashboard.
 * Uses react-countup and react-intersection-observer for scroll triggers.
 */
export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="achievements"
      className="relative py-16 bg-[#030712] border-t border-b border-white/[0.08] overflow-hidden transition-all duration-1000"
    >
      {/* High-Speed Telemetry Streams Canvas */}
      <DataStreamCanvas />

      {/* Background Soft Vesper gradient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#10B981]/6 via-[#6366F1]/6 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-6 text-center border-white/[0.08] bg-[#070B18]/70 hover:border-[#10B981]/30 shadow-lg h-full transition-all duration-300">
                <div className="font-heading-space text-4xl sm:text-5xl font-black tracking-tight mb-2 flex items-center justify-center bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#6366F1] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span>{stat.suffix}</span>
                </div>
                <div className="font-heading-sora text-sm font-semibold text-[#F8FAFC] tracking-wide mb-1.5">
                  {stat.label}
                </div>
                <p className="font-body text-xs text-[#94A3B8] leading-relaxed">
                  {stat.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
