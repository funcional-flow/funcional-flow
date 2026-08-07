"use client";
import { useRef } from "react";
import { Star, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { results } from "@/data/list_results";
import Image from "next/image";
import TituloSessao from "@/components/TituloSessao";
import { NumberTicker } from "@/components/ui/number-ticker";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import SectionTween from "@/components/motion_custom/SectionTween";
import SpringCustom from "@/components/motion_custom/SpringCustom";

export default function Resultados() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.78;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative z-10">
      {/* Eyebrow + heading */}
      <div className="mx-auto mb-8 flex max-w-md flex-col gap-3 px-6">
        <TituloSessao centralizado={false} escuro={false}>
          <BottomUpLetters triggerOnView={true}>Resultados</BottomUpLetters>
        </TituloSessao>
        <h2 className="text-3xl font-bold tracking-normal">
          <BlurOutUp delay={500} triggerOnView={true}>
            HISTÓRIAS DE
          </BlurOutUp>{" "}
          <span className="text-yellow3">
            <BlurOutUp delay={500} triggerOnView={true}>
              TRANSFORMAÇÃO
            </BlurOutUp>
          </span>
        </h2>
        <p className="max-w-sm text-sm text-white/65">
          <BlurOutUp delay={500} triggerOnView={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
            impedit sint odit officiis rem, aliquid voluptatibus, praesentium
            optio laborum sunt, soluta dolor voluptatem libero et.
          </BlurOutUp>
        </p>
      </div>

      {/* Horizontal swipe feed */}
      <SectionTween upToDown={false} initialNum={60} amountCustom={0.2}>
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {results.map((r, i) => (
            <article
              key={r.name}
              className="group relative h-75 w-full shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Photo */}
              <Image src={r.photo} alt={r.name} fill className="object-cover" />
              {/* Gradient overlay */}
              <div className="from-purple4 via-purple4/70 absolute inset-0 bg-linear-to-t to-transparent" />
              {/* <div className="absolute inset-0 bg-linear-to-r from-purple3/30 to-transparent" /> */}

              {/* Index number */}
              {/* <span className="absolute top-5 right-5 text-5xl leading-none font-bold text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span> */}

              {/* Highlight pill */}
              <div className="bg-yellow3 text-purple4 shadow-yellow3/30 absolute top-5 left-5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold shadow-lg">
                <TrendingUp className="h-3.5 w-3.5" />
                {r.highlight}
              </div>

              {/* Content at bottom */}
              <div className="absolute right-0 bottom-0 left-0 p-5">
                {/* Quote */}
                {/* <Quote className="text-yellow3 mb-2 h-5 w-5" />
                <p className="mb-4 line-clamp-4 text-[13.5px] leading-relaxed text-white/85">
                  {r.quote}
                </p> */}

                {/* Identity */}
                <div className="flex flex-col justify-between border-t border-white/15 pt-3">
                  <div className="flex w-full justify-between text-[15px] leading-tight font-bold">
                    <span>
                      {r.name}, {r.age}
                    </span>
                    {/* Rating */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, si) => (
                        <Star
                          key={si}
                          className="fill-yellow3 text-yellow3 h-3.5 w-3.5"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-0.5 text-[11px] text-white/50">
                    {r.level} • {r.duration} de treino
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionTween>

      {/* Nav arrows */}
      <div className="mx-auto mt-6 flex max-w-md items-center gap-3 px-6">
        <SpringCustom delayNum={0}>
          <button
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white active:scale-95"
            aria-label="Anterior"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
        </SpringCustom>
        <SpringCustom delayNum={0.25}>
          <button
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white active:scale-95"
            aria-label="Próximo"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </SpringCustom>
        <SpringCustom delayNum={0.5}>
          <span className="ml-1 text-[12px] text-white/40">
            Arraste para ver mais
          </span>
        </SpringCustom>
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-10 flex justify-center gap-3">
        <div className="min-w-24 rounded-2xl border border-white/10 bg-white/3 p-3 text-center">
          <NumberTicker
            value={12}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent"
          />
          <span className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent">
            +
          </span>
          <div className="mt-1.5 text-[10px] leading-tight text-white/50">
            Cidades diferentes
          </div>
        </div>

        <div className="min-w-24 rounded-2xl border border-white/10 bg-white/3 p-3 text-center">
          <NumberTicker
            value={4}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent"
          />
          <span className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent">
            .
          </span>
          <NumberTicker
            value={9}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent"
          />
          <div className="mt-1.5 text-[10px] leading-tight text-white/50">
            Avaliação média
          </div>
        </div>

        <div className="min-w-24 rounded-2xl border border-white/10 bg-white/3 p-3 text-center">
          <NumberTicker
            value={8}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent"
          />
          <span className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent">
            %
          </span>
          <div className="mt-1.5 text-[10px] leading-tight text-white/50">
            Taxa de desistência
          </div>
        </div>
      </div>

      {/* CTA */}
      <SpringCustom delayNum={0.5}>
        <div className="mx-auto mt-8 max-w-md px-6">
          <button className="bg-yellow3 text-purple4 shadow-yellow3/20 hover:shadow-yellow3/50 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-[15px] font-bold shadow-xl transition active:scale-[0.98]">
            QUERO MELHORAR MEU DESEMPENHO
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </SpringCustom>
    </div>
  );
}
