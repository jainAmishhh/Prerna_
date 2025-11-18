import React, { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle, MessageCircle, Mic, MapPin, ChevronRight, Video } from "lucide-react";

const SupportContact = () => {
  const [formStatus, setFormStatus] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 mb-16">
      {/* Left: Contact Form */}
      <div className="lg:col-span-2 bg-white rounded-4xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-pink-500 via-purple-500 to-pink-500"></div>
        
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-pink-50 p-3 rounded-2xl">
             <Mail className="w-8 h-8 text-pink-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
            <p className="text-gray-500 text-sm">Our support team responds within 24 hours</p>
          </div>
        </div>

        {formStatus === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h4>
            <p className="text-green-600">We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Name</label>
                  <input type="text" required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                  <input type="email" required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Topic</label>
                <select className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Report an Issue</option>
                  <option>Feedback</option>
                  <option>Technical Support</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                <textarea rows="4" required className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button disabled={formStatus === "submitting"} className="w-full py-4 rounded-xl bg-linear-to-r from-pink-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70">
               {formStatus === "submitting" ? "Sending..." : <><Send size={20} /> Send Message</>}
            </button>
          </form>
        )}
        
        <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="text-pink-500" /> support@prerna.in
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="text-pink-500" /> 1800-123-4567
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} className="text-pink-500" /> 24/7 Support
            </div>
        </div>
      </div>

      {/* Right: Quick Actions */}
      <div className="space-y-6">
        {/* Sakhi Card */}
        <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ask Sakhi</h3>
                <p className="text-white/80 text-sm mb-6">Instant AI guidance in Hindi or English. Just speak your query.</p>
                <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
                    <Mic size={18} /> Talk to Sakhi
                </button>
            </div>
        </div>

        {/* Nearby Help */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all group">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-100 p-2.5 rounded-lg text-pink-600">
                    <MapPin size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Nearby Help</h3>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-gray-600">
                {["Police Stations", "Legal Aid Centers", "NGO Offices"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div> {item}
                    </li>
                ))}
            </ul>
            <button className="w-full py-2.5 rounded-lg border border-pink-200 text-pink-600 font-semibold hover:bg-pink-50 transition-colors text-sm">
                View on Map
            </button>
        </div>

        {/* Quick Guides */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all">
             <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2.5 rounded-lg text-purple-600">
                    <Video size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Video Guides</h3>
            </div>
            <div className="space-y-2">
                {["Reporting Harassment", "Filing FIR Guide", "Safety Rights"].map((guide, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-purple-50 text-sm font-medium text-gray-700 hover:text-purple-700 transition-all group">
                        {guide}
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-purple-500" />
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;