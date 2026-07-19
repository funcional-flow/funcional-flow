export type Features = {
  title: string;
  description: string;
};

export type Plano = {
  id: string;
  tipo_plano: string;
  descricao_plano: string;
  preco?: string;
  features: Features[];
  noFeatures?: Features[];
  texto_final: string;
};

export const listDataPlans: Plano[] = [
  {
    id: "standard",
    tipo_plano: "PLANO STANDARD",
    descricao_plano:
      "Para quem quer um acompanhamento estruturado para evoluir de forma consistente.",
    features: [
      { title: "Treino personalizado mensal", description: "Planejamento mensal de treinos individualizado." },
      { title: "Progressão adaptada ao seu nível", description: "Estrutura de progressão semanal ajustada ao seu nível." },
      { title: "Orientação técnica dos exercícios", description: "Orientações técnicas para execução dos exercícios." },
      { title: "Ajustes conforme sua evolução", description: "Ajustes pontuais conforme evolução registrada." },
      { title: "Suporte via WhatsApp para dúvidas gerais", description: "Suporte direto via WhatsApp para dúvidas gerais." },
      { title: "Treinos adaptados à sua rotina e disponibilidade", description: "Organização do treino de acordo com sua rotina e disponibilidade." },
    ],
    noFeatures: [
      { title: "Ajustes frequentes do treino", description: "Acompanhamento contínuo e ajustes frequentes do planejamento." },
      { title: "Análise técnica em vídeo", description: "Análise técnica detalhada da execução dos exercícios em vídeo." },
      { title: "Correção de execução e postura", description: "Correção de postura, controle e intensidade em tempo real." },
      { title: "Check-ins periódicos", description: "Check-ins regulares de evolução e desempenho." },
      { title: "Reavaliação constante do plano", description: "Avaliação periódica do progresso e reestruturação do plano quando necessário." },
      { title: "Suporte diário via WhatsApp", description: "Suporte direto e constante via WhatsApp para ajustes e orientação diária." },
    ],
    texto_final:
      "Ideal para quem busca evolução com planejamento e consistência.",
  },
  {
    id: "premium",
    tipo_plano: "PLANO PREMIUM",
    descricao_plano:
      "Para quem quer um acompanhamento completo e mais próximo durante toda a evolução.",
    features: [
      { title: "Treino personalizado mensal", description: "Planejamento mensal de treinos individualizado." },
      { title: "Progressão adaptada ao seu nível", description: "Estrutura de progressão semanal ajustada ao seu nível." },
      { title: "Orientação técnica dos exercícios", description: "Orientações técnicas para execução dos exercícios." },
      { title: "Ajustes conforme sua evolução", description: "Ajustes pontuais conforme evolução registrada." },
      { title: "Suporte via WhatsApp para dúvidas gerais", description: "Suporte direto via WhatsApp para dúvidas gerais." },
      { title: "Treinos adaptados à sua rotina e disponibilidade", description: "Organização do treino de acordo com sua rotina e disponibilidade." },
      { title: "Ajustes frequentes do treino", description: "Acompanhamento contínuo e ajustes frequentes do planejamento." },
      { title: "Análise técnica em vídeo", description: "Análise técnica detalhada da execução dos exercícios em vídeo." },
      { title: "Correção de execução e postura", description: "Correção de postura, controle e intensidade em tempo real." },
      { title: "Check-ins periódicos", description: "Check-ins regulares de evolução e desempenho." },
      { title: "Reavaliação constante do plano", description: "Avaliação periódica do progresso e reestruturação do plano quando necessário." },
      { title: "Suporte diário via WhatsApp", description: "Suporte direto e constante via WhatsApp para ajustes e orientação diária." },
    ],
    texto_final:
      "Ideal para quem busca resultados mais rápidos e acompanhamento próximo.",
  },
  //   {
  //     id: "standard",
  //     tipo_plano: "PLANO STANDARD",
  //     descricao_plano: "Para quem quer um acompanhamento estruturado para evoluir de forma consistente.",
  //     features: [
  //       "Planejamento mensal de treinos individualizado",
  //       "Estrutura de progressão semanal ajustada ao seu nível",
  //       "Orientações técnicas para execução dos exercícios",
  //       "Ajustes pontuais conforme evolução registrada",
  //       "Suporte direto via WhatsApp para dúvidas gerais",
  //       "Organização do treino de acordo com sua rotina e disponibilidade",
  //     ],
  //     texto_final: "Ideal para quem quer seguir um processo bem estruturado de evolução, com direcionamento e consistência.",
  //   },
  //   {
  //     id: "premium",
  //     tipo_plano: "PLANO PREMIUM",
  //     descricao_plano: "Para quem quer um acompanhamento completo e mais próximo durante toda a evolução.",
  //     features: [
  //       "Tudo do plano Standard +",
  //       "Acompanhamento contínuo e ajustes frequentes do planejamento",
  //       "Análise técnica detalhada da execução dos exercícios em vídeo",
  //       "Correção de postura, controle e intensidade em tempo real",
  //       "Progressão semanal altamente personalizada e dinâmica",
  //       "Check-ins regulares de evolução e desempenho",
  //       "Avaliação periódica do progresso e reestruturação do plano quando necessário",
  //       "Suporte direto e constante via WhatsApp para ajustes e orientação diária",
  //     ],
  //     texto_final: "Ideal para quem busca evolução mais acelerada, refinamento técnico constante e acompanhamento próximo durante todo o processo.",
  //   }
];
