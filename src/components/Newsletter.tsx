import { useState } from "react";
import { CheckCircle } from "lucide-react";

const BENEFITS = [
  "First Access to New Collections",
  "10% Off Your First Order",
  "Artisan Stories",
  "Behind-the-Scenes Updates",
];

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("subscribe:", email);
    setEmail("");
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-[#43654B] py-16 text-center"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          id="newsletter-heading"
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Join the &ldquo;From Life to Life&rdquo; Movement
        </h2>
        <p className="mt-3 text-base text-white/80 max-w-lg mx-auto">
          Get exclusive access to new handmade collections, artisan stories, and
          special offers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubscribe();
            }}
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 rounded-full px-5 py-3 bg-white text-[#2F2F2F] border-none focus:outline-none focus:ring-2 focus:ring-[#DA7F4E]"
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="bg-[#DA7F4E] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#C56A3A] transition-colors"
          >
            Subscribe
          </button>
        </div>

        <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex items-center justify-center gap-2 text-sm text-white/90"
            >
              <CheckCircle size={18} color="#DA7F4E" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Newsletter;
