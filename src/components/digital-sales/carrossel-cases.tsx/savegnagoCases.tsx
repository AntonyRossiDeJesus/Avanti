import Image from "next/image";

import SavegmagoImage from "@/assets/thumb-case-site-1-webp.webp";
import SetaDireita from "@/assets/SetaDireita-Digital-sales.svg";

export function SavegnagoDigitalSalesDepoimento() {
  return (
    <>
      <div className="w-full flex-col">
        <div className="container w-full flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-[28px] text-white md:text-4xl lg:text-5xl lg:max-w-[1000px]">
              Expertise da Avanti em supermecados
              <span className="text-text-primary pr-2">
                transforma o digital
              </span>
              do Savegnago
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
            src={SavegmagoImage}
            alt="Imagem de uma loja da Savegnago Supermecados"
          />
        </div>
      </div>
    </>
  );
}
