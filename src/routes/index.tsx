import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { AboutIntro } from "@/components/AboutIntro";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChoose } from "@/components/WhyChoose";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { ImpactStats } from "@/components/ImpactStats";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivium — From the Life to the Life" },
      {
        name: "description",
        content:
          "Vivium bridges Indian artisan heritage with modern homes — handcrafted, story-driven home goods and accessories.",
      },
      { property: "og:title", content: "Vivium — From the Life to the Life" },
      {
        property: "og:description",
        content:
          "Vivium bridges Indian artisan heritage with modern homes — handcrafted, story-driven home goods and accessories.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#F3EBE2] font-sans text-[#2F2F2F]">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <AboutIntro />
        <HowItWorks />
        <WhyChoose />
        <FeaturedCollections />
        <ImpactStats />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
