import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-[15px] font-semibold tracking-tight text-[var(--color-foreground)]">
              AI Market Lab
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Helping marketers understand AI.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                Resources
              </p>
              <ul className="space-y-2.5">
                {[
                  { href: "/insights", label: "AI Marketing Insights" },
                  { href: "/tools", label: "Tools" },
                  { href: "/guides", label: "Guides" },
                  { href: "/updates", label: "Updates" },
                  { href: "/prompts", label: "Prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-foreground)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
                Company
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-foreground)]"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-6">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} AI Market Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
