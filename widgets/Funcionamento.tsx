import ImageBackground from "@/components/ImageBackground";
import CardEtapas from "@/components/CardEtapas";

export default function Funcionamento() {
  return (
    <ImageBackground imageUrl="/funcionamento/fundo2.jpeg" svh="110">
      <div className="flex flex-col mx-5 text-white">
        <h2 className="titulo-darkmode text-center pb-2">
          O CAMINHO PARA SUA TRANSFORMAÇÃO
        </h2>
        <p className="text-xl text-gray-300 text-center">
          ENTENDA COMO FUNCIONA O PROCESSO DA CONSULTORIA
        </p>
        <div className="flex flex-col gap-10 pt-10">
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
            titulo="PLANILHA GOOGLE SHEETS"
            descricao="Liberamos seu acesso à planilha inteligente (Google Sheets), onde todo o seu progresso será registrado e monitorado."
          />
          <CardEtapas
            numero="#4"
            titulo="ACOMPANHAMENTO SEMANAL/MENSAL"
            descricao="Realizamos check-ins semanais ou mensais para analisar seu progresso, ajustar cargas, mudanças de exercícios, tudo para garantir que você nunca pare de evoluir."
          />
        </div>
      </div>
    </ImageBackground>
  );
}
