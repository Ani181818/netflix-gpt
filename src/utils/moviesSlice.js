import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList : null,
        trailerList:null,
        popularList:null,
        topRatedList:null,
        upcomingList:null
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
        }
    }
})

export const {addgetNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;
export default  moviesSlice.reducer;