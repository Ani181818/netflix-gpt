import { BG_URL } from "../utils/constants";
import GptMovie from "./GptMovie";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div>
        <div className="absolute -z-10">
          <div>
            <img src={BG_URL} alt="bg-logo" />
          </div>
        </div>
        <GptSearchBar />
        <GptMovie />
      </div>
    </>
  );
};

export default GPTSearch;
