import {
  Link2,
  Hammer,
  Heart,
  Handshake,
  Leaf,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

type Value = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const VALUES: Value[] = [
  {
    Icon: Link2,
    title: "Bridge Mindset",
    desc: "Connecting every layer of the handicraft ecosystem, not just selling products.",
  },
  {
    Icon: Hammer,
    title: "Authentic Handicrafts",
    desc: "100% handcrafted by skilled artisans using traditional techniques.",
  },
  {
    Icon: Heart,
    title: "Crafted with Care",
    desc: "Every product carries the story and skill of the artisan who made it.",
  },
  {
    Icon: Handshake,
    title: "Artisan Empowerment",
    desc: "Fair wages, transparent compensation, sustainable livelihoods.",
  },
  {
    Icon: Leaf,
    title: "Sustainable & Ethical",
    desc: "Natural materials, eco-friendly production, zero-waste.",
  },
  {
    Icon: BookOpen,
    title: "Craft Preservation",
    desc: "Preserving traditional techniques for future generations.",
  },
];

export function WhyChoose() {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-[#F3EBE2] py-20"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <h2
          id="why-heading"
          className="text-3xl md:text-4xl font-bold text-[#43654B] text-center mb-12"
        >
          Why Choose Vivium?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#DA7F4E]/15 flex items-center justify-center">
                <Icon size={24} color="#DA7F4E" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#43654B]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[#2F2F2F]/80 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
