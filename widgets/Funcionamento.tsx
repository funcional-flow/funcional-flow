import ImageBackground from "@/components/ImageBackground";
import CardEtapas from "@/components/CardEtapas";

export default function Funcionamento() {
  return (
    <ImageBackground imageUrl="/funcionamento/dark3.jpg">
      <div className="px-5 py-15 text-white font-iansui">
        <h2 className="text-2xl text-center pb-2 font-bold">
          O Caminho Para Sua Transformação
        </h2>
        <p className="text-gray-300 text-center">
          Entenda como funciona o processo da consultoria
        </p>
        <div className="flex flex-col gap-10 pt-10">
          <CardEtapas
            numero="#1"
            titulo="PDF com detalhes"
            descricao="Você recebe um PDF detalhado com os conceitos do Funcional Flow, entendendo a base da respiração e ativação do CORE."
          />
          <CardEtapas
            numero="#2"
            titulo="Formulário"
            descricao="Você preenche um formulário completo sobre seu histórico, rotina, dores e objetivos para eu conhecer seu nível de treinamento."
          />
          <CardEtapas
            numero="#3"
            titulo="Planilha Google Sheets"
            descricao="Liberamos seu acesso à planilha inteligente (Google Sheets), onde todo o seu progresso será registrado e monitorado."
          />
          <CardEtapas
            numero="#4"
            titulo="Acompanhamento semanal/Mensal"
            descricao="Realizamos check-ins semanais ou mensais para analisar seu progresso, ajustar cargas, mudanças de exercícios, tudo para garantir que você nunca pare de evoluir."
          />
        </div>
      </div>
    </ImageBackground>
  );
}
