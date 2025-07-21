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
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpcomingMovies();
    return (
      <>
        <div>
          <Header />
          {showGptSearch ? (
            <GPTSearch />
          ) : (
            <>
              <MainContainer />
              <SecondMainContainer />
            </>
          )}
         
        </div>
      </>
    );
}

export default Browse;