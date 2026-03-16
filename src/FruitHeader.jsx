import React, { useState, useEffect } from 'react';
import './FruitHeader.css';

const images = [
  { id: 1, src: '/apple.jpg', alt: 'Apple' },
  { id: 2, src: '/avacado.jpg', alt: 'Avacado' },
  { id: 3, src: '/banana.jpg', alt: 'Banana' },
  { id: 4, src: '/grapes.jpg', alt: 'Grapes' },
  { id: 5, src: '/kiwi.jpg', alt: 'Kiwi' },
  { id: 6, src: '/mango.jpg', alt: 'Mango' },
  { id: 7, src: '/orange.jpg', alt: 'Orange' },
  { id: 8, src: '/pineaapple.jpg', alt: 'Pineaapple' },
  { id: 9, src: '/pomegranate.jpg', alt: 'Pomegranate' },
  { id: 10, src: '/watermelon.jpg', alt: 'Watermelon' },
];

const FruitHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <p>Get the best quality fruits at your doorstep</p>
      </div>

      <div className="header-slider">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`header-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </header>
  );
}

export default FruitHeader;