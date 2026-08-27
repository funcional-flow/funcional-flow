import { Button } from "@/components/ui/button";
import { link_cta } from "@/data/whatsapp";

export default function Cta() {
  return (
    <div className="flex flex-col gap-5 mx-auto md:w-md xl:w-xl">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-bold xl:text-5xl">EXPERIMENTE O FUNCIONAL FLOW</h1>
        <h1 className="text-yellow3 text-3xl font-bold xl:text-5xl">
          POR UMA SEMANA GRATUITAMENTE
        </h1>
      </div>
      <p className="text-center text-base tracking-wider text-gray-200 xl:text-xl">
        Conheça uma metodologia focada em desenvolver um corpo mais forte, mais
        atlético e mais preparado para os desafios da vida real. Agende sua
        consulta e dê o primeiro passo na sua evolução.
      </p>
      <a href={link_cta} target="_blank" className="pt-5">
        <Button className="cursor-pointer active:scale-98 hover:scale-103 hover:shadow-md hover:shadow-yellow-600 transition-transform flex bg-yellow3 w-full mx-auto p-5 text-lg text-shadow-lg xl:text-2xl xl:w-md xl:py-7">
          AGENDAR CONSULTA GRATUITA
        </Button>
      </a>
    </div>
  );
}
