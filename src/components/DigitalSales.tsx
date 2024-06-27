import Image from "next/image";
import Link from "next/link";

import Web from "@/assets/web.png";
import NativeApp from "@/assets/nativeApp.png";

const arryImplantacao = ["Flagship Store", "Marketplace", "D2C", "B2E", "B2C"];
const arryNativeApp = ["Soluções customizadas", "Acelerador", "Super App"];

export function DigitalSales() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:bg-bg-implantacao px-4 py-20 rounded-3xl">
        <div className="shadow-neutral-200 w-full md:w-[35%] bg-white shadow p-2 rounded-lg">
          <div className="flex gap-2 text-xl items-center ">
            <Image src={Web} alt="icone WEB" />
            Implantação
          </div>

          <nav className="gap-2 p-6 max-w-80 flex flex-wrap items-baseline font-bold ">
            {arryImplantacao.map((item, index) => (
              <Link
                key={index}
                className={`px-4 py-2 text-xs text-black bg-bg-soluctions transition-all rounded-full`}
                href={"/soluctions"}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="shadow-neutral-200 w-full md:w-[35%] bg-white shadow p-2 rounded-lg">
          <div className="flex gap-2 text-xl items-center ">
            <Image src={NativeApp} alt="icone native app" />
            Native App
          </div>

          <nav className="gap-2 p-6 max-w-80 flex flex-wrap items-baseline font-bold">
            {arryNativeApp.map((item, index) => (
              <Link
                key={index}
                className={`px-4 py-2 text-xs text-black bg-bg-soluctions transition-all rounded-full`}
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
