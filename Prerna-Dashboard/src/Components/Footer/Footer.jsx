import React from "react";
import { Activity, Users, Heart, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <div className="bg-gradient-to-r from-indigo-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Prerna
              </h3>
              <p className="text-white/80 mb-4">
                Inspiring women through knowledge, growth, and empowerment
                resources.
              </p>
              <div className="flex space-x-4">
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition cursor-pointer">
                  <Activity size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition cursor-pointer">
                  <Users size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition cursor-pointer">
                  <Heart size={20} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer transition">
                  About Prerna
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Programs & Support
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Community Stories
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Join Us
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer transition">
                  Government Schemes
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Health & Wellness
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Legal Assistance
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Career Help
                </li>
              </ul>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h4 className="font-bold text-lg mb-4">Emergency Contacts</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-pink-400" />
                  <span className="text-white/80">
                    Women Helpline: <strong className="text-white">181</strong>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-pink-400" />
                  <span className="text-white/80">
                    Health Helpline: <strong className="text-white">104</strong>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-pink-400" />
                  <span className="text-white/80">
                    Police: <strong className="text-white">100</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>
              © 2025 Prerna Platform. Empowering women with opportunities and
              guidance.
            </p>
            <p className="mt-2 text-sm">
              प्रेरणा से प्रगति • Progress Through Inspiration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
