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
      { title: "Treino personalizado mensal", description: "Programa desenvolvido de acordo com seus objetivos, nível atual e rotina." },
      { title: "Progressão adaptada ao seu nível", description: "Cada etapa respeita sua capacidade atual para garantir evolução consistente e segura." },
      { title: "Orientação técnica dos exercícios", description: "Entenda como executar cada exercício e extrair o máximo benefício de cada movimento." },
      { title: "Ajustes conforme sua evolução", description: "Seu programa evolui junto com você, respeitando adaptações e novas necessidades." },
      { title: "Suporte via WhatsApp para dúvidas gerais", description: "Canal direto para esclarecer dúvidas e manter o foco durante o processo." },
      { title: "Treinos adaptados à sua rotina e disponibilidade", description: "Treine de forma eficiente sem precisar reorganizar toda sua vida para isso." },
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
      { title: "Ajustes frequentes do treino", description: "Acompanhamento contínuo e ajustes frequentes do planejamento." },
      { title: "Progressão adaptada ao seu nível", description: "Cada etapa respeita sua capacidade atual para garantir evolução consistente e segura." },
      { title: "Orientação técnica dos exercícios", description: "Entenda como executar cada exercício e extrair o máximo benefício de cada movimento." },
      { title: "Ajustes conforme sua evolução", description: "Seu programa evolui junto com você, respeitando adaptações e novas necessidades." },
      { title: "Suporte diário via WhatsApp", description: "Contato mais próximo para dúvidas, feedbacks e acompanhamento constante." },
      { title: "Treinos adaptados à sua rotina e disponibilidade", description: "Treine de forma eficiente sem precisar reorganizar toda sua vida para isso." },
      { title: "Análise técnica em vídeo", description: "Envie vídeos dos exercícios para receber orientações personalizadas de execução." },
      { title: "Correção de execução e postura", description: "Feedback individual para melhorar técnica, eficiência e consciência corporal." },
      { title: "Check-ins periódicos", description: "Momentos dedicados para avaliar progresso, alinhar expectativas e definir próximos passos." },
      { title: "Reavaliação constante do plano", description: "O planejamento é ajustado sempre que necessário para manter a evolução e os resultados." },
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
