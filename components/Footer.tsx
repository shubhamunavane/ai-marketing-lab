import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-[var(--color-accent)]">
              AI Marketing Lab
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              AI tools, updates and practical guides for media buyers and
              advertisers.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-foreground)]">
              Pages
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/tools", label: "AI Tools" },
                { href: "/updates", label: "AI Updates" },
                { href: "/guides", label: "AI Guides" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-foreground)]">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-foreground)]">
              Stay Updated
            </h4>
            <p className="text-sm text-[var(--color-muted)]">
              Subscribe to get the latest AI marketing insights.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-sm text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} AI Marketing Lab. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
