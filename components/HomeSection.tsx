"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HomeSectionProps {
  title: string;
  href: string;
  delay?: number;
  children: ReactNode;
}

export default function HomeSection({
  title,
  href,
  delay = 0,
  children,
}: HomeSectionProps) {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="heading-section text-[var(--color-foreground)]">
          {title}
        </h2>
        <Link
          href={href}
          className="flex items-center gap-1 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          View all
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
      {children}
    </motion.section>
  );
}
