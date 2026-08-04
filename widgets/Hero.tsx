"use client";

import * as motion from "motion/react-client";

import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import TypewriterText from "@/components/ui/smoothui/typewriter-text";
import { ArrowRight } from "lucide-react";

import SpringCustom from "@/components/motion_custom/SpringCustom";
import SectionTween from "@/components/motion_custom/SectionTween";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col min-h-svh justify-between overflow-hidden px-6 pb-12">
      {/* Top brand bar */}
      <div className="flex items-center justify-between pt-6 pb-22">
        <span className="text-sm font-bold tracking-[0.25em] text-white">
          <BottomUpLetters delay={500}>FUNCIONAL</BottomUpLetters>
          <span className="text-yellow3">
            <BottomUpLetters delay={1300}>FLOW</BottomUpLetters>
          </span>
        </span>
        <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
          <TypewriterText>Bruno Levien</TypewriterText>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <SectionTween horizontal={true} initialNum={-100} delay={1}>
            <motion.div className="bg-yellow3 mb-1 h-px w-8" />
          </SectionTween>
          <span className="text-yellow3 text-xs font-semibold tracking-[0.25em] uppercase">
            <SectionTween horizontal={true} initialNum={-100} delay={1.5}>
              Treino de alta performance
            </SectionTween>
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 flex flex-col text-4xl font-bold tracking-normal text-white">
          <SectionTween horizontal={false} initialNum={-100} delay={2}>
            Reconstrua
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={2}>
            seu movimento.
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={3}>
            <span className="text-yellow3">Domine sua performance.</span>
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={4}>
            Transforme
          </SectionTween>
          <SectionTween horizontal={false} initialNum={-100} delay={4}>
            sua estética.
          </SectionTween>
        </h1>

        {/* Subheading */}
        <SectionTween horizontal={true} initialNum={-100} delay={5}>
          <p className="mb-8 text-base text-white/75">
            Acompanhamento personalizado para desenvolver capacidades físicas e
            construir um corpo atlético, seja qual for o seu nível de
            treinamento:{" "}
            <span className="font-semibold text-white">iniciante</span>,{" "}
            <span className="font-semibold text-white">intermediário</span> ou{" "}
            <span className="font-semibold text-white">avançado</span>.
          </p>
        </SectionTween>

        {/* CTAs */}
        <SpringCustom delayNum={5.5}>
          <div className="flex flex-col gap-3 pt-18">
            <button
              onClick={() => (window.location.href = "#planos")}
              className="group from-yellow3 text-purple4 shadow-yellow3/30 hover:shadow-yellow3/50 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r to-yellow-500 px-6 py-4 text-[15px] font-bold shadow-xl transition active:scale-[0.98]"
            >
              PARTICIPE AGORA
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            {/* <button
            onClick={() => (window.location.href = "#resultados")}
            className="group bg-purple2 flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-[0.98]"
          >
            <Play className="h-4 w-4 fill-white" />
            VEJA OS RESULTADOS
          </button> */}
          </div>
        </SpringCustom>

        {/* Level pills */}
        <div className="mt-8 flex justify-center gap-2">
          <SpringCustom delayNum={5.5}>
            <span className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm">
              <button onClick={() => (window.location.href = "#niveis")}>
                Iniciante
              </button>
            </span>
          </SpringCustom>
          <SpringCustom delayNum={5.7}>
            <span className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm">
              <button onClick={() => (window.location.href = "#niveis")}>
                Intermediário
              </button>
            </span>
          </SpringCustom>
          <SpringCustom delayNum={5.9}>
            <span className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm">
              <button onClick={() => (window.location.href = "#niveis")}>
                Avançado
              </button>
            </span>
          </SpringCustom>
        </div>
      </div>
    </div>
  );
}
