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
    <div className="relative px-6 text-white">
      <h1 className="text-3xl py-4">{title}</h1>

      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
      >
        <ChevronRight size={30} />
      </button>

      {/* Scrollable Movie Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4"
      >
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            movieId={movie.id}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            movieTitle={movie.title || movie.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
