import { Check, X, Crown, Rocket, ArrowRight, Star, Info } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { Feature } from "@/data/list_data_plans";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

interface CardPlanoDeskProps {
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

export default function CardPlanoDesk({
  tipo_plano,
  descricao_plano,
  preco,
  duracao,
  features,
  noFeatures,
  principal,
  link_plano,
}: CardPlanoDeskProps) {
  let bordaCard = "outline";
  if (principal === true) {
    bordaCard = "outline outline-yellow3";
  }
  return (
    <div className="group relative md:w-md lg:w-xs xl:w-md">
      {principal ? (
        <div className="bg-yellow3 absolute inset-0 z-0 rounded-4xl transition-transform hover:-translate-x-1 hover:-translate-y-1" />
      ) : (
        <div className="absolute inset-0 z-0 rounded-4xl bg-gray-600 transition-transform hover:-translate-x-1 hover:-translate-y-1" />
      )}
      {principal && (
        <div className="absolute -top-3.5 left-[50%] z-100 translate-x-[-50%] duration-200 group-hover:-top-4.5 group-hover:left-[49%]">
          <div className="bg-yellow3 shadow-yellow3/30 relative flex items-center gap-1 rounded-full px-3 shadow-md">
            <Star className="mb-1 h-3 w-3 fill-black text-black xl:h-4 xl:w-4" />
            <span className="text-base font-bold text-black xl:text-lg">
              Melhor escolha
            </span>
          </div>
        </div>
      )}
      <Card
        className={`${principal ? "group-hover:-translate-x-1 group-hover:-translate-y-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"} text-purple4 from-purple4 to-purple4/90 relative rounded-4xl bg-linear-to-bl px-5 py-3 transition-transform xl:px-10 xl:py-6 ${bordaCard}`}
      >
        {/* Header */}
        <h2 className="pt-2 text-2xl font-bold text-white text-shadow-lg xl:pt-5 xl:pb-3 xl:text-4xl xl:tracking-wide">
          <div className="relative flex items-center justify-between gap-2">
            <span>{tipo_plano}</span>
            {principal ? (
              <Crown className="text-yellow3 h-7 w-7 xl:h-9 xl:w-9" />
            ) : (
              <Rocket className="h-7 w-7 text-white xl:h-9 xl:w-9" />
            )}
          </div>
        </h2>

        {/* Preço */}
        <div className="relative flex flex-col gap-2 pb-2 xl:pb-5">
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

        <div className="relative flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex items-center gap-2">
                {principal ? (
                  <Check className="text-yellow3 bg-yellow3/20 h-5 w-5 rounded-full stroke-5 p-1 xl:h-5 xl:w-5" />
                ) : (
                  <Check className="h-4 w-4 text-green-600" />
                )}
                <p className="text-sm text-gray-100 xl:text-lg">
                  {feature.title}
                </p>
              </div>
              <HoverCard>
                <HoverCardTrigger
                  delay={0}
                  closeDelay={10}
                  render={
                    <Info className="ml-2 h-5 w-5 text-gray-300 xl:h-6 xl:w-6" />
                  }
                />
                <HoverCardContent
                  side="right"
                  className="border-yellow3 bg-purple4 border text-gray-300 xl:w-md xl:pl-8 xl:text-xl"
                >
                  {feature.description}
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
          {noFeatures.length > 0 && (
            <div className="flex flex-col gap-2 pt-0 xl:pt-0">
              {noFeatures?.map((nofeature, index) => (
                <div key={index} className="relative flex items-center gap-2">
                  <X className="h-4 w-4 text-red-500" />
                  <p className="text-sm text-gray-300 line-through xl:text-xl">
                    {nofeature.title}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        {/* <div className="relative flex flex-col gap-2">
          <Accordion defaultValue={["0"]} className="">
            {features.map((feature, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>
                  <div className="flex items-center gap-1">
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
            <div key={index} className="relative flex items-center">
              <X className="h-3 w-3 text-red-600 xl:h-4 xl:w-4" />
              <p className="ml-1 tracking-normal text-gray-300 line-through xl:text-lg">
                {nofeature.title}
              </p>
            </div>
          ))}
        </div> */}
        <a
          href={link_plano}
          target="_blank"
          className="w-full pt-4 pb-2 xl:pt-8 xl:pb-2"
        >
          <Button
            className={`w-full cursor-pointer p-6 hover:scale-105 hover:shadow-xs hover:duration-300 ${principal ? "bg-yellow3" : "bg-yellow3"}`}
          >
            <div className="flex items-center gap-1">
              <span className="mt-1 text-xl text-shadow-lg">
                {principal ? "ASSINAR O PREMIUM" : "ASSINAR O STANDARD"}
              </span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </Button>
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
