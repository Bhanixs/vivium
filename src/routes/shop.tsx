import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Vivium Handcrafted Collections" },
      {
        name: "description",
        content:
          "Browse Vivium's handcrafted collections — explorer wear, jewelry, accessories, home decor and festive pieces made by artisans across India.",
      },
      {
        property: "og:title",
        content: "Shop — Vivium Handcrafted Collections",
      },
      {
        property: "og:description",
        content:
          "Browse Vivium's handcrafted collections — explorer wear, jewelry, accessories, home decor and festive pieces made by artisans across India.",
      },
    ],
  }),
  component: ShopPage,
});

const CATEGORIES = [
  "All",
  "Explorer Wear",
  "Jewelry",
  "Accessories",
  "Home Decor",
  "Festive",
];

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
  {
    name: "Heritage-Preserved Scarf",
    artisan: "Priya, Gujarat",
    price: "₹1,200",
    image:
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hand-Block Printed Cushion Cover",
    artisan: "Lakshmi, Rajasthan",
    price: "₹850",
    image:
      "https://images.unsplash.com/photo-1584346133934-2a4ed1b3b0b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Terracotta Earring Set",
    artisan: "Kavitha, Tamil Nadu",
    price: "₹550",
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Woven Bamboo Basket",
    artisan: "Suresh, Assam",
    price: "₹1,100",
    image:
      "https://images.unsplash.com/photo-1606639386377-e7a0c12c5d10?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Festive Embroidered Stole",
    artisan: "Meera, Rajasthan",
    price: "₹1,500",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  },
];

function badgeClasses(badge: Product["badge"]) {
  if (badge === "New") return "bg-[#DA7F4E]";
  if (badge === "Bestseller") return "bg-[#924032]";
  return "";
}

function ShopHero() {
  return (
    <section className="relative bg-[#F3EBE2] py-20 text-center overflow-hidden">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute top-6 right-6 w-[160px] h-[160px] opacity-15 pointer-events-none"
        fill="none"
        stroke="#A09F85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 170 C 70 130, 120 80, 180 30" />
        <path d="M60 150 Q 75 130, 95 135 Q 105 145, 95 158 Q 80 165, 60 150 Z" />
        <path d="M90 120 Q 105 100, 125 105 Q 135 115, 125 128 Q 110 135, 90 120 Z" />
        <path d="M120 90 Q 135 70, 155 75 Q 165 85, 155 98 Q 140 105, 120 90 Z" />
        <path d="M150 60 Q 162 45, 178 50" />
      </svg>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#43654B]">
          Handcrafted Collections, Bridged to You
        </h1>
      </div>
    </section>
  );
}

function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="sticky top-20 z-40 bg-white border-b border-[#A09F85]/15 py-6">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex md:justify-center gap-3 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange(cat)}
                className={
                  "shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors " +
                  (isActive
                    ? "bg-[#DA7F4E] text-white"
                    : "border-2 border-[#43654B] text-[#43654B] hover:bg-[#43654B]/5")
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  const handleAdd = (name: string) => console.log("Add to cart:", name);
  return (
    <section className="bg-[#F3EBE2] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
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
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeClasses(p.badge)}`}
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
                  onClick={() => handleAdd(p.name)}
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

function NotifyBanner() {
  const [email, setEmail] = useState("");
  const handleNotify = () => {
    console.log("notify me:", email);
    setEmail("");
  };
  return (
    <section
      aria-label="New arrivals signup"
      className="bg-[#43654B] py-16 text-center"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          New arrivals dropping soon — join our list
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleNotify();
            }}
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 rounded-full px-5 py-3 bg-white text-[#2F2F2F] border-none focus:outline-none focus:ring-2 focus:ring-[#DA7F4E]"
          />
          <button
            type="button"
            onClick={handleNotify}
            className="bg-[#DA7F4E] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#C56A3A] transition-colors"
          >
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
}

function ShopPage() {
  const [active, setActive] = useState("All");
  return (
    <div className="min-h-screen bg-[#F3EBE2] font-sans text-[#2F2F2F]">
      <Navbar />
      <main className="pt-20">
        <ShopHero />
        <CategoryFilter active={active} onChange={setActive} />
        <ProductGrid />
        <NotifyBanner />
      </main>
      <Footer />
    </div>
  );
}
