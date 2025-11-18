import React from "react";
import { Check, Star, Sparkles, ChevronRight, HandHeart } from "lucide-react";
import { guidanceCategories } from "./GuidanceConstants";

const GuidanceCategories = () => {
  return (
    <section className="py-12 px-6 mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Badge Section */}
          <div className="inline-flex items-center bg-white border border-purple-200 text-purple-700 px-6 py-2 rounded-full mb-4 shadow-lg shadow-purple-100">
            <HandHeart size={20} className="animate-pulse text-pink-500" />
            <span className="font-bold ml-2 tracking-wide uppercase text-sm">
              Life Guidance • With Prerna
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Complete Support for Your Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide expert guidance for every aspect of your life — career,
            legal rights, financial freedom, and personal safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidanceCategories.map((category, i) => (
            <div
              key={i}
              className="group bg-white  p-4 hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Top Section: Icon & Image Arch */}
              <div className="relative">
                {/* 1. Floating Icon (Centered Top) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                  <div className={`bg-linear-to-br ${category.color} text-white w-16 h-16 rotate-12 flex items-center justify-center shadow-lg shadow-purple-200 group-hover:rotate-0 transition-all duration-300`}>
                    {category.icon}
                  </div>
                </div>

                {/* 2. The "Arch" Image Container */}
                <div className="relative h-72 w-full overflow-hidden  mt-6 shadow-inner bg-">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className={`absolute inset-0 bg-linear-to-t ${category.color} opacity-90 group-hover:opacity-85 transition-opacity duration-300 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Text INSIDE the Image (Bottom Aligned) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-center z-10">
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                      {category.title}
                    </h3>
                    <div className="h-1 w-12 bg-white/40 mx-auto rounded-full mb-2"></div>
                    <p className="text-white/90 text-sm font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Content */}
              <div className="px-4 pt-6 pb-4 grow flex flex-col">
                

                {/* Services List */}
                <ul className="space-y-3 mb-6 grow">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className={`bg-purple-100 p-1 rounded-full shrink-0 mt-0.5 text-purple-600`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* AI Feature & CTA */}
                <div className="mt-auto space-y-3">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center gap-3">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm text-pink-500">
                       <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-gray-500 italic font-medium">
                      {category.aiFeature}
                    </p>
                  </div>

                  <button className={`w-full bg-linear-to-r ${category.color} text-white py-4 rounded-2xl font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2`}>
                    <span>Start Guidance</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidanceCategories;