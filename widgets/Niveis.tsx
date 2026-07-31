"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function Niveis() {
  return (
    <div className="relative flex flex-col">
      {/* Eyebrow */}
      <div className="mb-1 flex items-center gap-2 px-6">
        <span className="bg-purple3 h-px w-8" />
        <span className="text-purple3 text-sm font-semibold tracking-widest uppercase">
          DESCUBRA O SEU NÍVEL
        </span>
      </div>
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
                src="/niveis/iniciante.png"
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
                src="/niveis/avancado.png"
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
