import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openAi";
import { APIOPTIONS } from "../utils/constants";
import { addGptMovieList } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTmdb = async(movie)=>{
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
      ,APIOPTIONS);

      const json = await data.json();

      return json.results;
  }
  const gptSearchClick = async () => {
    //Make an Api Call to Get MOvie Recommedation
    const query = searchText.current.value.trim();
    if (!query) return; // optional: prevent empty search

    const gptQuery = `Act as a Movie Recommendation System and Suggest some movies for the Query ${query}. Only Give Names of 5 Movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    try {
      const gptResults = await client.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: gptQuery }],
      });
      

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      
      const promisses = gptMovies.map((movie)=> searchMovieTmdb(movie));

      const tmdbResults = await Promise.all(promisses);

      dispatch(addGptMovieList({movieNames:gptMovies,movieResults:tmdbResults}));
      
    } catch (error) {
      console.error("GPT API error:", error);
    }
  };
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full flex justify-center mt-10">
      <form
        className="w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-xl p-6 flex items-center shadow-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="flex-grow p-4 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          onClick={gptSearchClick}
          className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-lg transition duration-300"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
