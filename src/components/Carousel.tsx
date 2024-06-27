import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
    { src: Smile, alt: "Smile" },
    { src: Ampm, alt: "Ampm" },
    { src: Intelbras, alt: "Intelbras" },
    { src: Kopenhagen, alt: "Kopenhagen" },
    { src: SaoJoao, alt: "SaoJoao" },
    { src: Hypera, alt: "Hypera" },
    { src: Loungerie, alt: "Loungerie" },
    { src: Orfeu, alt: "Orfeu" },
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current) {
        const firstChild = trackRef.current.children[0];
        const clonedChild = firstChild.cloneNode(true);

        trackRef.current.appendChild(clonedChild);
        trackRef.current.removeChild(firstChild);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 overflow-hidden ">
      <div className="flex gap-6 overflow-hidden relative ">
        <div className="w-[2664px] flex gap-6" ref={trackRef}>
          {images.map((image, index) => (
            <div key={index} className="w-[148px] mx-[10px] px-[8px]">
              <Image src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
