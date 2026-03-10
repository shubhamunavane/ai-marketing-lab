import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI Marketing Lab and our mission to help media buyers and advertisers leverage AI.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
        About AI Marketing Lab
      </h1>

      <div className="mb-12 space-y-5 text-[var(--color-muted)]">
        <p className="text-lg leading-relaxed">
          AI Marketing Lab is your go-to resource for AI-powered marketing. We
          help media buyers and advertisers stay ahead of the curve by curating
          the best AI tools, sharing the latest platform updates, and publishing
          practical guides.
        </p>
        <p className="leading-relaxed">
          The advertising landscape is changing fast. Platforms like Google and
          Meta are integrating AI into every part of the ad workflow &mdash; from
          creative generation to audience targeting to performance optimization.
          We track these changes so you don&apos;t have to.
        </p>
        <p className="leading-relaxed">
          Whether you&apos;re a solo media buyer or part of a large agency team,
          our goal is to give you the knowledge and tools to run better campaigns
          with AI.
        </p>

        <h2 className="!mt-10 text-2xl font-bold text-[var(--color-foreground)]">
          What we cover
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-[var(--color-foreground)]">
              AI Tools:
            </strong>{" "}
            Reviews and breakdowns of the best AI tools for ad creatives, copy,
            targeting, and analytics.
          </li>
          <li>
            <strong className="text-[var(--color-foreground)]">
              AI Updates:
            </strong>{" "}
            The latest AI-related announcements from major ad platforms and tech
            companies.
          </li>
          <li>
            <strong className="text-[var(--color-foreground)]">
              AI Guides:
            </strong>{" "}
            Step-by-step tutorials on how to use AI tools and features in your
            marketing workflow.
          </li>
        </ul>

        <h2 className="!mt-10 text-2xl font-bold text-[var(--color-foreground)]">
          Our mission
        </h2>
        <p className="leading-relaxed">
          We believe that AI will transform digital advertising in the coming
          years. Our mission is to make that transformation accessible and
          practical for marketers at every level.
        </p>
      </div>

      <NewsletterSignup />
    </div>
  );
}
