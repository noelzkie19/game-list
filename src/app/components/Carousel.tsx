import React, { useState, useEffect } from 'react';
import '../css/Game.css'; 

const images = ['/images/Group 70.webp', '/images/Group 72.webp', '/images/Group 83.webp'];

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt='Banner' />
    </div>
  );
};

export default Carousel;
