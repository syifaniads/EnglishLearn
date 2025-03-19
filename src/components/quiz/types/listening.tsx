"use client";

import { useState } from "react";
import type { ListeningQuestion as ListeningQuestionType } from "@/type/question";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

interface ListeningQuestionProps {
  question: ListeningQuestionType;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
}

export function ListeningQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
}: ListeningQuestionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(question.audioUrl));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-6 font-semibold">
      <div className="flex items-center gap-4">
        <Button onClick={togglePlay} variant="outline" size="icon">
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <span className="text-sm text-gray-600">
          Click to {isPlaying ? "pause" : "play"} audio
        </span>
      </div>

      <p className="text-lg">{question.text}</p>

      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
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
