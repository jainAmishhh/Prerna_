import React from "react";
import { whyPrernaMeans } from "./AboutConstants";

const AboutMeaning = () => {
  return (
    <div className="bg-white py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pink-100 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why "Prerna"?
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Every element of our platform has deep meaning and purpose
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyPrernaMeans.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-100 rounded-4xl p-8 shadow-lg hover:shadow-2xl hover:border-pink-200 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2"
            >
              <div
                className={`bg-linear-to-br ${item.color} text-white w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-pink-600 font-bold uppercase tracking-wide text-sm mb-4">
                {item.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeaning;