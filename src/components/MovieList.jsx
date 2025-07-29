import { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const isDarkMode = useSelector(store => store.theme.isDarkMode);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative px-2 sm:px-4 md:px-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8 sm:mb-12 z-20`}>
      {title && title !== "" && (
        <>
          <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} mb-4 sm:mb-6`} />
          <h1 className={`text-xl sm:text-2xl md:text-3xl font-extrabold py-2 mb-4 tracking-tight drop-shadow-lg ${isDarkMode ? 'text-red-400' : 'text-red-600'} uppercase letter-spacing-wide`}>
            {title}
          </h1>
        </>
      )}
      
      {/* Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={scrollLeft}
        className={`hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-30 ${isDarkMode ? 'bg-black bg-opacity-50 hover:bg-opacity-80' : 'bg-white bg-opacity-70 hover:bg-opacity-90'} p-2 rounded-full shadow-lg transition-all duration-200`}
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} className={isDarkMode ? "text-white" : "text-gray-800"} />
      </button>

      <button
        onClick={scrollRight}
        className={`hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-30 ${isDarkMode ? 'bg-black bg-opacity-50 hover:bg-opacity-80' : 'bg-white bg-opacity-70 hover:bg-opacity-90'} p-2 rounded-full shadow-lg transition-all duration-200`}
        aria-label="Scroll right"
      >
        <ChevronRight size={24} className={isDarkMode ? "text-white" : "text-gray-800"} />
      </button>

      {/* Scrollable Movie Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-2 sm:space-x-3 md:space-x-4 pb-2 relative"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            movieId={movie.id}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            movieTitle={movie.title || movie.original_title}
            movie={movie} // Pass full movie object
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
