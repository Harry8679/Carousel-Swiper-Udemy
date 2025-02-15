import React from "react";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=900&auto=format&fit=crop&q=60", title: "Nature" },
  { id: 2, url: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60", title: "Forêt" },
  { id: 3, url: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=900&auto=format&fit=crop&q=60", title: "Ciel et nuage" },
  { id: 4, url: "https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?w=900&auto=format&fit=crop&q=60", title: "Fleur" },
];

const ImageGallery = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 grid grid-cols-2 gap-4">
      {images.map((image) => (
        <div key={image.id} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={image.url} alt={image.title} className="w-full h-60 object-cover" />
          <div className="p-2 text-center bg-gray-800 text-white">
            {image.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
