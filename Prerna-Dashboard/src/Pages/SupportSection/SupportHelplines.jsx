import React from "react";
import { helplineCategories } from "./SupportConstants";

const SupportHelplines = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Important Helpline Numbers
        </h2>
        <p className="text-gray-600">Toll-free numbers available 24/7 across India</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {helplineCategories.map((category, i) => (
          <div key={i} className={`bg-linear-to-br ${category.color} rounded-4xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner border border-white/20 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-wide">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.lines.map((line, idx) => (
                <div key={idx} className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between gap-4">
                  <div>
                     <div className="font-bold text-lg">{line.name}</div>
                     <div className="text-xs text-white/70 opacity-80">{line.description}</div>
                  </div>
                  <div className="text-2xl font-bold tracking-wider bg-white/20 px-3 py-1 rounded-lg font-mono">
                    {line.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportHelplines;