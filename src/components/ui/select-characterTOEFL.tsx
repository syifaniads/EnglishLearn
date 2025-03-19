"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import GoalsModal from "./goal-modal";

interface props {
  char1: StaticImageData;
  char2: StaticImageData;
}

export default function CharSelectorTOEFL({ char1, char2 }: props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <section
      className="min-h-screen flex items-center justify-center p-4 fixed inset-0 z-30 bg-black/50"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden border-0 relative min-h-72 rounded-3xl">
        <div className="flex relative h-full min-h-[450px]">
          <h1 className="absolute w-full text-center font-semibold text-4xl top-4 z-50">
            Choose Your TOEFL IBT Companion
          </h1>
          <div className="bg-shampoop  flex flex-col items-center justify-end w-1/2 relative">
            <Image src={char1} alt="" className="absolute -bottom-4" />
            <Button
              variant="outline"
              className="w-36 absolute bottom-4 text-black font-medium"
              onClick={handleClick}
            >
              Select
            </Button>
          </div>
          <div className="bg-cyan-400 flex flex-col w-1/2 items-center justify-end relative overflow-visible">
            <Image src={char2} alt="" className="absolute w-4/6" />
            <Button
              variant="outline"
              className="w-36 absolute bottom-4 text-black font-medium "
              onClick={handleClick}
            >
              Select
            </Button>
            {isOpen ? <GoalsModal /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
