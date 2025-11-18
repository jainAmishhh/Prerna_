import React from "react";
import {
  Baby,
  BookOpen,
  Sparkles,
  Briefcase,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function AgeCard({ category }) {
  const icons = {
    baby: <Baby size={32} />,
    book: <BookOpen size={32} />,
    sparkles: <Sparkles size={32} />,
    briefcase: <Briefcase size={32} />,
    heart: <Heart size={32} />,
    shield: <Shield size={32} />,
  };

  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs"
        style={{ backgroundImage: `url(${category.image})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`bg-linear-to-r ${category.color} opacity-75 p-3 rounded-xl backdrop-blur-sm group-hover:scale-110 transition`}
          >
            {icons[category.icon]}
          </div>

          <div
            className={`bg-linear-to-r ${category.color} opacity-75 text-white backdrop-blur-sm px-4 py-2 rounded-full font-semibold`}
          >
            {category.count} Schemes
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
          {category.age}
        </h3>

        <div className="space-y-3 mb-6">
          {category.schemes.map((scheme, i) => (
            <div
              key={i}
              className="relative flex items-center space-x-3 p-3 rounded-xl overflow-hidden"
            >
              {/* Background with gradient + 50% opacity */}
              <div
                className={`absolute inset-0 w-fit bg-linear-to-r ${category.color} opacity-50`}
              ></div>

              {/* CONTENT */}
              <div className="relative z-10 flex items-center space-x-3">
                <CheckCircle className="text-pink-100" size={18} />
                <span className="text-white text-sm font-medium">{scheme}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`w-full bg-linear-to-r ${category.color} text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2`}
        >
          <span>Explore All</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
