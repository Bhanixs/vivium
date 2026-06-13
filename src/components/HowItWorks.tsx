import { Hand, Leaf, Home, type LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  caption: string;
};

const STEPS: Step[] = [
  {
    icon: Hand,
    title: "Artisans",
    caption:
      "Skilled artisans across India create with traditional techniques.",
  },
  {
    icon: Leaf,
    title: "Craft & Care",
    caption:
      "Each piece is handmade using natural materials with fair wages and ethical sourcing.",
  },
  {
    icon: Home,
    title: "Your Home",
    caption:
      "Authentic, story-backed handicrafts delivered to your doorstep.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-white py-20"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <h2
          id="how-it-works-heading"
          className="text-3xl md:text-4xl font-bold text-[#43654B] text-center mb-16"
        >
          How Vivium Bridges Artisans to You
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Dashed connector — desktop only. top-10 = half of w-20 icon */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-[16.6667%] right-[16.6667%] border-t-2 border-dashed border-[#A09F85]/40"
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 rounded-full bg-[#E7CDBE] flex items-center justify-center z-10">
                  <Icon size={32} color="#DA7F4E" />
                  <span
                    aria-label={`Step ${i + 1}`}
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#43654B] text-white text-xs font-semibold flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#43654B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-[#2F2F2F]/80 max-w-xs leading-relaxed">
                  {step.caption}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
