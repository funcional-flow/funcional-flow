"use client";
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
import DadosResultados from "@/components/DadosResultados";

export default function Resultados() {
  return (
    <div className="relative">
      {/* Eyebrow + heading */}
      <div className="mx-auto mb-8 flex flex-col gap-1 px-6 md:w-full">
        <TituloSessao centralizado={true} escuro={false}>
          <BottomUpLetters triggerOnView={true}>Resultados</BottomUpLetters>
        </TituloSessao>
        <h2 className="text-center text-3xl font-bold tracking-normal lg:text-4xl xl:text-5xl">
          <BlurOutUp delay={500} triggerOnView={true}>
            HISTÓRIAS DE
          </BlurOutUp>{" "}
          <span className="text-yellow3">
            <BlurOutUp delay={500} triggerOnView={true}>
              TRANSFORMAÇÃO
            </BlurOutUp>
          </span>
        </h2>
        <p className="text-center text-base text-white/65 lg:text-lg xl:pt-3 xl:text-2xl">
          <BlurOutUp delay={500} triggerOnView={true}>
            Resultados construídos através do Método Funcional Flow, arraste
            para ver mais.
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
            <SwiperSlide
              key={index}
              className="mx-auto px-6 md:max-w-114 lg:max-w-158 xl:max-w-4xl"
            >
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
      <div className="mx-auto mt-6 flex max-w-md justify-center gap-3 px-6 text-center">
        {/* <SpringCustom delayNum={0.5}>
          <span className="text-sm text-white/40">Arraste para ver mais</span>
        </SpringCustom> */}
      </div>

      {/* Stats strip */}
      <div className="mx-auto mt-10 flex justify-center gap-3 xl:gap-6">
        <DadosResultados descricao="Cidades diferentes">
          <NumberTicker
            value={12}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl"
          />
          <span className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl">
            +
          </span>
        </DadosResultados>

        <DadosResultados descricao="Avaliação média">
          <NumberTicker
            value={4}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl"
          />
          <span className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl">
            .
          </span>
          <NumberTicker
            value={9}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl"
          />
        </DadosResultados>

        <DadosResultados descricao="Taxa de desistência">
          <NumberTicker
            value={8}
            startValue={0}
            className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl"
          />
          <span className="from-yellow3 bg-linear-to-r to-yellow-600 bg-clip-text text-xl leading-none font-bold text-transparent xl:text-3xl">
            %
          </span>
        </DadosResultados>
      </div>

      {/* CTA */}
      <SpringCustom delayNum={0.5}>
        <div className="mx-auto mt-8 max-w-md px-6 xl:max-w-xl">
          <button className="bg-yellow3 text-purple4 shadow-yellow3/20 hover:shadow-yellow3/50 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-[15px] font-bold shadow-xl transition active:scale-[0.98] xl:text-xl">
            QUERO MELHORAR MEU DESEMPENHO
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </SpringCustom>
    </div>
  );
}
