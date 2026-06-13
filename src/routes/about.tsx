import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Sprout, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vivium — From Life to Life" },
      {
        name: "description",
        content:
          "The story behind Vivium: bridging artisan heritage with modern markets, one craft at a time.",
      },
      { property: "og:title", content: "About Vivium — From Life to Life" },
      {
        property: "og:description",
        content:
          "The story behind Vivium: bridging artisan heritage with modern markets, one craft at a time.",
      },
    ],
  }),
  component: AboutPage,
});

const GAPS: { title: string; desc: string }[] = [
  {
    title: "Artisans → Market",
    desc: "Rural artisans can now reach global customers directly.",
  },
  {
    title: "Traditional → Modern",
    desc: "Ancient crafts reimagined with contemporary design appeal.",
  },
  {
    title: "Raw Materials → Products",
    desc: "Natural materials transformed into finished handicrafts with minimal waste.",
  },
  {
    title: "Craft → Consumer",
    desc: "Every product carries the story of the artisan who made it.",
  },
  {
    title: "Heritage → Future",
    desc: "Traditional techniques preserved and passed to the next generation.",
  },
];

function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative w-full min-h-[50vh] flex items-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
      />
      <div className="relative z-10 max-w-2xl px-6 md:px-16 py-20">
        <h1
          id="about-hero-heading"
          className="text-white font-bold text-4xl md:text-5xl leading-tight"
        >
          The Story Behind Vivium: From Life to Life
        </h1>
        <p className="mt-4 text-lg text-white/85 leading-relaxed">
          Bridging artisan heritage with modern markets — one craft at a time.
        </p>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* Botanical accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute top-6 right-6 w-[150px] h-[150px] opacity-15 pointer-events-none"
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center md:text-left">
        <h2 id="our-story-heading" className="sr-only">
          Our Story
        </h2>
        <p className="text-lg text-[#2F2F2F] leading-relaxed">
          Vivium was born from a simple but powerful belief: handicrafts should
          flow from life to life. From the artisan&apos;s life — their hands,
          their craft, their community — to the customer&apos;s life: your home,
          your style, your values.
        </p>

        <h3 className="mt-10 mb-6 text-2xl font-semibold text-[#43654B]">
          The 5 Gaps We Bridge
        </h3>

        <ul className="space-y-5">
          {GAPS.map((g, i) => (
            <li key={g.title} className="flex items-start gap-4 text-left">
              <span
                aria-hidden="true"
                className="shrink-0 w-8 h-8 rounded-full bg-[#DA7F4E]/15 text-[#DA7F4E] font-semibold flex items-center justify-center"
              >
                {i + 1}
              </span>
              <p className="text-[#2F2F2F] leading-relaxed">
                <span className="font-bold text-[#43654B]">{g.title}</span>
                {" — "}
                {g.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PILLARS: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Eye,
    title: "Our Vision",
    desc: "To enhance the livelihood of artisans by bringing consumers back to their roots, achieving excellence and sustainability.",
  },
  {
    Icon: Target,
    title: "Our Mission",
    desc: "To provide natural, eco-friendly, and personalized handcrafted products by building strong artisan-consumer relationships.",
  },
  {
    Icon: Sprout,
    title: "Our Values",
    desc: "Earth-friendly practices, prolonged creativity, and ethical sourcing across our entire supply chain.",
  },
];

function MissionVisionValues() {
  return (
    <section
      aria-label="Mission, Vision, Values"
      className="bg-[#F3EBE2] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {PILLARS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#43654B]/10 flex items-center justify-center mx-auto">
                <Icon size={24} color="#43654B" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#43654B]">
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

type Artisan = {
  group: string;
  region: string;
  desc: string;
  photo: string;
};

const ARTISANS: Artisan[] = [
  {
    group: "Handweaving Experts",
    region: "West Bengal & Odisha",
    desc: "10–30 years of generational weaving expertise",
    photo:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=400&q=80",
  },
  {
    group: "Embroidery Masters",
    region: "Rajasthan & Gujarat",
    desc: "Generational embroidery crafts passed through families",
    photo:
      "https://images.unsplash.com/photo-1597393353415-b3730f3719fe?auto=format&fit=crop&w=400&q=80",
  },
  {
    group: "Jewelry Makers",
    region: "Tamil Nadu & Karnataka",
    desc: "Traditional metalwork and jewelry-making techniques",
    photo:
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&w=400&q=80",
  },
  {
    group: "Bamboo Craftsmen",
    region: "Kerala & Assam",
    desc: "Natural material crafts using sustainable bamboo",
    photo:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=400&q=80",
  },
  {
    group: "Decor Artists",
    region: "Uttar Pradesh & Maharashtra",
    desc: "Specialists in handcrafted home decor pieces",
    photo:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=400&q=80",
  },
];

function OurArtisans() {
  return (
    <section
      aria-labelledby="artisans-heading"
      className="bg-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="artisans-heading"
          className="text-3xl md:text-4xl font-bold text-[#43654B] text-center mb-12"
        >
          The Lives Behind Your Products
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {ARTISANS.map((a) => (
            <article
              key={a.group}
              className="flex flex-col items-center text-center w-full sm:w-[260px]"
            >
              <img
                src={a.photo}
                alt={`${a.group}, ${a.region}`}
                loading="lazy"
                className="w-28 h-28 rounded-full object-cover bg-[#E7CDBE]"
              />
              <h3 className="mt-4 text-lg font-semibold text-[#43654B]">
                {a.group}
              </h3>
              <p className="mt-1 text-sm text-[#DA7F4E]">{a.region}</p>
              <p className="mt-2 text-sm text-[#2F2F2F]/80 max-w-xs leading-relaxed">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransparencyStory() {
  return (
    <section
      aria-labelledby="transparency-heading"
      className="bg-[#E7CDBE] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80"
              alt="Artisan hands working on a handcrafted piece"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2
              id="transparency-heading"
              className="text-3xl md:text-4xl font-bold text-[#43654B] leading-tight"
            >
              How Your Purchase Connects to a Life
            </h2>
            <p className="mt-4 text-base text-[#2F2F2F] leading-relaxed">
              When you buy from Vivium, you&apos;re not just getting a
              handicraft — you&apos;re connecting with an artisan&apos;s life,
              bridging their craft to your home. Every product comes with the
              artisan&apos;s name, region, and craft story, so you always know
              who made it and where it came from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3EBE2] font-sans text-[#2F2F2F]">
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <OurStory />
        <MissionVisionValues />
        <OurArtisans />
        <TransparencyStory />
        <CTABanner />
      </main>
      <Footer />

    </div>
  );
}

