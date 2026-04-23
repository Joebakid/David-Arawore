import { HiUserGroup, HiDocumentText, HiChatBubbleLeftRight, HiChartBar } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Community Management",
    icon: <HiUserGroup className="w-6 h-6" />,
    description: "Full-spectrum community building across Discord, Telegram, and X. From onboarding flows and moderation systems to engagement programs that turn lurkers into advocates.",
    highlights: ["Discord & Telegram Setup", "Moderation Systems", "Engagement Campaigns", "Member Onboarding"],
  },
  {
    number: "02",
    title: "Web3 Content Strategy",
    icon: <HiDocumentText className="w-6 h-6" />,
    description: "Narrative-driven content that educates, builds trust, and converts. I bridge the gap between complex blockchain concepts and the humans who need to understand them.",
    highlights: ["Thread Writing", "Newsletter Strategy", "Educational Content", "Brand Voice Design"],
  },
  {
    number: "03",
    title: "Digital Storytelling",
    icon: <HiChatBubbleLeftRight className="w-6 h-6" />,
    description: "Compelling stories that align your protocol's mission with community values. Whether it's launch campaigns, ecosystem narratives, or founder positioning — story is the strategy.",
    highlights: ["Launch Campaigns", "Ecosystem Narratives", "Founder Positioning", "Thought Leadership"],
  },
  {
    number: "04",
    title: "Growth Consulting",
    icon: <HiChartBar className="w-6 h-6" />,
    description: "Data-informed growth strategy for early-stage Web3 projects. I help teams identify levers, set community KPIs, and execute experiments that compound over time.",
    highlights: ["Community KPIs", "Partnership Strategy", "Retention Analysis", "Go-to-Market Support"],
  },
];

export const Services = () => (
  <section id="services" className="bg-transparent py-20">
    <div className="container-main">

      <p className="text-xs font-mono text-[#A855F7] tracking-[0.3em] uppercase mb-3">02 — Services</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          How I Can <span className="gradient-text">Help You</span>
        </h2>
        <p className="text-sm text-gray-500 sm:text-right max-w-xs leading-relaxed">
          Tailored engagements, not cookie-cutter packages. Let's talk scope.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s) => (
          <div
            key={s.number}
            className="group p-6 sm:p-8 border border-[#1E1E1E] hover:border-[#A855F7]/40 bg-[#111]/60 backdrop-blur-sm rounded-2xl transition-all duration-300 cursor-default space-y-5"
          >
            {/* Header row with Icon */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div className="text-[#A855F7] group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#C3A9F5] transition-colors">
                  {s.title}
                </h3>
              </div>
              <span className="text-[#A855F7]/30 group-hover:text-[#A855F7] transition-colors text-xl mt-1">
                <FiArrowUpRight />
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {s.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1 text-xs border border-[#2A2A2A] group-hover:border-[#A855F7]/20 rounded-full text-gray-600 group-hover:text-gray-400 bg-[#0E0E0E] transition-colors"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);