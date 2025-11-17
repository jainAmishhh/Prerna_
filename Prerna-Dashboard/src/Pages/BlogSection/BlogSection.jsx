import React, { useState } from "react";
import { 
  Calendar, User, ArrowRight, Bookmark, Heart, MessageCircle, 
  Video, Mic, Globe, Sparkles, TrendingUp, Award, Shield,
  BookOpen, Users, Briefcase, Baby, GraduationCap, Filter,
  BadgeCheck
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Self-Defence Techniques Every Woman Should Know",
    titleHindi: "5 आत्मरक्षा तकनीकें जो हर महिला को पता होनी चाहिए",
    category: "Safety • सुरक्षा",
    categoryColor: "red",
    date: "Nov 14, 2025",
    author: "Prerna Team",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
    description: "Learn powerful and easy-to-remember self-defence moves you can use in emergencies. Includes step-by-step video guides.",
    descriptionHindi: "आपातकालीन स्थितियों में उपयोग की जा सकने वाली शक्तिशाली और याद रखने में आसान आत्मरक्षा चालें सीखें।",
    tags: ["Video Guide", "Emergency", "Safety Tips"],
    hasVideo: true,
    ageGroup: "13+",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Government Schemes Every Woman Must Know in 2025",
    titleHindi: "2025 में हर महिला को जाननी चाहिए ये सरकारी योजनाएं",
    category: "Schemes • योजनाएं",
    categoryColor: "blue",
    date: "Nov 10, 2025",
    author: "Sakhi AI",
    image: "https://images.unsplash.com/photo-1581574208899-65b8d4b3962a",
    description: "From Stand-Up India to maternity benefits, here are the top schemes for students, mothers, workers, and entrepreneurs.",
    descriptionHindi: "स्टैंड अप इंडिया से लेकर मातृत्व लाभ तक, छात्राओं, माताओं, कामकाजी महिलाओं और उद्यमियों के लिए शीर्ष योजनाएं।",
    tags: ["Financial Aid", "Education", "Entrepreneurship"],
    hasVideo: true,
    ageGroup: "All Ages",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "How to Take Care of Your Mental Health",
    titleHindi: "अपने मानसिक स्वास्थ्य की देखभाल कैसे करें",
    category: "Health • स्वास्थ्य",
    categoryColor: "pink",
    date: "Oct 29, 2025",
    author: "Dr. Aditi Sharma",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    description: "Daily habits, stress-management tips, and emotional wellness techniques recommended by experts.",
    descriptionHindi: "विशेषज्ञों द्वारा अनुशंसित दैनिक आदतें, तनाव प्रबंधन युक्तियाँ और भावनात्मक स्वास्थ्य तकनीकें।",
    tags: ["Wellness", "Self-Care", "Expert Advice"],
    hasVideo: false,
    ageGroup: "All Ages",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "From Home Kitchen to Business: Success Stories",
    titleHindi: "घर की रसोई से व्यवसाय तक: सफलता की कहानियां",
    category: "Career • करियर",
    categoryColor: "purple",
    date: "Nov 8, 2025",
    author: "Neha Entrepreneurs",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad",
    description: "Inspiring journeys of women who turned their skills into successful businesses. Learn how you can start too!",
    descriptionHindi: "उन महिलाओं की प्रेरक यात्राएं जिन्होंने अपने कौशल को सफल व्यवसाय में बदल दिया। जानें कि आप भी कैसे शुरुआत कर सकती हैं!",
    tags: ["Entrepreneurship", "Inspiration", "Business Tips"],
    hasVideo: true,
    ageGroup: "18+",
    readTime: "10 min"
  },
  {
    id: 5,
    title: "Complete Guide to Menstrual Health & Hygiene",
    titleHindi: "मासिक धर्म स्वास्थ्य और स्वच्छता की पूरी जानकारी",
    category: "Health • स्वास्थ्य",
    categoryColor: "pink",
    date: "Nov 5, 2025",
    author: "Dr. Priya Mehta",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    description: "Everything about periods, hygiene products, pain management, and breaking the taboo around menstruation.",
    descriptionHindi: "मासिक धर्म, स्वच्छता उत्पादों, दर्द प्रबंधन और मासिक धर्म के आसपास के निषेध को तोड़ने के बारे में सब कुछ।",
    tags: ["Period Care", "Hygiene", "Health Education"],
    hasVideo: true,
    ageGroup: "10+",
    readTime: "7 min"
  },
  {
    id: 6,
    title: "Digital Skills for Rural Women: Getting Started",
    titleHindi: "ग्रामीण महिलाओं के लिए डिजिटल कौशल: शुरुआत कैसे करें",
    category: "Education • शिक्षा",
    categoryColor: "green",
    date: "Nov 1, 2025",
    author: "Tech Didi Initiative",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    description: "Learn smartphone basics, digital payments, online learning, and how technology can transform your life.",
    descriptionHindi: "स्मार्टफोन बेसिक्स, डिजिटल पेमेंट, ऑनलाइन लर्निंग सीखें और जानें कि तकनीक आपके जीवन को कैसे बदल सकती है।",
    tags: ["Digital Literacy", "Rural Focus", "Skill Building"],
    hasVideo: true,
    ageGroup: "All Ages",
    readTime: "12 min"
  }
];

const categories = [
  { name: "All • सभी", value: "all", icon: <Sparkles className="w-4 h-4" />, color: "purple" },
  { name: "Safety • सुरक्षा", value: "Safety", icon: <Shield className="w-4 h-4" />, color: "red" },
  { name: "Health • स्वास्थ्य", value: "Health", icon: <Heart className="w-4 h-4" />, color: "pink" },
  { name: "Schemes • योजनाएं", value: "Schemes", icon: <Award className="w-4 h-4" />, color: "blue" },
  { name: "Career • करियर", value: "Career", icon: <Briefcase className="w-4 h-4" />, color: "purple" },
  { name: "Education • शिक्षा", value: "Education", icon: <GraduationCap className="w-4 h-4" />, color: "green" }
];

const featuredTopics = [
  { 
    title: "Pregnancy & Motherhood", 
    titleHindi: "गर्भावस्था और मातृत्व",
    icon: <Baby className="w-6 h-6" />, 
    color: "from-pink-400 to-rose-400",
    posts: 12 
  },
  { 
    title: "Legal Rights & Support", 
    titleHindi: "कानूनी अधिकार और सहायता",
    icon: <Shield className="w-6 h-6" />, 
    color: "from-purple-400 to-indigo-400",
    posts: 18 
  },
  { 
    title: "Skill Development", 
    titleHindi: "कौशल विकास",
    icon: <TrendingUp className="w-6 h-6" />, 
    color: "from-blue-400 to-cyan-400",
    posts: 25 
  },
  { 
    title: "Success Stories", 
    titleHindi: "सफलता की कहानियां",
    icon: <Award className="w-6 h-6" />, 
    color: "from-orange-400 to-amber-400",
    posts: 30 
  }
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [language, setLanguage] = useState("both"); // both, hindi, english

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.includes(selectedCategory));

  const getCategoryColor = (color) => {
    const colors = {
      red: "from-red-100 to-rose-100 text-red-600 border-red-200",
      blue: "from-blue-100 to-cyan-100 text-blue-600 border-blue-200",
      pink: "from-pink-100 to-purple-100 text-pink-600 border-pink-200",
      purple: "from-purple-100 to-indigo-100 text-purple-600 border-purple-200",
      green: "from-green-100 to-emerald-100 text-green-600 border-green-200"
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-rose-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-linear-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-6 border border-pink-200">
            <BookOpen className="w-5 h-5 text-pink-600" />
            <span className="text-pink-600 font-semibold">ज्ञान और प्रेरणा • Knowledge & Inspiration</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-purple-600 to-pink-600 mb-4">
            कहानियां और मार्गदर्शन
            <br />
            Stories & Guidance
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            शक्तिशाली कहानियां, गाइड और संसाधन - महिलाओं को सशक्त, शिक्षित और समर्थन देने के लिए
            <br />
            <span className="text-base text-gray-600">Powerful stories, guides, and resources to empower, educate, and support women</span>
          </p>

          {/* Language Toggle */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setLanguage("both")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                language === "both"
                  ? "bg-linear-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-white text-gray-700 border-2 border-pink-200"
              }`}
            >
              <Globe className="w-4 h-4 inline mr-2" />
              Both Languages
            </button>
            <button
              onClick={() => setLanguage("hindi")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                language === "hindi"
                  ? "bg-linear-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-white text-gray-700 border-2 border-pink-200"
              }`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLanguage("english")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                language === "english"
                  ? "bg-linear-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-white text-gray-700 border-2 border-pink-200"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* FEATURED TOPICS BANNER */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredTopics.map((topic, i) => (
            <button
              key={i}
              className={`bg-linear-to-br ${topic.color} p-6 rounded-2xl text-white hover:shadow-xl hover:scale-105 transition-all`}
            >
              <div className="mb-3">{topic.icon}</div>
              <h3 className="font-bold text-sm md:text-base mb-1">
                {language === "english" ? topic.title : language === "hindi" ? topic.titleHindi : `${topic.titleHindi} • ${topic.title}`}
              </h3>
              <p className="text-xs text-white/80">{topic.posts} Articles</p>
            </button>
          ))}
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Filter className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-bold text-gray-900">
              {language === "hindi" ? "श्रेणी चुनें" : language === "english" ? "Choose Category" : "श्रेणी चुनें • Choose Category"}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                  selectedCategory === cat.value
                    ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-pink-200 hover:border-pink-400"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* IMAGE with Video Badge */}
              <div className="h-56 w-full overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
                {post.hasVideo && (
                  <div className="absolute top-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-xs font-bold">
                    <Video className="w-3 h-3" />
                    <span>Video Guide</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.ageGroup} • {post.readTime}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <span className={`inline-block bg-linear-to-r ${getCategoryColor(post.categoryColor)} px-4 py-1 rounded-full text-sm font-bold mb-3 border-2`}>
                  {post.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {language === "english" 
                    ? post.title 
                    : language === "hindi" 
                    ? post.titleHindi 
                    : post.titleHindi}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {language === "english" 
                    ? post.description 
                    : language === "hindi" 
                    ? post.descriptionHindi 
                    : post.descriptionHindi}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* AUTHOR & DATE */}
                <div className="flex items-center justify-between text-gray-500 text-xs mb-4 pb-4 border-b border-pink-100">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-pink-600" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-pink-600 font-bold hover:text-pink-700 hover:scale-105 transition-all">
                    <span>{language === "hindi" ? "पढ़ें" : "Read"}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center space-x-3 text-gray-500">
                    <button className="hover:text-red-500 hover:scale-110 transition-all">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="hover:text-purple-500 hover:scale-110 transition-all">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="hover:text-pink-600 hover:scale-110 transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Voice-to-Video Badge */}
                {post.hasVideo && (
                  <div className="mt-4 pt-4 border-t border-pink-100">
                    <div className="flex items-center space-x-2 text-xs text-purple-600 bg-purple-50 px-3 py-2 rounded-lg">
                      <Mic className="w-4 h-4" />
                      <span className="font-semibold">
                        {language === "hindi" 
                          ? "आवाज़ से वीडियो में उपलब्ध" 
                          : "Available in Voice-to-Video"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center">
          <button className="px-10 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-3 mx-auto">
            <span>
              {language === "hindi" 
                ? "सभी ब्लॉग देखें" 
                : language === "english"
                ? "View All Blogs"
                : "सभी ब्लॉग देखें • View All"}
            </span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-gray-600 mt-4 text-sm">
            {language === "hindi"
              ? "500+ लेख • हर उम्र की महिलाओं के लिए"
              : language === "english"
              ? "500+ Articles • For Women of All Ages"
              : "500+ लेख • 500+ Articles • हर उम्र की महिलाओं के लिए"}
          </p>
        </div>

        {/* SAKHI AI PROMPT SECTION */}
        {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-linear-to-br from-pink-500 via-purple-500 to-rose-500 rounded-[60px] p-16 text-center overflow-hidden shadow-2xl">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full transform -translate-x-48 translate-y-48"></div>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle
                className="text-white fill-white animate-pulse"
                size={48}
              />
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Have Questions? Ask Sakhi!
            </h2>

            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Ask our AI assistant any question and get instant video responses
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <button className="bg-white text-pink-600 font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Mic size={22} /> Start with Your Voice
              </button>

              <button className="bg-white/20 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <MessageCircle size={22} />
                <span>Chat with Sakhi</span>
              </button>
            </div>
          </div>
        </div>
      </div>        

        {/* COMMUNITY CONTRIBUTION BANNER */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-200">
          <div className="text-center">
            <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {language === "hindi"
                ? "अपनी कहानी साझा करें"
                : language === "english"
                ? "Share Your Story"
                : "अपनी कहानी साझा करें • Share Your Story"}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === "hindi"
                ? "क्या आपने कुछ हासिल किया है? अपनी सफलता की कहानी, अनुभव या सलाह दूसरी महिलाओं के साथ साझा करें"
                : "Have you achieved something? Share your success story, experience, or advice with other women"}
            </p>
            <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all">
              {language === "hindi" ? "अभी साझा करें" : "Share Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;