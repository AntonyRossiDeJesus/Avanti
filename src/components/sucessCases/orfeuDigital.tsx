import Link from "next/link";

const arryThumbCases = ["Implantação E-commerce VTEX", "Consultoria"];

export function OrfeuCases() {
  return (
    <>
      <div className="pt-2 border-t w-[100%] p-2">
        <div className="relative bg-thumbcases bg-cover w-full pt-[100%] "></div>

        <nav className="gap-3 flex flex-wrap items-baseline font-bold py-4">
          {arryThumbCases.map((item, index) => (
            <Link
              key={index}
              className={`px-4 py-2 text-xs md:text-sm font-normal text-black bg-bg-soluctions transition-all rounded-full`}
              href={"/orfeu-digital"}
            >
              {item}
            </Link>
          ))}
        </nav>

        <p className="xl:text-2xl">
          Como a Orfeu transmitiu a essência da marca para o digital com a
          parceria da Avanti
        </p>
      </div>
    </>
  );
}
