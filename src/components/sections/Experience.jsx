const jobs = [
  {
    role: "Privacy Growth Lead & Global Ambassador",
    company: "Zano, Firo, & Cake Wallet",
    period: "2023 — Present",
    tags: ["Privacy Tech", "Community Growth", "PR & Partnerships"],
    bullets: [
      "Driving African market expansion for Cake Wallet by securing high-impact partnerships with Blockfest Africa (4.5K+ audience) and Stellar West Africa.",
      "Improved community participation for Zano by 64% in 3 months; served as a three-time 'Contributor of the Month'.",
      "Pioneered the newsletter series for Firo, streamlining communications to foster consistent community growth.",
    ],
  },
  {
    role: "Creator & Strategist",
    company: "Rykte Agency & Freelance",
    period: "2024",
    tags: ["Ghostwriting", "Viral Strategy", "KOL Growth"],
    bullets: [
      "Published 7+ viral ghostwritten pieces for Web3 KOLs and projects, consistently driving high conversion rates.",
      "Served as content strategist for prominent KOLs, maintaining an 80% client return/recommendation rate.",
      "Lead creator roles across multiple crypto platforms including Block Telegraph and Uhuru NFTs.",
    ],
  },
  {
    role: "Founder & Host",
    company: "Privacy Chronicles",
    period: "2025 — Present",
    tags: ["Web3 Podcasting", "Audio Production", "Thought Leadership"],
    bullets: [
      "Building a premier privacy-focused Web3 podcast dedicated to exploring the future of digital sovereignty.",
      "Curating deep-dive discussions for platforms like Spotify and 𝕏 to educate and engage a global audience on decentralized privacy solutions.",
    ],
  },
  {
    role: "Market Analyst",
    company: "Bison Wallet",
    period: "2025",
    tags: ["Market Research", "Decred Ecosystem", "Data Analysis"],
    bullets: [
      "Conducted comprehensive market surveys to identify user preferences and pain points within the Decred ecosystem.",
      "Synthesized user feedback into actionable insights to improve wallet interface and user adoption strategy.",
    ],
  }
];

export const Experience = () => (
  <section id="experience" className="bg-transparent py-20">
    <div className="container-main">

      <p className="text-xs font-mono text-[#A855F7] tracking-[0.3em] uppercase mb-3">04 — Experience</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        What I've <span className="gradient-text">Built</span>
      </h2>

      <div className="space-y-0">
        {jobs.map((job, i) => (
          <div key={i} className="group relative grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-10 border-b border-[#1E1E1E] last:border-0">

            {/* Timeline dot */}
            <div className="hidden sm:flex flex-col items-end pt-1 gap-1 text-right">
              <span className="text-xs font-mono text-gray-600 leading-5">{job.period}</span>
              <div className="w-2 h-2 rounded-full bg-[#A855F7]/50 group-hover:bg-[#A855F7] transition-colors mt-1 self-end" />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="sm:hidden text-xs font-mono text-gray-600">{job.period}</p>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#C3A9F5] transition-colors">
                  {job.role}
                </h3>
                <p className="text-sm text-[#A855F7] font-mono mt-0.5">{job.company}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs border border-[#2A2A2A] rounded-full text-gray-500 bg-[#151515]">
                    {tag}
                  </span>
                ))}
              </div>

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