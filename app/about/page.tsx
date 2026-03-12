import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI Market Lab and our mission to help media buyers and advertisers leverage AI.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="heading-section mb-8 text-[var(--color-foreground)]">
        About AI Market Lab
      </h1>

      <div className="mb-16 space-y-5">
        <p className="text-base leading-[1.7] text-[var(--color-secondary)]">
          AI Market Lab is your go-to resource for AI-powered marketing. We
          help media buyers and advertisers stay ahead of the curve by curating
          the best AI tools, sharing the latest platform updates, and publishing
          practical guides.
        </p>
        <p className="text-base leading-[1.7] text-[var(--color-secondary)]">
          The advertising landscape is changing fast. Platforms like Google and
          Meta are integrating AI into every part of the ad workflow &mdash; from
          creative generation to audience targeting to performance optimization.
          We track these changes so you don&apos;t have to.
        </p>
        <p className="text-base leading-[1.7] text-[var(--color-secondary)]">
          Whether you&apos;re a solo media buyer or part of a large agency team,
          our goal is to give you the knowledge and tools to run better campaigns
          with AI.
        </p>

        <div className="!mt-12 border-t border-[var(--color-border)] pt-10">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
            What we cover
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "AI Tools",
                desc: "Reviews and breakdowns of the best AI tools for ad creatives, copy, targeting, and analytics.",
              },
              {
                title: "AI Updates",
                desc: "The latest AI announcements from major ad platforms and tech companies.",
              },
              {
                title: "AI Marketing Guides",
                desc: "Step-by-step tutorials on using AI tools and features in your marketing workflow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-[var(--color-foreground)]">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="!mt-12 border-t border-[var(--color-border)] pt-10">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
            Our mission
          </h2>
          <p className="text-base leading-[1.7] text-[var(--color-secondary)]">
            We believe that AI will transform digital advertising in the coming
            years. Our mission is to make that transformation accessible and
            practical for marketers at every level.
          </p>
        </div>
      </div>

      <NewsletterSignup />
    </div>
  );
}
