import React, { useState, useEffect } from "react";
import { Check, Star, ChevronRight, HeartPulse, X, Video, FileText, MessageCircle, MapPin, Search, Target, Sparkles, Phone } from "lucide-react";
import axios from 'axios';

// --- Custom Theme Colors (Self-Contained for clarity) ---
const COLORS = {
  PRIMARY_ACCENT: '#D9534F',      // Bright Coral/Red
  SECONDARY_ACCENT: '#FFC843',    // Sunny Yellow
  TERTIARY_ACCENT: '#CD4628',     // Deep Burnt Orange
  SOFT_ACCENT: '#F9E8EC',        // Subtle Pink
  NEUTRAL_BASE: '#FBFBFB',       // Creamy White
  DARK_TEXT: '#333333'           // Dark Text/Primary Text
};

const GRADIENTS = {
  mental: "from-indigo-500 to-purple-500",
  yoga: "from-green-500 to-teal-500",
  meditation: "from-green-500 to-teal-500",
  nutrition: "from-orange-500 to-yellow-500",
  fitness: "from-red-500 to-rose-500",
  sports: "from-red-500 to-rose-500",
  hygiene: "from-blue-500 to-cyan-500",
  women: "from-pink-500 to-rose-500",
  default: "from-pink-500 to-rose-500",
};


// --- Color Utility based on Interest Area ---
const getColorClass = (interest = "") => {
  const key = interest.toLowerCase();

  for (const gradientKey in GRADIENTS) {
    if (key.includes(gradientKey)) {
      return GRADIENTS[gradientKey];
    }
  }
  return GRADIENTS.default;
};


const CategoriesSection = () => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [detailData, setDetailData] = useState(null); // Stores data for the modal

  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchHealthPrograms = async () => {
      try {
        // *** IMPORTANT: The path below MUST match your MongoDB API endpoint ***
        const response = await axios.get("http://localhost:5000/api/health-programs"); 
        
        // --- FIX IMPLEMENTED: Accessing data robustly ---
        // Try to find the array in common places (response.data or response.data.data)
        let programsArray = response.data; 
        if (response.data && Array.isArray(response.data.data)) {
            programsArray = response.data.data;
        } else if (!Array.isArray(programsArray)) {
             // If neither is an array, throw error.
             throw new Error("API response is not a valid array.");
        }
        
        // Add dynamic properties (color + fallback image)
        const updatedPrograms = programsArray.map((item) => ({
          ...item,
          // Ensure mandatory fields are present and safe conversion for age
          title: item.title || "No Title",
          description: item.description || "No description provided.",
          feature_text: item.feature_text || "Top features not listed.",
          age_min: parseInt(item.age_min) || 0, // Ensure age is a number
          age_max: parseInt(item.age_max) || 99, // Ensure age is a number
          region: item.region || "India",
          score: item.score || 50,
          link: item.link || "#",
          
          color: getColorClass(item.interest || item.type),
          image_url:
            item.image_url ||
            `https://placehold.co/600x400/${COLORS.PRIMARY_ACCENT.substring(
              1
            )}/FFFFFF?text=Prerna+Health`,
        }));

        setPrograms(updatedPrograms);
        setError(null);
      } catch (err) {
        console.error("Error fetching health programs:", err);
        setError(
          "डेटा फ़ैच करने में असफ़लता (Data fetch failed). कृपया अपना API endpoint जांचें।" // Check your API endpoint
        );
        setPrograms([]); // Clear programs on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealthPrograms();
  }, []);

  // --- Search and Filtering Logic ---
  const filteredPrograms = programs.filter(
    (prog) =>
      prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.interest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Detail View Handlers ---
  const handleCardClick = (program) => {
    setDetailData(program);
  };

  const closeDetailView = () => {
    setDetailData(null);
  };

  const renderDetailView = () => {
    if (!detailData) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={closeDetailView}
      >
        <div
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 shadow-2xl relative animate-slideUpFromBottom"
          style={{ backgroundColor: COLORS.NEUTRAL_BASE }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeDetailView}
            className="absolute top-4 right-4 p-3 rounded-full text-white shadow-lg"
            style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}
          >
            <X size={24} />
          </button>

          <div className="text-center mb-8">
            <h2
              className="text-4xl font-extrabold mb-2"
              style={{ color: COLORS.DARK_TEXT }}
            >
              {detailData.title}
            </h2>
            <p className="text-lg" style={{ color: COLORS.TERTIARY_ACCENT }}>
              {detailData.type ? detailData.type.toUpperCase() : 'PROGRAM'} | Score: {detailData.score}%
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Image and Description */}
            <div>
              <div className="h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={detailData.image_url}
                  alt={detailData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {detailData.description}
              </p>

              <div
                className="p-4 rounded-xl shadow-md"
                style={{
                  backgroundColor: COLORS.SOFT_ACCENT,
                  border: `1px solid ${COLORS.PRIMARY_ACCENT}30`,
                }}
              >
                <h4
                  className="font-bold mb-2 flex items-center"
                  style={{ color: COLORS.PRIMARY_ACCENT }}
                >
                  <Target className="w-4 h-4 mr-2" /> Key Focus
                </h4>
                <p className="text-sm" style={{ color: COLORS.DARK_TEXT }}>
                  {detailData.interest}
                </p>
                <p className="text-sm mt-1" style={{ color: COLORS.DARK_TEXT }}>
                  **Region:** {detailData.region} | **Age:**{" "}
                  {detailData.age_min}-{detailData.age_max}
                </p>
              </div>
            </div>

            {/* Right Column: Key Modules & Action */}
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: COLORS.DARK_TEXT }}
              >
                Program Highlights
              </h3>

              <div className="space-y-4 mb-8">
                <div
                  className="flex items-start p-4 rounded-xl shadow-md"
                  style={{
                    backgroundColor: COLORS.NEUTRAL_BASE,
                    border: `1px solid ${COLORS.SOFT_ACCENT}`,
                  }}
                >
                  <div
                    className="p-3 rounded-lg text-white mr-4"
                    style={{ backgroundColor: COLORS.TERTIARY_ACCENT }}
                  >
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4
                      className="font-bold"
                      style={{ color: COLORS.DARK_TEXT }}
                    >
                      Top Feature
                    </h4>
                    <p className="text-sm text-gray-600">
                      {detailData.feature_text}
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start p-4 rounded-xl shadow-md"
                  style={{
                    backgroundColor: COLORS.NEUTRAL_BASE,
                    border: `1px solid ${COLORS.SOFT_ACCENT}`,
                  }}
                >
                  <div
                    className="p-3 rounded-lg text-white mr-4"
                    style={{ backgroundColor: COLORS.TERTIARY_ACCENT }}
                  >
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4
                      className="font-bold"
                      style={{ color: COLORS.DARK_TEXT }}
                    >
                      Direct Access
                    </h4>
                    <p className="text-sm text-gray-600">
                      Connect with program administrators or counselors.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={detailData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                style={{
                  background: `linear-gradient(to right, ${COLORS.SECONDARY_ACCENT}, ${COLORS.PRIMARY_ACCENT})`,
                  color: COLORS.DARK_TEXT,
                }}
              >
                Visit Official Website
                <ChevronRight
                  className="w-5 h-5"
                  style={{ color: COLORS.DARK_TEXT }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-8 px-6 mt-8"
      style={{ backgroundColor: COLORS.NEUTRAL_BASE }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Badge Section - Updated Colors */}
          <div className="inline-flex items-center bg-gradient-to-r from-[#D9534F] to-[#CD4628] text-white px-6 py-2 rounded-full mb-6 shadow-lg shadow-[#D9534F]/30">
            <HeartPulse size={20} className="animate-pulse fill-white" />
            <span className="font-bold ml-2">360° Wellness Coverage</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            Health Programs & Challenges
          </h2>
          <p className="text-gray-700 text-lg">
            Find government-backed initiatives for Mental Health, Yoga, and
            Nutrition.
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-10 max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search programs by title, description, or interest..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 rounded-full border-2 focus:ring-2 focus:ring-opacity-50 transition-all"
            style={{
              backgroundColor: COLORS.SOFT_ACCENT,
              borderColor: COLORS.PRIMARY_ACCENT + "50",
              color: COLORS.DARK_TEXT,
            }}
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            style={{ color: COLORS.PRIMARY_ACCENT }}
          />
        </div>

        {/* Loading / Error State */}
        {isLoading && (
          <div
            className="text-center p-20 text-xl font-semibold"
            style={{ color: COLORS.DARK_TEXT }}
          >
            <div className="w-8 h-8 border-4 border-t-4 border-t-[#D9534F] border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
            Fetching Health Programs...
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center p-10 rounded-xl bg-red-50 border border-red-300 mx-auto max-w-md">
            <p className="text-red-700 font-semibold">{error}</p>
          </div>
        )}

        {/* Programs Grid */}
        {!isLoading && filteredPrograms.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, i) => (
              <div
                key={program.id || i}
                className="group relative rounded-3xl h-full overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCardClick(program)}
              >
                {/* 1. Background Image with Zoom Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.image_url})` }}
                />

                {/* 2. Gradient Overlay (Uses constant color definitions) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-60 transition-opacity duration-300 group-hover:opacity-70 mix-blend-multiply`}
                />

                {/* 3. Content Container */}
                <div className="relative z-10 p-8 text-white h-full flex flex-col">
                  {/* Icon Box - Updated to Yellow/Coral Accents */}
                  <div className="bg-[#FFC843]/30 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/20">
                    <HeartPulse className="w-12 h-12 fill-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-white/90 mb-6 font-medium text-sm">
                    {program.type ? program.type.toUpperCase() : 'PROGRAM'} | {program.region}
                  </p>

                  {/* Features List - Checkmark color is White/Yellow Accent */}
                  <ul className="space-y-3 mb-8 grow">
                    <li className="flex items-start space-x-3">
                      <div className="bg-[#FFC843] p-1 rounded-full mt-0.5 shrink-0 text-[#D9534F]">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-white/95 line-clamp-2">
                        {program.description}
                      </span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    {/* Highlight - Yellow/Coral Text */}
                    <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-5 border border-white/10">
                      <Star className="w-4 h-4 text-[#FFC843] fill-[#FFC843]" />
                      <span className="text-xs font-bold tracking-wide uppercase">
                        {program.feature_text}
                      </span>
                    </div>

                    {/* Button - White background, Dark Coral Text */}
                    <button
                      onClick={() => handleCardClick(program)}
                      className="w-full bg-white text-[#D9534F] py-4 px-6 rounded-2xl font-bold hover:bg-[#F9E8EC] transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredPrograms.length === 0 && (
          <div
            className="text-center p-16 rounded-3xl shadow-lg"
            style={{ backgroundColor: COLORS.SOFT_ACCENT }}
          >
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: COLORS.TERTIARY_ACCENT }}
            >
              No Programs Match "{searchTerm}"
            </h3>
            <p
              className="text-lg"
              style={{ color: COLORS.DARK_TEXT, opacity: 0.8 }}
            >
              Try broadening your search or check your internet connection!
            </p>
          </div>
        )}
      </div>

      {/* Detail View Modal */}
      {renderDetailView()}
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
