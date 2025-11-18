import React from 'react';
import { Mic, Video, Globe, Sparkles, Heart } from "lucide-react";

const featureIcons = [
  { icon: <Mic className="w-6 h-6" />, text: "Voice Input", color: "pink", iconColor: "text-pink-600" },
  { icon: <Video className="w-6 h-6" />, text: "Video Guides", color: "purple", iconColor: "text-purple-600" },
  { icon: <Globe className="w-6 h-6" />, text: "Hindi + English", color: "pink", iconColor: "text-pink-600" },
  { icon: <Sparkles className="w-6 h-6" />, text: "24/7 Available", color: "purple", iconColor: "text-purple-600" }
];

const SakhiHeader = () => (
  <div className="text-center mb-12 p-8 rounded-3xl bg-white/50 backdrop-blur-sm shadow-xl border border-pink-100">
    
    {/* Top Badge - Enhanced Shadow */}
    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full mb-6 border border-pink-300 shadow-md">
      <Heart className="w-5 h-5 text-pink-600 fill-pink-600/20" /> {/* Changed Sparkles to Heart for warmth */}
      <span className="text-pink-600 font-bold tracking-wider">AI-Powered Companion</span>
    </div>
    
    {/* Main Title - Added Text Shadow/Glow */}
    <h1 
      className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 mb-4"
      style={{ textShadow: '2px 2px 8px rgba(236, 72, 153, 0.4)' }} // Pink shadow effect
    >
      Meet Sakhi
    </h1>
    
    {/* Tagline - Enhanced Font Weight */}
    <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-10 font-medium italic">
      Your **trusted personal AI guide** for schemes, health, career, safety & everything else.
      <br />
      <span className="font-extrabold text-purple-600">Speak or type in Hindi/English</span> — 
      Get **instant video guidance!** 🎥
    </p>

    {/* Feature Highlights (Icons) - Enhanced Card Styling */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
      {featureIcons.map((item, i) => (
        <div 
          key={i} 
          className={`bg-white rounded-2xl p-4 shadow-lg border-2 border-pink-200 
                      transition-all duration-300 
                      hover:shadow-xl hover:scale-[1.03] hover:border-purple-400 cursor-pointer`}
        >
          <div className={`${item.iconColor} mb-2 flex justify-center`}>
            {item.icon}
          </div>
          <div className="text-sm font-bold text-gray-800">{item.text}</div>
        </div>
      ))}
    </div>
  </div>
);

export default SakhiHeader;