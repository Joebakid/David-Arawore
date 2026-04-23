export const About = () => (
  <section className="bg-transparent">
    <div className="container-main">

      {/* Section label */}
      <p className="text-xs font-mono text-[#A855F7] tracking-[0.3em] uppercase mb-3">01 — About</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
        Who is <span className="gradient-text">David Creates?</span>
      </h2>

      <div className="grid md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-16 items-start">

        {/* Bio column */}
        <div className="space-y-5 text-gray-400 leading-relaxed text-base">
          <p>
            I'm a Web3 community builder and content strategist with a background in medicine — a combination that gives me a unique lens for understanding people, systems, and the stories that move them.
          </p>
          <p>
            My work sits at the intersection of <span className="text-white font-medium">decentralized technology</span> and <span className="text-white font-medium">human behavior</span>. I help blockchain projects communicate clearly, grow engaged communities, and build lasting trust with their audiences.
          </p>
          <p>
            When I'm not deep in Discord threads or mapping content strategies, I'm studying emerging protocols, experimenting with new formats, and thinking about the future of digital ownership.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent" />

        {/* Quick facts */}
        <div className="space-y-6">
          {[
            { label: "Location", value: "United States 🇺🇸" },
            { label: "Background", value: "Medicine + Web3" },
            { label: "Focus Area", value: "Community & Content Strategy" },
            { label: "Building since", value: "2024" },
            { label: "Languages", value: "English · Portuguese" },
            { label: "Open to", value: "Remote Collaborations Worldwide" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-start gap-4 border-b border-[#1E1E1E] pb-4 last:border-0 last:pb-0">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-widest shrink-0 pt-0.5">{label}</span>
              <span className="text-sm text-gray-200 text-right">{value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);