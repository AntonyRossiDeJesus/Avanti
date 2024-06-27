import Link from "next/link";

const arryImplantacao = [
  "Conversão",
  "Evolução",
  "Loyalty",
  "Otimização UX/UI",
];

export function SalesExperience() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:bg-bg-implantacao px-4 py-8 rounded-3xl content-center min-h-96 ">
        <div className="shadow-neutral-200 w-full md:w-[35%] bg-white shadow p-6 rounded-lg">
          <nav className="gap-3 max-w-80 flex flex-wrap items-baseline font-bold ">
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
      </div>
    </>
  );
}
