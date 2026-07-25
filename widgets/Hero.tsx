"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full items-end overflow-hidden px-6 pt-24 pb-12">
      {/* Top brand bar */}
      <div className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-6 pt-6">
        <span className="text-sm font-bold tracking-[0.25em] text-white">
          FUNCIONAL<span className="text-yellow3">FLOW</span>
        </span>
        <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
          Bruno Levien
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-md">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <span className="bg-yellow3 mb-1 h-px w-8" />
          <span className="text-yellow3 text-xs font-semibold tracking-[0.25em] uppercase">
            Treino de alta performance
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 flex flex-col text-4xl font-bold tracking-normal text-white">
          <span>Reconstrua</span>
          <span>seu movimento.</span>
          <span className="text-yellow3">Domine sua performance.</span>
          <span>Transforme</span>
          <span>sua estética.</span>
        </h1>

        {/* Subheading */}
        <p className="mb-8 text-[15px] text-white/75">
          Acompanhamento personalizado para desenvolver capacidades físicas e
          construir um corpo atlético, seja qual for o seu nível de treinamento:{" "}
          <span className="font-semibold text-white">iniciante</span>,{" "}
          <span className="font-semibold text-white">intermediário</span> ou{" "}
          <span className="font-semibold text-white">avançado</span>.
        </p>

        {/* CTAs */}
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

        {/* Level pills */}
        <div className="mt-8 flex justify-center gap-2">
          {["Iniciante", "Intermediário", "Avançado"].map((level) => (
            <span
              key={level}
              className="bg-purple3/10 rounded-full border border-white/15 px-3.5 pt-1.5 pb-1 text-xs font-medium backdrop-blur-sm"
            >
              {level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
