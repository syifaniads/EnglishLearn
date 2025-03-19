"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoveRight } from "lucide-react";

import Link from "next/link";

export default function Hero() {
  const [selectedClass, setSelectedClass] = useState<string>("");

  return (
    <div className="min-h-screen grid bg-gradient-to-b from-gem to-magenta justify-center items-center">
      <main className="container mx-auto text-center">
        <h1 className="text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-[76px]">
          Master English with AI-Powered Learning
        </h1>
        <p className=" text-xl text-white/90 mb-12 max-w-5xl mx-auto">
          Prepare for TOEFL & IELTS with personalized lessons, interactive
          games, and real-time AI feedback. Join 50,000+ successful learners
          today.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <Select onValueChange={setSelectedClass}>
            <SelectTrigger className="w-[450px] bg-white text-gray-900 h-9 text-base">
              <SelectValue placeholder="Choose English Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toefl" className="font-bold">
                TOEFL IBT
              </SelectItem>
              <SelectItem value="ielts" className="font-bold">
                IELTS
              </SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="w-full md:w-auto h-9 font-semibold bg-white/80 text-gray-900 border border-black hover:bg-white "
            disabled={!selectedClass}
          >
            <Link
              href={`/signup/${selectedClass}`}
              className="flex items-center text-base"
            >
              Get Started
              <MoveRight className="h-6 ml-8" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
