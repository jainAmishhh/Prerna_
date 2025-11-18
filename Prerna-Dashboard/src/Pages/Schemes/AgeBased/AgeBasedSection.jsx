import React from "react";
import { Users } from "lucide-react";
import AgeCard from "./AgeCard";

export default function AgeBasedSection() {

  const ageBasedCategories = [
    {
      age: "0-5 Years",
      icon: "baby",
      color: "from-pink-400 to-rose-400",
      schemes: ["Vaccination Schedule", "Nutrition Programs", "Child Development", "Birth Registration"],
      count: 12,
      image: "https://images.unsplash.com/photo-1597430801767-a4e16348db92?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      age: "6-12 Years",
      icon: "book",
      color: "from-purple-400 to-pink-400",
      schemes: ["Education Schemes", "Sports Programs", "School Nutrition", "Scholarship Info"],
      count: 18,
      image: "https://images.unsplash.com/photo-1507747586703-16d5436bd01d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      age: "13-18 Years",
      icon: "sparkles",
      color: "from-rose-400 to-pink-500",
      schemes: ["Menstrual Hygiene", "Career Guidance", "Skill Training", "Safety Programs"],
      count: 24,
      image: "https://images.unsplash.com/photo-1497486443155-158cceb6629a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      age: "19-35 Years",
      icon: "briefcase",
      color: "from-purple-500 to-indigo-500",
      schemes: ["Employment", "Entrepreneurship", "Health & Wellness", "Marriage Support"],
      count: 35,
      image: "https://images.unsplash.com/photo-1578202174639-ed3d20e60c18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      age: "36-60 Years",
      icon: "heart",
      color: "from-pink-500 to-purple-500",
      schemes: ["Healthcare", "Financial Security", "Skill Upgradation", "Legal Rights"],
      count: 28,
      image: "https://images.unsplash.com/photo-1650443215213-728560ddc1a2?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      age: "60+ Years",
      icon: "shield",
      color: "from-indigo-500 to-purple-600",
      schemes: ["Pension Schemes", "Healthcare", "Senior Benefits", "Social Security"],
      count: 16,
      image: "https://images.unsplash.com/photo-1724301964759-374723c8ee7d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
            <Users size={20} />
            <span className="font-semibold ml-2">Personalized for Every Age</span>
          </div>

          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
            Schemes Based on Your Age
          </h2>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto mt-3">
            From newborn to senior citizen — tailored support for every stage of life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {ageBasedCategories.map((category, idx) => (
            <AgeCard key={idx} category={category} />
          ))}
        </div>

      </div>
    </div>
  );
}

