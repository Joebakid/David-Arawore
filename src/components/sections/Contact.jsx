import { HiOutlineMail } from "react-icons/hi";
import { SiX, SiTiktok, SiSubstack } from "react-icons/si";

export const Contact = () => {
  const socials = [
    { name: "Email", icon: <HiOutlineMail />, link: "mailto:daravid030@gmail.com", val: "daravid030@gmail.com", color: "text-[#A855F7]" },
    { name: "X (Twitter)", icon: <SiX />, link: "https://x.com/IamDaravid_", val: "@IamDaravid_", color: "text-white" },
    { name: "TikTok", icon: <SiTiktok />, link: "https://tiktok.com/@iamdaravid", val: "@iamdaravid", color: "text-[#FE2C55]" },
    { name: "Substack", icon: <SiSubstack />, link: "https://substack.com/@iamdaravid", val: "@iamdaravid", color: "text-[#FF6719]" }
  ];

  return (
    <section id="contact" className="bg-transparent py-20">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-[#A855F7] tracking-[0.3em] uppercase mb-3">06 — Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Build Together?</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Whether you're starting a new protocol, need community strategy, or just want to talk about the future of Web3, my inbox is open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {socials.map((s, i) => (
            <a 
              key={i} 
              href={s.link}
              target={s.name !== "Email" ? "_blank" : undefined}
              rel={s.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center justify-center p-6 border border-[#1E1E1E] bg-[#111]/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:border-[#A855F7]/40 hover:bg-[#151515]"
            >
              <div className={`text-2xl mb-3 group-hover:scale-110 transition-transform ${s.color}`}>
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{s.name}</h3>
              <p className="text-gray-500 text-[10px] font-mono group-hover:text-gray-300 truncate w-full text-center transition-colors">
                {s.val}
              </p>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 text-xs font-mono mt-16">
          © 2026 DAVID ARAWORE — BUILT WITH INTENTION
        </p>

      </div>
    </section>
  );
};