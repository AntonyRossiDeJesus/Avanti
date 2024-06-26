import Image from "next/image";

import Logo from "@/assets/logo.png";
import Hamburguer from "@/assets/hamburger.png";

export function Header() {
  return (
    <header className="bg-bg-primary w-full px-8 h-[88px] flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <Image className="h-7" src={Logo} alt="" />

        <div className="bg-bg-hambuguer w-10 h-10 flex items-center justify-center rounded-full">
          <Image src={Hamburguer} alt="" />
        </div>
      </div>
    </header>
  );
}
