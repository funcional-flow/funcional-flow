"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import TituloSessao from "@/components/TituloSessao";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";

export default function Niveis() {
  return (
    <div className="relative flex flex-col">
      {/* Eyebrow */}
      <TituloSessao centralizado={false} className="pb-3 pl-6">
        <BottomUpLetters triggerOnView={true}>descubra seu nivel</BottomUpLetters>
      </TituloSessao>
      <h2 className="text-purple3 mx-9 pb-6 text-center text-3xl font-bold">
        <span className="uppercase">
          Basta deslizar o fluxograma para qualquer lado
        </span>
      </h2>
      <div className="overflow-hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/niveis/inici1.png"
                alt="Iniciante"
                width={864}
                height={1821}
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/niveis/intermediario.png"
                alt="Intermediário"
                width={864}
                height={1821}
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src="/niveis/avanc1.png"
                alt="Avançado"
                width={864}
                height={1821}
                className=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

{
  /* <div className="relative h-svh w-full">
        <Image
          src="/categorias/iniciante2.png"
          alt="Categoria"
          fill
          className="object-contain"
        />
      </div> */
}
