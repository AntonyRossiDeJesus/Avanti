import Image from "next/image";

import SaoJoaoImg from "@/assets/Logo-Farmacias-Sao-Joao-Positiva.png";

import ImgCtoSaoJoao from "@/assets/ceo-farmacia-sao-joao.jpg";

export function SaoJoao() {
  return (
    <>
      <div className="w-full flex-col">
        <div className="w-full">
          <Image
            className="max-h-16 w-[146px] object-contain mb-4 "
            src={SaoJoaoImg}
            alt="Logo São João"
          />
        </div>
        <h1 className="text-white pt-4 pb-8 font-normal text-[20px] md:text-4xl">
          "Tivemos um{" "}
          <span className="text-text-primary">crescimento exponencial </span>em
          <span className="text-text-primary"> curto </span>
          tempo. A Avanti entende que precisamos acolher o cliente e não atender
          o cliente. "
        </h1>

        <div className="flex gap-4">
          <Image
            className="w-12 h-12 max-w-12 object-cover rounded-full border border-white"
            src={ImgCtoSaoJoao}
            alt="Imagem do CTO das farmácias São João"
          />
          <div className="text-white">
            <h1 className="text-2xl">José Leal</h1>
            <p className="text-sm text-text-secundary">CTO</p>
          </div>
        </div>
      </div>
    </>
  );
}
