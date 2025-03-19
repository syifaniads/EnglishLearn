"use client";
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const point = [
  {
    desc: "Accurate pronounciation scoring",
  },
  {
    desc: "Real-time feedback on fluency",
  },
  {
    desc: "Detailed grammar analysis",
  },
];

const DemoAi = () => {
  const handleDemoClick = () => {
    alert("Starting demo...");
    // Add demo logic here
  };
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-vivid to-shampoop px-20 py-40">
      <div className="flex max-w-7xl mx-auto gap-8">
        <div className="w-1/2 h-full">
          <h1 className="text-7xl font-bold leading-[76px] tracking-[-4px]">
            Real-time AI
            <br />
            Speaking
            <br />
            Assessment
          </h1>
          <p className="leading-[64px] text-xl text-neutral-600 mb-4">
            Practice your speaking skills with our advanced AI technology. Get
            instant feedback on your pronunciation, fluency, and grammar through
            our camera-based assessment system.
          </p>
          <ul className=" space-y-6 mb-4">
            {point.map((data, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  <span className="p-4 bg-[#3D009D]/20 rounded-full">
                    <Star className="h-8 w-8 text-white fill-[#3D009D]/30" />
                  </span>
                  <p className="text-xl font-bold">{data.desc}</p>
                </div>
              );
            })}
          </ul>
          <Button className="text-xl px-6 py-7 rounded-xl">Try Demo</Button>
        </div>
        <div className="w-1/2">
          <div
            className="relative w-full h-96 rounded-[40px] cursor-pointer overflow-hidden text-center"
            onClick={handleDemoClick}
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 208, 255, 0.5) 0%, rgba(22, 0, 57, 0.5) 100%)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-[#1E1B4B] rounded-full" />
            </div>
            <p className="text-white absolute text-xl w-max left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-24">
              Click to try AI speaking assessment demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAi;
