import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Community & Commerce Platform | Vivium" },
      {
        name: "description",
        content:
          "Two missions: a community platform powered by AI/ML, AR/VR and blockchain provenance, and a commerce platform serving B2B procurement and D2C retail.",
      },
      { property: "og:title", content: "Our Platform — Vivium Technology" },
      {
        property: "og:description",
        content:
          "The layer that makes four verticals possible to run at scale — verified makers, verified provenance, one commerce backbone.",
      },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechnologyPage,
});

const communityTech = [
  {
    name: "AI / ML",
    detail:
      "Smart matchmaking between artisans, designers, and buyers; demand forecasting so artisan partners can plan production with real visibility, not guesswork",
  },
  {
    name: "AR / VR",
    detail:
      "Virtual masterclasses with artisans; \u201csee it in your space\u201d visualization for decor and craft pieces before you buy; immersive maker-story experiences",
  },
  {
    name: "Blockchain",
    detail:
      "Verified provenance — every product traceable back to the artisan who made it; transparent, fair-payment smart contracts so makers are paid promptly and visibly",
  },
];

const commerce = [
  "Multi-vendor marketplace connecting artisans and designers directly to every buyer type",
  "Integrated ordering, logistics, and payments — one system whether the buyer is a hotel procurement team or an individual customer",
  "A dedicated B2B portal for institutional partners (schools, developers, hospitality groups) alongside the public D2C storefront",
];

function TechnologyPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <p className="eyebrow" style={{ color: "var(--color-primary-foreground)", opacity: 0.7 }}>
          Technology / Our platform
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          Two missions, one platform.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          This is the layer that makes the four verticals possible to run at scale — not a
          separate product.
        </p>
      </section>

      <section className="border-t border-border bg-card text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">Mission 01</p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-snug lg:text-4xl">
            A community platform
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every layer of the craft ecosystem — artisans, designers, brands, retailers,
            customers — connected on one platform, made smarter by the technology
            underneath it.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-3">
            {communityTech.map((tech) => (
              <article key={tech.name} className="bg-card p-8">
                <h3 className="text-xl">{tech.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tech.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow" style={{ color: "var(--color-primary-foreground)", opacity: 0.7 }}>
            Mission 02
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-snug lg:text-4xl">
            A commerce platform
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            The transactional backbone connecting every vertical — one system powering B2B
            procurement for schools, construction, and hospitality partners, and direct
            B2C retail for individual customers.
          </p>

          <ul className="mt-10 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {commerce.map((item) => (
              <li key={item} className="py-6 text-base leading-relaxed text-primary-foreground/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="text-clay-foreground"
        style={{ backgroundImage: "var(--gradient-clay)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-6 py-16">
          <p className="max-w-2xl text-xl leading-relaxed lg:text-2xl">
            The community platform is what makes commerce trustworthy — verified makers,
            verified provenance. The commerce platform is what turns the community into a
            functioning economy, not just a network.
          </p>
          <Link
            to="/contact"
            className="rounded-sm bg-background px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-90"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </div>
  );
}
