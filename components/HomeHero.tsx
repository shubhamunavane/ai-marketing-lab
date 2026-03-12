"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="flex flex-col items-center py-24 text-center md:py-36">
      <motion.div
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1.5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[12px] font-medium text-[var(--color-secondary)]">
          Trusted by 500+ media buyers
        </span>
      </motion.div>

      <motion.h1
        className="heading-hero max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="text-[var(--color-foreground)]">Your </span>
        <span className="hero-gradient-text">AI-Powered</span>
        <span className="text-[var(--color-foreground)]"> Edge in Digital Advertising</span>
      </motion.h1>

      <motion.p
        className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-secondary)] md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        Tools, insights, and actionable guides to help media buyers and advertisers win with AI.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <Link
          href="/tools"
          className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,140,255,0.2)] transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_30px_rgba(124,140,255,0.3)]"
        >
          Explore AI Tools
        </Link>
        <Link
          href="/guides"
          className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-secondary)] transition-all hover:border-[var(--color-border-hover)] hover:text-[var(--color-foreground)]"
        >
          Read Guides
        </Link>
        <Link
          href="/quiz"
          className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-secondary)] transition-all hover:border-[var(--color-border-hover)] hover:text-[var(--color-foreground)]"
        >
          AI Readiness Quiz
        </Link>
      </motion.div>
    </section>
  );
}
