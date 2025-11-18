import React from "react";
import { HeartHandshake } from "lucide-react";
import SupportEmergency from "./SupportEmergency";
import SupportContact from "./SupportContact";
import SupportHelplines from "./SupportHelplines";
import SupportCommunity from "./SupportCommunity";
import SupportFAQ from "./SupportFAQ";

const SupportSection = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-50 border border-pink-100 px-6 py-2 rounded-full mb-6 shadow-sm">
            <HeartHandshake className="w-5 h-5 text-pink-600" />
            <span className="text-pink-700 font-bold text-sm tracking-wide uppercase">24/7 Support Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-purple-600 to-pink-600 mb-6 tracking-tight">
            We're Here for You
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Emergency support, helplines, guidance, and a community that cares.
            <br className="hidden md:block" />
            <span className="font-semibold text-pink-600"> You're never alone.</span>
          </p>
        </div>

        <SupportEmergency />
        <SupportContact />
        <SupportHelplines />
        <SupportCommunity />
        <SupportFAQ />
        
      </div>
    </div>
  );
};

export default SupportSection;