import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import HomeHero from "@/components/HomeHero";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  const updates = getPostsByCategory("updates").slice(0, 3);
  const insights = getPostsByCategory("insights").slice(0, 3);
  const guides = getPostsByCategory("guides").slice(0, 3);
  const tools = getPostsByCategory("tools").slice(0, 3);

  return (
    <>
      {/* Hero with radial gradient */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,140,255,0.12), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-6">
          <HomeHero />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        {/* AI Marketing Updates */}
        {updates.length > 0 && (
          <HomeSection title="AI Marketing Updates" href="/updates" delay={0}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {updates.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* AI Marketing Insights */}
        {insights.length > 0 && (
          <HomeSection title="AI Marketing Insights" href="/insights" delay={0.05}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* AI Marketing Guides */}
        {guides.length > 0 && (
          <HomeSection title="AI Marketing Guides" href="/guides" delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* AI Marketing Tools */}
        {tools.length > 0 && (
          <HomeSection title="AI Marketing Tools" href="/insights?category=tools" delay={0.15}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* AI Marketing Prompts */}
        <HomeSection title="AI Marketing Prompts" href="/prompts" delay={0.2}>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
            <p className="mb-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
              Copy-paste ready AI prompts for ad creatives, media buying,
              copywriting, landing pages, video ads, and more.
            </p>
            <Link
              href="/prompts"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Browse Prompts
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </HomeSection>

        {/* Newsletter */}
        <div className="mt-20">
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
}
