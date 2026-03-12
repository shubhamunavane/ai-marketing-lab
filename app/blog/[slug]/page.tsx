import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, getRelatedPosts, formatDate } from "@/lib/posts";
import NewsletterSignup from "@/components/NewsletterSignup";
import PostCard from "@/components/PostCard";
import ScrollProgress from "@/components/ScrollProgress";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.featuredImage && { images: [{ url: post.featuredImage }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.featuredImage && { images: [post.featuredImage] }),
    },
  };
}

const categoryLabels: Record<string, { label: string; href: string }> = {
  insights: { label: "AI Marketing Insights", href: "/insights" },
  tools: { label: "AI Marketing Tools", href: "/tools" },
  guides: { label: "AI Marketing Guides", href: "/guides" },
  updates: { label: "AI Marketing Updates", href: "/updates" },
  prompts: { label: "AI Prompts", href: "/prompts" },
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const cat = categoryLabels[post.category];
  const relatedPosts = getRelatedPosts(slug, post.category);

  return (
    <>
      <ScrollProgress />
      <div className="mx-auto max-w-2xl px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3 text-[13px]">
            <Link
              href={cat?.href || "/"}
              className="text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              {cat?.label || post.category}
            </Link>
            <span className="text-[var(--color-border)]">/</span>
            <time className="text-[var(--color-muted)]">{formatDate(post.date)}</time>
            <span className="text-[var(--color-border)]">/</span>
            <span className="text-[var(--color-muted)]">{post.readingTime} min read</span>
          </div>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-[var(--color-foreground)] md:text-3xl" style={{ letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
        </div>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--color-border)]">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        )}

        {/* Table of Contents */}
        <TableOfContents contentHtml={post.contentHtml} />

        {/* Content */}
        <article
          className="prose mb-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Share */}
        <div className="mb-12 flex items-center justify-between border-t border-b border-[var(--color-border)] py-4">
          <ShareButtons title={post.title} slug={slug} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-6 text-lg font-semibold text-[var(--color-foreground)]">
              Related Articles
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <PostCard key={rp.slug} {...rp} />
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="mb-12 border-t border-[var(--color-border)]" />

        <NewsletterSignup />
      </div>
    </>
  );
}
