import React from "react";
import { GraduationCap, Heart, ChevronRight, Star } from "lucide-react";

export default function MainCategoryCard({ category }) {

  const icons = {
    graduation: <GraduationCap size={40} className="text-white" />,
    heart: <Heart size={40} className="text-white" />,
  };

  return (
    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">

      <div className={`bg-linear-to-br ${category.linear} p-8 relative`}>
        <div className="relative z-10">
          <div className="bg-white/20 backdrop-blur p-5 rounded-2xl mb-4">
            {icons[category.icon]}
          </div>
          <h3 className="text-white text-2xl font-bold">{category.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{category.description}</p>

        <div className="space-y-3 mb-6">
          {category.schemes.map((s, i) => (
            <div key={i} className="p-4 bg-purple-50 rounded-xl border border-pink-100 flex justify-between items-center">
              <span className="font-semibold">{s.name}</span>
              <ChevronRight size={18} className="text-purple-600" />
            </div>
          ))}
        </div>

        <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-100">
          <p className="text-xs font-semibold text-purple-700 mb-2">✨ Features:</p>
          <div className="grid grid-cols-2 gap-2">
            {category.features.map((f, i) => (
              <div key={i} className="flex items-center space-x-1">
                <Star size={12} className="text-pink-500" />
                <span className="text-xs">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 rounded-full font-semibold flex justify-center items-center`}>
          Explore {category.title.split("&")[0]}
          <ChevronRight size={18} className="ml-2" />
        </button>
      </div>

    </div>
  );
}
