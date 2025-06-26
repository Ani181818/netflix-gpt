import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRated = () => {
    const dispatch = useDispatch();
    const getMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', APIOPTIONS);

        const json  = await data.json();
       
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getMovies();
    },[]);
}

export default useTopRated;