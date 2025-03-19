import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";

const Enhance = () => {
  return (
    <section className="bg-gradient-to-b from-shampoop to-rock text-center p-24 space-y-8">
      <h1 className="text-6xl font-bold text-white tracking-tight">
        Ready to Enhance Your English Skills?
      </h1>
      <p className="text-2xl text-white">
        Join Thousand of students who have experienced the benefits of learning
        with NGILINGO
      </p>
      <Button
        variant="secondary"
        className="px-12 text-lg font-semibold py-6 rounded-lg translate-y-8"
      >
        Try It Now
        <ChevronRight className="ml-2" />
      </Button>
    </section>
  );
};

export default Enhance;
