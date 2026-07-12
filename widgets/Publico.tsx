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

export default function Publico() {
  return (
    <ImageBackground imageUrl="/fundo.jpeg" svh="100">
      {/* <LightRays
        color="var(--purple3)"
        blur={36}
        speed={14}
        count={7}
        className="z-10 h-full w-full"
      /> */}
      <div className="relative mx-10 flex flex-col py-15">
        <h2 className="titulo-darkmode text-yellow3 z-20 pb-10 text-center">
          Pra quem é a Mentoria?
        </h2>
        <div className="z-20 flex flex-col gap-4">
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
