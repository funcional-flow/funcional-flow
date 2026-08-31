import { Check, X, Crown, Rocket, ArrowRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "./ui/card";
import { BorderBeam } from "./ui/border-beam";
import { Feature } from "@/data/list_data_plans";

interface CardPlanoProps {
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  duracao: string;
  features: Feature[];
  noFeatures: Feature[];
  periodo: string;
  principal: boolean;
  link_plano: string;
}

export default function CardPlano({
  tipo_plano,
  descricao_plano,
  preco,
  duracao,
  features,
  noFeatures,
  principal,
  link_plano,
}: CardPlanoProps) {
  let bordaCard = "outline";
  if (principal === true) {
    bordaCard = "outline outline-yellow3";
  }
  return (
    <div className="relative mx-auto md:w-md">
      {principal && (
        <div className="absolute -top-3 left-1/2 z-100 -translate-x-1/2">
          <div className="bg-yellow3 shadow-yellow3/30 relative flex items-center gap-1 rounded-full px-3 shadow-md">
            <Star className="mb-1 h-3 w-3 fill-black text-black" />
            <span className="text-base font-bold text-black">
              Melhor escolha
            </span>
          </div>
        </div>
      )}
      <Card
        className={`text-purple4 relative bg-white/15 p-6 text-base ${bordaCard}`}
      >
        {/* Header */}
        <h2 className="text-2xl font-bold text-white text-shadow-lg">
          <div className="relative flex items-center justify-between gap-2">
            <p>{tipo_plano}</p>
            {principal ? (
              <Crown className="text-yellow3 h-7 w-7" />
            ) : (
              <Rocket className="h-7 w-7 text-white" />
            )}
          </div>
        </h2>

        {/* Preço */}
        {/* Preço */}
        <div className="relative flex flex-col gap-2">
          <div className="flex items-end gap-1">
            <p className="hover:text-shadow-yellow3 text-4xl font-bold text-white transition-colors text-shadow-md text-shadow-yellow-600 xl:text-5xl">
              {preco}
            </p>
            <span className="text-lg font-normal text-gray-300">{duracao}</span>
          </div>
          <span className="text-base font-normal text-gray-300 xl:text-sm">
            {descricao_plano}
          </span>
        </div>

        {/* Features */}
        <div className="relative flex flex-col pb-5 gap-2">
          <Accordion defaultValue={["0"]} className="">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>
                  <div className="flex gap-1">
                    {principal ? (
                      <Check className="text-yellow3 bg-yellow3/20 mr-1 h-5 w-5 rounded-full stroke-5 p-1" />
                    ) : (
                      <Check className="h-4 w-4 text-green-600" />
                    )}
                    <p className="text-base text-white">{feature.title}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="max-w-70 pl-5 text-gray-300">
                    {feature.description}
                  </div>
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
        <a href={link_plano} target="_blank">
          {principal ? (
            <Button className="bg-yellow3 w-full p-5">
              <div className="flex items-center gap-1">
                <span className="mt-1 text-xl text-shadow-lg">
                  ASSINAR O PREMIUM
                </span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Button>
          ) : (
            <Button className="bg-purple4 w-full p-5">
              <div className="flex items-center gap-1">
                <span className="mt-1 text-xl text-shadow-lg">
                  ASSINAR O STANDARD
                </span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </Button>
          )}
        </a>
        {principal && (
          <>
            <BorderBeam
              duration={6}
              size={300}
              borderWidth={3}
              className="via-yellow3 from-transparent to-transparent"
            />
            <BorderBeam
              duration={6}
              delay={3}
              size={300}
              borderWidth={3}
              className="via-yellow3 from-transparent to-transparent"
            />
          </>
        )}
      </Card>
    </div>
  );
}
