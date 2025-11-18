import React, { useState, useRef, useEffect } from "react";
import {
  Mic,
  Send,
  Volume2,
  Sparkles,
  BookOpen,
  Stethoscope,
  GraduationCap,
  ShieldAlert,
  Heart,
  Briefcase,
  Calendar,
  Phone,
  AlertCircle,
  Video,
  Globe,
  MessageCircle,
  FileText,
  RotateCcw, // Icon for New Chat/Reset
} from "lucide-react";

// Import Modularized Components
import SakhiHeader from "./SakhiHeader";
import ChatWindow from "./ChatWindow";
import ChatQuickActions from "./ChatQuickActions";
import ChatInput from "./ChatInput";

const initialMessage = {
  type: "bot",
  text: "Namaste! 🙏 I'm Sakhi, your personal AI guide. I'm here to help you with schemes, health, career, safety, and everything else. You can type or speak to me in Hindi or English!",
  timestamp: new Date(),
};

// Quick action shortcuts
const quickActionsData = [
  {
    icon: <BookOpen className="w-4 h-4" />,
    text: "Explain this scheme",
    category: "schemes",
  },
  {
    icon: <Calendar className="w-4 h-4" />,
    text: "Track my period",
    category: "health",
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    text: "Give me a job tip",
    category: "career",
  },
  {
    icon: <ShieldAlert className="w-4 h-4" />,
    text: "Tell me my rights",
    category: "legal",
  },
  {
    icon: <Stethoscope className="w-4 h-4" />,
    text: "Pregnancy guidance",
    category: "health",
  },
];

// Feature Highlights Data
const featuresData = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Explain Schemes",
    desc: "Government schemes, scholarships, subsidies simplified in Hindi & English",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Health Guidance",
    desc: "Menstrual health, pregnancy support, vaccination info, mental wellness",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Study & Career",
    desc: "Assignment help, study tips, resume building, job suggestions, skill growth",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Safety Support",
    desc: "Emergency guidance, helplines, rights information, safety planning",
    color: "from-red-500 to-rose-500",
  },
];

// Voice Process Data
const voiceProcessSteps = [
  {
    step: "1",
    icon: <Mic className="w-6 h-6" />,
    text: "Speak Your Question",
    desc: "Hindi or English",
  },
  {
    step: "2",
    icon: <FileText className="w-6 h-6" />,
    text: "Voice → Text",
    desc: "AI converts speech",
  },
  {
    step: "3",
    icon: <Sparkles className="w-6 h-6" />,
    text: "AI Processing",
    desc: "Understands your need",
  },
  {
    step: "4",
    icon: <Video className="w-6 h-6" />,
    text: "Video Generated",
    desc: "Watch personalized guide",
  },
];

// AI Response Logic (kept in main component to manage state/side-effects)
const generateAIResponse = (query) => {
  const lowerQuery = query.toLowerCase();

  // Scheme related
  if (
    lowerQuery.includes("scheme") ||
    lowerQuery.includes("योजना") ||
    lowerQuery.includes("explain this scheme")
  ) {
    return {
      text: "I can help you understand government schemes! Here are some popular schemes for women:\n\n1. **Pradhan Mantri Matru Vandana Yojana** - ₹5,000 financial assistance for pregnant women\n2. **Beti Bachao Beti Padhao** - Education support for girls\n3. **Sukanya Samriddhi Yojana** - Savings scheme for girl child\n\nWould you like detailed information about any specific scheme?",
      hasVideo: true,
      videoTitle: "Government Schemes Explained",
    };
  }

  // Period tracking
  if (
    lowerQuery.includes("period") ||
    lowerQuery.includes("menstrual") ||
    lowerQuery.includes("माहवारी") ||
    lowerQuery.includes("track my period")
  ) {
    return {
      text: "I can help you track your menstrual cycle! 📅\n\nTo get started:\n• Tell me your last period date\n• I'll predict your next cycle\n• Get health tips and reminders\n• Track symptoms and mood\n\nWhen was your last period? (You can say: 'My last period was on [date]')",
      hasVideo: false,
    };
  }

  // Job/Career
  if (
    lowerQuery.includes("job") ||
    lowerQuery.includes("career") ||
    lowerQuery.includes("नौकरी") ||
    lowerQuery.includes("give me a job tip")
  ) {
    return {
      text: "Great! Let me help with your career. 💼\n\n**Top Career Tips:**\n1. Update your resume regularly\n2. Network on LinkedIn\n3. Learn in-demand skills\n4. Practice interview questions\n5. Research companies before applying\n\nWhat specifically would you like help with?\n• Resume building?\n• Interview preparation?\n• Skill recommendations?\n• Job search strategies?",
      hasVideo: true,
      videoTitle: "Career Success Tips",
    };
  }

  // Rights/Legal
  if (
    lowerQuery.includes("right") ||
    lowerQuery.includes("legal") ||
    lowerQuery.includes("law") ||
    lowerQuery.includes("अधिकार") ||
    lowerQuery.includes("tell me my rights")
  ) {
    return {
      text: "Every woman should know her rights! ⚖️\n\n**Key Rights for Women in India:**\n1. Right to Equality (Article 14)\n2. Right against discrimination (Article 15)\n3. Right to maternity benefits\n4. Protection from workplace harassment (POSH Act)\n5. Right to property inheritance\n6. Right to free legal aid\n\nWhich area would you like to know more about?",
      hasVideo: true,
      videoTitle: "Women's Legal Rights Explained",
    };
  }

  // Health/Medical (including pregnancy guidance)
  if (
    lowerQuery.includes("health") ||
    lowerQuery.includes("medical") ||
    lowerQuery.includes("doctor") ||
    lowerQuery.includes("स्वास्थ्य") ||
    lowerQuery.includes("pregnancy guidance")
  ) {
    return {
      text: "I'm here for your health concerns! 🏥\n\n**I can help with:**\n• Pregnancy & maternal health\n• Vaccination schedules\n• Menstrual health issues\n• General wellness tips\n• Finding nearby health centers\n\n⚠️ Remember: For serious medical issues, please consult a qualified doctor.\n\nWhat would you like to know?",
      hasVideo: false,
    };
  }

  // Default response
  return {
    text: "I'm here to help you! I can assist with:\n\n• 📚 Government schemes & benefits\n• 🏥 Health & medical guidance\n• 💼 Career & job opportunities\n• 🎓 Education & study help\n• 📅 Period tracking\n• ⚖️ Legal rights\n• 🚨 Emergency support\n• 🍳 Daily tips & recipes\n\nJust ask me anything in Hindi or English!",
    hasVideo: false,
  };
};

const Sakhi = () => {
  const [messages, setMessages] = useState([initialMessage]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNewChat = () => {
    if (
      window.confirm(
        "Are you sure you want to start a new chat? Your current conversation will be cleared."
      )
    ) {
      setMessages([initialMessage]);
      setInputText("");
      setIsRecording(false);
      setIsProcessing(false);
    }
  };

  const handleSendMessage = (textToSend = inputText) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: textToSend,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsProcessing(true);

    // Simulate AI processing and response
    setTimeout(() => {
      const response = generateAIResponse(textToSend);
      const botMessage = {
        type: "bot",
        text: response.text,
        timestamp: new Date(),
        hasVideo: response.hasVideo,
        videoTitle: response.videoTitle,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleQuickAction = (actionText) => {
    setInputText(actionText);
    handleSendMessage(actionText);
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);

    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceQuery =
          selectedLanguage === "hi"
            ? "मुझे सरकारी योजना के बारे में बताओ"
            : "Tell me about government schemes";

        setInputText(voiceQuery);

        // Auto-send after voice input simulation
        setTimeout(() => {
          handleSendMessage(voiceQuery);
        }, 500);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <SakhiHeader />

        {/* Chat Interface Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-100 mb-12">
          {/* Chat Header and Language Toggle */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Chat with Sakhi</h3>
                  <p className="text-white/80 text-sm">
                    Online • Responds instantly
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 items-center">
                {/* New Chat Button */}
                <button
                  onClick={handleNewChat}
                  title="Start a New Conversation"
                  className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>

                {/* Language Toggle */}
                <button
                  onClick={() => setSelectedLanguage("en")}
                  className={`px-4 py-2 rounded-lg font-bold transition-all border-2 ${
                    selectedLanguage === "en"
                      ? "bg-white text-pink-600 border-white"
                      : "bg-white/20 text-white border-white/40 hover:bg-white/30"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setSelectedLanguage("hi")}
                  className={`px-4 py-2 rounded-lg font-bold transition-all border-2 ${
                    selectedLanguage === "hi"
                      ? "bg-white text-pink-600 border-white"
                      : "bg-white/20 text-white border-white/40 hover:bg-white/30"
                  }`}
                >
                  हि
                </button>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <ChatWindow
            messages={messages}
            isProcessing={isProcessing}
            messagesEndRef={messagesEndRef}
          />

          {/* Quick Actions */}
          <ChatQuickActions
            actions={quickActionsData}
            onQuickAction={handleQuickAction}
          />

          {/* Input Area */}
          <ChatInput
            inputText={inputText}
            setInputText={setInputText}
            handleSendMessage={() => handleSendMessage(inputText)}
            handleVoiceInput={handleVoiceInput}
            isRecording={isRecording}
            isProcessing={isProcessing}
            selectedLanguage={selectedLanguage}
          />
        </div>

        {/* Emergency Button */}
        <a
          href="tel:1091"
          className="w-full md:w-auto mx-auto mb-12 flex items-center justify-center space-x-3 bg-red-600 text-white font-extrabold text-xl py-4 px-10 rounded-full shadow-2xl hover:bg-red-700 transition-all transform hover:scale-105 ring-4 ring-red-300 animate-pulse"
        >
          <AlertCircle className="w-6 h-6" />
          <span>EMERGENCY HELP (1091)</span>
        </a>

        {/* Daily Motivation - Enhanced Style */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-10 border-4 border-pink-300 shadow-xl">
          <Heart className="w-14 h-14 text-pink-600 mx-auto mb-4 drop-shadow-md" />
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wider">
            Your Daily Spark ✨
          </h3>
          <p className="text-xl font-serif text-gray-700 max-w-2xl mx-auto leading-relaxed italic">
            <span className="text-purple-700/80 font-bold">
              "तुम वो सब कुछ हो जो तुम्हें चाहिए।
            </span>{" "}
            अपने अंदर की ताकत को पहचानो और दुनिया को अपनी रौशनी दिखाओ।"
            <br />
            <span className="text-pink-600 font-extrabold block mt-3">
              "You are everything you need. Recognize the strength within you
              and show the world your light."
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sakhi;
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Mic,
//   Send,
//   X,
//   Volume2,
//   Sparkles,
//   BookOpen,
//   Stethoscope,
//   GraduationCap,
//   ShieldAlert,
//   Heart,
//   Briefcase,
//   Calendar,
//   ChefHat,
//   Lightbulb,
//   MessageCircle,
//   Video,
//   FileText,
//   Globe,
//   Phone,
//   AlertCircle
// } from "lucide-react";

// const Sakhi = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       type: "bot",
//       text: "Namaste! 🙏 I'm Sakhi, your personal AI guide. I'm here to help you with schemes, health, career, safety, and everything else. You can type or speak to me in Hindi or English!",
//       timestamp: new Date()
//     }
//   ]);
//   const [inputText, setInputText] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("en");
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Quick action shortcuts
//   const quickActions = [
//     { icon: <BookOpen className="w-4 h-4" />, text: "Explain this scheme", category: "schemes" },
//     { icon: <Calendar className="w-4 h-4" />, text: "Track my period", category: "health" },
//     { icon: <Briefcase className="w-4 h-4" />, text: "Give me a job tip", category: "career" },
//     { icon: <ShieldAlert className="w-4 h-4" />, text: "Tell me my rights", category: "legal" },
//     { icon: <Stethoscope className="w-4 h-4" />, text: "Pregnancy guidance", category: "health" },
//   ];

//   // Emergency contacts
//   const emergencyContacts = [
//     { name: "Women Helpline", number: "1091", icon: <Phone className="w-4 h-4" /> },
//     { name: "Domestic Violence", number: "181", icon: <ShieldAlert className="w-4 h-4" /> },
//     { name: "Police Emergency", number: "100", icon: <AlertCircle className="w-4 h-4" /> }
//   ];

//   // Simulate AI response based on query
//   const generateAIResponse = (query) => {
//     const lowerQuery = query.toLowerCase();

//     // Scheme related
//     if (lowerQuery.includes("scheme") || lowerQuery.includes("योजना")) {
//       return {
//         text: "I can help you understand government schemes! Here are some popular schemes for women:\n\n1. **Pradhan Mantri Matru Vandana Yojana** - ₹5,000 financial assistance for pregnant women\n2. **Beti Bachao Beti Padhao** - Education support for girls\n3. **Sukanya Samriddhi Yojana** - Savings scheme for girl child\n\nWould you like detailed information about any specific scheme?",
//         hasVideo: true,
//         videoTitle: "Government Schemes Explained"
//       };
//     }

//     // Period tracking
//     if (lowerQuery.includes("period") || lowerQuery.includes("menstrual") || lowerQuery.includes("माहवारी")) {
//       return {
//         text: "I can help you track your menstrual cycle! 📅\n\nTo get started:\n• Tell me your last period date\n• I'll predict your next cycle\n• Get health tips and reminders\n• Track symptoms and mood\n\nWhen was your last period? (You can say: 'My last period was on [date]')",
//         hasVideo: false
//       };
//     }

//     // Cooking/recipes
//     if (lowerQuery.includes("cook") || lowerQuery.includes("recipe") || lowerQuery.includes("खाना")) {
//       return {
//         text: "Let me suggest some healthy recipes! 🍳\n\n**Quick & Nutritious Options:**\n• Dal Tadka with vegetables\n• Paneer Bhurji\n• Vegetable Khichdi\n• Roti with seasonal sabzi\n\nTell me:\n• How many people?\n• Any dietary restrictions?\n• Available ingredients?",
//         hasVideo: true,
//         videoTitle: "Quick Healthy Recipes"
//       };
//     }

//     // Job/Career
//     if (lowerQuery.includes("job") || lowerQuery.includes("career") || lowerQuery.includes("नौकरी")) {
//       return {
//         text: "Great! Let me help with your career. 💼\n\n**Top Career Tips:**\n1. Update your resume regularly\n2. Network on LinkedIn\n3. Learn in-demand skills\n4. Practice interview questions\n5. Research companies before applying\n\nWhat specifically would you like help with?\n• Resume building?\n• Interview preparation?\n• Skill recommendations?\n• Job search strategies?",
//         hasVideo: true,
//         videoTitle: "Career Success Tips"
//       };
//     }

//     // Study help
//     if (lowerQuery.includes("study") || lowerQuery.includes("assignment") || lowerQuery.includes("homework") || lowerQuery.includes("पढ़ाई")) {
//       return {
//         text: "I'm here to help with your studies! 📚\n\n**Study Tips:**\n• Break tasks into smaller parts\n• Take regular breaks (Pomodoro technique)\n• Create a study schedule\n• Use active recall and practice tests\n\nWhat subject do you need help with? Tell me your assignment topic and I'll guide you!",
//         hasVideo: true,
//         videoTitle: "Effective Study Techniques"
//       };
//     }

//     // Rights/Legal
//     if (lowerQuery.includes("right") || lowerQuery.includes("legal") || lowerQuery.includes("law") || lowerQuery.includes("अधिकार")) {
//       return {
//         text: "Every woman should know her rights! ⚖️\n\n**Key Rights for Women in India:**\n1. Right to Equality (Article 14)\n2. Right against discrimination (Article 15)\n3. Right to maternity benefits\n4. Protection from workplace harassment (POSH Act)\n5. Right to property inheritance\n6. Right to free legal aid\n\nWhich area would you like to know more about?",
//         hasVideo: true,
//         videoTitle: "Women's Legal Rights Explained"
//       };
//     }

//     // Health/Medical
//     if (lowerQuery.includes("health") || lowerQuery.includes("medical") || lowerQuery.includes("doctor") || lowerQuery.includes("स्वास्थ्य")) {
//       return {
//         text: "I'm here for your health concerns! 🏥\n\n**I can help with:**\n• Pregnancy & maternal health\n• Vaccination schedules\n• Menstrual health issues\n• General wellness tips\n• Finding nearby health centers\n\n⚠️ Remember: For serious medical issues, please consult a qualified doctor.\n\nWhat would you like to know?",
//         hasVideo: false
//       };
//     }

//     // Emergency/Safety
//     if (lowerQuery.includes("emergency") || lowerQuery.includes("help") || lowerQuery.includes("danger") || lowerQuery.includes("violence")) {
//       return {
//         text: "🚨 **Emergency Support Available**\n\n**Immediate Helplines:**\n• Women Helpline: **1091**\n• Domestic Violence: **181**\n• Police: **100**\n• Legal Aid: **15100**\n\nI can also help you with:\n• Safety planning\n• Understanding your legal options\n• Finding nearby support centers\n• Emotional support resources\n\nAre you safe right now? How can I help?",
//         hasVideo: false
//       };
//     }

//     // Motivation
//     if (lowerQuery.includes("motivat") || lowerQuery.includes("inspire") || lowerQuery.includes("प्रेरणा")) {
//       return {
//         text: "You are stronger than you think! 💪✨\n\n**Daily Reminder:**\nEvery small step counts. Your dreams are valid, your voice matters, and you have the power to create change.\n\n**Remember:**\n• Progress, not perfection\n• Your journey is unique\n• Celebrate small wins\n• Keep learning and growing\n\n\"एक सशक्त महिला = एक सशक्त समाज\"\n(An empowered woman = An empowered society)\n\nWhat goal are you working towards today?",
//         hasVideo: true,
//         videoTitle: "Daily Motivation for Women"
//       };
//     }

//     // Default response
//     return {
//       text: "I'm here to help you! I can assist with:\n\n• 📚 Government schemes & benefits\n• 🏥 Health & medical guidance\n• 💼 Career & job opportunities\n• 🎓 Education & study help\n• 📅 Period tracking\n• ⚖️ Legal rights\n• 🚨 Emergency support\n• 🍳 Daily tips & recipes\n\nJust ask me anything in Hindi or English!",
//       hasVideo: false
//     };
//   };

//   const handleSendMessage = () => {
//     if (!inputText.trim()) return;

//     // Add user message
//     const userMessage = {
//       type: "user",
//       text: inputText,
//       timestamp: new Date()
//     };
//     setMessages(prev => [...prev, userMessage]);
//     setInputText("");
//     setIsProcessing(true);

//     // Simulate AI processing and response
//     setTimeout(() => {
//       const response = generateAIResponse(inputText);
//       const botMessage = {
//         type: "bot",
//         text: response.text,
//         timestamp: new Date(),
//         hasVideo: response.hasVideo,
//         videoTitle: response.videoTitle
//       };
//       setMessages(prev => [...prev, botMessage]);
//       setIsProcessing(false);
//     }, 1500);
//   };

//   const handleQuickAction = (actionText) => {
//     setInputText(actionText);
//     handleSendMessage();
//   };

//   const handleVoiceInput = () => {
//     setIsRecording(!isRecording);

//     if (!isRecording) {
//       // Simulate voice recording
//       setTimeout(() => {
//         setIsRecording(false);
//         const voiceQuery = selectedLanguage === "hi"
//           ? "मुझे सरकारी योजना के बारे में बताओ"
//           : "Tell me about government schemes";
//         setInputText(voiceQuery);

//         // Auto-send after voice input
//         setTimeout(() => {
//           handleSendMessage();
//         }, 500);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-6 border border-pink-200">
//             <Sparkles className="w-5 h-5 text-pink-600" />
//             <span className="text-pink-600 font-semibold">AI-Powered Voice + Chat Assistant</span>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 mb-4">
//             Meet Sakhi
//           </h1>
//           <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-8">
//             Your personal AI guide for schemes, health, career, safety & everything else.
//             <br />
//             <span className="font-semibold text-pink-600">Speak or type in Hindi/English</span> —
//             Get instant video guidance! 🎥
//           </p>

//           {/* Feature Highlights */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
//             {[
//               { icon: <Mic className="w-6 h-6" />, text: "Voice Input", color: "pink" },
//               { icon: <Video className="w-6 h-6" />, text: "Video Responses", color: "purple" },
//               { icon: <Globe className="w-6 h-6" />, text: "Hindi + English", color: "pink" },
//               { icon: <Sparkles className="w-6 h-6" />, text: "24/7 Available", color: "purple" }
//             ].map((item, i) => (
//               <div key={i} className={`bg-white rounded-xl p-4 shadow-md border border-${item.color}-100`}>
//                 <div className={`text-${item.color}-600 mb-2 flex justify-center`}>{item.icon}</div>
//                 <div className="text-sm font-semibold text-gray-700">{item.text}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* What Sakhi Can Do */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {[
//             {
//               icon: <BookOpen className="w-8 h-8" />,
//               title: "Explain Schemes",
//               desc: "Government schemes, scholarships, subsidies simplified in Hindi & English",
//               color: "from-pink-500 to-rose-500"
//             },
//             {
//               icon: <Stethoscope className="w-8 h-8" />,
//               title: "Health Guidance",
//               desc: "Menstrual health, pregnancy support, vaccination info, mental wellness",
//               color: "from-purple-500 to-indigo-500"
//             },
//             {
//               icon: <GraduationCap className="w-8 h-8" />,
//               title: "Study & Career",
//               desc: "Assignment help, study tips, resume building, job suggestions, skill growth",
//               color: "from-pink-500 to-purple-500"
//             },
//             {
//               icon: <ShieldAlert className="w-8 h-8" />,
//               title: "Safety Support",
//               desc: "Emergency guidance, helplines, rights information, safety planning",
//               color: "from-red-500 to-rose-500"
//             }
//           ].map((feature, i) => (
//             <div key={i} className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
//               <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//               <p className="text-white/90 text-sm">{feature.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Voice to Video Process */}
//         <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl p-8 mb-12 text-white">
//           <h3 className="text-3xl font-bold mb-6 text-center">How Voice-to-Video Works 🎬</h3>
//           <div className="grid md:grid-cols-4 gap-4">
//             {[
//               { step: "1", icon: <Mic className="w-6 h-6" />, text: "Speak Your Question", desc: "Hindi or English" },
//               { step: "2", icon: <FileText className="w-6 h-6" />, text: "Voice → Text", desc: "AI converts speech" },
//               { step: "3", icon: <Sparkles className="w-6 h-6" />, text: "AI Processing", desc: "Understands your need" },
//               { step: "4", icon: <Video className="w-6 h-6" />, text: "Video Generated", desc: "Watch personalized guide" }
//             ].map((item, i) => (
//               <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
//                 <div className="bg-white text-pink-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
//                   {item.step}
//                 </div>
//                 <div className="text-white mb-2">{item.icon}</div>
//                 <div className="font-bold mb-1">{item.text}</div>
//                 <div className="text-sm text-white/80">{item.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chat Interface */}
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-pink-100 mb-12">
//           {/* Chat Header */}
//           <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 p-6 text-white">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center">
//                   <MessageCircle className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">Chat with Sakhi</h3>
//                   <p className="text-white/80 text-sm">Online • Responds instantly</p>
//                 </div>
//               </div>

//               {/* Language Toggle */}
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => setSelectedLanguage("en")}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     selectedLanguage === "en"
//                       ? "bg-white text-pink-600"
//                       : "bg-white/20 text-white hover:bg-white/30"
//                   }`}
//                 >
//                   English
//                 </button>
//                 <button
//                   onClick={() => setSelectedLanguage("hi")}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                     selectedLanguage === "hi"
//                       ? "bg-white text-pink-600"
//                       : "bg-white/20 text-white hover:bg-white/30"
//                   }`}
//                 >
//                   हिंदी
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Messages Container */}
//           <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-pink-50/30 to-purple-50/30">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-md px-4 py-3 rounded-2xl ${
//                     message.type === "user"
//                       ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
//                       : "bg-white shadow-md border border-pink-100 text-gray-800"
//                   }`}
//                 >
//                   {message.type === "bot" && (
//                     <div className="flex items-center space-x-2 mb-2">
//                       <MessageCircle className="w-4 h-4 text-pink-600" />
//                       <span className="font-semibold text-pink-600">Sakhi</span>
//                     </div>
//                   )}
//                   <p className="whitespace-pre-line text-sm leading-relaxed">{message.text}</p>

//                   {message.hasVideo && (
//                     <div className="mt-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-3 border border-pink-200">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <Video className="w-4 h-4 text-purple-600" />
//                         <span className="text-xs font-semibold text-purple-600">Video Available</span>
//                       </div>
//                       <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white w-full py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
//                         <Video className="w-4 h-4" />
//                         <span>Watch: {message.videoTitle}</span>
//                       </button>
//                     </div>
//                   )}

//                   <p className="text-xs opacity-60 mt-2">
//                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {isProcessing && (
//               <div className="flex justify-start">
//                 <div className="bg-white shadow-md border border-pink-100 px-4 py-3 rounded-2xl">
//                   <div className="flex items-center space-x-2">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
//                       <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
//                     </div>
//                     <span className="text-sm text-gray-600">Sakhi is thinking...</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Quick Actions */}
//           <div className="px-6 py-4 bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-100">
//             <p className="text-sm font-semibold text-gray-700 mb-3">Quick Actions:</p>
//             <div className="flex flex-wrap gap-2">
//               {quickActions.slice(0, 6).map((action, i) => (
//                 <button
//                   key={i}
//                   onClick={() => handleQuickAction(action.text)}
//                   className="bg-white hover:bg-pink-50 border border-pink-200 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 flex items-center space-x-1 transition-all hover:shadow-md"
//                 >
//                   {action.icon}
//                   <span>{action.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Input Area */}
//           <div className="p-6 bg-white border-t-2 border-pink-100">
//             <div className="flex items-center space-x-3">
//               {/* Voice Input Button */}
//               <button
//                 onClick={handleVoiceInput}
//                 className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
//                   isRecording
//                     ? "bg-red-500 text-white animate-pulse"
//                     : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg"
//                 }`}
//               >
//                 {isRecording ? <Volume2 className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
//               </button>

//               {/* Text Input */}
//               <input
//                 type="text"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder={selectedLanguage === "hi" ? "अपना सवाल लिखें..." : "Type your question..."}
//                 className="flex-1 px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none text-gray-700"
//               />

//               {/* Send Button */}
//               <button
//                 onClick={handleSendMessage}
//                 disabled={!inputText.trim()}
//                 className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>

//             {isRecording && (
//               <p className="text-sm text-red-600 mt-2 flex items-center space-x-2">
//                 <Volume2 className="w-4 h-4 animate-pulse" />
//                 <span>Listening... Speak your question in {selectedLanguage === "hi" ? "Hindi" : "English"}</span>
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Daily Motivation */}
//         <div className="mt-12 text-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 border-2 border-pink-200">
//           <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
//           <h3 className="text-2xl font-bold text-gray-900 mb-3">Daily Motivation</h3>
//           <p className="text-lg text-gray-700 italic max-w-2xl mx-auto">
//             "तुम वो सब कुछ हो जो तुम्हें चाहिए। अपने अंदर की ताकत को पहचानो।"
//             <br />
//             <span className="text-pink-600 font-semibold">
//               "You are everything you need. Recognize the strength within you."
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sakhi;
