import Image from "next/image";

import Smile from "@/assets/Smiles.png";
import Ampm from "@/assets/AmPm.png";
import Intelbras from "@/assets/Intelbras.png";
import Kopenhagen from "@/assets/Kopenhagen.png";
import SaoJoao from "@/assets/Logo-Farmacias-Sao-Joao-Positiva.png";
import Hypera from "@/assets/logo-negativo.png";
import Loungerie from "@/assets/Loungerie.png";
import Orfeu from "@/assets/Orfeu-Horizontal-Negativo-PB.png";

import VideoBackground from "@/components/VideoBackground";
import Carousel from "@/components/Carousel";
import Slider from "@/app";

export function Hero() {
  return (
    <section className="relative bg-bg-primary text-white min-h-[550px] flex justify-center items-center ">
      <div className="z-10 container absolute p-16">
        <div className="flex items-center justify-center flex-col gap-4 pt-28">
          <h1 className="text-2xl font-bold">
            Complete for <span className="text-text-primary">commerce</span>
          </h1>
          <p className="text-center text-text-secundary">
            Impulsione o e-commerce da sua empresa com soluções integradas,
            performance e experiência.
          </p>
          <button className="bg-text-primary py-3 px-8 rounded-full">
            Agendar uma apresentação
          </button>
        </div>

        {/* <div className="pt-20">
          <div>
            <div className="overflow-hidden">
              <div
                className="w-[2664px] flex gap-6 overflow-hidden"
                id="carouselTrack"
              >
                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Smile} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Ampm} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Intelbras} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Kopenhagen} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={SaoJoao} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Hypera} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Loungerie} alt="" />
                </div>

                <div className="w-[148px] mx-[10px] px-[8px]">
                  <Image src={Orfeu} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <Carousel />
        </div>

        <Slider />
      </div>

      <VideoBackground />
    </section>
  );
}
