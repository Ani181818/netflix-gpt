import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { APIOPTIONS } from "../utils/constants";

const TrailerModal = ({ movieId, movieTitle, isOpen, onClose }) => {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && movieId) {
      fetchTrailer();
    }
  }, [isOpen, movieId]);

  const fetchTrailer = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        APIOPTIONS
      );
      const data = await response.json();
      
      const trailerVideo = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      ) || data.results[0];
      
      setTrailer(trailerVideo);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trailer:", error);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 p-2 rounded-full transition-all duration-300"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-0">
          <h2 className="text-2xl font-bold text-white mb-4">{movieTitle}</h2>
        </div>

        {/* Trailer Content */}
        <div className="p-6">
          {loading ? (
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-white text-lg">Loading trailer...</div>
            </div>
          ) : trailer ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0`}
                title={`${movieTitle} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-white text-lg">No trailer available</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;