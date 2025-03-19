interface PaginationDotsProps {
  totalQuestions: number;
  currentQuestion: number;
  onQuestionChange: (index: number) => void;
}

export function PaginationDots({
  totalQuestions,
  currentQuestion,
  onQuestionChange,
}: PaginationDotsProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <button
          key={index}
          onClick={() => onQuestionChange(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            currentQuestion === index ? "bg-primary scale-125" : "bg-gray-300"
          }`}
          aria-label={`Go to question ${index + 1}`}
        />
      ))}
    </div>
  );
}
