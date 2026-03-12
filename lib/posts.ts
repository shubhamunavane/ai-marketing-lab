import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostCategory = "insights" | "tools" | "guides" | "updates" | "prompts";

const VALID_CATEGORIES: PostCategory[] = ["insights", "tools", "guides", "updates", "prompts"];

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  excerpt: string;
  featuredImage?: string;
  readingTime: number;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const rawCategory = data.category?.toLowerCase();
      const category: PostCategory = VALID_CATEGORIES.includes(rawCategory)
        ? rawCategory
        : "insights";

      return {
        slug,
        title: data.title,
        date: data.date,
        category,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage || undefined,
        readingTime: estimateReadingTime(content),
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): PostMeta[] {
  return getAllPosts()
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const rawCategory = data.category?.toLowerCase();
  const category: PostCategory = VALID_CATEGORIES.includes(rawCategory)
    ? rawCategory
    : "insights";

  return {
    slug,
    title: data.title,
    date: data.date,
    category,
    excerpt: data.excerpt,
    featuredImage: data.featuredImage || undefined,
    readingTime: estimateReadingTime(content),
    contentHtml,
  };
}
