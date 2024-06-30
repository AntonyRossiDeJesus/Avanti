"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LeftArrow from "@/assets/seta-esquerda.svg";
import RightArrow from "@/assets/seta-direita.svg";
import { OrfeuCases } from "@/components/sucessCases/orfeuDigital";
import { SavegnagoCases } from "@/components/sucessCases/SavegnagoSupermecados";
import { FarmaciaSaoJoao } from "@/components/sucessCases/FarmaciaSaoJoao";

export default function SucessCases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [is2XL, setIs2XL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIs2XL(window.innerWidth >= 1536);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (is2XL) {
        return prevIndex + 1 >= 1 ? 1 : prevIndex + 1;
      } else {
        return (prevIndex + 1) % 3;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (is2XL) {
        return prevIndex - 1 < 0 ? 0 : prevIndex - 1;
      } else {
        return (prevIndex - 1 + 3) % 3;
      }
    });
  };

  const getButtonClass = (index: number) => {
    if (is2XL) {
      if (index === 0 && currentIndex === 0) return "bg-text-primary";
      if (index > 0 && currentIndex > 0) return "bg-text-primary";
      return "bg-bg-line-cases";
    } else {
      return currentIndex === index ? "bg-text-primary" : "bg-bg-line-cases";
    }
  };

  return (
    <>
      <section className="overflow-hidden flex justify-center items-center flex-col">
        <div className="container xl:min-w-full flex flex-col xl:flex-row py-5 gap-x-5">
          <div className="z-10 bg-white p-2 md:ml-12 xl:m-0 xl:min-w-[40%] xl:pl-28 2xl:max-w-[40%]">
            <h1 className="text-[28px] lg:text-4xl w-[80%] xl:text-5xl pb-4 xl:leading-[1.36] ">
              Explore nossos cases de
              <span className="text-text-primary"> sucesso</span>
            </h1>

            <p className="opacity-65 pb-4 xl:text-xl">
              Nossos cases não são apenas exemplos de nosso trabalho, mas são a
              representação do impacto tangível que podemos ter no seu negócio.
              Explore e imagine o que podemos conquistar juntos.
            </p>
          </div>

          <div className="relative flex w-full md:ml-12 gap-4 md:gap-10 lg:gap-24 xl:gap-4 xl:m-0 pl-2">
            <div
              className={`flex min-w-[90%] md:min-w-[70%] lg:min-w-[60%] 2xl:min-w-[38%] transition-transform duration-500`}
              style={{
                transform: `translateX(-${currentIndex * (is2XL ? 50 : 100)}%)`,
              }}
            >
              <OrfeuCases />
            </div>

            <div
              className={`flex min-w-[90%] md:min-w-[70%] lg:min-w-[60%] 2xl:min-w-[38%] transition-transform duration-500`}
              style={{
                transform: `translateX(-${currentIndex * (is2XL ? 50 : 100)}%)`,
              }}
            >
              <SavegnagoCases />
            </div>

            <div
              className={`flex min-w-[90%] md:min-w-[70%] lg:min-w-[60%] 2xl:min-w-[38%] transition-transform duration-500`}
              style={{
                transform: `translateX(-${currentIndex * (is2XL ? 50 : 100)}%)`,
              }}
            >
              <FarmaciaSaoJoao />
            </div>
          </div>
        </div>

        <div className="container py-4 px-8 flex items-center justify-end gap-x-4">
          <div className="flex items-center w-[60%] lg:w-[500px] h-[4px]">
            <button className={`h-1 w-full ${getButtonClass(0)}`}></button>
            <button className={`h-1 w-full ${getButtonClass(1)}`}></button>
            <button className={`h-1 w-full ${getButtonClass(2)}`}></button>
          </div>

          <div className="flex gap-x-4">
            <button
              className="flex justify-center items-center rounded-full w-11 h-11 hover:border-l-2 hover:border-text-primary transition-all"
              onClick={handlePrev}
              disabled={is2XL && currentIndex === 0} // Disable left arrow button when at the first image in 2XL
            >
              <Image
                className="w-[54px] h-[58px]"
                src={LeftArrow}
                alt="Icone seta para esquerda"
              />
            </button>
            <button
              className="flex justify-center items-center rounded-full w-11 h-11 hover:border-r-2 hover:border-text-primary transition-all"
              onClick={handleNext}
              disabled={is2XL && currentIndex === 1} // Disable right arrow button when at the second image in 2XL
            >
              <Image
                className="w-[54px] h-[58px]"
                src={RightArrow}
                alt="Icone seta para direita"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
