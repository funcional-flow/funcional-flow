import ImageBackground from "@/components/ImageBackground";
import CardEtapas from "@/components/CardEtapas";
import TituloSessao from "@/components/TituloSessao";

export default function Funcionamento() {
  return (
    <ImageBackground imageUrl="/funcionamento/fundo2.jpeg" svh="100">
      <div className="flex flex-col text-white px-6 gap-3">
        {/* Título principal */}
        <TituloSessao escuro={false}>Funcionamento</TituloSessao>
        {/* Subtítulo */}
        <h2 className="text-4xl text-center">
          O CAMINHO PARA SUA{" "}
          <span className="text-yellow3 font-bold">TRANSFORMAÇÃO</span>
        </h2>
        {/* Descrição */}
        <p className="text-center text-lg text-gray-300 pb-5">
          ENTENDA COMO FUNCIONA O PROCESSO DA CONSULTORIA
        </p>
        {/* Etapas */}
        <div className="flex flex-col gap-10">
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
