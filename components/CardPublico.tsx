import { Check } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import BordaGradiente from "./BordaGradiente";

interface CardPublicoProps {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

export default function CardPublico({
  titulo,
  descricao,
  icone,
}: CardPublicoProps) {
  return (
    <div className="overflow-hidden mx-auto pl-3.5 lg:max-w-md">
      <div className="border-purple2 bg-purple4 relative rounded-md border-2 py-1 pr-3 pl-5">
        <div className="bg-purple4 border-purple2 absolute top-1/2 -left-4 z-100 -translate-y-1/2 rounded-full border-2 p-1">
          <Check className="h-4 w-4 shrink-0 text-green-500" strokeWidth={4} />
        </div>
        <div className="relative flex gap-3">
          <div className="absolute top-1/2 -translate-y-1/2">
            <BordaGradiente
              colorFrom="from-purple1"
              colorTo="to-purple3"
              backgroundColor="purple4"
            >
              {icone}
            </BordaGradiente>
          </div>
          <div className="flex flex-col pl-18">
            <h3 className="text-yellow3 pb-1 text-sm font-bold lg:text-base">{titulo}</h3>
            <p className="text-sm lg:text-base">{descricao}</p>
          </div>
        </div>
        <BorderBeam
          duration={6}
          // delay={6}
          size={100}
          // colorFrom="var(--yellow2)"
          // colorTo="var(--purple2)"
          className="via-yellow3 from-transparent to-transparent"
          // transition={}
          // borderWidth={2}
          // reverse={false}
        />
      </div>
    </div>
  );
}
