import { ArrowDown, Check } from "lucide-react";
import Image from "next/image";

interface CardNiveisProps {
  numero: string;
  titulo: string;
  imagem: string;
  descricao: string[];
  ultimo?: boolean;
  inicio?: boolean;
}

export default function CardNiveis({
  numero,
  titulo,
  descricao,
  imagem,
  ultimo = false,
  inicio = false,
}: CardNiveisProps) {
  return (
    <div
      className={`${inicio ? "shadow-yellow3 from-yellow3 to-yellow-500" : "shadow-purple3 from-purple3 to-purple-900"} relative min-w-full rounded-2xl bg-linear-to-br p-0.5 text-white shadow-lg`}
    >
      <div className="bg-purple4 relative flex min-w-full rounded-2xl text-white">
        <div className="absolute top-6 -left-0.5 z-100 xl:top-12">
          <span
            className={` ${
              inicio
                ? "via-yellow3 from-yellow-400 to-yellow-600 text-shadow-2xs text-shadow-black"
                : "via-purple2 to-purple3 from-purple-500"
            } rounded-r-lg text-base bg-linear-to-b px-3 md:text-xl py-1.5 italic xl:py-1 xl:text-2xl`}
          >
            {numero}
          </span>
        </div>
        <div className="flex flex-col py-4 pr-6 xl:py-10">
          {/* Titulo */}
          <h2 className="pt-2 pb-5 pl-10 text-base font-bold uppercase italic md:pl-11 md:text-xl xl:text-2xl xl:pt-2 xl:pb-8 xl:pl-12">
            {titulo}
          </h2>

          <ul className="flex flex-col gap-2 pl-6 xl:gap-4 xl:pl-12">
            {descricao.map((desc, index) => (
              <li key={index} className="flex items-center gap-2">
                <div
                  className={` ${
                    inicio
                      ? "border-yellow-500 bg-yellow-900"
                      : "bg-purple3 border-purple-500"
                  } inline-flex items-center justify-center rounded-full border`}
                >
                  <Check
                    className={`${
                      inicio ? "text-yellow-500" : "text-purple-500"
                    } h-4 w-4 stroke-5 p-1`}
                  />
                </div>
                <span className="text-xs text-white/85 md:text-base xl:text-xl">
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* imagem */}
        <div className="relative flex min-w-[30%] flex-1 items-center pr-1 xl:min-w-[40%]">
          <div className="z-10 overflow-hidden">
            <Image
              src="/niveis/background4.jpg"
              alt="fumaca"
              fill
              className="rounded-r-2xl object-cover"
            />
          </div>
          <div className="z-100 overflow-hidden">
            <Image
              src={imagem}
              alt="Logo"
              fill
              className="rounded-r-2xl object-cover" // hue-rotate é pra colorir a imagem.
            />
          </div>
          <div className="absolute inset-0 z-1000 h-auto rounded-r-2xl bg-black/50" />
          {/* cima pra baixo */}
          {/* <div className="to-purple4 absolute top-0 right-0 left-0 z-1000 h-15 rounded-tr-2xl bg-linear-to-t from-transparent" /> */}
          {/* esquerda pra direita */}
          <div className="to-purple4 absolute inset-0 z-1000 h-full rounded-r-2xl bg-linear-to-l from-transparent" />
          {/* baixo pra cima */}
          {/* <div className="to-purple4 absolute right-0 bottom-0 left-0 z-1000 h-40 rounded-r-2xl bg-linear-to-b from-transparent" /> */}
        </div>
      </div>
      {ultimo ? null : (
        <div>
          <div className="bg-purple4 absolute -bottom-1 left-1/2 z-0 h-5 w-1 -translate-x-1/2 translate-y-1/2" />
          <ArrowDown className="text-purple3 absolute -bottom-4 left-1/2 z-0 -translate-x-1/2 translate-y-1/2 stroke-4" />
        </div>
      )}
    </div>
  );
}
