"use client";

import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import CardFlow from "../components/CardFlow";
import TituloSessao from "../components/TituloSessao";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import SectionDropIn from "@/components/motion_custom/SectionDropIn";

export default function Beneficios() {
  return (
    <div className="flex flex-col gap-3">
      <TituloSessao>
        <BottomUpLetters triggerOnView={true}>Benefícios</BottomUpLetters>
      </TituloSessao>
      <h1 className="text-purple3 text-center text-xl font-bold uppercase">
        <BlurOutUp delay={500} triggerOnView={true}>
          Tudo o que você precisa para evoluir com
        </BlurOutUp>{" "}
        <span className="text-yellow3 font-bold tracking-wider">
          <BlurOutUp delay={800} triggerOnView={true}>
            segurança
          </BlurOutUp>
        </span>
        <BlurOutUp delay={800} triggerOnView={true}>
          {" e "}
        </BlurOutUp>
        <span className="text-yellow3 font-bold tracking-wider">
          <BlurOutUp delay={800} triggerOnView={true}>
            consistência
          </BlurOutUp>
        </span>
        <BlurOutUp delay={800} triggerOnView={true}>
          {"."}
        </BlurOutUp>
      </h1>
      <div className="flex flex-col gap-5">
        <SectionDropIn>
          <CardFlow
            icone="treino_personalizado.png"
            titulo="TREINO PERSONALIZADO"
            descricao="Treinos criados de acordo com o seu nível atual. Garantindo que cada exercício seja eficiente para você naquele momento."
          />
        </SectionDropIn>
        <SectionDropIn>
          <CardFlow
            icone="suporte_continuo.png"
            titulo="SUPORTE CONTÍNUO DIRETO"
            descricao="Você não caminha sozinho. Tenha suporte próximo da equipe  para manter a consistência, ajustar a rota quando necessário e continuar evoluindo semana após semana."
          />
        </SectionDropIn>
        <SectionDropIn>
          <CardFlow
            icone="ajustes_constantes.png"
            titulo="AJUSTES CONSTANTES"
            descricao="Seu corpo está em constante adaptação, e seu treinamento também. Cada ajuste é feito para desenvolver suas capacidades no momento certo e manter sua evolução contínua."
          />
        </SectionDropIn>
        <SectionDropIn>
          <CardFlow
            icone="feedback_tecnico.png"
            titulo="FEEDBACK TÉCNICO EXCLUSIVO"
            descricao="Análises individuais da sua prática para corrigir detalhes, aperfeiçoar a execução dos exercícios e desenvolver suas capacidades com mais eficiência e prevenir possívels lesões."
          />
        </SectionDropIn>
        <SectionDropIn>
          <CardFlow
            icone="resultados_reais.png"
            titulo="RESULTADOS REAIS"
            descricao="Um treinamento eficiente é aquele que você consegue sustentar. Por isso, ajustamos a frequência, duração e organização dos treinos para que você consiga evoluir sem comprometer suas responsabilidades do dia a dia."
          />
        </SectionDropIn>
      </div>
    </div>
  );
}
