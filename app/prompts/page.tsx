import type { Metadata } from "next";
import { allPromptSections } from "@/lib/prompts";
import PromptCard from "@/components/PromptCard";

export const metadata: Metadata = {
  title: "AI Marketing Prompts — AI Market Lab",
  description:
    "Ready-to-use AI prompts for ad creatives, media buying, copywriting, landing pages, and video ads. Copy and paste into ChatGPT, Claude, or any AI tool.",
};

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 pb-24">
      {/* Page header */}
      <div className="mb-14">
        <h1 className="heading-section text-[var(--color-foreground)]">
          AI Marketing Prompts
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-secondary)]">
          Copy-and-paste prompts for ChatGPT, Claude, and other AI tools.
          Organized by category to help you create better ads, write sharper
          copy, and optimize your campaigns.
        </p>
      </div>

      {/* Prompt sections */}
      <div className="space-y-16">
        {allPromptSections.map((section) => (
          <section key={section.category}>
            <h2 className="mb-6 text-[18px] font-semibold text-[var(--color-foreground)]">
              {section.category}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {section.prompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  title={prompt.title}
                  description={prompt.description}
                  prompt={prompt.prompt}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
