import Image from "next/image";
import Header from "@/components/Header/Header"
import SectionsCompteur from "@/components/Sections/sections_compteur";
import UnderConstructionModal from "@/components/Autres/page_en_contruction";

export default function Home() {
  return (
    <main className="flex flex-col">
        <UnderConstructionModal/>
        <Header/>
        <SectionsCompteur/>
    </main>
  );
}
