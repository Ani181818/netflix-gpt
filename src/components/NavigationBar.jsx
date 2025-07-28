import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Now Playing", id: "now-playing" },
  { label: "Top Rated", id: "top-rated" },
  { label: "Popular", id: "popular" },
  { label: "Upcoming", id: "upcoming" },
  { label: "Horror", id: "horror" },
  { label: "Watchlist", id: "watchlist", isRoute: true },
];

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, id, isRoute) => {
    e.preventDefault();
    if (isRoute) {
      navigate("/watchlist");
    } else {
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  // Determine if Watchlist is active
  const isWatchlistActive = location.pathname === "/watchlist";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-white hover:text-red-400 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex backdrop-blur bg-black/60 rounded-2xl shadow-lg px-4 sm:px-6 py-2 space-x-4 sm:space-x-6 text-sm sm:text-base lg:text-lg font-semibold items-center border border-white/10">
        {navItems.map((item) => {
          const isActive = item.isRoute
            ? isWatchlistActive
            : activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.isRoute ? "/watchlist" : `#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id, item.isRoute)}
              className={`relative px-2 sm:px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap
                ${isActive ? "bg-red-600 text-white shadow-md" : "hover:bg-white/10 hover:text-red-400 text-gray-200"}
              `}
            >
              {item.label}
              {isActive && (
                <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow"></span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur border border-white/10 rounded-lg shadow-xl z-50">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = item.isRoute
                ? isWatchlistActive
                : activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.isRoute ? "/watchlist" : `#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id, item.isRoute)}
                  className={`relative px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer text-center
                    ${isActive ? "bg-red-600 text-white shadow-md" : "hover:bg-white/10 hover:text-red-400 text-gray-200"}
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full shadow"></span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default NavigationBar;