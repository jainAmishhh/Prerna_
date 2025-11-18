import React from "react";
import { Check, Sparkles, Sprout } from "lucide-react";
import { lifeGuidanceAreas } from "./GuidanceConstants";

const GuidanceLifeAreas = () => {
  return (
    <section className="py-20 px-6 bg-[#FBFBFB] relative overflow-hidden">
      {/* Background Decor - Updated Colors */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D9534F]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#FFC843]/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge - Updated Colors */}
          <div className="inline-flex items-center bg-[#F9E8EC] border border-[#D9534F]/30 text-[#CD4628] px-6 py-2 rounded-full mb-6 shadow-sm">
            <Sprout size={18} />
            <span className="font-bold ml-2 tracking-wide text-sm uppercase">
              Beyond Career
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 font-serif">
            Personal Growth & Life Skills
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We believe in holistic success. Explore resources to build your
            confidence, manage stress, and thrive in every role you play.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifeGuidanceAreas.map((area, i) => (
            <div
              key={i}
              className="group bg-white  shadow-xl hover:shadow-2xl hover:shadow-[#FFC843]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-[#F9E8EC] flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Floating Icon - Icon color fixed to Coral/White theme */}
                <div className="absolute -bottom-6 right-6 bg-[#D9534F] p-3 shadow-lg z-20 border border-white group-hover:rotate-12 transition-transform duration-300">
                  {area.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-8 grow flex flex-col">
                {/* Title: Coral Hover */}
                <h3 className="text-xl font-bold text-[#333333] mb-4 group-hover:text-[#D9534F] transition-colors">
                  {area.title}
                </h3>

                <div className="space-y-3 mb-6 grow">
                  {area.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 text-sm text-gray-700"
                    >
                      <div className="mt-1 shrink-0">
                        {/* Checkmark: Coral color */}
                        <Check className="w-3.5 h-3.5 text-[#D9534F]" strokeWidth={3} />
                      </div>
                      <span className="font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
                
                {/* Button: Deep Orange text */}
                <button className="w-full mt-auto py-2.5 rounded-xl border border-[#D9534F]/30 text-[#CD4628] font-bold text-sm hover:bg-[#F9E8EC] transition-colors flex items-center justify-center gap-2 group/btn">
                    <span>Explore Guide</span>
                    <Sparkles size={14} className="group-hover/btn:animate-pulse" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidanceLifeAreas;

// import React from "react";
// import { Check, Sparkles, Sprout } from "lucide-react";
// import { lifeGuidanceAreas } from "./GuidanceConstants";

// const GuidanceLifeAreas = () => {
//   return (
//     <section className="py-20 px-6 bg-white relative overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
//       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           {/* Badge */}
//           <div className="inline-flex items-center bg-white border border-purple-200 text-purple-700 px-6 py-2 rounded-full mb-6 shadow-sm">
//             <Sprout size={18} />
//             <span className="font-bold ml-2 tracking-wide text-sm uppercase">
//               Beyond Career
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
//             Personal Growth & Life Skills
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             We believe in holistic success. Explore resources to build your
//             confidence, manage stress, and thrive in every role you play.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {lifeGuidanceAreas.map((area, i) => (
//             <div
//               key={i}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col"
//             >
//               {/* Image Header */}
//               <div className="relative h-48 overflow-hidden">
//                 <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-10" />
//                 <img
//                   src={area.image}
//                   alt={area.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Floating Icon */}
//                 <div className="absolute -bottom-6 right-6 bg-white p-3 rounded-2xl shadow-lg z-20 border border-gray-50 group-hover:rotate-12 transition-transform duration-300">
//                   {area.icon}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 pt-8 grow flex flex-col">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
//                   {area.title}
//                 </h3>

//                 <div className="space-y-3 mb-6 grow">
//                   {area.topics.map((topic, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-start space-x-3 text-sm text-gray-600"
//                     >
//                       <div className="mt-1 shrink-0">
//                         <Check className="w-3.5 h-3.5 text-pink-500" strokeWidth={3} />
//                       </div>
//                       <span className="font-medium">{topic}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="w-full mt-auto py-2.5 rounded-xl border border-purple-100 text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 group/btn">
//                    <span>Explore Guide</span>
//                    <Sparkles size={14} className="group-hover/btn:animate-pulse" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GuidanceLifeAreas;