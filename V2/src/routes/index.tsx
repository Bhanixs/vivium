import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-artisan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivium — India's Craft, Everywhere It Belongs" },
      {
        name: "description",
        content:
          "Vivium connects artisans, designers and brands to schools, buildings, hospitality spaces and homes, through a platform built to scale craft.",
      },
      { property: "og:title", content: "Vivium — India's Craft, Everywhere It Belongs" },
      {
        property: "og:description",
        content:
          "Artisan-led workshops, craft-forward styling and a direct retail line, powered by one community and commerce platform.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const verticals = [
  {
    name: "Schools",
    to: "/schools",
    description:
      "Artisan-led craft workshops that bring real skills and real makers into the classroom",
  },
  {
    name: "Construction",
    to: "/construction",
    description:
      "Craft-forward styling and decor for model homes, common areas, and client handovers",
  },
  {
    name: "Hospitality",
    to: "/hospitality",
    description:
      "Curated artisan products and guest experiences for hotels, resorts, and dining spaces",
  },
  {
    name: "Direct Retail & D2C",
    to: "/retail",
    description:
      "Authentic, artisan-made products — available directly, with the maker's story attached",
  },
] as const;

function Home() {
  return (
    <div className="bg-primary text-primary-foreground">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_1fr] lg:pb-32">
        <div>
          <p className="eyebrow" style={{ color: "var(--color-primary-foreground)", opacity: 0.7 }}>
            Four verticals · Two technology missions
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            India's Craft,
            <br />
            <em className="text-accent">Everywhere It Belongs.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Vivium connects artisans, designers, and brands to the places craft actually
            gets used — schools, buildings, hospitality spaces, and homes — through a
            technology platform built to grow with every layer of that ecosystem.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#verticals"
              className="rounded-sm bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:opacity-90"
            >
              Explore Our Verticals
            </a>
            <Link
              to="/contact"
              className="rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        <figure className="relative">
          <img
            src={heroImage}
            alt="An artisan shaping wet clay on a potter's wheel in a sunlit workshop"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full rounded-sm object-cover"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
        </figure>
      </section>

      <section id="verticals" className="border-t border-border bg-card text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight lg:text-5xl">
            One artisan network, four places it goes to work.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {verticals.map((vertical, i) => (
              <Link
                key={vertical.name}
                to={vertical.to}
                className="group bg-card p-8 transition-colors hover:bg-secondary lg:p-10"
              >
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl">{vertical.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {vertical.description}
                </p>
                <span className="mt-6 inline-block text-sm text-clay">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="text-clay-foreground"
        style={{ backgroundImage: "var(--gradient-clay)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <p className="eyebrow text-clay-foreground/70">The platform</p>
          <h2 className="mt-5 max-w-3xl text-3xl leading-snug lg:text-4xl">
            Behind every vertical is a platform built to scale with it — a community that
            connects makers and buyers, and a commerce engine that gets craft into the
            world.
          </h2>
          <Link
            to="/technology"
            className="mt-10 inline-block border-b border-clay-foreground/40 pb-1 text-sm tracking-wide transition-colors hover:border-clay-foreground"
          >
            See how it works →
          </Link>
        </div>
      </section>
    </div>
  );
}
