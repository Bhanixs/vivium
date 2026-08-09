import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/VerticalPage";
import heroImage from "@/assets/hero-retail.jpg";

export const Route = createFileRoute("/retail")({
  head: () => ({
    meta: [
      { title: "Direct Retail & D2C — Craft From the Maker | Vivium" },
      {
        name: "description",
        content:
          "A curated store of authentic artisan-made home decor, textiles, personal care and everyday objects — each attributed to its maker.",
      },
      { property: "og:title", content: "Craft, Direct From the Maker — Vivium Retail" },
      {
        property: "og:description",
        content:
          "Curated collections, maker attribution on every product, and a direct channel back to the artisan.",
      },
      { property: "og:url", content: "/retail" },
    ],
    links: [{ rel: "canonical", href: "/retail" }],
  }),
  component: RetailPage,
});

const differentiators = [
  {
    category: "Maker attribution",
    detail:
      "Every product page carries the artisan's name and story, not just a product description",
  },
  {
    category: "Curated, not infinite",
    detail:
      "Curated collections, not an infinite marketplace scroll — quality and story over sheer volume",
  },
  {
    category: "A direct channel",
    detail:
      "More of what customers pay goes to the person who made it, not layers of middlemen",
  },
];

function RetailPage() {
  return (
    <VerticalPage
      eyebrow="Direct Retail & D2C"
      headline="Craft, Direct From the Maker"
      intro="A curated store of authentic, artisan-made products — home decor, textiles, personal care, and everyday objects — each one attributed to the person who actually made it."
      image={heroImage}
      imageAlt="Flat lay of artisan ceramics, block-printed textile and handmade soap on linen"
      offerTitle="What makes this different"
      offers={differentiators}
      ctaHeadline="Shop the collection — or list your work with us."
      ctaLabel="Shop the Collection"
      secondaryCta={{ label: "Sell With Us", to: "/contact" }}
    >
      <div className="mt-14 rounded-sm border border-dashed border-border bg-background p-7">
        <p className="eyebrow">Launch assortment</p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The storefront structure is ready. Confirm your product categories and launch
          assortment — home decor, textiles, jewellery, wellness — and the collection grid
          goes live here.
        </p>
      </div>
    </VerticalPage>
  );
}
