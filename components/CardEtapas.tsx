import SectionTween from "./motion_custom/SectionTween";
import * as motion from "motion/react-client";
import BottomUpLetters from "./ui/smoothui/bottom-up-letters";
import MaskRevealUp from "./ui/smoothui/mask-reveal-up";

interface CardEtapasProps {
  numero: string;
  titulo: string;
  descricao: string;
}

export default function CardEtapas({
  numero,
  titulo,
  descricao,
}: CardEtapasProps) {
  return (
    <div className="flex">
      <SectionTween horizontal={true} initialNum={-100} delay={0.25}>
        <h3 className="min-w-12 text-3xl font-bold tracking-widest">
          {numero}
        </h3>
      </SectionTween>
      <SectionTween horizontal={true} initialNum={-100} delay={0.5}>
        <motion.div className="bg-yellow3 h-full p-1" />
      </SectionTween>
      <div className="flex flex-col pl-3">
        <h3 className="pb-2 text-xl font-bold">
          <SectionTween horizontal={true} initialNum={-100} delay={0.5}>
            {titulo}
          </SectionTween>
        </h3>
        <p className="">
          <MaskRevealUp triggerOnView={true} delay={1000}>{descricao}</MaskRevealUp>
        </p>
      </div>
    </div>
  );
}
