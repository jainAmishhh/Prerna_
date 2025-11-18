import React from "react";
import { Check, UserCircle2, Sparkles } from "lucide-react";
import { ageBasedGuidance } from "./GuidanceConstants";

const GuidanceAgeGroup = () => {
  return (
    // Updated Background: Creamy White/Soft Pink Mix
    <section className="py-20 px-6 bg-gradient-to-b from-[#FBFBFB] via-[#F9E8EC] to-[#FBFBFB] relative overflow-hidden">
      {/* Background Decor - Updated Colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFC843]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D9534F]/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge - Updated Colors */}
          <div className="inline-flex items-center bg-white border border-[#D9534F]/30 text-[#D9534F] px-5 py-1.5 rounded-full mb-6 shadow-md">
            <UserCircle2 size={18} />
            <span className="font-bold ml-2 text-sm uppercase tracking-wide">
              Your Growth Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 font-serif">
            Guidance That Grows With You
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            From your first exam to your retirement plans, Prerna provides tailored
            support for every chapter of your story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 pt-8">
          {ageBasedGuidance.map((group, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-4xl p-6 pt-12 shadow-xl hover:shadow-2xl hover:shadow-[#D9534F]/30 transition-all duration-500 border border-[#F9E8EC] mt-8 lg:mt-0 flex flex-col hover:-translate-y-2"
            >
              {/* Floating Image Avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full p-1 bg-white shadow-lg">
                <img
                  src={group.image}
                  alt={group.stage}
                  className="w-full h-full rounded-full object-cover border-2 border-[#F9E8EC] group-hover:border-[#D9534F] transition-colors"
                />
                <div className="absolute bottom-0 right-0 bg-[#D9534F] text-white p-1 rounded-full shadow-md">
                  <Sparkles size={10} fill="white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-4">
                {/* Age Badge: Yellow/Deep Orange Text */}
                <div className="inline-block bg-[#FFC843]/20 text-[#CD4628] text-[10px] font-bold px-2 py-1 rounded-full mb-2 tracking-wide uppercase border border-[#FFC843]/40">
                  {group.age}
                </div>
                {/* Stage: Coral Hover */}
                <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#D9534F] transition-colors">
                  {group.stage}
                </h3>
                <p className="text-xs font-medium text-gray-500 mt-1">
                  {group.focus}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FFC843]/50 to-transparent mb-4"></div>

              {/* List - Checkmark uses Coral color */}
              <ul className="space-y-2 grow">
                {group.guidance.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-start text-left group-hover:text-gray-800 transition-colors"
                  >
                    <div className="bg-[#F9E8EC] p-0.5 rounded-full mr-2 mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-[#D9534F]" strokeWidth={3} />
                    </div>
                    <span className="leading-tight text-xs font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidanceAgeGroup;

// import React from "react";
// import { Check, UserCircle2, Sparkles } from "lucide-react";
// import { ageBasedGuidance } from "./GuidanceConstants";

// const GuidanceAgeGroup = () => {
//   return (
//     <section className="py-20 px-6 bg-linear-to-b from-white via-pink-50 to-white relative overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           {/* Badge */}
//           <div className="inline-flex items-center bg-white border border-pink-200 text-pink-700 px-5 py-1.5 rounded-full mb-6 shadow-sm">
//             <UserCircle2 size={18} />
//             <span className="font-bold ml-2 text-sm uppercase tracking-wide">
//               Your Growth Journey
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
//             Guidance That Grows With You
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             From your first exam to your retirement plans, Prerna provides tailored
//             support for every chapter of your story.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 pt-8">
//           {ageBasedGuidance.map((group, i) => (
//             <div
//               key={i}
//               className="group relative bg-white rounded-4xl p-6 pt-12 shadow-lg hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500 border border-pink-50 mt-8 lg:mt-0 flex flex-col hover:-translate-y-2"
//             >
//               {/* Floating Image Avatar */}
//               <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full p-1 bg-white shadow-lg">
//                 <img
//                   src={group.image}
//                   alt={group.stage}
//                   className="w-full h-full rounded-full object-cover border-2 border-pink-100 group-hover:border-pink-300 transition-colors"
//                 />
//                 <div className="absolute bottom-0 right-0 bg-pink-500 text-white p-1 rounded-full shadow-md">
//                   <Sparkles size={10} fill="white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="text-center mb-4">
//                 <div className="inline-block bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full mb-2 tracking-wide uppercase">
//                   {group.age}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
//                   {group.stage}
//                 </h3>
//                 <p className="text-xs font-medium text-gray-500 mt-1">
//                   {group.focus}
//                 </p>
//               </div>

//               {/* Divider */}
//               <div className="h-px w-full bg-linear-to-r from-transparent via-pink-100 to-transparent mb-4"></div>

//               {/* List */}
//               <ul className="space-y-2 grow">
//                 {group.guidance.map((item, idx) => (
//                   <li
//                     key={idx}
//                     className="text-sm text-gray-600 flex items-start text-left group-hover:text-gray-800 transition-colors"
//                   >
//                     <div className="bg-pink-50 p-0.5 rounded-full mr-2 mt-0.5 shrink-0">
//                         <Check className="w-3 h-3 text-pink-500" strokeWidth={3} />
//                     </div>
//                     <span className="leading-tight text-xs font-medium">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GuidanceAgeGroup;