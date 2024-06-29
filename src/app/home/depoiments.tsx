import Image from "next/image";

import { SaoJoao } from "@/components/depoiments/saoJoao";

import LeftArrow from "@/assets/seta-esquerda-branco.svg";
import RightArrow from "@/assets/seta-direita-branco.svg";

export function Depoiments() {
  return (
    <>
      <section className="w-full flex items-center justify-center bg-bg-depoiments py-10 md:py-40">
        <div className="container px-8">
          <div className="overflow-hidden">
            <div>
              <SaoJoao />
            </div>

            <div className="flex items-center gap-4 text-white pt-8">
              <div>1/3</div>

              <div className="w-[55%] md:w-full flex items-center gap-2">
                <button className="bg-bg-navegation h-1 w-full"></button>
                <button className="bg-bg-navegation h-1 w-full"></button>
                <button className="bg-bg-navegation h-1 w-full"></button>
              </div>

              <div className="flex gap-x-4 ">
                <button className="flex justify-center pr-1 w-11 text-3xl h-11">
                  <Image src={LeftArrow} alt="Icone seta para esquerda" />
                </button>
                <button className="flex justify-center pl-1 w-11 text-3xl h-11">
                  <Image src={RightArrow} alt="Icone seta para direita" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// className="w-[2933px]"
