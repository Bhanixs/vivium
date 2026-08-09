import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/VerticalPage";
import heroImage from "@/assets/hero-hospitality.jpg";

export const Route = createFileRoute("/hospitality")({
  head: () => ({
    meta: [
      { title: "Hospitality — Artisan Decor & Guest Experiences | Vivium" },
      {
        name: "description",
        content:
          "In-room decor, welcome gifts, ceramic tableware, landscape planters, retail corners and on-site craft workshops for hotels and resorts.",
      },
      {
        property: "og:title",
        content: "Authentic Craft, Curated for Guest Experience — Vivium Hospitality",
      },
      {
        property: "og:description",
        content:
          "From the welcome gift to the courtyard planter, every touchpoint carries a real maker's story.",
      },
      { property: "og:url", content: "/hospitality" },
    ],
    links: [{ rel: "canonical", href: "/hospitality" }],
  }),
  component: HospitalityPage,
});

const offers = [
  {
    category: "In-Room Decor",
    detail: "Handwoven textiles, artisan wall art, terracotta fixtures",
  },
  {
    category: "Welcome & Turndown Gifts",
    detail: "Handmade soap and small artisan pieces, with the maker's story on the card",
  },
  {
    category: "Dining & F&B",
    detail: "Hand-thrown ceramic tableware and artisan serveware",
  },
  {
    category: "Landscape & Common Areas",
    detail:
      "Statement planters and living-wall installations — the highest-visibility category for guest photography",
  },
  {
    category: "Retail Corner",
    detail: "A curated shelf of artisan products guests can purchase before checkout",
  },
  {
    category: "Guest Experience Add-On",
    detail: "An on-site pottery or craft workshop, bookable as a paid guest activity",
  },
];

function HospitalityPage() {
  return (
    <VerticalPage
      eyebrow="Hospitality"
      headline="Authentic Craft, Curated for Guest Experience"
      intro="From the welcome gift to the courtyard planter, every touchpoint carries a real maker's story — the kind of detail guests actually photograph."
      image={heroImage}
      imageAlt="Hotel courtyard with large terracotta planters, living wall and artisan ceramics"
      offerTitle="What we offer"
      offers={offers}
      ctaHeadline="Start with welcome gifts or one product category."
      ctaLabel="Request a Sample Kit"
    />
  );
}
