"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import PopupMenu from "@/components/popupMenu/PopupMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activedStyled = "text-white text-opacity-100 rounded-full";

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

  const arryMenu = [
    { text: "Serviços", link: "/servicos", fontSize: "22px" },
    { text: "Cases", link: "/cases", fontSize: "22px" },
    { text: "Quem Somos", link: "/quem-somos", fontSize: "22px" },
    { text: "Carreira", link: "/carreira", fontSize: "22px" },
    { text: "Marketing Digital", link: "/marketing-digital", fontSize: "22px" },
  ];

  return (
    <header className="bg-bg-primary w-full px-8 h-[88px] flex items-center justify-center overflow-x-hidden">
      <div className="container flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <a target="_blank" href="https://penseavanti.com.br/">
            <Image className="h-7" src={Logo} alt="logo da empresa" />
          </a>
        </div>

        <nav className="gap-4 hidden lg:flex font-bold text-base lg:text-[17px] xl:text-xl">
          {arryMenu.map((item, index) => (
            <Link
              key={index}
              className={`py-2 text-white hover:text-text-primary text-opacity-60 hover:text-opacity-100 transition-all ${
                index === 0 ? activedStyled : ""
              }`}
              href={item.link}
            >
              {item.text}
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
            className={`block w-full h-1 bg-bg-line-cases transition-transform duration-300 transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-bg-line-cases transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-bg-line-cases transition-transform duration-300 transform ${
              isOpen ? "-rotate-45 -translate-y-[0.85rem]" : ""
            }`}
          ></span>
        </div>
      </div>

      <PopupMenu isOpen={isOpen} toggleMenu={toggleMenu} arryMenu={arryMenu} />
    </header>
  );
};

export default Header;
