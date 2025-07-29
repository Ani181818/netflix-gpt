import { BG_URL } from "../utils/constants";
import GptMovie from "./GptMovie";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const isDarkMode = useSelector(store => store.theme.isDarkMode);
  
  return (
    <div className={`relative w-full ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      {/* Background Image */}
      <div className={`fixed inset-0 -z-10 ${!isDarkMode ? 'opacity-30' : ''}`}>
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full "
        />
        {!isDarkMode && (
          <div className="absolute inset-0 bg-white/70"></div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto pt-16 px-4">
        <GptSearchBar />
        <div className="mt-10">
          <GptMovie />
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
