export function AboutIntro() {
  return (
    <section
      aria-labelledby="about-intro-heading"
      className="relative bg-[#F3EBE2] py-20 overflow-hidden"
    >
      {/* Botanical accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute top-6 right-6 w-[150px] h-[150px] opacity-20 pointer-events-none"
        fill="none"
        stroke="#A09F85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 170 C 70 130, 120 80, 180 30" />
        <path d="M60 150 Q 75 130, 95 135 Q 105 145, 95 158 Q 80 165, 60 150 Z" />
        <path d="M90 120 Q 105 100, 125 105 Q 135 115, 125 128 Q 110 135, 90 120 Z" />
        <path d="M120 90 Q 135 70, 155 75 Q 165 85, 155 98 Q 140 105, 120 90 Z" />
        <path d="M150 60 Q 162 45, 178 50" />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#DA7F4E]">
              Welcome to Vivium
            </p>
            <h2
              id="about-intro-heading"
              className="mt-2 text-3xl md:text-4xl font-bold text-[#43654B] leading-tight"
            >
              The Handicraft Bridge Brand
            </h2>
          </div>
          <div>
            <p className="text-lg font-normal text-[#2F2F2F] leading-relaxed">
              At Vivium, we believe handicrafts should flow from life to life —
              from the artisan&apos;s hands to your home, from traditional
              techniques to modern markets, from heritage to future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
