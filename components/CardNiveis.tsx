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
      {/* conteudo */}
      <div className="bg-purple4 relative flex min-w-full rounded-2xl text-white">
        <div className="flex flex-col py-4 pr-6">
          <h2 className="flex items-center gap-2 pb-3 font-bold uppercase">
            <div
              className={`${inicio ? "from-yellow-400 via-yellow3 to-yellow-600 text-shadow-black text-shadow-2xs" : "via-purple2 to-purple3 from-purple-500"} rounded-r-lg bg-linear-to-b px-3 py-2 italic`}
            >
              {numero}
            </div>
            <span className="text-base md:text-lg italic">{titulo}</span>
          </h2>
          <ul className="flex flex-col gap-2 pl-6">
            {descricao.map((desc, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className={`${inicio ? "bg-yellow-900 border-yellow-500" : "bg-purple3 border-purple-500"} inline-flex items-center justify-center rounded-full border`}>
                  <Check
                    className={`${inicio ? "text-yellow-500" : "text-purple-500"} h-4 w-4 stroke-5 p-1`}
                  />
                </div>
                <span className="text-xs md:text-base text-white/85">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* imagem */}
        <div className="relative flex min-w-[40%] flex-1 items-center pr-1">
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
        <ArrowDown className="text-purple3 absolute -bottom-2.5 left-1/2 z-0 -translate-x-1/2 translate-y-1/2 stroke-4" />
      )}
    </div>
  );
}
