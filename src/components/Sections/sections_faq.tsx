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
              <AccordionTrigger>How do I contact MWINDHA?</AccordionTrigger>
              <AccordionContent>
                You can contact us by phone at +27 729153576 or by email at info@mwindha.co.za.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are your business hours?</AccordionTrigger>
              <AccordionContent>
                Our business hours are Monday to Friday, 8:00 am to 5:00 pm.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is your physical address?</AccordionTrigger>
              <AccordionContent>
                Our physical address is 15 Kingswood,Riverclub,Sandton,2191.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How long does it take to respond to a message?</AccordionTrigger>
              <AccordionContent>
                We aim to respond to all messages within 24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Can I contact you outside of business hours?</AccordionTrigger>
              <AccordionContent>
                Yes, you can contact us outside of business hours, but we may not respond until the next business day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Is my personal information secure when I contact you?</AccordionTrigger>
              <AccordionContent>
                Yes, we take the security of your personal information seriously and will not share it with anyone without your consent.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionFAQ;
