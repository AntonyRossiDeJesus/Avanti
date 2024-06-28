"use client";

import { useState } from "react";
import Image from "next/image";

import CartSale from "@/assets/cart-saler.svg";
import Performance from "@/assets/perfomance.svg";
import Experience from "@/assets/experience.svg";
import LeftArrow from "@/assets/leftarrow.png";
import RightArrow from "@/assets/rightarrow.png";

import { DigitalSales } from "@/components/DigitalSales";
import { SalesPerformance } from "@/components/SalesPerformance";
import { SalesExperience } from "@/components/Experience";

const components = [
  <DigitalSales />,
  <SalesPerformance />,
  <SalesExperience />,
];

const titles = ["Digital Sales", "Sales Performance", "Sales Experience"];

export default function Soluctions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActive = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="container px-8">
          <div className="w-full py-6">
            <h1 className="text-left text-black font-normal text-2xl md:text-4xl leading-[1.36] lg:w-[55%] mb-4">
              Oferecemos soluções completas para o crescimento e eficiência do
              seu
              <span className="text-text-primary"> negócio</span>
            </h1>

            <div className="w-full hidden md:flex justify-end p-2 ">
              <div className="flex gap-2">
                <button onClick={handlePrev}>
                  <Image src={LeftArrow} alt="Seta para a esquerda" />
                </button>

                <button onClick={handleNext}>
                  <Image src={RightArrow} alt="Seta para a direita" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3  text-center">
              {titles.map((title, index) => (
                <div
                  key={title}
                  className={`flex flex-col items-center pr-2 py-6 md:py-8 cursor-pointer border-t-4 ${
                    activeIndex === index ? "border-blue-500" : "border-t-4"
                  }`}
                  onClick={() => handleSetActive(index)}
                >
                  <Image
                    src={[CartSale, Performance, Experience][index]}
                    alt={title}
                  />
                  <h2
                    className={`text-[12px] md:text-lg lg:text-xl ${
                      activeIndex === index ? "text-blue-500" : ""
                    }`}
                  >
                    {title}
                  </h2>
                  <p className="text-[10px] md:text-sm lg:text-base">
                    {
                      [
                        "Evolua suas vendas",
                        "Melhore o desempenho",
                        "Experiência inesquecível e garantida",
                      ][index]
                    }
                  </p>
                </div>
              ))}
            </div>

            <div className="inline-block container mt-4 min-h-96">
              {components[activeIndex]}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
