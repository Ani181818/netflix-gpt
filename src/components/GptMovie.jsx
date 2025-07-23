import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovie = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">
        Search Results
      </h2>

      <div className="space-y-10">
        {movieNames.map((movieName, ind) => (
          <div
            key={movieName}
            className="bg-gray-800 rounded-2xl shadow-lg p-4 hover:scale-[1.01] transition-transform duration-300"
          >
            <MovieList title={movieName} movies={movieResults[ind]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovie;
