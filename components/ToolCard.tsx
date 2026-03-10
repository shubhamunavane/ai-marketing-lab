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
  Creative:
    "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
  Analytics:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Automation:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Copywriting:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
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
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] transition-all duration-200 hover:border-[var(--color-accent)] hover:shadow-lg">
      {/* Header with logo and name */}
      <div className="flex items-center gap-4 border-b border-[var(--color-border)] p-5">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
            {name}
          </h3>
          <span
            className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
              categoryColors[category] ||
              "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
            }`}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>

        {/* Use case */}
        <div className="mb-5 rounded-lg bg-[var(--color-accent)]/5 p-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Use Case
          </p>
          <p className="text-sm leading-relaxed text-[var(--color-foreground)]">
            {useCase}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Visit Website
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
