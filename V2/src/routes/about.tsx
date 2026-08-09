import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-artisan.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vivium — Artisans at the Centre of the Economy" },
      {
        name: "description",
        content:
          "Vivium connects artisans, designers, brands and buyers on one platform, building toward skill-development and commerce hubs in every district of India.",
      },
      { property: "og:title", content: "About Vivium" },
      {
        property: "og:description",
        content:
          "A craft economy where the people who make things are the ones who benefit most from their value.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <p className="eyebrow" style={{ color: "var(--color-primary-foreground)", opacity: 0.7 }}>
          About Vivium
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          Artisans at the centre of the modern economy — not as a footnote.
        </h1>
      </section>

      <img
        src={heroImage}
        alt="An artisan shaping wet clay on a potter's wheel"
        width={1600}
        height={1200}
        loading="lazy"
        className="mx-auto aspect-[21/9] w-full max-w-6xl px-6 object-cover"
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-lg leading-relaxed">
          Vivium exists to put India's artisans at the center of the modern economy — not
          as a footnote, not as a "charity" line item, but as the foundation of a real,
          growing business. We connect every layer of the craft, art and culture ecosystem
          — artisans, designers, influencers, brands, businesses, retailers, traders, and
          customers — on one platform, and we're building toward physical
          skill-development and commerce hubs in every district of India.
        </p>
        <p className="mt-7 text-lg leading-relaxed text-primary-foreground/80">
          Today, that mission shows up in four concrete verticals: workshops that bring
          craft into schools, product lines for construction and hospitality spaces, and a
          direct retail line that puts authentic, maker-attributed products straight into
          customers' hands. Every one of them draws on the same underlying network of
          artisans and designers — and every one of them feeds the same long-term goal: a
          craft economy where the people who make things are the ones who benefit most
          from their value.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/technology"
            className="rounded-sm bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:opacity-90"
          >
            See the platform
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Partner with us
          </Link>
        </div>
      </section>
    </div>
  );
}
