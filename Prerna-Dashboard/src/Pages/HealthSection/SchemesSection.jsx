import React from "react";
import { ChevronRight, Award, Landmark, ShieldCheck, ScrollText } from "lucide-react";
import { governmentSchemes } from "./HealthConstants";

const SchemesSection = () => {
  return (
    // Updated Background: Soft Pink Background
    <section className="py-20 px-6 relative overflow-hidden bg-[#F9E8EC]">
      {/* Background Decor: Soft Abstract Curves - Updated Colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFC843]/50 blur-3xl mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-[#D9534F]/50 blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge - Updated Colors */}
          <div className="inline-flex items-center bg-white border border-[#D9534F]/30 text-[#CD4628] px-6 py-2 rounded-full mb-6 shadow-sm">
            <Landmark size={18} />
            <span className="font-bold ml-2 tracking-wide text-sm uppercase">
              Government Initiatives
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 font-serif">
            Empowering You with Benefits
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We simplify complex government schemes so you can access the financial
            and medical support you are entitled to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {governmentSchemes.map((scheme, i) => (
            <div
              key={i}
              className="group bg-white p-1 relative overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#D9534F]/30"
            >
              {/* Card Border Gradient - Coral to Yellow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D9534F] via-[#CD4628] to-[#FFC843] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="bg-white rounded-xl p-6 h-full relative z-10 flex items-start gap-5">
                {/* Icon Box - Updated to Yellow/Coral background */}
                <div className="w-16 h-16 rounded-full bg-[#FFC843]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-[#FFC843]/60 group-hover:bg-[#D9534F]">
                  {/* Icon color is white in constants for contrast */}
                  {scheme.icon} 
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#333333] mb-2 font-serif group-hover:text-[#D9534F] transition-colors">
                    {scheme.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {scheme.benefit}
                  </p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-bold bg-[#F9E8EC] text-green-700 px-3 py-1 rounded-full border border-[#D9534F]/30 flex items-center gap-1">
                      <ShieldCheck size={12} /> Verified Scheme
                    </span>
                    {/* Button Text: Deep Coral */}
                    <button className="text-[#CD4628] font-bold text-sm flex items-center space-x-1 hover:space-x-2 transition-all">
                      <span>Check Eligibility</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative text-center">
            {/* Decorative Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#FFC843]/40 -z-10"></div>
            
            {/* Button: Coral to Yellow Gradient */}
            <button className="bg-gradient-to-r from-[#D9534F] to-[#FFC843] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-[#D9534F]/50 hover:scale-105 transition-all inline-flex items-center space-x-3">
              <span>View All 50+ Active Schemes</span>
              <Award className="w-5 h-5" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;

// import React from "react";
// import { ChevronRight, Award, Landmark, ShieldCheck } from "lucide-react";
// import { governmentSchemes } from "./HealthConstants";

// const SchemesSection = () => {
//   return (
//     <section className="py-20 px-6 relative overflow-hidden bg-stone-50">
//       {/* Background Decor: Soft Abstract Curves */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
//         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-200 blur-3xl mix-blend-multiply animate-pulse"></div>
//         <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-rose-200 blur-3xl mix-blend-multiply"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           {/* Badge */}
//           <div className="inline-flex items-center bg-white border border-orange-200 text-orange-700 px-6 py-2 rounded-full mb-6 shadow-sm">
//             <Landmark size={18} />
//             <span className="font-bold ml-2 tracking-wide text-sm uppercase">
//               Government Initiatives
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
//             Empowering You with Benefits
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             We simplify complex government schemes so you can access the financial
//             and medical support you are entitled to.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 mb-12">
//           {governmentSchemes.map((scheme, i) => (
//             <div
//               key={i}
//               className="group bg-white rounded-2xl p-1 relative overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl"
//             >
//               {/* Card Border Gradient */}
//               <div className="absolute inset-0 bg-linear-to-r from-orange-400 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

//               <div className="bg-white rounded-xl p-6 h-full relative z-10 flex items-start gap-5">
//                 {/* Icon Box */}
//                 <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-orange-100">
//                   {React.cloneElement(scheme.icon, {
//                     className: "w-8 h-8 text-orange-600",
//                   })}
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif group-hover:text-pink-600 transition-colors">
//                     {scheme.name}
//                   </h3>
//                   <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//                     {scheme.benefit}
//                   </p>
                  
//                   <div className="flex items-center justify-between mt-2">
//                     <span className="text-xs font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-100 flex items-center gap-1">
//                       <ShieldCheck size={12} /> Verified Scheme
//                     </span>
//                     <button className="text-orange-600 font-bold text-sm flex items-center space-x-1 hover:space-x-2 transition-all">
//                       <span>Check Eligibility</span>
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="relative text-center">
//             {/* Decorative Line */}
//             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10"></div>
            
//             <button className="bg-linear-to-r from-orange-500 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all inline-flex items-center space-x-3">
//               <span>View All 50+ Active Schemes</span>
//               <Award className="w-5 h-5" />
//             </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SchemesSection;