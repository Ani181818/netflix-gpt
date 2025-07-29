import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice";
import themeReducer from "./themeSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    theme: themeReducer,
  },
});

export default appStore;