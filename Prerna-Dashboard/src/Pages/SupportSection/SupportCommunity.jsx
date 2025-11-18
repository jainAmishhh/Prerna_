import React from "react";
import { ExternalLink, Users } from "lucide-react";
import { communitySupport } from "./SupportConstants";

const SupportCommunity = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full mb-4 font-semibold text-sm">
            <Users size={16} className="mr-2" /> Stronger Together
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join a Supportive Community
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Connect with support groups, NGOs, and safe spaces where women uplift each other.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communitySupport.map((support, i) => (
          <div key={i} className="group bg-white rounded-4xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col">
            {/* Image Area */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                <img 
                    src={support.image} 
                    alt={support.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute bottom-4 right-4 z-20 bg-white p-2.5 rounded-xl shadow-lg text-${support.color}-600 group-hover:rotate-6 transition-transform`}>
                    {React.cloneElement(support.icon, { className: `w-6 h-6 text-${support.color}-600` })}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-8 grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {support.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                  {support.description}
              </p>
              <button className={`w-full py-3 rounded-xl border-2 border-${support.color}-100 text-${support.color}-600 font-bold text-sm hover:bg-${support.color}-50 transition-all flex items-center justify-center gap-2 group/btn`}>
                <span>{support.action}</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportCommunity;