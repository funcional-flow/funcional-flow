import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <div className="flex flex-col gap-5">
      <div className="mx-9 flex flex-col text-center">
        <h1 className="text-3xl font-bold">EXPERIMENTE O FUNCIONAL FLOW</h1>
        <h1 className="text-yellow3 text-3xl font-bold">
          POR UMA SEMANA GRATUITAMENTE
        </h1>
      </div>
      <p className="mx-10 text-center text-base tracking-wider text-gray-200">
        Conheça uma metodologia focada em desenvolver um corpo mais forte, mais
        atlético e mais preparado para os desafios da vida real. Agende sua
        consulta e dê o primeiro passo na sua evolução.
      </p>
      <a href="#/" className="mx-10 pt-5">
        <Button className="bg-yellow3 w-full p-5 text-lg text-shadow-lg">
          AGENDAR CONSULTA GRATUITA
        </Button>
      </a>
    </div>
  );
}
