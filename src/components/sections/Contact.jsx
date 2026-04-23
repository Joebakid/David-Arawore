export const Contact = () => (
  <section className="bg-transparent py-20">
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
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        
        {/* Email Card (Link) */}
        <a 
          href="mailto:daravid030@gmail.com" 
          className="group flex flex-col items-center justify-center p-8 border border-[#1E1E1E] bg-[#111]/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:border-[#A855F7]/40 hover:bg-[#151515]"
        >
          <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">✉️</span>
          <h3 className="text-white font-bold mb-1">Email</h3>
          <p className="text-[#A855F7] text-sm font-mono group-hover:underline">daravid030@gmail.com</p>
        </a>

        {/* Social Card (Link) */}
        <a 
          href="https://t.me/davidarawo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-8 border border-[#1E1E1E] bg-[#111]/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#151515]"
        >
          <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">💬</span>
          <h3 className="text-white font-bold mb-1">Telegram</h3>
          <p className="text-[#D4AF37] text-sm font-mono group-hover:underline">@davidarawo</p>
        </a>

      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-600 text-xs font-mono mt-12">
        © 2026 DAVID CREATES — BUILT WITH INTENTION
      </p>

    </div>
  </section>
);