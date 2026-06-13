type Product = {
  name: string;
  artisan: string;
  price: string;
  badge?: "New" | "Bestseller";
  image: string;
};

const PRODUCTS: Product[] = [
  {
    name: "AI-Inspired Embroidered Jacket",
    artisan: "Meera, Rajasthan",
    price: "₹3,500",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1606293459209-cd91e7d3a020?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Handcrafted Jewelry Set",
    artisan: "Rajesh, Tamil Nadu",
    price: "₹1,800",
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Embroidered Tote Bag",
    artisan: "Anjali, West Bengal",
    price: "₹650",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bamboo Wall Hanging",
    artisan: "Vivek, Uttar Pradesh",
    price: "₹950",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=800&q=80",
  },
];

function badgeClasses(badge: Product["badge"]) {
  if (badge === "New") return "bg-[#DA7F4E]";
  if (badge === "Bestseller") return "bg-[#924032]";
  return "";
}

export function FeaturedProducts() {
  const handleAddToCart = (name: string) => {
    console.log("Add to cart:", name);
  };

  return (
    <section
      aria-labelledby="products-heading"
      className="bg-[#F3EBE2] py-20"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          id="products-heading"
          className="text-3xl md:text-4xl font-bold text-[#43654B] text-center mb-12"
        >
          Our Most Loved Products
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative aspect-square bg-[#E7CDBE]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {p.badge && (
                  <span
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeClasses(
                      p.badge,
                    )}`}
                  >
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-[#43654B]">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs text-[#A09F85]">{p.artisan}</p>
                <p className="mt-2 text-lg font-bold text-[#2F2F2F]">
                  {p.price}
                </p>
                <button
                  type="button"
                  onClick={() => handleAddToCart(p.name)}
                  className="mt-3 w-full bg-[#DA7F4E] text-white rounded-full py-2 text-sm font-semibold hover:bg-[#C56A3A] hover:-translate-y-0.5 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
