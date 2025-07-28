import { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

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
    <div className="relative px-2 sm:px-4 md:px-6 text-white mb-8 sm:mb-12 z-20">
      {title && title !== "" && (
        <>
          <hr className="border-t border-gray-700 mb-4 sm:mb-6" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold py-2 mb-4 tracking-tight drop-shadow-lg text-red-400 uppercase letter-spacing-wide">
            {title}
          </h1>
        </>
      )}
      
      {/* Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} className="text-white" />
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
