import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondMainContainer = () => {
    const movies = useSelector(store => store.movies)
    return movies.moviesList && (
        <div className="bg-black">
            <div className="pt-16 sm:pt-20 px-4 sm:px-8 md:px-12 relative z-20">
                <div id="now-playing" className="scroll-mt-32">
                    <MovieList title = {"Now Playing"} movies = {movies.moviesList}/>
                </div>
                <div id="top-rated" className="scroll-mt-32">
                    <MovieList title = {"Top Rated"} movies = {movies.topRatedList}/>
                </div>
                <div id="popular" className="scroll-mt-32">
                    <MovieList title = {"Popular"} movies = {movies.popularList}/>
                </div>
                <div id="upcoming" className="scroll-mt-32">
                    <MovieList title = {"Upcoming Movies"} movies = {movies.upcomingList}/>
                </div>
                <div id="horror" className="scroll-mt-32">
                    <MovieList title = {"Horror Movies"} movies = {movies.moviesList}/>
                </div>
            </div>
        </div>
    )
}

export default SecondMainContainer;