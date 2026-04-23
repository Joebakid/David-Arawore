export const Intro = () => (
  <section className="min-h-screen relative overflow-hidden flex items-center bg-transparent pt-24 pb-20">
    {/* Glow blobs */}
    <div className="hidden md:block absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#A855F7]/10 blur-3xl pointer-events-none" />
    <div className="hidden md:block absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-[#D946EF]/10 blur-3xl pointer-events-none" />

    <div className="container-main relative z-10 w-full">
      <div className="flex flex-col md:grid md:grid-cols-[1.4fr_1fr] items-center gap-12 lg:gap-20">

        {/* ── Left: text ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#2A2A2A] bg-[#1a1a1a]/60 rounded-full text-xs text-[#6EE7B7] uppercase font-semibold tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Available for Collaborations
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold gradient-text tracking-tighter leading-[0.95]">
              David<br className="hidden md:block" />Arawore
            </h1>
            <p className="text-xs sm:text-sm text-[#A0A0A0] font-mono tracking-[0.22em] uppercase">@davidarawore</p>
          </div>

          <p className="text-sm sm:text-lg text-gray-400 leading-relaxed max-w-lg">
            Merging the precision of medicine with the innovation of Web3.
            I build digital ecosystems where technology meets authentic human
            connection — one community at a time.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
            {["Web3 Storyteller", "Content Strategist", "Community Growth Lead", "Medical Background"].map((tag) => (
              <span key={tag} className="px-4 py-2 border border-[#2A2A2A] rounded-full text-[10px] sm:text-sm font-medium text-gray-400 bg-[#151515]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="gradient-btn px-8 py-3.5 rounded-xl font-bold text-white text-xs sm:text-sm uppercase tracking-wide">
              ↗ See My Work
            </button>
            <button className="px-8 py-3.5 border border-[#3A3A3A] hover:border-[#A855F7]/60 rounded-xl font-bold text-white text-xs sm:text-sm uppercase tracking-wide transition-colors">
              Let's Work Together
            </button>
          </div>
        </div>

        {/* ── Right: phone card ── */}
        <div className="relative w-full max-w-[320px] md:max-w-[340px] aspect-[9/16]">
          <div className="relative border border-[#2A2A2A] bg-[#0E0E0E]/80 backdrop-blur-xl p-4 rounded-[45px] shadow-[0_0_50px_rgba(0,0,0,0.5)] h-full w-full">
            
            {/* Glossy Badge */}
            <div className="absolute top-8 right-[-10px] bg-gradient-to-r from-[#A855F7] to-[#D946EF] px-5 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-widest shadow-lg z-10">
              Web3 Builder
            </div>

            {/* Inner Content Container */}
            <div className="w-full h-full rounded-[35px] border border-[#1A1A1A] bg-[#121212] overflow-hidden flex flex-col items-center justify-center gap-4 relative">
              <div className="w-24 h-24 rounded-full border border-[#2A2A2A] bg-gradient-to-br from-[#1A1A1A] to-[#000] flex items-center justify-center text-3xl font-bold text-white shadow-inner">
                DA
              </div>
              
              <div className="text-center">
                <p className="text-white font-bold text-lg">David Arawore</p>
                <p className="text-[#A855F7] text-xs font-mono tracking-widest uppercase">@davidarawore</p>
              </div>

              {/* Stats Grid */}
              <div className="w-[85%] grid grid-cols-3 gap-2">
                {[["12K", "Followers"], ["48", "Projects"], ["3yr", "Exp."]].map(([val, lbl]) => (
                  <div key={lbl} className="bg-[#1A1A1A]/50 rounded-xl py-3 px-4 border border-[#2A2A2A]">
                    <p className="text-white font-bold text-xs">{val}</p>
                    <p className="text-gray-500 text-[9px] uppercase tracking-wider">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Footer */}
            <div className="absolute bottom-8 left-8 right-8 p-4 rounded-2xl bg-[#0E0E0E] border border-[#222] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Nigeria 🇳🇬</p>
                <p className="text-[10px] text-gray-500">Building since 2024</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);