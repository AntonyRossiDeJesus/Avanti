import DigitalSalesHero from "@/components/digital-sales/hero";
import DigitalSalesSectionTwo from "@/components/digital-sales/section-two";
import { SectionFormHome } from "../home/formhome";
import DigitalSalesSectionThree from "@/components/digital-sales/sextion-three";

export default function DigitalSalesPage() {
  return (
    <>
      <main>
        <DigitalSalesHero />
        <DigitalSalesSectionTwo />
        <DigitalSalesSectionThree />
        <SectionFormHome />
      </main>
    </>
  );
}
