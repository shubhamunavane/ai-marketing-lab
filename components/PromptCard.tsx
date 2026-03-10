"use client";

import { useState } from "react";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
}

export default function PromptCard({
  title,
  description,
  prompt,
}: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="card-hover rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
      {/* Header */}
      <div className="p-5 pb-0">
        <h3 className="text-[15px] font-semibold text-[var(--color-foreground)]">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      </div>

      {/* Prompt text */}
      <div className="p-5">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-4">
          <pre className="whitespace-pre-wrap text-[12px] leading-[1.7] text-[var(--color-secondary)] font-[inherit]">
            {prompt}
          </pre>
        </div>
      </div>

      {/* Copy button */}
      <div className="border-t border-[var(--color-border)] px-5 py-3.5">
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium transition-all ${
            copied
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_16px_rgba(124,140,255,0.25)]"
          }`}
        >
          {copied ? (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Prompt
            </>
          )}
        </button>
      </div>
    </div>
  );
}
