import { useSelector } from "react-redux";
import Header from "./Header";
import MovieList from "./MovieList";

const WatchlistPage = () => {
  const watchlist = useSelector((store) => store.movies.watchlist);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <Header />
      {/* Hero Section */}
      <div className="pt-32 pb-8 flex flex-col items-center justify-center bg-gradient-to-r from-red-900/80 via-black/80 to-gray-900/80 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight drop-shadow-lg text-center">My Watchlist</h1>
        <p className="text-lg text-gray-300 mb-6 text-center max-w-xl">All your saved movies in one place. Add more from the Browse page and never miss your favorites!</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {watchlist && watchlist.length > 0 ? (
          <MovieList title="" movies={watchlist} />
        ) : (
          <div className="flex flex-col items-center justify-center mt-24">
            <svg width="120" height="120" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-600 mb-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-6 4h6" />
            </svg>
            <div className="text-2xl font-semibold text-gray-300 mb-2">Your watchlist is empty</div>
            <div className="text-gray-400 text-lg mb-6 text-center">Add movies from the Browse page to see them here.</div>
            <a href="/browse" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold shadow transition-colors duration-200">Go to Browse</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage; 