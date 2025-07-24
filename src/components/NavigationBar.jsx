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
    <div className="sticky top-16 z-30 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-center py-4">
          <div className="flex space-x-1 bg-gray-900/50 rounded-full p-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "bg-red-600 text-white shadow-lg transform scale-105"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;