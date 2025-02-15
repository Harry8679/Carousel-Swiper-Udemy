import React, { useState, useEffect } from "react";

const images = [
  { id: 1, url: "https://source.unsplash.com/random/800x600?nature", title: "Nature" },
  { id: 2, url: "https://source.unsplash.com/random/800x600?city", title: "City Life" },
  { id: 3, url: "https://source.unsplash.com/random/800x600?technology", title: "Technology" },
  { id: 4, url: "https://source.unsplash.com/random/800x600?travel", title: "Travel" },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Nettoie l'intervalle au démontage
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto py-10">
      {/* Conteneur du Carousel */}
      <div className="relative overflow-hidden w-full h-96 rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-4 text-lg font-semibold">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {/* Bouton Précédent */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        ❮
      </button>

      {/* Bouton Suivant */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
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

export default CustomCarousel;