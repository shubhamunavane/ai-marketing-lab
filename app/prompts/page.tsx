import type { Metadata } from "next";
import { allPromptSections } from "@/lib/prompts";
import PromptsDirectory from "@/components/PromptsDirectory";

export const metadata: Metadata = {
  title: "AI Marketing Prompts — AI Market Lab",
  description:
    "Ready-to-use AI prompts for ad creatives, media buying, copywriting, landing pages, video ads, analytics, SEO, and email marketing. Copy and paste into ChatGPT, Claude, or any AI tool.",
};

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 pb-24">
      <PromptsDirectory sections={allPromptSections} />
    </div>
  );
}
