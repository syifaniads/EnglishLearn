"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TestHistory() {
  return (
    <div className="w-full p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome Back, Haris!</h1>

      <div className="space-y-4">
        {/* Test History Section */}
        <div>
          <div className="bg-[#1D1535] text-white px-4 py-3 rounded-lg">
            Test History
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center  p-6 rounded-lg border-black border-2 hover:bg-gray-50 cursor-pointer">
              <span className="text-base font-semibold">Pre-test SET</span>
              <span className="text-rock font-bold">2/4/2025</span>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#1D1535] text-white px-4 py-3 rounded-lg">
            Test Package
          </div>
          <div className="mt-2 space-y-2">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem
                value="post-test-1"
                className="border-black border-2 rounded-lg"
              >
                <AccordionTrigger className="p-6 hover:no-underline">
                  <div className="flex justify-between items-center flex-1">
                    <span className="text-base font-semibold">Post Test 1</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  {/* Add your Post Test 1 content here */}
                  <div className="text-gray-600">
                    Post Test 1 content goes here...
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="post-test-2"
                className="border-black border-2 rounded-lg"
              >
                <AccordionTrigger className="p-6 hover:no-underline">
                  <div className="flex justify-between items-center flex-1">
                    <span className="text-base font-semibold">Post Test 2</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  {/* Add your Post Test 2 content here */}
                  <div className="text-gray-600">
                    Post Test 2 content goes here...
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
