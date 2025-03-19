import React from "react";
import { Users, Star, Trophy } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Personalized Learning",
      description: "AI-powered system adapts to your learning style and pace",
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Expert Content",
      description: "AI-powered character to compatible your learning style",
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-600" />,
      title: "Instant Feedback",
      description: "Real-time AI assessment of speaking and writing skills",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-rock mb-4">
        Why Choose NGILINGO?
      </h1>

      <p className="text-center text-gray-500 mb-16 text-2xl max-w-4xl mx-auto">
        Our platform combines cutting-edge AI technology with proven learning
        methods to help you achieve your English proficiency goals.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gem mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
