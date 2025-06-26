import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', APIOPTIONS);

        const json  = await data.json();
       
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getMovies();
    },[]);
}

export default usePopularMovies;