
import Header from "@/components/Header/Header"
import SectionsCompteur from "@/components/Sections/sections_compteur";

import SectionsContact from "@/components/Sections/sections_contact";
import SectionFAQ from "@/components/Sections/sections_faq";
import SectionsTextContact from "@/components/Sections/sections_text_contact";
import SectionsTeam from "@/components/Sections/sections_teams";
import SectionsPub from "@/components/Sections/sections_pub";
import SectionsServices from "@/components/Sections/sections_services";
import ArrowUpButton from "@/components/Autres/arrow_bouton";

export default function Home() {
  return (
    <main  className="flex flex-col ">
        <Header/>
        <SectionsCompteur/>
        <SectionsServices/>
        <SectionsPub/>
        <SectionsTeam/>
        <SectionsTextContact/>
        <SectionsContact/>
        <SectionFAQ/>
        <ArrowUpButton/>
    </main>
  );
}
