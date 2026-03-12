import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "AI Marketing Guides",
  description:
    "Practical AI marketing guides and tutorials for media buyers and advertisers.",
};

export default function GuidesPage() {
  const posts = getPostsByCategory("guides");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="heading-section mb-3 text-[var(--color-foreground)]">
          AI Marketing Guides
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
          Practical guides and tutorials for using AI in your marketing
          workflow.
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
          No guides yet. Check back soon.
        </p>
      )}
    </div>
  );
}
