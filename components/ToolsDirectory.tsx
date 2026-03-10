"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ToolCard from "@/components/ToolCard";
import type { Tool } from "@/lib/tools";

const categories = ["All", "Creative", "Analytics", "Automation", "Copywriting"];

export default function ToolsDirectory({ tools }: { tools: Tool[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    let result = tools;

    if (activeCategory !== "All") {
      result = result.filter((tool) => tool.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(q) ||
          tool.description.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q) ||
          tool.useCase.toLowerCase().includes(q)
      );
    }

    return result;
  }, [tools, search, activeCategory]);

  return (
    <>
      {/* Search & Filter */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
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
            placeholder="Search tools..."
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] py-2.5 pl-10 pr-4 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/30"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Results count */}
      <p className="mb-6 text-xs text-[var(--color-muted)]">
        Showing {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" && ` in ${activeCategory}`}
        {search.trim() && ` matching "${search}"`}
      </p>

      {/* Tools Grid */}
      {filtered.length > 0 ? (
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.03,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] py-16 text-center">
          <p className="mb-1.5 text-sm font-medium text-[var(--color-foreground)]">
            No tools found
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Try adjusting your search or filter.
          </p>
        </div>
      )}
    </>
  );
}
