import { DigitalSales } from "../soluctions/DigitalSales";

export default function DigitalSalesSectionTwo() {
  return (
    <>
      <section className="w-full py-10 flex flex-col items-center justify-center">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center md:items-center items-start w-full pb-8 px-8 xl:px-0">
              <h1 className="font-medium text-start lg:text-center text-[28px] md:text-4xl mb-4">
                Digital Sales
              </h1>
              <p className="text-text-digital-sales-page w-[83vw] lg:w-1/2 text-start lg:text-center">
                Habilitamos a sua empresa em distintos modelos de negócio.
                Combinamos a expertise de mais de 200 projetos implementados,
                entregando excelência e conhecimento para o sucesso do seu
                comércio digital.
              </p>
            </div>
          </div>
        </div>

        <DigitalSales />
      </section>
    </>
  );
}
