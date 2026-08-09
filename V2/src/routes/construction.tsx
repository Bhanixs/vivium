import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/VerticalPage";
import heroImage from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      { title: "Construction — Artisan Styling for Developers | Vivium" },
      {
        name: "description",
        content:
          "Model home styling, lobby installations, custom planters and artisan handover gifts for residential developers.",
      },
      { property: "og:title", content: "Craft That Sells Spaces — Vivium Construction" },
      {
        property: "og:description",
        content:
          "Distinctive, artisan-made styling for model homes, common areas and the handover moment.",
      },
      { property: "og:url", content: "/construction" },
    ],
    links: [{ rel: "canonical", href: "/construction" }],
  }),
  component: ConstructionPage,
});

const offers = [
  {
    category: "Model Home Styling",
    detail:
      "Curated decor sets — wall art, textiles, accent furniture — staged per room type",
  },
  {
    category: "Common Area & Lobby Installations",
    detail: "Large-scale art pieces and statement reception features",
  },
  {
    category: "Balcony & Landscape Elements",
    detail: "Custom-sized planters and vertical garden panels with craft framing",
  },
  {
    category: "Client Handover Gift",
    detail:
      "An artisan decor piece — memorable at the single most emotional moment in the sales process",
  },
];

function ConstructionPage() {
  return (
    <VerticalPage
      eyebrow="Construction"
      headline="Craft That Sells Spaces"
      intro="Distinctive, artisan-made styling for model homes, common areas, and the handover moment — the kind of detail a generic decor vendor can't replicate."
      image={heroImage}
      imageAlt="Styled model home living room with artisan textiles, terracotta planters and wall art"
      offerTitle="What we offer"
      offers={offers}
      ctaHeadline="Start with one model home or one batch of handover gifts."
      ctaLabel="Request a Styling Quote"
    />
  );
}
