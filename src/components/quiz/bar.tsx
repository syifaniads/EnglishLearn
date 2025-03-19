interface ProgressBarProps {
  totalQuestions: number;
  answeredQuestions: number;
}

export function ProgressBar({
  totalQuestions,
  answeredQuestions,
}: ProgressBarProps) {
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="w-full mx-12 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-300 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
