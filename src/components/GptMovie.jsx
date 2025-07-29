import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovie = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  if (!movieNames) return null;

  return (
    <div className={`px-4 py-6 sm:px-6 lg:px-12 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 via-black to-gray-900' : 'bg-gradient-to-b from-gray-100 via-white to-gray-100'} min-h-screen`}>
      <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>
        Search Results
      </h2>

      <div className="space-y-10">
        {movieNames.map((movieName, ind) => (
          <div
            key={movieName}
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'} rounded-2xl shadow-lg p-4 hover:scale-[1.01] transition-transform duration-300`}
          >
            <MovieList title={movieName} movies={movieResults[ind]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovie;
