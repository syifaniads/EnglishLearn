import React from "react";
import { FileText, Pencil, Headphones, Mic, Clock } from "lucide-react";
import Link from "next/link";

const PlacementTest = () => {
  const testSections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Reading",
      description: "Assess comprehension and vocabulary",
      duration: "30 mins",
    },
    {
      icon: <Pencil className="w-6 h-6" />,
      title: "Writing",
      description: "Evaluate written expression",
      duration: "35 mins",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Listening",
      description: "Test Audio comprehension",
      duration: "20 mins",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Speaking",
      description: "Assess verbal communication",
      duration: "15 mins",
    },
  ];

  return (
    <section
      className="min-h-screen "
      style={{ background: "linear-gradient(to bottom, #FF00FF, #00FFFF)" }}
    >
      <div className="max-w-5xl mx-auto pt-16 px-4">
        <h1 className="text-6xl font-bold text-white text-center mb-4">
          Welcome to Your English Journey
        </h1>
        <p className="text-gray-100 text-center text-2xl mb-12">
          Let&apos;s discover your English proficiency level and choose the
          perfect learning path for you
        </p>

        <div className="bg-white rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Placement Test Overview
          </h2>
          <p className="text-center text-gray-600 mb-8">
            This comprehensive assessment will evaluate your skills in four key
            areas
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {testSections.map((section, index) => (
              <div
                key={index}
                className="border-2 rounded-xl p-4 flex items-center gap-4 border-black"
              >
                <div className="bg-pink-200 p-2 rounded-lg">{section.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">{section.title}</h3>
                    <span className="text-sm text-gem font-semibold">
                      {section.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pink-200 rounded-lg p-4 mb-8 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Total Duration: 90 Minutes</span>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-2">Before you begin:</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• Ensure you have a stable internet connection</li>
              <li>• Find a quiet environment for the speaking section</li>
              <li>• You cannot pause or restart the test once begun</li>
            </ul>
          </div>

          <p className="text-center text-gray-600 text-sm mb-8">
            After completing the test, you&apos;ll receive your proficiency
            level and personalized recommendations for TOEFL or IELTS
            preparation
          </p>

          <div className="text-center">
            <button className="bg-pink-200 text-black hover:text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors">
              <Link href="/test/toefl">Begin placement Test →</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementTest;
