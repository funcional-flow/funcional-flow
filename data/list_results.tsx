export type Result = {
  name: string;
  age: number;
  photo: string;
  rating: number;
  quote: string;
  highlight: string;
};

export const results: Result[] = [
  {
    name: "Pedro Henrique",
    age: 34,
    photo: "/resultados/resultado1.png",
    rating: 5,
    quote:
      "Percebi que a musculação pode ser prazeroza e dinâmica. Percebi a importância de ter um core forte, me deu mais força a autoconhecimento corporal.",
    highlight: "Sem dores + 8kg eliminados",
  },
  {
    name: "Emidio Lopes",
    age: 25,
    photo: "/resultados/resultado5.png",
    rating: 5,
    quote:
      "Consegui uma namorada.",
    highlight: "Conseguiu uma namorada",
  },
  {
    name: "Juliana Martins",
    age: 41,
    photo: "/resultados/resultado2.png",
    rating: 5,
    quote:
      "Já treinava há anos, mas estava estagnado. O Rafael ajustou detalhes que eu nem percebia. Bati recordes pessoais que estavam parados há mais de dois anos.",
    highlight: "PR no agachamento +20kg",
  },
  {
    name: "Marcus Vinicius",
    age: 28,
    photo: "/resultados/resultado3.png",
    rating: 5,
    quote:
      "Consegui ter um acompanhamento que alinhasse meus objetivos entre academia, corrida e as demais atividades físicas. Uma complementando a outra sem causar problemas",
    highlight: "Acompanhamento ideal",
  },
  {
    name: "Rodrigo Levien",
    age: 28,
    photo: "/resultados/resultado4.png",
    rating: 5,
    quote:
      "Desde que comecei a treinar minha auto estima é completamente outra. Além de me sentir mais forte, mais disposto, me sinto muito melhor comigo mesmo.",
    highlight: "Postura corrigida",
  },
];
