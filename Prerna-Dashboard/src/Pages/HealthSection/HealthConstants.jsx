import React from "react";
import {
  HeartPulse, Brain, Baby, Flower2, AlarmClock, 
  Video, Mic, MessageSquare, Stethoscope, Shield, 
  Award, Sparkles, Activity, Users, ArrowRight,
  ChevronRight, Award as AwardIcon, Landmark, ShieldCheck, ScrollText,
  Mic as MicIcon, MessageCircle, Target, Check,
  Star
} from "lucide-react";

// --- THEME COLORS ---
const BRIGHT_CORAL = "D9534F";
const DEEP_ORANGE = "CD4628";
const SUNNY_YELLOW = "FFC843";

// Main Health Categories - Update gradients to be based on the new palette
export const healthCategories = [
  {
    id: "maternal",
    title: "Maternal & Pregnancy Care",
    subtitle: "Complete pregnancy journey support",
    icon: <Baby className="w-12 h-12" />,
    // Gradient kept for the overlay effect
    color: "from-pink-600 to-rose-600", 
    // Image: Pregnant woman / Motherhood
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop", 
    features: [
      "Week-by-week pregnancy tracking",
      "Safe exercises & yoga",
      "Nutrition plans for mother",
      "Breastfeeding support",
    ],
    highlight: "1M+ mothers supported",
  },
  {
    id: "menstrual",
    title: "Menstrual Health & Hygiene",
    subtitle: "Period tracking & wellness support",
    icon: <Flower2 className="w-12 h-12" />,
    color: "from-purple-600 to-fuchsia-600",
    // Image: Woman relaxing/Comfort/Flowers
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop",
    features: [
      "Smart period tracker",
      "PCOS/PCOD management",
      "Hygiene recommendations",
      "Pain management tips",
    ],
    highlight: "Track, understand, empower",
  },
  {
    id: "mental",
    title: "Mental Health & Wellness",
    subtitle: "Your emotional wellbeing matters",
    icon: <Brain className="w-12 h-12" />,
    color: "from-indigo-600 to-violet-600",
    // Image: Woman meditating/Peaceful
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
    features: [
      "24/7 AI mental health companion",
      "Stress & anxiety management",
      "Meditation exercises",
      "Connect with counselors",
    ],
    highlight: "Anonymous & confidential",
  },
  {
    id: "vaccination",
    title: "Vaccination & Preventive Care",
    subtitle: "Stay protected, stay healthy",
    icon: <Stethoscope className="w-12 h-12" />,
    color: "from-blue-600 to-cyan-600",
    // Image: Doctor interacting with woman patient
    image: "https://plus.unsplash.com/premium_photo-1675807264224-686353a0a379?q=80&w=1170&auto=format&fit=crop",
    features: [
      "Cervical cancer (HPV) reminders",
      "Child immunization tracking",
      "Flu & COVID updates",
      "Health checkup reminders",
    ],
    highlight: "Never miss a vaccine",
  },
  {
    id: "emergency",
    title: "Emergency & Safety Support",
    subtitle: "Help when you need it most",
    icon: <AlarmClock className="w-12 h-12" />,
    color: "from-red-600 to-pink-600",
    // Image: Holding hands/Support/Trust
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
    features: [
      "One-tap SOS alerts",
      "Domestic violence helpline",
      "Nearest hospital locator",
      "Legal aid resources",
    ],
    highlight: "Fast response, secure help",
  },
  {
    id: "general",
    title: "General Health & Fitness",
    subtitle: "Everyday wellness made easy",
    icon: <Activity className="w-12 h-12" />,
    color: "from-emerald-600 to-teal-600",
    // Image: Woman jogging/Yoga/Active
    image: "https://images.unsplash.com/photo-1615794239747-49e7d398a930?q=80&w=1170&auto=format&fit=crop",
    features: [
      "AI symptom checker",
      "Personalized diet plans",
      "Workout routines for women",
      "BMI calculator",
    ],
    highlight: "Your health, simplified",
  },
];
// export const healthCategories = [
//   {
//     id: "maternal",
//     title: "Maternal & Pregnancy Care",
//     subtitle: "Complete pregnancy journey support",
//     icon: <Baby className="w-12 h-12" />,
//     // Gradient: Deep Orange to Coral
//     color: `from-[#${DEEP_ORANGE}] to-[#${BRIGHT_CORAL}]`, 
//     image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop", 
//     features: [
//       "Week-by-week pregnancy tracking",
//       "Safe exercises & yoga",
//       "Nutrition plans for mother",
//       "Breastfeeding support",
//     ],
//     highlight: "1M+ mothers supported",
//   },
//   {
//     id: "menstrual",
//     title: "Menstrual Health & Hygiene",
//     subtitle: "Period tracking & wellness support",
//     icon: <Flower2 className="w-12 h-12" />,
//     // Gradient: Yellow to Deep Orange
//     color: `from-[#${SUNNY_YELLOW}] to-[#${DEEP_ORANGE}]`,
//     image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop",
//     features: [
//       "Smart period tracker",
//       "PCOS/PCOD management",
//       "Hygiene recommendations",
//       "Pain management tips",
//     ],
//     highlight: "Track, understand, empower",
//   },
//   {
//     id: "mental",
//     title: "Mental Health & Wellness",
//     subtitle: "Your emotional wellbeing matters",
//     icon: <Brain className="w-12 h-12" />,
//     // Gradient: Coral to Yellow
//     color: `from-[#${BRIGHT_CORAL}] to-[#${SUNNY_YELLOW}]`,
//     image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
//     features: [
//       "24/7 AI mental health companion",
//       "Stress & anxiety management",
//       "Meditation exercises",
//       "Connect with counselors",
//     ],
//     highlight: "Anonymous & confidential",
//   },
//   {
//     id: "vaccination",
//     title: "Vaccination & Preventive Care",
//     subtitle: "Stay protected, stay healthy",
//     icon: <Stethoscope className="w-12 h-12" />,
//     // Gradient: Deep Orange to Coral
//     color: `from-[#${DEEP_ORANGE}] to-[#${BRIGHT_CORAL}]`,
//     image: "https://plus.unsplash.com/premium_photo-1675807264224-686353a0a379?q=80&w=1170&auto=format&fit=crop",
//     features: [
//       "Cervical cancer (HPV) reminders",
//       "Child immunization tracking",
//       "Flu & COVID updates",
//       "Health checkup reminders",
//     ],
//     highlight: "Never miss a vaccine",
//   },
//   {
//     id: "emergency",
//     title: "Emergency & Safety Support",
//     subtitle: "Help when you need it most",
//     icon: <AlarmClock className="w-12 h-12" />,
//     // Gradient: Red to Deep Orange (High Urgency)
//     color: `from-[#D9534F] to-[#CD4628]`,
//     image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
//     features: [
//       "One-tap SOS alerts",
//       "Domestic violence helpline",
//       "Nearest hospital locator",
//       "Legal aid resources",
//     ],
//     highlight: "Fast response, secure help",
//   },
//   {
//     id: "general",
//     title: "General Health & Fitness",
//     subtitle: "Everyday wellness made easy",
//     icon: <Activity className="w-12 h-12" />,
//     // Gradient: Yellow to Deep Orange
//     color: `from-[#FFC843] to-[#CD4628]`,
//     image: "https://images.unsplash.com/photo-1615794239747-49e7d398a930?q=80&w=1170&auto=format&fit=crop",
//     features: [
//       "AI symptom checker",
//       "Personalized diet plans",
//       "Workout routines for women",
//       "BMI calculator",
//     ],
//     highlight: "Your health, simplified",
//   },
// ];

// Age-Specific Care (Keeping original structure, modifying styling in component)
export const ageGroups = [
  { 
    age: "0-2 Years", 
    title: "Infant & Toddler",
    focus: "Vaccination, growth milestones, nutrition basics",
    image: "https://images.unsplash.com/photo-1489760176169-fd3d32805239?q=80&w=1170&auto=format&fit=crop" // Baby girl
  },
  { 
    age: "3-12 Years", 
    title: "Young Girl",
    focus: "Growth monitoring, hygiene education, activity",
    image: "https://images.unsplash.com/photo-1617350033070-f16e86872d78?q=80&w=685&auto=format&fit=crop" // Young girl
  },
  { 
    age: "13-19 Years", 
    title: "Adolescent",
    focus: "Puberty, menstrual health, mental wellness, acne care",
    image: "https://images.unsplash.com/photo-1663194816114-edc693070a2b?q=80&w=627&auto=format&fit=crop" // Teenager
  },
  {
    age: "20-35 Years",
    title: "Young Woman",
    focus: "Reproductive health, pregnancy, career-life balance",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=687&auto=format&fit=crop" // Professional/Young adult
  },
  { 
    age: "36-60 Years", 
    title: "Mid-Life",
    focus: "Hormonal changes, cancer screening, preventive care",
    image: "https://images.unsplash.com/photo-1577900289221-a432e08f3af5?q=80&w=1171&auto=format&fit=crop" // Mid-life woman
  },
  { 
    age: "60+ Years", 
    title: "Golden Years",
    focus: "Menopause support, bone health, heart wellness",
    image: "https://images.unsplash.com/photo-1622579403278-5483be061960?q=80&w=687&auto=format&fit=crop" // Senior woman
  }
];

// Government Schemes (Icons updated to white for better display on Coral/Yellow gradients)
export const governmentSchemes = [
  {
    name: "Pradhan Mantri Matru Vandana Yojana",
    benefit: "₹5,000 cash benefit for pregnant women",
    icon: <Award className="w-6 h-6 text-white" />,
  },
  {
    name: "Janani Suraksha Yojana",
    benefit: "Safe delivery & institutional care support",
    icon: <Shield className="w-6 h-6 text-white" />,
  },
  {
    name: "Ayushman Bharat",
    benefit: "Free health insurance up to ₹5 lakhs",
    icon: <HeartPulse className="w-6 h-6 text-white" />,
  },
  {
    name: "Mission Indradhanush",
    benefit: "Universal immunization program",
    icon: <Stethoscope className="w-6 h-6 text-white" />,
  },
];

// Exporting necessary icons and constants for use in components
export const Icons = {
    Check, Star, ChevronRight, HeartPulse, Mic, MessageSquare, Target,
    AwardIcon, Landmark, ShieldCheck, ScrollText
};


// Keeping AgeGroups and HealthCategories the same as defined above
// ...

// import React from "react";
// import {
//   HeartPulse, Brain, Baby, Flower2, AlarmClock, 
//   Video, Mic, MessageSquare, Stethoscope, Shield, 
//   Award, Sparkles, Activity
// } from "lucide-react";

// // Main Health Categories
// export const healthCategories = [
//   {
//     id: "maternal",
//     title: "Maternal & Pregnancy Care",
//     subtitle: "Complete pregnancy journey support",
//     icon: <Baby className="w-12 h-12" />,
//     // Gradient kept for the overlay effect
//     color: "from-pink-600 to-rose-600", 
//     // Image: Pregnant woman / Motherhood
//     image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop", 
//     features: [
//       "Week-by-week pregnancy tracking",
//       "Safe exercises & yoga",
//       "Nutrition plans for mother",
//       "Breastfeeding support",
//     ],
//     highlight: "1M+ mothers supported",
//   },
//   {
//     id: "menstrual",
//     title: "Menstrual Health & Hygiene",
//     subtitle: "Period tracking & wellness support",
//     icon: <Flower2 className="w-12 h-12" />,
//     color: "from-purple-600 to-fuchsia-600",
//     // Image: Woman relaxing/Comfort/Flowers
//     image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop",
//     features: [
//       "Smart period tracker",
//       "PCOS/PCOD management",
//       "Hygiene recommendations",
//       "Pain management tips",
//     ],
//     highlight: "Track, understand, empower",
//   },
//   {
//     id: "mental",
//     title: "Mental Health & Wellness",
//     subtitle: "Your emotional wellbeing matters",
//     icon: <Brain className="w-12 h-12" />,
//     color: "from-indigo-600 to-violet-600",
//     // Image: Woman meditating/Peaceful
//     image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
//     features: [
//       "24/7 AI mental health companion",
//       "Stress & anxiety management",
//       "Meditation exercises",
//       "Connect with counselors",
//     ],
//     highlight: "Anonymous & confidential",
//   },
//   {
//     id: "vaccination",
//     title: "Vaccination & Preventive Care",
//     subtitle: "Stay protected, stay healthy",
//     icon: <Stethoscope className="w-12 h-12" />,
//     color: "from-blue-600 to-cyan-600",
//     // Image: Doctor interacting with woman patient
//     image: "https://plus.unsplash.com/premium_photo-1675807264224-686353a0a379?q=80&w=1170&auto=format&fit=crop",
//     features: [
//       "Cervical cancer (HPV) reminders",
//       "Child immunization tracking",
//       "Flu & COVID updates",
//       "Health checkup reminders",
//     ],
//     highlight: "Never miss a vaccine",
//   },
//   {
//     id: "emergency",
//     title: "Emergency & Safety Support",
//     subtitle: "Help when you need it most",
//     icon: <AlarmClock className="w-12 h-12" />,
//     color: "from-red-600 to-pink-600",
//     // Image: Holding hands/Support/Trust
//     image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
//     features: [
//       "One-tap SOS alerts",
//       "Domestic violence helpline",
//       "Nearest hospital locator",
//       "Legal aid resources",
//     ],
//     highlight: "Fast response, secure help",
//   },
//   {
//     id: "general",
//     title: "General Health & Fitness",
//     subtitle: "Everyday wellness made easy",
//     icon: <Activity className="w-12 h-12" />,
//     color: "from-emerald-600 to-teal-600",
//     // Image: Woman jogging/Yoga/Active
//     image: "https://images.unsplash.com/photo-1615794239747-49e7d398a930?q=80&w=1170&auto=format&fit=crop",
//     features: [
//       "AI symptom checker",
//       "Personalized diet plans",
//       "Workout routines for women",
//       "BMI calculator",
//     ],
//     highlight: "Your health, simplified",
//   },
// ];

// // AI-Powered Features (Note: This was defined but unused in your original render, keeping it here for future use)
// export const aiFeatures = [
//   {
//     icon: <Mic className="w-8 h-8 text-pink-600" />,
//     title: "Voice to Video Guidance",
//     desc: "Speak in Hindi/English → AI generates personalized video responses",
//     badge: "AI Powered",
//   },
//   {
//     icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
//     title: "Sakhi - Your AI Companion",
//     desc: "24/7 bilingual chatbot for instant health answers & support",
//     badge: "Always Available",
//   },
//   {
//     icon: <Video className="w-8 h-8 text-pink-600" />,
//     title: "Visual Health Education",
//     desc: "Complex topics explained through easy-to-understand videos",
//     badge: "Multilingual",
//   },
//   {
//     icon: <Sparkles className="w-8 h-8 text-purple-600" />,
//     title: "Personalized Recommendations",
//     desc: "Age & location-based health guidance tailored just for you",
//     badge: "Smart AI",
//   },
// ];

// // Government Schemes Integration
// export const governmentSchemes = [
//   {
//     name: "Pradhan Mantri Matru Vandana Yojana",
//     benefit: "₹5,000 cash benefit for pregnant women",
//     icon: <Award className="w-6 h-6 text-pink-600" />,
//   },
//   {
//     name: "Janani Suraksha Yojana",
//     benefit: "Safe delivery & institutional care support",
//     icon: <Shield className="w-6 h-6 text-purple-600" />,
//   },
//   {
//     name: "Ayushman Bharat",
//     benefit: "Free health insurance up to ₹5 lakhs",
//     icon: <HeartPulse className="w-6 h-6 text-pink-600" />,
//   },
//   {
//     name: "Mission Indradhanush",
//     benefit: "Universal immunization program",
//     icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
//   },
// ];

// // Age-Specific Care
// export const ageGroups = [
//   { 
//     age: "0-2 Years", 
//     title: "Infant & Toddler",
//     focus: "Vaccination, growth milestones, nutrition basics",
//     image: "https://images.unsplash.com/photo-1489760176169-fd3d32805239?q=80&w=1170&auto=format&fit=crop" // Baby girl
//   },
//   { 
//     age: "3-12 Years", 
//     title: "Young Girl",
//     focus: "Growth monitoring, hygiene education, activity",
//     image: "https://images.unsplash.com/photo-1617350033070-f16e86872d78?q=80&w=685&auto=format&fit=crop" // Young girl
//   },
//   { 
//     age: "13-19 Years", 
//     title: "Adolescent",
//     focus: "Puberty, menstrual health, mental wellness, acne care",
//     image: "https://images.unsplash.com/photo-1663194816114-edc693070a2b?q=80&w=627&auto=format&fit=crop" // Teenager
//   },
//   {
//     age: "20-35 Years",
//     title: "Young Woman",
//     focus: "Reproductive health, pregnancy, career-life balance",
//     image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=687&auto=format&fit=crop" // Professional/Young adult
//   },
//   { 
//     age: "36-60 Years", 
//     title: "Mid-Life",
//     focus: "Hormonal changes, cancer screening, preventive care",
//     image: "https://images.unsplash.com/photo-1577900289221-a432e08f3af5?q=80&w=1171&auto=format&fit=crop" // Mid-life woman
//   },
//   { 
//     age: "60+ Years", 
//     title: "Golden Years",
//     focus: "Menopause support, bone health, heart wellness",
//     image: "https://images.unsplash.com/photo-1622579403278-5483be061960?q=80&w=687&auto=format&fit=crop" // Senior woman
//   }
// ];