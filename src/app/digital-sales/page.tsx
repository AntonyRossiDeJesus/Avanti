import DigitalSalesHero from "@/components/digital-sales/hero";
import DigitalSalesSectionTwo from "@/components/digital-sales/section-two";
import { SectionFormHome } from "../home/formhome";
import DigitalSalesSectionThree from "@/components/digital-sales/section-three";
import { DigitalSalesSectionFor } from "@/components/digital-sales/section-for";
import { SucessCasesDigitalSales } from "@/components/digital-sales/section-five";
import SoluctionsDigitalSalesPage from "@/components/digital-sales/section-six";

export default function DigitalSalesPage() {
  return (
    <>
      <main>
        <DigitalSalesHero />
        <DigitalSalesSectionTwo />
        <DigitalSalesSectionThree />
        <DigitalSalesSectionFor />
        <SucessCasesDigitalSales />
        <SoluctionsDigitalSalesPage />
        <SectionFormHome />
      </main>
    </>
  );
}
