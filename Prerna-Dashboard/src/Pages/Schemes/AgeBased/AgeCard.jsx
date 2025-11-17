import React from "react";
import { Baby, BookOpen, Sparkles, Briefcase, Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

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
    <div className="group bg-linear-to-br from-white to-purple-50 border-2 border-purple-200 rounded-3xl overflow-hidden hover:border-purple-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">

      <div className={`bg-linear-to-r ${category.color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
            {icons[category.icon]}
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-bold">{category.count} Schemes</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold">{category.age}</h3>
      </div>

      <div className="p-6">
        <div className="space-y-3 mb-4">
          {category.schemes.map((scheme, i) => (
            <div key={i} className="flex items-center space-x-3 p-3 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl">
              <CheckCircle className="text-purple-600" size={18} />
              <span className="text-gray-700 text-sm font-medium">{scheme}</span>
            </div>
          ))}
        </div>

        <button className={`w-full bg-linear-to-r ${category.color} text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2`}>
          <span>Explore All</span>
          <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
}
