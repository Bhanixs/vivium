import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vivium — Connect With Us" },
      {
        name: "description",
        content:
          "Get in touch with Vivium for questions, partnerships, or artisan collaborations.",
      },
      { property: "og:title", content: "Contact Vivium — Connect With Us" },
      {
        property: "og:description",
        content:
          "Get in touch with Vivium for questions, partnerships, or artisan collaborations.",
      },
    ],
  }),
  component: ContactPage,
});

const INFO_CARDS = [
  { Icon: Mail, label: "Email", value: "hello@vivium.com" },
  { Icon: Phone, label: "Phone", value: "+91 12345 67890" },
  { Icon: MessageCircle, label: "WhatsApp", value: "Chat Now" },
  { Icon: Clock, label: "Hours", value: "Mon–Sat: 9 AM – 6 PM" },
] as const;

function ContactHero() {
  return (
    <section className="bg-[#43654B] py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Connect With Vivium
      </h1>
      <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
        We&apos;d love to hear from you — questions, partnerships, or artisan
        collaborations.
      </p>
    </section>
  );
}

function ContactInfoCards() {
  return (
    <section className="bg-[#F3EBE2] py-12">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {INFO_CARDS.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-6 shadow-md text-center flex flex-col items-center"
          >
            <Icon size={28} color="#DA7F4E" />
            <p className="mt-3 text-sm font-semibold text-[#43654B]">{label}</p>
            <p className="mt-1 text-sm text-[#2F2F2F]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const inputClass =
  "rounded-xl border border-[#A09F85]/30 px-4 py-3 w-full focus:outline-none focus:border-[#DA7F4E] bg-white text-sm text-[#2F2F2F] transition-colors duration-150";
const labelClass = "block text-sm font-semibold text-[#43654B] mb-1.5";

function ContactFormAndAddress() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({ name, email, subject, message });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Form — 3 / 5 cols */}
        <div className="md:col-span-3">
          <div className="bg-[#F3EBE2] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#43654B] mb-6">
              Send Us a Message
            </h2>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                >
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Press</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  className={inputClass}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto mt-4 bg-[#DA7F4E] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#C56A3A] hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Address card — 2 / 5 cols */}
        <div className="md:col-span-2">
          <div className="bg-[#43654B] rounded-2xl p-8 text-white h-full">
            <h2 className="text-xl font-semibold text-[#DA7F4E]">Visit Us</h2>
            <p className="mt-3 text-sm text-white/85 leading-relaxed">
              [Business Address], Chennai, Tamil Nadu, India
            </p>
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
              alt="Map location, Chennai, Tamil Nadu"
              loading="lazy"
              className="rounded-xl mt-6 w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtisanPartnerCTA() {
  return (
    <section className="bg-[#E7CDBE] py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#43654B]">
          Are You an Artisan? Join Our Bridge
        </h2>
        <p className="mt-3 text-base text-[#2F2F2F] max-w-xl mx-auto leading-relaxed">
          Partner with Vivium for fair wages, global market access, and a
          platform that tells your craft&apos;s story.
        </p>
        <button className="mt-6 bg-[#DA7F4E] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#C56A3A] hover:-translate-y-0.5 transition-all duration-200">
          Apply to Partner →
        </button>
      </div>
    </section>
  );
}

function CollaborationCTA() {
  return (
    <section className="bg-white py-12 text-center">
      <div className="max-w-lg mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#43654B]">
          Interested in Collaborating?
        </h2>
        <p className="mt-2 text-sm text-[#2F2F2F]/80 leading-relaxed">
          We welcome design studios, sourcing partners, and craft organizations
          to connect with us.
        </p>
        <button className="mt-4 text-[#DA7F4E] font-semibold hover:underline group inline-flex items-center gap-1 transition-all duration-200">
          Get in Touch
          <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F3EBE2] font-sans text-[#2F2F2F]">
      <Navbar />
      <main className="pt-20">
        <ContactHero />
        <ContactInfoCards />
        <ContactFormAndAddress />
        <ArtisanPartnerCTA />
        <CollaborationCTA />
      </main>
      <Footer />
    </div>
  );
}
