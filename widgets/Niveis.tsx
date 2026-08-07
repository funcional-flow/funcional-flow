"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import TituloSessao from "@/components/TituloSessao";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import CardNiveis from "@/components/CardNiveis";
import { avancado } from "@/data/list_niveis";

export default function Niveis() {
  return (
    <div className="relative flex flex-col px-6">
      {/* Eyebrow */}
      <TituloSessao centralizado={false} className="pb-3">
        <BottomUpLetters triggerOnView={true}>
          descubra seu nivel
        </BottomUpLetters>
      </TituloSessao>
      <h2 className="text-purple3 pb-6 text-center text-3xl font-bold">
        <span className="uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </h2>
      <p className="max-w-sm pb-5 text-sm text-black/65">
        <BlurOutUp delay={500} triggerOnView={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
          impedit sint odit officiis rem, aliquid voluptatibus, praesentium
          optio laborum sunt, soluta dolor voluptatem libero et.
        </BlurOutUp>
      </p>
      <div className="flex flex-col gap-6">
        {avancado.map((nivel, index) => (
          <div key={index}>
            <CardNiveis
              numero={nivel.numero}
              titulo={nivel.titulo}
              descricao={nivel.descricao}
              imagem={nivel.imagem}
              inicio={nivel.inicio || false}
              ultimo={nivel.ultimo || false}
            />
          </div>
        ))}
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
