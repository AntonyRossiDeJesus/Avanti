import Link from "next/link";

const arryThumbCases2 = [
  "SEO",
  "UX/UI",
  "Implantação E-commerce VTEX",
  "Consultoria",
];

export function SavegnagoCases() {
  return (
    <>
      <div className="pt-2 border-t w-[100%] p-2">
        <div className="relative bg-thumbcases2 bg-cover w-full pt-[100%] "></div>

        <nav className="gap-3 w-full flex flex-wrap items-baseline font-bold py-4">
          {arryThumbCases2.map((item, index) => (
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
          Expertise da Avanti em supermercados transforma o digital do Savegnago
        </p>
      </div>
    </>
  );
}
