import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList : null,
        trailerList:null,
        popularList:null,
        topRatedList:null,
        upcomingList:null,
        watchlist: [], // Add watchlist array
    },
    reducers:{
        addgetNowPlayingMovies(state,action){
            state.moviesList = action.payload;
        },
        addTrailer(state,action){
            state.trailerList = action.payload;
        },
        addPopularMovies(state,action){
            state.popularList = action.payload;
        },
        addTopRatedMovies(state,action){
            state.topRatedList = action.payload;
        },
        addUpcomingMovies(state,action){
            state.upcomingList = action.payload;
        },
        addToWatchlist(state, action) {
            // Prevent duplicates by movie id
            const exists = state.watchlist.some(m => m.id === action.payload.id);
            if (!exists) {
                state.watchlist.push(action.payload);
            }
        },
        removeFromWatchlist(state, action) {
            state.watchlist = state.watchlist.filter(m => m.id !== action.payload);
        },
    }
})

export const {addgetNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addToWatchlist, removeFromWatchlist} = moviesSlice.actions;
export default  moviesSlice.reducer;