"use client";

import { useEffect } from "react";

interface QuizTimerProps {
  timeRemaining: number;
  onTimeUpdate: (time: number) => void;
  onTimeExpired: () => void;
}

export function QuizTimer({
  timeRemaining,
  onTimeUpdate,
  onTimeExpired,
}: QuizTimerProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        onTimeUpdate(timeRemaining - 1);
      } else {
        clearInterval(timer);
        onTimeExpired();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onTimeUpdate, onTimeExpired]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="font-semibold text-xl">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
