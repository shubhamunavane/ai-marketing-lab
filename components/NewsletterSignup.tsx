"use client";

import { useState, FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 md:p-12">
      {/* Subtle gradient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-muted), transparent 70%)",
        }}
      />

      <div className="relative text-center">
        <h2 className="heading-section mb-3 text-[var(--color-foreground)]">
          Stay ahead of the curve
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
          Get the latest AI tools, updates and guides delivered to your inbox.
          No spam, unsubscribe anytime.
        </p>
        {submitted ? (
          <p className="text-sm font-medium text-emerald-400">
            Thanks for subscribing. We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30"
            />
            <button
              type="submit"
              className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_rgba(124,140,255,0.25)]"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
