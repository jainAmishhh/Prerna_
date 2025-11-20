import React from "react";
import {
  Award,
  Briefcase,
  ChevronRight,
  Droplet,
  GraduationCap,
  Heart,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";

export default function MainCategorySection() {
  const mainCategories = [
    {
      id: "education",
      icon: <GraduationCap size={40} className="text-white" />,
      title: "Education & Scholarships",
      description:
        "From primary to higher education - scholarships, fellowships, and learning programs for every age",
      linear: "from-purple-500 via-purple-600 to-indigo-600",
      bgImage:
        "https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?q=80&w=800&auto=format&fit=crop",
      schemes: [
        { name: "Beti Bachao Beti Padhao", age: "0-18 years" },
        { name: "Post Matric Scholarship", age: "18+ years" },
        { name: "National Fellowship", age: "25+ years" },
        { name: "Merit cum Means Scholarship", age: "School-College" },
      ],
      features: [
        "Age-based filtering",
        "Application guidance",
        "Document checklist",
        "Deadline alerts",
      ],
    },
    {
      id: "health",
      icon: <Heart size={40} className="text-white" />,
      title: "Health & Wellness",
      description:
        "Maternal health, vaccination schedules, menstrual hygiene, nutrition programs and medical support",
      linear: "from-pink-500 via-rose-500 to-pink-600",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1666299679745-2190f8f94352?q=80&w=800",
      schemes: [
        { name: "Pradhan Mantri Matru Vandana Yojana", age: "Pregnant women" },
        { name: "Janani Suraksha Yojana", age: "Maternal care" },
        { name: "Vaccination Programs", age: "All ages" },
        { name: "Free Health Check-ups", age: "Women 30+" },
      ],
      features: [
        "Vaccination tracker",
        "Period calendar",
        "Health tips",
        "Hospital locator",
      ],
    },
    {
      id: "menstrual",
      icon: <Droplet size={40} className="text-white" />,
      title: "Menstrual Health & Hygiene",
      description:
        "Comprehensive guidance on menstrual health, hygiene products, myths vs facts, and support resources",
      linear: "from-rose-500 via-pink-500 to-rose-600",
      bgImage:
        "https://images.unsplash.com/photo-1589395937921-fddc324ccdd2?q=80&w=800&auto=format&fit=crop",
      schemes: [
        { name: "Free Sanitary Napkin Schemes", age: "13-50 years" },
        { name: "Menstrual Hygiene Awareness", age: "Schools & Communities" },
        { name: "PCOS/PCOD Support Programs", age: "Women 18-40" },
        { name: "Reproductive Health Education", age: "Adolescents" },
      ],
      features: [
        "Period tracker",
        "Myth busters",
        "Product guidance",
        "Pain management tips",
      ],
    },
    {
      id: "safety",
      icon: <ShieldCheck size={40} className="text-white" />,
      title: "Safety & Legal Support",
      description:
        "24/7 helplines, legal aid, protection schemes, and immediate support for women in distress",
      linear: "from-indigo-500 via-purple-500 to-pink-500",
      bgImage:
        "https://images.unsplash.com/photo-1609601242635-5c9678e15f20?q=80&w=800",
      schemes: [
        { name: "One Stop Centre", age: "All women" },
        { name: "Women Helpline 181", age: "Emergency support" },
        { name: "Nirbhaya Fund Programs", age: "Safety initiatives" },
        { name: "Legal Aid Services", age: "Free legal help" },
      ],
      features: [
        "SOS alert",
        "Helpline numbers",
        "Legal guidance",
        "Safety tips",
      ],
    },
    {
      id: "employment",
      icon: <Briefcase size={40} className="text-white" />,
      title: "Employment & Entrepreneurship",
      description:
        "Job opportunities, skill training, business loans, and career advancement programs",
      linear: "from-purple-500 via-indigo-500 to-purple-600",
      bgImage:
        "https://images.unsplash.com/photo-1684259499086-93cb3e555803?q=80&w=800",
      schemes: [
        { name: "Mahila Shakti Kendra", age: "Women 18-60" },
        { name: "Stand-Up India", age: "Entrepreneurs" },
        { name: "Mudra Yojana", age: "Business loans" },
        { name: "Skill India Digital", age: "All ages" },
      ],
      features: [
        "Job portal",
        "Skill courses",
        "Loan calculator",
        "Mentor connect",
      ],
    },
    {
      id: "sports",
      icon: <Award size={40} className="text-white" />,
      title: "Sports & Fitness",
      description:
        "Sports scholarships, training programs, competition opportunities, and fitness guidance",
      linear: "from-pink-500 via-rose-500 to-purple-500",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1668612845709-b1e5fd3629bb?q=80&w=800",
      schemes: [
        { name: "Khelo India Programme", age: "8-25 years" },
        { name: "Sports Scholarship for Girls", age: "School-College" },
        { name: "State-level Training", age: "All ages" },
        { name: "Women's Sports Academy", age: "Professional training" },
      ],
      features: [
        "Training centers",
        "Competition calendar",
        "Scholarship info",
        "Fitness plans",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFC843] to-[#D9534F] mb-6 leading-tight">
            Complete Support Categories
          </h2>

          <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Everything you need - from education to employment, health to safety
            <br />
            <span className="text-[#ffc813] font-semibold inline-flex items-center gap-2 mt-2">
              Your journey, our support
            </span>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-2 border-pink-100"
            >
              {/* Illustrated Background Header */}
              <div className="relative h-48 overflow-hidden bg-linear-to-br from-pink-100 to-purple-100">
                <img
                  src={category.bgImage}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 "
                />
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.linear} opacity-60`}
                ></div>

                {/* Decorative Illustrations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-8">
                  <div className="w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                </div>
                <div className="absolute bottom-10 right-16">
                  <div
                    className="w-4 h-4 bg-white rounded-full opacity-40 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="absolute top-14 left-10">
                  <div
                    className="w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>

                {/* Icon and Title */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                  <div className="bg-white/25 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl ring-2 ring-white/30">
                    {category.icon}
                  </div>
                  <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                    {category.title}
                  </h3>
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
                    <div
                      key={sIdx}
                      className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-200 hover:border-purple-300 hover:shadow-md transform hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-gray-800 text-sm font-bold flex-1">
                          {scheme.name}
                        </span>
                        <ChevronRight
                          className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 shrink-0 ml-2"
                          size={18}
                        />
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
                      <div
                        key={fIdx}
                        className="flex items-center space-x-1 group/feature"
                      >
                        <Star
                          className="text-pink-500 fill-pink-200 group-hover/feature:scale-125 transition-transform duration-200"
                          size={12}
                        />
                        <span className="text-xs text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View All Button */}
                <button
                  className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 transform relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    Explore {category.title.split("&")[0]}
                  </span>
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                  />
                </button>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl flex items-center justify-center">
                <Sparkles className="text-white animate-pulse" size={20} />
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${category.linear} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="bg-linear-to-r from-pink-100 to-purple-100 rounded-full p-4">
                <Heart className="text-pink-500" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-2">
              Need Help Finding the Right Scheme?
            </h3>
            <p className="text-gray-600 mb-4">
              Our AI assistant is here to guide you every step of the way
            </p>
            <button className="bg-linear-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <span>Talk to Our Assistant</span>
              <span>💬</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Award, Briefcase, ChevronRight, Droplet, GraduationCap, Heart, ShieldCheck, Star, Sparkles } from "lucide-react";

// export default function MainCategorySection() {

//   const mainCategories = [
//     {
//       id: 'education',
//       icon: <GraduationCap size={40} className="text-white" />,
//       title: "Education & Scholarships",
//       description: "From primary to higher education - scholarships, fellowships, and learning programs for every age",
//       linear: "from-purple-500 via-purple-600 to-indigo-600",
//       bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
//       schemes: [
//         { name: "Beti Bachao Beti Padhao", age: "0-18 years" },
//         { name: "Post Matric Scholarship", age: "18+ years" },
//         { name: "National Fellowship", age: "25+ years" },
//         { name: "Merit cum Means Scholarship", age: "School-College" }
//       ],
//       features: ["Age-based filtering", "Application guidance", "Document checklist", "Deadline alerts"]
//     },
//     {
//       id: 'health',
//       icon: <Heart size={40} className="text-white" />,
//       title: "Health & Wellness",
//       description: "Maternal health, vaccination schedules, menstrual hygiene, nutrition programs and medical support",
//       linear: "from-pink-500 via-rose-500 to-pink-600",
//       bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
//       schemes: [
//         { name: "Pradhan Mantri Matru Vandana Yojana", age: "Pregnant women" },
//         { name: "Janani Suraksha Yojana", age: "Maternal care" },
//         { name: "Vaccination Programs", age: "All ages" },
//         { name: "Free Health Check-ups", age: "Women 30+" }
//       ],
//       features: ["Vaccination tracker", "Period calendar", "Health tips", "Hospital locator"]
//     },
//     {
//       id: 'menstrual',
//       icon: <Droplet size={40} className="text-white" />,
//       title: "Menstrual Health & Hygiene",
//       description: "Comprehensive guidance on menstrual health, hygiene products, myths vs facts, and support resources",
//       linear: "from-rose-500 via-pink-500 to-rose-600",
//       bgImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
//       schemes: [
//         { name: "Free Sanitary Napkin Schemes", age: "13-50 years" },
//         { name: "Menstrual Hygiene Awareness", age: "Schools & Communities" },
//         { name: "PCOS/PCOD Support Programs", age: "Women 18-40" },
//         { name: "Reproductive Health Education", age: "Adolescents" }
//       ],
//       features: ["Period tracker", "Myth busters", "Product guidance", "Pain management tips"]
//     },
//     {
//       id: 'safety',
//       icon: <ShieldCheck size={40} className="text-white" />,
//       title: "Safety & Legal Support",
//       description: "24/7 helplines, legal aid, protection schemes, and immediate support for women in distress",
//       linear: "from-indigo-500 via-purple-500 to-pink-500",
//       bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
//       schemes: [
//         { name: "One Stop Centre", age: "All women" },
//         { name: "Women Helpline 181", age: "Emergency support" },
//         { name: "Nirbhaya Fund Programs", age: "Safety initiatives" },
//         { name: "Legal Aid Services", age: "Free legal help" }
//       ],
//       features: ["SOS alert", "Helpline numbers", "Legal guidance", "Safety tips"]
//     },
//     {
//       id: 'employment',
//       icon: <Briefcase size={40} className="text-white" />,
//       title: "Employment & Entrepreneurship",
//       description: "Job opportunities, skill training, business loans, and career advancement programs",
//       linear: "from-purple-500 via-indigo-500 to-purple-600",
//       bgImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800",
//       schemes: [
//         { name: "Mahila Shakti Kendra", age: "Women 18-60" },
//         { name: "Stand-Up India", age: "Entrepreneurs" },
//         { name: "Mudra Yojana", age: "Business loans" },
//         { name: "Skill India Digital", age: "All ages" }
//       ],
//       features: ["Job portal", "Skill courses", "Loan calculator", "Mentor connect"]
//     },
//     {
//       id: 'sports',
//       icon: <Award size={40} className="text-white" />,
//       title: "Sports & Fitness",
//       description: "Sports scholarships, training programs, competition opportunities, and fitness guidance",
//       linear: "from-pink-500 via-rose-500 to-purple-500",
//       bgImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
//       schemes: [
//         { name: "Khelo India Programme", age: "8-25 years" },
//         { name: "Sports Scholarship for Girls", age: "School-College" },
//         { name: "State-level Training", age: "All ages" },
//         { name: "Women's Sports Academy", age: "Professional training" }
//       ],
//       features: ["Training centers", "Competition calendar", "Scholarship info", "Fitness plans"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
//       <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>

//       <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
//         {/* Hero Header */}
//         <div className="text-center mb-16 relative">
//           <div className="inline-block mb-4">
//             <span className="bg-linear-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
//               🌸 Empowering Women Across India 🌸
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-purple-600 to-rose-600 mb-6 leading-tight">
//             Complete Support Categories
//           </h2>
//           <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
//             Everything you need - from education to employment, health to safety
//             <br />
//             <span className="text-pink-600 font-semibold">Your journey, our support 💜</span>
//           </p>
//           <div className="flex justify-center gap-4 mt-8">
//             <Sparkles className="text-pink-500 animate-bounce" size={24} />
//             <Sparkles className="text-purple-500 animate-bounce animation-delay-1000" size={24} />
//             <Sparkles className="text-rose-500 animate-bounce animation-delay-2000" size={24} />
//           </div>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mainCategories.map((category, idx) => (
//             <div key={idx} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-2 border-pink-100">

//               {/* Background Image Header with Overlay */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={category.bgImage}
//                   alt={category.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className={`absolute inset-0 bg-linear-to-br ${category.linear} opacity-90`}></div>

//                 {/* Decorative Elements */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

//                 {/* Icon and Title */}
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
//                   <div className="bg-white/25 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-xl">
//                     {category.icon}
//                   </div>
//                   <h3 className="text-white text-2xl font-bold drop-shadow-lg">{category.title}</h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   {category.description}
//                 </p>

//                 {/* Scheme List */}
//                 <div className="space-y-3 mb-6">
//                   {category.schemes.map((scheme, sIdx) => (
//                     <div key={sIdx} className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-200 hover:border-purple-300 hover:shadow-md">
//                       <div className="flex items-start justify-between mb-1">
//                         <span className="text-gray-800 text-sm font-bold flex-1">{scheme.name}</span>
//                         <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 shrink-0 ml-2" size={18} />
//                       </div>
//                       <span className="text-xs text-purple-600 font-medium bg-white px-2 py-1 rounded-full inline-block">{scheme.age}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Features */}
//                 <div className="bg-linear-to-r from-purple-50 via-pink-50 to-rose-50 rounded-xl p-4 mb-4 border-2 border-purple-200">
//                   <p className="text-xs font-semibold text-purple-700 mb-3 flex items-center gap-2">
//                     <Sparkles size={14} className="text-pink-500" />
//                     Features:
//                   </p>
//                   <div className="grid grid-cols-2 gap-2">
//                     {category.features.map((feature, fIdx) => (
//                       <div key={fIdx} className="flex items-center space-x-1">
//                         <Star className="text-pink-500 fill-pink-200" size={12} />
//                         <span className="text-xs text-gray-700 font-medium">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* View All Button */}
//                 <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105 transform`}>
//                   <span>Explore {category.title.split('&')[0]}</span>
//                   <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>

//               {/* Corner Decoration */}
//               <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl flex items-center justify-center">
//                 <Sparkles className="text-white" size={20} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200">
//             <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-2">
//               Need Help Finding the Right Scheme?
//             </h3>
//             <p className="text-gray-600 mb-4">Our AI assistant is here to guide you every step of the way</p>
//             <button className="bg-linear-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//               Talk to Our Assistant 💬
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import MainCategoryCard from "./MainCategoryCard";
// import { Award, Briefcase, ChevronRight, Droplet, GraduationCap, Heart, ShieldCheck, Star } from "lucide-react";

// export default function MainCategorySection() {

//   const mainCategories = [
//     {
//       id: 'education',
//       icon: <GraduationCap size={40} className="text-white" />,
//       title: "Education & Scholarships",
//       description: "From primary to higher education - scholarships, fellowships, and learning programs for every age",
//       linear: "from-purple-500 via-purple-600 to-indigo-600",
//       schemes: [
//         { name: "Beti Bachao Beti Padhao", age: "0-18 years" },
//         { name: "Post Matric Scholarship", age: "18+ years" },
//         { name: "National Fellowship", age: "25+ years" },
//         { name: "Merit cum Means Scholarship", age: "School-College" }
//       ],
//       features: ["Age-based filtering", "Application guidance", "Document checklist", "Deadline alerts"]
//     },
//     {
//       id: 'health',
//       icon: <Heart size={40} className="text-white" />,
//       title: "Health & Wellness",
//       description: "Maternal health, vaccination schedules, menstrual hygiene, nutrition programs and medical support",
//       linear: "from-pink-500 via-rose-500 to-pink-600",
//       schemes: [
//         { name: "Pradhan Mantri Matru Vandana Yojana", age: "Pregnant women" },
//         { name: "Janani Suraksha Yojana", age: "Maternal care" },
//         { name: "Vaccination Programs", age: "All ages" },
//         { name: "Free Health Check-ups", age: "Women 30+" }
//       ],
//       features: ["Vaccination tracker", "Period calendar", "Health tips", "Hospital locator"]
//     },
//     {
//       id: 'menstrual',
//       icon: <Droplet size={40} className="text-white" />,
//       title: "Menstrual Health & Hygiene",
//       description: "Comprehensive guidance on menstrual health, hygiene products, myths vs facts, and support resources",
//       linear: "from-rose-500 via-pink-500 to-rose-600",
//       schemes: [
//         { name: "Free Sanitary Napkin Schemes", age: "13-50 years" },
//         { name: "Menstrual Hygiene Awareness", age: "Schools & Communities" },
//         { name: "PCOS/PCOD Support Programs", age: "Women 18-40" },
//         { name: "Reproductive Health Education", age: "Adolescents" }
//       ],
//       features: ["Period tracker", "Myth busters", "Product guidance", "Pain management tips"]
//     },
//     {
//       id: 'safety',
//       icon: <ShieldCheck size={40} className="text-white" />,
//       title: "Safety & Legal Support",
//       description: "24/7 helplines, legal aid, protection schemes, and immediate support for women in distress",
//       linear: "from-indigo-500 via-purple-500 to-pink-500",
//       schemes: [
//         { name: "One Stop Centre", age: "All women" },
//         { name: "Women Helpline 181", age: "Emergency support" },
//         { name: "Nirbhaya Fund Programs", age: "Safety initiatives" },
//         { name: "Legal Aid Services", age: "Free legal help" }
//       ],
//       features: ["SOS alert", "Helpline numbers", "Legal guidance", "Safety tips"]
//     },
//     {
//       id: 'employment',
//       icon: <Briefcase size={40} className="text-white" />,
//       title: "Employment & Entrepreneurship",
//       description: "Job opportunities, skill training, business loans, and career advancement programs",
//       linear: "from-purple-500 via-indigo-500 to-purple-600",
//       schemes: [
//         { name: "Mahila Shakti Kendra", age: "Women 18-60" },
//         { name: "Stand-Up India", age: "Entrepreneurs" },
//         { name: "Mudra Yojana", age: "Business loans" },
//         { name: "Skill India Digital", age: "All ages" }
//       ],
//       features: ["Job portal", "Skill courses", "Loan calculator", "Mentor connect"]
//     },
//     {
//       id: 'sports',
//       icon: <Award size={40} className="text-white" />,
//       title: "Sports & Fitness",
//       description: "Sports scholarships, training programs, competition opportunities, and fitness guidance",
//       linear: "from-pink-500 via-rose-500 to-purple-500",
//       schemes: [
//         { name: "Khelo India Programme", age: "8-25 years" },
//         { name: "Sports Scholarship for Girls", age: "School-College" },
//         { name: "State-level Training", age: "All ages" },
//         { name: "Women's Sports Academy", age: "Professional training" }
//       ],
//       features: ["Training centers", "Competition calendar", "Scholarship info", "Fitness plans"]
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16">

//       {/* Main Categories Section */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
//             Complete Support Categories
//           </h2>
//           <p className="text-gray-600 text-xl">
//             Everything you need - from education to employment, health to safety
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mainCategories.map((category, idx) => (
//             <div key={idx} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
//               {/* Gradient Header */}
//               <div className={`bg-linear-to-br ${category.linear} p-8 relative overflow-hidden`}>
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
//                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

//                 <div className="relative z-10">
//                   <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
//                     {category.icon}
//                   </div>
//                   <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   {category.description}
//                 </p>

//                 {/* Scheme List */}
//                 <div className="space-y-3 mb-6">
//                   {category.schemes.map((scheme, sIdx) => (
//                     <div key={sIdx} className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-100">
//                       <div className="flex items-start justify-between mb-1">
//                         <span className="text-gray-800 text-sm font-bold">{scheme.name}</span>
//                         <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 shrink-0" size={18} />
//                       </div>
//                       <span className="text-xs text-purple-600 font-medium">{scheme.age}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Features */}
//                 <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100">
//                   <p className="text-xs font-semibold text-purple-700 mb-2">✨ Features:</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     {category.features.map((feature, fIdx) => (
//                       <div key={fIdx} className="flex items-center space-x-1">
//                         <Star className="text-pink-500" size={12} />
//                         <span className="text-xs text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* View All Button */}
//                 <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
//                   <span>Explore {category.title.split('&')[0]}</span>
//                   <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }
