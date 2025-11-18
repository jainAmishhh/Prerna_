import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Mail } from "lucide-react";
import { faqs } from "./SupportConstants";

const SupportFAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ["All", ...new Set(faqs.map(f => f.category))];
  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden mb-20">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-2xl">
                    <HelpCircle className="w-8 h-8 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => { setSelectedCategory(cat); setOpenIndex(null); }}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                            selectedCategory === cat 
                            ? "bg-gray-900 text-white shadow-md" 
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-4">
            {filteredFaqs.map((faq, i) => (
                <div 
                    key={i} 
                    className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                        openIndex === i ? "bg-pink-50/50 border-pink-200 shadow-sm" : "hover:border-pink-200 hover:bg-gray-50"
                    }`}
                >
                    <button 
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left"
                    >
                        <span className={`font-bold text-lg ${openIndex === i ? "text-pink-700" : "text-gray-800"}`}>
                            {faq.q}
                        </span>
                        {openIndex === i ? <ChevronUp className="text-pink-600" /> : <ChevronDown className="text-gray-400" />}
                    </button>
                    
                    <div className={`px-5 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                        openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
                <p className="font-bold text-gray-900">Still have questions?</p>
                <p className="text-sm text-gray-500">Can't find the answer you're looking for?</p>
            </div>
            <div className="flex gap-3">
                <button className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2">
                    <MessageCircle size={18} /> Chat with us
                </button>
                <button className="bg-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-lg shadow-purple-200">
                    <Mail size={18} /> Email Team
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SupportFAQ;