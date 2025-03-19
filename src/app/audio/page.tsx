"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Square, Play, Pause } from "lucide-react";

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState<{ blob: Blob; url: string }[]>(
    []
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      recordings.forEach((recording) => URL.revokeObjectURL(recording.url));
    };
  }, [recordings]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecordings((prev) => [...prev, { blob, url }]);
        chunks.current = [];
      };

      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  const playRecording = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Audio Recorder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-4 mb-4">
            {!isRecording ? (
              <Button onClick={startRecording}>
                <Mic className="mr-2 h-4 w-4" /> Start Recording
              </Button>
            ) : (
              <Button onClick={stopRecording} variant="destructive">
                <Square className="mr-2 h-4 w-4" /> Stop Recording
              </Button>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Recordings:</h3>
            {recordings.length === 0 ? (
              <p>No recordings yet.</p>
            ) : (
              <ul className="space-y-2">
                {recordings.map((recording, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Button
                      onClick={() => playRecording(recording.url)}
                      variant="outline"
                      size="sm"
                    >
                      <Play className="mr-2 h-4 w-4" /> Play Recording{" "}
                      {index + 1}
                    </Button>
                    <a
                      href={recording.url}
                      download={`recording-${index + 1}.webm`}
                      className="text-blue-500 hover:underline"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Audio Player</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <audio
            ref={audioRef}
            src="/audio/soal1.mp3"
            typeof="mp3"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <Button onClick={togglePlay} className="mb-2">
            {isPlaying ? (
              <>
                <Pause className="mr-2 h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" /> Play
              </>
            )}
          </Button>
          <p className="text-sm text-gray-500">
            {isPlaying ? "Now playing: soal1.mp3" : "Click play to start audio"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
