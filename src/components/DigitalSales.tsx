import Image from "next/image";
import Link from "next/link";

import Web from "@/assets/web.png";
import NativeApp from "@/assets/nativeApp.png";

const arryImplantacao = ["Flagship Store", "Marketplace", "D2C", "B2E", "B2C"];
const arryNativeApp = ["Soluções customizadas", "Acelerador", "Super App"];

export function DigitalSales() {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-start md:flex-row md:content-center md:items-center md:justify-center gap-4 bg-bg-implantacao px-4 py-8 rounded-3xl min-h-96 ">
        <div className="shadow-neutral-200 w-full md:w-[35%] bg-white shadow p-6 rounded-lg">
          <div className="flex gap-2 text-xl items-center mb-6">
            <Image src={Web} alt="icone WEB" />
            Implantação
          </div>

          <nav className="gap-3 max-w-80 flex flex-wrap items-baseline font-bold ">
            {arryImplantacao.map((item, index) => (
              <Link
                key={index}
                className={`px-4 py-2 text-xs md:text-sm lg:text-xl font-normal text-black bg-bg-soluctions transition-all rounded-full`}
                href={"/soluctions"}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="shadow-neutral-200 w-full md:w-[35%] bg-white shadow p-6 rounded-lg">
          <div className="flex gap-2 text-xl items-center mb-6">
            <Image src={NativeApp} alt="icone native app" />
            Native App
          </div>

          <nav className="gap-3 max-w-80 flex flex-wrap items-baseline font-bold">
            {arryNativeApp.map((item, index) => (
              <Link
                key={index}
                className={`px-4 py-2 text-xs md:text-sm lg:text-xl font-normal text-black bg-bg-soluctions transition-all rounded-full`}
                href={"/soluctions"}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
