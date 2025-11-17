import React from "react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all">
      <div className="bg-white text-purple-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
        {testimonial.icon}
      </div>
      <p className="text-white text-lg mb-4 italic">"{testimonial.story}"</p>
      <div className="text-center">
        <p className="text-white font-bold">{testimonial.name}</p>
        <p className="text-white/80 text-sm">{testimonial.location}</p>
      </div>
    </div>
  );
}
