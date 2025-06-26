import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondMainContainer from "./SecondMainContainer";
const Browse = () => {
    useNowPlayingMovies();
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