import { BG_URL } from "../utils/constants";
import GptMovie from "./GptMovie";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full "
        />
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
