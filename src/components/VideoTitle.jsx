const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-full aspect-video pt-[5%] sm:pt-[8%] md:pt-[12%] px-4 sm:px-8 md:px-12 lg:px-24 absolute text-white bg-gradient-to-r from-black antialiased z-10">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-md mb-2 sm:mb-4">
                {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg pt-2 sm:pt-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 drop-shadow-sm leading-relaxed mb-4 sm:mb-6">
                {overview}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button className="bg-white text-black p-2 sm:p-3 md:p-4 px-4 sm:px-6 md:px-10 font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                    <span className="mr-1">▶️</span>
                    Play
                </button>
                <button className="bg-gray-600 p-2 sm:p-3 md:p-4 px-4 sm:px-6 md:px-10 font-bold text-sm sm:text-base md:text-lg mx-0 sm:mx-3 rounded-lg sm:rounded-xl md:rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
