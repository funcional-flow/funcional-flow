interface CardDifProps {
  titulo: string;
  descricao: string;
}

export default function CardDif({ titulo, descricao }: CardDifProps) {
  return (
    <div className="relative">
      <div className="bg-purple2 absolute top-1 animate-stripe-front left-1 px-10 py-1" />
      <div className="bg-yellow3 absolute top-0 animate-stripe-back left-0 px-10 py-1" />
      <div className="relative flex flex-col top-8">
        <h3 className="text-xl font-bold text-purple3">{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
