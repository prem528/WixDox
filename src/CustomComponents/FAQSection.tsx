import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


type Faq = { q: string; a: string; };
export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="xl:max-w-6xl mx-auto px-2 md:px-8 py-18" id="faq">
      <h3 className="text-4xl font-semibold text-center text-blue-700 mb-6">Frequently Asked Question.</h3>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 bg-slate-50 rounded-2xl shadow p-7">
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
          <DotLottieReact
            src="https://lottie.host/2b86343c-62ad-4d17-b2d4-72030d713282/gO9vdnbjK0.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
}
