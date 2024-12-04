import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  useEffect(() => {
    const element = document.querySelector(".image-modal-container");
    if (!element) return;

    const handleWheelEvent = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = -e.deltaY / 500;
        const newScale = scale * (1 + delta);
        setScale(Math.min(Math.max(1, newScale), 3));
      } else if (Math.abs(e.deltaY) < 50) {
        const delta = -e.deltaY / 100;
        const newScale = scale * (1 + delta);
        setScale(Math.min(Math.max(1, newScale), 3));
      }
    };

    element.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => element.removeEventListener("wheel", handleWheelEvent);
  }, [scale]);

  if (!isOpen) return null;

  const handleMouseDown = (e) => {
    e.stopPropagation();
    setStartTime(Date.now());
    if (scale > 1) {
      setIsPanning(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isPanning) return;
    e.stopPropagation();
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (Date.now() - startTime < 200 && !isPanning) {
      setTimeout(() => {
        onClose();
      }, 100);
    }
    setIsPanning(false);
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    setStartTime(Date.now());
    if (scale > 1) {
      setIsPanning(true);
      const touch = e.touches[0];
      setStartPos({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isPanning) return;
    e.stopPropagation();
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - startPos.x,
      y: touch.clientY - startPos.y,
    });
  };

  const handleTouchEnd = (e) => {
    e.preventDefault(); // Add this to prevent any default behavior
    e.stopPropagation();
    if (Date.now() - startTime < 200 && !isPanning) {
      // Add small delay before closing to prevent immediate reopening
      setTimeout(() => {
        onClose();
      }, 100);
    }
    setIsPanning(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] image-modal-container"
        style={{
          cursor: scale > 1 ? "move" : "pointer",
          touchAction: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={(e) => {
          e.stopPropagation();
          setScale(1);
          setPosition({ x: 0, y: 0 });
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isPanning ? "none" : "transform 0.2s ease-out",
          }}
          draggable="false"
        />
        {scale > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-full text-sm">
            {Math.round(scale * 100)}%
          </div>
        )}
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
