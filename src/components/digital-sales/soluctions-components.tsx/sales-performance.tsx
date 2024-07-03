import Link from "next/link";

const arryImplantacao = [
  "Mídia",
  "SEO",
  "Mídia Planning",
  "Retail Media Management",
  "Web Analytics",
];

export function SalesPerformanceDigitalSalesPage() {
  return (
    <div className="shadow-neutral-200 w-full md:w-[50%] lg:w-[40%] bg-white shadow p-6 rounded-lg ">
      <div className="w-full flex flex-col justify-center items-center gap-4 bg-bg-implantacao px-4 py-8 rounded-3xl">
        <div className=" w-full p-4 rounded-t-lg ">
          <p>
            <p>
              Transforme visitantes em clientes e potencialize o retorno sobre
              investimento do seu e-commerce por meio de estratégias de tráfego
              pago, SEO, personalização e CRM.
            </p>
          </p>
        </div>
      </div>

      <nav className="gap-3 max-w-80 pt-8 flex flex-wrap items-baseline font-bold ">
        {arryImplantacao.map((item, index) => (
          <Link
            key={index}
            className={`px-4 py-2 text-xs md:text-sm lg:text-xl font-normal text-black bg-bg-soluctions transition-all rounded-full`}
            href={"/performance"}
          >
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
}
