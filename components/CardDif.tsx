import * as motion from "motion/react-client";
import SectionDropIn from "./motion_custom/SectionDropIn";
import MaskRevealUp from "./ui/smoothui/mask-reveal-up";

interface CardDifProps {
  titulo: string;
  descricao: string;
}

export default function CardDif({ titulo, descricao }: CardDifProps) {
  return (
    <div className="relative">
      <SectionDropIn initialNum={80}>
        <motion.div className="bg-purple2 animate-stripe-back absolute top-1 left-1 px-10 py-1" />
        <motion.div className="bg-yellow3 animate-stripe-front absolute top-0 left-0 px-10 py-1" />
      </SectionDropIn>
      <div className="relative top-8 flex flex-col">
        <h3 className="text-purple3 text-xl font-bold xl:text-3xl">
          <MaskRevealUp triggerOnView={true} delay={500}>
            {titulo}
          </MaskRevealUp>
        </h3>
        <p className="xl:text-2xl xl:text-black/65 xl:leading-9">
          <MaskRevealUp triggerOnView={true} delay={500}>
            {descricao}
          </MaskRevealUp>
        </p>
      </div>
    </div>
  );
}
