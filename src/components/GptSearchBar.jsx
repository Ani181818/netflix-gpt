import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
      const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-xl p-6 flex items-center shadow-lg ">
        <input
          type="text"
          className="flex-grow p-4 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-lg transition duration-300"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
