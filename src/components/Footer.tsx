import { Instagram, Facebook } from "lucide-react";

const SHOP_LINKS = [
  "Explorer Wear",
  "Handcrafted Jewelry",
  "Embroidered Accessories",
  "Home Decor",
  "Festive Collection",
];

const COMPANY_LINKS = ["About", "Our Artisans", "Contact", "Partner With Us"];

function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="20" x2="12" y2="11" />
      <path d="M10.5 13.5c.5 1 1.2 1.5 2.3 1.5 2 0 3.2-1.8 3.2-4 0-2-1.5-3.5-3.8-3.5-2.6 0-4.2 1.9-4.2 4 0 .9.3 1.7.9 2.2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#43654B] text-[#E7CDBE] font-sans">
      <div className="max-w-[1280px] mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-white font-bold" style={{ fontSize: "24px" }}>
              VIVIUM
            </div>
            <div
              className="mt-1 font-normal text-[#DA7F4E]"
              style={{ fontSize: "13px" }}
            >
              From the Life to the Life
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#E7CDBE]">
              Bridging artisan heritage with modern markets, one craft at a time.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[#DA7F4E] font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {SHOP_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#DA7F4E] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#DA7F4E] font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#E7CDBE] hover:text-[#DA7F4E] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#E7CDBE] hover:text-[#DA7F4E] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-[#E7CDBE] hover:text-[#DA7F4E] transition-colors"
              >
                <PinterestIcon size={20} />
              </a>
            </div>
            <a
              href="mailto:hello@vivium.com"
              className="block text-sm mt-3 hover:text-white transition-colors"
            >
              hello@vivium.com
            </a>
            <a
              href="tel:+911234567890"
              className="block text-sm mt-1 hover:text-white transition-colors"
            >
              +91 12345 67890
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-3">
          <p className="text-xs text-[#A09F85]">
            © 2026 Vivium. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xs text-[#A09F85] hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-[#A09F85] hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
