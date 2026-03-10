import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const categoryColors: Record<string, string> = {
  tools: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  updates:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  guides:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function PostCard({
  slug,
  title,
  date,
  category,
  excerpt,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-200 hover:border-[var(--color-accent)] hover:shadow-lg">
        <div className="mb-3 flex items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <time className="text-xs text-[var(--color-muted)]">{date}</time>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {excerpt}
        </p>
      </article>
    </Link>
  );
}
