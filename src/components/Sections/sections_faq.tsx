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
              <AccordionTrigger>What services do you offer at MWINDHA?</AccordionTrigger>
              <AccordionContent>
                  We offer a full range of services including payroll, accounting, tax planning, financial analysis, and advisory services. We aim to be your one-stop shop for all your financial needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
              How can MWINDHA help my business with accounting needs?
              </AccordionTrigger>
              <AccordionContent>
              Our accounting services include preparation of financial statements, management accounts, and professional accountant letters. We ensure accurate reporting, compliance, and insightful financial analysis to support your business decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                  How can MWINDHA help my business with accounting needs?
              </AccordionTrigger>
              <AccordionContent>
                 Our accounting services include preparation of financial statements, management accounts, and professional accountant letters. We ensure accurate reporting, compliance, and insightful financial analysis to support your business decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
              What are the benefits of using MWINDHA{"'"}s payroll services?
              </AccordionTrigger>
              <AccordionContent>We simplify payroll processes, ensure accurate and timely payments, manage tax withholdings, and generate payroll reports. This allows you to focus on running your business while we handle the payroll complexities.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I get started with MWINDHA{"'"}s tax planning services?</AccordionTrigger>
              <AccordionContent>
              Contact us via phone or email to schedule a consultation. We will assess your tax situation, identify opportunities for tax savings, and develop a tailored tax planning strategy for your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionFAQ;
