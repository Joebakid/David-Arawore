export const Testimonials = () => {
  const testimonials = [
   {
      quote: "Your pen game is A+++ ♾️. You can fit in as the content writer and strategist for any team.",
      name: "Poetic prophet",
      title: "Co-founder, Techiekraft",
      image: "/assests/cake.jpeg" // Changed from ./assets/
    },
    {
      quote: "Daravid makes a good impression with his writing skills, curates badass content, has a good grasp of whatever project he's working on, and transitions quite well.",
      name: "Ericbal",
      title: "Head, Rykte Agency",
      image: "/assests/privacy.jpeg" // Changed from /assets/
    },
    {
      quote: "Spaces and podcast? You killed it with your team. Super happy to progress to the next phase of our marketing journey.",
      name: "Henry",
      title: "Marketing Expert",
      image: "/assests/zano.jpeg" // Changed from /assets/
    },
    {
      quote: "Amazing scripts, intriguing storytelling. You keep your audience glued with your tactics.",
      name: "Anonymous",
      title: "Marketing Lead, Anonymous Project",
      image: null
    },
    {
      quote: "I trust you with delivering my articles and research works together with marketing plans. I wouldn't second guess coming to you at all.",
      name: "Oracle",
      title: "Crypto KOL",
      image: null
    }
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="container-main">
        
        <p className="text-xs font-mono text-[#A855F7] tracking-[0.3em] uppercase mb-3">05 — Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
          Trusted by the <span className="gradient-text">people who've seen it.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-8 border border-[#1E1E1E] bg-[#111]/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:border-[#A855F7]/30 hover:bg-[#151515]"
            >
              <span className="absolute top-6 right-8 text-2xl text-[#A855F7]/20 font-sans">♾️</span>
              
              <p className="text-gray-400 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                {t.image ? (
  <img 
    src={t.image} 
    alt={t.name} 
    /* Changed object-cover to object-contain and added p-1 for breathing room */
    className="h-[30px]  rounded-full object-contain  border border-[#2A2A2A] bg-white shadow-lg"
  />
): (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A855F7] to-[#D946EF] flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-[#A855F7] text-[10px] font-mono uppercase tracking-wider">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};