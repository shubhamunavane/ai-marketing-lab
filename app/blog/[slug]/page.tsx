import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import NewsletterSignup from "@/components/NewsletterSignup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
  tools: { label: "AI Tools", href: "/tools" },
  updates: { label: "AI Updates", href: "/updates" },
  guides: { label: "AI Guides", href: "/guides" },
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const cat = categoryLabels[post.category];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3 text-sm text-[var(--color-muted)]">
          <Link
            href={cat?.href || "/"}
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
          >
            {cat?.label || post.category}
          </Link>
          <span>&middot;</span>
          <time>{post.date}</time>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-4xl">
          {post.title}
        </h1>
      </div>

      {post.featuredImage && (
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <article
        className="prose mb-12"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <NewsletterSignup />
    </div>
  );
}
