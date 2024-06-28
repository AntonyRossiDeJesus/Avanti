import Link from "next/link";

const arryThumbCases = ["Implantação E-commerce VTEX", "Consultoria"];
const arryThumbCases2 = [
  "SEO",
  "UX/UI",
  "Implantação E-commerce VTEX",
  "Consultoria",
];

const arryThumbCases3 = [
  "UX/UI",
  "Implantação E-commerce VTEX",
  "Consultoria",
  "SEO",
];

export function CarouselCases() {
  return (
    <>
      <div className="pt-3 border-t w-[80%] md:w-[100%] xl:w-[20%]">
        <div className="bg-thumbcases bg-cover w-full min-h-64 md:h-[350px] lg:h-[400px] "></div>

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

      <div className="pt-3 border-t w-[80%] md:w-[100%] xl:w-[20%]">
        <div className="bg-thumbcases2 bg-cover w-full min-h-64 md:h-[350px] lg:h-[400px]"></div>

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

      <div className="pt-3 border-t w-[80%] md:w-[100%] xl:w-[20%]">
        <div className="bg-thumbcases3 bg-cover w-full min-h-64 md:h-[350px] lg:h-[400px]"></div>

        <nav className="gap-3 w-full flex flex-wrap items-baseline font-bold py-4">
          {arryThumbCases3.map((item, index) => (
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
