import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "AI Marketing Updates",
  description:
    "Stay up to date with the latest AI news and updates relevant to advertisers and media buyers.",
};

export default function UpdatesPage() {
  const posts = getPostsByCategory("updates");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="heading-section mb-3 text-[var(--color-foreground)]">
          AI Marketing Updates
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
          The latest AI news and platform changes relevant to advertisers and
          media buyers.
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
          No updates yet. Check back soon.
        </p>
      )}
    </div>
  );
}
