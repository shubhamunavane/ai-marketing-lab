import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import HomeHero from "@/components/HomeHero";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  const tools = getPostsByCategory("tools").slice(0, 3);
  const updates = getPostsByCategory("updates").slice(0, 3);
  const guides = getPostsByCategory("guides").slice(0, 3);

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
        {/* AI Marketing Insights */}
        {tools.length > 0 && (
          <HomeSection title="AI Marketing Insights" href="/tools" delay={0}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* AI Marketing Guides */}
        {guides.length > 0 && (
          <HomeSection title="AI Marketing Guides" href="/guides" delay={0.05}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* AI Marketing Updates */}
        {updates.length > 0 && (
          <HomeSection title="AI Marketing Updates" href="/updates" delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {updates.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          </HomeSection>
        )}

        {/* Newsletter */}
        <div className="mt-20">
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
}
