
import { useSelector } from "react-redux";
import { APIOPTIONS } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    useMovieTrailer(movieId);
    const getKey = useSelector(store => store.movies.trailerList)
    
    return (
        <div className="relative w-full">
            <iframe 
                className="w-full aspect-video"
                src={"https://www.youtube.com/embed/"+getKey?.key+"?si=N2SxB1vzjvbDy5o3&autoplay=1&mute=1" }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground;