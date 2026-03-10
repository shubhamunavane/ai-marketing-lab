import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  const tools = getPostsByCategory("tools").slice(0, 3);
  const updates = getPostsByCategory("updates").slice(0, 3);
  const guides = getPostsByCategory("guides").slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="py-16 text-center md:py-24">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-6xl">
          AI Marketing Lab
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-muted)] md:text-xl">
          AI tools, updates and practical guides for media buyers and
          advertisers.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/tools"
            className="rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Explore Tools
          </Link>
          <Link
            href="/guides"
            className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-card)]"
          >
            Read Guides
          </Link>
        </div>
      </section>

      {/* Latest AI Tools */}
      {tools.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Latest AI Tools
            </h2>
            <Link
              href="/tools"
              className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}

      {/* Latest AI Updates */}
      {updates.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Latest AI Updates
            </h2>
            <Link
              href="/updates"
              className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}

      {/* Latest AI Guides */}
      {guides.length > 0 && (
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
              Latest AI Guides
            </h2>
            <Link
              href="/guides"
              className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
