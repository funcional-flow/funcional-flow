interface CardEtapasProps {
  numero: string;
  titulo: string;
  descricao: string;
}

export default function CardEtapas({
  numero,
  titulo,
  descricao,
}: CardEtapasProps) {
  return (
    <div className="flex">
      <h3 className="text-3xl font-bold min-w-12 tracking-widest">{numero}</h3>
      <div className="bg-yellow3 p-1 text-4xl font-bold" />
      <div className="flex flex-col pl-3">
        <h3 className="pb-2 font-semibold text-2xl">{titulo}</h3>
        <p className="text-xl">{descricao}</p>
      </div>
    </div>
  );
}
