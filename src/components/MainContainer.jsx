import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () =>{
    const movies = useSelector(store => store.movies?.moviesList);
    if(!movies)return;
    const mainMovie = movies[1];
 
    return (
        <div className="relative w-full">
            <VideoTitle title = {mainMovie.original_title} overview = {mainMovie.overview}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
    )
}

export default MainContainer;