"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setLightMode(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  function toggleTheme() {
    setLightMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
      return next;
    });
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/prompts", label: "Prompts" },
    { href: "/insights", label: "Insights" },
    { href: "/guides", label: "Guides" },
    { href: "/updates", label: "Updates" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[15px] font-semibold tracking-tight text-[var(--color-foreground)]">
            AI Market Lab
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-foreground)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mx-2 h-4 w-px bg-[var(--color-border)]" />
          <button
            onClick={toggleTheme}
            className="group relative rounded-lg p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-secondary)]"
            aria-label="Toggle theme"
          >
            {lightMode ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-secondary)]"
            aria-label="Toggle theme"
          >
            {lightMode ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-secondary)]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-xl px-6 pb-4 pt-2 md:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-foreground)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
