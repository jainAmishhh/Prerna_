import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsFloating(true);
      else setIsFloating(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-lg border-b border-pink-100 z-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600">
            {t("title")}
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { path: "/", label: t("home") },
            { path: "/schemes", label: t("schemes") },
            { path: "/health", label: t("health") },
            { path: "/guidance", label: t("guidance") },
            { path: "/blogs", label: t("blogs") },
            { path: "/about-section", label: t("about") },
            { path: "/support", label: t("contact") },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                `
                  text-gray-700 font-medium transition-colors relative group
                  ${
                    isActive
                      ? "text-pink-600 font-semibold"
                      : "hover:text-pink-600"
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {/* Active + Hover underline animation */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-pink-500 transition-all
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Language + Login */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")
            }
          >
            🌐 {i18n.language === "en" ? "हिंदी" : "English"}
          </button>

          <NavLink
            to="/auth"
            className="bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 text-white px-8 py-2.5 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
          >
            {t("login")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
