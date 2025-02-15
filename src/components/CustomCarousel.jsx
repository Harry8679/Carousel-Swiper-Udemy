import React, { useState, useEffect } from "react";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=900&auto=format&fit=crop&q=60", title: "Nature" },
  { id: 2, url: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60", title: "Forêt" },
  { id: 3, url: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=900&auto=format&fit=crop&q=60", title: "Ciel et nuage" },
  { id: 4, url: "https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?w=900&auto=format&fit=crop&q=60", title: "Fleur" },
];

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Défilement toutes les 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto p-5">
      {/* Image */}
      <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="w-full h-full object-cover"
        />
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

export default SimpleCarousel;