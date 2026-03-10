import type { Metadata } from "next";
import { allTools } from "@/lib/tools";
import ToolsDirectory from "@/components/ToolsDirectory";

export const metadata: Metadata = {
  title: "AI Tools Directory",
  description:
    "Discover the best AI tools for media buyers and advertisers. Browse creative, analytics, automation, and copywriting tools to supercharge your campaigns.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
          AI Tools Directory
        </h1>
        <p className="max-w-2xl text-lg text-[var(--color-muted)]">
          Curated collection of the best AI-powered tools for media buyers and
          advertisers. Find the right tools to automate, create, analyze, and
          write better ads.
        </p>
      </div>

      <ToolsDirectory tools={allTools} />
    </div>
  );
}
