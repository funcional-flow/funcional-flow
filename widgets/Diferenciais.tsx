import CardDif from "@/components/CardDif";

export default function Diferenciais() {
  return (
    <div className="mx-5">
      <h2 className="titulo text-center">O QUE TORNA NOSSO TRABALHO DIFERENTE</h2>
      <div className="mt-10 flex flex-col gap-20">
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
      <hr className="mt-15 mb-5" />
      <p className="italic">
        “À medida que você evolui e supera desafios, a confiança deixa de
        depender apenas da aparência e passa a vir do que seu corpo é capaz de
        fazer.”
      </p>
    </div>
  );
}
