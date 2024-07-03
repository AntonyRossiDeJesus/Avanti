import Image from "next/image";

import SaoJoaoImage from "@/assets/thumb-sao-joaao.png";
import SetaDireita from "@/assets/SetaDireita-Digital-sales.svg";

export function SaoJoaoDigitalSalesDepoimento() {
  return (
    <>
      <div className="w-full flex-col">
        <div className="w-full container flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-[28px] text-white md:text-5xl lg:text-6xl lg:max-w-[1000px]">
              Farmácias São João
              <span className="text-text-primary"> cresce 10 vezes</span> o
              faturamento online em parceria com a Avanti
            </h1>

            <div className="flex flex-col gap-4">
              <button className="flex justify-center lg:max-w-[250px] items-center p-2 px-4 bg-text-primary rounded-full gap-2 text-white">
                Visualizar Projeto
                <Image src={SetaDireita} alt="seta para a direita" />
              </button>
              <button className="flex justify-center lg:max-w-[250px] items-center p-2 px-4 border rounded-full gap-2 text-white">
                Todos os Cases
              </button>
            </div>
          </div>

          <Image
            className="w-full max-w-[400px] object-contain mb-4 m-auto"
            src={SaoJoaoImage}
            alt="Imagem de uma loja das farmácias São João"
          />
        </div>
      </div>
    </>
  );
}
