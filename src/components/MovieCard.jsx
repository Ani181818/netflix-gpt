import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath, movieId}) => {
    const navigate = useNavigate();
    
    if(!posterPath)return ;
    
    const handleMovieClick = () => {
        navigate(`/movie/${movieId}`);
    };
    
    return (
        <>
            <div 
                className="w-48 pr-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={handleMovieClick}
            >
                <img 
                    src={IMG_CDN_URL+posterPath} 
                    alt="movie-card" 
                    className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
            </div>
        </>
    )
}

export default MovieCard