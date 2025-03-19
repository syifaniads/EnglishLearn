"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    name: "Reading",
    materials: [
      "Comprehension",
      "Critical Analysis",
      "Speed Reading",
      "Vocabulary Building",
    ],
  },
  {
    name: "Writing",
    materials: [
      "Essay Structure",
      "Grammar and Punctuation",
      "Creative Writing",
      "Academic Writing",
    ],
  },
  {
    name: "Speaking",
    materials: ["Pronunciation", "Fluency", "Public Speaking", "Debate Skills"],
  },
  {
    name: "Listening",
    materials: [
      "Note-taking",
      "Audio Comprehension",
      "Accent Recognition",
      "Active Listening",
    ],
  },
];

export default function TestCategories() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Test Categories</h1>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="bg-[#1D1535] text-white px-4 py-3 rounded-lg">
              {category.name}
            </div>
            <div className="mt-2">
              <Accordion type="single" collapsible className="space-y-2">
                {category.materials.map((material, materialIndex) => (
                  <AccordionItem
                    key={materialIndex}
                    value={`${category.name}-${materialIndex}`}
                    className="border border-black rounded-lg"
                  >
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex justify-between items-center flex-1">
                        <span>{material}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-3">
                      <div className="text-gray-600">
                        Content for {material} goes here...
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
