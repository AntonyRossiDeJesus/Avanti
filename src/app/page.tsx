import { Depoiments } from "@/app/home/depoiments";
import { Ecossistema } from "@/app/home/ecossistema";
import Hero from "@/app/home/hero";
import Soluctions from "@/app/home/soluctions";
import SucessCases from "@/app/home/sucessCases";
import { FormHome } from "@/app/home/formhome";

export default function Home() {
  return (
    <>
      <Hero />
      <Soluctions />
      <SucessCases />
      <Depoiments />
      <Ecossistema />
      <FormHome />
    </>
  );
}
