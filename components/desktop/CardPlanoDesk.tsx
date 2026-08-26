import { Check, X, Crown, Rocket, ArrowRight, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Feature } from "@/data/list_data_plans";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";

interface CardPlanoDeskProps {
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  duracao: string;
  features: Feature[];
  noFeatures: Feature[];
  periodo: string;
  principal: boolean;
}

export default function CardPlanoDesk({
  tipo_plano,
  descricao_plano,
  preco,
  duracao,
  features,
  noFeatures,
  principal,
}: CardPlanoDeskProps) {
  let bordaCard = "outline";
  if (principal === true) {
    bordaCard = "outline outline-yellow3";
  }
  return (
    <div className="relative mx-auto md:w-md xl:w-lg">
      {principal && (
        <div className="absolute -top-3 left-1/2 z-100 -translate-x-1/2">
          <div className="bg-yellow3 shadow-yellow3/30 relative flex items-center gap-1 rounded-full px-3 shadow-md">
            <Star className="mb-1 h-3 w-3 fill-black text-black xl:h-4 xl:w-4" />
            <span className="text-base font-bold text-black xl:text-lg">
              Melhor escolha
            </span>
          </div>
        </div>
      )}
      <Card
        className={`text-purple4 relative bg-white/15 p-6 text-base xl:min-h-240 ${bordaCard} ${principal ? "" : ""}`}
      >
        {/* Header */}
        <div className="relative flex gap-5 xl:pt-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white text-shadow-lg xl:pb-3 xl:text-4xl xl:tracking-wide">
              <div className="relative flex items-center justify-between gap-2 xl:min-w-md">
                <span>{tipo_plano}</span>
                {principal ? (
                  <Crown className="text-yellow3 h-7 w-7 xl:h-9 xl:w-9" />
                ) : (
                  <Rocket className="h-7 w-7 text-white xl:h-9 xl:w-9" />
                )}
              </div>
            </h2>
            <p className="text-sm tracking-wider text-gray-300 italic xl:pb-4 xl:text-xl">
              {descricao_plano}
            </p>
          </div>
        </div>

        {/* Preço */}
        <div className="relative flex flex-col gap-2">
          <p className="text-4xl font-bold text-white">
            {preco}{" "}
            <span className="text-lg font-normal text-gray-300">{duracao}</span>
          </p>
        </div>

        {/* Features */}
        <div className="relative flex flex-col gap-2">
          <Accordion defaultValue={["0"]} className="">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    {principal ? (
                      <Check className="text-yellow3 bg-yellow3/20 mr-1 h-5 w-5 rounded-full stroke-5 p-1" />
                    ) : (
                      <Check className="h-4 w-4 text-green-600" />
                    )}
                    <p className="text-base text-white xl:text-2xl xl:tracking-wide">
                      {feature.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-5 text-gray-300 xl:w-md xl:pl-8 xl:text-xl">
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
        <a href="#/" className="absolute bottom-5 left-0 w-full px-4">
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
