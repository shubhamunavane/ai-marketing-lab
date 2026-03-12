"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Question {
  question: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    question: "How does your team currently use AI in advertising?",
    options: [
      { label: "We don't use AI at all yet", score: 0 },
      { label: "We've experimented with a few AI tools", score: 1 },
      { label: "AI is part of our regular workflow", score: 2 },
      { label: "AI drives most of our campaign decisions", score: 3 },
    ],
  },
  {
    question: "How comfortable is your team with AI-powered creative tools?",
    options: [
      { label: "Not familiar with any", score: 0 },
      { label: "We've tried one or two", score: 1 },
      { label: "We use them for ideation and drafts", score: 2 },
      { label: "AI generates most of our ad creatives", score: 3 },
    ],
  },
  {
    question: "How do you handle campaign analytics and reporting?",
    options: [
      { label: "Mostly manual spreadsheets", score: 0 },
      { label: "Platform dashboards only", score: 1 },
      { label: "Some automated reporting tools", score: 2 },
      { label: "AI-driven insights and predictions", score: 3 },
    ],
  },
  {
    question: "What's your approach to audience targeting?",
    options: [
      { label: "Broad demographic targeting", score: 0 },
      { label: "Interest and behavior-based segments", score: 1 },
      { label: "Lookalike audiences from first-party data", score: 2 },
      { label: "AI-powered predictive audiences", score: 3 },
    ],
  },
  {
    question: "How do you optimize ad spend across channels?",
    options: [
      { label: "Manual budget allocation", score: 0 },
      { label: "Platform auto-bidding features", score: 1 },
      { label: "Cross-channel rules-based automation", score: 2 },
      { label: "AI-driven budget optimization in real-time", score: 3 },
    ],
  },
];

interface Result {
  level: string;
  color: string;
  headline: string;
  description: string;
  recommendations: { label: string; href: string }[];
}

function getResult(score: number): Result {
  const maxScore = questions.length * 3;
  const pct = score / maxScore;

  if (pct <= 0.25) {
    return {
      level: "Beginner",
      color: "text-orange-400",
      headline: "AI Curious",
      description:
        "You're just getting started with AI in marketing. There's huge potential to gain a competitive edge by adopting AI tools now.",
      recommendations: [
        { label: "Start with our AI Tools Directory", href: "/tools" },
        { label: "Read our beginner guides", href: "/guides" },
      ],
    };
  }
  if (pct <= 0.5) {
    return {
      level: "Intermediate",
      color: "text-blue-400",
      headline: "AI Explorer",
      description:
        "You've dipped your toes in AI — now it's time to go deeper. Integrating AI across your workflow can dramatically improve efficiency.",
      recommendations: [
        { label: "Explore advanced AI tools", href: "/tools" },
        { label: "Read our latest insights", href: "/insights" },
        { label: "Check out automation guides", href: "/guides" },
      ],
    };
  }
  if (pct <= 0.75) {
    return {
      level: "Advanced",
      color: "text-emerald-400",
      headline: "AI Adopter",
      description:
        "Your team is well on its way to AI-driven marketing. Fine-tuning your stack and staying current on trends will keep you ahead.",
      recommendations: [
        { label: "Stay up to date with AI updates", href: "/updates" },
        { label: "Deep-dive into insights", href: "/insights" },
      ],
    };
  }
  return {
    level: "Expert",
    color: "text-violet-400",
    headline: "AI Leader",
    description:
      "Your team is leading the pack in AI adoption. You're well-positioned to push boundaries and set industry benchmarks.",
    recommendations: [
      { label: "Explore cutting-edge prompts", href: "/prompts" },
      { label: "Read the latest industry updates", href: "/updates" },
    ],
  };
}

export default function QuizClient() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = ((currentQ) / questions.length) * 100;

  function selectOption(score: number) {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ(currentQ + 1);
    }
  }

  function restart() {
    setCurrentQ(0);
    setAnswers([]);
    setFinished(false);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="heading-section mb-3 text-[var(--color-foreground)]">
          AI Readiness Quiz
        </h1>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Find out how AI-ready your marketing team is. Takes under 2 minutes.
        </p>
      </div>

      {!finished ? (
        <>
          {/* Progress bar */}
          <div className="mb-8 h-1 w-full rounded-full bg-[var(--color-card)]">
            <motion.div
              className="h-full rounded-full bg-[var(--color-accent)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="mb-2 text-[12px] font-medium text-[var(--color-muted)]">
            Question {currentQ + 1} of {questions.length}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="mb-6 text-lg font-semibold text-[var(--color-foreground)]">
                {questions[currentQ].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectOption(opt.score)}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-4 text-left text-sm font-medium text-[var(--color-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Score circle */}
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-accent-muted)]">
            <div>
              <p className="text-2xl font-bold text-[var(--color-foreground)]">
                {totalScore}
              </p>
              <p className="text-[11px] text-[var(--color-muted)]">
                / {questions.length * 3}
              </p>
            </div>
          </div>

          <p className={`mb-1 text-sm font-semibold ${result.color}`}>
            {result.level}
          </p>
          <h2 className="mb-3 text-2xl font-bold text-[var(--color-foreground)]">
            {result.headline}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[var(--color-secondary)]">
            {result.description}
          </p>

          <div className="mb-8 space-y-2">
            <p className="text-[12px] font-medium uppercase tracking-widest text-[var(--color-muted)]">
              Recommended for you
            </p>
            {result.recommendations.map((rec) => (
              <Link
                key={rec.href}
                href={rec.href}
                className="mx-auto block max-w-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-medium text-[var(--color-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
              >
                {rec.label}
              </Link>
            ))}
          </div>

          <button
            onClick={restart}
            className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            Retake Quiz
          </button>
        </motion.div>
      )}
    </div>
  );
}
