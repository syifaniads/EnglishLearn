import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

interface ScoreCardProps {
  category: string;
  score: number;
  details?: {
    taskAchievement?: number;
    coherence?: number;
    lexical?: number;
    grammar?: number;
  };
  correct?: string;
  large?: boolean;
}

export function ScoreCard({
  category,
  score,
  details,
  correct,
  large,
}: ScoreCardProps) {
  return (
    <Card
      className={`relative ${large ? "col-span-2" : ""} border-2 border-black`}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p
              className={`text-md font-bold text-rock mb-2 ${
                large ? "text-3xl" : "text-md"
              }`}
            >
              {category}
            </p>
            <p className={`font-bold ${large ? "text-6xl" : "text-4xl"}`}>
              {score}
            </p>
            {correct && (
              <p className="text-sm text-muted-foreground mt-1">
                {correct} correct
              </p>
            )}
          </div>
          {!large && <ArrowUpRight className="h-5 w-5 text-magenta" />}
          {large && (
            <div className="h-12 w-12 rounded-full bg-magenta/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-magenta" />
            </div>
          )}
        </div>
        {details && (
          <div className="mt-4 space-y-1">
            {details.taskAchievement && (
              <p className="text-md">
                Task Achievement: {details.taskAchievement}
              </p>
            )}
            {details.coherence && (
              <p className="text-md">Coherence: {details.coherence}</p>
            )}
            {details.lexical && (
              <p className="text-md">Lexical: {details.lexical}</p>
            )}
            {details.grammar && (
              <p className="text-md">Grammar: {details.grammar}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
