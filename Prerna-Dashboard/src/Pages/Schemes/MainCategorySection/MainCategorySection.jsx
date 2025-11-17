import React from "react";
import MainCategoryCard from "./MainCategoryCard";
import { Award, Briefcase, ChevronRight, Droplet, GraduationCap, Heart, ShieldCheck, Star } from "lucide-react";

export default function MainCategorySection() {

  const mainCategories = [
    {
      id: 'education',
      icon: <GraduationCap size={40} className="text-white" />,
      title: "Education & Scholarships",
      description: "From primary to higher education - scholarships, fellowships, and learning programs for every age",
      linear: "from-purple-500 via-purple-600 to-indigo-600",
      schemes: [
        { name: "Beti Bachao Beti Padhao", age: "0-18 years" },
        { name: "Post Matric Scholarship", age: "18+ years" },
        { name: "National Fellowship", age: "25+ years" },
        { name: "Merit cum Means Scholarship", age: "School-College" }
      ],
      features: ["Age-based filtering", "Application guidance", "Document checklist", "Deadline alerts"]
    },
    {
      id: 'health',
      icon: <Heart size={40} className="text-white" />,
      title: "Health & Wellness",
      description: "Maternal health, vaccination schedules, menstrual hygiene, nutrition programs and medical support",
      linear: "from-pink-500 via-rose-500 to-pink-600",
      schemes: [
        { name: "Pradhan Mantri Matru Vandana Yojana", age: "Pregnant women" },
        { name: "Janani Suraksha Yojana", age: "Maternal care" },
        { name: "Vaccination Programs", age: "All ages" },
        { name: "Free Health Check-ups", age: "Women 30+" }
      ],
      features: ["Vaccination tracker", "Period calendar", "Health tips", "Hospital locator"]
    },
    {
      id: 'menstrual',
      icon: <Droplet size={40} className="text-white" />,
      title: "Menstrual Health & Hygiene",
      description: "Comprehensive guidance on menstrual health, hygiene products, myths vs facts, and support resources",
      linear: "from-rose-500 via-pink-500 to-rose-600",
      schemes: [
        { name: "Free Sanitary Napkin Schemes", age: "13-50 years" },
        { name: "Menstrual Hygiene Awareness", age: "Schools & Communities" },
        { name: "PCOS/PCOD Support Programs", age: "Women 18-40" },
        { name: "Reproductive Health Education", age: "Adolescents" }
      ],
      features: ["Period tracker", "Myth busters", "Product guidance", "Pain management tips"]
    },
    {
      id: 'safety',
      icon: <ShieldCheck size={40} className="text-white" />,
      title: "Safety & Legal Support",
      description: "24/7 helplines, legal aid, protection schemes, and immediate support for women in distress",
      linear: "from-indigo-500 via-purple-500 to-pink-500",
      schemes: [
        { name: "One Stop Centre", age: "All women" },
        { name: "Women Helpline 181", age: "Emergency support" },
        { name: "Nirbhaya Fund Programs", age: "Safety initiatives" },
        { name: "Legal Aid Services", age: "Free legal help" }
      ],
      features: ["SOS alert", "Helpline numbers", "Legal guidance", "Safety tips"]
    },
    {
      id: 'employment',
      icon: <Briefcase size={40} className="text-white" />,
      title: "Employment & Entrepreneurship",
      description: "Job opportunities, skill training, business loans, and career advancement programs",
      linear: "from-purple-500 via-indigo-500 to-purple-600",
      schemes: [
        { name: "Mahila Shakti Kendra", age: "Women 18-60" },
        { name: "Stand-Up India", age: "Entrepreneurs" },
        { name: "Mudra Yojana", age: "Business loans" },
        { name: "Skill India Digital", age: "All ages" }
      ],
      features: ["Job portal", "Skill courses", "Loan calculator", "Mentor connect"]
    },
    {
      id: 'sports',
      icon: <Award size={40} className="text-white" />,
      title: "Sports & Fitness",
      description: "Sports scholarships, training programs, competition opportunities, and fitness guidance",
      linear: "from-pink-500 via-rose-500 to-purple-500",
      schemes: [
        { name: "Khelo India Programme", age: "8-25 years" },
        { name: "Sports Scholarship for Girls", age: "School-College" },
        { name: "State-level Training", age: "All ages" },
        { name: "Women's Sports Academy", age: "Professional training" }
      ],
      features: ["Training centers", "Competition calendar", "Scholarship info", "Fitness plans"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Main Categories Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4">
            Complete Support Categories
          </h2>
          <p className="text-gray-600 text-xl">
            Everything you need - from education to employment, health to safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCategories.map((category, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Gradient Header */}
              <div className={`bg-linear-to-br ${category.linear} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>
                
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">{category.title}</h3>
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
                    <div key={sIdx} className="p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group/item border border-pink-100">
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-gray-800 text-sm font-bold">{scheme.name}</span>
                        <ChevronRight className="text-gray-400 group-hover/item:text-purple-600 group-hover/item:translate-x-1 transition-all duration-300 shrink-0" size={18} />
                      </div>
                      <span className="text-xs text-purple-600 font-medium">{scheme.age}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100">
                  <p className="text-xs font-semibold text-purple-700 mb-2">✨ Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-1">
                        <Star className="text-pink-500" size={12} />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View All Button */}
                <button className={`w-full bg-linear-to-r ${category.linear} text-white py-3 px-6 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
                  <span>Explore {category.title.split('&')[0]}</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
