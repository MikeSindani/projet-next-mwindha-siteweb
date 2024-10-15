
import Header from "@/components/Header/Header"
import SectionsCompteur from "@/components/Sections/sections_compteur";
import UnderConstructionModal from "@/components/Autres/page_en_contruction";
import SectionsContact from "@/components/Sections/sections_contact";
import SectionFAQ from "@/components/Sections/sections_faq";
import SectionsTextContact from "@/components/Sections/sections_text_contact";

export default function Home() {
  return (
    <main className="flex flex-col">
        <UnderConstructionModal/>
        <Header/>
        <SectionsCompteur/>
        <SectionsTextContact/>
        <SectionsContact/>
        <SectionFAQ/>
    </main>
  );
}
