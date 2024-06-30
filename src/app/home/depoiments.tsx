"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SaoJoao } from "@/components/depoiments/saoJoao";
import { Orfeu } from "@/components/depoiments/Orfeu";
import { SavegnagoSupermecados } from "@/components/depoiments/SavegnagoSupermecados";
import LeftArrow from "@/assets/seta-esquerda-branco.svg";
import RightArrow from "@/assets/seta-direita-branco.svg";

export function Depoiments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    <SaoJoao key="saoJoao" />,
    <Orfeu key="orfeu" />,
    <SavegnagoSupermecados key="savegnagoSupermecados" />,
  ];

  const totalTestimonials = testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex items-center justify-center bg-bg-depoiments py-10 md:py-40">
      <div className="container px-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: "100%",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                {testimonial}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-white pt-8">
            <div>{`${currentIndex + 1}/${totalTestimonials}`}</div>

            <div className="w-[55%] md:w-full flex items-center gap-2">
              {Array.from({ length: totalTestimonials }).map((_, index) => (
                <button
                  key={index}
                  className={`h-1 w-full ${
                    currentIndex === index
                      ? "bg-text-primary"
                      : "bg-bg-navegation"
                  }`}
                  onClick={() => handleButtonClick(index)}
                ></button>
              ))}
            </div>

            <div className="flex gap-x-4 ">
              <button
                className="flex justify-center pr-1 w-11 text-3xl h-11"
                onClick={handlePrev}
              >
                <Image src={LeftArrow} alt="Icone seta para esquerda" />
              </button>
              <button
                className="flex justify-center pl-1 w-11 text-3xl h-11"
                onClick={handleNext}
              >
                <Image src={RightArrow} alt="Icone seta para direita" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
