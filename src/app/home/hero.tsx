"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Mouse from "@/assets/iconeBotaoBanner.png";
import VideoBackground from "@/components/hero/VideoBackground";
import Carousel from "@/components/hero/Carousel";

import PopupAdicional from "@/components/popupHero/popup";

export default function Hero() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetSection = document.getElementById("soluctions");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="relative bg-bg-primary text-white min-h-[700px] md:min-h-screen flex justify-center items-center pb-6 pt-6">
      <div className="container absolute flex flex-col items-center">
        <div className="z-20 flex items-center justify-center flex-col gap-4 pt-28 px-2 md:pt-10 md:px-0 max-w-[540px]">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-white">
            Complete for <span className="text-text-primary">commerce</span>
          </h2>
          <p className="text-center text-text-secundary md:text-lg lg:text-2xl">
            Impulsione o e-commerce da sua empresa com soluções integradas,
            performance e experiência.
          </p>
          <button
            className="bg-text-primary py-3 px-28 rounded-full popup-button"
            onClick={togglePopup}
          >
            ATENÇÃO
          </button>
        </div>

        <div className="z-20 w-[355px] mb-8 md:w-[75%] lg:w-[72%] xl:w-[88%] pt-14 md:pt-24">
          <Carousel />
        </div>

        <div className="z-20 flex md:mr-7 xl:mr-[38px] text-white ">
          <Image src={Mouse} alt="icone de um mouse" />
          <Link
            href="#soluctions"
            onClick={scrollToSection}
            className="cursor-pointer"
          >
            Explore mais
          </Link>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg-primary via-transparent to-transparent z-10"></div>

      <VideoBackground />

      <PopupAdicional isOpen={showPopup} togglePopup={togglePopup} />
    </section>
  );
}
