import { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-2 sm:px-6 text-white mb-12">
      {title && title !== "" && (
        <>
          <hr className="border-t border-gray-700 mb-6" />
          <h1 className="text-2xl sm:text-3xl font-extrabold py-2 mb-4 tracking-tight drop-shadow-lg text-red-400 uppercase letter-spacing-wide">{title}</h1>
        </>
      )}
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={30} />
      </button>

      {/* Scrollable Movie Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 pb-2"
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
