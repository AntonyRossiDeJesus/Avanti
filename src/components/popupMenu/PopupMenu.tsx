import { FC, useEffect, useState } from "react";
import Link from "next/link";

interface PopupMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  arryMenu: { text: string; link: string; fontSize: string }[];
}

const arryMenuPopup = [
  { text: "Serviços", link: "/servicos", fontSize: "22px" },
  { text: "Digital Sales", link: "/digital-sales", fontSize: "16px" },
  { text: "Sales Performance", link: "/performance", fontSize: "16px" },
  { text: "Experience", link: "/experience", fontSize: "16px" },
  { text: "Cases", link: "#", fontSize: "22px" },
  { text: "Quem Somos", link: "#", fontSize: "22px" },
  { text: "Carreiras", link: "#", fontSize: "22px" },
  { text: "Marketing Digital", link: "#", fontSize: "22px" },
];

const PopupMenu: FC<PopupMenuProps> = ({ isOpen, toggleMenu, arryMenu }) => {
  const [itemClasses, setItemClasses] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      const timeouts: NodeJS.Timeout[] = [];
      setItemClasses([]);
      arryMenuPopup.forEach((_, index) => {
        timeouts.push(
          setTimeout(() => {
            setItemClasses((prev) => [...prev, "opacity-100 translate-x-10"]);
          }, index * 100)
        );
      });
      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    } else {
      setItemClasses([]);
    }
  }, [isOpen, arryMenuPopup]);

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <div
      className={`fixed trans top-0 right-0 py-2 px-4 w-full h-full bg-bg-popup shadow-lg z-50 transition-transform transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(event) => event.stopPropagation()}
    >
      <i className="flex items-start justify-start bg-no-repeat mb-10 bg-logoMax w-full h-16"></i>
      <ul className="flex flex-col items-end justify-end gap-4 w-full h-auto text-black list-none px-14">
        {arryMenuPopup.map((item, index) => (
          <Link
            key={index}
            className={`font-semibold hover:text-text-primary text-white opacity-0 transform translate-x-10 transition-all duration-500 ${
              itemClasses[index] || ""
            }`}
            onClick={handleLinkClick}
            href={item.link}
            style={{ fontSize: item.fontSize }}
          >
            {item.text}
          </Link>
        ))}
      </ul>

      <div className="w-full flex justify-end px-4 py-4">
        <button className="flex items-center px-3 py-1 border rounded-full text-white font-bold transition-all hover:text-text-primary">
          Fale Conosco
        </button>
      </div>
    </div>
  );
};

export default PopupMenu;
