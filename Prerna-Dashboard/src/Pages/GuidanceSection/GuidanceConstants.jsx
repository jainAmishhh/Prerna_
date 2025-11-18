import React from "react";
import {
  Briefcase, FileText, GraduationCap, Landmark, ShieldAlert,
  HeartHandshake, Mic, Video, MessageCircle, Target,
  Award, TrendingUp, Building2, Wallet, BookOpen,
  Phone, Shield, AlertCircle, Scale, Lightbulb, Users, Star,
  Check, Star as StarIcon, Sparkles, Sprout
} from "lucide-react";

// --- THEME COLORS ---
const BRIGHT_CORAL = "D9534F";
const DEEP_ORANGE = "CD4628";
const SUNNY_YELLOW = "FFC843";
const SOFT_PINK = "F9E8EC";

// Main Guidance Categories
export const guidanceCategories = [
  {
    id: "career",
    title: "Career Guidance",
    subtitle: "Find your true calling",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-purple-600 to-indigo-600",
    image: "https://plus.unsplash.com/premium_photo-1693671725924-302f7a2c450b?q=80&w=660&auto=format&fit=crop", // Professional woman
    services: [
      "Career path recommendations",
      "Work-from-home options",
      "Interview preparation",
      "Salary negotiation"
    ],
    aiFeature: "Ask: 'What career suits me?'"
  },
  {
    id: "resume",
    title: "Resume Builder",
    subtitle: "Stand out instantly",
    icon: <FileText className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop", // Woman writing
    services: [
      "AI resume builder (Hindi/Eng)",
      "Cover letter assistance",
      "LinkedIn optimization",
      "Job board access"
    ],
    aiFeature: "Voice: 'Create my resume'"
  },
  {
    id: "skills",
    title: "Skill Training",
    subtitle: "Learn to earn",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    image: "https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500?q=80&w=1344&auto=format&fit=crop", // Woman studying/smiling
    services: [
      "Govt. certified courses",
      "Digital literacy",
      "Vocational training",
      "Entrepreneurship skills"
    ],
    aiFeature: "Find local training centers"
  },
  {
    id: "legal",
    title: "Legal Rights",
    subtitle: "Claim your power",
    icon: <Landmark className="w-8 h-8" />,
    color: "from-zinc-400 to-gray-700",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop", // Legal/Justice abstract or confident woman
    services: [
      "Rights explained simply",
      "Workplace harassment laws",
      "Divorce & property rights",
      "Free legal aid"
    ],
    aiFeature: "Ask: 'What are my rights?'"
  },
  {
    id: "finance",
    title: "Financial Freedom",
    subtitle: "Secure your future",
    icon: <HeartHandshake className="w-8 h-8" />,
    color: "from-purple-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", // Woman handling money/business
    services: [
      "Budgeting strategies",
      "Govt loan schemes",
      "Safe investment tips",
      "Tax filing help"
    ],
    aiFeature: "Plan your savings with AI"
  },
  {
    id: "safety",
    title: "Safety Support",
    subtitle: "You are not alone",
    icon: <ShieldAlert className="w-8 h-8" />,
    color: "from-red-600 to-rose-700",
    image: "https://images.unsplash.com/photo-1563393934034-21b781d905ef?q=80&w=1170&auto=format&fit=crop", // Support group/Holding hands
    services: [
      "24/7 emergency helpline",
      "Safe exit planning",
      "Shelter home locator",
      "Trauma counseling"
    ],
    aiFeature: "One-tap SOS Video Guide"
  }
];
// export const guidanceCategories = [
//   {
//     id: "career",
//     title: "Career Guidance",
//     subtitle: "Find your true calling",
//     icon: <Briefcase className="w-8 h-8" />,
//     // Updated Color: Deep Orange to Yellow
//     color: `from-[#${DEEP_ORANGE}] to-[#${SUNNY_YELLOW}]`,
//     image: "https://plus.unsplash.com/premium_photo-1693671725924-302f7a2c450b?q=80&w=660&auto=format&fit=crop", 
//     services: [
//       "Career path recommendations",
//       "Work-from-home options",
//       "Interview preparation",
//       "Salary negotiation"
//     ],
//     aiFeature: "Ask: 'What career suits me?'"
//   },
//   {
//     id: "resume",
//     title: "Resume Builder",
//     subtitle: "Stand out instantly",
//     icon: <FileText className="w-8 h-8" />,
//     // Updated Color: Yellow to Coral
//     color: `from-[#${SUNNY_YELLOW}] to-[#${BRIGHT_CORAL}]`,
//     image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop", 
//     services: [
//       "AI resume builder (Hindi/Eng)",
//       "Cover letter assistance",
//       "LinkedIn optimization",
//       "Job board access"
//     ],
//     aiFeature: "Voice: 'Create my resume'"
//   },
//   {
//     id: "skills",
//     title: "Skill Training",
//     subtitle: "Learn to earn",
//     icon: <GraduationCap className="w-8 h-8" />,
//     // Updated Color: Coral to Deep Orange
//     color: `from-[#${BRIGHT_CORAL}] to-[#${DEEP_ORANGE}]`,
//     image: "https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500?q=80&w=1344&auto=format&fit=crop", 
//     services: [
//       "Govt. certified courses",
//       "Digital literacy",
//       "Vocational training",
//       "Entrepreneurship skills"
//     ],
//     aiFeature: "Find local training centers"
//   },
//   {
//     id: "legal",
//     title: "Legal Rights",
//     subtitle: "Claim your power",
//     icon: <Landmark className="w-8 h-8" />,
//     // Updated Color: Deep Orange to Deep Burnt Orange (Serious/High Contrast)
//     color: `from-[#${DEEP_ORANGE}] to-[#333333]`,
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop", 
//     services: [
//       "Rights explained simply",
//       "Workplace harassment laws",
//       "Divorce & property rights",
//       "Free legal aid"
//     ],
//     aiFeature: "Ask: 'What are my rights?'"
//   },
//   {
//     id: "finance",
//     title: "Financial Freedom",
//     subtitle: "Secure your future",
//     icon: <HeartHandshake className="w-8 h-8" />,
//     // Updated Color: Soft Pink/Yellow Accent
//     color: `from-[#${BRIGHT_CORAL}] to-[#${SUNNY_YELLOW}]`,
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", 
//     services: [
//       "Budgeting strategies",
//       "Govt loan schemes",
//       "Safe investment tips",
//       "Tax filing help"
//     ],
//     aiFeature: "Plan your savings with AI"
//   },
//   {
//     id: "safety",
//     title: "Safety Support",
//     subtitle: "You are not alone",
//     icon: <ShieldAlert className="w-8 h-8" />,
//     // Updated Color: Red/Coral for urgency
//     color: `from-[#D9534F] to-[#CC0000]`, // Use stark red for true urgency
//     image: "https://images.unsplash.com/photo-1563393934034-21b781d905ef?q=80&w=1170&auto=format&fit=crop", 
//     services: [
//       "24/7 emergency helpline",
//       "Safe exit planning",
//       "Shelter home locator",
//       "Trauma counseling"
//     ],
//     aiFeature: "One-tap SOS Video Guide"
//   }
// ];

// AI-Powered Guidance Features
export const aiGuidanceFeatures = [
  {
    icon: <Mic className={`w-8 h-8 text-[#${BRIGHT_CORAL}]`} />,
    title: "Voice-Activated Guidance",
    desc: "Speak your question in Hindi/English → Get instant video responses",
    example: "Try: 'मुझे नौकरी कैसे मिलेगी?'"
  },
  {
    icon: <Video className={`w-8 h-8 text-[#${DEEP_ORANGE}]`} />,
    title: "Step-by-Step Video Tutorials",
    desc: "Complex guidance broken into easy-to-follow visual lessons",
    example: "Example: Resume building in 10 minutes"
  },
  {
    icon: <MessageCircle className={`w-8 h-8 text-[#${BRIGHT_CORAL}]`} />,
    title: "Sakhi - Your AI Mentor",
    desc: "24/7 chatbot companion for all your guidance needs",
    example: "Ask anything, get instant answers"
  },
  {
    icon: <Target className={`w-8 h-8 text-[#${DEEP_ORANGE}]`} />,
    title: "Personalized Recommendations",
    desc: "Based on your age, location, education & goals",
    example: "Custom plans just for you"
  }
];

// Government Schemes
export const governmentSchemes = [
  {
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    category: "Skill Training",
    benefit: "Free skill training + certification + job assistance",
    icon: <Award className="w-6 h-6 text-white" />, // Icon colors will be set in component
  },
  {
    name: "Stand Up India Scheme",
    category: "Entrepreneurship",
    benefit: "₹10 lakh - ₹1 crore loan for women entrepreneurs",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    name: "Mahila E-Haat",
    category: "Business Platform",
    benefit: "Online marketplace for women entrepreneurs",
    icon: <Building2 className="w-6 h-6 text-white" />,
  },
  {
    name: "Mudra Yojana for Women",
    category: "Micro Loans",
    benefit: "Business loans up to ₹10 lakhs at low interest",
    icon: <Wallet className="w-6 h-6 text-white" />,
  },
  {
    name: "Beti Bachao Beti Padhao",
    category: "Education",
    benefit: "Scholarships & educational support for girls",
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
  {
    name: "Working Women Hostel Scheme",
    category: "Accommodation",
    benefit: "Safe, affordable housing for working women",
    icon: <Building2 className="w-6 h-6 text-white" />,
  }
];

// Age-Specific Guidance
export const ageBasedGuidance = [
  {
    age: "13-18 Years",
    stage: "The Dreamer",
    focus: "Education & Foundations",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop", 
    guidance: ["Stream selection", "Scholarships", "Study habits", "Confidence"]
  },
  {
    age: "18-25 Years",
    stage: "The Achiever",
    focus: "First Job & Independence",
    image: "https://plus.unsplash.com/premium_photo-1700675175397-7cc710d56e11?q=80&w=1170&auto=format&fit=crop", 
    guidance: ["College choices", "Resume building", "Interview prep", "Skill certifications"]
  },
  {
    age: "25-35 Years",
    stage: "The Builder",
    focus: "Career & Balance",
    image: "https://images.unsplash.com/photo-1659355894276-0df36279b215?q=80&w=1170&auto=format&fit=crop", 
    guidance: ["Career growth", "Maternity rights", "Financial planning", "Work-life balance"]
  },
  {
    age: "35-60 Years",
    stage: "The Leader",
    focus: "Growth & Leadership",
    image: "https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=1170&auto=format&fit=crop", 
    guidance: ["Leadership roles", "Wealth creation", "Mentorship", "Health management"]
  },
  {
    age: "60+ Years",
    stage: "The Mentor",
    focus: "Legacy & Second Innings",
    image: "https://plus.unsplash.com/premium_photo-1682439004639-863e4b3d09dc?q=80&w=1170&auto=format&fit=crop", 
    guidance: ["Consulting roles", "Retirement plans", "Social impact", "Travel & leisure"]
  }
];

// Life Guidance Areas
export const lifeGuidanceAreas = [
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "Confidence Building",
    image: "https://plus.unsplash.com/premium_photo-1683140687548-2aa1c13adc40?q=80&w=1170&auto=format&fit=crop", 
    topics: ["Public speaking", "Self-esteem", "Body positivity", "Leadership skills"]
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Study & Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", 
    topics: ["Study techniques", "Exam stress", "Online learning", "Time management"]
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Work-Life Balance",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", 
    topics: ["Managing home & work", "Parenting tips", "Stress management", "Self-care"]
  },
  {
    icon: <StarIcon className="w-6 h-6 text-white" />,
    title: "Personal Growth",
    image: "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?q=80&w=1170&auto=format&fit=crop", 
    topics: ["Goal setting", "Habit building", "Communication skills", "Relationships"]
  }
];

// Emergency Resources
export const emergencyResources = [
  { name: "Women Helpline", number: "1091", icon: <Phone className="w-5 h-5" /> },
  { name: "Domestic Violence", number: "181", icon: <Shield className="w-5 h-5" /> },
  { name: "Police Emergency", number: "100", icon: <AlertCircle className="w-5 h-5" /> },
  { name: "Legal Aid", number: "15100", icon: <Scale className="w-5 h-5" /> }
];

// import React from "react";
// import {
//   Briefcase, FileText, GraduationCap, Landmark, ShieldAlert,
//   HeartHandshake, Mic, Video, MessageCircle, Target,
//   Award, TrendingUp, Building2, Wallet, BookOpen,
//   Phone, Shield, AlertCircle, Scale, Lightbulb, Users, Star
// } from "lucide-react";

// // Main Guidance Categories
// export const guidanceCategories = [
//   {
//     id: "career",
//     title: "Career Guidance",
//     subtitle: "Find your true calling",
//     icon: <Briefcase className="w-8 h-8" />,
//     color: "from-purple-600 to-indigo-600",
//     image: "https://plus.unsplash.com/premium_photo-1693671725924-302f7a2c450b?q=80&w=660&auto=format&fit=crop", // Professional woman
//     services: [
//       "Career path recommendations",
//       "Work-from-home options",
//       "Interview preparation",
//       "Salary negotiation"
//     ],
//     aiFeature: "Ask: 'What career suits me?'"
//   },
//   {
//     id: "resume",
//     title: "Resume Builder",
//     subtitle: "Stand out instantly",
//     icon: <FileText className="w-8 h-8" />,
//     color: "from-blue-500 to-cyan-600",
//     image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop", // Woman writing
//     services: [
//       "AI resume builder (Hindi/Eng)",
//       "Cover letter assistance",
//       "LinkedIn optimization",
//       "Job board access"
//     ],
//     aiFeature: "Voice: 'Create my resume'"
//   },
//   {
//     id: "skills",
//     title: "Skill Training",
//     subtitle: "Learn to earn",
//     icon: <GraduationCap className="w-8 h-8" />,
//     color: "from-yellow-500 to-orange-500",
//     image: "https://plus.unsplash.com/premium_photo-1675644727129-9e2fbc03c500?q=80&w=1344&auto=format&fit=crop", // Woman studying/smiling
//     services: [
//       "Govt. certified courses",
//       "Digital literacy",
//       "Vocational training",
//       "Entrepreneurship skills"
//     ],
//     aiFeature: "Find local training centers"
//   },
//   {
//     id: "legal",
//     title: "Legal Rights",
//     subtitle: "Claim your power",
//     icon: <Landmark className="w-8 h-8" />,
//     color: "from-zinc-400 to-gray-700",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop", // Legal/Justice abstract or confident woman
//     services: [
//       "Rights explained simply",
//       "Workplace harassment laws",
//       "Divorce & property rights",
//       "Free legal aid"
//     ],
//     aiFeature: "Ask: 'What are my rights?'"
//   },
//   {
//     id: "finance",
//     title: "Financial Freedom",
//     subtitle: "Secure your future",
//     icon: <HeartHandshake className="w-8 h-8" />,
//     color: "from-purple-600 to-pink-500",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", // Woman handling money/business
//     services: [
//       "Budgeting strategies",
//       "Govt loan schemes",
//       "Safe investment tips",
//       "Tax filing help"
//     ],
//     aiFeature: "Plan your savings with AI"
//   },
//   {
//     id: "safety",
//     title: "Safety Support",
//     subtitle: "You are not alone",
//     icon: <ShieldAlert className="w-8 h-8" />,
//     color: "from-red-600 to-rose-700",
//     image: "https://images.unsplash.com/photo-1563393934034-21b781d905ef?q=80&w=1170&auto=format&fit=crop", // Support group/Holding hands
//     services: [
//       "24/7 emergency helpline",
//       "Safe exit planning",
//       "Shelter home locator",
//       "Trauma counseling"
//     ],
//     aiFeature: "One-tap SOS Video Guide"
//   }
// ];

// // AI-Powered Guidance Features
// export const aiGuidanceFeatures = [
//   {
//     icon: <Mic className="w-8 h-8 text-pink-600" />,
//     title: "Voice-Activated Guidance",
//     desc: "Speak your question in Hindi/English → Get instant video responses",
//     example: "Try: 'मुझे नौकरी कैसे मिलेगी?'"
//   },
//   {
//     icon: <Video className="w-8 h-8 text-purple-600" />,
//     title: "Step-by-Step Video Tutorials",
//     desc: "Complex guidance broken into easy-to-follow visual lessons",
//     example: "Example: Resume building in 10 minutes"
//   },
//   {
//     icon: <MessageCircle className="w-8 h-8 text-pink-600" />,
//     title: "Sakhi - Your AI Mentor",
//     desc: "24/7 chatbot companion for all your guidance needs",
//     example: "Ask anything, get instant answers"
//   },
//   {
//     icon: <Target className="w-8 h-8 text-purple-600" />,
//     title: "Personalized Recommendations",
//     desc: "Based on your age, location, education & goals",
//     example: "Custom plans just for you"
//   }
// ];

// // Government Schemes
// export const governmentSchemes = [
//   {
//     name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
//     category: "Skill Training",
//     benefit: "Free skill training + certification + job assistance",
//     icon: <Award className="w-6 h-6 text-purple-600" />
//   },
//   {
//     name: "Stand Up India Scheme",
//     category: "Entrepreneurship",
//     benefit: "₹10 lakh - ₹1 crore loan for women entrepreneurs",
//     icon: <TrendingUp className="w-6 h-6 text-pink-600" />
//   },
//   {
//     name: "Mahila E-Haat",
//     category: "Business Platform",
//     benefit: "Online marketplace for women entrepreneurs",
//     icon: <Building2 className="w-6 h-6 text-purple-600" />
//   },
//   {
//     name: "Mudra Yojana for Women",
//     category: "Micro Loans",
//     benefit: "Business loans up to ₹10 lakhs at low interest",
//     icon: <Wallet className="w-6 h-6 text-pink-600" />
//   },
//   {
//     name: "Beti Bachao Beti Padhao",
//     category: "Education",
//     benefit: "Scholarships & educational support for girls",
//     icon: <BookOpen className="w-6 h-6 text-purple-600" />
//   },
//   {
//     name: "Working Women Hostel Scheme",
//     category: "Accommodation",
//     benefit: "Safe, affordable housing for working women",
//     icon: <Building2 className="w-6 h-6 text-pink-600" />
//   }
// ];

// // Age-Specific Guidance
// export const ageBasedGuidance = [
//   {
//     age: "13-18 Years",
//     stage: "The Dreamer",
//     focus: "Education & Foundations",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop", // Teen student
//     guidance: ["Stream selection", "Scholarships", "Study habits", "Confidence"]
//   },
//   {
//     age: "18-25 Years",
//     stage: "The Achiever",
//     focus: "First Job & Independence",
//     image: "https://plus.unsplash.com/premium_photo-1700675175397-7cc710d56e11?q=80&w=1170&auto=format&fit=crop", // Graduate/Young pro
//     guidance: ["College choices", "Resume building", "Interview prep", "Skill certifications"]
//   },
//   {
//     age: "25-35 Years",
//     stage: "The Builder",
//     focus: "Career & Balance",
//     image: "https://images.unsplash.com/photo-1659355894276-0df36279b215?q=80&w=1170&auto=format&fit=crop", // Professional working
//     guidance: ["Career growth", "Maternity rights", "Financial planning", "Work-life balance"]
//   },
//   {
//     age: "35-60 Years",
//     stage: "The Leader",
//     focus: "Growth & Leadership",
//     image: "https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=1170&auto=format&fit=crop", // Leader/Meeting
//     guidance: ["Leadership roles", "Wealth creation", "Mentorship", "Health management"]
//   },
//   {
//     age: "60+ Years",
//     stage: "The Mentor",
//     focus: "Legacy & Second Innings",
//     image: "https://plus.unsplash.com/premium_photo-1682439004639-863e4b3d09dc?q=80&w=1170&auto=format&fit=crop", // Senior woman
//     guidance: ["Consulting roles", "Retirement plans", "Social impact", "Travel & leisure"]
//   }
// ];

// // Life Guidance Areas
// export const lifeGuidanceAreas = [
//   {
//     icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
//     title: "Confidence Building",
//     image: "https://plus.unsplash.com/premium_photo-1683140687548-2aa1c13adc40?q=80&w=1170&auto=format&fit=crop", // Confident woman speaking
//     topics: ["Public speaking", "Self-esteem", "Body positivity", "Leadership skills"]
//   },
//   {
//     icon: <BookOpen className="w-6 h-6 text-blue-500" />,
//     title: "Study & Education",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", // Group study/Woman reading
//     topics: ["Study techniques", "Exam stress", "Online learning", "Time management"]
//   },
//   {
//     icon: <Users className="w-6 h-6 text-rose-500" />,
//     title: "Work-Life Balance",
//     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", // Yoga/Relaxation
//     topics: ["Managing home & work", "Parenting tips", "Stress management", "Self-care"]
//   },
//   {
//     icon: <Star className="w-6 h-6 text-purple-500" />,
//     title: "Personal Growth",
//     image: "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905?q=80&w=1170&auto=format&fit=crop", // Journaling/Thinking
//     topics: ["Goal setting", "Habit building", "Communication skills", "Relationships"]
//   }
// ];

// // Emergency Resources
// export const emergencyResources = [
//   { name: "Women Helpline", number: "1091", icon: <Phone className="w-5 h-5" /> },
//   { name: "Domestic Violence", number: "181", icon: <Shield className="w-5 h-5" /> },
//   { name: "Police Emergency", number: "100", icon: <AlertCircle className="w-5 h-5" /> },
//   { name: "Legal Aid", number: "15100", icon: <Scale className="w-5 h-5" /> }
// ];