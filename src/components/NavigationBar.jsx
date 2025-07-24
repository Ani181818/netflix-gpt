import { useState } from "react";

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("now-playing");

  const navigationItems = [
    { id: "now-playing", label: "Now Playing", icon: "🎬" },
    { id: "top-rated", label: "Top Rated", icon: "⭐" },
    { id: "popular", label: "Popular", icon: "🔥" },
    { id: "upcoming", label: "Upcoming", icon: "🎭" },
    { id: "horror", label: "Horror Movies", icon: "👻" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
        <nav className="flex items-center">
          <div className="flex space-x-1 bg-gray-900/50 rounded-full p-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "bg-red-600 text-white shadow-lg transform scale-105"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }
                `}
              >
                <span className="text-base">{item.icon}</span>
                <span className="hidden lg:inline">{item.label}</span>
              </button>
            ))}
          </div>
  );
};

export default NavigationBar;