const jobs = [
  {
    role: "Community Lead",
    company: "Web3 Project",
    period: "2025 — Present",
    tags: ["Discord Management", "Token Strategy", "Growth"],
    bullets: [
      "Grew Discord community from 2K to 12K members in under 6 months through structured engagement programs.",
      "Developed and executed weekly content calendars aligning with product milestones and market cycles.",
      "Coordinated AMAs, Twitter Spaces, and partner collaborations to increase protocol visibility.",
    ],
  },
  {
    role: "Content Creator & Strategist",
    company: "Freelance / Web3",
    period: "2024 — 2025",
    tags: ["Copywriting", "Twitter / X", "Threads"],
    bullets: [
      "Produced long-form and short-form content for DeFi and NFT projects reaching 50K+ cumulative impressions.",
      "Crafted narrative-driven threads simplifying complex blockchain concepts for retail audiences.",
      "Collaborated with founders to align brand voice with community expectations and growth targets.",
    ],
  },
  {
    role: "Medical Professional",
    company: "Healthcare",
    period: "2020 — 2024",
    tags: ["Research", "Communication", "Systems Thinking"],
    bullets: [
      "Developed precision-oriented analytical skills now applied to community data, protocol research, and strategy.",
      "Communicated complex information clearly to diverse audiences — a skill directly transferred to Web3 education.",
    ],
  },
];

export const Experience = () => (
  <section className="bg-transparent">
    <div className="container-main">

      <p className="text-xs font-mono text-[#A855F7] tracking-[0.3em] uppercase mb-3">03 — Experience</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        What I've <span className="gradient-text">Built</span>
      </h2>

      <div className="space-y-0">
        {jobs.map((job, i) => (
          <div key={i} className="group relative grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-10 border-b border-[#1E1E1E] last:border-0">

            {/* Timeline dot (desktop) */}
            <div className="hidden sm:flex flex-col items-end pt-1 gap-1 text-right">
              <span className="text-xs font-mono text-gray-600 leading-5">{job.period}</span>
              <div className="w-2 h-2 rounded-full bg-[#A855F7]/50 group-hover:bg-[#A855F7] transition-colors mt-1 self-end" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Mobile period */}
              <p className="sm:hidden text-xs font-mono text-gray-600">{job.period}</p>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#C3A9F5] transition-colors">
                  {job.role}
                </h3>
                <p className="text-sm text-[#A855F7] font-mono mt-0.5">{job.company}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-[#2A2A2A] rounded-full text-gray-500 bg-[#151515]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="text-[#A855F7] mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);