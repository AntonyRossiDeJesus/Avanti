import Image from "next/image";
import SetaIconDireita from "@/assets/SetaDireita-Digital-sales.svg";

export default function DigitalSalesSectionThree() {
  return (
    <>
      <section className="w-full bg-[#101419] text-white py-10 flex flex-col items-center justify-center">
        <div className="container md:px-8 pb-10">
          <div className="flex flex-col justify-center items-center relative w-full">
            <div className="flex flex-col justify-center w-full relative">
              <div className="flex flex-col justify-start items-start w-full pb-8 px-8 md:px-0 xl:px-0">
                <span className="bg-[#1a1d22] text-white px-3 py-1 font-normal mb-4 rounded-3xl text-base">
                  Tecnologia em ação
                </span>
                <h1 className="font-medium w-full lg:text-start text-[34px] md:text-5xl mb-4">
                  Implantação de excelência e
                  <span className="text-text-primary"> personalização</span>
                </h1>
              </div>

              <div className="relative rounded-xl overflow-hidden ">
                <div className="bg-gradient-to-b flex flex-col items-center md:items-start md:flex-row from-[rgba(29,36,45,1)] to-[rgba(29,36,45,0)] md:pr-8 ">
                  <div className="flex flex-col gap-4 p-8 relative z-20 py-6 2xl:mr-52">
                    <ul className="flex flex-col gap-y-[3vw] md:gap-y-[1vw] list-disc pl-6 2xl:pt-8">
                      <li className="text-lightgray text-[16px] md:text-xl">
                        Processo estruturado de implantação;
                      </li>
                      <li className="text-lightgray text-[16px] md:text-xl">
                        Time 100% certificado;
                      </li>
                      <li className="text-lightgray text-[16px] md:text-xl">
                        Gestão ágil e eficiente;
                      </li>
                      <li className="text-lightgray text-[16px] md:text-xl">
                        Metodologia própria;
                      </li>
                      <li className="text-lightgray text-[16px] md:text-xl">
                        Projetos desenvolvidos sob medida para cada empresa e
                        suas regras de negócio.
                      </li>
                    </ul>

                    <div className="flex items-center gap-2  lg:text-xl">
                      <button className="rounded-full p-3 min-w-14 min-h-14 bg-text-primary flex items-center justify-center">
                        <Image
                          className="w-6 h-3"
                          src={SetaIconDireita}
                          alt="Icone de seta para a direita"
                        />
                      </button>
                      Converse com um especialista
                    </div>
                  </div>

                  <div className="relative w-full max-w-[350px] h-[450px] md:max-w-[250px] md:-mt-14 lg:mt-4 lg:max-w-[400px] 2xl:min-h-[600px] 2xl:min-w-[500px] ">
                    <div className="absolute left-[4%] 2xl:left-[4.5%] top-[21%] md:top-[18%] 2xl:top-[20%] right-0 bottom-0 z-50 max-w-[91%] max-h-[75%] bg-background-image-digital-sales-page2 bg-contain bg-no-repeat bg-center  "></div>
                    <div className="absolute left-0 top-0 right-0 bottom-0 z-10 w-full bg-background-image-digital-sales-page bg-contain bg-no-repeat bg-center"></div>
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <div className="absolute top-1 left-1 right-1 bottom-0 bg-[#151A20] rounded-xl custom-gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
