import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIOPTIONS, IMG_CDN_URL } from "../utils/constants";
import Header from "./Header";
import { ArrowLeft, Play, X } from "lucide-react";

const MovieDetail = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          APIOPTIONS
        );
        const movieData = await movieRes.json();

        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          APIOPTIONS
        );
        const videoData = await videoRes.json();

        const foundTrailer =
          videoData.results.find(
            (v) => v.type === "Trailer" && v.site === "YouTube"
          ) || videoData.results[0];

        setMovie(movieData);
        setTrailer(foundTrailer);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie:", err);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => navigate("/browse");
  const formatRuntime = (mins) => `${Math.floor(mins / 60)}h ${mins % 60}m`;

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Movie not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="fixed top-20 left-6 z-30 bg-black/70 hover:bg-black/90 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Trailer Modal Fullscreen */}
      {showTrailer && trailer && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
            className="w-full h-full"
            allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Trailer"
          ></iframe>
          <button
            className="absolute top-4 right-4 bg-black/70 hover:bg-black p-2 rounded-full z-50"
            onClick={() => setShowTrailer(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-screen relative">
          <img
            src={`${IMG_CDN_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 md:p-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {movie.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow-md">
              {movie.overview}
            </p>

            {trailer && !showTrailer && (
              <button
                onClick={() => setShowTrailer(true)}
                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                <Play className="w-6 h-6" />
                Watch Trailer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Movie Info Section */}
      <div className="px-8 md:px-12 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src={`${IMG_CDN_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Movie Details</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <span className="font-semibold text-white">
                      Release Date:
                    </span>
                    <p>{new Date(movie.release_date).toLocaleDateString()}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-white">Rating:</span>
                    <p>
                      {movie.vote_average.toFixed(1)}/10 ({movie.vote_count}{" "}
                      votes)
                    </p>
                  </div>

                  {movie.runtime && (
                    <div>
                      <span className="font-semibold text-white">Runtime:</span>
                      <p>{formatRuntime(movie.runtime)}</p>
                    </div>
                  )}

                  {movie.budget > 0 && (
                    <div>
                      <span className="font-semibold text-white">Budget:</span>
                      <p>${movie.budget.toLocaleString()}</p>
                    </div>
                  )}

                  {movie.revenue > 0 && (
                    <div>
                      <span className="font-semibold text-white">Revenue:</span>
                      <p>${movie.revenue.toLocaleString()}</p>
                    </div>
                  )}

                  <div>
                    <span className="font-semibold text-white">Status:</span>
                    <p>{movie.status}</p>
                  </div>
                </div>
              </div>

              {movie.production_companies?.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Production Companies
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {movie.production_companies.map((company) => (
                      <div key={company.id} className="text-gray-300">
                        {company.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
