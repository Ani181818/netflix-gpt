import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieDetail from "./MovieDetail";
import WatchlistPage from "./WatchlistPage";
import Welcome from "./Welcome";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Welcome/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
        {
            path:"/movie/:movieId",
            element: <MovieDetail/>
        },
        {
            path: "/watchlist",
            element: <WatchlistPage/>
        },
    ])
    

    return (
        <>
        <div>
            <RouterProvider router={appRouter} />
        </div>
        </>
    )
}

export default Body;