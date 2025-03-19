import { useState, useEffect, useCallback } from "react";
import type { WritingQuestion as WritingQuestionType } from "@/type/question";
import { Textarea } from "@/components/ui/textarea";

interface WritingQuestionProps {
  question: WritingQuestionType;
  savedAnswer?: string;
  onAnswerChange: (answer: string) => void;
}

export function WritingQuestion({
  question,
  savedAnswer,
  onAnswerChange,
}: WritingQuestionProps) {
  const [wordCount, setWordCount] = useState(0);

  const countWords = useCallback((text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  }, []);

  useEffect(() => {
    if (savedAnswer) {
      setWordCount(countWords(savedAnswer));
    }
  }, [savedAnswer, countWords]); // Added countWords to dependencies

  return (
    <div className="space-y-6 font-semibold">
      <div>
        <h3 className="text-lg font-medium mb-2">{question.text}</h3>
        <p className="text-gray-600">{question.promptText}</p>
      </div>
      <div>
        <Textarea
          value={savedAnswer || ""}
          onChange={(e) => {
            onAnswerChange(e.target.value);
            setWordCount(countWords(e.target.value));
          }}
          className="min-h-[200px]"
          placeholder="Write your answer here..."
        />
        <div className="mt-2 text-sm text-gray-600 flex justify-between">
          <span>Word count: {wordCount}</span>
          {question.wordLimit && <span>Word limit: {question.wordLimit}</span>}
        </div>
      </div>
    </div>
  );
}
