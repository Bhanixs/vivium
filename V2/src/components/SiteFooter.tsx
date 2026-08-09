import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Verticals",
    links: [
      { to: "/schools", label: "Schools" },
      { to: "/construction", label: "Construction" },
      { to: "/hospitality", label: "Hospitality" },
      { to: "/retail", label: "Direct Retail & D2C" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Vivium" },
      { to: "/technology", label: "Technology" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl">Vivium</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Putting India's artisans at the centre of the modern economy.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="eyebrow">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vivium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
