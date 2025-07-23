import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieId, movieTitle }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  if (!posterPath) return null;

  const handleMovieClick = () => {
    navigate(`/movie/${movieId}`);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation(); // Prevent parent click
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="w-48 pr-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 relative group"
      onClick={handleMovieClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={IMG_CDN_URL + posterPath}
          alt={movieTitle || "Movie Poster"}
          className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        />

        {/* Hover Play Button Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={handlePlayClick}
            aria-label={`Play ${movieTitle}`}
            className="bg-red-600 hover:bg-red-700 p-4 rounded-full transform transition-transform duration-300 hover:scale-110 shadow-lg"
          >
            <Play className="w-8 h-8 text-white fill-white" />
          </button>
        </div>
      </div>

      {/* Movie Title */}
      <div className="mt-2 px-1">
        <h3 className="text-white text-sm font-medium truncate">
          {movieTitle}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
