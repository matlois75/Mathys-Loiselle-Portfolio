import PropTypes from "prop-types";

const ImageCard = ({ src, alt, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-out
          group-hover:object-contain group-hover:relative group-hover:z-[999] 
          group-hover:scale-[1.2] group-hover:shadow-2xl"
        style={{
          transformOrigin: "center center",
          transform: "translate3d(0, 0, 0)",
        }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 -z-10" />
    </div>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
