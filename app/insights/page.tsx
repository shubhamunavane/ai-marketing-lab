import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "AI Marketing Insights",
  description:
    "In-depth analysis of AI tools, strategies, and trends for marketers and media buyers.",
};

export default function InsightsPage() {
  const posts = getPostsByCategory("insights");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="heading-section mb-3 text-[var(--color-foreground)]">
          AI Marketing Insights
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
          In-depth analysis of AI tools, strategies, and trends for marketers
          and media buyers.
        </p>
      </div>
      {posts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-[var(--color-muted)]">
          No insights yet. Check back soon.
        </p>
      )}
    </div>
  );
}
