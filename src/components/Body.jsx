import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieDetail from "./MovieDetail";
import WatchlistPage from "./WatchlistPage";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
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