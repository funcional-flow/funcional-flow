export type Result = {
  name: string;
  age: number;
  level: string;
  duration: string;
  photo: string;
  rating: number;
  quote: string;
  highlight: string;
};

export const results: Result[] = [
  {
    name: 'Juliana Martins',
    age: 34,
    level: 'Intermediária',
    duration: '6 meses',
    photo: '/resultados/resultado_2.jpg',
    rating: 4,
    quote:
      'Cheguei com dores crônicas nas costas e sem saber por onde começar. Em seis meses reconstruí meu movimento inteiro — hoje treino sem dor e com uma disposição que não tinha há anos.',
    highlight: 'Sem dores + 8kg eliminados',
  },
  {
    name: 'Carlos Eduardo',
    age: 41,
    level: 'Avançada',
    duration: '1 ano',
    photo: '/resultados/resultado_1.jpg',
    rating: 5,
    quote:
      'Já treinava há anos, mas estava estagnado. O Rafael ajustou detalhes que eu nem percebia. Bati recordes pessoais que estavam parados há mais de dois anos.',
    highlight: 'PR no agachamento +20kg',
  },
  {
    name: 'Fernanda Costa',
    age: 28,
    level: 'Iniciante',
    duration: '4 meses',
    photo: '/resultados/resultado_4.jpg',
    rating: 5,
    quote:
      'Nunca tinha pisado numa academia. O acompanhamento próximo me deu segurança para começar do zero. Hoje me sinto forte, confiante e finalmente gosto de treinar.',
    highlight: 'Primeira vez treinando',
  },
  {
    name: 'Ricardo Alves',
    age: 37,
    level: 'Intermediária',
    duration: '8 meses',
    photo: '/resultados/resultado_3.jpg',
    rating: 5,
    quote:
      'A vídeo-análise mudou tudo. Corrigi falhas de movimento que estavam me limitando. A evolução foi visível já nas primeiras semanas — recomendo de olhos fechados.',
    highlight: 'Postura corrigida',
  },
];
