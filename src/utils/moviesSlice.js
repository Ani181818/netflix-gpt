import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesList : null,
        trailerList:null
    },
    reducers:{
        addgetNowPlayingMovies(state,action){
            state.moviesList = action.payload;
        },
        addTrailer(state,action){
            state.trailerList = action.payload;
        }
    }
})

export const {addgetNowPlayingMovies,addTrailer} = moviesSlice.actions;
export default  moviesSlice.reducer;