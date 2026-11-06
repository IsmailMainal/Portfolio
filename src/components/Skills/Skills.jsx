import React from 'react';
import { TECH_ICONS } from './TechIcons';

export default function Skills() {
  const specializedSkills = [
    'API design & integration',
    'Backend architecture',
    'Code review & QA',
    'Database transactions',
    'Pessimistic locking',
    'RESTful APIs',
    'Multi-tenancy',
    'Query optimization',
    'Statutory compliance (GST & NIC)',
    'ERP workflows',
    'Schema normalization',
    'JWT & RBAC authentication',
    'Agile & Scrum delivery'
  ];

  return (
    <section id="skills" className="py-8 sm:py-10 border-b border-[#E8E0D8]/60 text-left space-y-10">
      {/* Education Block */}
      <div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424] mb-6">
          Education
        </h2>

        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-[#242424]">
                B.Tech, Computer Science & Engineering
              </h3>
              <p className="text-xs text-[#6E6A66]">
                Coorg Institute of Technology (VTU)
              </p>
            </div>
            <span className="text-xs font-mono text-[#8C8681] whitespace-nowrap mt-1">
              Dec 2020 – May 2024
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed max-w-2xl">
            Four years of computer science fundamentals — algorithms, systems and software engineering — the groundwork for everything since.
          </p>
        </div>
      </div>

      <div className="border-t border-[#E8E0D8]/60 pt-10">
        {/* Skills Block */}
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424] mb-6">
          Skills
        </h2>

        {/* Specialized Domain Skills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {specializedSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[#ECE5DD] text-[#242424] text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Technologies & Tools powered by react-icons */}
        <div>
          <h3 className="text-xs font-medium text-[#242424] mb-4">
            Technologies & tools:
          </h3>
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
            {TECH_ICONS.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  title={tech.name}
                  aria-label={tech.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center hover:scale-115 transition-transform duration-200 cursor-pointer"
                >
                  <Icon
                    className="w-full h-full"
                    style={{ color: tech.color }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
