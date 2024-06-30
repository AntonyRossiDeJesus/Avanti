import Image from "next/image";

import EmailIcon from "@/assets/EmailIcon.svg";
import bgsection from "@/assets/ecosystem.png";

export function Ecossistema() {
  return (
    <>
      <section className="w-full min-h-[500px] flex flex-col md:flex-row justify-center bg-no-repeat bg-left-top ecossystem-wrapper pb-10">
        <div className="container min-h-[400px] max-h-[100%] bg-no-repeat bg-left-top ecossystem-wrapper">
          <Image src={bgsection} alt="" />
        </div>

        <div className="container flex flex-col justify-center">
          <div className="px-5">
            <p className="text-2xl md:text-3xl lg:text-[44px] 2xl:text-6xl">
              Ecossistema <span className="text-text-primary">Avanti</span>
            </p>
            <p className="mt-4">
              O ecossistema representa a nossa integração e conexão com as
              melhores empresas do mercado. Estamos sintonizados com soluções
              que endereçam as necessidades do comércio do futuro.
            </p>
            <p className="mt-6 flex items-center">
              <span className="text-3xl mr-4 text-bold leading-none">+200</span>
              Clientes ativos
            </p>
            <p className="mt-6 flex items-center">
              <span className="text-3xl mr-4 text-bold leading-none">+10</span>
              Anos de experiência em ecommerce e VTEX
            </p>

            <button className="bg-text-primary py-2 px-5 rounded-full flex gap-2 my-4 text-white">
              <Image
                className="w-[24px] h-[24px]"
                src={EmailIcon}
                alt="Icone de email"
              />
              Fale conosco
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
