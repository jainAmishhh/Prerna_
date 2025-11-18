import React from "react";
import {
  ShieldAlert, Heart, Shield, Phone, Users, HeartHandshake,
  Globe, MessageCircle, Sparkles
} from "lucide-react";

// --- 1. FAQs ---
export const faqs = [
  {
    q: "How can I get immediate help in case of an emergency?",
    a: "Click the SOS button at the top right of any page, or call 1091 (Women Helpline) or 112 (Emergency Services) immediately. You can also ask Sakhi 'I need help' for instant emergency guidance with video instructions.",
    category: "Emergency"
  },
  {
    q: "Can I use Sakhi in Hindi?",
    a: "Yes! Sakhi fully supports both Hindi and English. You can speak or type in either language. Voice commands work seamlessly in both languages, and video responses are available in your preferred language.",
    category: "Features"
  },
  {
    q: "How does the voice-to-video feature work?",
    a: "Simply speak your question using the microphone button. Sakhi converts your voice to text, understands your query, and generates a personalized video response explaining the answer step-by-step.",
    category: "Features"
  },
  {
    q: "Can I report issues anonymously?",
    a: "Yes, absolutely. Your identity remains completely confidential when reporting harassment, violence, or any safety concerns. We never share your personal information without your explicit consent.",
    category: "Safety"
  },
  {
    q: "Is the platform free to use?",
    a: "Yes! All features including Sakhi AI guidance, scheme information, health tracking, career resources, and emergency support are 100% free.",
    category: "General"
  },
  {
    q: "Which government schemes can I access?",
    a: "You can explore 100+ schemes including PMKVY (skill training), Beti Bachao Beti Padhao (education), Stand Up India (entrepreneurship), and state-specific schemes.",
    category: "Schemes"
  },
  {
    q: "How can I track my menstrual cycle?",
    a: "Use the Period Tracker feature in the Health section. Tell Sakhi your last period date, and she'll predict your next cycle and send reminders.",
    category: "Health"
  },
  {
    q: "Can I get customized career guidance?",
    a: "Yes! Sakhi provides personalized career recommendations based on your age, education level, location (urban/rural), and interests.",
    category: "Career"
  }
];

// --- 2. Helpline Categories ---
export const helplineCategories = [
  {
    title: "Women's Safety",
    color: "from-red-500 to-rose-600",
    icon: <ShieldAlert className="w-6 h-6" />,
    lines: [
      { name: "Women Helpline (24/7)", number: "1091", description: "For women in distress" },
      { name: "Domestic Violence", number: "181", description: "Support & legal aid" },
      { name: "Police Emergency", number: "100", description: "Immediate police assistance" },
      { name: "Women Safety (Delhi)", number: "1091", description: "Delhi-specific helpline" }
    ]
  },
  {
    title: "Health & Medical",
    color: "from-pink-500 to-purple-600",
    icon: <Heart className="w-6 h-6" />,
    lines: [
      { name: "National Health Helpline", number: "104", description: "Medical assistance" },
      { name: "Mental Health Helpline", number: "9152987821", description: "Counseling support" },
      { name: "Ambulance Service", number: "108", description: "Emergency medical transport" },
      { name: "COVID-19 Helpline", number: "1075", description: "Health information" }
    ]
  },
  {
    title: "Legal & Rights",
    color: "from-purple-600 to-indigo-600",
    icon: <Shield className="w-6 h-6" />,
    lines: [
      { name: "Legal Services Authority", number: "15100", description: "Free legal aid" },
      { name: "National Commission", number: "011-26942369", description: "Women's rights support" },
      { name: "Cyber Crime Helpline", number: "1930", description: "Online harassment/fraud" },
      { name: "Child Helpline", number: "1098", description: "For child safety issues" }
    ]
  },
  {
    title: "General Support",
    color: "from-blue-500 to-cyan-600",
    icon: <Phone className="w-6 h-6" />,
    lines: [
      { name: "Emergency Services", number: "112", description: "All emergency services" },
      { name: "Senior Citizen Helpline", number: "14567", description: "Elderly support" },
      { name: "Railway Helpline", number: "139", description: "Travel safety" },
      { name: "Road Accident Helpline", number: "1073", description: "Accident emergency" }
    ]
  }
];

// --- 3. Community Support (With Images) ---
export const communitySupport = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Self-Help Groups",
    description: "Join local women's groups for skill development & microfinance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // Group of women
    action: "Find SHG Near You",
    color: "pink"
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Legal Aid Communities",
    description: "Access free legal consultation and document support.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop", // Legal/Handshake
    action: "Get Legal Help",
    color: "purple"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Mental Health Circles",
    description: "Anonymous peer support groups and counseling sessions.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop", // Friends hugging/supporting
    action: "Join Support Group",
    color: "pink"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Local NGO Networks",
    description: "Connect with NGOs working on women's empowerment.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop", // Social work
    action: "Explore NGOs",
    color: "purple"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Survivor Forums",
    description: "Safe, anonymous forums to share experiences and heal.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", // Support meeting
    action: "Join Forum",
    color: "pink"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Skill Groups",
    description: "Learn together! Tailoring, coding, and business groups.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", // Women working/learning
    action: "Find Learning Groups",
    color: "purple"
  }
];