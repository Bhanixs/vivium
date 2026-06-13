import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I love knowing that my purchase connects directly to the artisan who made it. Beautiful craftsmanship with transparency!",
    author: "Anjali M., Chennai",
  },
  {
    quote:
      "Vivium is not just a brand — it's a movement. You can feel the heritage and the innovation together.",
    author: "Rajesh K., Bangalore",
  },
  {
    quote:
      "Finally a handicraft brand that empowers artisans! Vivium bridges everything perfectly. My go-to for authentic handcrafted products.",
    author: "Priya S., Mumbai",
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#E7CDBE] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-[#43654B] text-center mb-12"
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="bg-white rounded-2xl p-6 shadow-md flex flex-col"
            >
              <div
                className="flex items-center gap-1 mb-3"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    color="#DA7F4E"
                    fill="#DA7F4E"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="italic text-sm text-[#2F2F2F] leading-relaxed">
                {t.quote}
              </blockquote>
              <hr className="my-4 border-t border-[#A09F85]/20" />
              <figcaption className="text-sm font-semibold text-[#43654B]">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
