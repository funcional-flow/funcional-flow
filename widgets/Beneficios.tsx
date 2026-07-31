"use client";

import CardFlow from "../components/CardFlow";

export default function Beneficios() {
  return (
    <div className="">
      <h2 className="mb-4 titulo-lightmode text-center">BENEFÍCIOS</h2>
      <div className="flex flex-col gap-5">
        <CardFlow
          icone='treino_personalizado.png'
          titulo="TREINO PERSONALIZADO"
          descricao="Treinos criados de acordo com o seu nível atual. Garantindo que cada exercício seja eficiente para você naquele momento."
        />
        <CardFlow
          icone='suporte_continuo.png'
          titulo="SUPORTE CONTÍNUO DIRETO"
          descricao="Você não caminha sozinho. Tenha suporte próximo da equipe  para manter a consistência, ajustar a rota quando necessário e continuar evoluindo semana após semana."
        />
        <CardFlow
          icone='ajustes_constantes.png'
          titulo="AJUSTES CONSTANTES"
          descricao="Seu corpo está em constante adaptação, e seu treinamento também. Cada ajuste é feito para desenvolver suas capacidades no momento certo e manter sua evolução contínua."
        />
        <CardFlow
          icone='feedback_tecnico.png'
          titulo="FEEDBACK TÉCNICO EXCLUSIVO"
          descricao="Análises individuais da sua prática para corrigir detalhes, aperfeiçoar a execução dos exercícios e desenvolver suas capacidades com mais eficiência e prevenir possívels lesões."
        />
        <CardFlow
          icone='resultados_reais.png'
          titulo="RESULTADOS REAIS"
          descricao="Um treinamento eficiente é aquele que você consegue sustentar. Por isso, ajustamos a frequência, duração e organização dos treinos para que você consiga evoluir sem comprometer suas responsabilidades do dia a dia."
        />
      </div>
    </div>
  );
}
