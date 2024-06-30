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

          <form
            action=""
            className="flex flex-col lg:flex-row lg:flex-wrap gap-4"
          >
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
              <label className="text-lg" htmlFor="cargo">
                Qual plataforma de E-commerce sua empresa utiliza?
              </label>
              <select
                name="cargo"
                id="cargo"
                className="p-[15px] bg-bg-input-form-home  text-text-form-home rounded-md
                "
              >
                <option className="text-text-form-home" selected value="">
                  Selecione uma opção
                </option>
                <option className="text-white" value="vtex-cms">
                  VTEX CMS
                </option>
                <option className="text-white" value="vtex-io">
                  VTEX IO
                </option>
                <option className="text-white" value="oracle">
                  Oracle
                </option>
                <option className="text-white" value="magento">
                  Magento
                </option>
                <option className="text-white" value="sap">
                  SAP
                </option>
                <option className="text-white" value="salesforce">
                  SalesForce
                </option>
                <option className="text-white" value="linx-commerce">
                  Linx Commerce
                </option>
                <option className="text-white" value="outros">
                  Outros
                </option>
                <option className="text-white" value="nao-tenho">
                  Não tenho e-commerce ainda
                </option>
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="cargo">
                Qual seu cargo na empresa?
              </label>
              <select
                name="cargo"
                id="cargo"
                className="p-[15px] pr-10 bg-bg-input-form-home text-text-form-home rounded-md"
              >
                <option className="text-text-form-home" value="" selected>
                  Selecione uma opção
                </option>
                <option className="text-white" value="presidente-ceo">
                  Presidente/CEO
                </option>
                <option className="text-white" value="gerente-ecommerce">
                  Gerente de e-commerce
                </option>
                <option className="text-white" value="c-level-diretor">
                  C-Level/Diretor
                </option>
                <option className="text-white" value="gerente-marketing">
                  Gerente de marketing
                </option>
                <option className="text-white" value="gerente-ti">
                  Gerente de TI
                </option>
                <option className="text-white" value="analista-ecommerce">
                  Analista de e-commerce
                </option>
                <option className="text-white" value="analista-marketing">
                  Analista de marketing
                </option>
                <option className="text-white" value="outros">
                  Outros
                </option>
                <option className="text-white" value="nao-tenho">
                  Não tenho e-commerce ainda
                </option>
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="quantidade-funcionarios">
                Quantos funcionários sua empresa possui?
              </label>
              <select
                name="quantidade-funcionarios"
                id="quantidade-funcionarios"
                className="p-[15px] pr-10 bg-bg-input-form-home text-text-form-home rounded-md custom-select"
              >
                <option className="text-text-form-home" value="" selected>
                  Selecione uma opção
                </option>
                <option className="text-white" value="mais-de-1000">
                  Mais de 1.000
                </option>
                <option className="text-white" value="entre-500-999">
                  Entre 500 a 999
                </option>
                <option className="text-white" value="entre-200-499">
                  Entre 200 a 499
                </option>
                <option className="text-white" value="entre-100-199">
                  Entre 100 a 199
                </option>
                <option className="text-white" value="menos-de-100">
                  Menos de 100
                </option>
                <option className="text-white" value="nao-tenho-funcionarios">
                  Não tenho funcionários
                </option>
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="quantidade-lojas">
                Quantas lojas sua empresa possui?
              </label>
              <select
                name="quantidade-lojas"
                id="quantidade-lojas"
                className="p-[15px] pr-10 bg-bg-input-form-home text-text-form-home rounded-md custom-select"
              >
                <option className="text-text-form-home" value="" selected>
                  Selecione uma opção
                </option>
                <option className="text-white" value="mais-de-50">
                  Mais de 50
                </option>
                <option className="text-white" value="entre-21-50">
                  Entre 21 a 50
                </option>
                <option className="text-white" value="entre-6-20">
                  Entre 6 a 20
                </option>
                <option className="text-white" value="entre-1-5">
                  Entre 1 a 5
                </option>
                <option
                  className="text-white"
                  value="ainda-nao-tenho-espaco-fisico"
                >
                  Ainda não tenho espaço físico
                </option>
              </select>
            </div>

            <div className="w-full flex lg:w-[49%] flex-col gap-4">
              <label className="text-lg" htmlFor="">
                Telefone
              </label>
              <input
                className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md appearance-none"
                type="number"
                placeholder="(00)0000 0000"
              />
            </div>

            <div className="w-full flex lg:w-[100%]  flex-col gap-4">
              <label className="text-lg flex gap-2" htmlFor="">
                <input type="checkbox" placeholder="Nome e Sobrenome" />
                <span className="text-base">
                  Aceito uso dos termos e condições
                </span>
              </label>
            </div>

            <button className="bg-text-primary py-2 px-5 rounded-full cursor-pointer flex justify-center gap-2 my-4 text-white max-w-[237px] sm:w-[50%] lg:w-[30%] xl:w-[20%]">
              Solicitar uma proposta
              <Image
                className="w-[24px] h-[24px] text-white"
                src={MensagemIcon}
                alt=""
              />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
