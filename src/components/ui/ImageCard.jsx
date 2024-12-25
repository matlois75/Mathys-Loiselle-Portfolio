import { useState } from "react";
import PropTypes from "prop-types";
import ImageModal from "./ImageModal";

const ImageCard = ({ src, alt, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isVideo = src.endsWith(".mp4");

  return (
    <>
      <div
        className={`relative ${className}`}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
      >
        {isVideo ? (
          <video
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            controls
            muted
            onClick={(e) => e.stopPropagation()}
          >
            <source src={src} type="video/mp4" />
            {alt}
          </video>
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-out
          group-hover:object-contain group-hover:relative group-hover:z-[999] 
          group-hover:scale-[1.2] group-hover:shadow-2xl dark:group-hover:shadow-black/40
          cursor-pointer"
            style={{
              transformOrigin: "center center",
              transform: "translate3d(0, 0, 0)",
            }}
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 dark:group-hover:bg-black/80 transition-colors duration-300 -z-10" />
      </div>

      {!isVideo && (
        <ImageModal
          src={src}
          alt={alt}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
