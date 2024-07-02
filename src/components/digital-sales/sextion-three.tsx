import Image from "next/image";
import SetaIconDireita from "@/assets/SetaDireita-Digital-sales.svg";

export default function DigitalSalesSectionThree() {
  return (
    <>
      <section className="w-full bg-[#101419] text-white py-10 flex flex-col items-center justify-center">
        <div className="container md:px-8">
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
                  <div className="flex flex-col gap-4 px-8 pb-8 relative z-20 py-6 2xl:mr-52">
                    <ul className="list-disc px-4 py-4 lg:text-xl">
                      <li>Processo estruturado de implantação;</li>
                      <li>Time 100% certificado;</li>
                      <li>Gestão ágil e eficiente;</li>
                      <li>Metodologia própria;</li>
                      <li>
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

                  <div className="relative w-full max-w-[350px] h-[450px] md:max-w-[250px] md:-mt-14 lg:mt-4 lg:max-w-[400px] 2xl:min-h-[500px]">
                    <div className="absolute left-[5%] top-[20%] right-0 bottom-0 z-50 max-w-[90%] max-h-[75%] bg-background-image-digital-sales-page2 bg-contain bg-no-repeat bg-center  2xl:left"></div>
                    <div className="absolute left-0 top-0 right-0 bottom-0 z-10 w-full  bg-background-image-digital-sales-page bg-contain bg-no-repeat bg-center opacity-60"></div>
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0">
                  <div className="absolute top-2 left-2 right-2 bottom-0 bg-[#151A20] rounded-xl custom-gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
