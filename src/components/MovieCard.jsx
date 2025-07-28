import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../utils/moviesSlice";

const MovieCard = ({
  posterPath,
  movieId,
  movieTitle,
  voteAverage,
  voteCount,
  movie, // full movie object
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.movies.watchlist);
  const isInWatchlist = watchlist.some((m) => m.id === movieId);

  if (!posterPath) return null;

  const handleMovieClick = () => {
    navigate(`/movie/${movieId}`);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    navigate(`/movie/${movieId}`);
  };

  const handleWatchlistClick = (e) => {
    e.stopPropagation();
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movieId));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out transform-gpu
        ${isHovered ? "z-50 scale-105 border-2 border-red-600 shadow-2xl" : "scale-100 border border-transparent"}
        w-48 min-w-[12rem] h-[22rem] origin-bottom bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl shadow-lg group overflow-hidden
      `}
      onClick={handleMovieClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[80%] overflow-hidden rounded-t-2xl">
        <img
          src={IMG_CDN_URL + posterPath}
          alt={movieTitle}
          className="w-full h-full object-cover rounded-t-2xl shadow-md group-hover:brightness-90 transition-all duration-300"
        />
        {/* Gradient Overlay on Hover */}
        <div
          className={`absolute inset-0 transition-all duration-300 pointer-events-none
            ${isHovered ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100" : "opacity-0"}
          `}
        />
        {/* Play Button Overlay (on hover) */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <button
              onClick={handlePlayClick}
              aria-label={`Play ${movieTitle}`}
              className="bg-red-600 hover:bg-red-700 p-4 rounded-full transform hover:scale-110 shadow-lg mb-2"
            >
              <Play className="w-8 h-8 text-white fill-white" />
            </button>
          </div>
        )}
        {/* Watchlist Button (always visible) */}
        <button
          onClick={handleWatchlistClick}
          aria-label={isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold shadow-lg border-2 transition-all duration-200 z-20
            ${isInWatchlist
              ? "bg-green-600 border-green-400 text-white hover:bg-green-700"
              : "bg-black/70 border-red-500 text-red-400 hover:bg-red-600 hover:text-white"}
          `}
        >
          {isInWatchlist ? "✓ In Watchlist" : "+ Watchlist"}
        </button>
      </div>
      {/* Title + Rating Info */}
      <div className="mt-2 px-2 pb-2 text-white">
        <h3 className="text-base font-bold truncate mb-1 drop-shadow-lg">{movieTitle}</h3>
        <div className="flex items-center justify-between text-xs text-gray-300">
          <span>⭐ {voteAverage?.toFixed(1)}/10</span>
          <span>🗳️ {voteCount?.toLocaleString()} votes</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
