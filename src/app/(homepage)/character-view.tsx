"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { charList } from "@/lib/character";
import { X } from "lucide-react";
export function CharacterView() {
  const cards = charList;
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="bg-gradient-to-b from-magenta to-vivid min-h-screen flex py-20 justify-center items-center flex-col">
      <div className="text-center text-white space-y-4 mb-20">
        <h1 className="text-6xl font-bold">Choose Your Learning Companion</h1>
        <h3 className="text-xl font-light">
          Select an AI player that matches your learning style and goals
        </h3>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 min-h-screen w-full z-[2000]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        a
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[2001]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-5xl h-full max-h-[500px] flex bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2  items-center justify-center bg-white rounded-full h-12 w-12"
                onClick={() => setActive(null)}
              >
                <X className="h-8 w-8" />
              </motion.button>
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="w-1/4 relative h-full overflow-visible"
              >
                <Image
                  priority
                  src={active.src}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="w-3/4 space-y-6">
                <div className="px-4 pt-6">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 text-5xl dark:text-neutral-200"
                  >
                    About Character
                  </motion.h3>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 font-semibold leading-loose text-xl h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 "
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full gap-4 flex max-w-6xl justify-center">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex flex-col w-64 h-96 bg-white/50 justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="relative h-full w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="scale-125"
                />
              </motion.div>
            </div>
            <div className="bg-[#AFC7FA] w-full px-4 py-2 z-[1] space-y-2 rounded-b-xl">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-xl"
              >
                {card.role}
              </motion.h3>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-lg w-full font-bold bg-gradient-to-r from-magenta to-gem text-white"
              >
                {card.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
