"use client";

import * as motion from "motion/react-client";

import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import TypewriterText from "@/components/ui/smoothui/typewriter-text";
import { ArrowRight } from "lucide-react";

import SpringCustom from "@/components/motion_custom/SpringCustom";
import SectionTween from "@/components/motion_custom/SectionTween";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
  return (
    <div className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden px-6 pb-12 lg:container lg:mx-auto">
      <div className="flex items-center justify-between pt-6">
        <span className="text-sm font-bold tracking-[0.25em] text-white lg:text-xs xl:text-sm">
          <BottomUpLetters delay={500}>FUNCIONAL</BottomUpLetters>
          <span className="text-yellow3">
            <BottomUpLetters delay={1300}>FLOW</BottomUpLetters>
          </span>
        </span>
        <span className="text-sm font-medium tracking-widest text-white/60 uppercase lg:text-xs xl:text-sm">
          <TypewriterText>Bruno Levien</TypewriterText>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full lg:pt-5.5">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center gap-2 md:mt-6 md:mb-2">
          <SectionTween horizontal={true} initialNum={-100} delay={0.25}>
            <motion.div className="bg-yellow3 mb-1 h-px w-8" />
          </SectionTween>
          <span className="text-yellow3 text-xs font-semibold tracking-[0.25em] uppercase xl:text-sm">
            <SectionTween horizontal={true} initialNum={-100} delay={0.5}>
              Treino de alta performance
            </SectionTween>
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 flex flex-col text-4xl font-bold tracking-normal text-white xl:text-5xl">
          <SectionTween horizontal={false} initialNum={-100} delay={0.75}>
            Reconstrua
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={0.75}>
            seu movimento.
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={1}>
            <span className="text-yellow3">Domine sua performance.</span>
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={1.25}>
            Transforme
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={1.25}>
            sua estética.
          </SectionTween>
        </h1>
      </div>

      {/* Subheading */}
      <div className="relative z-10 mx-auto w-full lg:pt-5">
        <SectionTween horizontal={true} initialNum={-100} delay={1.5}>
          <p className="mb-8 text-lg text-white/75 xl:text-center xl:text-xl">
            Acompanhamento personalizado para desenvolver capacidades físicas e
            construir um corpo atlético, seja qual for o seu nível de
            treinamento:{" "}
            <span className="font-semibold tracking-wider text-white">
              iniciante
            </span>
            ,{" "}
            <span className="font-semibold tracking-wider text-white">
              intermediário
            </span>{" "}
            ou{" "}
            <span className="font-semibold tracking-wider text-white">
              avançado
            </span>
            .
          </p>
        </SectionTween>
      </div>

      {/* CTAs */}
      <div className="relative z-10 lg:pt-5">
        {/* Button */}
        <div className="pb-5">
          <SpringCustom delayNum={1.75}>
            <div className="mx-auto flex w-full flex-col md:w-md lg:hidden">
              <button
                onClick={() => (window.location.href = "#planos")}
                className="group from-yellow3 text-purple4 shadow-yellow3/30 hover:shadow-yellow3/50 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r to-yellow-500 px-6 py-4 text-[15px] font-bold shadow-xl transition active:scale-[0.98] md:text-lg lg:text-sm"
              >
                PARTICIPE AGORA
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 lg:h-4 lg:w-4" />
              </button>
            </div>
            <div className="mx-auto hidden items-center justify-center lg:flex lg:w-xs xl:w-lg">
              <InteractiveHoverButton
                onClick={() => (window.location.href = "#planos")}
                className="w-full text-sm xl:text-xl"
              >
                PARTICIPE AGORA
              </InteractiveHoverButton>
            </div>
          </SpringCustom>
        </div>

        {/* Level pills */}
        <div className="flex justify-center gap-2 md:gap-7 md:pt-2 lg:gap-3 lg:pt-0">
          <SpringCustom delayNum={2}>
            <button
              onClick={() => (window.location.href = "#niveis")}
              className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm md:text-base lg:hidden"
            >
              Iniciante
            </button>
            <ShinyButton
              onClick={() => (window.location.href = "#niveis")}
              className="bg-purple3/10 hidden rounded-full text-sm font-medium lg:block xl:text-lg"
            >
              Iniciante
            </ShinyButton>
          </SpringCustom>
          <SpringCustom delayNum={2.25}>
            <button
              onClick={() => (window.location.href = "#niveis")}
              className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm md:text-base lg:hidden"
            >
              Intermediário
            </button>
            <ShinyButton
              onClick={() => (window.location.href = "#niveis")}
              className="bg-purple3/10 hidden rounded-full text-sm font-medium lg:block xl:text-lg"
            >
              Intermediário
            </ShinyButton>
          </SpringCustom>
          <SpringCustom delayNum={2.5}>
            <button
              onClick={() => (window.location.href = "#niveis")}
              className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm md:text-base lg:hidden"
            >
              Avançado
            </button>
            <ShinyButton
              onClick={() => (window.location.href = "#niveis")}
              className="bg-purple3/10 hidden rounded-full text-sm font-medium lg:block xl:text-lg"
            >
              Avançado
            </ShinyButton>
          </SpringCustom>
        </div>
      </div>
    </div>
  );
}
