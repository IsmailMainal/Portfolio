import React, { useState } from 'react';
import { ArrowUpRight, Github, CheckCircle2, ShieldCheck, Database, Layers, Terminal, Server } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Badge from '../Common/Badge';
import { projectsData } from '../../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Enterprise ERP', 'Full Stack', 'Backend'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Enterprise ERP') {
      return project.id === 'aanibiz-erp' || project.id === 'aanibiz-compliance-gateway';
    }
    return project.category === activeCategory;
  });

  const flagshipERP = projectsData.find((p) => p.id === 'aanibiz-erp');
  const flagshipCompliance = projectsData.find((p) => p.id === 'aanibiz-compliance-gateway');
  const gridProjects = filteredProjects.filter(
    (p) => activeCategory !== 'All' || (p.id !== 'aanibiz-erp' && p.id !== 'aanibiz-compliance-gateway')
  );

  return (
    <section id="work" className="py-12 sm:py-16 border-b border-[#E8E0D8]/60 mb-16 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242424]">
            Selected Work
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6A66] mt-1">
            Enterprise ERP platforms, statutory compliance gateways, and distributed web applications.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1A0A06] text-white font-medium shadow-xs'
                  : 'bg-[#ECE5DD] text-[#6E6A66] hover:text-[#242424]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FLAGSHIP SHOWCASE 1: Aanibiz ERP */}
      {(activeCategory === 'All' || activeCategory === 'Enterprise ERP') && flagshipERP && (
        <div className="mb-10">
          <div className="rounded-2xl border border-[#E8E0D8] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#D5CCC3]">
            <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-[#E8E0D8]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#E65639] uppercase tracking-wider font-semibold">
                  [ Flagship ERP ]
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#E65639]/10 text-[11px] font-mono text-[#E65639]">
                  Live Production Platform
                </span>
              </div>
              <div className="flex items-center gap-3">
                {flagshipERP.githubUrl && (
                  <a
                    href={flagshipERP.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#6E6A66] hover:text-[#242424] flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(flagshipERP)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A0A06] hover:bg-[#331B15] text-xs font-medium text-white transition-colors cursor-pointer shadow-xs"
                >
                  Technical Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#242424] leading-tight">
                  {flagshipERP.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#6E6A66] leading-relaxed">
                  {flagshipERP.shortDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6E6A66]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Sales & Purchase:</strong> Multi-stage quote-to-invoice pipeline.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Multi-Warehouse:</strong> Real-time stock reservation & tracking.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>RBAC & JWT:</strong> Hierarchical roles across 15+ REST APIs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Query Tuning:</strong> Composite indexing cutting latency by 35%.</span>
                </div>
              </div>

              {/* Architecture strip */}
              <div className="p-3.5 rounded-xl bg-[#FBF5EF] border border-[#E8E0D8] text-xs font-mono text-[#6E6A66] space-y-1">
                <div className="flex items-center gap-2 text-[#E65639] font-semibold text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ARCHITECTURE & STACK</span>
                </div>
                <div>React.js SPA • Node.js/Express.js MVC • MySQL 3NF Schema • Composite Indexing</div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagshipERP.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FLAGSHIP SHOWCASE 2: Compliance Gateway */}
      {(activeCategory === 'All' || activeCategory === 'Enterprise ERP') && flagshipCompliance && (
        <div className="mb-10">
          <div className="rounded-2xl border border-[#E8E0D8] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#D5CCC3]">
            <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-[#E8E0D8]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#E65639] uppercase tracking-wider font-semibold">
                  [ Statutory Infrastructure ]
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#E65639]/10 text-[11px] font-mono text-[#E65639]">
                  Statutory API Gateway
                </span>
              </div>
              <div className="flex items-center gap-3">
                {flagshipCompliance.githubUrl && (
                  <a
                    href={flagshipCompliance.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#6E6A66] hover:text-[#242424] flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(flagshipCompliance)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A0A06] hover:bg-[#331B15] text-xs font-medium text-white transition-colors cursor-pointer shadow-xs"
                >
                  Technical Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#242424] leading-tight">
                  {flagshipCompliance.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#6E6A66] leading-relaxed">
                  {flagshipCompliance.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6E6A66]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Statutory Gateway:</strong> Automated E-Invoice IRN & E-Way Bills.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Credit Ledger:</strong> Pessimistic locking guaranteeing zero leaks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Licensing Engine:</strong> Device fingerprinting & background cron.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Server className="w-3.5 h-3.5 text-[#E65639] shrink-0 mt-0.5" />
                  <span><strong>Razorpay Subscriptions:</strong> Automated recurring renewals.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF5EF] border border-[#E8E0D8] text-xs font-mono text-[#6E6A66] space-y-1">
                <div className="flex items-center gap-2 text-[#E65639] font-semibold text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ARCHITECTURE & STACK</span>
                </div>
                <div>Next.js 16 • Prisma ORM • MySQL Pessimistic Locking • Government GSP/NIC APIs</div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagshipCompliance.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid Projects */}
      {gridProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
