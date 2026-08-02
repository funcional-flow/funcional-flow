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

export default function Publico() {
  return (
    <ImageBackground
      imageUrl="/fundo.jpeg"
      svh="50"
      intensidade="80"
      centralizado={false}
    >
      <div className="to-[#140922] pointer-events-none absolute bottom-0 h-100 w-full bg-linear-to-b from-transparent" />
      <div className="relative flex flex-col py-12">
        <TituloSessao escuro={false} className="mb-3">pra quem é a consultoria</TituloSessao>
        <h2 className="mx-9 pb-6 text-center text-3xl font-bold">
          <span className="uppercase">do iniciante ao avançado, você pode desenvolver:</span>
        </h2>
        <div className="z-20 mx-10 flex flex-col gap-5">
          <CardPublico
            titulo="CORPO ATLÉTICO E PREPARADO"
            descricao="Quer desenvolver um corpo atlético e preparado para qualquer desafio."
            icone={
              <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="MAIS MOBILIDADE, FORÇA E CONTROLE"
            descricao="Busca mais mobilidade, força, controle e condicionamento."
            icone={
              <BicepsFlexed className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="PERFORMANCE SEM ATALHOS"
            descricao="Melhorar sua performance física sem depender de métodos
            extremos."
            icone={
              <ChartNoAxesCombined className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="TREINAR COM PROPÓSITO"
            descricao="Quer treinar com propósito e entender o porquê de cada exercício."
            icone={<Target className="h-10 w-10 shrink-0 text-purple-700" />}
          />
          <CardPublico
            titulo="RESULTADOS DURADOUROS"
            descricao="Procura resultados duradouros e sustentáveis."
            icone={<Trophy className="h-10 w-10 shrink-0 text-purple-700" />}
          />
          <CardPublico
            titulo="QUALIDADE DE MOVIMENTO"
            descricao="Valoriza qualidade de movimento tanto quanto resultados estéticos."
            icone={<Medal className="h-10 w-10 shrink-0 text-purple-700" />}
          />
        </div>
      </div>
    </ImageBackground>
  );
}
