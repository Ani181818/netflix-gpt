import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants"
import TrailerModal from "./TrailerModal";

const MovieCard = ({posterPath, movieId, movieTitle}) => {
    const navigate = useNavigate();
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    if(!posterPath)return ;
    
    const handleMovieClick = () => {
        navigate(`/movie/${movieId}`);
    };

    const handlePlayClick = (e) => {
        e.stopPropagation(); // Prevent navigation when clicking play button
        setIsTrailerOpen(true);
    };

    const closeTrailer = () => {
        setIsTrailerOpen(false);
    };
    
    return (
        <>
            <div 
                className="w-48 pr-4 cursor-pointer transform transition-all duration-300 hover:scale-105 relative group"
                onClick={handleMovieClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden rounded-lg">
                    <img 
                        src={IMG_CDN_URL+posterPath} 
                        alt="movie-card" 
                        className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <button
                            onClick={handlePlayClick}
                            className="bg-red-600 hover:bg-red-700 p-4 rounded-full transform transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                            <Play className="w-8 h-8 text-white fill-white" />
                        </button>
                    </div>
                </div>

                {/* Movie Title */}
                <div className="mt-2 px-1">
                    <h3 className="text-white text-sm font-medium truncate">
                        {movieTitle}
                    </h3>
                </div>
            </div>

            {/* Trailer Modal */}
            <TrailerModal
                movieId={movieId}
                movieTitle={movieTitle}
                isOpen={isTrailerOpen}
                onClose={closeTrailer}
            />
        </>
    )
}

export default MovieCard