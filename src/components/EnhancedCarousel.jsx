import React, { useState, useEffect } from "react";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=900&h=600&auto=format&fit=crop&q=80", title: "Nature" },
  { id: 2, url: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&h=600&auto=format&fit=crop&q=80", title: "Forêt" },
  { id: 3, url: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=900&h=600&auto=format&fit=crop&q=80", title: "Ciel et nuage" },
  { id: 4, url: "https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?w=900&h=600&auto=format&fit=crop&q=80", title: "Fleur" },
];

const EnhancedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 500);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto p-5 max-w-[600px] w-full">
      {/* Image avec Bonne Taille */}
      <div className="relative aspect-[16/9] w-full rounded-lg shadow-lg bg-gray-300">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? (fade ? "opacity-100" : "opacity-0") : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Titre */}
      <div className="text-center text-lg font-semibold mt-2">
        {images[currentIndex].title}
      </div>

      {/* Boutons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900"
      >
        ❯
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;