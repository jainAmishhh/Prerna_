import React from "react";
import { GraduationCap, Heart, ChevronRight, Star, Sparkles, Award, Briefcase, Droplet, ShieldCheck } from "lucide-react";

export default function MainCategoryCard({ category }) {

  const iconMap = {
    graduation: <GraduationCap size={40} className="text-white" />,
    heart: <Heart size={40} className="text-white" />,
    droplet: <Droplet size={40} className="text-white" />,
    shield: <ShieldCheck size={40} className="text-white" />,
    briefcase: <Briefcase size={40} className="text-white" />,
    award: <Award size={40} className="text-white" />,
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-2 border-pink-100">
      
      {/* Illustrated Background Header */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-pink-100 to-purple-100">
        <img 
          src={category.bgImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"} 
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-60"
        />
        <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-85`}></div>
        
        {/* Decorative Illustrations */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Floating Elements with Women Empowerment Theme */}
        <div className="absolute top-6 right-8">
          <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="absolute bottom-10 right-16">
          <div className="w-4 h-4 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="absolute top-14 left-10">
          <div className="w-2 h-2 bg-white rounded-full opacity-70 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' /%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Icon and Title */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
          <div className="bg-white/25 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl ring-2 ring-white/30">
            {iconMap[category.icon] || <Heart size={40} className="text-white" />}
          </div>
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">{category.title}</h3>
          <div className="mt-3 flex gap-2">
            <div className="w-12 h-1 bg-white/60 rounded-full"></div>
            <div className="w-8 h-1 bg-white/40 rounded-full"></div>
            <div className="w-4 h-1 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {category.description}
        </p>

        {/* Scheme List */}
        <div className="space-y-3 mb-6">
          {category.schemes.map((scheme, sIdx) => (
            <div key={sIdx} className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-200 hover:border-purple-300 hover:shadow-md transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-1">
                <span className="text-gray-800 text-sm font-bold flex-1">{scheme.name}</span>
                <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 shrink-0 ml-2" size={18} />
              </div>
              <span className="text-xs text-purple-600 font-medium bg-white px-2 py-1 rounded-full inline-block shadow-sm">
                {scheme.age}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-linear-to-r from-purple-50 via-pink-50 to-rose-50 rounded-xl p-4 mb-4 border-2 border-purple-200 hover:border-purple-300 transition-colors duration-300">
          <p className="text-xs font-semibold text-purple-700 mb-3 flex items-center gap-2">
            <Sparkles size={14} className="text-pink-500" />
            Features:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {category.features.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-center space-x-1 group/feature">
                <Star className="text-pink-500 fill-pink-200 group-hover/feature:scale-125 transition-transform duration-200" size={12} />
                <span className="text-xs text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 transform relative overflow-hidden`}>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <span className="relative z-10">Explore {category.title.split('&')[0]}</span>
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
        </button>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl flex items-center justify-center">
        <Sparkles className="text-white animate-pulse" size={20} />
      </div>

      {/* Bottom Accent Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${category.linear} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </div>
  );
}

// import React from "react";
// import { GraduationCap, Heart, ChevronRight, Star, Sparkles, Award, Briefcase, Droplet, ShieldCheck } from "lucide-react";

// export default function MainCategoryCard({ category }) {

//   const iconMap = {
//     graduation: <GraduationCap size={40} className="text-white" />,
//     heart: <Heart size={40} className="text-white" />,
//     droplet: <Droplet size={40} className="text-white" />,
//     shield: <ShieldCheck size={40} className="text-white" />,
//     briefcase: <Briefcase size={40} className="text-white" />,
//     award: <Award size={40} className="text-white" />,
//   };

//   return (
//     <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-2 border-pink-100">
      
//       {/* Background Image Header with Overlay */}
//       <div className="relative h-48 overflow-hidden">
//         <img 
//           src={category.bgImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"} 
//           alt={category.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//         />
//         <div className={`absolute inset-0 bg-linear-to-br ${category.linear} opacity-90`}></div>
        
//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
//         <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        
//         {/* Floating Particles */}
//         <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
//         <div className="absolute bottom-8 right-16 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
//         <div className="absolute top-12 left-12 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
        
//         {/* Icon and Title */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
//           <div className="bg-white/25 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl ring-2 ring-white/30">
//             {iconMap[category.icon] || <Heart size={40} className="text-white" />}
//           </div>
//           <h3 className="text-white text-2xl font-bold drop-shadow-lg">{category.title}</h3>
//           <div className="mt-2 flex gap-2">
//             <div className="w-12 h-1 bg-white/60 rounded-full"></div>
//             <div className="w-8 h-1 bg-white/40 rounded-full"></div>
//             <div className="w-4 h-1 bg-white/20 rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <p className="text-gray-600 text-base leading-relaxed mb-6">
//           {category.description}
//         </p>

//         {/* Scheme List */}
//         <div className="space-y-3 mb-6">
//           {category.schemes.map((scheme, sIdx) => (
//             <div key={sIdx} className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-200 hover:border-purple-300 hover:shadow-md transform hover:-translate-y-1">
//               <div className="flex items-start justify-between mb-1">
//                 <span className="text-gray-800 text-sm font-bold flex-1">{scheme.name}</span>
//                 <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 shrink-0 ml-2" size={18} />
//               </div>
//               <span className="text-xs text-purple-600 font-medium bg-white px-2 py-1 rounded-full inline-block shadow-sm">
//                 {scheme.age}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="bg-linear-to-r from-purple-50 via-pink-50 to-rose-50 rounded-xl p-4 mb-4 border-2 border-purple-200 hover:border-purple-300 transition-colors duration-300">
//           <p className="text-xs font-semibold text-purple-700 mb-3 flex items-center gap-2">
//             <Sparkles size={14} className="text-pink-500" />
//             Features:
//           </p>
//           <div className="grid grid-cols-2 gap-2">
//             {category.features.map((feature, fIdx) => (
//               <div key={fIdx} className="flex items-center space-x-1 group/feature">
//                 <Star className="text-pink-500 fill-pink-200 group-hover/feature:scale-125 transition-transform duration-200" size={12} />
//                 <span className="text-xs text-gray-700 font-medium">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* View All Button */}
//         <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 transform relative overflow-hidden`}>
//           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//           <span className="relative z-10">Explore {category.title.split('&')[0]}</span>
//           <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
//         </button>
//       </div>

//       {/* Corner Decoration */}
//       <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl flex items-center justify-center">
//         <Sparkles className="text-white animate-pulse" size={20} />
//       </div>

//       {/* Bottom Accent Line */}
//       <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${category.linear} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
//     </div>
//   );
// }

// import React from "react";
// import { GraduationCap, Heart, ChevronRight, Star } from "lucide-react";

// export default function MainCategoryCard({ category }) {

//   const icons = {
//     graduation: <GraduationCap size={40} className="text-white" />,
//     heart: <Heart size={40} className="text-white" />,
//   };

//   return (
//     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">

//       <div className={`bg-linear-to-br ${category.linear} p-8 relative`}>
//         <div className="relative z-10">
//           <div className="bg-white/20 backdrop-blur p-5 rounded-2xl mb-4">
//             {icons[category.icon]}
//           </div>
//           <h3 className="text-white text-2xl font-bold">{category.title}</h3>
//         </div>
//       </div>

//       <div className="p-6">
//         <p className="text-gray-600 mb-6">{category.description}</p>

//         <div className="space-y-3 mb-6">
//           {category.schemes.map((s, i) => (
//             <div key={i} className="p-4 bg-purple-50 rounded-xl border border-pink-100 flex justify-between items-center">
//               <span className="font-semibold">{s.name}</span>
//               <ChevronRight size={18} className="text-purple-600" />
//             </div>
//           ))}
//         </div>

//         <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-100">
//           <p className="text-xs font-semibold text-purple-700 mb-2">✨ Features:</p>
//           <div className="grid grid-cols-2 gap-2">
//             {category.features.map((f, i) => (
//               <div key={i} className="flex items-center space-x-1">
//                 <Star size={12} className="text-pink-500" />
//                 <span className="text-xs">{f}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 rounded-full font-semibold flex justify-center items-center`}>
//           Explore {category.title.split("&")[0]}
//           <ChevronRight size={18} className="ml-2" />
//         </button>
//       </div>

//     </div>
//   );
// }
