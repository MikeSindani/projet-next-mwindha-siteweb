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
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I schedule a consultation?</AccordionTrigger>
              <AccordionContent>
                You can contact us by phone or by email to schedule a consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is your physical address?</AccordionTrigger>
              <AccordionContent>
                Our physical address is RIVERCLUB, SANDTON, SOUTH AFRICA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I get in touch with a specific team member?</AccordionTrigger>
              <AccordionContent>
                You can contact us by phone or by email to request to speak with a specific team member.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How long does it take to respond to a message?</AccordionTrigger>
              <AccordionContent>
                We aim to respond to all messages within 24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Can I request a call back?</AccordionTrigger>
              <AccordionContent>
                Yes, you can request a call back by filling out our contact form or by contacting us by phone.
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
            <AccordionItem value="item-10">
              <AccordionTrigger>What services do you offer at MWINDHA?</AccordionTrigger>
              <AccordionContent>
                We offer a full range of services including payroll, accounting, tax planning, financial analysis, and advisory services. We aim to be your one-stop shop for all your financial needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                How can MWINDHA help my business with accounting needs?
              </AccordionTrigger>
              <AccordionContent>
                Our accounting services include preparation of financial statements, management accounts, and professional accountant letters. We ensure accurate reporting, compliance, and insightful financial analysis to support your business decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>
                What is an accountant letter and how can MWINDHA help prepare it?
              </AccordionTrigger>
              <AccordionContent>
                An accountant letter is a document that provides key financial information about a business. MWINDHA can help prepare accurate and well-crafted accountant letters that convey your financial information effectively and leave a lasting impression.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>
                What are the benefits of using MWINDHA{"'"}s payroll services?
              </AccordionTrigger>
              <AccordionContent>
                We simplify payroll processes, ensure accurate and timely payments, manage tax withholdings, and generate payroll reports. This allows you to focus on running your business while we handle the payroll complexities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-14">
              <AccordionTrigger>
                How do I get started with MWINDHA{"'"}s tax planning services?
              </AccordionTrigger>
              <AccordionContent>
                Contact us via phone or email to schedule a consultation. We will assess your tax situation, identify opportunities for tax savings, and develop a tailored tax planning strategy for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-15">
              <AccordionTrigger>
                What is tax clearance and how can MWINDHA help obtain it?
              </AccordionTrigger>
              <AccordionContent>
                Tax clearance is a process that involves obtaining a certificate of tax compliance. MWINDHA can help obtain tax clearance by reviewing financial documents, completing necessary forms, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-16">
              <AccordionTrigger>
                How can MWINDHA help individuals prepare and submit their personal income tax returns?
              </AccordionTrigger>
              <AccordionContent>
                MWINDHA can help individuals prepare and submit their personal income tax returns by providing expert assistance with tax preparation and submission.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-17">
              <AccordionTrigger>
                What is VAT registration and how can MWINDHA simplify the process?
              </AccordionTrigger>
              <AccordionContent>
                VAT registration is a process that involves registering for value-added tax. MWINDHA can simplify the process by guiding businesses through the necessary steps, completing forms, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-18">
              <AccordionTrigger>
                What are the benefits of working with certified accounting and management professionals like MWINDHA?
              </AccordionTrigger>
              <AccordionContent>
                Working with certified accounting and management professionals like MWINDHA can help businesses benefit from strategic guidance, high-quality accounting and payroll services, and financial management solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-19">
              <AccordionTrigger>
                How can MWINDHA help businesses achieve their long-term financial goals?
              </AccordionTrigger>
              <AccordionContent>
                MWINDHA can help businesses achieve their long-term financial goals by providing strategic guidance, accounting and payroll services, and financial management solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SectionFAQ;
