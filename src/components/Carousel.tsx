"use client";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import { useState, useEffect } from "react";

import Smile from "@/assets/Smiles.png";
import Ampm from "@/assets/AmPm.png";
import Intelbras from "@/assets/Intelbras.png";
import Kopenhagen from "@/assets/Kopenhagen.png";
import SaoJoao from "@/assets/Logo-Farmacias-Sao-Joao-Positiva.png";
import Hypera from "@/assets/logo-negativo.png";
import Loungerie from "@/assets/Loungerie.png";
import Orfeu from "@/assets/Orfeu-Horizontal-Negativo-PB.png";

const Carousel = () => {
  const images = [
    Smile,
    Ampm,
    Intelbras,
    Kopenhagen,
    SaoJoao,
    Hypera,
    Loungerie,
    Orfeu,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 148 + 10 + 10 + 8 + 8; // largura do item + margens + preenchimentos
  const totalItems = images.length;
  const visibleItems = 4; // número de itens visíveis por vez

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 4000); // Altere o intervalo de tempo conforme necessário (4000ms = 4 segundos)

    return () => clearInterval(timer); // Limpar o intervalo ao desmontar o componente
  }, [totalItems]);

  const moveTrack = () => {
    const trackPosition = -currentIndex * itemWidth;
    return {
      width: `${totalItems * itemWidth}px`, // define a largura total do carrossel
      transform: `translateX(${trackPosition}px)`,
      transition: "transform 1s ease", // transição mais suave
    };
  };

  return (
    <div className="pt-20 overflow-hidden">
      <div
        className="w-[2664px] flex gap-6 overflow-hidden"
        style={moveTrack()}
      >
        {images.map((image, index) => (
          <div key={index} className="w-[148px] mx-[10px] px-[8px]">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
