import CardDif from "@/components/CardDif";
import TituloFixo from "@/components/TituloFixo";

export default function Diferenciais() {
  return (
    <div className="bg-background relative px-6 pt-6 pb-12 xl:pb-20">
      <TituloFixo espacoBottom="pb-6" espacoTop="pt-6"/>

      {/* Cards */}
      <div className="mx-auto flex flex-col gap-20 py-10 md:w-lg xl:w-xl xl:gap-25">
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
