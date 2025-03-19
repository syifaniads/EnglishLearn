import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type QuizCategory = "reading" | "listening" | "writing" | "speaking";

export interface BaseQuestion {
  id: number;
  category: QuizCategory;
  text: string;
  points: number;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  options: string[];
  correctAnswer: string;
}

export interface WritingQuestion extends BaseQuestion {
  type: "writing";
  wordLimit?: number;
  promptText: string;
}

export interface ListeningQuestion extends BaseQuestion {
  type: "listening";
  audioUrl: string;
  options: string[];
  correctAnswer: string;
}

export interface SpeakingQuestion extends BaseQuestion {
  type: "speaking";
  promptText: string;
  durationLimit: number; // in seconds
}

export type Question =
  | MultipleChoiceQuestion
  | WritingQuestion
  | ListeningQuestion
  | SpeakingQuestion;

export interface QuizState {
  currentCategory: QuizCategory;
  currentQuestionIndex: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answers: Record<number, any>;
  timeRemaining: Record<QuizCategory, number>;
  completedCategories: QuizCategory[]; // Add this line
}

export interface CategoryInfo {
  name: QuizCategory;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  time: number; // in seconds
  questionCount: number;
}
