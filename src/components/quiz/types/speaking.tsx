"use client";

import { useState, useRef } from "react";
import type { SpeakingQuestion as SpeakingQuestionType } from "@/type/question";
import { Button } from "@/components/ui/button";
import { Mic, Square, RefreshCcw } from "lucide-react";

interface SpeakingQuestionProps {
  question: SpeakingQuestionType;
  onRecordingComplete: (blob: Blob) => void;
}

export function SpeakingQuestion({
  question,
  onRecordingComplete,
}: SpeakingQuestionProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<NodeJS.Timeout>();
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        onRecordingComplete(blob);
      };

      mediaRecorder.start();
      setIsRecording(true);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= question.durationLimit) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      clearInterval(timerRef.current);
      setIsRecording(false);
      setRecordingTime(0);
    }
  };

  const resetRecording = () => {
    setRecordingTime(0);
    chunksRef.current = [];
  };

  return (
    <div className="space-y-6 font-semibold">
      <div>
        <h3 className="text-lg font-medium mb-2">{question.text}</h3>
        <p className="text-gray-600">{question.promptText}</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl font-mono">
          {Math.floor(recordingTime / 60)}:
          {String(recordingTime % 60).padStart(2, "0")}
        </div>

        <div className="flex gap-2">
          {!isRecording ? (
            <Button
              onClick={startRecording}
              variant="outline"
              size="icon"
              className="h-12 w-12"
            >
              <Mic className="h-6 w-6" />
            </Button>
          ) : (
            <Button
              onClick={stopRecording}
              variant="destructive"
              size="icon"
              className="h-12 w-12"
            >
              <Square className="h-6 w-6" />
            </Button>
          )}

          <Button
            onClick={resetRecording}
            variant="outline"
            size="icon"
            className="h-12 w-12"
            disabled={isRecording}
          >
            <RefreshCcw className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
