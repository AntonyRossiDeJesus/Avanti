import Image from "next/image";

import AgilidadeIcon from "@/assets/Business-Chart.png";
import PersonalizacaoIcon from "@/assets/document-contract-edit-pen.png";
import PerformanceIcon from "@/assets/Group.png";

export function DigitalSalesSectionFor() {
  return (
    <>
      <section className="w-full">
        <div className="bg-white rounded-t-3xl -mt-50 flex justify-center">
          <div className="container flex flex-col items-center md:flex-row py-4 md:py-20  px-8 md:px-0 justify-center">
            <div className="w-[60%] md:w-full xl:w-[350px] p-6 flex flex-col gap-2">
              <Image
                src={AgilidadeIcon}
                alt="Icone que demostra agilidade nos trabalhos"
              />
              <h3 className="text-[28px]">Agilidade</h3>
              <p className="text-lg">
                Processos estruturados que garantem a eficiência do seu projeto.
              </p>
            </div>

            <div className="w-[60%] md:w-full xl:w-[350px] p-6 flex flex-col gap-2">
              <Image
                src={PersonalizacaoIcon}
                alt="Icone que demostra agilidade nos trabalhos"
              />
              <h3 className="text-[28px]">Personalização</h3>
              <p className="text-lg">
                Seu e-commerce vai refletir a essência da sua marca.
              </p>
            </div>

            <div className="w-[60%] md:w-full xl:w-[350px] p-6 flex flex-col gap-2">
              <Image
                src={PerformanceIcon}
                alt="Icone que demostra agilidade nos trabalhos"
              />
              <h3 className="text-[28px]">Performance</h3>
              <p className="text-lg">
                Experiência para o seu cliente. Resultado para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
