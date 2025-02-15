import React, { useState, useEffect } from "react";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=900&auto=format&fit=crop&q=60", title: "Nature" },
  { id: 2, url: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60", title: "Forêt" },
  { id: 3, url: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=900&auto=format&fit=crop&q=60", title: "Ciel et nuage" },
  { id: 4, url: "https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?w=900&auto=format&fit=crop&q=60", title: "Fleur" },
];

const CustomCarousel = () => {
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
    const interval = setInterval(nextSlide, 6000); // Passage toutes les 6 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {images.map((image) => {
        return (
          <div className="relative max-w-4xl mx-auto py-10">
      {/* Conteneur du Carousel */}
      <div className="relative w-full h-[500px] rounded-lg shadow-lg bg-gray-300 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute left-0 top-0 w-full h-full transition-opacity duration-1500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-contain rounded-lg"
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 z-20"
      >
        ❮
      </button>

      {/* Bouton Suivant */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 z-20"
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
        )
      })}
    </div>
    // <div className="relative max-w-4xl mx-auto py-10">
    //   {/* Conteneur du Carousel */}
    //   <div className="relative w-full h-[500px] rounded-lg shadow-lg bg-gray-300 overflow-hidden">
    //     {images.map((image, index) => (
    //       <div
    //         key={image.id}
    //         className={`absolute left-0 top-0 w-full h-full transition-opacity duration-1500 ${
    //           index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
    //         }`}
    //       >
    //         <img
    //           src={image.url}
    //           alt={image.title}
    //           className="w-full h-full object-contain rounded-lg"
    //         />
    //         <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-4 text-lg font-semibold">
    //           {image.title}
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Bouton Précédent */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 z-20"
    //   >
    //     ❮
    //   </button>

    //   {/* Bouton Suivant */}
    //   <button
    //     onClick={nextSlide}
    //     className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 z-20"
    //   >
    //     ❯
    //   </button>

    //   {/* Indicateurs */}
    //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    //     {images.map((_, index) => (
    //       <div
    //         key={index}
    //         className={`w-3 h-3 rounded-full ${
    //           index === currentIndex ? "bg-white" : "bg-gray-400"
    //         }`}
    //       ></div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default CustomCarousel;