import DigitalSalesHero from "@/components/digital-sales/hero";
import DigitalSalesSectionTwo from "@/components/digital-sales/section-two";
import { SectionFormHome } from "../home/formhome";
import DigitalSalesSectionThree from "@/components/digital-sales/section-three";
import { DigitalSalesSectionFor } from "@/components/digital-sales/section-for";

export default function DigitalSalesPage() {
  return (
    <>
      <main>
        <DigitalSalesHero />
        <DigitalSalesSectionTwo />
        <DigitalSalesSectionThree />
        <DigitalSalesSectionFor />
        <SectionFormHome />
      </main>
    </>
  );
}
