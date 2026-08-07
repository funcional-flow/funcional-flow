type Nivel = {
  numero: string;
  titulo: string;
  descricao: string[];
  imagem: string;
  ultimo?: boolean;
  inicio?: boolean;
};

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
    inicio: true
  },
  {
    titulo: "Desafios desta fase",
    descricao: [
      "Risco de overtraining e lesões",
      "Falta de estímulos novos para evoluir",
      "?Exige alta precisão técnica nos movimentos?"
    ],
    imagem: "/niveis/avan_desafio.jpg",
    numero: "02",
  },
  {
    titulo: "objetivos desta fase",
    descricao: [
      "Aumentar a intensidade dos treinos",
      "Fazer movimentos complexos",
      "Melhorar a performance física"
    ],
    imagem: "/niveis/avan_objetivo.jpg",
    numero: "03",
  },
  {
    titulo: "O que você vai desenvolver:",
    descricao: [
      "Alta capacidade física",
      "Mais potência e eficiência",
      "Corpo atlético preparado para diferentes desafios"
    ],
    imagem: "/niveis/avan_desenvolver.jpg",
    numero: "04",
    ultimo: true,
  },
];
