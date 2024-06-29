// src/components/PopupMenu.tsx

import Link from "next/link";
import { FC } from "react";

interface PopupMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const PopupMenu: FC<PopupMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 py-2 px-4 w-full h-full bg-bg-popup shadow-lg z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(event) => event.stopPropagation()}
    >
      <i className="flex items-start justify-start bg-no-repeat mb-10 bg-logoMax w-full h-16"></i>
      <ul className="flex flex-col items-end justify-end gap-4 w-full h-auto text-black list-none px-6">
        <Link
          className="text-[22px] font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Serviços
        </Link>
        <Link
          className="font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Digital Sales
        </Link>
        <Link
          className="font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Sales Performance
        </Link>
        <Link
          className="font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Experience
        </Link>
        <Link
          className="text-[22px] font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Cases
        </Link>
        <Link
          className="text-[22px] font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Quem Somos
        </Link>
        <Link
          className="text-[22px] font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Carreira
        </Link>
        <Link
          className="text-[22px] font-semibold hover:text-text-primary text-white"
          href={"/#"}
        >
          Marketing Digital
        </Link>
      </ul>

      <div className="w-full flex justify-end px-6 py-4">
        <button className="flex items-center px-3 py-1 border rounded-full text-white font-bold transition-all hover:text-text-primary">
          Fale Conosco
        </button>
      </div>
    </div>
  );
};

export default PopupMenu;
