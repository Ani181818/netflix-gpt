import { useRef } from "react";
import { createPortal } from "react-dom";

const FullscreenTrailerModal = ({ trailerKey, onClose }) => {
  const iframeRef = useRef(null);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe?.requestFullscreen) iframe.requestFullscreen();
    else if (iframe?.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe?.mozRequestFullScreen) iframe.mozRequestFullScreen();
    else if (iframe?.msRequestFullscreen) iframe.msRequestFullscreen();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="relative w-full h-full">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1&rel=0&modestbranding=1`}
          title="Movie Trailer"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          onLoad={handleFullscreen}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default FullscreenTrailerModal;
