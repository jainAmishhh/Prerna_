import React from "react";
import {
  Heart,
  GraduationCap,
  Utensils,
  Sparkles,
  Flower2,
  Star,
  Users,
  Award,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <span className="text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  {t("title")}
                </span>
              </span>
            </div>

            {/* Nav Items */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {t("home")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {t("about")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {t("schemes")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {t("services")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {t("blogs")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {t("contact")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")
                }
              >
                🌐 {i18n.language === "en" ? "हिंदी" : "English"}
              </button>

              <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-2.5 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold flex items-center space-x-2">
                {t("login")}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-8">
              <h3 className="text-4xl md:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600">
                {t("title")} –
              </h3>

              <p className="text-gray-900 text-xl md:text-2xl font-semibold mt-2">
                {t("hero_title")}
              </p>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4 max-w-2xl">
                {t("hero_description")}
                <span className="block mt-3 text-pink-600 font-semibold text-lg md:text-xl">
                  {t("dream_to_mission")}
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                  {t("explore_now")}
                </button>
                <button className="border-2 border-pink-400 text-pink-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition-all flex items-center space-x-2 transform hover:scale-105">
                  <Phone size={20} />
                  <span>Talk to Sakhi AI</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-3 rounded-full">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1M+</div>
                    <div className="text-sm text-gray-600">Women Empowered</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-full">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">
                      Schemes Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image + Design */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-tl-full rounded-tr-[40%] rounded-bl-[30%] rounded-br-[50%] overflow-hidden shadow-2xl">
                  <div className="relative">
                    <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-90"></div>

                    <img
                      src="https://images.unsplash.com/photo-1759398454483-856641e0e013?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=700&q=80"
                      alt="Happy woman"
                      className="relative z-10 w-full h-[500px] object-cover opacity-95"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600/40 to-transparent"></div>
                  </div>
                </div>

                <div className="absolute bottom-7 right-0 transform translate-x-8 z-10">
                  <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white px-8 py-6 rounded-lg shadow-2xl">
                    <div className="text-4xl font-bold mb-2">1M+ Women</div>
                    <div className="text-lg border-t-2 border-white/30 pt-2">
                      Empowered with knowledge & support
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute top-32 left-0 w-8 h-8 bg-rose-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-32 left-12 w-10 h-10 bg-yellow-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-12 right-32 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-0">
        {/* Schemes */}
        <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 p-14 min-h-[350px] overflow-hidden hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full opacity-10 transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 rounded-full opacity-10 transform -translate-x-20 translate-y-20"></div>

          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="text-white" size={40} />
            </div>
            <h3 className="text-white text-3xl font-bold mb-3">
              Scholarships &
            </h3>
            <h3 className="text-white text-3xl font-bold mb-4">
              Opportunities
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Find personalised careers, jobs & govt schemes tailored for you
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-all font-bold flex items-center space-x-2 group-hover:shadow-xl transform group-hover:translate-x-2 duration-300">
              <span>Explore</span>
              <Sparkles size={18} />
            </button>
          </div>
        </div>

        {/* Health */}
        <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 p-14 min-h-[350px] overflow-hidden hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-400 rounded-full opacity-10 transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-400 rounded-full opacity-10 transform -translate-x-20 translate-y-20"></div>

          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
              <Heart
                className="text-white fill-white animate-pulse"
                size={40}
              />
            </div>
            <h3 className="text-white text-3xl font-bold mb-3">Health &</h3>
            <h3 className="text-white text-3xl font-bold mb-4">Wellness</h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Menstrual hygiene, vaccination & mental health support
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-all font-bold flex items-center space-x-2 group-hover:shadow-xl transform group-hover:translate-x-2 duration-300">
              <span>Learn More</span>
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Nutrition */}
        <div className="relative bg-gradient-to-br from-rose-500 via-red-500 to-rose-600 p-14 min-h-[350px] overflow-hidden hover:shadow-2xl transition-all duration-300 group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-400 rounded-full opacity-10 transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-400 rounded-full opacity-10 transform -translate-x-20 translate-y-20"></div>

          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
              <Utensils className="text-white" size={40} />
            </div>
            <h3 className="text-white text-3xl font-bold mb-3">Nutrition &</h3>
            <h3 className="text-white text-3xl font-bold mb-4">Food Support</h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Government food schemes & rural nutrition programs
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-full hover:bg-rose-50 transition-all font-bold flex items-center space-x-2 group-hover:shadow-xl transform group-hover:translate-x-2 duration-300">
              <span>Know More</span>
              <Utensils size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
