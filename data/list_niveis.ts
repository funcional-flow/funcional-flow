type Nivel = {
  numero: string;
  titulo: string;
  descricao: string[];
  imagem: string;
  ultimo?: boolean;
  inicio?: boolean;
};

export const iniciante: Nivel[] = [
  {
    titulo: "sinais de que você é iniciante",
    descricao: [
      "Corpo rígido",
      "Perde o Fôlego facilmente",
      "Não sabe por onde começar",
    ],
    imagem: "/niveis/ini_inicio.jpeg",
    numero: "01",
    inicio: true,
  },
  {
    titulo: "Desafios desta fase",
    descricao: [
      "Medo de se machucar",
      "Dificuldade de manter constância",
      "Insegurança na execução dos movimentos",
    ],
    imagem: "/niveis/background4.jpg",
    numero: "02",
  },
  {
    titulo: "objetivos desta fase",
    descricao: [
      "Melhorar mobilidade",
      "Desenvolver consciência corporal",
      "Ganhar força",
    ],
    imagem: "/niveis/ini_objetivo.jpeg",
    numero: "03",
  },
  {
    titulo: "O que você vai desenvolver",
    descricao: [
      "Mais mobilidade liberdade de movimento",
      "Melhor controle do próprio corpo",
      "Mais confiança para treinar",
    ],
    imagem: "/niveis/ini_desenvolver.jpeg",
    numero: "04",
    ultimo: true,
  },
];

export const intermediario: Nivel[] = [
  {
    titulo: "sinais de que você é intermediário",
    descricao: [
      "Já treina ou treinou em algum momento",
      "Já desenvolveu uma base de força",
      "Sente que consegue evoluir mais",
    ],
    imagem: "/niveis/inter_inicio.jpg",
    numero: "01",
    inicio: true,
  },
  {
    titulo: "Desafios desta fase",
    descricao: [
      "Estagnação",
      "Perda de motivação",
      "Corpo já não responde como antes aos treinos",
    ],
    imagem: "/niveis/inter_desafio.jpeg",
    numero: "02",
  },
  {
    titulo: "objetivos desta fase",
    descricao: [
      "Aumentar a intensidade dos treinos",
      "Fazer movimentos complexos",
      "Melhorar a performance física",
    ],
    imagem: "/niveis/inter_objetivo.jpeg",
    numero: "03",
  },
  {
    titulo: "O que você vai desenvolver:",
    descricao: [
      "Alta capacidade física",
      "Mais potência e eficiência",
      "Corpo atlético preparado para diferentes desafios",
    ],
    imagem: "/niveis/inter_desenvolver.avif",
    numero: "04",
    ultimo: true,
  },
];

export const avancado: Nivel[] = [
  {
    titulo: "sinais de que você é avançado",
    descricao: [
      "Possui boa base física e sabe do que é capaz",
      "Treinar faz parte da sua rotina",
      "Procura algo além dos métodos tradicionais",
    ],
    imagem: "/niveis/avan_inicio.png",
    numero: "01",
    inicio: true,
  },
  {
    titulo: "Desafios desta fase",
    descricao: [
      "Risco de overtraining e lesões",
      "Falta de estímulos novos para evoluir",
      "?Exige alta precisão técnica nos movimentos?",
    ],
    imagem: "/niveis/avan_desafio.jpg",
    numero: "02",
  },
  {
    titulo: "objetivos desta fase",
    descricao: [
      "Aumentar a intensidade dos treinos",
      "Fazer movimentos complexos",
      "Melhorar a performance física",
    ],
    imagem: "/niveis/avan_objetivo.jpg",
    numero: "03",
  },
  {
    titulo: "O que você vai desenvolver:",
    descricao: [
      "Alta capacidade física",
      "Mais potência e eficiência",
      "Corpo atlético preparado para diferentes desafios",
    ],
    imagem: "/niveis/avan_desenvolver.jpg",
    numero: "04",
    ultimo: true,
  },
];
