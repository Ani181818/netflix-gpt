import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addgetNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', APIOPTIONS);

        const json  = await data.json();
       
        dispatch(addgetNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getMovies();
    },[]);
}

export default useNowPlayingMovies;