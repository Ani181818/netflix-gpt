import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearchView:(state)=> {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieList:(state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeGptMovieList:(state)=> {
            state.movieNames = null;
            state.movieResults = null;
        }
    }
})

export const { toggleGptSearchView, addGptMovieList, removeGptMovieList } =
  gptSlice.actions;

export default gptSlice.reducer;