import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMoviesVideos = async() => {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', APIOPTIONS);
            const videos = await data.json();
    
            const filterData = videos.results.filter(video => video.type === "Trailer")
            const trailer = filterData.length?filterData[0]:videos.results[0];
            dispatch(addTrailer(trailer));
         
        }
    
        useEffect(() => {
            getMoviesVideos();
        },[]);
}

export  default useMovieTrailer;