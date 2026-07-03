import React from 'react';
import ReactCountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GlassCard from '../Common/GlassCard';
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
      className="relative py-20 bg-[#0B1120] border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background Soft gradient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2D6A4F]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 text-center border-white/5 bg-[#111827]/40 hover:border-[#84CC16]/20">
                <div className="font-heading-space text-4xl sm:text-5xl font-extrabold tracking-tight text-[#84CC16] mb-2 flex items-center justify-center">
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
