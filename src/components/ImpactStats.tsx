const STATS: { value: string; label: string }[] = [
  { value: "50+", label: "Artisan Families Connected" },
  { value: "10,000+", label: "Customers Reached" },
  { value: "15+", label: "Traditional Crafts Preserved" },
  { value: "100%", label: "Fair Wages Paid" },
];

export function ImpactStats() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative bg-[#43654B] py-16 overflow-hidden"
    >
      <h2 id="impact-heading" className="sr-only">
        Our Impact
      </h2>

      {/* Decorative botanical accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 150 C 200 80, 400 180, 600 100 S 1000 60, 1200 130" />
        <path d="M120 130 q 12 -18, 30 -14 q 6 12, -8 22 q -18 6, -22 -8 z" />
        <path d="M320 150 q 14 -20, 34 -16 q 7 14, -9 24 q -20 6, -25 -8 z" />
        <path d="M560 110 q 14 -22, 34 -18 q 7 14, -9 26 q -20 6, -25 -8 z" />
        <path d="M820 80 q 14 -20, 34 -16 q 7 14, -9 24 q -20 6, -25 -8 z" />
        <path d="M1040 100 q 14 -20, 34 -16 q 7 14, -9 24 q -20 6, -25 -8 z" />
        <path d="M40 170 C 80 150, 110 158, 130 140" />
        <path d="M900 60 C 940 45, 980 55, 1010 40" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-[#DA7F4E]">
                {s.value}
              </div>
              <div className="mt-2 text-sm md:text-base text-white/85 uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;
