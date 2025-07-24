const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black antialiased">
                <h1 className="font-bold text-5xl drop-shadow-md">{title}</h1>
                <p className="text-lg pt-4 w-1/4 drop-shadow-sm">{overview}</p>

                <div className="py-4">
                    <button className="bg-white text-black p-4 px-10 font-bold text-lg rounded-2xl">
                        ▶️Play
                    </button>
                    <button className="bg-gray-600 p-4 px-10 font-bold text-lg mx-3 rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-200">
                        More Info
                    </button>
                </div>
            </div>
        </>
    );
};

export default VideoTitle;
