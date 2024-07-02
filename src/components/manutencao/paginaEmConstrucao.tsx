import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ConstructionAnimation: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const images = Array.from(
    { length: 9 },
    (_, i) => `/animacaomanutencao/character${i + 1}.webp`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 8 ? 1 : prevIndex + 1
      );
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="relative w-36 h-32">
        <Image
          src={images[currentImageIndex]}
          alt="Personagem em construção"
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300"
        />
      </div>
      <div className="mt-4 text-lg font-semibold text-gray-700">
        Página em construção <LoadingDots />
      </div>

      <button className="bg-text-primary py-3 px-20 mt-5 rounded-full popup-button">
        <Link href={"/"}>Voltar para home</Link>
      </button>
    </div>
  );
};

const LoadingDots: React.FC = () => {
  return (
    <span className="inline-flex">
      <span className="animate-[blink_1.5s_infinite]">.</span>
      <span className="animate-[blink_1.5s_infinite] delay-[0.3s]">.</span>
      <span className="animate-[blink_1.5s_infinite] delay-[0.6s]">.</span>
    </span>
  );
};

export default ConstructionAnimation;
