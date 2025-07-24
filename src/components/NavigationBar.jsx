import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  };

  // Determine if Watchlist is active
  const isWatchlistActive = location.pathname === "/watchlist";

  return (
    <nav className="backdrop-blur bg-black/60 rounded-2xl shadow-lg px-6 py-2 flex space-x-6 text-lg font-semibold items-center border border-white/10">
      {navItems.map((item) => {
        const isActive = item.isRoute
          ? isWatchlistActive
          : activeSection === item.id;
        return (
          <a
            key={item.id}
            href={item.isRoute ? "/watchlist" : `#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id, item.isRoute)}
            className={`relative px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer
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
  );
};

export default NavigationBar;