import React from "react";
import { Zap, Play } from "lucide-react";
import { coreFeatures } from "./AboutConstants";

const AboutFeatures = () => {
  return (
    <div className="bg-linear-to-br from-purple-50 via-pink-50 to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white border border-purple-200 text-purple-700 px-6 py-2 rounded-full mb-4 shadow-sm">
            <Zap size={20} className="mr-2 fill-purple-100" />
            <span className="font-semibold">Revolutionary Technology</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Makes Prerna Special
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            First-of-its-kind Voice-to-Video AI platform designed exclusively for
            women empowerment
          </p>
        </div>

        <div className="space-y-16">
          {coreFeatures.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-80 md:h-96">
                    <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className={`absolute inset-0 bg-linear-to-r ${feature.linear} opacity-60 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-white/20 backdrop-blur-md w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-lg border border-white/30">
                             {React.cloneElement(feature.icon, { size: 40 })}
                         </div>
                    </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div className={`inline-block bg-linear-to-r ${feature.linear} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider`}>
                    {feature.subtitle}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {feature.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-700 text-center">
                        {stat}
                    </div>
                  ))}
                </div>

                {/* How It Works Box */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 text-purple-700 font-bold text-sm mb-3 uppercase">
                        <Play size={14} fill="currentColor" /> How It Works
                    </div>
                    <div className="space-y-2">
                        {feature.howItWorks.map((step, hIdx) => (
                            <div key={hIdx} className="flex gap-3 text-sm text-gray-600">
                                <span className="font-bold text-purple-400">{hIdx + 1}.</span>
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;