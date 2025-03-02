import React from "react";
import '../index.css';
import img1 from "../images/ani1.jpg"
import img2 from "../images/ani2.jpg"
import img3 from "../images/ani3.jpg"
import img4 from "../images/ani4.jpg"
import img5 from "../images/ani5.jpg"
import img6 from "../images/ani6.jpg"
import img7 from "../images/ani7.jpg"
import img8 from "../images/ani8.jpg"

const imageData = [
  { id: 1, src:img1 , title: "Tiger" },
  { id: 2, src:img2 , title: "Elephant" },
  { id: 3, src:img3 , title: "Lion" },
  { id: 4, src:img4 , title: "Leopard" },
  { id: 5, src:img5 , title: "Cheetah" },
  { id: 6, src:img6, title: "Zebra" },
  { id: 7, src:img7, title: "Raccoons" },
  { id: 8, src:img8, title: "Giraffe" },
];

const ImageGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-300 p-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
         Stunning Wildlife Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageData.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
