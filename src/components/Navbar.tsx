import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",    to: "/" as const },
  { label: "About",   to: "/about" as const },
  { label: "Shop",    to: "/shop" as const },
  { label: "Contact", to: "/contact" as const },
];

const activeStyle = { color: "#DA7F4E" };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white shadow-md"
    : "bg-[#F3EBE2]/90 backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none"
          aria-label="Vivium home"
        >
          <span
            className="font-bold tracking-wide text-[#43654B]"
            style={{ fontSize: "22px" }}
          >
            VIVIUM
          </span>
          <span
            className="mt-1 text-[#A09F85] font-normal"
            style={{ fontSize: "10px" }}
          >
            From the Life to the Life
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              activeProps={{ style: activeStyle }}
              activeOptions={link.to === "/" ? { exact: true } : undefined}
              className="text-[#2F2F2F] hover:text-[#DA7F4E] transition-colors"
              style={{ fontSize: "15px" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/shop"
          className="hidden md:inline-flex items-center bg-[#DA7F4E] text-white font-semibold rounded-full px-6 py-2.5 hover:bg-[#C56A3A] hover:-translate-y-0.5 transition-all"
        >
          Shop Now
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#43654B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DA7F4E]"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden overflow-hidden bg-[#F3EBE2] transition-all duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              activeProps={{ style: activeStyle }}
              activeOptions={link.to === "/" ? { exact: true } : undefined}
              onClick={() => setOpen(false)}
              className="py-4 text-center text-[#2F2F2F] hover:text-[#DA7F4E] transition-colors"
              style={{ fontSize: "16px" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 pb-6 pt-2">
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#DA7F4E] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#C56A3A] transition-all"
            >
              Shop Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
