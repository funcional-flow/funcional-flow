import ImageBackground from "@/components/ImageBackground";
import CardEtapas from "@/components/CardEtapas";
import TituloSessao from "@/components/TituloSessao";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";

export default function Funcionamento() {
  return (
    <ImageBackground imageUrl="/funcionamento/fundo2.jpeg" svh="100">
      <div className="flex flex-col gap-3 px-6 py-12 md:py-20 text-white">
        {/* Título principal */}
        <TituloSessao escuro={false} className="md:pb-3">
          <BottomUpLetters triggerOnView={true}>Funcionamento</BottomUpLetters>
        </TituloSessao>
        {/* Subtítulo */}
        <h2 className="text-center text-4xl uppercase md:text-5xl">
          <BlurOutUp delay={600} triggerOnView={true}>
            O CAMINHO PARA SUA
          </BlurOutUp>{" "}
          <span className="text-yellow3 font-bold">
            <BlurOutUp delay={600} triggerOnView={true}>
              TRANSFORMAÇÃO
            </BlurOutUp>
          </span>
        </h2>
        {/* Descrição */}
        <p className="pb-5 md:pb-13 text-center text-lg text-gray-300 md:text-3xl">
          <BlurOutUp delay={600} triggerOnView={true}>
            ENTENDA COMO FUNCIONA O PROCESSO DA CONSULTORIA
          </BlurOutUp>
        </p>
        {/* Etapas */}
        <div className="flex flex-col gap-10 md:gap-16 md:mx-auto md:w-xl md:items-center md:justify-center">
          <CardEtapas
            numero="#1"
            titulo="PDF COM DETALHES"
            descricao="Você recebe um PDF detalhado com os conceitos do Funcional Flow, entendendo a base da respiração e ativação do CORE."
          />
          <CardEtapas
            numero="#2"
            titulo="FORMULÁRIO"
            descricao="Você preenche um formulário completo sobre seu histórico, rotina, dores e objetivos para eu conhecer seu nível de treinamento."
          />
          <CardEtapas
            numero="#3"
            titulo="APP FUNCIONAL FLOW"
            descricao="Tenha acesso ao seu programa de treinamento em uma plataforma exclusiva, onde você acompanha seus treinos, registra sua evolução e mantém todo o processo organizado em um só lugar."
          />
          <CardEtapas
            numero="#4"
            titulo="ACOMPANHAMENTO PERIÓDICO"
            descricao="Realizamos check-ins periódicos para analisar seu progresso, ajustar cargas, mudanças de exercícios, tudo para garantir que você nunca pare de evoluir."
          />
        </div>
      </div>
    </ImageBackground>
  );
}
