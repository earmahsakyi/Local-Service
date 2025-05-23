import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  if (images.length === 0) return null;

  return (
    <div
      className="image-gallery-container"
      style={{
        width: '100%',
        height: window.innerWidth < 600 ? '300px' : '400px',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            y: window.innerWidth < 600 ? 50 : 0,
            x: window.innerWidth < 600 ? 0 : 5,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{
            opacity: 0,
            y: window.innerWidth < 600 ? -50 : 0,
            x: window.innerWidth < 600 ? 0 : -50,
          }}
          transition={{ duration: 0.5 }}
          className="gallery-image"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            src={images[currentIndex]}
            alt={`Service example ${currentIndex + 1}`}
            className="responsive-img materialboxed"
          />

          <div className="dots-container">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dots ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
