import type { Metadata } from "next";
import { getPostsByCategory, getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

const categoryMeta: Record<string, { title: string; description: string }> = {
  insights: {
    title: "AI Marketing Insights",
    description:
      "In-depth analysis of AI tools, strategies, and trends for marketers and media buyers.",
  },
  tools: {
    title: "AI Marketing Tools Articles",
    description:
      "Reviews, comparisons, and deep dives into the best AI tools for advertisers.",
  },
  guides: {
    title: "AI Marketing Guides",
    description:
      "Practical guides and tutorials for using AI in your marketing workflow.",
  },
  updates: {
    title: "AI Marketing Updates",
    description:
      "The latest AI platform updates and industry news for media buyers.",
  },
  prompts: {
    title: "AI Prompts",
    description:
      "Ready-to-use AI prompts for marketers and media buyers.",
  },
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { category } = await searchParams;
  const meta = categoryMeta[category || "insights"] || categoryMeta.insights;
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function InsightsPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const validCategory = category && categoryMeta[category] ? category : "insights";
  const meta = categoryMeta[validCategory];
  const posts = getPostsByCategory(validCategory);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="heading-section mb-3 text-[var(--color-foreground)]">
          {meta.title}
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
          {meta.description}
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
          No posts yet. Check back soon.
        </p>
      )}
    </div>
  );
}
