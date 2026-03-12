"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ contentHtml }: { contentHtml: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse headings from rendered DOM
    const article = document.querySelector("article.prose");
    if (!article) return;

    const headings = article.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading, i) => {
      const id = heading.id || `heading-${i}`;
      if (!heading.id) heading.id = id;
      tocItems.push({
        id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setItems(tocItems);
  }, [contentHtml]);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
      <p className="mb-3 text-[12px] font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Table of Contents
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? "1rem" : 0 }}>
            <a
              href={`#${item.id}`}
              className={`block text-[13px] leading-relaxed transition-colors ${
                activeId === item.id
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-secondary)]"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
