import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondMainContainer from "./SecondMainContainer";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const isDarkMode = useSelector(store => store.theme.isDarkMode)
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpcomingMovies();
    
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <Header />
        {showGptSearch ? (
          <div className="pt-16">
            <GPTSearch />
          </div>
        ) : (
          <div className="pt-16">
            <MainContainer />
            <SecondMainContainer />
          </div>
        )}
      </div>
    );
}

export default Browse;