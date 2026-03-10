import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "AI Updates",
  description:
    "Stay up to date with the latest AI news and updates relevant to advertisers and media buyers.",
};

export default function UpdatesPage() {
  const posts = getPostsByCategory("updates");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
          AI Updates
        </h1>
        <p className="text-lg text-[var(--color-muted)]">
          Stay up to date with the latest AI news relevant to advertisers.
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
          No updates yet. Check back soon!
        </p>
      )}
    </div>
  );
}
