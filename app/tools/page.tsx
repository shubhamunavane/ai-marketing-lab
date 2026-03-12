import type { Metadata } from "next";
import { allTools } from "@/lib/tools";
import ToolsDirectory from "@/components/ToolsDirectory";

export const metadata: Metadata = {
  title: "AI Marketing Tools Directory",
  description:
    "Discover the best AI tools for media buyers and advertisers. Browse creative, analytics, automation, and copywriting tools to supercharge your campaigns.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="heading-section mb-3 text-[var(--color-foreground)]">
          AI Marketing Tools Directory
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
          Curated collection of the best AI-powered tools for media buyers and
          advertisers.
        </p>
      </div>

      <ToolsDirectory tools={allTools} />
    </div>
  );
}
