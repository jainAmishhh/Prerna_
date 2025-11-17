import React from "react";
import TestimonialCard from "./TestimonialCard";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

export default function TestimonialSection() {

  const testimonials = [
    { name: "Priya, Age 16", location: "Rural Bihar", story: "Found scholarship using voice search", icon: <GraduationCap /> },
    { name: "Anita, Age 28", location: "Mumbai", story: "Started business with loan guidance", icon: <Briefcase /> },
    { name: "Lakshmi, Age 45", location: "Karnataka", story: "Accessed health schemes in her language", icon: <Heart /> },
  ];

  return (
    <div className="bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb 12">
          <h2 className="text-5xl font-bold text-white">Empowering Women Across India</h2>
          <p className="text-white/90 text-xl">Real stories of transformation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

      </div>
    </div>
  );
}
