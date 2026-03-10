import Image from "next/image";

interface ToolCardProps {
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
  useCase: string;
}

const categoryColors: Record<string, string> = {
  Creative: "bg-pink-500/10 text-pink-400",
  Analytics: "bg-sky-500/10 text-sky-400",
  Automation: "bg-emerald-500/10 text-emerald-400",
  Copywriting: "bg-amber-500/10 text-amber-400",
};

export default function ToolCard({
  name,
  logo,
  category,
  description,
  website,
  useCase,
}: ToolCardProps) {
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
      {/* Header */}
      <div className="flex items-center gap-3.5 border-b border-[var(--color-border)] p-5">
        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
            {name}
          </h3>
          <span
            className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
              categoryColors[category] ||
              "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
            }`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 text-[13px] leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>

        {/* Use case */}
        <div className="mb-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-3.5">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Use Case
          </p>
          <p className="text-[13px] leading-relaxed text-[var(--color-secondary)]">
            {useCase}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            Visit Website
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
