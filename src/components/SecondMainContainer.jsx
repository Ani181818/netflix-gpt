import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondMainContainer = () => {
    const movies = useSelector(store => store.movies)
    return movies.moviesList && (
        <>
            <div className="bg-black">
                <div className="-mt-50 pl-12 relative z-20">
                <MovieList title = {"Now Playing"} movies = {movies.moviesList}/>
                <MovieList title = {"Top Rated"} movies = {movies.topRatedList}/>
                <MovieList title = {"Popular"} movies = {movies.popularList}/>
                <MovieList title = {"Upcoming Movies"} movies = {movies.upcomingList}/>
                <MovieList title = {"Horror Movies"} movies = {movies.moviesList}/>
                </div>
                
            </div>
        </>
    )
}

export default SecondMainContainer;