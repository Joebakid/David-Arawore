import { useState } from 'react';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Services", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <div className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-2xl bg-[#121212]/70 backdrop-blur-md border border-[#2A2A2A] shadow-2xl">
        
        {/* Logo */}
        <a href="#intro" className="text-white font-bold tracking-tighter hover:text-[#C3A9F5] transition-colors">
          David<span className="text-[#A855F7]">Arawore</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white uppercase tracking-widest transition-colors rounded-xl hover:bg-[#1A1A1A]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden md:block px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#D946EF] rounded-xl hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all">
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 p-6 rounded-2xl bg-[#121212]/95 backdrop-blur-lg border border-[#2A2A2A] md:hidden flex flex-col gap-2">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-center py-4 text-sm font-mono text-white uppercase tracking-widest border-b border-[#1A1A1A]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 text-center py-4 text-sm font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#D946EF] rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};