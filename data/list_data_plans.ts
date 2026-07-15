export type Plano = {
  id: string;
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  features: string[];
  texto_final: string;
}

export const listDataPlans: Plano[] = [
  {
    id: "standard",
    tipo_plano: "PLANO STANDARD",
    descricao_plano: "Para quem quer um acompanhamento estruturado para evoluir de forma consistente.",
    features: [
      "Planejamento mensal de treinos individualizado",
      "Estrutura de progressão semanal ajustada ao seu nível",
      "Orientações técnicas para execução dos exercícios",
      "Ajustes pontuais conforme evolução registrada",
      "Suporte direto via WhatsApp para dúvidas gerais",
      "Organização do treino de acordo com sua rotina e disponibilidade",
    ],
    texto_final: "Ideal para quem quer seguir um processo bem estruturado de evolução, com direcionamento e consistência.",
  },
  {
    id: "premium",
    tipo_plano: "PLANO PREMIUM",
    descricao_plano: "Para quem quer um acompanhamento completo e mais próximo durante toda a evolução.",
    features: [
      "Tudo do plano Standard +",
      "Acompanhamento contínuo e ajustes frequentes do planejamento",
      "Análise técnica detalhada da execução dos exercícios em vídeo",
      "Correção de postura, controle e intensidade em tempo real",
      "Progressão semanal altamente personalizada e dinâmica",
      "Check-ins regulares de evolução e desempenho",
      "Avaliação periódica do progresso e reestruturação do plano quando necessário",
      "Suporte direto e constante via WhatsApp para ajustes e orientação diária",
    ],
    texto_final: "Ideal para quem busca evolução mais acelerada, refinamento técnico constante e acompanhamento próximo durante todo o processo.",
  }
];
