import ImageBackground from "@/components/ImageBackground";
import { LightRays } from "@/components/ui/light-rays";
import { Check, ClipboardCheck } from "lucide-react";
import CardPublico from "@/components/CardPublico";

export default function Publico() {
  return (
    <ImageBackground imageUrl="/fundo.jpeg" svh="100">
      <LightRays
        color="var(--purple3)"
        blur={36}
        speed={14}
        count={7}
        className="z-10 h-full w-full"
      />
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
              <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="MAIS MOBILIDADE, FORÇA E CONTROLE"
            descricao="Deseja melhorar sua performance física sem depender de métodos
            extremos."
            icone={
              <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="MAIS MOBILIDADE, FORÇA E CONTROLE"
            descricao="Quer treinar com propósito e entender o porquê de cada exercício."
            icone={
              <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="MAIS MOBILIDADE, FORÇA E CONTROLE"
            descricao="Procura resultados duradouros e sustentáveis."
            icone={
              <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          <CardPublico
            titulo="MAIS MOBILIDADE, FORÇA E CONTROLE"
            descricao="Valoriza qualidade de movimento tanto quanto resultados estéticos."
            icone={
              <ClipboardCheck className="h-10 w-10 shrink-0 text-purple-700" />
            }
          />
          {/* 
          <p className="flex gap-2">
            <Check className="h-7 w-7 shrink-0 text-green-500" />
            Deseja melhorar sua performance física sem depender de métodos
            extremos.
          </p>
          <p className="flex gap-2">
            <Check className="h-7 w-7 shrink-0 text-green-500" />
            Quer treinar com propósito e entender o porquê de cada exercício.
          </p>
          <p className="flex gap-2">
            <Check className="h-7 w-7 shrink-0 text-green-500" />
            Procura resultados duradouros e sustentáveis.
          </p>
          <p className="flex gap-2">
            <Check className="h-7 w-7 shrink-0 text-green-500" />
            Valoriza qualidade de movimento tanto quanto resultados estéticos.
          </p> */}
        </div>
      </div>
    </ImageBackground>
  );
}
