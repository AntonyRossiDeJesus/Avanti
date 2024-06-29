import Image from "next/image";

import MensagemIcon from "@/assets/mensagemIcon.png";

export function FormHome() {
  return (
    <>
      <section className="w-full bg-bg-navegation flex items-center justify-center">
        <div className="container  py-10 px-8 flex flex-col gap-5 text-white">
          <div>
            <h1 className="text-3xl mb-4 leading-[50px]">
              Quer uma proposta personalizada para a sua empresa?
            </h1>
            <p className="text-text-form-home">
              Um de nossos Digital Commerce Experts entrará em contato para
              entender os desafios do seu negócio e conversar sobre como podemos
              ajudá-lo a acelerar no Comércio Digital.
            </p>
          </div>

          {/* <form action="" className="flex flex-col"> */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4">
            <div className="w-full lg:w-[49%] flex flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Nome
              </label>
              <input
                className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
                type="text"
                placeholder="Nome e Sobrenome"
              />
            </div>

            <div className="w-full lg:w-[49%] flex flex-col gap-4">
              <label className="text-lg" htmlFor="">
                E-mail
              </label>
              <input
                className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
                type="email"
                placeholder="E-mail para contato"
              />
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Nome da Empresa
              </label>
              <input
                className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
                type="text"
                placeholder="Digite o nome da sua empresa"
              />
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Qual plataforma de E-commerce sua empresa utiliza?
              </label>
              <select name="" id="">
                Selecione uma opção
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Qual seu cargo na empresa?
              </label>
              <select name="" id="">
                Selecione uma opção
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Quantos funcionários sua empresa possui?
              </label>
              <select name="" id="">
                Selecione uma opção
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Quantas lojas sua empresa possui?
              </label>
              <select name="" id="">
                Selecione uma opção
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Telefone
              </label>
              <input
                className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
                type="number"
                placeholder="(00)0000 0000"
              />
            </div>

            <div className="w-full flex lg:w-[100%]  flex-col gap-4">
              <label className="text-lg flex gap-2" htmlFor="">
                <input type="checkbox" placeholder="Nome e Sobrenome" />
                <span>Aceito uso dos termos e condições</span>
              </label>
            </div>

            <button className="bg-text-primary py-2 px-5 rounded-full cursor-pointer flex justify-center gap-2 my-4 text-white w-[60%] sm:w-[50%] lg:w-[30%] xl:w-[20%]">
              Solicitar uma proposta
              <Image
                className="w-[24px] h-[24px] text-white"
                src={MensagemIcon}
                alt=""
              />
            </button>
          </div>
          {/* </form> */}
        </div>
      </section>
    </>
  );
}
