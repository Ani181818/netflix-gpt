import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', APIOPTIONS);

        const json  = await data.json();
       
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getMovies();
    },[]);
}

export default useUpcomingMovies;