import Image from "next/image";

import SetaIconDireita from "@/assets/SetaDireita-Digital-sales.svg";

export default function DigitalSalesHero() {
  return (
    <>
      <section className="w-full bg-cover bg-no-repeat bg-bgHeroDigitalCases pt-32 md:pt-0 md:h-[754px] lg:bg-bottom xl:bg-center">
        <div className="container text-white min-h-[600px] w-full sm:w-[510px] lg:w-[645px] xl:w-[706px] flex flex-col justify-center items-center gap-10 py-20 md:py-52 px-8 m-auto lg:mr-24">
          <div className="flex flex-col sm:w-full gap-4 md:min-w-[600px] 2xl:-ml-[400px]">
            <h1 className="text-[26px] font-bold sm:text-4xl max-w-[320px] sm:min-w-full md:text-5xl">
              Tecnologia e experiência para construir o futuro do seu e-commerce
            </h1>
            <p className=" leading-6 max-w-[310px] sm:min-w-full">
              Desde a arquitetura, passando pelo desenvolvimento e testes, até o
              suporte contínuo, confie o sucesso do seu e-commerce a uma equipe
              de especialistas capacitados. Estamos comprometidos com o
              crescimento sustentável e a excelência em todas as fases do seu
              negócio digital.
            </p>
          </div>
          <div className="container max-w-[320px] sm:min-w-full md:min-w-[600px] xl:min-w-[706px] xl:px-8 2xl:-ml-[400px]">
            <div className="flex items-center gap-2 ">
              <button className="rounded-full p-3 min-w-14 min-h-14 bg-text-primary flex items-center justify-center">
                <Image
                  className="w-6 h-3"
                  src={SetaIconDireita}
                  alt="Icone de seta para a direita"
                />
              </button>
              Agende uma apresentação
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
