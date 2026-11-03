import React, { useState } from 'react';
import { Layout, Server, Database, Cloud, Cpu, Workflow, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import GlassCard from '../Common/GlassCard';
import Badge from '../Common/Badge';
import OrbitalRingsCanvas from './OrbitalRingsCanvas';
import { skillsData } from '../../data/skills';

// Dynamic icon lookup map
const iconMap = {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Workflow,
  Layers,
};

/**
 * Skills Section.
 * Implements categorized glass cards with custom category-color highlights, subtle icon rotate on hover, and tag grids.
 * On mobile, cards smoothly stack and overlap as the user scrolls.
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  // Count total technologies dynamically
  const totalTechs = skillsData.reduce((acc, cat) => acc + cat.technologies.length, 0);

  return (
    <section id="skills" className="relative py-20 bg-[#050507] transition-all duration-1000">
      {/* 3D Atomic Orbital Canvas & Atmospheric Lights (safely isolated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OrbitalRingsCanvas />
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#F97316]/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#FACC15]/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          subtitle="Competencies"
          title="Curated Technology Stack"
          description="Structured categories mapped to level competencies. No arbitrary percentages — only focused, reliable capabilities."
        />

        {/* Dynamic total count badge */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 sm:gap-3 glass px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/[0.08] font-heading-space text-xs font-semibold text-[#FB923C] shadow-[0_0_20px_rgba(249,115,22,0.2)] text-center"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FACC15]"></span>
            </span>
            <span>Deploying {totalTechs} core full-stack technologies</span>
          </motion.div>
        </div>

        {/* Categorized Skills (Sticky overlapping deck on mobile | 3-col grid on desktop) */}
        <div className="flex flex-col gap-6 pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0">
          {skillsData.map((categoryData, idx) => {
            const Icon = iconMap[categoryData.iconName] || Cpu;
            const isExpanded = activeCategory === categoryData.category;

            return (
              <div
                key={categoryData.category}
                onClick={() => setActiveCategory(isExpanded ? null : categoryData.category)}
                className="sticky md:static transition-all duration-300"
                style={{
                  top: `calc(76px + ${idx * 24}px)`,
                  zIndex: isExpanded ? 40 : 10 + idx,
                }}
              >
                <GlassCard
                  className={`group h-full flex flex-col justify-between transition-all duration-300 cursor-pointer md:cursor-default ${
                    isExpanded
                      ? 'border-[#F97316] ring-1 ring-[#F97316]/60 shadow-[0_0_35px_rgba(249,115,22,0.35)] bg-[#0C0D12]'
                      : 'border-white/10 md:border-white/5 hover:border-white/20 bg-[#0C0D12] md:bg-[#0C0D12]/85 shadow-[0_-12px_28px_rgba(0,0,0,0.85)] md:shadow-none'
                  }`}
                  hoverEffect={true}
                >
                  <div>
                    {/* Header: Category Icon & Title */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="p-2.5 rounded-xl transition-transform duration-500 group-hover:rotate-12"
                          style={{
                            backgroundColor: `${categoryData.color}15`,
                            border: `1px solid ${categoryData.color}30`,
                            color: categoryData.color,
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-heading-sora text-lg font-bold text-[#F8FAFC]">
                            {categoryData.category}
                          </h3>
                          <span className="font-heading-space text-[10px] tracking-wider text-[#94A3B8] uppercase">
                            {categoryData.technologies.length} Stack Elements
                          </span>
                        </div>
                      </div>

                      {/* Mobile Sequence Index */}
                      <span className="md:hidden font-mono text-[10px] text-[#F97316]/70 tracking-widest font-semibold uppercase">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="font-body text-xs text-[#94A3B8] leading-relaxed mb-6">
                      {categoryData.description}
                    </p>
                  </div>

                  {/* Skills Badges list */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                    {categoryData.technologies.map((tech) => (
                      <div key={tech.name} className="relative group/tech">
                        <Badge variant="default" className="transition-all hover:border-white/20 hover:text-white">
                          {tech.name}
                        </Badge>
                        {/* Custom tooltip indicating proficiency */}
                        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs scale-0 group-hover/tech:scale-100 transition-all duration-250 bg-[#0C0D12] border border-white/10 text-[#FACC15] font-code text-[10px] px-2 py-0.5 rounded shadow-lg z-20">
                          {tech.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
