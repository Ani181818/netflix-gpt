import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondMainContainer from "./SecondMainContainer";
const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpcomingMovies();
    return (
        <>
        <div>
            <Header/>
            <MainContainer/>
           <SecondMainContainer/>
        </div>
        </>
    )
}

export default Browse;