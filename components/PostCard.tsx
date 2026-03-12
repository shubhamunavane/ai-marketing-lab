import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  featuredImage?: string;
}

const categoryColors: Record<string, string> = {
  insights: "bg-blue-500/10 text-blue-400",
  tools: "bg-violet-500/10 text-violet-400",
  guides: "bg-emerald-500/10 text-emerald-400",
  updates: "bg-orange-500/10 text-orange-400",
  prompts: "bg-pink-500/10 text-pink-400",
};

export default function PostCard({
  slug,
  title,
  date,
  category,
  excerpt,
  featuredImage,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="card-hover flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
        {featuredImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent opacity-40" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center gap-3">
            {categoryColors[category] && (
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${categoryColors[category]}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            )}
            <time className="text-[11px] text-[var(--color-muted)]">
              {date}
            </time>
          </div>
          <h3 className="mb-2 text-[15px] font-semibold leading-snug text-[var(--color-foreground)] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed text-[var(--color-muted)]">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
