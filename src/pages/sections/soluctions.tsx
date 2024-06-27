import Image from "next/image";

import CartSale from "@/assets/cart-saler.svg";
import Performance from "@/assets/perfomance.svg";
import Experience from "@/assets/experience.svg";
import LeftArrow from "@/assets/leftarrow.png";
import RightArrow from "@/assets/rightarrow.png";

import { DigitalSales } from "@/components/DigitalSales";

export default function Soluctions() {
  return (
    <>
      <section className="w-full h-auto flex items-center justify-center">
        <div className="container p-8">
          <div>
            <h1 className="text-centertext-black font-normal text-2xl md:text-4xl leading-[1.36] lg:w-[55%]">
              Oferecemos soluções completas para o crescimento e eficiência do
              seu
              <span className="text-text-primary"> negócio</span>
            </h1>

            <div className="w-full flex justify-end py-2">
              <div className="flex gap-2">
                <button>
                  <Image src={LeftArrow} alt="Seta para a esquerda" />
                </button>

                <button>
                  <Image src={RightArrow} alt="Seta para a direita" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 text-center">
              <div className="flex flex-col items-center py-6 md:py-8 cursor-pointer border-t-4">
                <Image src={CartSale} alt="icone de carrinho de compras" />
                <h2 className="text-[12px]">Digital Sales</h2>
                <p className="text-[10px]">Evolua suas vendas</p>
              </div>
              <div className="flex flex-col items-center py-6 md:py-8 cursor-pointer border-t-4">
                <Image src={Performance} alt="icone de carrinho de compras" />
                <h2 className="text-[12px]">Sales Performance</h2>
                <p className="text-[10px]">Melhore o desempenho</p>
              </div>
              <div className="flex flex-col items-center py-6 md:py-8 cursor-pointer border-t-4">
                <Image src={Experience} alt="icone de carrinho de compras" />
                <h2 className="text-[12px] ">Experience</h2>
                <p className="text-[10px]">
                  Experiência inesquecível e garantida
                </p>
              </div>
            </div>

            <div className="inline-block container ">
              {/* <div>
                <Image src={Web} alt="" />
                Implantação
              </div>

              <div>
                <Image src={NativeApp} alt="" />
                Native App
              </div> */}

              <DigitalSales />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
