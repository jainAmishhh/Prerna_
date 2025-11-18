import React from "react";
import { Check, Star, ChevronRight, HeartPulse } from "lucide-react";
import { healthCategories } from "./HealthConstants";

const CategoriesSection = () => {
  return (
    <section className="py-8 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Badge Section - Updated Colors */}
          <div className="inline-flex items-center bg-gradient-to-r from-[#D9534F] to-[#CD4628] text-white px-6 py-2 rounded-full mb-6 shadow-lg shadow-[#D9534F]/30">
            <HeartPulse size={20} className="animate-pulse fill-white" />
            <span className="font-bold ml-2">360° Wellness Coverage</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            Comprehensive Health Services
          </h2>
          <p className="text-gray-700 text-lg">
            From pregnancy to menopause — we're with you at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthCategories.map((category, i) => (
            <div
              key={i}
              className="group relative rounded-3xl h-full overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 1. Background Image with Zoom Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              {/* 2. Gradient Overlay (Uses constant color definitions) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 transition-opacity duration-300 group-hover:opacity-70 mix-blend-multiply`}
              />

              {/* 3. Content Container */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                {/* Icon Box - Updated to Yellow/Coral Accents */}
                <div className="bg-[#FFC843]/30 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/20">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90 mb-6 font-medium">
                  {category.subtitle}
                </p>

                {/* Features List - Checkmark color is White/Yellow Accent */}
                <ul className="space-y-3 mb-8 grow">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="bg-[#FFC843] p-1 rounded-full mt-0.5 shrink-0 text-[#D9534F]">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-white/95">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {/* Highlight - Yellow/Coral Text */}
                  <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-5 border border-white/10">
                    <Star className="w-4 h-4 text-[#FFC843] fill-[#FFC843]" />
                    <span className="text-xs font-bold tracking-wide uppercase">
                      {category.highlight}
                    </span>
                  </div>

                  {/* Button - White background, Dark Coral Text */}
                  <button className="w-full bg-white text-[#D9534F] py-4 px-6 rounded-2xl font-bold hover:bg-[#F9E8EC] transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg">
                    <span>Explore Now</span>
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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

export default CategoriesSection;

// import React from "react";
// import { Check, Star, ChevronRight, HeartPulse } from "lucide-react";
// import { healthCategories } from "./HealthConstants";

// const CategoriesSection = () => {
//   return (
//     <section className="py-8 px-6 mt-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           {/* Badge Section */}
//           <div className="inline-flex items-center bg-linear-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg shadow-pink-200">
//             <HeartPulse size={20} className="animate-pulse" />
//             <span className="font-semibold ml-2">360° Wellness Coverage</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Comprehensive Health Services
//           </h2>
//           <p className="text-gray-600 text-lg">
//             From pregnancy to menopause — we're with you at every stage
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {healthCategories.map((category, i) => (
//             <div
//               key={i}
//               className="group relative rounded-3xl h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               {/* 1. Background Image with Zoom Effect */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                 style={{ backgroundImage: `url(${category.image})` }}
//               />

//               {/* 2. Gradient Overlay (Ensures text readability) */}
//               <div
//                 className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-60 transition-opacity duration-300 group-hover:opacity-70`}
//               />

//               {/* 3. Content Container */}
//               <div className="relative z-10 p-8 text-white h-full flex flex-col">
//                 {/* Icon Box */}
//                 <div className="bg-white/20 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
//                   {category.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
//                 <p className="text-white/90 mb-6 font-medium">
//                   {category.subtitle}
//                 </p>

//                 <ul className="space-y-3 mb-8 grow">
//                   {category.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start space-x-3">
//                       <div className="bg-white/20 p-1 rounded-full mt-0.5 shrink-0">
//                         <Check className="w-3 h-3" strokeWidth={3} />
//                       </div>
//                       <span className="text-sm font-medium text-white/95">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="mt-auto">
//                   <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-5 border border-white/10">
//                     <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
//                     <span className="text-xs font-bold tracking-wide uppercase">
//                       {category.highlight}
//                     </span>
//                   </div>

//                   <button className="w-full bg-white text-gray-900 py-4 px-6 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg">
//                     <span>Explore Now</span>
//                     <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;