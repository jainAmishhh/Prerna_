import React from "react";
import { Users, ArrowRight, CheckCircle } from "lucide-react";
import AgeCard from "./AgeCard";

export default function AgeBasedSection() {

  const ageBasedCategories = [
    {
      age: "0-5 Years",
      icon: "baby",
      color: "from-pink-400 to-rose-400",
      schemes: ["Vaccination Schedule", "Nutrition Programs", "Child Development", "Birth Registration"],
      count: 12
    },
    {
      age: "6-12 Years",
      icon: "book",
      color: "from-purple-400 to-pink-400",
      schemes: ["Education Schemes", "Sports Programs", "School Nutrition", "Scholarship Info"],
      count: 18
    },
    {
      age: "13-18 Years",
      icon: "sparkles",
      color: "from-rose-400 to-pink-500",
      schemes: ["Menstrual Hygiene", "Career Guidance", "Skill Training", "Safety Programs"],
      count: 24
    },
    {
      age: "19-35 Years",
      icon: "briefcase",
      color: "from-purple-500 to-indigo-500",
      schemes: ["Employment", "Entrepreneurship", "Health & Wellness", "Marriage Support"],
      count: 35
    },
    {
      age: "36-60 Years",
      icon: "heart",
      color: "from-pink-500 to-purple-500",
      schemes: ["Healthcare", "Financial Security", "Skill Upgradation", "Legal Rights"],
      count: 28
    },
    {
      age: "60+ Years",
      icon: "shield",
      color: "from-indigo-500 to-purple-600",
      schemes: ["Pension Schemes", "Healthcare", "Senior Benefits", "Social Security"],
      count: 16
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb 12">
          <div className="inline-flex items-center bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
            <Users size={20} />
            <span className="font-semibold ml-2">Personalized for Every Age</span>
          </div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
            Schemes Based on Your Age
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            From newborn to senior citizen - tailored support for every stage of life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {ageBasedCategories.map((category, idx) => (
            <AgeCard key={idx} category={category} />
          ))}
        </div>

      </div>
    </div>
  );
}
