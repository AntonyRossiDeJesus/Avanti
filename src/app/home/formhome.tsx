import { FormHome } from "@/components/FormHome/FormHome";

export function SectionFormHome() {
  return (
    <>
      <section className="w-full bg-bg-navegation flex items-center justify-center">
        <div className="container  py-10 px-8 flex flex-col gap-5 text-white">
          <div>
            <h1 className="text-3xl mb-4 leading-[50px]">
              Quer uma proposta personalizada para a sua empresa?
            </h1>
            <p className="text-text-form-home">
              Um de nossos Digital Commerce Experts entrará em contato para
              entender os desafios do seu negócio e conversar sobre como podemos
              ajudá-lo a acelerar no Comércio Digital.
            </p>
          </div>

          <FormHome />
        </div>
      </section>
    </>
  );
}
