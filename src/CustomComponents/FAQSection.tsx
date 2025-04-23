import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

type Faq = { q: string; a: string; };
export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="xl:max-w-6xl mx-auto px-2 md:px-8 py-14" id="faq">
      <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked Question.</h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 bg-white rounded-2xl shadow p-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-base font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" alt="FAQ" className="w-72 h-56 object-cover rounded-xl shadow" />
        </div>
      </div>
    </section>
  );
}
