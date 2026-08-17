import { Star, TrendingUp } from "lucide-react";
import Image from "next/image";

interface CardResultadosProps {
  nome: string;
  idade: number;
  duracao: string;
  destaque: string;
  nivel: string;
  foto: string;
  avaliacao: number;
}

export default function CardResultados({
  nome,
  idade,
  duracao,
  destaque,
  nivel,
  foto,
  avaliacao,
}: CardResultadosProps) {
  return (
    <article
      key={nome}
      className="relative h-75 w-full shrink-0 overflow-hidden rounded-3xl border border-white/10 md:h-80 lg:h-[65svh]"
    >
      {/* Photo */}
      <Image src={foto} alt={nome} fill className="object-cover" />
      {/* Gradient overlay */}
      <div className="from-purple4 via-purple4/15 absolute inset-0 bg-linear-to-t to-transparent" />
      {/* <div className="absolute inset-0 bg-linear-to-r from-purple3/30 to-transparent" /> */}

      {/* Index number */}
      {/* <span className="absolute top-5 right-5 text-5xl leading-none font-bold text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span> */}

      {/* Highlight pill */}
      <div className="bg-yellow3 text-purple4 shadow-yellow3/30 absolute top-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-bold shadow-lg">
        <TrendingUp className="h-3.5 w-3.5" />
        {destaque}
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
              {nome}, {idade}
            </span>
            {/* Rating */}
            <div className="flex gap-0.5">
              {Array.from({ length: avaliacao }).map((_, si) => (
                <Star
                  key={si}
                  className="fill-yellow3 text-yellow3 h-3.5 w-3.5"
                />
              ))}
            </div>
          </div>
          <div className="mt-0.5 text-[11px] text-white/50">
            {nivel} • {duracao} de treino
          </div>
        </div>
      </div>
    </article>
  );
}
