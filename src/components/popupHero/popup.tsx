import Image from "next/image";
import React from "react";

import ImgInspecialista from "@/assets/bg-popup.webp";
import AvatarAntony from "@/assets/avatarAntony.jpeg";
import IconeSetaLink from "@/assets/extern-link.svg";

interface PopupAdicionalProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const PopupAdicional: React.FC<PopupAdicionalProps> = ({
  isOpen,
  togglePopup,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-black rounded-md shadow-lg max-w-[90%] md:max-w-[600px] lg:max-w-[700px]">
        <Image
          className="min-h-[80px] lg:min-h-36"
          src={ImgInspecialista}
          alt="Imagem do especialista"
        />

        <div className="w-20 ml-8 -mt-10 lg:ml-14 lg:-mt-14">
          <Image
            className="relative rounded-full border-4 z-[60]"
            src={AvatarAntony}
            alt="Avatar especialista"
          />
        </div>

        <div className="p-8">
          <p className="pb-2">Olá, obrigado por interagir com meu projeto</p>
          <p>
            Essa página foi elaborada totalmente com fonte de dados da
            <a
              className="text-text-primary pl-[2px] hover:text-slate-600"
              href="https://penseavanti.com.br/"
            >
              Avanti
            </a>
            , todos os direitos de imagens e textos são reservados a ela.
          </p>
        </div>

        <div className="px-8">
          <h2 className="text-lg pb-2">Conheça mais do meu trabalho</h2>
          <span className="flex gap-2">
            <a
              target="_blank"
              className="hover:text-text-primary"
              href="https://maxdesigns.com.br/projetos/"
            >
              Projetos WP
            </a>
            <Image src={IconeSetaLink} alt="Icone seta link rodapé" />
          </span>

          <span className="flex gap-2">
            <a
              target="_blank"
              className="hover:text-text-primary"
              href="https://github.com/AntonyRossiDeJesus"
            >
              GitHub
            </a>
            <Image src={IconeSetaLink} alt="Icone seta link rodapé" />
          </span>

          <span className="flex gap-2">
            <a
              target="_blank"
              className="hover:text-text-primary"
              href="https://www.linkedin.com/in/antony-jesus-65ba83279/"
            >
              Linkedin
            </a>
            <Image src={IconeSetaLink} alt="Icone seta link rodapé" />
          </span>

          <span className="flex gap-2">
            <a
              target="_blank"
              className="hover:text-text-primary"
              href="https://www.instagram.com/antonyrossibr/"
            >
              Instagram
            </a>
            <Image src={IconeSetaLink} alt="Icone seta link rodapé" />
          </span>
        </div>

        <button
          className="m-8 px-4 py-2 border border-transparent rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all"
          onClick={togglePopup}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PopupAdicional;
