import React from 'react';

export default function About() {
  const keySkills = [
    'React.js & Next.js',
    'Node.js & Express',
    'MySQL & Prisma',
    'REST APIs',
    'Pessimistic Locking',
    'GST & NIC APIs',
    'JWT & RBAC',
    'Razorpay Billing',
    'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-8 sm:py-10 border-b border-[#E8E0D8]/60 text-left">
      <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424] mb-6">
        About
      </h2>

      <div className="space-y-4 text-sm sm:text-base text-[#6E6A66] leading-relaxed max-w-2xl mb-8">
        <p>
          I build the parts of the web that have to keep working — enterprise ERP modules, statutory compliance platforms and the services behind them. Most of that time has been spent in React.js, Express.js and MySQL, from invoicing, inventory and stock management to real-time statutory GST IRN invoice generation.
        </p>
        <p>
          Alongside that I write clean backend architectures: transactional credit ledgers with two-phase locking, hardware-fingerprinted licensing engines, and secure REST APIs. I still enjoy the frontend end of the job too — responsive SPAs, Tailwind CSS, and interfaces that behave on every screen.
        </p>
        <p>
          What I care about most is code that the next developer can read, and systems that stay calm under load.
        </p>
      </div>

      <div>
        <h3 className="text-xs font-medium text-[#242424] mb-3">
          Key skills:
        </h3>
        <div className="flex flex-wrap gap-2">
          {keySkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md bg-[#ECE5DD] text-[#242424] text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
