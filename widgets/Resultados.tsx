"use client";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import TituloSessao from "@/components/TituloSessao";
import { NumberTicker } from "@/components/ui/number-ticker";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import SectionTween from "@/components/motion_custom/SectionTween";
import SpringCustom from "@/components/motion_custom/SpringCustom";
import CardResultados from "@/components/CardResultados";

import { results } from "@/data/list_results";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Resultados() {

  return (
    <div className="relative z-10">
      {/* Eyebrow + heading */}
      <div className="mx-auto mb-8 flex flex-col gap-3 px-6 md:w-full">
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
        <p className="text-sm text-white/65">
          <BlurOutUp delay={500} triggerOnView={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
            impedit sint odit officiis rem, aliquid voluptatibus, praesentium
            optio laborum sunt, soluta dolor voluptatem libero et.
          </BlurOutUp>
        </p>
      </div>

      {/* Horizontal swipe feed */}
      <SectionTween upToDown={false} initialNum={60} amountCustom={0.2}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="overflow-hidden"
        >
          {results.map((r, index) => (
            <SwiperSlide key={index} className="px-6 md:max-w-md">
              <CardResultados
                nome={r.name}
                idade={r.age}
                duracao={r.duration}
                destaque={r.highlight}
                nivel={r.level}
                foto={r.photo}
                avaliacao={r.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionTween>

      {/* Nav arrows */}
      <div className="mx-auto mt-6 flex max-w-md justify-center text-center gap-3 px-6">
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
