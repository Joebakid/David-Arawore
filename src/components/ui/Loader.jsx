export const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]">
    <div className="relative">
      {/* Outer spinning ring */}
      <div className="w-16 h-16 border-4 border-t-[#D4AF37] border-r-[#D4AF37] border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      
      {/* Inner spinning ring (opposite direction) */}
      <div className="absolute top-2 left-2 w-12 h-12 border-4 border-t-[#8A9A5B] border-r-[#8A9A5B] border-b-transparent border-l-transparent rounded-full animate-spin-reverse"></div>
    </div>
  </div>
);