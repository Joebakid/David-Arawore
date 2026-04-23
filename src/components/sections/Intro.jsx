export const Intro = () => (
  <section className="min-h-[calc(100vh-80px)] relative overflow-hidden flex items-center bg-transparent pt-20 pb-20">
    {/* Glow blobs */}
    <div className="hidden md:block absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#A855F7]/10 blur-3xl pointer-events-none" />
    <div className="hidden md:block absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-[#D946EF]/10 blur-3xl pointer-events-none" />

    <div className="container-main relative z-10 w-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* ── Left: Text Content ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 w-full max-w-2xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#2A2A2A] bg-[#1a1a1a]/60 rounded-full text-[10px] sm:text-xs text-[#6EE7B7] uppercase font-semibold tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Available for Collaborations
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold gradient-text tracking-tighter leading-[1.1] md:leading-[0.95]">
              David<br className="hidden md:block" />Arawore
            </h1>
            <p className="text-xs sm:text-sm text-[#A0A0A0] font-mono tracking-[0.22em] uppercase">@davidarawore</p>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg">
            Merging the precision of medicine with the innovation of Web3.
            I build digital ecosystems where technology meets authentic human
            connection — one community at a time.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {["Web3 Storyteller", "Content Strategist", "Community Growth Lead", "Medical Background"].map((tag) => (
              <span key={tag} className="px-4 py-2 border border-[#2A2A2A] rounded-full text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 bg-[#151515]">
                {tag}
              </span>
            ))}
          </div>

        {/* Button Container - Compact & Aligned */}
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
  
  <button className="gradient-btn px-6 py-2.5 rounded-xl font-bold text-white text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
    <span>↗</span> See My Work
  </button>
  
  <button className="px-6 py-2.5 border border-[#3A3A3A] hover:border-[#A855F7]/60 hover:bg-[#1A1A1A] rounded-xl font-bold text-white text-[11px] sm:text-xs uppercase tracking-wider transition-all">
    Let's Work Together
  </button>
  
</div>
        </div>

        {/* ── Right: Phone Card ── */}
        <div className="relative w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px] aspect-[9/16] shrink-0">
          <div className="relative border border-[#2A2A2A] bg-[#0E0E0E]/80 backdrop-blur-xl p-4 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] h-full w-full">
            
            <div className="absolute top-8 right-[-10px] bg-gradient-to-r from-[#A855F7] to-[#D946EF] px-4 py-1.5 rounded-xl text-white font-bold text-[9px] uppercase tracking-widest shadow-lg z-10 rotate-3">
              Web3 Builder
            </div>

            <div className="w-full h-full rounded-[30px] border border-[#1A1A1A] bg-[#121212] overflow-hidden flex flex-col items-center justify-center gap-4 relative">
              
              <div className="w-24 h-24 rounded-full border-2 border-[#2A2A2A] overflow-hidden shadow-2xl">
                <img 
                  src="/assests/david-profile.jpeg" 
                  alt="David Arawore" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center px-4">
                <p className="text-white font-bold text-base sm:text-lg">David Arawore</p>
                <p className="text-[#A855F7] text-[10px] sm:text-xs font-mono tracking-widest uppercase">@davidarawore</p>
              </div>

              {/* Stats Grid - Fixed Alignment */}
              <div className="w-[90%] grid grid-cols-3 gap-2">
                {[["12K", "Followers"], ["48", "Projects"], ["3yr", "Exp."]].map(([val, lbl]) => (
                  <div key={lbl} className="bg-[#1A1A1A]/50 rounded-xl py-2 px-1 border border-[#2A2A2A] flex flex-col items-center justify-center">
                    <p className="text-white font-bold text-[10px] sm:text-xs leading-none">{val}</p>
                    <p className="text-gray-500 text-[8px] sm:text-[9px] uppercase tracking-wider mt-1.5">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0E0E0E] border border-[#222] flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-white">Nigeria 🇳🇬</p>
                <p className="text-[9px] sm:text-[10px] text-gray-500">Building since 2024</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);