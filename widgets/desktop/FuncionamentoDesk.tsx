"use client";
import ImageBackground from "@/components/ImageBackground";
import CardEtapas from "@/components/CardEtapas";
import TituloSessao from "@/components/TituloSessao";
import BottomUpLetters from "@/components/ui/smoothui/bottom-up-letters";
import BlurOutUp from "@/components/ui/smoothui/blur-out-up";

export default function FuncionamentoDesk() {
  return (
    <ImageBackground imageUrl="/funcionamento/fundo2.jpeg" svh="100">
      <div className="relative flex flex-col gap-3 px-6 pt-12 pb-12 text-white md:pt-20 md:pb-20 xl:pb-30">
        {/* Título principal */}
        <TituloSessao escuro={false} className="md:pb-3">
          <BottomUpLetters triggerOnView={true}>Funcionamento</BottomUpLetters>
        </TituloSessao>
        {/* Subtítulo */}
        <h2 className="text-center text-4xl uppercase xl:text-5xl">
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
        <p className="pb-5 text-center text-lg text-gray-300 md:pb-13 xl:text-xl">
          <BlurOutUp delay={600} triggerOnView={true}>
            ENTENDA COMO FUNCIONA O PROCESSO DA CONSULTORIA
          </BlurOutUp>
        </p>
        {/* Etapas */}
        <div className="mx-auto flex w-xl flex-col gap-10 xl:w-3xl xl:gap-13">
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
