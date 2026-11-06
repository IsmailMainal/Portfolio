import React from 'react';
import { experienceData } from '../../data/experience';

export default function Experience() {
  const badgeLabels = {
    'exp-aanirids': 'AT',
    'exp-salesforce': 'SF',
    'exp-techciti': 'TC',
    'edu-vtu': 'CIT'
  };

  const workOnly = experienceData.filter((item) => item.type !== 'Degree');

  return (
    <section id="experience" className="py-8 sm:py-10 border-b border-[#E8E0D8]/60 text-left">
      <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424] mb-8">
        Experience
      </h2>

      <div className="space-y-12">
        {workOnly.map((job) => (
          <div key={job.id} className="space-y-4">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#1A0A06] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {badgeLabels[job.id] || 'DEV'}
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#242424]">
                    {job.role}
                  </h3>
                  <p className="text-xs text-[#6E6A66]">
                    {job.company} • {job.type}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono text-[#8C8681] whitespace-nowrap mt-1">
                {job.period}
              </span>
            </div>

            {/* Description & bullets */}
            <div className="pl-12 space-y-3">
              <p className="text-xs sm:text-sm text-[#6E6A66] leading-relaxed">
                {job.summary}
              </p>

              <ul className="space-y-1.5 text-xs sm:text-sm text-[#6E6A66]">
                {job.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#242424] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
