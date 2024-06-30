import Image from "next/image";

import OrfeuImg from "@/assets/Orfeu-Horizontal-Negativo-1.svg";

import ImgIsabela from "@/assets/isabela.jpg";

export function Orfeu() {
  return (
    <>
      <div className="w-full flex-col inline-block">
        <div className="w-full">
          <Image
            className="max-h-16 w-[146px] object-contain mb-4 "
            src={OrfeuImg}
            alt="Logo São João"
          />
        </div>
        <h1 className="text-white pt-4 pb-8 font-normal text-[20px] md:text-4xl">
          "No site anterior a gente não conseguia
          <span className="text-text-primary"> transmitir a marca </span>
          como queríamos. A Avanti conseguiu, trouxe mais características da
          Orfeu, mais conteúdo, deixou mais
          <span className="text-text-primary"> premium.</span>"
        </h1>

        <div className="flex gap-4">
          <Image
            className="w-12 h-12 max-w-12 object-cover rounded-full border border-white"
            src={ImgIsabela}
            alt="Imagem do CTO das farmácias São João"
          />
          <div className="text-white">
            <h1 className="text-2xl">Isabela</h1>
            <p className="text-sm text-text-secundary">
              Coordenadora de E-commerce
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
