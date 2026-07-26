import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "./ui/card";

interface CardPlanoProps {
  id: string;
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  features: { title: string; description: string }[];
  noFeatures: { title: string; description: string }[];
  texto_final: string;
}

export default function CardPlano({
  tipo_plano,
  descricao_plano,
  features,
  noFeatures,
//   texto_final,
}: CardPlanoProps) {
  return (
    <Card className="text-purple4 p-6 text-base">
      <h2 className="text-purple3 pb-1 text-center text-2xl font-bold text-shadow-lg">
        {tipo_plano}
      </h2>
      <p className="pb-1 text-sm tracking-wider text-gray-600 italic">
        {descricao_plano}
      </p>
      <div className="relative flex flex-col gap-2 pb-5">
        <Accordion className="">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>
                <div className="flex gap-1">
                  <Check className="h-4 w-4 text-green-600" />
                  <p className="text-base">{feature.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-5">{feature.description}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {noFeatures?.map((nofeature, index) => (
          <div key={index} className="relative flex items-start">
            <X className="absolute top-1 -left-1 h-3 w-3 text-red-600" />
            <p className="ml-3 tracking-normal text-gray-600 line-through">
              {nofeature.title}
            </p>
          </div>
        ))}
      </div>
      <a href="#/">
        <Button className="w-full">Assinar</Button>
      </a>
    </Card>
  );
}
