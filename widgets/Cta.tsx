import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <div className="mx-10 flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="flex flex-col text-3xl text-center gap">
          <div className="font-bold">ESTÁ PRONTO PARA</div>
          <div className="text-yellow3 font-bold">TRANSFORMAR SEU CORPO?</div>
          <p className="text-base text-gray-200 pt-5 tracking-wider">
            Agende sua consulta gratuita e descubra como podemos ajudar você a
            alcançar seus objetivos.
          </p>
        </div>
      </div>
      <a href="#/" className="pt-5">
        <Button className="w-full bg-yellow3 text-lg p-5">Agendar consulta</Button>
      </a>
    </div>
  );
}
