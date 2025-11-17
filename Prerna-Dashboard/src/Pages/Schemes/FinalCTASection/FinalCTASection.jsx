import React from "react";
import { Smile, Mic, MessageCircle, CheckCircle } from "lucide-react";

export default function FinalCTASection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-linear-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl p-16 text-center relative overflow-hidden">
          <Smile className="text-yellow-300 mx-auto mb-6" size={64} />
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-2xl max-w-3xl mx-auto mb-10">
            Join millions of women discovering their rights and opportunities
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

          <div className="mt-12 flex justify-center gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <CheckCircle size={24} />
              <span className="font-semibold">Bilingual Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
