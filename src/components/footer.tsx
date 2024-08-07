import Image from "next/image";
import Link from "next/link";

import LogoAvanti from "@/assets/logo.png";
import LogoInstagram from "@/assets/logoInstagram.png";
import LogoYouTube from "@/assets/logoYoutube.png";
import LogoLinkedin from "@/assets/logoLinkedin.png";
import IconeSetaRodape from "@/assets/extern-link.svg";

export function Footer() {
  return (
    <>
      <footer className="w-full flex items-center justify-center bg-bg-footer">
        <div className=" p-8">
          <div className="flex w-full flex-col gap-4 lg:gap-10 lg:flex-row lg:pt-20 lg:pb-20 xl:gap-20 text-sm xl:text-base">
            <Image
              className="w-[168px] h-[32px] mt-6 lg:mt-0 lg:mr-20 xl:mr-40 2xl:mr-96"
              src={LogoAvanti}
              alt="Logo Avanti"
            />

            <div className="flex flex-col gap-4 lg:min-w-[270px] text-base">
              <ul className="text-text-form-home max-w-[293px]">
                <li className="text-white pb-2 pt-5 lg:pt-0">
                  FLORIANÓPOLIS - SC
                </li>
                <li>Rodovia SC 401, 500</li>
                <li>
                  Ed. Techno Tower - Torre 2, 2º andar João Paulo - CEP
                  88030-000
                </li>
                <li>(48) 3232-7425</li>
              </ul>
              <ul className="text-text-form-home min-w-[270px] xl:max-w-[270px]">
                <li className="text-white pb-2">SÃO PAULO - SP</li>
                <li>
                  Av. Brigadeiro Faria Lima, 4440 10º andar Itaim Bibi – CEP
                  04538-132
                </li>
                <li className="pb-2">(47) 98812-1450</li>
                <li className="pb-4">contato@penseavanti.com.br</li>
              </ul>
            </div>

            <ul className="text-text-form-home">
              <li className="text-white pb-4 text-base">
                Soluções para seu E-commerce
              </li>
              <li className="pb-3 flex gap-2">
                <Link href={"/digital-sales"}>Digital Sales</Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>

              <li className="pb-3 flex gap-2">
                <Link href={"/performance"}>Sales Performance</Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>

              <li className="pb-3 flex gap-2">
                <Link href={"/experience"}>Experience</Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>
            </ul>

            <ul className="text-text-form-home pb-6">
              <li className="text-white pb-4 text-base">Avanti</li>

              <li className="pb-3 flex gap-2">
                <Link href={"/quem-somos"}>Sobre nós</Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>

              <li className="pb-3 flex gap-2">
                <Link href={"/cases"}>Cases</Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>

              <li className="pb-3 flex gap-2">
                <Link href={"/carreiras"}>Carreiras</Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>

              <li className="pb-3 flex gap-2">
                <Link href={"/politica-de-privacidade"}>
                  Políticas de Privacidade
                </Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>

              <li className="pb-3 flex gap-2">
                <Link href={"/marketing-digital"}>
                  Avanti Marketing Digital
                </Link>
                <Image
                  className="w-5 h-5"
                  src={IconeSetaRodape}
                  alt="Icone seta link rodape"
                />
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 md:flex-row 2xl:justify-between ">
            <div className="text-white flex flex-col gap-4">
              <p>© 2024 Todos os Direitos Reservados.</p>
              <p>
                Avanti Desenvolvimento de Sistemas LTDA CNPJ 19.697.992/0001-86
              </p>
              <p className="text-text-form-home">
                Transformando o futuro do seu comércio digital
              </p>
            </div>

            <div className="flex items-center gap-4 text-white md:w-[50%] lg:justify-end">
              <p>Redes Sociais</p>
              <div className="flex gap-2">
                <Image src={LogoInstagram} alt="Icone rede social instagram" />
                <Image src={LogoLinkedin} alt="Icone rede social linkedin" />
                <Image src={LogoYouTube} alt="Icone rede social youtube" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
