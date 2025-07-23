import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({
  posterPath,
  movieId,
  movieTitle,
  voteAverage,
  voteCount,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  if (!posterPath) return null;

  const handleMovieClick = () => {
    navigate(`/movie/${movieId}`);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className={`relative pr-4 cursor-pointer transition-all duration-300 ease-in-out transform ${
        isHovered ? "z-50 scale-110 shadow-2xl" : "scale-100"
      } w-48 min-w-[12rem] h-[22rem]`}
      onClick={handleMovieClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-[80%] overflow-hidden rounded-lg">
        <img
          src={IMG_CDN_URL + posterPath}
          alt={movieTitle}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />

        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={handlePlayClick}
            aria-label={`Play ${movieTitle}`}
            className="bg-red-600 hover:bg-red-700 p-4 rounded-full transform hover:scale-110 shadow-lg"
          >
            <Play className="w-8 h-8 text-white fill-white" />
          </button>
        </div>
      </div>

      {/* Title + Rating Info */}
      <div className="mt-2 px-1 text-white">
        <h3 className="text-sm font-semibold truncate">{movieTitle}</h3>
        {isHovered && (
          <div className="mt-2 text-xs text-gray-300">
            <p>⭐ {voteAverage?.toFixed(1)}/10</p>
            <p>🗳️ {voteCount?.toLocaleString()} votes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
