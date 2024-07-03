"use client";

import Image from "next/image";
import MensagemIcon from "@/assets/mensagemIcon.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const dadosSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().min(1).optional(),
  nomeEmpresa: z.string().min(1).optional(),
  plataforma: z.string().min(1).optional(),
  cargo: z.string().min(1).optional(),
  qntLojas: z.string().min(1).optional(),
  qntFuncionarios: z.string().min(1).optional(),
  telefone: z.string().min(11).optional(),
  checkBox: z.boolean().optional(),
});

type dadosSchema = z.infer<typeof dadosSchema>;

export function FormHome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dadosSchema>({
    resolver: zodResolver(dadosSchema),
  });

  function onSubmit(data: dadosSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="flex flex-col lg:flex-row lg:flex-wrap gap-4"
    >
      <div className="w-full lg:w-[49%] flex flex-col gap-4">
        <label className="text-lg" htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
          type="text"
          placeholder="Nome e Sobrenome"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full lg:w-[49%] flex flex-col gap-4">
        <label className="text-lg" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
          type="email"
          placeholder="E-mail para contato"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex lg:w-[49%] flex-col gap-4">
        <label className="text-lg" htmlFor="nomeEmpresa">
          Nome da Empresa
        </label>
        <input
          id="nomeEmpresa"
          className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
          type="text"
          placeholder="Digite o nome da sua empresa"
          {...register("nomeEmpresa")}
        />
        {errors.nomeEmpresa && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex lg:w-[49%] flex-col gap-4">
        <label className="text-lg" htmlFor="plataforma">
          Qual plataforma de E-commerce sua empresa utiliza?
        </label>
        <select
          id="plataforma"
          {...register("plataforma")}
          className="p-[15px] bg-bg-input-form-home  text-text-form-home rounded-md"
          defaultValue=""
        >
          <option className="text-text-form-home" value="">
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
        {errors.plataforma && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex lg:w-[49%] flex-col gap-4">
        <label className="text-lg" htmlFor="cargo">
          Qual seu cargo na empresa?
        </label>
        <select
          id="cargo"
          {...register("cargo")}
          className="p-[15px] pr-10 bg-bg-input-form-home text-text-form-home rounded-md"
          defaultValue=""
        >
          <option className="text-text-form-home" value="">
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
        {errors.cargo && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex lg:w-[49%] flex-col gap-4">
        <label className="text-lg" htmlFor="quantidade-lojas">
          Quantas lojas sua empresa possui?
        </label>
        <select
          id="quantidade-lojas"
          {...register("qntLojas")}
          className="p-[15px] pr-10 bg-bg-input-form-home text-text-form-home rounded-md custom-select"
          defaultValue=""
        >
          <option className="text-text-form-home" value="">
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
          <option className="text-white" value="ainda-nao-tenho-espaco-fisico">
            Ainda não tenho espaço físico
          </option>
        </select>
        {errors.qntLojas && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex lg:w-[49%] flex-col gap-4">
        <label className="text-lg" htmlFor="quantidade-funcionarios">
          Quantos funcionários sua empresa possui?
        </label>
        <select
          id="quantidade-funcionarios"
          {...register("qntFuncionarios")}
          className="p-[15px] pr-10 bg-bg-input-form-home text-text-form-home rounded-md custom-select"
          defaultValue=""
        >
          <option className="text-text-form-home" value="">
            Selecione uma opção
          </option>
          <option className="text-white" value="mais-de-1000">
            Mais de 1000
          </option>
          <option className="text-white" value="entre-501-1000">
            Entre 501 a 1000
          </option>
          <option className="text-white" value="entre-101-500">
            Entre 101 a 500
          </option>
          <option className="text-white" value="entre-11-100">
            Entre 11 a 100
          </option>
          <option className="text-white" value="entre-1-10">
            Entre 1 a 10
          </option>
        </select>
        {errors.qntFuncionarios && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex flex-col gap-4 lg:w-[49%]">
        <label className="text-lg" htmlFor="telefone">
          Telefone com DDD
        </label>
        <input
          id="telefone"
          className="p-[15px] bg-bg-input-form-home text-text-form-home rounded-md"
          type="text"
          placeholder="(XX) XXXX-XXXX"
          {...register("telefone")}
        />
        {errors.telefone && (
          <span className="text-red-500 text-base">Campo obrigatório</span>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <input
            id="checkbox"
            type="checkbox"
            className="w-5 h-5 accent-[#005CFF] bg-gray-100 rounded "
            {...register("checkBox")}
          />
          <label className="text-sm lg:text-lg" htmlFor="checkbox">
            Aceito uso dos termos e condições
          </label>
        </div>
      </div>

      <button
        className="w-full max-w-[250px] flex items-center justify-center px-5 py-2 bg-text-primary text-white text-base rounded-full gap-4 lg:w-[22rem]"
        type="submit"
      >
        Solicitar uma proposta
        <Image className="w-6 h-6" src={MensagemIcon} alt="Ícone de mensagem" />
      </button>
    </form>
  );
}
