"use client";

import TituloSessao from "@/components/TituloSessao";
import { NumberTicker } from "@/components/ui/number-ticker";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import SectionTween from "@/components/motion_custom/SectionTween";
import SpringCustom from "@/components/motion_custom/SpringCustom";
import CardResultados from "@/components/CardResultados";

import { results } from "@/data/list_results";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Pagination } from "swiper/modules";
import DadosResultados from "@/components/DadosResultados";
import BotaoCta from "@/components/BotaoCta";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Resultados() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null,
  );
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
      </div>

      {/* Horizontal swipe feed */}
      <SectionTween upToDown={false} initialNum={60} amountCustom={0.2}>
        <Swiper
          onSwiper={setSwiperInstance}
          slidesPerView={"auto"}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Pagination]}
          //   modules={[Pagination, Navigation]}
          className="overflow-hidden"
        >
          {results.map((r, index) => (
            <SwiperSlide
              key={index}
              className="mx-auto px-6 md:max-w-114 lg:max-w-100 lg:pb-2 xl:max-w-150"
            >
              <CardResultados
                nome={r.name}
                idade={r.age}
                foto={r.photo}
                avaliacao={r.rating}
                quote={r.quote}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionTween>

      {/* Nav arrows */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          className="hover:shadow-yellow3 hover:text-yellow3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition hover:shadow-sm active:scale-80"
          aria-label="Resultado anterior"
        >
          <ArrowLeft />
        </button>

        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          className="hover:shadow-yellow3 hover:text-yellow3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition hover:shadow-sm active:scale-80"
          aria-label="Próximo resultado"
        >
          <ArrowRight />
        </button>

        {/* <p className="text-center text-base text-white/65 lg:text-lg xl:pt-3 xl:text-2xl">
          <BlurOutUp delay={500} triggerOnView={true}>
            Arraste para ver mais.
          </BlurOutUp>
        </p> */}
      </div>

      {/* Stats strip */}
      <div className="mx-auto flex justify-center gap-3 pt-6 lg:mt-3 xl:mt-6 xl:gap-6">
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
      <div className="mx-auto mt-8 w-sm md:w-86 lg:w-95 xl:w-131">
        <SpringCustom delayNum={0.5}>
          <BotaoCta sessao="#planos" texto="quero melhorar meu corpo" />
        </SpringCustom>
      </div>
    </div>
  );
}
