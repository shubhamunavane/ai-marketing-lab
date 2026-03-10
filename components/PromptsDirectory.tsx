"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PromptCard from "@/components/PromptCard";
import type { PromptSection } from "@/lib/prompts";

const categories = [
  "All",
  "Ad Creatives",
  "Media Buying",
  "Copywriting",
  "Landing Pages",
  "Video Ads",
  "Analytics",
  "SEO",
  "Email Marketing",
];

/* Map display labels to actual data category names */
const categoryMap: Record<string, string> = {
  "Video Ads": "Video Ad Ideas",
};

export default function PromptsDirectory({
  sections,
}: {
  sections: PromptSection[];
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  /* Total prompt count across all sections */
  const totalCount = useMemo(
    () => sections.reduce((sum, s) => sum + s.prompts.length, 0),
    [sections]
  );

  /* Filtered sections based on search + category */
  const filtered = useMemo(() => {
    const dataCategory = categoryMap[activeCategory] || activeCategory;

    return sections
      .filter((section) => {
        if (activeCategory === "All") return true;
        return section.category === dataCategory;
      })
      .map((section) => {
        if (!search.trim()) return section;

        const q = search.toLowerCase();
        const matchingPrompts = section.prompts.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.prompt.toLowerCase().includes(q) ||
            section.category.toLowerCase().includes(q)
        );

        return { ...section, prompts: matchingPrompts };
      })
      .filter((section) => section.prompts.length > 0);
  }, [sections, search, activeCategory]);

  /* Count of visible prompts */
  const visibleCount = filtered.reduce((sum, s) => sum + s.prompts.length, 0);

  return (
    <>
      {/* Page header */}
      <div className="mb-10">
        <h1 className="heading-section text-[var(--color-foreground)]">
          AI Marketing Prompts
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-secondary)]">
          {totalCount}+ ready-to-use prompts for marketers and advertisers.
        </p>
      </div>

      {/* Search bar */}
      <div className="mb-5">
        <div className="relative w-full sm:max-w-md">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prompts..."
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] py-2.5 pl-10 pr-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30"
          />
        </div>
      </div>

      {/* Category filter buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all ${
              activeCategory === cat
                ? "bg-[var(--color-accent)] text-white shadow-[0_0_12px_rgba(124,140,255,0.25)]"
                : "border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-secondary)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="mb-6 text-xs text-[var(--color-muted)]">
        Showing {visibleCount} prompt{visibleCount !== 1 ? "s" : ""}
        {activeCategory !== "All" && ` in ${activeCategory}`}
        {search.trim() && ` matching "${search}"`}
      </p>

      {/* Prompt sections */}
      {filtered.length > 0 ? (
        <div className="space-y-16">
          {filtered.map((section) => (
            <motion.section
              key={section.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <h2 className="mb-6 text-[18px] font-semibold text-[var(--color-foreground)]">
                {section.category}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {section.prompts.map((prompt, i) => (
                  <motion.div
                    key={prompt.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.03,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <PromptCard
                      title={prompt.title}
                      description={prompt.description}
                      prompt={prompt.prompt}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] py-16 text-center">
          <p className="mb-1.5 text-sm font-medium text-[var(--color-foreground)]">
            No prompts found
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Try adjusting your search or filter.
          </p>
        </div>
      )}
    </>
  );
}
