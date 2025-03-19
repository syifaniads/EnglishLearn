import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

export function NavigationButtons({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-6">
      <Button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        variant="outline"
      >
        Previous
      </Button>
      <Button onClick={onNext} disabled={isNextDisabled}>
        Next
      </Button>
    </div>
  );
}
