type CTABannerProps = {
  heading?: string;
  buttonLabel?: string;
  href?: string;
};

export function CTABanner({
  heading = "Ready to bring a piece of this story home?",
  buttonLabel = "Shop Our Collections →",
  href = "#",
}: CTABannerProps) {
  return (
    <section
      aria-label="Call to action"
      className="bg-[#DA7F4E] py-16 text-center"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {heading}
        </h2>
        <a
          href={href}
          className="inline-flex items-center justify-center mt-6 bg-white text-[#43654B] rounded-full px-8 py-3 font-semibold hover:bg-[#F3EBE2] transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export default CTABanner;
