import React from "react";
import { Users, ArrowRight, Sparkles } from "lucide-react";
import { ageGroups } from "./HealthConstants";

const AgeCareSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-[#FBFBFB]">
      {/* Soft Background Gradients - Updated Colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFB] via-[#F9E8EC] to-[#FBFBFB] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC843]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9534F]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 tracking-tight">
            A Lifetime of Care
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We understand that your health needs evolve. Our guidance is
            tailored to support you beautifully through every chapter of your
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ageGroups.map((group, i) => (
            <div
              key={i}
              className="group bg-white p-6 shadow-xl hover:shadow-2xl hover:shadow-[#D9534F]/30 transition-all duration-500 border border-[#F9E8EC] flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Hover Gradient Background Effect */}
              <div className="absolute inset-0 bg-[#F9E8EC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />

              {/* Image Container */}
              <div className="relative w-32 h-32 mb-6">
                {/* Rotating Border uses Coral/Yellow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D9534F] to-[#FFC843] rounded-full animate-spin-slow opacity-70 blur-sm group-hover:blur-md transition-all"></div>
                <img
                  src={group.image}
                  alt={group.title}
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
                />
                {/* Age Badge - Coral/White Accent */}
                <div className="absolute bottom-0 right-0 bg-[#D9534F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-white">
                  {group.age}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#333333] mb-2 group-hover:text-[#D9534F] transition-colors">
                  {group.title}
                </h3>
                {/* Divider - Coral Accent */}
                <div className="h-1 w-12 bg-[#D9534F]/50 mx-auto rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {group.focus}
                </p>

                <button className="text-[#CD4628] font-bold inline-flex items-center group/btn">
                  <span className="group-hover/btn:mr-2 transition-all">
                    View Guide
                  </span>
                  <ArrowRight
                    className="opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all"
                    size={18}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeCareSection;

// import React from "react";
// import { Users, ArrowRight } from "lucide-react";
// import { ageGroups } from "./HealthConstants";

// const AgeCareSection = () => {
//   return (
//     <section className="py-20 px-6 relative overflow-hidden">
//       {/* Soft Background Gradients */}
//       <div className="absolute inset-0 bg-linear-to-b from-white via-pink-50 to-purple-50 -z-10"></div>
//       <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             A Lifetime of Care
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             We understand that your health needs evolve. Our guidance is
//             tailored to support you beautifully through every chapter of your
//             life.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {ageGroups.map((group, i) => (
//             <div
//               key={i}
//               className="group bg-white rounded-4xl p-6 shadow-lg hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 border border-pink-50 flex flex-col items-center text-center relative overflow-hidden"
//             >
//               {/* Hover Gradient Background Effect */}
//               <div className="absolute inset-0 bg-linear-to-br from-pink-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* Image Container */}
//               <div className="relative w-32 h-32 mb-6">
//                 <div className="absolute inset-0 bg-linear-to-tr from-pink-400 to-purple-400 rounded-full animate-spin-slow opacity-70 blur-sm group-hover:blur-md transition-all"></div>
//                 <img
//                   src={group.image}
//                   alt={group.title}
//                   className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute bottom-0 right-0 bg-white text-pink-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-pink-100">
//                   {group.age}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
//                   {group.title}
//                 </h3>
//                 <div className="h-1 w-12 bg-pink-200 mx-auto rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {group.focus}
//                 </p>

//                 <button className="text-pink-500 font-semibold inline-flex items-center group/btn">
//                   <span className="group-hover/btn:mr-2 transition-all">
//                     View Guide
//                   </span>
//                   <ArrowRight
//                     className="opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all"
//                     size={18}
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AgeCareSection;
