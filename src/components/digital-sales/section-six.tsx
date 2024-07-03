"use client";

import { useState } from "react";
import Image from "next/image";

import Performance from "@/assets/perfomance.svg";
import Experience from "@/assets/experience.svg";
import LeftArrow from "@/assets/leftarrow.png";
import RightArrow from "@/assets/rightarrow.png";

import { SalesPerformanceDigitalSalesPage } from "./soluctions-components.tsx/sales-performance";
import { SalesExperienceDigitalSalesPage } from "./soluctions-components.tsx/sales-experience";

const components = [
  <SalesPerformanceDigitalSalesPage />,
  <SalesExperienceDigitalSalesPage />,
];

const titles = ["Sales Performance", "Sales Experience"];

export default function SoluctionsDigitalSalesPage() {
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
      <section
        className="w-full flex items-center justify-center"
        id="soluctions"
      >
        <div className="container">
          <div className="w-full py-6 ">
            <h1 className="text-left text-black px-4 font-normal text-2xl md:text-4xl leading-[1.36] lg:w-[55%] mb-4">
              Soluções
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

            <div className="grid grid-cols-2 text-center">
              {titles.map((title, index) => (
                <div
                  key={title}
                  className={`flex flex-col items-center pr-2 py-6 md:py-8 cursor-pointer border-t-4 ${
                    activeIndex === index ? "border-blue-500" : "border-t-4"
                  }`}
                  onClick={() => handleSetActive(index)}
                >
                  <Image
                    className="w-[30px] h-[30px]"
                    src={[Performance, Experience][index]}
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
                    {["Evolua suas vendas", "Melhore o desempenho"][index]}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center items-center container mt-4 min-h-96">
              {components[activeIndex]}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
