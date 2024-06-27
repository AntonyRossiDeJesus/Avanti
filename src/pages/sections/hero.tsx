"use client";

import Image from "next/image";

import VideoBackground from "@/components/VideoBackground";
import Carousel from "@/components/Carousel";

export function Hero() {
  return (
    <section className="relative bg-bg-primary text-white min-h-[550px] md:min-h-[650px] flex justify-center items-center gradient-overlay">
      <div className="z-20 container absolute flex flex-col items-center">
        <div className="flex items-center justify-center flex-col gap-4 pt-28 px-2 max-w-[532px]">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Complete for <span className="text-text-primary">commerce</span>
          </h2>
          <p className="text-center text-text-secundary md:text-lg lg:text-2xl">
            Impulsione o e-commerce da sua empresa com soluções integradas,
            performance e experiência.
          </p>
          <button className="bg-text-primary py-3 px-8 rounded-full">
            Agendar uma apresentação
          </button>
        </div>

        <div className="w-[355px] md:w-[75%] lg:w-[72%] xl:w-[88%] pt-14 md:pt-24">
          <Carousel />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg-primary via-transparent to-transparent z-20"></div>

      <VideoBackground />
    </section>
  );
}
