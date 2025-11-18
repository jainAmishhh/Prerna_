import React from "react";
import { BadgeCheck, Mic, MessageCircle } from "lucide-react";

const GuidanceCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative bg-gradient-to-br from-[#D9534F] via-[#CD4628] to-[#D9534F] rounded-[60px] p-16 text-center overflow-hidden shadow-2xl shadow-[#CD4628]/50">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="bg-white/30 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <BadgeCheck className="text-white animate-pulse" size={48} />
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Your Success Journey Starts Here
          </h2>

          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50,000+ women who transformed their lives with Prerna's
            guidance
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {/* Button 1: White background, Coral text */}
            <button className="bg-white text-[#D9534F] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Mic size={22} /> Start with Your Voice
            </button>

            {/* Button 2: White/Coral border, White text */}
            <button className="bg-white/20 backdrop-blur-md text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-[#FFC843]/50">
              <MessageCircle size={22} />
              <span>Chat with Sakhi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidanceCTA;

// import React from "react";
// import { BadgeCheck, Mic, MessageCircle } from "lucide-react";

// const GuidanceCTA = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-20">
//       <div className="relative bg-linear-to-br from-pink-500 via-purple-500 to-rose-500 rounded-[60px] p-16 text-center overflow-hidden shadow-2xl">
//         {/* Background Decoration */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
//         </div>

//         {/* Foreground Content */}
//         <div className="relative z-10">
//           <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
//             <BadgeCheck className="text-white animate-pulse" size={48} />
//           </div>

//           <h2 className="text-5xl font-bold text-white mb-6">
//             Your Success Journey Starts Here
//           </h2>

//           <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
//             Join 50,000+ women who transformed their lives with Prerna's
//             guidance
//           </p>

//           <div className="flex justify-center gap-6 flex-wrap">
//             <button className="bg-white text-pink-600 font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
//               <Mic size={22} /> Start with Your Voice
//             </button>

//             <button className="bg-white/20 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
//               <MessageCircle size={22} />
//               <span>Chat with Sakhi</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GuidanceCTA;