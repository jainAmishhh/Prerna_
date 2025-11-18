import React from "react";
import { AlertTriangle, Phone, Video } from "lucide-react";

const SupportEmergency = () => {
  return (
    <div className="mb-16 relative group">
      {/* Pulsing Background Effect */}
      <div className="absolute -inset-1 bg-red-500 rounded-4xl opacity-30 group-hover:opacity-50 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      
      <div className="relative bg-linear-to-r from-red-600 to-rose-600 rounded-4xl p-8 md:p-10 text-white shadow-2xl overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-3 mb-4 bg-red-800/30 px-4 py-1.5 rounded-full border border-red-400/30 backdrop-blur-sm">
              <AlertTriangle className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="font-bold text-yellow-100 tracking-wide uppercase text-sm">Emergency SOS Mode</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-red-100 mb-6 max-w-xl">
              If you are in danger, do not hesitate. Our emergency services are linked directly to local authorities.
            </p>
            
            {/* Quick Numbers Grid */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { label: "Women Helpline", num: "1091" },
                { label: "Police", num: "100" },
                { label: "Domestic Violence", num: "181" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <div className="text-xs text-red-200 uppercase tracking-wider font-semibold mb-0.5">{item.label}</div>
                  <div className="text-2xl font-bold">{item.num}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-red-900/20">
              <Phone className="w-6 h-6 fill-red-600" />
              <span>Call 112 Now</span>
            </button>
            <button className="flex-1 lg:flex-none bg-red-800/40 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-800/60 transition-all flex items-center justify-center space-x-2">
              <Video className="w-5 h-5" />
              <span>Safety Guide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportEmergency;