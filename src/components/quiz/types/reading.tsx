import type { MultipleChoiceQuestion } from "@/type/question";

interface ReadingQuestionProps {
  question: MultipleChoiceQuestion;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
}

export function ReadingQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
}: ReadingQuestionProps) {
  return (
    <div className="space-y-6 font-semibold">
      <p className="text-lg">{question.text}</p>
      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition-colors"
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
              className="w-4 h-4 text-primary"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
