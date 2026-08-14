"use client";

import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";
import SectionDropIn from "@/components/motion_custom/SectionDropIn";
import TituloSessao from "@/components/TituloSessao";
import CardFlowDesk from "@/components/desktop/CardFlowDesk";
import { Particles } from "@/components/ui/particles";

export default function BeneficiosDesk() {
  return (
    <div className="relative flex min-h-svh flex-col gap-3 md:gap-6 justify-center">
      <Particles className="absolute inset-0 z-0" color={"var(--purple4)"} />
      <TituloSessao>
        <BottomUpLetters triggerOnView={true}>Benefícios</BottomUpLetters>
      </TituloSessao>
      <h1 className="text-purple3 mx-auto flex items-center justify-center gap-1 pb-5 text-center text-3xl font-bold uppercase">
        <span>Tudo o que você precisa para evoluir com</span>
        <span className="text-yellow3 font-bold tracking-wider">
          <BlurOutUp delay={800} triggerOnView={true}>
            segurança
          </BlurOutUp>
        </span>
        <BlurOutUp delay={800} triggerOnView={true}>
          {"e"}
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
      <div className="mx-auto flex flex-col gap-5 lg:px-6">
        <div className="flex gap-5">
          <SectionDropIn initialNum={180}>
            <CardFlowDesk
              icone="treino_personalizado.png"
              titulo="TREINO PERSONALIZADO"
            >
              Treinos pensados e ajustados de acordo com o seu{" "}
              <a href="#niveis" className="text-yellow3 underline">
                nível
              </a>{" "}
              atual. Garantindo que você se adapte a cada exercício e que seja
              eficiente para você naquele momento.
            </CardFlowDesk>
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardFlowDesk
              icone="suporte_continuo.png"
              titulo="SUPORTE CONTÍNUO DIRETO"
            >
              Você não caminha sozinho. Tenha suporte próximo da equipe para
              manter a consistência, ajustar a rota quando necessário e
              continuar evoluindo semana após semana.
            </CardFlowDesk>
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardFlowDesk
              icone="ajustes_constantes.png"
              titulo="AJUSTES CONSTANTES"
            >
              Seu corpo está em constante adaptação, e seu treinamento também.
              Cada ajuste é feito para desenvolver suas capacidades no momento
              certo e manter sua evolução contínua.
            </CardFlowDesk>
          </SectionDropIn>
        </div>
        <div className="flex items-center justify-center gap-5">
          <SectionDropIn initialNum={180}>
            <CardFlowDesk
              icone="feedback_tecnico.png"
              titulo="FEEDBACK TÉCNICO EXCLUSIVO"
              //   descricao="Análises individuais da sua prática para corrigir detalhes, aperfeiçoar a execução dos exercícios e desenvolver suas capacidades com mais eficiência e prevenir possívels lesões."
            >
              Análises individuais da sua prática para corrigir detalhes,
              aperfeiçoar a execução e desenvolver suas capacidades com mais
              eficiência prevenindo possívels lesões.
            </CardFlowDesk>
          </SectionDropIn>
          <SectionDropIn initialNum={180}>
            <CardFlowDesk
              icone="resultados_reais.png"
              titulo="RESULTADOS REAIS"
              //   descricao="Um treinamento eficiente é aquele que você consegue sustentar. Por isso, ajustamos a frequência, duração e organização dos treinos para que você consiga evoluir sem comprometer suas responsabilidades do dia a dia."
            >
              Um treinamento eficiente é aquele que você consegue sustentar. Por
              isso, organizamos tudo para que você consiga evoluir sem
              comprometer o seu dia a dia.
            </CardFlowDesk>
          </SectionDropIn>
        </div>
      </div>
    </div>
  );
}
