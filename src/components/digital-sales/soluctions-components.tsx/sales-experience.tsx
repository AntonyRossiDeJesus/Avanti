import Link from "next/link";

const arryImplantacao = [
  "Conversão",
  "Evolução",
  "Loyalty",
  "Otimização UX/UI",
];

export function SalesExperienceDigitalSalesPage() {
  return (
    <div className="shadow-neutral-200 w-full md:w-[50%] lg:w-[40%] bg-white shadow p-6 rounded-lg ">
      <div className="w-full flex flex-col justify-center items-center gap-4 bg-bg-implantacao px-4 py-8 rounded-3xl">
        <div className=" w-full p-4 rounded-t-lg ">
          <p>
            <p>
              Combinamos conhecimento, metodologias de evolução, soluções de
              personalização, dados, para garantir a melhor experiência do
              cliente.
            </p>
          </p>
        </div>
      </div>
      <nav className="gap-3 max-w-80 flex flex-wrap items-baseline font-bold pt-8">
        {arryImplantacao.map((item, index) => (
          <Link
            key={index}
            className={`px-4 py-2 text-xs md:text-sm lg:text-xl font-normal text-black bg-bg-soluctions transition-all rounded-full`}
            href={"/experience"}
          >
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
}
