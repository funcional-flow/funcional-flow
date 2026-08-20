import TituloSessao from "@/components/TituloSessao";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { listaFaq } from "@/data/lista_faq";

export default function Faq() {
  return (
    <div>
      <TituloSessao className="pb-5">FAQ</TituloSessao>
      <Accordion className="px-10 flex flex-col mx-auto md:max-w-lg">
          {listaFaq.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>
                <div className="flex gap-1">
                  <p className="text-base">{faq.pergunta}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-5 text-black/70">{faq.resposta}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </div>
  )
}