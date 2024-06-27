import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import Hamburguer from "@/assets/hamburger.png";

const arryMenu = [
  "Serviços",
  "Cases",
  "Quem Somos",
  "Carreira",
  "Marketing Digital",
];

export function Header() {
  const activedStyled = "text-white text-opacity-100 text-white rounded-full";
  return (
    <header className="bg-bg-primary w-full px-8 h-[88px] flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <Image className="h-7" src={Logo} alt="logo da empresa" />

        <nav className="gap-4 hidden lg:flex font-bold">
          {arryMenu.map((item, index) => (
            <Link
              key={index}
              className={`px-4 py-2 text-white text-opacity-60 hover:text-opacity-100 transition-all ${
                index === 0 ? activedStyled : ""
              }`}
              href={"#"}
            >
              {item}
            </Link>
          ))}

          <Link
            className="flex items-center px-3 py-1 border rounded-full text-white font-bold transition-all hover:text-text-primary"
            href={""}
          >
            Fale Conosco
          </Link>
        </nav>

        <div className="bg-bg-hambuguer w-10 h-10 flex items-center justify-center rounded-full lg:hidden">
          <Image src={Hamburguer} alt="" />
        </div>
      </div>
    </header>
  );
}
