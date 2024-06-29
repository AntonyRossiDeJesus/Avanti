"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import PopupMenu from "@/components/popupMenu/PopupMenu";

const arryMenu = [
  "Serviços",
  "Cases",
  "Quem Somos",
  "Carreira",
  "Marketing Digital",
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // document.body.classList.toggle("no-scroll", !isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const activedStyled = "text-white text-opacity-100 rounded-full";

  return (
    <header className="bg-bg-primary w-full px-8 h-[88px] flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <Image className="h-7" src={Logo} alt="logo da empresa" />

        <nav className="gap-4 hidden lg:flex font-bold">
          {arryMenu.map((item, index) => (
            <Link
              key={index}
              className={`px-4 py-2 text-white hover:text-text-primary text-opacity-60 hover:text-opacity-100 transition-all ${
                index === 0 ? activedStyled : ""
              }`}
              href="#"
            >
              {item}
            </Link>
          ))}

          <Link
            className="flex items-center px-3 py-1 border rounded-full text-white font-bold transition-all hover:text-text-primary"
            href="#"
          >
            Fale Conosco
          </Link>
        </nav>

        <div
          className={`z-[9999] flex flex-col justify-around w-8 h-8 cursor-pointer lg:hidden ${
            isOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span
            className={` block w-full h-1 bg-bg-line-cases transition-transform transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-bg-line-cases transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={` block w-full h-1 bg-bg-line-cases transition-transform transform ${
              isOpen ? "-rotate-45 -translate-y-[0.85rem]" : ""
            }`}
          ></span>
        </div>
      </div>
      <PopupMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
