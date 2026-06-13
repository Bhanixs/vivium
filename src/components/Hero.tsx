export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/bg--viv.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="max-w-2xl text-left">
          <p className="text-[#E7CDBE] text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            From the Life to the Life
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
          >
            Handcrafted Stories,
            <br />
            Woven for Modern Homes.
          </h1>
          <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
            Vivium bridges Indian artisan heritage with contemporary living —
            each piece a quiet conversation between maker and home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#DA7F4E] text-white px-7 py-3 font-semibold hover:bg-[#C56A3A] hover:-translate-y-0.5 transition-all"
            >
              Explore Handicrafts →
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-7 py-3 font-semibold hover:bg-white hover:text-[#43654B] transition-colors"
            >
              Learn Our Bridge Model →
            </a>
          </div>
        </div>
      </div>

      {/* Botanical leaf accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute bottom-6 right-6 w-48 h-48 md:w-72 md:h-72 opacity-15 pointer-events-none"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 170 C 60 110, 110 70, 180 40" />
        <path d="M70 140 C 75 120, 90 105, 115 100" />
        <path d="M95 120 C 100 100, 115 88, 140 82" />
        <path d="M120 100 C 125 82, 138 72, 160 66" />
        <path d="M55 158 C 60 138, 72 125, 95 118" />
        <path d="M145 78 C 150 62, 162 52, 178 46" />
      </svg>
    </section>
  );
}

export default Hero;
