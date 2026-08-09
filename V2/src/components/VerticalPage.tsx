import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type OfferRow = { category: string; detail: string };

type VerticalPageProps = {
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  offerTitle: string;
  offers: OfferRow[];
  ctaHeadline: string;
  ctaLabel: string;
  secondaryCta?: { label: string; to: "/contact" };
  children?: ReactNode;
};

export function VerticalPage({
  eyebrow,
  headline,
  intro,
  image,
  imageAlt,
  offerTitle,
  offers,
  ctaHeadline,
  ctaLabel,
  secondaryCta,
  children,
}: VerticalPageProps) {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1fr_1fr] lg:pb-24">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>
        <img
          src={image}
          alt={imageAlt}
          width={1400}
          height={900}
          className="aspect-[7/5] w-full rounded-sm object-cover"
          style={{ boxShadow: "var(--shadow-soft)" }}
        />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">{offerTitle}</p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {offers.map((offer) => (
              <div key={offer.category} className="grid gap-2 py-7 sm:grid-cols-[minmax(0,20rem)_1fr] sm:gap-10">
                <h2 className="text-xl">{offer.category}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{offer.detail}</p>
              </div>
            ))}
          </div>
          {children}
        </div>
      </section>

      <section
        className="text-clay-foreground"
        style={{ backgroundImage: "var(--gradient-clay)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-6 py-16">
          <h2 className="max-w-2xl text-2xl leading-snug lg:text-3xl">{ctaHeadline}</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-sm bg-background px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-90"
            >
              {ctaLabel}
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="rounded-sm border border-clay-foreground/40 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:border-clay-foreground"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
