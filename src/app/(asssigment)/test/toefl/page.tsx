"use client";

import { useState, useCallback, useMemo } from "react";
import { ReadingQuestion } from "@/components/quiz/types/reading";
import { WritingQuestion } from "@/components/quiz/types/writing";
import { ListeningQuestion } from "@/components/quiz/types/listening";
import { SpeakingQuestion } from "@/components/quiz/types/speaking";
import { QuizTimer } from "@/components/quiz/timer";
import { ProgressBar } from "@/components/quiz/bar";
import { NavigationButtons } from "@/components/quiz/navigation";
import { ConfirmationModal } from "@/components/quiz/confirmation-modal";
import type { QuizState, QuizCategory } from "@/type/question";
import Image from "next/image";
import logo from "@public/assets/logo/logo.svg";
import {
  quizQuestions,
  categoryInfo,
  initialTimeRemaining,
} from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState>({
    currentCategory: "reading",
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: initialTimeRemaining,
    completedCategories: [],
  });

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [, setPendingNavigation] = useState<"next" | null>(null);

  const currentCategoryQuestions = useMemo(
    () => quizQuestions.filter((q) => q.category === quizState.currentCategory),
    [quizState.currentCategory]
  );

  const currentQuestion =
    currentCategoryQuestions[quizState.currentQuestionIndex];
  const currentCategoryInfo = categoryInfo.find(
    (c) => c.name === quizState.currentCategory
  )!;

  const isLastQuestion =
    quizState.currentCategory === "speaking" &&
    quizState.currentQuestionIndex === currentCategoryQuestions.length - 1;

  const handleTimeUpdate = useCallback((time: number) => {
    setQuizState((prev) => ({
      ...prev,
      timeRemaining: { ...prev.timeRemaining, [prev.currentCategory]: time },
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    router.push(
      `/test/result?state=${encodeURIComponent(JSON.stringify(quizState))}`
    );
  }, [quizState, router]);

  const handleTimeExpired = useCallback(() => {
    const currentCategoryIndex = categoryInfo.findIndex(
      (c) => c.name === quizState.currentCategory
    );
    if (currentCategoryIndex < categoryInfo.length - 1) {
      const nextCategory = categoryInfo[currentCategoryIndex + 1].name;
      setQuizState((prev) => ({
        ...prev,
        currentCategory: nextCategory as QuizCategory,
        currentQuestionIndex: 0,
        completedCategories: [
          ...prev.completedCategories,
          prev.currentCategory,
        ],
      }));
    } else {
      handleSubmit();
    }
  }, [quizState.currentCategory, handleSubmit]);

  const handleAnswerUpdate = useCallback(
    (answer: unknown) => {
      setQuizState((prev) => ({
        ...prev,
        answers: { ...prev.answers, [currentQuestion.id]: answer },
      }));
    },
    [currentQuestion.id]
  );

  const handleNavigation = useCallback(
    (direction: "next" | "previous") => {
      setQuizState((prev) => {
        let nextIndex =
          direction === "next"
            ? prev.currentQuestionIndex + 1
            : prev.currentQuestionIndex - 1;

        const nextCategory = prev.currentCategory;

        if (nextIndex < 0) {
          // Prevent going back to previous categories
          nextIndex = 0;
        } else if (nextIndex >= currentCategoryQuestions.length) {
          const currentCategoryIndex = categoryInfo.findIndex(
            (c) => c.name === prev.currentCategory
          );
          if (currentCategoryIndex < categoryInfo.length - 1) {
            setPendingNavigation("next");
            setShowConfirmationModal(true);
            return prev;
          } else {
            nextIndex = currentCategoryQuestions.length - 1;
          }
        }

        return {
          ...prev,
          currentCategory: nextCategory,
          currentQuestionIndex: nextIndex,
        };
      });
    },
    [currentCategoryQuestions.length]
  );

  const confirmNavigation = useCallback(() => {
    setQuizState((prev) => {
      const currentCategoryIndex = categoryInfo.findIndex(
        (c) => c.name === prev.currentCategory
      );
      const nextCategory = categoryInfo[currentCategoryIndex + 1].name;

      return {
        ...prev,
        currentCategory: nextCategory as QuizCategory,
        currentQuestionIndex: 0,
        completedCategories: [
          ...prev.completedCategories,
          prev.currentCategory,
        ],
      };
    });
    setShowConfirmationModal(false);
    setPendingNavigation(null);
  }, []);

  const answeredQuestions = Object.keys(quizState.answers).filter((id) =>
    currentCategoryQuestions.some((q) => q.id.toString() === id)
  ).length;
  return (
    <section className="min-h-screen bg-blue-100">
      <header className="p-4 sticky top-0 bg-white mb-16 flex flex-col w-full border-b-4 border-blue-400 space-y-4">
        <div className="flex items-center justify-center mx-auto w-full">
          <Image src={logo} alt="Logo" className="h-16 w-16" />
          <h1 className="text-2xl font-bold">Ngilingo</h1>
        </div>
        <div className="flex justify-between px-8 items-center">
          <div className="flex items-center gap-2">
            <currentCategoryInfo.icon className="text-blue-500" />
            <span className="capitalize text-xl font-semibold w-max">
              {currentCategoryInfo.name} Test
            </span>
            <span className="text-md text-gray-500">
              ({answeredQuestions}/{currentCategoryInfo.questionCount})
            </span>
          </div>
          <ProgressBar
            totalQuestions={currentCategoryInfo.questionCount}
            answeredQuestions={answeredQuestions}
          />
          <QuizTimer
            timeRemaining={quizState.timeRemaining[quizState.currentCategory]}
            onTimeUpdate={handleTimeUpdate}
            onTimeExpired={handleTimeExpired}
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white/60 rounded-lg p-6 py-12 shadow-sm">
          {currentQuestion.type === "multiple-choice" && (
            <ReadingQuestion
              question={currentQuestion}
              selectedAnswer={quizState.answers[currentQuestion.id]}
              onAnswerSelect={handleAnswerUpdate}
            />
          )}
          {currentQuestion.type === "writing" && (
            <WritingQuestion
              question={currentQuestion}
              savedAnswer={quizState.answers[currentQuestion.id]}
              onAnswerChange={handleAnswerUpdate}
            />
          )}
          {currentQuestion.type === "listening" && (
            <ListeningQuestion
              question={currentQuestion}
              selectedAnswer={quizState.answers[currentQuestion.id]}
              onAnswerSelect={handleAnswerUpdate}
            />
          )}
          {currentQuestion.type === "speaking" && (
            <SpeakingQuestion
              question={currentQuestion}
              onRecordingComplete={handleAnswerUpdate}
            />
          )}

          {isLastQuestion ? (
            <Button onClick={handleSubmit} className="w-full mt-6">
              Submit Quiz
            </Button>
          ) : (
            <NavigationButtons
              onPrevious={() => handleNavigation("previous")}
              onNext={() => handleNavigation("next")}
              isPreviousDisabled={quizState.currentQuestionIndex === 0}
              isNextDisabled={false}
            />
          )}
        </div>
      </main>

      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={confirmNavigation}
        title="Change Category"
        description="Are you sure you want to move to the next category? You won't be able to return to the current category once you proceed."
      />
    </section>
  );
}
