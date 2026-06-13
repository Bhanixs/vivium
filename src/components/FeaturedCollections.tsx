type Collection = {
  title: string;
  description: string;
  cta: string;
  image: string;
};

const COLLECTIONS: Collection[] = [
  {
    title: "Explorer Wear",
    description:
      "Handcrafted clothing, ethnic wear, cultural dresses from Rajasthan & Gujarat",
    cta: "Shop Explorer Wear",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Handcrafted Jewelry",
    description:
      "Necklaces, earrings, bracelets, traditional sets from Tamil Nadu & Karnataka",
    cta: "Shop Jewelry",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Embroidered Accessories",
    description:
      "Bags, wallets, pouches, scarves from West Bengal & Odisha",
    cta: "Shop Accessories",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Home Decor",
    description:
      "Wall hangings, decorative pieces, cushions, vases from Uttar Pradesh & Maharashtra",
    cta: "Shop Home Decor",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Festive Collection",
    description:
      "Special items for weddings, festivals, and celebrations from all regions",
    cta: "Shop Festive",
    image:
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=800&q=80",
  },
];

function CollectionCard({ item }: { item: Collection }) {
  return (
    <article className="group min-w-[260px] lg:min-w-0 snap-start shrink-0 lg:shrink">
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#E7CDBE]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-[#43654B]">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-[#2F2F2F]/70 leading-snug line-clamp-2">
        {item.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-[#DA7F4E] hover:underline"
      >
        {item.cta}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </article>
  );
}

export function FeaturedCollections() {
  return (
    <section
      aria-labelledby="collections-heading"
      className="bg-white py-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2
          id="collections-heading"
          className="text-3xl md:text-4xl font-bold text-[#43654B] mb-10 px-6"
        >
          Handcrafted Collections, Bridged to You
        </h2>

        {/* Mobile/tablet: horizontal scroll */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-2 -mb-2">
          {COLLECTIONS.map((c) => (
            <CollectionCard key={c.title} item={c} />
          ))}
        </div>

        {/* Desktop: 5-column grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6 px-6">
          {COLLECTIONS.map((c) => (
            <CollectionCard key={c.title} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollections;
