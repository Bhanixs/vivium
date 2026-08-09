import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/VerticalPage";
import heroImage from "@/assets/hero-schools.jpg";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "Schools — Artisan Craft Workshops | Vivium" },
      {
        name: "description",
        content:
          "Artisan-led craft workshops for schools: single sessions, term residencies, annual craft weeks and CAS service-learning partnerships.",
      },
      { property: "og:title", content: "Where Craft Meets Curriculum — Vivium Schools" },
      {
        property: "og:description",
        content:
          "Not a worksheet about pottery — an actual potter in the classroom. Hands-on modules for every age group.",
      },
      { property: "og:url", content: "/schools" },
    ],
    links: [{ rel: "canonical", href: "/schools" }],
  }),
  component: SchoolsPage,
});

const formats = [
  {
    category: "Single Workshop (2–3 hrs)",
    detail:
      "A first trial — school fairs, cultural days, or a taste before a bigger commitment",
  },
  {
    category: "Term Residency (6–8 weeks)",
    detail:
      "Integrated into the art period or an after-school club, building a real skill over time",
  },
  {
    category: "Annual Craft Week",
    detail:
      "A whole-school event across grade levels — a strong, photograph-worthy PR moment",
  },
  {
    category: "CAS / Service-Learning Partnership",
    detail: "Structured Creativity/Activity/Service hours for IB Diploma students",
  },
];

const modules = [
  "Clay & Pottery",
  "Grow & Make",
  "Kokedama & Moss Craft",
  "Paper Craft & Upcycling",
  "Textile & Block Printing",
  "Tanjore & Traditional Painting",
  "Earth & Natural Building",
];

function SchoolsPage() {
  return (
    <VerticalPage
      eyebrow="Schools"
      headline="Where Craft Meets Curriculum"
      intro="Real artisans, real skills, and a hands-on module for every age group — not a worksheet about pottery, but an actual potter in the classroom."
      image={heroImage}
      imageAlt="School children shaping clay pots alongside an artisan potter in a classroom"
      offerTitle="Formats offered"
      offers={formats}
      ctaHeadline="Book a Pilot Workshop — no long-term commitment required."
      ctaLabel="Book a Pilot Workshop"
    >
      <div className="mt-16">
        <p className="eyebrow">Module menu</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Tiered by age group, from primary through design college.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {modules.map((module) => (
            <li
              key={module}
              className="rounded-sm border border-border bg-background px-4 py-2 text-sm"
            >
              {module}
            </li>
          ))}
        </ul>
      </div>
    </VerticalPage>
  );
}
