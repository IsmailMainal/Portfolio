import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial Section Title.
 * Kozoriz aesthetic: confident typography, index indicator, and clean spacing.
 */
export default function SectionTitle({
  index,
  tag,
  title,
  description,
  align = 'left'
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'max-w-3xl mx-auto text-center' : 'max-w-2xl text-left'
      }`}
    >
      <div
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#E65639] mb-3 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        {index && <span className="opacity-90 font-semibold">{index}</span>}
        {index && tag && <span className="text-black/20">/</span>}
        {tag && <span className="text-[#6E6A66] tracking-[0.2em] font-medium">{tag}</span>}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#242424] leading-[1.15]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base md:text-lg text-[#6E6A66] leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
