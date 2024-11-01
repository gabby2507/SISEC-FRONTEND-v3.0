import React, { useEffect, useState } from 'react';

const images = [
  'https://uem.mz/wp-content/uploads/slider/cache/d73e7eaaaa293758c8a10fc163d4e149/Slide-01-scaled.jpg',
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}

export default Slider;
