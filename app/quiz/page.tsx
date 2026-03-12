import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "AI Readiness Quiz",
  description:
    "Find out how ready your marketing team is for AI. Take our 2-minute quiz and get personalized recommendations.",
};

export default function QuizPage() {
  return <QuizClient />;
}
