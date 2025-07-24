import React from "react";

const navItems = [
  { label: "Now Playing", id: "now-playing" },
  { label: "Top Rated", id: "top-rated" },
  { label: "Popular", id: "popular" },
  { label: "Upcoming", id: "upcoming" },
  { label: "Horror", id: "horror" },
];

const handleNavClick = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NavigationBar = () => {
  return (
    <nav className="flex space-x-6 text-lg font-semibold text-white">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleNavClick(e, item.id)}
          className="hover:text-red-500 transition-colors duration-200 cursor-pointer"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationBar;