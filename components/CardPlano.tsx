import { Check, X, Sparkles, Star, Crown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "./ui/card";
import { ShineBorder } from "./ui/shine-border";

interface CardPlanoProps {
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  features: { title: string; description: string }[];
  noFeatures: { title: string; description: string }[];
  periodo: string;
  principal: boolean;
}

export default function CardPlano({
  tipo_plano,
  descricao_plano,
  preco,
  features,
  noFeatures,
  periodo,
  principal,
}: CardPlanoProps) {
  if (periodo === "mensal") {
    periodo = "Mês";
  }
  return (
    <Card className="text-purple4 relative bg-white/15 p-6 text-base outline">
      {principal && (
        <ShineBorder
          borderWidth={2}
          shineColor={[
            "var(--color-yellow3)",
            "var(--color-yellow2)",
            "var(--color-yellow-500)",
          ]}
        />
      )}
      {/* Header */}
      <div className="relative flex gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white text-shadow-lg">
            <div className="relative flex justify-between gap-2">
              {tipo_plano}{" "}
              {principal ? (
                <Crown className="text-yellow3 h-7 w-7" />
              ) : (
                <Star className="h-7 w-7 text-white" />
              )}
            </div>
          </h2>
          <p className="text-sm tracking-wider text-gray-300 italic">
            {descricao_plano}
          </p>
        </div>
      </div>

      {/* Preço */}
      <div className="relative flex flex-col gap-2">
        <p className="text-4xl font-bold text-white">
          {preco} <span className="text-lg font-normal text-gray-300">/{periodo}</span>
        </p>
      </div>

      {/* Features */}
      <div className="relative flex flex-col gap-2 pb-5">
        <Accordion className="">
          {features.map((feature, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>
                <div className="flex gap-1">
                  {principal ? (
                    <Check className="h-5 w-5 text-yellow3" />
                  ) : (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                  <p className="text-base text-white">{feature.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-5 text-gray-300">{feature.description}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {noFeatures?.map((nofeature, index) => (
          <div key={index} className="relative flex items-start">
            <X className="absolute top-1 -left-1 h-3 w-3 text-red-600" />
            <p className="ml-3 tracking-normal text-gray-300 line-through">
              {nofeature.title}
            </p>
          </div>
        ))}
      </div>
      <a href="#/">
        <Button className="w-full outline outline-white bg-purple4/25">
          Assinar
        </Button>
      </a>
    </Card>
  );
}
