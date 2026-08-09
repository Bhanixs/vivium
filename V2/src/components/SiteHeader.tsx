import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/schools", label: "Schools" },
  { to: "/construction", label: "Construction" },
  { to: "/hospitality", label: "Hospitality" },
  { to: "/retail", label: "Retail & D2C" },
  { to: "/technology", label: "Technology" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
          Vivium
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="rounded-sm border border-border px-3 py-2 text-xs tracking-widest uppercase lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-6 py-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base text-muted-foreground"
              activeProps={{ className: "block py-2.5 text-base text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
