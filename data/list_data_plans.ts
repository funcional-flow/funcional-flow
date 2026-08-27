// mensal:
// standard= 147
// premium= 197

// trimestral:
// standard= 3x 132,33 (397, desconto de R$ 44,00)
// premium= 3x 182,33 (547, desconto de R$ 44,00)

// semestral:
// standard= 6x 119,50 (717, desconto de R$ 165,00)
// premium= 6x 149,50 (897, desconto de R$ 285,00)

import {
  link_plano_premium_mensal,
  link_plano_premium_trimestral,
  link_plano_premium_semestral,
  link_plano_standard_mensal,
  link_plano_standard_trimestral,
  link_plano_standard_semestral,
} from "./whatsapp";

export type Feature = {
  title: string;
  description: string;
};

export type Features = {
  featuresPremium: Feature[];
  featuresStandard: Feature[];
  noFeatures: Feature[];
};

export type Plano = {
  id: string;
  tipo_plano: string;
  descricao_plano: string;
  preco: string;
  duracao: string;
  features: Feature[];
  noFeatures?: Feature[];
  texto_final: string;
  principal: boolean;
  periodo: string;
  link_plano: string;
};

export const descricaoPlanos: Features = {
  featuresPremium: [
    {
      title: "Ajustes frequentes do treino",
      description:
        "Acompanhamento contínuo com ajustes frequentes do planejamento.",
    },
    {
      title: "Progressão adaptada ao seu nível",
      description:
        "Cada etapa respeita sua capacidade atual para garantir evolução consistente e segura.",
    },
    {
      title: "Orientação técnica dos exercícios",
      description:
        "Entenda como executar cada exercício e extrair o máximo benefício de cada movimento.",
    },
    {
      title: "Ajustes conforme sua evolução",
      description:
        "Seu programa evolui junto com você, respeitando adaptações e novas necessidades.",
    },
    {
      title: "Suporte diário via WhatsApp",
      description:
        "Contato mais próximo para dúvidas, feedbacks e acompanhamento constante.",
    },
    {
      title: "Treinos adaptados à sua rotina e disponibilidade",
      description:
        "Treine de forma eficiente sem precisar reorganizar toda sua vida para isso.",
    },
    {
      title: "Análise técnica em vídeo",
      description:
        "Envie vídeos dos exercícios para receber orientações personalizadas de execução.",
    },
    {
      title: "Correção de execução e postura",
      description:
        "Feedback individual para melhorar técnica, eficiência e consciência corporal.",
    },
    {
      title: "Check-ins periódicos",
      description:
        "Momentos dedicados para avaliar progresso, alinhar expectativas e definir próximos passos.",
    },
    {
      title: "Reavaliação constante do plano",
      description:
        "O planejamento é ajustado sempre que necessário para manter a evolução e os resultados.",
    },
  ],
  featuresStandard: [
    {
      title: "Treino personalizado mensal",
      description:
        "Programa desenvolvido de acordo com seus objetivos, nível atual e rotina.",
    },
    {
      title: "Progressão adaptada ao seu nível",
      description:
        "Cada etapa respeita sua capacidade atual para garantir evolução consistente e segura.",
    },
    {
      title: "Orientação técnica dos exercícios",
      description:
        "Entenda como executar cada exercício e extrair o máximo benefício de cada movimento.",
    },
    {
      title: "Ajustes conforme sua evolução",
      description:
        "Seu programa evolui junto com você, respeitando adaptações e novas necessidades.",
    },
    {
      title: "Suporte via WhatsApp para dúvidas gerais",
      description:
        "Canal direto para esclarecer dúvidas e manter o foco durante o processo.",
    },
    {
      title: "Treinos adaptados à sua rotina e disponibilidade",
      description:
        "Treine de forma eficiente sem precisar reorganizar toda sua vida para isso.",
    },
  ],
  noFeatures: [
    {
      title: "Ajustes frequentes do treino",
      description:
        "Acompanhamento contínuo e ajustes frequentes do planejamento.",
    },
    {
      title: "Análise técnica em vídeo",
      description:
        "Análise técnica detalhada da execução dos exercícios em vídeo.",
    },
    {
      title: "Correção de execução e postura",
      description: "Correção de postura, controle e intensidade em tempo real.",
    },
    {
      title: "Check-ins periódicos",
      description: "Check-ins regulares de evolução e desempenho.",
    },
    {
      title: "Reavaliação constante do plano",
      description:
        "Avaliação periódica do progresso e reestruturação do plano quando necessário.",
    },
    {
      title: "Suporte diário via WhatsApp",
      description:
        "Suporte direto e constante via WhatsApp para ajustes e orientação diária.",
    },
  ],
};

export const listaPlanosMensal: Plano[] = [
  {
    id: "premium",
    tipo_plano: "PLANO PREMIUM",
    preco: "R$ 197,00",
    duracao: "/ Mês",
    periodo: "mensal",
    descricao_plano:
      "Para quem quer um acompanhamento completo e mais próximo durante toda a evolução.",
    texto_final:
      "Ideal para quem busca resultados mais rápidos e acompanhamento próximo.",
    principal: true,
    features: descricaoPlanos.featuresPremium!,
    link_plano: link_plano_premium_mensal,
  },
  {
    id: "standard",
    tipo_plano: "PLANO STANDARD",
    preco: "R$ 147,00",
    duracao: "/ Mês",
    periodo: "mensal",
    descricao_plano:
      "Para quem quer um acompanhamento estruturado para evoluir de forma consistente.",
    texto_final:
      "Ideal para quem busca evolução com planejamento e consistência.",
    principal: false,
    features: descricaoPlanos.featuresStandard!,
    noFeatures: descricaoPlanos.noFeatures,
    link_plano: link_plano_standard_mensal
  },
];

export const listaPlanosTrimestral: Plano[] = [
  {
    id: "premium",
    tipo_plano: "PLANO PREMIUM",
    preco: "R$ 182,33", // "R$ 547,00",
    duracao: "/ por 3 meses",
    periodo: "trimestral",
    descricao_plano:
      "Para quem quer um acompanhamento completo e mais próximo durante toda a evolução.",
    texto_final:
      "Ideal para quem busca resultados mais rápidos e acompanhamento próximo.",
    principal: true,
    features: descricaoPlanos.featuresPremium!,
    link_plano: link_plano_premium_trimestral,
  },
  {
    id: "standard",
    tipo_plano: "PLANO STANDARD",
    preco: "R$ 132,33", // "R$ 397,00",
    duracao: "/ por 3 meses",
    periodo: "trimestral",
    descricao_plano:
      "Para quem quer um acompanhamento estruturado para evoluir de forma consistente.",
    texto_final:
      "Ideal para quem busca evolução com planejamento e consistência.",
    principal: false,
    features: descricaoPlanos.featuresStandard!,
    noFeatures: descricaoPlanos.noFeatures,
    link_plano: link_plano_standard_trimestral,
  },
];

export const listaPlanosSemestral: Plano[] = [
  {
    id: "premium",
    tipo_plano: "PLANO PREMIUM",
    preco: "R$ 149,50", // "R$ 897,00",
    duracao: "/ por 6 meses",
    periodo: "semestral",
    descricao_plano:
      "Para quem quer um acompanhamento completo e mais próximo durante toda a evolução.",

    texto_final:
      "Ideal para quem busca resultados mais rápidos e acompanhamento próximo.",
    principal: true,
    features: descricaoPlanos.featuresPremium!,
    link_plano: link_plano_premium_semestral,
  },
  {
    id: "standard",
    tipo_plano: "PLANO STANDARD",
    preco: "R$ 119,50", // "R$ 717,00",
    duracao: "/ por 6 meses",
    periodo: "semestral",
    descricao_plano:
      "Para quem quer um acompanhamento estruturado para evoluir de forma consistente.",
    texto_final:
      "Ideal para quem busca evolução com planejamento e consistência.",
    principal: false,
    features: descricaoPlanos.featuresStandard!,
    noFeatures: descricaoPlanos.noFeatures,
    link_plano: link_plano_standard_semestral,
  },
];
