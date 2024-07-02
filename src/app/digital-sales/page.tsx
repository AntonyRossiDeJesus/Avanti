export default function DigitalSales() {
  return (
    <>
      <main>
        <section className="w-full bg-cover bg-no-repeat bg-bgHeroDigitalCases ">
          <div className="container text-white min-h-[600px] w-full sm:w-[510px] flex flex-col justify-center items-center gap-10 py-10 px-8 m-auto ">
            <div className="flex flex-col sm:w-full gap-4">
              <h1 className="text-[26px] font-bold sm:text-4xl  max-w-[320px] sm:min-w-full ">
                Tecnologia e experiência para construir o futuro do seu
                e-commerce
              </h1>
              <p className=" leading-6 max-w-[310px] sm:min-w-full">
                Desde a arquitetura, passando pelo desenvolvimento e testes, até
                o suporte contínuo, confie o sucesso do seu e-commerce a uma
                equipe de especialistas capacitados. Estamos comprometidos com o
                crescimento sustentável e a excelência em todas as fases do seu
                negócio digital.
              </p>
            </div>
            <div className="container max-w-[320px] sm:min-w-full">
              <div className="flex items-center gap-2 ">
                <button className="rounded-full p-3 min-w-12 min-h-4 bg-text-primary flex items-center justify-center">
                  <span className="text-white">&#8594;</span>
                </button>
                Agende uma apresentação
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
