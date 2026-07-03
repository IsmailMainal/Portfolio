import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

/**
 * Animated Section Heading.
 * Uses Framer Motion intersection observer to slide in when viewed.
 * @param {Object} props
 * @param {string} props.title - Main heading text
 * @param {string} props.subtitle - Small uppercase tracking label
 * @param {string} props.description - Optional body paragraph below heading
 * @param {string} props.align - 'center' | 'left'
 */
export default function SectionTitle({
  title,
  subtitle,
  description,
  align = 'center',
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`max-w-3xl mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {subtitle && (
        <motion.span
          variants={fadeIn('up', 0.1)}
          className="inline-flex items-center gap-2 font-heading-space text-xs font-semibold tracking-[0.2em] uppercase text-[#84CC16] mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        variants={fadeIn('up', 0.2)}
        className="font-heading-sora text-3xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeIn('up', 0.3)}
          className="font-body text-base md:text-lg text-[#94A3B8] leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
