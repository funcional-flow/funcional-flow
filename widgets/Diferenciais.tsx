import CardDif from "@/components/CardDif";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export default function Diferenciais() {
  return (
    <div className="bg-background relative">
      <div className="bg-background sticky top-0 z-30 py-6">
        {/* Fade contínuo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-35 bg-gradient-to-b from-white via-white/90 to-transparent" />
        <h2 className="relative text-purple3 text-center text-4xl font-bold z-10">
          O QUE TORNA NOSSO{" "}
          <DiaTextReveal
            repeat
            repeatDelay={1.2}
            colors={[
              "oklch(0.8301 0.0904 79.25)",
              "oklch(0.7659 0.1132 80.72)",
              "oklch(0.4792 0.1019 305.18)",
              "oklch(0.3158 0.1055 296.17)",
            ]}
            text={[
              "RESULTADO REAL",
              "ACOMPANHAMENTO DIFERENTE",
              "MÉTODO ÚNICO",
            ]}
          />
        </h2>
        {/* Transição suave */}
        <div className="pointer-events-none from-background absolute inset-x-0 h-35 bg-linear-to-b via-transparent to-transparent" />
      </div>
      <div className="z-200 mx-auto flex flex-col gap-20 py-10 md:max-w-lg">
        <CardDif
          titulo="ATENDIMENTO TOTALMENTE INDIVIDUAL"
          descricao="Aqui, cada exercício é escolhido pensando no seu nível atual."
        />
        <CardDif
          titulo="CORREÇÕES DURANTE O ACOMPANHAMENTO"
          descricao="Receba orientações personalizadas para aprimorar a qualidade dos seus movimentos, melhorar sua execução e acelerar sua evolução."
        />
        <CardDif
          titulo="RESULTADOS NATURAIS E SUSTENTÁVEIS"
          descricao="Corpos fortes e saudáveis não são construídos em atalhos. O método prioriza evolução progressiva, hábitos consistentes e adaptações que você consegue manter no longo prazo."
        />
        <CardDif
          titulo="MELHORIA CONTÍNUA DA AUTOESTIMA E CONFIANÇA"
          descricao="À medida que você desenvolve novas capacidades, supera desafios e percebe sua própria evolução, quando você percebe seu corpo mais forte, mais preparado, a confiança deixa de vir apenas da aparência e passa a ser construída por aquilo que seu corpo é capaz de fazer."
        />
      </div>
    </div>
  );
}
