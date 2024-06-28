import Image from "next/image";

import { CarouselCases } from "@/components/CarouselCases";

export function SucessCases() {
  return (
    <>
      <section className="overflow-hidden flex justify-center items-center flex-col">
        <div className="container flex flex-col xl:flex-row py-10 px-8 gap-x-5">
          <div className=" xl:min-w-[450px]">
            <h1 className="text-[28px] lg:text-4xl w-[80%] xl:text-5xl pb-4 xl:leading-[1.36]">
              Explore nossos cases de
              <span className="text-text-primary"> sucesso</span>
            </h1>

            <p className="opacity-65 pb-4">
              Nossos cases não são apenas exemplos de nosso trabalho, mas são a
              representação do impacto tangível que podemos ter no seu negócio.
              Explore e imagine o que podemos conquistar juntos.
            </p>
          </div>

          <div>
            <div className="flex min-w-[800px] md:w-[1300px] xl:w-[1800px] 2xl:w-[2100px] gap-2 xl:gap-4">
              <CarouselCases />
            </div>
          </div>
        </div>

        <div className="container py-4 px-8 flex items-center justify-end gap-x-4 ">
          <div className="flex items-center w-[60%] lg:w-[500px]  h-[4px]">
            <button className="bg-bg-line-cases h-1 w-full"></button>
            <button className="bg-bg-line-cases h-1 w-full"></button>
            <button className="bg-bg-line-cases h-1 w-full"></button>
          </div>

          <div className="flex gap-x-4 ">
            <button className="flex justify-center pr-1 w-11 text-3xl h-11 border rounded-full">
              &#60;
            </button>
            <button className="flex justify-center pl-1 w-11 text-3xl h-11 border rounded-full">
              &#62;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
