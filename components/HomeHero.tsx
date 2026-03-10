"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="flex flex-col items-center py-24 text-center md:py-36">
      <motion.h1
        className="heading-hero max-w-2xl text-[var(--color-foreground)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        AI Marketing Lab
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
        AI tools, updates and practical guides for media buyers and advertisers.
      </motion.p>

      <motion.div
        className="mt-8 flex items-center gap-3"
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
          Explore Tools
        </Link>
        <Link
          href="/guides"
          className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-secondary)] transition-all hover:border-[var(--color-border-hover)] hover:text-[var(--color-foreground)]"
        >
          Read Guides
        </Link>
      </motion.div>
    </section>
  );
}
