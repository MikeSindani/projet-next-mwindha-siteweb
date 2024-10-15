"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const SectionFAQ = () => {
  return (
    <section
      id="faq"
      className="flex flex-col p-8 md:p-16 space-y-2 bg-secondary-color"
    >
      <ScrollAnimation animateIn="fadeIn" delay={300}>
        <div className="m-3">
          <h2 className="font-bold text-3xl md:text-4xl text-black text-center m-3 font-primary-font">
            Frequently asked questions
          </h2>
          <h1 className="text-md font-bold  text-center text-primary-color ">
            FAQ
          </h1>
          <p className="text-md text-black text-center">
            Don{"'"}t hesitate to ask any other questions
          </p>
        </div>
        <div className="md:mx-[25%] mx-[20px] overflow-clip">
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qu est-ce que ORFEX?</AccordionTrigger>
              <AccordionContent>
                ORFEX est une entreprise diversifiée opérant dans divers
                secteurs, notamment le commerce général, la sous-traitance, l
                approvisionnement et la vente de services. Établie en 2022, l
                entreprise est devenue un partenaire de confiance pour les
                clients de plusieurs secteurs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quels sont les secteurs dans lesquels ORFEX opère?
              </AccordionTrigger>
              <AccordionContent>
                ORFEX opère dans divers secteurs, y compris mais sans s y
                limiter : Commerce général Sous-traitance Approvisionnement
                Vente de services
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Comment ORFEX soutient-elle ses clients?
              </AccordionTrigger>
              <AccordionContent>
                En tant qu entreprise diversifiée, ORFEX offre une gamme de
                services adaptés aux besoins spécifiques de ses clients dans
                différents secteurs. Grâce à sa capacité à offrir des solutions
                sur mesure, ORFEX assure une relation partenariale de confiance
                avec ses clients, contribuant ainsi à leur succès et croissance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Depuis quand existe-t-il ORFEX?
              </AccordionTrigger>
              <AccordionContent>ORFEX a été établie en 2022.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Pourquoi choisir ORFEX?</AccordionTrigger>
              <AccordionContent>
                Choisir ORFEX signifie bénéficier d un partenaire de confiance
                capable de répondre à une large gamme de besoins commerciaux.
                Avec une expertise reconnue dans divers secteurs, ORFEX offre
                des solutions personnalisées qui permettent aux entreprises de
                se développer et de réussir dans leur marché.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionFAQ;
