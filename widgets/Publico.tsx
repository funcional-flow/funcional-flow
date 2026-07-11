import ImageBackground from "@/components/ImageBackground";
import { LightRays } from "@/components/ui/light-rays";
import { Check } from "lucide-react";

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
      <div className="relative mx-5 flex flex-col py-30">
        <h2 className="titulo-darkmode text-yellow3 z-20 pb-20 text-center">
          Pra quem é a Mentoria?
        </h2>
        <div className="z-20 flex flex-col gap-8">
          <p className="flex gap-2">
            <Check className="h-7 w-7 shrink-0 text-green-500" />
            Quer desenvolver um corpo atlético e preparado para qualquer
            desafio.
          </p>
          <p className="flex gap-2">
            <Check className="h-7 w-7 shrink-0 text-green-500" />
            Busca mais mobilidade, força, controle e condicionamento.
          </p>
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
          </p>
        </div>
      </div>
    </ImageBackground>
  );
}
