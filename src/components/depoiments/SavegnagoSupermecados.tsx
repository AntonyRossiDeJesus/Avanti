import Image from "next/image";

import SavegnagoImg from "@/assets/Savegnago-e1717019369635.png";

import ImgVanessa from "@/assets/vanessa.jpg";

export function SavegnagoSupermecados() {
  return (
    <>
      <div className="w-full flex-col inline-block">
        <div className="w-full">
          <Image
            className="max-h-16 w-[146px] object-contain mb-4 "
            src={SavegnagoImg}
            alt="Logo São João"
          />
        </div>
        <h1 className="text-white pt-4 pb-8 font-normal text-[20px] md:text-4xl">
          "Um dos diferenciais da Avanti é o
          <span className="text-text-primary"> relacionamento</span>. Vocês
          entendem o que está acontecendo no varejo, vivem o nosso dia a dia,
          sabem das nossas dores e do que a gente precisa. Isso é importante
          para ter <span className="text-text-primary">sinergia</span> e
          <span className="text-text-primary"> agilidade</span> nas demandas."
        </h1>

        <div className="flex gap-4">
          <Image
            className="w-12 h-12 max-w-12 object-cover rounded-full border border-white"
            src={ImgVanessa}
            alt="Imagem do CTO das farmácias São João"
          />
          <div className="text-white">
            <h1 className="text-2xl">Vanessa</h1>
            <p className="text-sm text-text-secundary">Gestora de E-commerce</p>
          </div>
        </div>
      </div>
    </>
  );
}
