"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { quizQuestions } from "@/lib/quiz-data";
import { ScoreCard } from "@/components/quiz/score-card";
import type { QuizState, Question } from "@/type/question";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
const ResultContent = () => {
  const searchParams = useSearchParams();
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [categoryScores, setCategoryScores] = useState<Record<string, number>>(
    {}
  );
  const router = useRouter();

  useEffect(() => {
    const stateParam = searchParams.get("state");
    if (stateParam) {
      const decodedState = JSON.parse(
        decodeURIComponent(stateParam)
      ) as QuizState;
      setQuizState(decodedState);

      // Calculate scores for each category
      const scores = ["reading", "listening", "writing", "speaking"].reduce(
        (acc, category) => {
          const categoryQuestions = quizQuestions.filter(
            (q) => q.category === category
          );
          const totalPossible = categoryQuestions.reduce(
            (sum, q) => sum + q.points,
            0
          );
          const earned = categoryQuestions.reduce((sum, q) => {
            const userAnswer = decodedState.answers[q.id];
            if (q.type === "multiple-choice" || q.type === "listening") {
              return userAnswer ===
                (q as Question & { correctAnswer: string }).correctAnswer
                ? sum + q.points
                : sum;
            }
            return sum + q.points; // Assume full points for writing and speaking
          }, 0);

          // Convert to band score (assuming 90% = 9, 80% = 8, etc.)
          const bandScore = Math.round((earned / totalPossible) * 9 * 2) / 2;
          return { ...acc, [category]: bandScore };
        },
        {}
      );

      setCategoryScores(scores);
    }
  }, [searchParams]);

  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 5000);
  });

  if (!quizState || !Object.keys(categoryScores).length) {
    return <div>Loading...</div>;
  }

  const overallBand = Object.values(categoryScores).reduce(
    (sum, score) => sum + score,
    0
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-magenta to-vivid flex flex-col items-center py-16 px-12">
      <header className="text-center text-white pb-16">
        <h1 className="text-5xl font-bold mb-4">
          {"Good Job, mates! See you're score!"}
        </h1>
        <h3 className="text-xl">Toefl IBT Equivalent: {overallBand}</h3>
      </header>

      <div className="container max-w-4xl bg-white px-12 py-16 rounded-3xl space-y-12">
        <div className="grid grid-cols-2 gap-12 mb-4">
          {Object.entries(categoryScores).map(([category, score]) => {
            const categoryQuestions = quizQuestions.filter(
              (q) => q.category === category
            );
            const correctCount = categoryQuestions.reduce((sum, q) => {
              const userAnswer = quizState.answers[q.id];
              if (q.type === "multiple-choice" || q.type === "listening") {
                return userAnswer ===
                  (q as Question & { correctAnswer: string }).correctAnswer
                  ? sum + 1
                  : sum;
              }
              return sum + 1;
            }, 0);

            return (
              <ScoreCard
                key={category}
                category={category.charAt(0).toUpperCase() + category.slice(1)}
                score={score}
                correct={`${correctCount}/${categoryQuestions.length}`}
                details={
                  category === "writing" || category === "speaking"
                    ? {
                        taskAchievement: 7,
                        coherence: 7,
                        lexical: 6,
                        grammar: 7,
                      }
                    : undefined
                }
              />
            );
          })}
        </div>
        <ScoreCard category="Overall Score" score={overallBand} large />
      </div>
    </section>
  );
};
