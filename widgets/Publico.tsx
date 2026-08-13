import ImageBackground from "@/components/ImageBackground";
import {
  BicepsFlexed,
  ClipboardCheck,
  ChartNoAxesCombined,
  Target,
  Trophy,
  Medal,
} from "lucide-react";
import CardPublico from "@/components/CardPublico";
import TituloSessao from "@/components/TituloSessao";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import SectionDropIn from "@/components/motion_custom/SectionDropIn";

export default function Publico() {
  return (
    <ImageBackground
      imageUrl="/fundo.jpeg"
      svh="50"
      intensidade="80"
      centralizado={false}
    >
      {/* <div className="pointer-events-none absolute bottom-0 h-10 w-full bg-linear-to-b from-transparent to-background" /> */}
      <div className="relative flex flex-col py-12">
        <TituloSessao escuro={false} className="mb-3">
          <BottomUpLetters triggerOnView={true}>
            pra quem é a consultoria
          </BottomUpLetters>
        </TituloSessao>
        <h2 className="mx-9 pb-6 text-center text-3xl font-bold">
          <span className="uppercase">
            <BlurOutUp delay={500} triggerOnView={true}>
              do iniciante ao avançado, você pode desenvolver:
            </BlurOutUp>
          </span>
        </h2>
        <div className="z-20 mx-6 md:mx-50 flex flex-col gap-5">
          <SectionDropIn initialNum={180}>
            <CardPublico
              titulo="CORPO ATLÉTICO E PREPARADO"
              descricao="Desenvolva capacidades físicas que permitam correr, saltar, levantar peso, explorar novos desafios e se sentir capaz em qualquer situação."
              icone={
                <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
              }
            />
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardPublico
              titulo="MAIS MOBILIDADE, FORÇA E CONTROLE"
              descricao="Construa um corpo que se move com mais liberdade, gera força com eficiência e responde melhor às demandas do dia a dia."
              icone={
                <BicepsFlexed className="h-10 w-10 shrink-0 text-purple-700" />
              }
            />
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardPublico
              titulo="PERFORMANCE SEM ATALHOS"
              descricao="Evolua através de um processo estruturado, focado em progresso consistente e desenvolvimento real de capacidades."
              icone={
                <ChartNoAxesCombined className="h-10 w-10 shrink-0 text-purple-700" />
              }
            />
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardPublico
              titulo="TREINAR COM PROPÓSITO"
              descricao="Entenda o objetivo de cada etapa do treinamento e saiba exatamente o que está desenvolvendo em cada sessão."
              icone={<Target className="h-10 w-10 shrink-0 text-purple-700" />}
            />
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardPublico
              titulo="QUALIDADE DE MOVIMENTO"
              descricao="Aprenda a controlar melhor o próprio corpo, aprimorar padrões de movimento e se movimentar com mais confiança."
              icone={<Medal className="h-10 w-10 shrink-0 text-purple-700" />}
            />
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardPublico
              titulo="RESULTADOS DURADOUROS"
              descricao="Construa hábitos, capacidades e resultados que continuam evoluindo no longo prazo."
              icone={<Trophy className="h-10 w-10 shrink-0 text-purple-700" />}
            />
          </SectionDropIn>
        </div>
      </div>
    </ImageBackground>
  );
}
