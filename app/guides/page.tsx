import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "AI Guides",
  description:
    "Practical AI guides and tutorials for media buyers and advertisers.",
};

export default function GuidesPage() {
  const posts = getPostsByCategory("guides");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
          AI Guides
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          Practical AI guides and tutorials for media buyers and advertisers.
        </p>
      </div>
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <p className="text-[var(--color-muted)]">
          No guides yet. Check back soon!
        </p>
      )}
    </div>
  );
}
